const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// In-memory database
const urlDatabase = {};

app.use(bodyParser.json());

// Endpoint to shorten the URL
app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl || typeof longUrl !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing URL' });
  }

  // Generate a short code
  const shortCode = Math.random().toString(36).substring(2, 8);
  urlDatabase[shortCode] = longUrl;

  const shortUrl = `http://localhost:${PORT}/${shortCode}`;
  res.json({ shortUrl });
});

// Endpoint to redirect to the original long URL
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const longUrl = urlDatabase[shortCode];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

app.listen(PORT, () => {
  console.log(`URL Shortener running at http://localhost:${PORT}`);
});


//call
// Invoke-RestMethod -Method POST -Uri http://localhost:5000/shorten `
//   -Body '{"longUrl": "https://www.linkedin.com/in/nimish-sahu-a611a1224"}' `
//   -ContentType "application/json"


//   or curl -Method POST -Uri http://localhost:5000/shorten `
// >> -Headers @{"Content-Type"="application/json"} `
// >> -Body '{"longUrl": "https://www.linkedin.com/in/nimish-sahu-a611a1224"}'

