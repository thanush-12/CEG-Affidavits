/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/login", "AuthController.login");
}).prefix("/auth");

Route.group(() => {
  Route.get("/getCategories", "FormsController.getCategories");
  Route.post("/createRequest", "FormsController.createRequest");
  Route.post("/studentRequest", "FormsController.getStudentRequests");
  Route.get("/getFAs", "FormsController.getFAs");
  Route.post("/getReq", "FormsController.getFormsBySentTo");
  Route.patch("/acceptByFA", "FormsController.acceptByFA");
  Route.patch("/rejectByFA", "FormsController.rejectByFA");
  Route.patch("/acceptByHOD", "FormsController.acceptByHOD");
  Route.patch("/rejectByHOD", "FormsController.rejectByHOD");
}).prefix("/form");

Route.group(() => {
  Route.post("/acceptByDean", "PdfsController.pdfGenerator");
  Route.patch("/rejectByDean", "PdfsController.rejectByDean");
}).prefix("/pdf");
