import React from "react";
import { useRouter } from "next/router";
import Select from "../../Select";
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
} from "@chakra-ui/core";
import ListTable from "../../List/ListTable";

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
				<i>
					<Icon name="check" color="#fff" fontSize="12px" />
				</i>
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

const TabContent = () => (
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
						<ListTable item={[]} />
					</TabPanel>
					<TabPanel>
						<ListTable item={[]} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>
);
export default () => {
	const Router = useRouter();

	const goHome = () => Router.push("/", "/", { shallow: true });
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
			<TabContent />
		</div>
	);
};
