var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: { type: String, default: '' },
  start_time: Date,     // jshint ignore:line
  end_time: Date,       // jshint ignore:line
  location: String,
  description: String,
  bar_camp: Boolean,    // jshint ignore:line
  key_talk: Boolean,    // jshint ignore:line
  day: String,
  image_url: String,    // jshint ignore:line
  starred_count: Number, // jshint ignore:line
  // 1st speaker
  artists: String,
  speaker_role: String, // jshint ignore:line
  speaker_image_url: String, // jshint ignore:line
  twitter_handle: String, // jshint ignore:line
  linkedin_url: String,  // jshint ignore:line
  // 2nd speaker
  artists_2: String, // jshint ignore:line
  speaker_role_2: String, // jshint ignore:line
  speaker_image_url_2: String, // jshint ignore:line
  twitter_handle_2: String, // jshint ignore:line
  linkedin_url_2: String,  // jshint ignore:line
  // 3rd speaker
  artists_3: String, // jshint ignore:line
  speaker_role_3: String, // jshint ignore:line
  speaker_image_url_3: String, // jshint ignore:line
  twitter_handle_3: String, // jshint ignore:line
  linkedin_url_3: String  // jshint ignore:line
});

module.exports = mongoose.model('Event', EventSchema);
