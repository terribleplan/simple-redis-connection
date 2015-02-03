simple-redis-connection
=======================
Pass in a redis URI, get back a connection object.
```js
var redisConn = require('simple-redis-connection')("redis://rediscloud:somePassword@something.garantiadata.com:12345");

//now use the redis connection normally
```