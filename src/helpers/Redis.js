'use strict';

const config = require('../config');

const redis = require('redis');

const host = 'db-redis-ams3-57299-do-user-11736572-0.b.db.ondigitalocean.com';
const port = '25061';
const username = 'default';
const password = 'AVNS_0Du6p-_PDfCN-lf';
const url = `redis://${username}:${password}@${host}:${port}`;

// let client;
const client = redis.createClient(url, { tls: {} });
// const client = redis.createClient();

const asyncRedis = require('async-redis');
const asyncRedisClient = asyncRedis.decorate(client);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = asyncRedisClient;
