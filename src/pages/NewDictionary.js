import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
	DictList,
	InputItem,
	ButtonGroup,
	PlusButton,
	UpButton,
} from "../styles/elements.js";
import {createDictionaryFB,} from "../redux/modules/dictionary";


function NewDictionary(props) {
	const title = React.useRef(null);
	const desc = React.useRef(null);
	const example = React.useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const createDict = () => {
		const currTitle = title.current.value;
		const currDesc = desc.current.value;
		const currExample = example.current.value;

		if (currTitle === "" || currDesc === "" || currExample === "") {
			window.alert("모든 항목을 입력해주세요.");
		} else {
			// dispatch(createDictionary(currText, currDesc, currExample));
			dispatch(
				createDictionaryFB({
					title: currTitle,
					desc: currDesc,
					example: currExample,
				})
			);
			navigate("/", {push: true});
		}
	};

	return (
		<>
			<DictList>
				<InputItem>
					<h3 className='label'>단어</h3>
					<input type='text' ref={title} placeholder="단어를 입력해주세요" />
				</InputItem>

				<InputItem>
					<h3 className='label'>단어 설명</h3>
					<input type='text' ref={desc} placeholder="단어 설명을 입력해주세요"/>
				</InputItem>
				<InputItem>
					<h3 className='label'>예시</h3>
					<input type='text' ref={example} placeholder="활용 예시를 입력해주세요" />
				</InputItem>
			</DictList>
			<ButtonGroup>
				<UpButton
					rot={false}
					onClick={() => {
						navigate("/");
					}}>
					«
				</UpButton>
				<PlusButton onClick={createDict}>+</PlusButton>
			</ButtonGroup>
		</>
	);
}

export default NewDictionary;
