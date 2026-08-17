import { mongooseConnection, getAll, getEntityByID, getOne, updateOne, createOne, deleteOne, deleteAll, findVerified } from "./controllers.js";
import express from "express";
//ROUTES
//they tell express call these funcs when getting a http request (the method names) at a specified page (link)
export default (app) => {
    let router = express.Router();

    // create new entity
    router.post("/", mongooseConnection, createOne);

    // get all entities
    router.get("/", mongooseConnection, getAll);

    // get one entity with id (middleware getEntityByID runs first and gives the user to the 2nd function)
    router.get(
        "/:id",
        mongooseConnection,
        getEntityByID,
        getOne,
    );

    // update one entity with id
    router.patch(
        "/:id",
        mongooseConnection,
        getEntityByID,
        updateOne,
    );

    // delete one with id
    router.delete(
        "/:id",
        mongooseConnection,
        getEntityByID,
        deleteOne,
    );

    // delete all
    router.delete("/", mongooseConnection, deleteAll);

    // find all by filter
    router.get(
        "/verified",
        mongooseConnection,
        findVerified,
    );

    // tells express to use this route as its default path for all of these routes
    app.use("/api/listings", router);
};