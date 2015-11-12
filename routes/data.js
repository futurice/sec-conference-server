var restify = require('express-restify-mongoose');
var Artist = require('../api/models/artist');
var Info = require('../api/models/info');
var News = require('../api/models/news');
var Event = require('../api/models/event');
var Location = require('../api/models/location');
var Festival = require('../api/models/festival');
var Localise = require('../lib/localise');

function shiftTimes(item) {
  onlyAttributes = ['start_time', 'end_time'];

  Object.keys(item)
    .filter(function(key) {
      return onlyAttributes.indexOf(key) > -1;
    })
    .forEach(function(key) {
      // add one hour for time attributes
      var shiftedTimestamp =
        new Date(item[key]).getTime() +
        60 * 60 * 1000/*ms*/;
      item[key] = new Date(shiftedTimestamp);
    });
}

function transformItem(item) {
  shiftTimes(item);
}

function transformResult(result) {
  if (result instanceof Array) {
    result.forEach(function(item) {
      transformItem(item);
    });
  } else {
    transformItem(result);
  }
  return result;
}

module.exports = function(app, apiVersion) {
  restify.defaults({
    outputFn: Localise.localiseApiCallResult,
    version: apiVersion,
    private: ['__v']
  });

  restify.serve(app, Artist);
  restify.serve(app, Info, {
    plural: false,
    contextFilter: function(model, req, cb) {
      // Sort by creation timestamp (included in Mongo's _id field)
      cb(model.find().sort('_id'));
    }
  });
  restify.serve(app, News);
  restify.serve(app, Event, {
    outputFn: function(req, res) {
      res
        .status(req.erm.statusCode)
        .json(
          transformResult(req.erm.result)
        );
    }
  });
  restify.serve(app, Location);
  restify.serve(app, Festival, { plural: false });
};
