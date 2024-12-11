import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(req, res) {
  const dbClient = await database.getNewClient();
  const migrationsOptions = {
    dbClient: dbClient,
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  try {
    if (req.method !== "POST") {
      const getMigrations = await migrationRunner({
        ...migrationsOptions,
        dryRun: true,
      });
      await dbClient.end();
      return res.status(200).json(getMigrations);
    }
    if (req.method === "POST") {
      const postMigrations = await migrationRunner({
        ...migrationsOptions,
        dryRun: false,
      });
      await dbClient.end();
      return res.status(200).json(postMigrations);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
