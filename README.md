## >> App Name:

Movie-Search--Express-Server-drill

## >> APP Summary:

This project builds an Express Server with a secured API endpoint so that it can be safely opened to the public. 

This APP allows users to query from a huge movie dataset and be able to filter the search by genre, country, or average vote.

Note that endpoint only responds when given a valid Authorization header with a Bearer API token value. You can use the following page link to generate one  :

 [UUID generator](https://www.uuidgenerator.net/version1)

Once it's generated, place the UUID string inside a .env file with the following syntax.
API_TOKEN=YOUR-UUID


## >> Query String Parameters

- genre -  search for whether the Movie's genre includes the specified string. The search is case insensitive. (example genre=Action)
- country - search for whether the Movie's country includes the specified string.  The search should be case insensitive. (example country=United States)
- avg_vote -  search for Movies with an average vote(avg_vote) that is greater than or equal to the supplied number.

## >> Sample Endpoints

http://localhost:8000/movie

http://localhost:8000/movie?genre=Action

http://localhost:8000/movie?country=United States

http://localhost:8000/movie?avg_vote=5


## >> Screenshots

API query with Authorization header

![main page](images/main.jpg)

React Fetch Client used for testing out the CORS middleware

![main page](images/main2.jpg)


## >> Technologies used in this APP:

* Express Server
* app.get API
* Express middleware
> API tokens
> Authorization headers
* doenv (for the .env API authehitic key file)
> CORS
> Helmet
* React client

-> Javascript: ES6

-> Tools
* Postman
* VSC Debugger
* nodemon 
* NPM
* morgan loggging tool


## >> [Github Link](https://github.com/davetam88/Movie-Search--Express-Server-drill/)



