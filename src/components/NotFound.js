import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
	return (
		<div style={{padding: "16px"}}>
			<h3>잘못된 주소입니다</h3>
			<Link to='/'>
				<p style={{color:"slateblue"}}>돌아가기</p>
			</Link>
		</div>
	);
}

export default NotFound;
