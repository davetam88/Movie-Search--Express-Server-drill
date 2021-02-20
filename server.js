require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const MOVIEDEX = require('./moviedex.json')
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

// valid movie genre list
const validTypes = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Grotesque', 'History', 'Horror', 'Musical', 'Romantic', 'Spy', 'Thriller', 'War', 'Western']

// -------- validation middleware
app.use(function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    const authToken = req.get('Authorization')

    if (!authToken || authToken.split(' ')[1] !== apiToken)
    {
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    console.log('validate bearer token middleware')
    // move to the next middleware
    next()
})

// -------- end point /types - return the valid genre types.
function handleGetTypes(req, res) {
    res.json(validTypes)
}
app.get('/types', handleGetTypes)


// -------- end point /pokemon
function handleMovieSearch(req, res) {
    const { genre = '', country = '', avg_vote = '' } = req.query;

    // search for name
    //  let response = MOVIEDEX.pokemon;
    let response = MOVIEDEX;

    if (genre)
    {
        response = response.filter(item =>
            item.genre.toLowerCase().includes(genre.toLowerCase())
        )
    }

    if (country)
    {
        response = response.filter(item =>
            item.country.toLowerCase().includes(country.toLowerCase())
        )
    }

    if (avg_vote)
    {
        response = response.filter(item =>
            Number(item.avg_vote) >= Number(avg_vote)
        )
    }

    res.send(response);
}
app.get('/movie', handleMovieSearch)


const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

/*
  some endpoints
  http://localhost:8000/types
  http://localhost:8000/movie?genre=Action
  http://localhost:8000/movie?country=United States
  http://localhost:8000/movie?avg_vote=5
*/
