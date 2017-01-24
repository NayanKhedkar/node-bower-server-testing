var database = require('./database').init();
var webserver = require('./webserver').init();
 console.log('in index.js');
var sync = database.Package.sync().then( function () {
    console.log('databasesync()');
    return database.onSync.bind(database);
}).then(function () {
    console.log('server started');
    webserver.app.set('pkg', database.Package);
    webserver.listen(process.env.PORT || 5000);
});
