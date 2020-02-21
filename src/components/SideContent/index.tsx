import React from "react";
import { List, ListItem } from "@chakra-ui/core";
import IconNotification from "../Icon/IconNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
	return (
		<div className="sideContentContainer">
			<div className="header">
				<i className="logo" />
				<div className="menu">
					<List>
						<ListItem className="searchContainer">
							<div className="searchContent">
								<input
									type="text"
									name="search"
									id="search"
									placeholder="Search"
								/>
							</div>
						</ListItem>
						<ListItem>
							<span style={{ marginTop: "15px" }}>
								<IconNotification
									image="/images/mail.svg"
									content="1"
								/>
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
						<ListItem>Me</ListItem>
					</List>
				</div>
			</div>
		</div>
	);
};
