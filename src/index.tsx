import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de App",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-11-11 09:00:00"),
        },
        {
          id: 2,
          title: "Pagamento de App",
          type: "withdraw",
          category: "Finanças",
          amount: 230, 
          createdAt: new Date("2021-02-11 13:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
