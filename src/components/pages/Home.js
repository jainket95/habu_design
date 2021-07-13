import React, { useEffect, useState } from "react";
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
		height: "30%",
		width: "46%",
		flexWrap: "wrap",
	},
	chipActive: {
		width: "max-content",
		height: "max-content",

		backgroundColor: "rgba(0,0,0,0.15)",
		padding: ".4rem .9rem",
		color: "black",
		borderRadius: "10rem",
		backgroundColor: "#ff0055",
		color: "white",
		transform: "scaleX(1.03) scaleY(1.1)",
		boxShadow: `0 .6rem 1.4rem rgba(0,0,0,0.4)`,
		marginRight: "1rem",
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
			transform: "scaleX(1.03) scaleY(1.1)",
			boxShadow: `0 .6rem 1.4rem rgba(0,0,0,0.4)`,
		},
		"&:not(last-child)": {
			marginRight: "1.5rem",
		},
	},
	cardContainer: {
		height: "90%",
		width: "90%",
		flexWrap: "wrap",
		margin: "0 10rem",
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
	cards: [
		{
			heading: "test heading",
			subHeading: "test sub heading",
			newCheck: "true",
		},
		{
			heading: "test heading",
			subHeading: "test sub heading",
			newCheck: "true",
		},
		{ heading: "test heading", subHeading: "test sub heading" },
		{ heading: "test heading", subHeading: "test sub heading" },
		{ heading: "test heading", subHeading: "test sub heading" },
		{ heading: "test heading", subHeading: "test sub heading" },
		{ heading: "test heading", subHeading: "test sub heading" },
		{ heading: "test heading", subHeading: "test sub heading" },
	],
};

const Home = (props) => {
	const classes = useStyles(props);

	useEffect(() => {
		const firstNode = document.getElementsByClassName("chipMarker")[0];
		// firstNode.cl;
	}, []);

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
						homeMetaData.chips.map((item, i) => (
							<div
								key={item}
								className={i === 0 ? classes.chipActive : classes.chip}>
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
				<div
					className={clsx(
						classes.rowCenterContainer,
						classes.centerCenterFlex,
						classes.cardContainer
					)}>
					{homeMetaData &&
						homeMetaData.cards &&
						homeMetaData.cards.map(({ heading, subHeading }, i) => (
							<IconImageContainer
								key={heading + i}
								variant="imgWithText"
								imgSrc="./images/download.jpeg"
								imgWidth="100%"
								imgStyles={{
									borderRadius: "10px 10px 0 0px",
								}}
								imgContainerStyle={{
									width: "100%",
									height: "70%",
									borderRadius: "10px",
								}}
								imgMainContainerStyle={{
									width: "15rem",
									height: "14rem",
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "center",
									borderRadius: "10px",
									border: "1px solid rgba(0,0,0,0.2)",
									marginBottom: "2rem",
									marginRight: "2.5rem",
									transition: "all .2s",
									"&:hover": {
										transform: "scaleX(1.02) scaleY(1.02)",
										boxShadow: `0 1rem 2rem rgba(0,0,0,0.4)`,
									},
								}}
								withText={
									<div
										className={clsx(
											classes.columnCenterContainer,
											classes.centerStartFlex
										)}>
										<CustomTypography
											variant="h6"
											align="left"
											fontWeight="600"
											mBottom=".2rem"
											mLeft=".5rem">
											{heading}
										</CustomTypography>
										<CustomTypography
											variant="body1"
											align="left"
											customColor="rgba(0,0,0,0.3)"
											mLeft=".6rem">
											{subHeading}
										</CustomTypography>
									</div>
								}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
