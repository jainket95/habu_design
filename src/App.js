import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";

const useStyles = makeStyles((theme) => ({
	rootApp: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "stretch",
		overflow: "hidden",
	},
	mainWrapper: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	homeContainer: {
		width: `calc(100% )`,
		maxWidth: `1440px`,
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},
}));

const App = ({ getWeatherData, weatherData }) => {
	const classes = useStyles();

	return (
		<div className={classes.rootApp}>
			<div className={classes.homeContainer}>
				<Header />
				<Home />
			</div>
		</div>
	);
};

export default App;
