var server = require('../server')
var ds = server.dataSources.mypostgresl;

ds.automigrate(['skill', 'tag'], function(er) {
  if (er) throw er;
  console.log('Looback tables created in ', ds.adapter.name);
  ds.disconnect();
});
