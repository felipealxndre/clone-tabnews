// metodo que aguarda todos os serviços estarem prontos

import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      // se não responder um json vai estourar um erro e dar retry
      const responseBody = await response.json();
    }
  }
}

export default {
  waitForAllServices,
};
