var mongoose = require('mongoose');

var TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Team = mongoose.model('Team', TeamSchema);

module.exports = {Team, TeamSchema};