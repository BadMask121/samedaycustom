import React from "react";
import { useRouter } from "next/router";
import {
	Tabs,
	TabList,
	Tab,
	Tag,
	TagLabel,
	Button,
	TabPanels,
	TabPanel,
	Icon,
	Checkbox,
} from "@chakra-ui/core";
import * as _ from "lodash";
import Select from "../../Select";
import ListTable from "../../List/ListTable";
import { ListImageWithHover, ListItemProps } from "../../List/ListData";
import { fromBase64 } from "../../../helpers";

interface IconCheck {
	color?: string;
	size?: string;
}
const IconCheck = ({ color, size, ...props }: IconCheck) => (
	<i className="iconCheck" {...props}>
		<Icon
			name="check"
			color={`${color || "#fff"}`}
			fontSize={`${size || "12px"}`}
		/>
	</i>
);
const ListItem = ({ details: item }) => {
	if (_.isEmpty(item)) return <></>;
	const {
		colors,
		details,
		itemId,
		printType,
		quantity,
	}: ListItemProps = item;
	return (
		<tr>
			<td>
				<Checkbox />
			</td>
			<td>#{itemId}</td>
			<ListImageWithHover details={details} />
			<td>
				<b>{printType}</b>
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

			<td className="deliveryMessageContainer">
				<IconCheck />
				<b>Paid in full</b>
			</td>
		</tr>
	);
};

const ListTableContent = ({ item }) => (
	<div className="productionContainer">
		<table>
			<thead>
				<th>
					<Checkbox backgroundColor="#fff" />
				</th>
				<th>Item #</th>
				<th>Details</th>
				<th>Production Type</th>
				<th>Colors</th>
				<th>Quantity</th>
				<th>Paid</th>
			</thead>

			<tbody>
				<ListItem {...item} />
			</tbody>
		</table>
	</div>
);
const ReviewCardContainer = () => (
	<div className="reviewCardContainer">
		<div className="orderValue">
			<div>
				<p>Order Value</p>
				<p>$40,000</p>
			</div>
		</div>
		<div>
			<p>Order Date</p>
			<p>25 - June - 2019</p>
		</div>
		<div>
			<p>Delivery Method</p>
			<div className="deliveryMethodPick">
				<span>Pickup Order</span>
				<Select
					backgroundColor="transparent"
					color="red"
					rightIcon="/images/arrow-b-down-gray.svg"
					style={{
						textDecoration: "underline",
						minWidth: "5rem",
					}}
					aria-label="select delivery method"
				>
					<option value="Rush Shipping" aria-label="rush option">
						Rush Shipping
					</option>
					<option value="Express" aria-label="express">
						Express
					</option>
					<option value="Instant" aria-label="instant">
						Instant
					</option>
				</Select>
			</div>
		</div>
		<div>
			<p>Rush Option</p>
			<p className="rushoption">
				<IconCheck />
				Rush
			</p>
		</div>
		<div>
			<p>Status</p>
			<p>Pending</p>
		</div>
		<div>
			<p>Requested By</p>
			<div className="requestTime">
				<p>25 - June - 2019</p>
				<p>
					Time Left: <span>10:00:00</span>
				</p>
			</div>
		</div>
		<div>
			<p>Shipped or Picked Date</p>
			<p>25 - June - 2017</p>
		</div>
	</div>
);

const ProductDetailsContent = details => (
	<div className="productDetailsContainer">
		<div className="productDetailsTopTitle">
			<p>Product</p>
			<Button
				variantColor="teal"
				variant="outline"
				size="sm"
				fontSize={11}
				color="#007bff"
				className="addNote"
			>
				Download ArtWork
			</Button>
		</div>
		<div className="productionDetailsContent">
			<div>
				<img
					src={"/images/sample.jpg"}
					alt={"front facing product image"}
				/>
				<p>Front</p>
			</div>
			<div>
				<img
					src={"/images/sample.jpg"}
					alt="back facing product Image"
				/>
				<p>Back</p>
			</div>
			<div>
				<img src={"/images/sample.jpg"} alt="side product image" />
				<p>Side</p>
			</div>
			<div>
				<img src={"/images/sample.jpg"} alt="Side product image" />
				<p>Side</p>
			</div>
		</div>
		<ListTableContent item={details} />
	</div>
);
const TabContent = ({ details }) => (
	<div className="tableLayerContainer">
		<div className="tabsContainer">
			<Tabs className="tabs">
				<TabList className="tabsLayer">
					<TabList className="tabLayerList">
						<Tab>Product Details</Tab>
						<Tab>History / Notes</Tab>
					</TabList>
					<div className="actionContainer">
						<Select
							backgroundColor="transparent"
							color="red"
							style={{ fontWeight: "bold" }}
							rightIcon="/images/arrow-b-down-gray.svg"
						>
							<option value="Hello" selected>
								Worksheet
							</option>
						</Select>
						<Button
							isDisabled
							variantColor="teal"
							variant="solid"
							fontSize={11}
							size="sm"
							width={100}
						>
							Print
						</Button>

						<Button
							variantColor="teal"
							variant="outline"
							size="sm"
							fontSize={11}
							className="addNote"
						>
							Add Note
						</Button>
						<Select rightIcon="/images/arrow-b-down-white.svg">
							<option value="Hello" selected>
								Complete Production
							</option>
						</Select>
					</div>
				</TabList>

				<TabPanels className="tabpanels">
					<TabPanel>
						<ProductDetailsContent {...{ details }} />
					</TabPanel>
					<TabPanel>{/* <ListTable item={[details]} /> */}</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>
);
export default props => {
	const [loaded, setloaded] = React.useState(false);
	const Router = useRouter();
	const { token } = Router.query;

	const details = (token && JSON.parse(fromBase64(token.toString()))) || {};
	const goHome = () => Router.push("/", "/", { shallow: true });

	// const setLoaded = () => {
	// 	props.pageTransitionReadyToEnter();
	// 	setloaded(true);
	// };

	// React.useEffect(() => {
	// 	const timer = setTimeout(setLoaded, 1000);
	// 	return () => clearTimeout(timer);
	// }, [props]);

	return (
		<div className="productContentContainer">
			<div className="topLayerContainer">
				<div className="topTitle">
					<i className="backBtn" onClick={goHome} />
					<span>Back</span>
					<div className="title">
						<h3>Production House</h3>
					</div>
				</div>
				<p className="orderId">Order Id: #{Router.query["id"]}</p>
				<div className="breadcrumb">
					<p>Account Setup > Delivery Method</p>
					<p>
						Production Status: <span>Round</span>
					</p>
				</div>
			</div>
			<ReviewCardContainer />
			<TabContent {...{ details }} />
		</div>
	);
};
