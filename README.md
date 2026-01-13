🔗 URL Shortener – Backend API

A simple and efficient URL Shortener backend service built using Node.js, Express.js, and MongoDB.
This API allows users to generate short URLs and redirect to the original URLs while tracking visit history.

** Features **

Generate short URLs for long links,

Redirect short URLs to original URLs,

Track visit history (timestamps),

RESTful API design,

MongoDB database using Mongoose,

ES Modules support,

** Tech Stack **

Node.js

Express.js

MongoDB

Mongoose

NanoID (for unique short URLs)

📁 Project Structure

URL/
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   └── url.js
├── index.js
├── package.json
└── README.md

** Installation & Setup **

1. Clone the repository

   git clone https://github.com/Daniel001x/short-url.git
   
   cd short-url

3. Install dependencies

   npm install

4. Start MongoDB

    Make sure MongoDB is running locally:

6. Configure Environment Variables
   
   Create a .env file:

7. Start the Server

   npm start

  ** API Endpoints **

   Create Short URL
   
** POST /url

Request Body

{
  "url": "https://example.com"
}


** Response

{
  "shortId": "abc123"
}

** Redirect to Original URL

GET /:shortId

Automatically redirects to the original URL and logs visit timestamp.

** Get URL Analytics **

GET /url/analytics/:shortId

Response

{
  "totalClicks": 5,
  "visitHistory": [
    { "timestamp": 1700000000 },
    { "timestamp": 1700000100 }
  ]
}

** Database Schema **
{
  shortId: String,
  redirectURL: String,
  visitHistory: [{ timestamp: Number }],
  createdAt: Date,
  updatedAt: Date
}

** Best Practices Used **

Clean MVC folder structure

ES Module syntax

MongoDB indexing for fast lookups

Timestamp-based analytics

Error handling & validation

** Future Improvements **

Authentication (JWT)

Rate limiting

Custom short URLs

Expiry time for URLs

Frontend dashboard


