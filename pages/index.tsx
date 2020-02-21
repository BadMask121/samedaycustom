import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { Navigation, SideContent } from "../src/components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);
export default (): ReactNode => (
	<div className="mainContainer">
		<script src="https://use.fontawesome.com/52c91e123c.js"></script>
		<Navigation />
		<SideContent />
	</div>
);
