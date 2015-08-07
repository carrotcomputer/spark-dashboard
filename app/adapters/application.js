//CONNECTING TO COUCHDB
import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

//var host = new PouchDB('http://192.168.1.21:5984/spark-dashboard');
var db = new PouchDB('http://0.0.0.0:5984/spark-dashboard');

/*db.sync(host, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the conection is lost
});*///for pouch


export default Adapter.extend({
  namespace: "spark-dashboard",
  db:db,
});
