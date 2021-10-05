const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
        });
        user.save().then(() => {
            res.status(200).send(user);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.get("/", async (req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send(users);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;
