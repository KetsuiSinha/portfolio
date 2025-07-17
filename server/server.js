const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Resume API is running. Use /download to get the resume.');
});


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
