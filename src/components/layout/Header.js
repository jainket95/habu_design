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
	rootNav: (props) => ({
		width: "100%",
		height: props.height ? props.height : "6rem",
		// backgroundColor: theme.palette.common.normalBg,
		borderRadius: "5px",
		// boxShadow: `0px 0px 4px 2px ${theme.palette.common.inputUnfocusedBg}`,
	}),
	brandContainer: {
		height: "100%",
		width: "calc(100% - 80% - 2rem)",
		marginLeft: "2rem",
	},
	headerContainer: {
		height: "100%",
		width: "calc(100% - 50% - 20%  - 2rem)",
	},
	footerContainer: {
		height: "100%",
		width: "40%",
	},
	navItem: {
		margin: "0 auto",
		width: "10rem",
	},
}));

const headerMetaData = ["resources", "about", "contact"];

const Header = (props) => {
	const classes = useStyles(props);
	const [state, setState] = useState("");

	return (
		<div
			className={clsx(
				classes.rowCenterContainer,
				classes.spaceCenterFlex,
				classes.rootNav
			)}>
			<div
				className={clsx(
					classes.rowCenterContainer,
					classes.startCenterFlex,
					classes.brandContainer
				)}>
				<Link style={{ textDecoration: "none" }} to="/">
					<IconImageContainer
						variant="iconWithText"
						width="3.5rem"
						height="3.5rem"
						strokeWidth="1"
						icon="codesandbox"
						withText={
							<CustomTypography variant="h4" customColor="black">
								Habu designs
							</CustomTypography>
						}
						// isSvgActive={false}
					/>
				</Link>
			</div>
			<div
				className={clsx(
					classes.rowCenterContainer,
					classes.startCenterFlex,
					classes.headerContainer
				)}>
				<CustomInput
					inputWidth="100%"
					iconProps={{
						iconColor: "black",
						variant: "icon",
						icon: "search",
						inputIcon: true,
						noMargin: true,
						withContainerStyles: {
							marginRight: "-4.5rem",
							zIndex: "10",
						},
					}}
					inputContainerStyle={{
						// marginLeft: "-3.5rem",
						borderRadius: "100px",
					}}
					inputBg="transparent"
					state={state}
					setState={setState}
					node={{
						component: "search something",
						input_type: "text",
					}}
					handleChangeInput={({ setting, value, ref }) => {
						console.log(setting, value, state);
					}}
				/>
			</div>
			<div
				className={clsx(
					classes.rowCenterContainer,
					classes.centerCenterFlex,
					classes.footerContainer
				)}>
				{headerMetaData &&
					headerMetaData.map((item) => (
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
					))}
			</div>
		</div>
	);
};

export default Header;
