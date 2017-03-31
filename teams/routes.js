var express = require('express');
var teamsRepository = require('./teams-repository');

var router = express.Router();

router.get('/', async (req, res, next) => {
    
    try {
        var filter = {};

        if(req.query) {
            filter = req.query;
        }

        let teams = await teamsRepository.getAll(filter);
        res.json(teams);

    } catch(err) {
        res.status(500).json({error: err});
    }
});

router.get('/:id', async (req, res, next) => {

    try {
        let team = await teamsRepository.findById(req.params.id);
        res.json(team);

    } catch(err) {
        res.status(500).json({error: err});
    }
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