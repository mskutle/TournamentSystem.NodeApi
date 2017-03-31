let Team = require('./team').Team;

let teamsRepository = {};

teamsRepository.getAll = async (filter) => {
    return await Team.find(filter);
}

teamsRepository.findById = async (id) => {
    return await Team.findById(id);
}

module.exports = teamsRepository;