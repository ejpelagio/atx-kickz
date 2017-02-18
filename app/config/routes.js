//Include the React librsary
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import Nav from '../components/Nav'
import NavV2 from '../components/Nav_v2'
import Home from '../components/Home'
import HomeV2 from '../components/Home_V2'
import Browse from '../components/Browse'
import NewReleases from '../components/NewReleases'
import Marketplace from '../components/Marketplace'
import MyKicks from '../components/MyKicks'

module.exports = (
    <Router history={browserHistory}>
        

        <Route path="/" component={NavV2} >
           
           <IndexRoute component={HomeV2} />
	        
	        <Route path="Home" component={HomeV2} />
	        <Route path="MyKicks" component={MyKicks} />
	        <Route path="Browse" component={Browse} />
	        <Route path="Marketplace" component={Marketplace} />
	        <Route path="NewReleases" component={NewReleases} />
	        

       	</Route>
    </Router>
);
