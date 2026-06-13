// importa a função exec
const { exec } = require("node:child_process");

function checkPostgres() {
  // handleReturn é o callback, ou seja, uma função que o Node chama
  // quando o comando termina, passando o resultado
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout, stderr) {
    // Retorna -1 se não achar a string "accepting connections"
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".")
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgrees está pronto e aceitando conexões!\n")
  }
}

process.stdout.write("\n\n🔴 Aguardando o Postgres aceitar conexões");

checkPostgres();
