const { json } = require("micro");

module.exports = async (req, res) => {
  const { username, password } = await json(req);

  if (username == "laugharn" && password == "password") {
    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify({ id: 1, username: "laugharn", created_at: new Date() })
    );
  } else {
      res.sendStatus(403);
  }
};
