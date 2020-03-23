
var fs = require('fs');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  res.send(data);
});

app.get('/allItems', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  res.send(data);
});
app.get('/allItemsAsArray', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  data = [...data.fishes, ...data.clothing, ...data.insects, ...data.fossils, ...data.furniture, ...data.birthdays]
  res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/fishes', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  data.fishes.push(req.body)
  fs.writeFileSync('./database/acnh-data.json', JSON.stringify(data));
  res.send('Item Saved');
});

app.post('/insects', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  data.insects.push(req.body)
  fs.writeFileSync('./database/acnh-data.json', JSON.stringify(data));
  res.send('Item Saved');
});

app.post('/clothing', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  data.clothing.push(req.body)
  fs.writeFileSync('./database/acnh-data.json', JSON.stringify(data));
  res.send('Item Saved');
});

app.post('/birthdays', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  data.birthdays.push(req.body)
  fs.writeFileSync('./database/acnh-data.json', JSON.stringify(data));
  res.send('Item Saved');
});

app.post('/fossils', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./database/acnh-data.json'))
  data.fossils.push(req.body)
  fs.writeFileSync('./database/acnh-data.json', JSON.stringify(data));
  res.send('Item Saved');
});
