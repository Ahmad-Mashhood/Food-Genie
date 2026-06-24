// Root-level Vercel serverless entry point
// Wraps the Express backend app for unified deployment
require('dotenv').config({ path: require('path').join(__dirname, '../backend/.env') });

const { app, connectDB } = require('../backend/server');

module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};
