var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: { type: String, default: '' },
  start_time: Date,     // jshint ignore:line
  end_time: Date,       // jshint ignore:line
  location: String,
  description: String,
  speaker_role: String, // jshint ignore:line
  bar_camp: Boolean,    // jshint ignore:line
  twitter_handle: String, // jshint ignore:line
  linkedin_url: String, // jshint ignore:line
  day: String,
  image_url: String,    // jshint ignore:line
  speaker_image_url: String, // jshint ignore:line
  artists: String,
  starred_count: Number // jshint ignore:line
});

module.exports = mongoose.model('Event', EventSchema);
