test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  const parseUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(parseUpdateAt).toBe(responseBody.update_at);

  expect(responseBody.dependencies.database.version).toBe("16.0");
  expect(responseBody.dependencies.database.max_connections).toBe(100);
  expect(responseBody.dependencies.database.open_connections).toBeGreaterThan(
    0
  );
});
