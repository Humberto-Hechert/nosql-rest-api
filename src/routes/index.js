import express from "express";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Hello World")
    })

    app.use(express.json())
}

export default routes;