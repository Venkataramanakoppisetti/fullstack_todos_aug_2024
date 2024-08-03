const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', todoRoutes);

// Only start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;
