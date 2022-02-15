import styled, { css, keyframes } from "styled-components";

const MOBILE_PORTLAIT_WIDTH = 375; // iPhone X portlait 기준
const MOBILE_LANDSCAPE_WIDTH = 812; //  iPhone X landscape 기준

/**
 * Wrapper, Container
 */
export const Wrapper = styled.div`
	position: absolute;
	display: flex;

	background-color: #eee;
	height: 100vh;
	width: 100vw;

	overflow-x: hidden;
	overflow-y: hidden;
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	background-color: #fff;
	height: 80vh;
	width: 80vw;
	min-width: ${MOBILE_PORTLAIT_WIDTH};
	margin: auto;

	border: 1px solid #bbb;
	box-sizing: border-box;

	padding: 10px;
`;

/**
 * Header
 */

export const HeaderContainer = styled.div`
	@media only screen and (max-width: ${MOBILE_PORTLAIT_WIDTH}px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

/**  
 * Components
*/

export const Title = styled.span`
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
	font-size: 24px;
	color: #000;
	font-weight: 800;
	font-family: "Ubuntu", sans-serif;
	text-align: left;
	margin-left: 15px;

	@media only screen and (max-width: ${MOBILE_PORTLAIT_WIDTH}px) {
		float: none;
		width: 80%;
		margin-left: 0px;
		margin-bottom: 5px;
		text-align: center;
	}
`;

export const DictList = styled.div`
	width: 100%;
	height: 100%;

	overflow-x: hidden;
	overflow-y: auto;
`;

export const DictItem = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	padding: 0px 15px 15px 15px;
	text-align: left;
	box-sizing: border-box;

	border-bottom: 1px solid #ddd;

	font-size: 16px;

	& .item--title {
		font-size: 20px;
		font-weight: 800;
		color: slateblue;
	}

	& .item--desc {
	}

	& .item--example {
		background-color: #fed78a;
		font-style: italic;
		font-weight: bold;
		text-align: center;

		width: auto;
		border-radius: 5px;
		padding: 0px 5px 0px 5px;
	}
`;

/**
 * BUTTONS
 */

// button animations
const spinUp = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(90deg);
    }
`;

const spinDown = keyframes`
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

// button components
export const ButtonGroup = styled.div`
	position: absolute;
	bottom: 3%; right: 3%;
	margin: auto;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;

export const UpButton = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

	background-color: slateblue;

	height: 80px;
	width: 80px;
	border-radius: 80px;

	font-family: "Ubuntu", sans-serif;
	font-size: 80px;
	text-align: center;
	line-height: 65px;
	color: #fff;

	margin-right: 5px;

	cursor: pointer;

	${(props) =>
		props.rot &&
		css`
			transform: rotate(90deg);
			animation-name: ${spinUp};
		`}

	${(props) =>
		!props.rot &&
		css`
			transform: rotate(0deg);
			animation-name: ${spinDown};
		`}

    animation-duration: 0.25s;
	animation-timing-function: ease-out;

	&:hover {
		background-color: #4b38b9;
	}

	@media only screen and (max-width: ${MOBILE_LANDSCAPE_WIDTH}px) {
		height: 50px;
		width: 50px;
		border-radius: 50px;

		font-size: 50px;
		line-height: 40px;
	}
`;

export const PlusButton = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

	${(props) =>
		props.center
			? css`
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					height: 150px;
					width: 150px;
					border-radius: 150px;
					font-size: 150px;
					line-height: 130px;
					margin: auto;

					&:a {
						text-decoration: none;
					}
			  `
			: css`
					height: 80px;
					width: 80px;
					border-radius: 80px;
					font-size: 80px;
					line-height: 70px;
			  `}

	background-color: slateblue;

	font-family: "Ubuntu", sans-serif;
	text-align: center;
	color: #fff;

	cursor: pointer;

	&:hover {
		background-color: #4b38b9;
	}

	@media only screen and (max-width: ${MOBILE_LANDSCAPE_WIDTH}px) {
		${(props) => props.center
			? css`
				height: 120px;
				width: 120px;
				border-radius: 120px;

				font-size: 120px;
				line-height: 100px;
			` 
			: css`
				height: 50px;
				width: 50px;
				border-radius: 50px;

				font-size: 50px;
				line-height: 42px;
			`}
	}
`;

export const RemoveButton = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

	position: absolute;
	top: 0;
	right: 3%;
	height: 20px;
	width: 20px;
	border-radius: 20px;
	font-size: 20px;
	line-height: 18px;
	transform: rotate(45deg);

	background-color: slateblue;

	font-family: "Ubuntu", sans-serif;
	text-align: center;
	color: #fff;

	cursor: pointer;

	&:hover {
		background-color: #4b38b9;
	}
`;

/**
 * Input, Search
 */

export const Search = styled.input`

	float: right;
	width: 25%;
	height: 20px;
	padding: 3px 10px 3px 10px;
	margin-right: 15px;

	border: 1px solid #ccc;
	border-radius: 20px;

	@media only screen and (max-width: ${MOBILE_PORTLAIT_WIDTH}px) {
		float: none;
		width: 80%;
		margin-left: 15px;
		margin-right: 15px;
	}
`;

export const InputItem = styled.div`
	width: 100%;
	height: auto;
	padding: 0px 15px 15px 15px;
	text-align: left;
	box-sizing: border-box;
	font-size: 20px;

	& .label {
		font-size: 20px;
		font-weight: bold;
		color: slateblue;
	}

	& input {
		width: 100%;
		height: 30px;
		padding: 3px 0px 3px 0px;
		border: none;
		border-bottom: 1px solid #333;
	}

	& input:focus {
		outline: none;
		border-bottom: 1px solid slateblue;
		transition: all 1s ease-in;
	}
`;
