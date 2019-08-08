const express = require("express"),
           bp = require("body-parser"),
         port = 8000,
          app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(bp.urlencoded({ extended: true }));

const users = [
    {name: "Michael", email: "michael@codingdojo.com"}, 
    {name: "Jay", email: "jay@codingdojo.com"}, 
    {name: "Brendan", email: "brendan@codingdojo.com"}, 
    {name: "Andrew", email: "andrew@codingdojo.com"}
];

app.get("/", (req, res) => {
    res.render("index", {users});
});

app.post("/process", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});