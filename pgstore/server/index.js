import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";

// const REACT_APP_ACCESS_TOKEN_MP = process.env;

mercadopago.configure({
  access_token:
    "APP_USR-2101504994675711-081510-7da91e08f7fffa2e796e8e6349af7c68-86176872",
  timeout: 10000,
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("Hola, soy el server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/crear-preferencia", (req, res) => {
  const { items } = req.body;
  console.log("Received:", items);

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Invalid items array" });
  }

  const preference = {
    items: items,
    back_urls: {
      success: "https://localhost:3000/success",
      failure: "https://localhost:3000/failure",
      pending: "https://localhost:3000/pending",
    },
    auto_return: "approved",
  };

  // const pref = new Preference(client);
  // pref.create(preference).then((result) => {
  //   const preferenceId = result.body.id;
  //   res.status(200).json({ preferenceId });
  // }).catch((error) => {
  //   res.status(500).json({ error: "Failed to create preference" });
  // });
  mercadopago.preferences
    .create(preference)
    .then((result) => {
      const preferenceId = result.body.id;
      console.log("Preference created:", preferenceId);
      res.status(200).json({ preferenceId });
    })
    .catch((error) => {
      console.error("Error creating preference:", error);
      res.status(500).json({ error: "Failed to create preference" });
    });
});

// preference.create(pref).then((response) => {
//     console.log("Preference created:", response.body);
//     res.status(200).json({ preferenceId: response.body.id });
//   }).catch((error) => {
//     console.error("Error creating preference:", error);
//     res.status(500).json({ error: "Failed to create preference" });
//   });
