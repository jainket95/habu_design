import React, { useState } from "react";
import { Link, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import IconImageContainer from "../../containers/IconImageContainer";
import CustomInput from "../../containers/CustomInput";
import CustomTypography from "../../containers/CustomTypography";

const useStyles = makeStyles((theme) => ({
	startCenterFlex: {
		justifyContent: "flex-start",
		alignItems: "center",
	},
	endCenterFlex: {
		justifyContent: "flex-end",
		alignItems: "center",
	},
	startStartFlex: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	centerCenterFlex: {
		justifyContent: "center",
		alignItems: "center",
	},
	spaceCenterFlex: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	centerStartFlex: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	centerStartFlex: {
		justifyContent: "center",
		alignItems: "space-between",
	},
	columnCenterContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	rowCenterContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
	rootHome: {
		width: "100%",
		height: "100%",
	},
	headerContainer: {
		width: "100%",
		height: "40%",
	},
	footerContainer: {
		width: "100%",
		height: "calc(100% - 40%)",
	},
	chipsContainer: {
		height: "55%",
		width: "40%",
		flexWrap: "wrap",
	},
	chip: {
		width: "max-content",
		height: "max-content",

		backgroundColor: "rgba(0,0,0,0.15)",
		padding: ".4rem .9rem",
		color: "black",
		borderRadius: "10rem",
		transition: "all .2s",
		"&:hover": {
			backgroundColor: "#ff0055",
			color: "white",
			transform: "scaleX(1.05) scaleY(1.2)",
			boxShadow: `0px 0px 5px 1px rgba(0,0,0,0.4)`,
		},
		"&:not(last-child)": {
			marginRight: "1rem",
		},
	},
}));

const homeMetaData = {
	chips: [
		"all resources",
		"UI Kits",
		"icons",
		"wireframes",
		"mockups",
		"fonts",
		"backgrounds",
		"illustrations",
		"colors",
	],
};

const Home = (props) => {
	const classes = useStyles(props);

	return (
		<div
			className={clsx(
				classes.columnCenterContainer,
				classes.centerCenterFlex,
				classes.rootHome
			)}>
			<div
				className={clsx(
					classes.rowCenterContainer,
					classes.centerCenterFlex,
					classes.headerContainer
				)}>
				<div
					className={clsx(
						classes.rowCenterContainer,
						classes.centerCenterFlex,
						classes.chipsContainer
					)}>
					{homeMetaData &&
						homeMetaData.chips &&
						homeMetaData.chips.map((item) => (
							<div key={item} className={classes.chip}>
								<CustomTypography variant="body1">{item}</CustomTypography>
							</div>
						))}
				</div>
			</div>
			<div
				className={clsx(
					classes.rowCenterContainer,
					classes.centerCenterFlex,
					classes.footerContainer
				)}>
				{/* {homeMetaData &&
					homeMetaData.map((item) => (
						<div
							key={item}
							className={clsx(
								classes.rowCenterContainer,
								classes.centerCenterFlex,
								classes.navItem
							)}>
							<CustomTypography
								variant="h6"
								customProps={{ cursor: "pointer", width: "max-content" }}>
								{item}
							</CustomTypography>
						</div>
					))} */}
			</div>
		</div>
	);
};

export default Home;
