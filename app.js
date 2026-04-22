require('dotenv').config()
const helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const OPENTDB_API = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean'
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/quiz-items', async (req, res) => {
  const MAX_RETRIES = 10;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log("Quiz Data Success");
      const response = await fetch(OPENTDB_API);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      // validate structure BEFORE sending to React
      if (!data || !Array.isArray(data.results)) {
        throw new Error('Invalid API structure');
      }

      return res.json({
        
        success: true,
        questions: data.results
      });

    } catch (err) {
      console.log(`Attempt ${attempt} failed:`, err.message);

      // small delay
      await new Promise(r => setTimeout(r, 300 * attempt));
    }
  }

  res.status(500).json({
    success: false,
    error: 'Failed to load quiz data'
  });
});

app.get('/', (req, res) => {
  res.send("Test baby")
})

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(`Error ${err.status || 500}: ${err.message}`)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app