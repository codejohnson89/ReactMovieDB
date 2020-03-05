import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Poster from './modules/Poster';

function Home() {
    const [movieData, setMovieData] = useState([]);
    const [baseURL, setBaseURL] = useState([]);

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ae6887d6afcef7f295ee5ce27afa2389&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then((res) => setMovieData(res.data.results))
        .catch(err => console.log)
    }, [])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/configuration?api_key=ae6887d6afcef7f295ee5ce27afa2389')
            .then((res) => setBaseURL(res.data))
    }, [])

    // console.log(movieData)
    return (
        <div>
            <h1>Home Page</h1>
            <Container>
                <Row>
                    {movieData && movieData.map((movie) => <Col sm={12} md={4}><Poster image={movie.backdrop_path} title={movie.title} rating={movie.vote_average}/></Col>)}
                </Row>
            </Container>
            <img src={`http://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster"/>
        </div>
    )
}

export default Home;