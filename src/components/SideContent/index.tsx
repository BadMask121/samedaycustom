import React from "react";
import {
	List,
	ListItem,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Tag,
	Button,
	TagLabel,
	Checkbox,
} from "@chakra-ui/core";

import IconNotification from "../Icon/IconNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconImage from "../Icon/IconImage";
import Search from "../Search";
import Select from "../Select";
import { dummydata } from "../../helpers/dummydata";

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
const ListData = ({
	colors,
	deliveryMethod,
	deliveryTime,
	details,
	itemId,
	orderId,
	printType,
	productionStatus,
	quantity,
}: ListItemProps) => (
	<>
		<tr>
			<td>
				<Checkbox />
			</td>
			<td>{orderId}</td>
			<td>{itemId}</td>
			<td className="listImage">
				<img src={details.image} alt="" />
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
			<td>
				{deliveryTime.date} <span>Time Left: {deliveryTime.time}</span>
			</td>
			<td>{productionStatus}</td>
		</tr>
	</>
);

const ListTable = ({ item }) => (
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
);
export default ({ isNavOpen }: Props) => {
	return (
		<div className="sideContentContainer">
			<div className="header">
				<i className="logo" />
				<Menu />
			</div>

			<div className="content">
				<div className="topLayerContainer">
					<div className="title">
						<h3>Production House</h3>
					</div>
					<div className="filterContainer">
						<div className="categoryContainer">
							<Select>
								<option value="food" selected>
									Categories
								</option>
								<option value="cook">Cook</option>
								<option value="clean">Clean</option>
							</Select>
						</div>
						<div className="searchContainer">
							<div className="searchContent">
								<i></i>
								<input
									aria-label="filter product by..."
									type="text"
									placeholder="filter by..."
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="tableLayerContainer">
					<div className="tabsContainer">
						<Tabs className="tabs">
							<TabList className="tabsLayer">
								<TabList>
									<Tab>
										All Productions
										<span
											style={{
												color: "#ddd",
												fontSize: 12,
												paddingLeft: 10,
											}}
										>
											192
										</span>
									</Tab>
									<Tab>
										Awaiting Production
										<Tag
											size={"sm"}
											rounded="full"
											variant="solid"
											variantColor="red"
											style={{
												fontSize: 12,
												marginLeft: 10,
												height: "20px",
												width: "20px",
												borderRadius: "50%",
												textAlign: "center",
												paddingRight: 0,
											}}
										>
											<TagLabel
												style={{
													textAlign: "center",
												}}
											>
												3
											</TagLabel>
										</Tag>
									</Tab>
									<Tab>Completed</Tab>
								</TabList>
								<div className="actionContainer">
									<Button
										variantColor="teal"
										variant="outline"
										size="sm"
									>
										Print worksheet
									</Button>
									<Select
										backgroundColor="transparent"
										color="#3E596F"
										style={{ fontWeight: "bold" }}
										rightIcon="/images/arrow-b-down-gray.svg"
									>
										<option value="Hello" selected>
											Mark as Complete
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
										Save
									</Button>
								</div>
							</TabList>

							<TabPanels>
								<TabPanel>
									<ListTable item={dummydata} />
								</TabPanel>
								<TabPanel>
									<ListTable item={[]} />
								</TabPanel>
								<TabPanel>
									<ListTable item={dummydata} />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.sideContentContainer {
						padding-left: ${isNavOpen ? "14rem" : "3rem"};
					}
					.header {
						padding-right: ${isNavOpen ? "14rem" : "3rem"};
					}
					.content {
						padding-right: ${isNavOpen ? "11rem" : "0rem"};
					}
				`}
			</style>
		</div>
	);
};
