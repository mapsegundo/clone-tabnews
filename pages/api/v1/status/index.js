import database from "infra/database.js";
import { InternalServerError, MethodNotAllowedError } from "infra/errors.js";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(getHandler);

export default router.handler({
  onNoMatch: onNoMatchHandler,
  onError: onErrorHandler,
});

function onNoMatchHandler(req, res) {
  const publicErrorObject = new MethodNotAllowedError();
  res.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, req, res) {
  const publicErrorObject = new InternalServerError({
    cause: error,
  });
  res.status(500).json({ publicErrorObject });
}

async function getHandler(req, res) {
  const updateAt = new Date().toISOString();

  const databaseVersionResult = await database.query({
    text: "SHOW server_version",
  });
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query({
    text: "SHOW max_connections",
  });
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  res.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        open_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}
