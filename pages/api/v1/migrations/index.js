import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database";

export default async function migrations(req, res) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(req.method)) {
    return res
      .status(405)
      .json({ error: `Method "${req.method}" not allowed` });
  }

  let dbClient;

  try {
    dbClient = await database.getNewClient();
    const migrationsOptions = {
      dbClient: dbClient,
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (req.method !== "POST") {
      const getMigrations = await migrationRunner({
        ...migrationsOptions,
        dryRun: true,
      });
      return res.status(200).json(getMigrations);
    }
    if (req.method === "POST") {
      const postMigrations = await migrationRunner({
        ...migrationsOptions,
        dryRun: false,
      });
      return res.status(200).json(postMigrations);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    await dbClient.end();
  }
}
