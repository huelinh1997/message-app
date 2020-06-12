import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/Themes";
import MessageApp from "./components/MessageApp";

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<MessageApp />
			</ThemeProvider>
		</div>
	);
}

export default App;
