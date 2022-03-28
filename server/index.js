const app = require("express")();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const { json } = require("express");
const {
  entrance,
  exit,
  publicArrivalPath,
  publicDeparturePath,
  reservedArrivalPath,
  reservedDeparturePath,
} = require("./helper");
const { httpPost } = require("./api");

app.use(json());

// POST /notify
app.all("/get-data/", async (req, res) => {
  const { plateText, gateType, timestamp } = req.body;
  let response = '';
  if (gateType.toLowerCase() === entrance) {
    let body = {
      license_plate: plateText,
      arrival: timestamp,
    };
    try {
      response = await httpPost(publicArrivalPath)(body);
    } catch (error) {
      console.log("Error from public arrival call: ", error);
    }
  }

  if(gateType.toLowerCase() === exit) {
    let body = {
      license_plate: plateText,
      departure: timestamp,
    };

    try {
      response = await httpPost(publicDeparturePath)(body);
    } catch (error) {
      console.log("Error from public departure call", error);
    }
  }

  if (response) {
    let resBody = await response.json();
    console.log("resBody", resBody)
    return res.json({ message: "Successfully !!" });
  }

  return res.json({ message: "Error !!" });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
