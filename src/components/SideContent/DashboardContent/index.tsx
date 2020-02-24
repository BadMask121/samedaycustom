import React from "react";
import {
	Tabs,
	TabList,
	Tab,
	Tag,
	TagLabel,
	Button,
	TabPanels,
	TabPanel,
} from "@chakra-ui/core";
import ListTable from "../../List/ListTable";
import { dummydata } from "../../../helpers/dummydata";
import Select from "../../Select";

export default () => {
	return (
		<>
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
		</>
	);
};
