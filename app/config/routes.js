//Include the React library
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Browse from '../components/Browse'
import NewReleases from '../components/NewReleases'
import Marketplace from '../components/Marketplace'
import MyKicks from '../components/MyKicks'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Nav} >
           <IndexRoute component={Home} />
	        <Route path="MyKicks" component={MyKicks} />
	        <Route path="Browse" component={Browse} />
	        <Route path="Marketplace" component={Marketplace} />
	        <Route path="NewReleases" component={NewReleases} />
	        

       	</Route>
    </Router>
);
