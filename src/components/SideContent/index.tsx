import React, { useState, Suspense } from "react";
import { List, ListItem } from "@chakra-ui/core";

import IconNotification from "../Icon/IconNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconImage from "../Icon/IconImage";
import Search from "../Search";
import Footer from "../Footer";

import { PageTransition } from "next-page-transitions";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import ProductContent from "./ProductContent";
// import DashboardContent from "./DashboardContent";
const ProductContent = dynamic(() => import("./ProductContent"), {
	ssr: false,
});
const DashboardContent = dynamic(() => import("./DashboardContent"), {
	ssr: false,
});
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
				<PageTransition
					timeout={400}
					classNames={`${
						route.query["id"] ? "swiperight" : "swipeleft"
					}`}
				>
					{route.query["id"] ? (
						// <Suspense fallback={<>Loading</>}>
						<ProductContent key={route.route} />
					) : (
						// </Suspense>
						// <Suspense fallback={<>Loading</>}>
						<DashboardContent key={route.route} />
						// </Suspense>
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

					.swipeleft-enter {
						opacity: 0;
						transform: translateX(20px);
						transition: opacity 1s, transform 1s;
						transform-style: preserve-3d;
					}

					.swipeleft-enter-active {
						opacity: 1;
						transform: translateX(0px);
						transition: opacity 1s, transform 1s;
					}
					.swipeleft-enter-active {
						opacity: 1;
						transform: translateX(0px);
						transition: opacity 1s, transform 1s;
					}

					.swiperight-enter {
						opacity: 0;
						transform: translateX(-20px);
						transition: opacity 1s, transform 1s;
						transform-style: preserve-3d;
					}

					.swiperight-enter-active,
					.swiperight-enter-done {
						opacity: 1;
						transform: translateX(0px);
						transition: opacity 1s, transform 1s;
					}
					.swiperight-exit {
						opacity: 1;
						transform: translateX(0px);
						transition: opacity 1s, transform 1s;
					}
					.swiperight-exit-active {
						opacity: 0;
						transform: translateX(-20px);
						transition: opacity 1s, transform 1s;
						transform-style: preserve-3d;
					}
				`}
			</style>
		</div>
	);
};
