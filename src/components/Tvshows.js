import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';

import Poster from './modules/Poster';
import Results from './modules/Results';


function Tvshows() {
    const [movieData, setMovieData] = useState([]);
    const [baseURL, setBaseURL] = useState([]);
    const [searchBar, setSearchBar] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [noSearch, setNoSearch] = useState(false);

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/discover/tv?api_key=ae6887d6afcef7f295ee5ce27afa2389&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
        .then((res) => setMovieData(res.data.results))
        .catch(err => console.log)
    }, [])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/configuration?api_key=ae6887d6afcef7f295ee5ce27afa2389')
            .then((res) => setBaseURL(res.data))
    }, [])

    function handleChange(e) {
        e.preventDefault()
        setSearchBar(e.target.value);
    }

    function submitSearch(e) {
        e.preventDefault()
        Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ae6887d6afcef7f295ee5ce27afa2389&language=en-US&query=${searchBar}&page=1&include_adult=false`)
            .then((res) => {
                setSearchResults(res.data.results)
                setNoSearch(!noSearch)
            })
        // console.log(searchBarResult)
    }

    // console.log(movieData)
    return (
        <div>
        <div class="jumbotron jumbotron-fluid tvshows">
            <div class="container">
                <h1 class="display-4">Search for your favorite TV shows!</h1>
                <Form inline={true}  onSubmit={submitSearch}>
                        <Form.Group controlId="searchbar">
                            <Form.Control type="input" placeholder="Search TV shows....." value={searchBar} onChange={handleChange} />
                            <Form.Control type="submit" placeholder="Submit"/>
                        </Form.Group>
                    </Form>
            </div>
        </div>
            <Container>
                <Row>
                    {(!noSearch && movieData.map((movie) => <Col sm={12} md={4}>
                                <Poster image={movie.backdrop_path} title={movie.title} rating={movie.vote_average}/>
                                </Col>)) || (searchResults.map((search) => <Results date={search.release_date} text={search.original_title} img={`http://image.tmdb.org/t/p/w500${search.backdrop_path}`}/>))}
                </Row>
            </Container>
        </div>
    )
}

export default Tvshows;