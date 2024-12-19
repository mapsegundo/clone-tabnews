import database from "infra/database";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("POST /API/V1/MIGRATIONS", () => {
  describe("Anonymous user", () => {
    describe("Retriving pending migrations", () => {
      test("For the first time", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "post",
          }
        );
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
      });
      test("For the secound time", async () => {
        const dbMigrations = (
          await database.query("Select * from pgmigrations")
        ).rows;
        expect(Array.isArray(dbMigrations)).toBe(true);
      });
    });
  });
});
