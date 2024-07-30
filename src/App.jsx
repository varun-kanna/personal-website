import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
