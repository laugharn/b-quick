const config = require("../workspaces/www/next.config");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next(config);
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = require("express")();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
