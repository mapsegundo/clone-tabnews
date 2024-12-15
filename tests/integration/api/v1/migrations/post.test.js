import database from "infra/database";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query({
    text: "drop schema public cascade; create schema public;",
  });
});

test("POST TO /API/V1/MIGRATIONS SHOULD RETURN 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "post",
  });

  const responseBody = await response.json();
  const dbMigrations = (await database.query("Select * from pgmigrations"))
    .rows;

  expect(Array.isArray(responseBody)).toBe(true);
  expect(Array.isArray(dbMigrations)).toBe(true);
});
