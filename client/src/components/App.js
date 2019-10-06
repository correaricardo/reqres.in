// General imports
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Pages
import Home from '../components/Home'
import NotFound from '../components/404'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default App