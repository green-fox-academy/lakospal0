'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes')
test('groot endpoint pass', (t) => {
    request(app)
        .get('/groot')
        .expect('Content-Type', /json/)
        .expect(200)
        .query({ message: 'message' })
        .end(function(err, res) {
            let message = {
                message: 'message',
                translated: "I am groot!"
            }
            t.deepEqual(res.body, message, "status: ok")
            t.end();
        })
});

test('groot endpoint error', (t) => {
    request(app)
        .get('/groot')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            let error = 'I am groot!'
            t.deepEqual(res.body, error, "status: ok")
            t.end();
        })
});