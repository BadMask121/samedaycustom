import * as faker from "faker";

const dataArray = new Array(10);

dataArray.fill({
	orderId: `${faker.random.uuid()}`,
	itemId: `${faker.random.uuid()}`,
	details: {
		image: "/images/sample.jpg",
		message: faker.random.words(10),
	},
	colors: faker.internet.color(),
	quantity: ` L x ${faker.random.number(10)}`,
	printType: `DTG ${faker.random.words(1)}`,
	deliveryMethod: {
		type: "rush" || "pickup",
		message: "Rush Shipping" || "Pickup Order",
	},
	deliveryTime: {
		date: "23 - June - 2019",
		time: "10:00:00",
	},
	productionStatus: "Running 3 of 5",
});

const dummydata = dataArray;
export { dummydata };
