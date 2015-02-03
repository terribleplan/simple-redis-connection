var url = require('url');
var redis = require("redis");

module.exports = function conntectToRedis(uri) {
    var redisURL = url.parse(uri);
    var client = redis.createClient(redisURL.port || 6379, redisURL.hostname || "localhost", {
        no_ready_check: true
    });
    if (client.auth !== null) {
        client.auth(redisURL.auth.split(":")[1]);
    }
    return client;
};
