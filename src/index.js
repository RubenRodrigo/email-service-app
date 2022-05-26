const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening on port", port);
});

app.post("/", async (req, res) => {
  const message = req.body.message;
  const labReport = decodeBase64Json(message.data);
  try {
    console.log(`Email svc: Report ${labReport.lab_result} being procesed`);
    sendEmail();
    console.log(`Email svc: Report number ${message.messageId} email sent`);
    res.status(204).send();
  } catch (ex) {
    console.log(`Email svc: Report ${message.messageId} failed ${error}`);
    res.status(500).send();
  }
});

function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, "base64").toString());
}

function sendEmail() {
  console.log("Sending email");
}
