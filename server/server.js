const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Resume API is running. Use /download to get the resume.');
});

app.get('/download', (req, res) => {
  const file = path.resolve(__dirname, 'public', 'resume.pdf');
  res.download(file, 'Resume_NishchaySinha.pdf', (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).send("Error downloading the file.");
    }
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
