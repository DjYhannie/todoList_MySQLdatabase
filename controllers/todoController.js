//import connection
const conn = require('../database');
const {DataTypes} = require('sequelize');

//import model
const Todo = require('../models/todo')(conn, DataTypes);

module.exports = {
    //add todo
    async getAllTodo(req, res){
        try {
            const todos = await Todo.findAll({raw: true});
            if(!todos)  return res.status(400).send("Something went wrong");
            res.render('index',{title: "Todos", data: todos});
        } catch (error) {
            res.status(500).json({message: error, error: true});
        }
    },
    //post
    async addTodo(req, res){
        try {
            const todoToAdd = await Todo.create(req.body);
            const todo = await todoToAdd.save();
            if(!todo) return res.status(400).send("Something went wrong");
            res.redirect('/todo/get');
        } catch (error) {
            res.status(500).json({message: error, error: true});
        }
    },
    //delete
    async deleteTodo(req, res){
        const id = req.body.id;
        try {
            const todo = await Todo.destroy({
                where: {
                    id: id
                }
            });
            if(!todo) return res.status(400).send("Something went wrong");
            res.redirect('/todo/get');
        } catch (error) {
            res.status(500).json({message: error, error: true});
        }
    },

    //view update
    async getUpdateview(req, res){
        const id = req.params.id;
        try {
            const todo = await Todo.findOne({
                where: {
                    id: id
                }
            });
            if(!todo)  return res.status(400).send("Something went wrong");
            res.render('update', {data: todo});
        } catch (error) {
            res.status(500).json({message: error, error: true});
        }
    },
    //update
    async updateTodo(req, res){
        const id = req.params.id;
        console.log(id);
        try {
            const todo = await Todo.update(req.body,{
                where: {
                    id:id
                },
            });
            if(!todo) return res.status(400).send("Something went wrong");
            res.redirect('/todo/get');
        } catch (error) {
            res.status(500).json({message: error, error: true});
        }
    }
    
}
