let chai = require('chai');
let chaiHttp = require('chai-http');
let playerRoutes = require('./routes');
let should = chai.should();

chai.use(chaiHttp);

describe('GET /players', () => {

    it('should get all players', (done) => {
        chai.request(playerRoutes)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('array');
                done();
            });            
    })

});
