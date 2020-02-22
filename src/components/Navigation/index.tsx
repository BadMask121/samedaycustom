import React from "react";
import { List, ListItem, Icon } from "@chakra-ui/core";

interface Props {
	isNavOpen: string;
}
export default ({ isNavOpen }) => {
	return (
		<div className={`navigationContainer ${isNavOpen && `nav-open` || `nav-close`}`}>
			<List className="close">
				<ListItem>
					<Icon
						className="iconImage"
						name="close"
						size="5"
						fontWeight="bold"
						marginLeft={"0.5rem"}
					/>
				</ListItem>
			</List>
			<List spacing={3} style={{ marginTop: 50 }}>
				<ListItem>Dashboard</ListItem>
				<ListItem>Operations</ListItem>
				<ListItem>Records</ListItem>
				<ListItem>Supply Store</ListItem>
				<ListItem>Market Place</ListItem>
				<ListItem>Forums</ListItem>
			</List>
		</div>
	);
};
