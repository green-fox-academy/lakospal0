const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('yondu endpoint', (t) => {
    request(app)
        .get('/yondu')
        .expect('Content-Type', /json/)
        .expect(200)
        .query({
            distance: '100',
            time: '20',
        })
        .end(function(err, res) {
            let meaningfulName = {
                distance: '100',
                time: '20',
                speed: 5
            }
            t.deepEqual(res.body, meaningfulName, "status: ok")
            t.end();
        })
});