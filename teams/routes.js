var express = require('express');
var router = express.Router();

var Team = require('./team');

router.get('/', (req, res, next) => {
  
    Team.find({}, (err, docs) => {
        if(err)
            res.json({error: err});

        res.json(docs);
    })
});

router.get('/:id', (req, res, next) => {

    Team.findById(req.params.id, (err, doc) => {

        if(err)
            res.json({error: err});

        res.json(doc);
    });

});

router.post('/', (req, res, next) => {

    let team = new Team(req.body);

    team.save((err, doc) => {
        if(err)
            res.json({error: err});

        res.json(doc).status(201);
    });
});

module.exports = router;