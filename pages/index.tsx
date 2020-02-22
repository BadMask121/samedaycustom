import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Navigation, SideContent } from "../src/components";
library.add(fab, fas);
import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		brand: {
			900: "#1a365d",
			800: "#153e75",
			700: "#2a69ac",
		},
	},
};
export default (): ReactNode => {
	const [state, setstate] = useState({
		isNavOpen: false,
	});

	const openNav = (condition: boolean) => setstate({ isNavOpen: condition });

	const { isNavOpen } = state;
	return (
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			<div className="mainContainer">
				<Navigation {...{ isNavOpen }} {...{ openNav }} />
				<SideContent {...{ isNavOpen }} />
			</div>
			<style jsx>
				{`
					.mainContainer {
						display: grid;
						grid-template-columns: ${(isNavOpen && "15rem") ||
								"4rem"} 1fr;
						grid-row-gap: 1rem;
						height: inherit;
						width: inherit;
					}
				`}
			</style>
		</ThemeProvider>
	);
};
