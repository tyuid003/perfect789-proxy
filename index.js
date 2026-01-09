const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// API Proxy endpoints
const API_BASE = 'https://perfect789.win/api/tiamut';

app.post('/api/:endpoint', async (req, res) => {
  const endpoint = req.params.endpoint;
  const targetUrl = `${API_BASE}/${endpoint}`;

  try {
    console.log(`[PROXY] ${endpoint} - Body:`, req.body);

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://perfect789.win',
        'Referer': 'https://perfect789.win/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    console.log(`[PROXY] ${endpoint} - Response:`, data.substring(0, 200));

    res.status(response.status).json(JSON.parse(data));
  } catch (error) {
    console.error(`[PROXY] Error on ${endpoint}:`, error);
    res.status(500).json({ 
      error: 'Proxy Error', 
      message: error.message 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Perfect789 API Proxy is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on port ${PORT}`);
});
