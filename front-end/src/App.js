import React from 'react'
import TextEditor from './components/TextEditor'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Redirect to={`/documents/${uuidv4()}`} />
				</Route>
				<Route path='/documents/:id' exact>
					<TextEditor />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
