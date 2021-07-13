import React, { useState } from "react";
import { Chip, Link, makeStyles } from "@material-ui/core";
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
}));

const Badges = (props) => {
	const classes = useStyles(props);

	return (
		// <div
		// 	className={clsx(
		// 		classes.rowCenterContainer,
		// 		classes.spaceCenterFlex,
		// 		classes.rootNav
		// 	)}></div>
		<Chip label="basic" />
	);
};

export default Badges;
