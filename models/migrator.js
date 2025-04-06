import { resolve } from "node:path";
import migrationRunner from "node-pg-migrate";
import database from "infra/database";

export const MIGRATIONS_CONFIG = {
  databaseUrl: process.env.DATABASE_URL,
  dir: resolve("infra", "migrations"),
  direction: "up",
  verbose: true,
  migrationsTable: "pgmigrations",
};

async function withDatabaseConnection(callback) {
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    if (!dbClient) {
      throw new Error(
        "Não foi possível estabelecer conexão com o banco de dados"
      );
    }

    return await callback(dbClient);
  } finally {
    if (dbClient) {
      await dbClient?.end();
    }
  }
}

export async function getPendingMigrations() {
  return await withDatabaseConnection(async (dbClient) => {
    return await migrationRunner({
      ...MIGRATIONS_CONFIG,
      dbClient,
      dryRun: true,
    });
  });
}

export async function runPendingMigrations() {
  return await withDatabaseConnection(async (dbClient) => {
    return await migrationRunner({
      ...MIGRATIONS_CONFIG,
      dbClient,
      dryRun: false,
    });
  });
}
