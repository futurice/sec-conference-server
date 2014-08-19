var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: { type: String, default: '' },
  start_time: Date,     // jshint ignore:line
  end_time: Date,       // jshint ignore:line
  location: String,
  description: String,
  speaker_role: String,
  bar_camp: Boolean,
  twitter_handle: String,
  linkedin_url: String,
  day: String,
  image_url: String,
  speaker_image_url: String,
  artists: String,
  starred_count: Number // jshint ignore:line
});

module.exports = mongoose.model('Event', EventSchema);
