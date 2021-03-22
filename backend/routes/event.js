const eventController=require("../Controllers/events/eventController")

module.exports = function(app) {

    app.use(function (req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    app.post("/addEvents",eventController.create)
    app.delete("/:id",eventController.delete)
    app.put("/:id",eventController.update)
    app.get("/allEvents",eventController.findAll)
};

