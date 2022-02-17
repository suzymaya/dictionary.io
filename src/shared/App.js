import React from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import { Wrapper, Container } from "../styles/elements.js";

import Header from "../pages/Header";
import Dictionary from "../pages/Dictionary";
import NewDictionary from "../pages/NewDictionary";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import { loadDictionaryFB } from "../redux/modules/dictionary";

function App() {
	return (
		<Wrapper className='App'>
			<Container>
				<Header />
				<Routes>
					<Route path='/' element={<Dictionary />} />
					<Route path='/new' element={<NewDictionary />} />
					<Route path='/detail/:index' element={<Detail />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Container>
		</Wrapper>
	);
}

export default App;
