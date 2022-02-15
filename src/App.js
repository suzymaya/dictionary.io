import React from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import { Wrapper, Container } from "./styles/elements.js";

import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import NewDictionary from "./components/NewDictionary";
import NotFound from "./components/NotFound";
import { loadDictionaryFB } from "./redux/modules/dictionary";


function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(loadDictionaryFB());
	}, []);

	return (
		<Wrapper className='App'>
			<Container>
				<Header />
				<Routes>
					<Route path='/' element={<Dictionary />} />
					<Route path='/new' element={<NewDictionary />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Container>
		</Wrapper>
	);
}

export default App;
