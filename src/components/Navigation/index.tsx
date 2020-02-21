import React from "react";
import { List, ListItem } from "@chakra-ui/core";
export default () => {
	return (
		<div className="navigationContainer">
			<List className="close">
				<ListItem>X</ListItem>
			</List>
			<List spacing={3}>
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
