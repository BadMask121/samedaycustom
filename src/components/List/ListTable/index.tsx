import React from "react";
import { Checkbox } from "@chakra-ui/core";
import ListData from "../ListData";

export default ({ item }) => {
	return (
		<>
			<div className="productionContainer">
				<table>
					<thead>
						<th>
							<Checkbox backgroundColor="#fff" />
						</th>
						<th>Order #</th>
						<th>Item #</th>
						<th>Details</th>
						<th>Colors</th>
						<th>Qty</th>
						<th>Print Type</th>
						<th>Delivery Method</th>
						<th>Delivery Time</th>
						<th>Production Status</th>
					</thead>

					<tbody>
						{item.length !== 0 ? (
							item.map(element => (
								<ListData key={element.id} {...element} />
							))
						) : (
							<></>
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};
