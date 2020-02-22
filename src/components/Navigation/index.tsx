import React from "react";
import { List, ListItem, Icon } from "@chakra-ui/core";
import IconNotification from "../Icon/IconNotification";

interface Props {
	isNavOpen: string;
	openNav: Function;
}
export default ({ isNavOpen, openNav }) => {
	return (
		<div
			className={`navigationContainer ${(isNavOpen && `nav-open`) ||
				`nav-close`}`}
		>
			<List className="close">
				<ListItem>
					{isNavOpen ? (
						<Icon
							className="IconImage"
							name="close"
							size="5"
							fontWeight="bold"
							color="#fff"
							marginLeft={"0.5rem"}
							onClick={() => openNav(!isNavOpen)}
						/>
					) : (
						<i
							className="IconImage"
							onClick={() => openNav(!isNavOpen)}
						/>
					)}
				</ListItem>
			</List>
			<List spacing={3}>
				<ListItem>
					<i />
					<span>Dashboard</span>
				</ListItem>

				<ListItem>
					<IconNotification content="10" backgroundColor="red" />
					<span>Operations</span>
				</ListItem>
				<ListItem>
					<IconNotification content="1" backgroundColor="red" />
					<span>Records</span>
				</ListItem>
				<ListItem>
					<IconNotification content="1" backgroundColor="red" />
					<span>Supply Store</span>
				</ListItem>
				<ListItem>
					<IconNotification content="1" backgroundColor="red" />
					<span>Market Place</span>
				</ListItem>
				<ListItem>
					<IconNotification content="1" backgroundColor="red" />
					<span>Forums</span>
				</ListItem>
			</List>
		</div>
	);
};
