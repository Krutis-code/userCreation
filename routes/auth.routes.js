const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const { authJwt } = require('../middlewares');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      // verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
  app.get("/api/auth/getAllUsers",[authJwt.verifyToken],  controller.getAllUsers);
  app.post("/api/auth/setFavourite", [authJwt.verifyToken], controller.setFavourite);
  
  // app.get("/api/getAllCategories", controller.getAllCategories);
};