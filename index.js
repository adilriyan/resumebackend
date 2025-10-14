// Import json-server
const jsonServer = require('json-server');

// Create a server instance
const rbuilder = jsonServer.create();

// Use dataBase.json as your data source
const route = jsonServer.router('dataBase.json');

// Add useful middleware - includes CORS, logger, and static
const middleware = jsonServer.defaults();

// ✅ Use middleware BEFORE routes
rbuilder.use(middleware);

// Optional: Explicitly allow all origins (for extra safety)
rbuilder.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Use your routes
rbuilder.use(route);

// Dynamically choose port (Render sets process.env.PORT)
const PORT = process.env.PORT || 3000;

// Start server
rbuilder.listen(PORT, () => {
  console.log(`✅ Server running at port ${PORT} and waiting for requests`);
});
