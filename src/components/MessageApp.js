import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AppHeader from "./AppHeader";
import Content from "./Content";

function MessageApp(props) {
	return (
		<Fragment>
			<AppHeader />
			<Content />
		</Fragment>
	);
}

MessageApp.propTypes = {};

export default MessageApp;
