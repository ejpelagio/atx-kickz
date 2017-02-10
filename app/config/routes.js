//Include the React library
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Browse from '../components/Browse'
import NewReleases from '../components/NewReleases'
import Marketplace from '../components/Marketplace'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Nav} >
           <IndexRoute component={Home} />
	        <Route path="Browse" component={Browse} />
	        <Route path="NewReleases" component={NewReleases} />
	        <Route path="Marketplace" component={Marketplace} />

       	</Route>
    </Router>
);
