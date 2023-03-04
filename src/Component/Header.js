import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
export default function Header() {
return (
	<AppBar position="static" color="inherit">
		<Toolbar>

		<Typography variant="h6"
			component="div" align="center" sx={{ flexGrow: 1}}>
			RETIREMENT CALCULATOR
		</Typography>
		</Toolbar>
	</AppBar>
);
}
