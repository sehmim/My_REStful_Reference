const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// GET LIST OF RECORDS FROM DATABASE
router.get('/ninjas', (req, res)=>{
    res.send({type: 'GET'});
})

// ADD RECORD TO DATABASE
router.post('/ninjas', (req, res)=>{
    // Create new instance of Ninja and save to DB
    Ninja.create(req.body).then((ninja)=>{
        // Once saved THEN it will SEND the response data as obj ninja
        res.send(ninja)
    });
})

// UPDATE RECORDS FROM DATABASE
router.put('/ninjas:id', (req, res)=>{
    res.send({type: 'GET'});
})

// DELETE RECORDS FROM DATABASE
router.delete('/ninjas:id', (req, res)=>{
    res.send({type: 'GET'});
})

module.exports = router;