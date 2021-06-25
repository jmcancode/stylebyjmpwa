import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.use("/client/public/**", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/ya-server", function (req, res) {
  res.send("SBJM Footwear server is connected");
});

app.listen(port, () => console.log(`SBJM Footwear Server is on PORT ${port}`));
