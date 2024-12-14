const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout, stderr) {
    if (stderr) {
      process.stderr.write(".");
      checkPostgres();
      return;
    }

    if (stdout.search("accepting connections") === -1) {
      console.log("Postgres is ready to accept connections");
    } else {
      process.stdout.write(".");
      checkPostgres();
      return;
    }
  }
}

checkPostgres();
