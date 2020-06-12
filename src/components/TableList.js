import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	headRight: {
		color: "rgba(0, 0, 0, 0.54)",
		display: "flex",
		alignItems: "flex-end",
	},
	btnAdd: {
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.04)",
			cursor: "pointer",
		},
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const PropsType = {
	handleOpenModal: PropTypes.func,
	handleDelete: PropTypes.func,
	handleEdit: PropTypes.func,
	list: PropTypes.array,
	searchMessage: PropTypes.func,
};

function TableList({
	handleOpenModal,
	handleDelete,
	handleEdit,
	list,
	searchMessage,
}) {
	const classes = useStyles();
	const [search, setSearch] = useState(null);

	useEffect(() => {
		if (search !== null) {
			searchMessage({ search });
		}
	}, [search]);

	const getType = (type) => {
		if (Number(type) === 1) {
			return "Dev";
		} else if (Number(type) === 2) {
			return "BA";
		} else return "Both";
	};

	const handleChangeSearch = useCallback(
		debounce((value) => {
			setSearch(value);
		}, 300),
		[]
	);
	console.log("search:", search);

	return (
		<TableContainer className='container'>
			<div className='d-flex justify-content-between align-items-end p-3'>
				<h5 className='m-0'>App</h5>
				<div className={classes.headRight}>
					<TextField
						id='standard-basic'
						label='Search'
						// value={search}
						onChange={(e) => handleChangeSearch(e.target.value)}
					/>
					<span onClick={handleOpenModal} className={`${classes.btnAdd} ml-2`}>
						<AddBoxIcon />
					</span>
				</div>
			</div>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Message</TableCell>
						<TableCell align='center'>Type</TableCell>
						<TableCell align='right'>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{list.map((item, index) => {
						return (
							<TableRow>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{item.mes}</TableCell>
								<TableCell align='center' component='th' scope='row'>
									{getType(item.type)}
								</TableCell>
								<TableCell align='right' component='th' scope='row'>
									<span className=''>
										<span
											onClick={() => handleEdit(item)}
											className={`${classes.btnAdd}`}>
											<EditIcon />
										</span>
										<span
											onClick={() => handleDelete(item.id)}
											className={`${classes.btnAdd}`}>
											<DeleteOutlineIcon />
										</span>
									</span>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

TableList.propTypes = PropsType;

export default TableList;
