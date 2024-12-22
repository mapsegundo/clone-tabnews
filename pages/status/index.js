import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdateAt />
      <DatabaseStatus />
    </>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Database</h2>
      {!isLoading && data ? (
        <div>
          <div>Versão: {data.dependencies.database.version}</div>
          <div>
            Máximo de Conexões: {data.dependencies.database.max_connections}
          </div>
          <div>
            Conexões Abertas: {data.dependencies.database.open_connections}
          </div>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}

function UpdateAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updateAtText = "Carregando...";

  if (!isLoading && data) {
    updateAtText = new Date(data.update_at).toLocaleString("pt-BR");
  }
  return <p>Última atualização: {updateAtText}</p>;
}
