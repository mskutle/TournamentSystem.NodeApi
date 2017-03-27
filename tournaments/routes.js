var express = require('express');
var router = express.Router();
var Tournament = require('./tournament');
var moment = require('moment');

router.get('/', async (req, res, next) => {

	try {

		let tournaments = await Tournament.find({});
		res.json(tournaments);

	} catch(err) {
		res.json({error: err});
	} 
});

router.get('/:id', async (req, res, next) => {

	try {

		let tournament = await Tournament.findById(req.params.id);

		if(!tournament)
			res.sendStatus(404);

		res.json(tournament);

	} catch(err) {
		res.json({error: err}).status(500);
	}

});

router.get('/:id/teams', async (req, res, next) => {

	try {
		
		let tournament = await Tournament.findById(req.params.id).populate('teams').exec();
		
		if(!tournament)
			res.sendStatus(404);
		
		res.json(tournament.teams);

	} catch(err) {
		res.json({error: err}).status(500);
	}	
});

router.post('/', async (req, res, next) => {

	let t = new Tournament(req.body);

	t.validate((err) => {
		if(err)
			res.json(err).status(400);
	})

	try {

		let tournament = await t.save();
		res.json(tournament).status(201);

	} catch(err) {
		res.json({error: err}).status(500);
	}
});

router.put('/:id', async (req, res, next) => {

	let body = req.body;
	body.modifiedAt = moment();

	try {

		let t = await Tournament.findByIdAndUpdate(req.params.id, body, { new: true, upsert: true }).populate('team').exec();
		res.json(t);

	} catch(err) {
		res.json({error: err}).status(500);
	}
});

router.delete('/:id', async (req, res, next) => {

	try {

		let t = await Tournament.findByIdAndRemove(req.params.id);
		res.json(t);

	} catch(err) {
		res.json({error: err}).status(500);
	}
	 
});

module.exports = router;