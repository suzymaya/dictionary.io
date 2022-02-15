import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
	DictList,
	DictItem,
	ButtonGroup,
	PlusButton,
	UpButton,
	RemoveButton
} from "../styles/elements.js";
import { removeDictionaryFB } from "../redux/modules/dictionary.js";

function Dictionary(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const listRef = React.useRef(null);
	const myDict = useSelector((state) => state.dict.list);

	const scrollUp = () => {
		listRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	if (myDict.length === 0) {
		return (
			<DictList>
				<Link to='/new'>
					<PlusButton center={true}>+</PlusButton>
				</Link>
			</DictList>
		);
	} else {
		return (
			<>
				<DictList ref={listRef}>
					{myDict.map((d, index) => {
						return (
							<DictItem key={index}>
								<p className='item--title'>{d.title}</p>
								<p className='item--desc'>{d.desc}</p>
								<span className='item--example'>
									{d.example}
								</span>
								<RemoveButton onClick={() => {
									dispatch(removeDictionaryFB(d.id));
								}}>+</RemoveButton>
							</DictItem>
						);
					})}
					<ButtonGroup>
						<UpButton rot={true} onClick={scrollUp}>
							«
						</UpButton>
						<PlusButton
							onClick={() => {
								navigate("/new");
								window.location.reload();
						}}>
						+
						</PlusButton>
					</ButtonGroup>
				</DictList>
			</>
		);
	}
}

export default Dictionary;
