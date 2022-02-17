import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { HeaderContainer, Title, Search } from "../styles/elements";

import {
	loadDictionaryFB,
	searchDictionaryFB,
} from "../redux/modules/dictionary";


function Header(props) {
	const searchTitle = React.useRef(null);
	const dispatch = useDispatch();

	const searchDict = () => {
		const title = searchTitle.current.value;

		if (window.location.pathname !== "/") {
			return;
		}
	
		if (title.length === 0) {
			dispatch(loadDictionaryFB());
		} else {
			dispatch(searchDictionaryFB(title));
		}
	};

	if (window.location.pathname==="/") {
		return (
			<HeaderContainer>
				<Link to ="/">
					<Title>dictionary.io</Title>
				</Link>
				<Search
					ref={searchTitle}
					placeholder='단어 검색'
					onChange={searchDict}
				/>
			</HeaderContainer>
		);
	} else {
		return (
			<HeaderContainer>
				<Title>dictionary.io</Title>
			</HeaderContainer>
		);
	}

	
}

export default Header;
