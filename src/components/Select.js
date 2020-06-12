import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function SelectOption({ handleChangeOption, type }) {
	const classes = useStyles();
	return (
		<FormControl className={classes.formControl}>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				name='type'
				value={type}
				onChange={handleChangeOption}>
				<MenuItem value={1}>Dev</MenuItem>
				<MenuItem value={2}>BA</MenuItem>
				<MenuItem value={3}>Both</MenuItem>
			</Select>
		</FormControl>
	);
}

SelectOption.propTypes = {};

export default SelectOption;
