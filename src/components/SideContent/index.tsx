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
	Checkbox
} from "@chakra-ui/core";

import IconNotification from "../Icon/IconNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconImage from "../Icon/IconImage";
import Search from "../Search";
import Select from "../Select";

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

export default () => {
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
										All Productions{" "}
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
									<p>one!</p>
								</TabPanel>
								<TabPanel>
									<p>two!</p>
								</TabPanel>
								<TabPanel>
									<p>three!</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</div>
					<div className="productionContainer">
						<table>
							<thead>
								<th>
									<Checkbox backgroundColor="#fff"/>
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
								<tr>
									<td>
										<Checkbox defaultIsChecked/>
									</td>
									<td>#032jk8298392</td>
									<td>#032jk8298392</td>
									<td className="listImage">
										<img src="/images/sample.jpg" alt="" />
										<p>Hello welcome to this work</p>
									</td>
									<td>
										<button>Royal</button>
									</td>
									<td>L x 4</td>
									<td>DTG Print</td>
									<td>Rush Shipping</td>
									<td>
										23-june-2019{" "}
										<span>Time Left: 10:00:00</span>
									</td>
									<td>Running 2 of 5</td>
								</tr>
								<tr>
									<td>
										<input
											type="checkbox"
											name="vehicle1"
											value="Bike"
										/>
									</td>
									<td>#032jk8298392</td>
									<td>#032jk8298392</td>
									<td className="listImage">
										<img src="/images/sample.jpg" alt="" />
										<p>Hello welcome to this work</p>
									</td>
									<td>
										<button>Royal</button>
									</td>
									<td>L x 4</td>
									<td>DTG Print</td>
									<td>Rush Shipping</td>
									<td>
										23-june-2019
										<span>Time Left: 10:00:00</span>
									</td>
									<td>Running 2 of 5</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
