import React from "react";
import { Checkbox, Button } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { toBase64 } from "../../../helpers";

interface ListItemProps {
	orderId: number;
	itemId: number;
	details: { image: string; message: string };
	colors: HTMLButtonElement | string;
	quantity: string;
	printType: string;
	deliveryMethod: { type: string; message: string };
	deliveryTime: { date: string; time: string };
	productionStatus: string;
}
export default (item: ListItemProps) => {
	const Router = useRouter();
	const {
		colors,
		deliveryMethod,
		deliveryTime,
		details,
		itemId,
		orderId,
		printType,
		productionStatus,
		quantity,
	}: ListItemProps = item;

	//this is temporary will be using states for this (convert details to base64 then pass as a params to url)
	const token = toBase64(JSON.stringify(item));
	const goToOrder = () =>
		Router.push(`/?id=${orderId}&token=${token}`, `${orderId}`, {
			shallow: true,
		});
	return (
		<>
			<tr onClick={goToOrder}>
				<td>
					<Checkbox />
				</td>
				<td>#{orderId}</td>
				<td>#{itemId}</td>
				<td className="listImage">
					<div className="imageContainer">
						<img src={details.image} alt="product image" />
						<div className="detailsContainer">
							<div>
								<img
									src={details.image}
									alt={"product image"}
								/>
								<p>Front</p>
							</div>
							<div>
								<img src={details.image} alt="product Image" />
								<p>Back</p>
							</div>
							<div>
								<img src={details.image} alt="product image" />
								<p>Side</p>
							</div>
							<div>
								<img src={details.image} alt="product image" />
								<p>Side</p>
							</div>
						</div>
					</div>
					<p>{details.message}</p>
				</td>
				<td>
					<Button
						variantColor="teal"
						variant="solid"
						backgroundColor="#529DED"
						size="sm"
						_hover={{ backgroundColor: "#525EEE" }}
					>
						{colors}
					</Button>
				</td>
				<td>
					<b>{quantity}</b>
				</td>
				<td>
					<b>{printType}</b>
				</td>
				<td className="deliveryMessageContainer">
					<b>
						<i />
						{deliveryMethod.message}
					</b>
				</td>
				<td className="deliveryDate">
					{deliveryTime.date}
					<p style={{ color: "rgba(0,0,0,0.3)" }}>
						Time Left:
						<span
							style={{
								color: "red",
								fontWeight: "bold",
								marginLeft: "5px",
							}}
						>
							{deliveryTime.time}
						</span>
					</p>
				</td>
				<td style={{ fontWeight: "bold", color: "red" }}>
					{productionStatus}
				</td>
			</tr>
		</>
	);
};
