var express = require('express');
var router = express.Router();

var Player = require('./player');

router.get('/', async (req, res, next) => {

    try {

        var players = await Player.find({});
        res.json(players);

    } catch (err) {
        err => res.status(500).json({error: err});
    }

});

router.get('/:id', async (req, res, next) => {

    try {

        let player = await Player.findById(req.params.id);
        
        if(!player)
            res.sendStatus(404);

        res.json(player);

    } catch(err) {
        res.status(500).json({error: err});
    }

});

router.post('/', async (req, res, next) => {

    let player = new Player(req.body);

    player.validate((err) => {
        if(err)
            res.status(500).json(err);
    });

    try {

        let p = await player.save();
        res.status(201).json(p);

    } catch(err) {
        res.json({error: err}).status(500);
    }
    
});

router.delete('/:id', async (req, res, next) => {

    try {

         let player = await Player.findByIdAndRemove(req.params.id);
         res.json(player);

    } catch(err) {
        res.json({error: err}).status(500);
    }
   
});

router.put('/:id', async (req, res, next) => {

    try {

        let player = await Player.findById(req.params.id);
        let p = await Object.assign(player, req.body).save();

        res.json(p);

    } catch(err) {
        res.status(500).json({error: err});
    }

});

module.exports = router;
