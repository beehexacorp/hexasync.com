const express = require('express');
const compression = require('compression');
const fs = require('fs');
const path = require('path');

const app = express();

// Sử dụng nén Brotli nếu có thể
app.use(compression({
  brotli: {
    enabled: true,
    zlib: {
      level: 11,
    }
  }
}));

// Phục vụ các tệp tĩnh, ưu tiên các tệp .br nếu có
app.get('*.css', (req, res, next) => {
  const brotliFilePath = path.resolve(__dirname, 'assets/css', `${req.path}.br`);
  if (fs.existsSync(brotliFilePath)) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'text/css');
    res.sendFile(brotliFilePath);
  } else {
    next();
  }
});

// Phục vụ các tệp tĩnh khác
app.use(express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
