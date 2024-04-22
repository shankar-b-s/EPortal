import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = process.env.PORT || 5000;;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/saveEvent', (req, res) => {
  const eventData = req.body;
  let existingData = [];
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    existingData = JSON.parse(data);
  } catch (err) {
    console.error('Error reading data file:', err);
  }

  existingData.push(eventData);

  fs.writeFile('data.json', JSON.stringify(existingData, null, 2), (err) => {
    if (err) {
      console.error('Error writing data to file:', err);
      res.status(500).send('Error saving event data.');
    } else {
      console.log('Event data saved successfully.');
      res.status(200).send('Event data saved successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});