import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";

const token = process.env.REACT_APP_ACCESS_TOKEN_MP;
const testtoken =
  "APP_USR-108363577051863-081514-df8ee2b0ac776ab33c5ae290d0550120-1943750874";

mercadopago.configure({
  access_token: testtoken,
  timeout: 1000,
});

const app = express();
const port = 3001;

const allowedOrigins = [
  "http://pgstore-kmx3ibks5-pedrosb90-s-team.vercel.app",
  "http://localhost:3000",
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use((req, res, next) => {
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  // );
  // res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  // res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

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
      success: "https://pgstore-delta.vercel.app//success",
      failure: "https://pgstore-delta.vercel.app//failure",
      pending: "https://pgstore-delta.vercel.app//pending",
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
