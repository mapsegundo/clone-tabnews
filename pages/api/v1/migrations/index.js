import { getPendingMigrations, runPendingMigrations } from "models/migrator";

const ALLOWED_METHODS = ["GET", "POST"];

export default async function migrations(req, res) {
  if (!ALLOWED_METHODS.includes(req.method)) {
    return res.status(405).json({
      error: `Método "${req.method}" não permitido. Métodos permitidos: ${ALLOWED_METHODS.join(", ")}`,
    });
  }

  try {
    if (req.method === "GET") {
      const pendingMigrations = await getPendingMigrations();
      return res.status(200).json(pendingMigrations);
    }

    if (req.method === "POST") {
      const executedMigrations = await runPendingMigrations();
      return res.status(200).json(executedMigrations);
    }
  } catch (error) {
    console.error("Erro durante a execução das migrações:", error);
    return res.status(500).json({
      error: "Erro interno do servidor",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
