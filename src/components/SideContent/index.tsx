import React, { useState } from "react";
import { List, ListItem } from "@chakra-ui/core";

import IconNotification from "../Icon/IconNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconImage from "../Icon/IconImage";
import Search from "../Search";
import Footer from "../Footer";
import DashboardContent from "./DashboardContent";

import { PageTransition } from "next-page-transitions";
import { useRouter } from "next/router";
import ProductContent from "./ProductContent";

interface Props {
	isNavOpen: boolean;
}

const Menu = () => (
	<div className="menu">
		<List>
			<ListItem className="searchContainer">
				<Search />
			</ListItem>
			<ListItem>
				<span style={{ marginTop: "15px" }}>
					<IconNotification image="/images/mail.svg" content="1" />
				</span>
				Message
			</ListItem>
			<ListItem>
				<span style={{ marginTop: "15px" }}>
					<IconNotification
						image="/images/shopping-cart-menu.svg"
						content="23"
					/>
				</span>
				Market Place
			</ListItem>
			<ListItem>
				<IconNotification content="10">
					<FontAwesomeIcon
						icon={["fas", "bell"]}
						style={{ fontSize: "20px" }}
						className="user"
					/>
				</IconNotification>
				Notifications
			</ListItem>
			<ListItem className="userProfileIconContainer">
				<IconImage image="/images/sample.jpg" />
				<span>Me</span>
			</ListItem>
		</List>
	</div>
);

export default ({ isNavOpen, ...props }: Props) => {
	const route = useRouter();
	return (
		<div className="sideContentContainer">
			<div className="header">
				<i className="logo" />
				<Menu />
			</div>

			<div className="content">
				<PageTransition timeout={400} classNames="page-transition">
					{route.query["id"] ? (
						<ProductContent key={route.route} />
					) : (
						<DashboardContent key={route.route} />
					)}
				</PageTransition>
			</div>
			<Footer />
			<style jsx global>
				{`
					.sideContentContainer {
						padding-left: ${isNavOpen ? "15rem" : "3rem"};
					}
					.header {
						padding-right: ${isNavOpen ? "14rem" : "3rem"};
					}
					.content {
						margin-right: ${isNavOpen ? "11rem" : "0rem"};
					}
					.page-transition-enter {
						opacity: 0;
					}
					.page-transition-enter-active {
						opacity: 1;
						transition: opacity 300ms;
					}
					.page-transition-exit {
						opacity: 1;
					}
					.page-transition-exit-active {
						opacity: 0;
						transition: opacity 300ms;
					}
				`}
			</style>
		</div>
	);
};
