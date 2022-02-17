import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {useNavigate, useParams} from "react-router-dom";
import { loadDictionaryItemFB, updateDictionaryFB } from "../redux/modules/dictionary";
import {DictList, DetailItem, ButtonGroup, UpButton, PlusButton} from "../styles/elements";

function Detail(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();


    const index = params.index;
    const myDict = useSelector((state) => state.dict.list);

    const descRef = useRef(myDict[index].desc);
    const exampleRef = useRef(myDict[index].example);

    console.log(descRef, exampleRef);

    const onSubmit = (e) => {
        e.preventDefault();

        let currDesc = descRef.current.value;
        if (descRef.current.value === '') {
            currDesc = myDict[index].desc;
        }

        let currExample = exampleRef.current.value;
        if (exampleRef.current.value === '') {
            currExample = myDict[index].desc;
        }

        dispatch(updateDictionaryFB(
            myDict[index].id, 
            currDesc, 
            currExample
        ));

        navigate(-1);
    }

	return (
		<>
			<DictList>
				<DetailItem>
                    <h3>{myDict[index].title}</h3>
                    <input ref={descRef} placeholder={myDict[index].desc}/>
                    <input ref={exampleRef} placeholder={myDict[index].example}/>
                </DetailItem>
			</DictList>

            <ButtonGroup>
				<UpButton
					rot={false}
					onClick={() => {
						navigate("/");
					}}>
					«
				</UpButton>
				<PlusButton onClick={onSubmit}>+</PlusButton>
			</ButtonGroup>
		</>
	);
}

export default Detail;
