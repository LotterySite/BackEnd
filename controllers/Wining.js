const mongoose = require("mongoose");
const { Wining, WiningSchema } = require("../models/Wining");
const { User } = require("../models/user");
const AddWining = async (req, res) => {
    try {
        let n =new Wining(req.body) ;
        await n.save();
        return res.send(n);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
const GetAllUsers = async (req, res) => {
    let n = req.params._id;
    try {
        let users = await User.filter(a => a.arr_orders.find(x => x.itemId = n))
        return res.send(users);
    }
    catch (e) {
        return res.status(402).send(e);
    }
}
const GetWinnerByWiningId = async (req, res) => {
    let t = req.params._winingId;
    try {
        let n = await Wining.findById(t)
        let winner = await User.findById(n.id)
        return res.send(winner);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}
const GetWinnerByProductId = async (req, res) => {
    let t = req.params._productId;
    try {
        let w = await Wining.find(a => { a.itemId = t })
        let winner = await User.findById(w.userId)
        return res.send(winner);
    }
    catch (e) {
        return res.status(409).send(e);
    }
}
