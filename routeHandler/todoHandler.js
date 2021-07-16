const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../scema/todoScema');

const Todo = new mongoose.model("Todo", todoSchema);




router.get('/', async (req, res) => {

})

router.get('/:id', async (req, res) => {

})

router.post('/', async (req, res) => {

    const newTodo = new Todo(req.body);
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error"
            })
        } else {
            res.status(200).json({
                message: "Thank You created a new Data"
            })
        }
    });



})

router.post('/all', async (req, res) => {

    await Todo.insertMany(req.body, (err) => {

        if (err) {
            res.status(500).json({
                error: "There was a server side error!"
            })
        } else {
            res.status(200).json({
                message: "Todo was insertedMany Successfully"
            })
        }

    })






})

router.put('/:id', async (req, res) => {

})

router.delete('/:id', async (req, res) => {

})



module.exports = router;