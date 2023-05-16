const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends",
    friend: "Jack Boo",
  });
}

function postMessage(req, res) {
  console.log(res);
}

module.exports = { getMessages, postMessage };
