sec-conference-server
==============

**Forked from [festapp-server](https://github.com/futurice/festapp-server)**

* Install MongoDB and Redis.
* Install dependencies: `npm install`
* When developing locally: `node import-data.js`
* Run the project: `npm start`

The server listens in port 8080 by default. The port can be changed by setting environment variable PORT.

## Admin panel

Admin panel for editing artist, event and other info in the database is available at `/admin`.

## API Documentation

### Get artists
`GET /api/v1/artists`

**Response**
```json
[
  {
    "picture": "public/BadFinance.jpg",
    "quote": "”Having fun! Everyone altogether, let's rock!”",
    "content": "<p>\r\nBAD finance was formed in the early 2011 by three guys, Sakari, Antti and Jari, all working at Futurice Tampere. The band started reheasing at Jari's student dorm in Hervanta but after Futurice office moved into bigger premises the boys got their own band room.</p>\r\n",
    "featured": false,
    "status": "show",
    "founded": 2012,
    "genre": ["Love Metal"],
    "highlights": ["Bad Finance rocked the place at Futurice Christmas Party 2012."],
    "youtube": "https://www.youtube.com/watch?v=xRKzk0tKchE",
    "spotify": "",
    "contact_info": "Generic contact info, ie. email and phone number",
    "press_image": "public/BadFinance.jpg",
    "credits": "Photo: Futurice Oy",
    "place": 0,
    "_id": "53486eaaead3150200ca7919",
    "albums": ["First Album (2012)", "Second Album (2013)", "Third Album (2014)"],
    "members": ["Mike Arvela", "Sakari Hyöty", "Antti Mattila"],
    "name": "Bad Finance"
  }
]
```

### Get Info
`GET /api/v1/info`

**Response**
```json
[
  {
    "title": "Frequently Asked Questions",
    "image": "",
    "content": "<p><strong>First question</strong><br><br>A comprehensive response<br><br>Second question<br>A comprehensive response<br><br><br></p>\r\n",
    "place": 7,
    "_id": "53486eaaead3150200ca791a"
  }
]
```

### Get news

`GET /api/v1/news`

**Response**
```json
[
  {
    "title": "An example news item number one!",
    "image": "",
    "teaser_text": "This is a teaser text for the news article.",
    "content": "<p>This is the content of the article, HTML formatted to your liking.</p><br><br>\r\n",
    "time": "1970-01-17T08:03:16.129Z",
    "status": "show",
    "_id": "53486eaaead3150200ca791d"
  }
]
```

### Get locations
`GET /api/v1/locations` or `GET /api/v1/locations?type=RESTAURANT`

type can `STAGE` or `RESTAURANT`

**Response**
```json
[
  {
    "x": 100,
    "y": 100,
    "width": 100,
    "height": 100,
    "type": "STAGE",
    "_id": "53486eaaead3150200ca791e",
    "name": "Niitty",
    "description": "This is a stage"
  },
  {
    "x": 300,
    "y": 300,
    "width": 100,
    "height": 100,
    "type": "STAGE",
    "_id": "53486eaaead3150200ca791f",
    "name": "Ranta",
    "description": "This is a stage"
  }
]
```

### Get festival
`GET /api/v1/festival`

**Response**
```json
[
  {
    "name": "Foo",
    "organizer": "Bar",
    "start_date": "2014-04-17T04:07:26.787Z",
    "end_date": "2014-04-17T04:07:26.787Z",
    "sponsors": [
      "Futurice"
    ],
    "city": "Turku",
    "country": "Finland",
    "coordinates": {
      "lat": 51.503363,
      "lon": -0.1276250
    }
  }
]
```

### Get events
`GET /api/v1/events`

**Response**
```json
[
  {
    "title": "Foo",
    "start_time": "2014-04-12T10:00:00.000Z",
    "end_time": "2014-04-12T12:00:00.000Z",
    "location": "Niitty",
    "_id": "53486eaaead3150200ca791e",
    "artists": ["Tapani Kansa"],
    "description": "This is a stage",
    "bar_camp": "true",
    "day": "Friday",
    "starred_count": 2
  }
]
```
### Starring events

`POST /api/v1/events/:event_id/star`

`user_id` parameter must be set in the POST body. `user_id` is used to uniquely identify users and one user can star one event only once. `event_id` is the database id of event.

### Service integrations

[List of integrated services](Services.md)

### Getting localised data

Append `lang=<lang>` to the request, f.ex. `/api/v1/artists?lang=fi`

### Localisation API
* `GET /api/v1/localisation/:key` (`key` is of format `<fieldname>-<value>-<fieldtype>-<lang>`)
* `POST /api/v1/localisation/` (Accepts JSON in the form `{ 'key' : <key>, 'val' : <value>}`)

