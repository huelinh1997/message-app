import React, { useState, useEffect } from "react";
import TableList from "./TableList";
import PopupAdd from "../components/PopupAdd";
import PopupConfirm from "../components/PopupConfirm";
import { connect } from "react-redux";
import {
	getMessageRequest,
	addMessageRequest,
	updateMessageRequest,
	deleteMessageRequest,
	searchMessageRequest,
} from "../actions/Action";

const Content = ({
	addMessage,
	getDataMes,
	listMes,
	updateMessage,
	deleteMessage,
	searchMessage,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);
	const [formState, setFormState] = useState({ message: "", type: 1 });
	const [deleteId, setDeleteId] = useState(null);

	useEffect(() => {
		getDataMes();
	}, []);

	const handleOpenModal = () => {
		setIsOpen(!isOpen);
	};

	const handleOnClose = () => {
		setFormState({});
		setIsOpen(!isOpen);
	};

	const handleChange = (e) => {
		e.persist();
		setFormState((formState) => ({
			...formState,
			[e.target.name]: e.target.value,
		}));
	};

	const confirmMessage = () => {
		if (!formState.id) {
			addMessage({ mes: formState.message, type: formState.type });
		} else {
			updateMessage(
				{ mes: formState.message, type: formState.type },
				formState.id
			);
		}
		setIsOpen(!isOpen);
	};

	const confirmDelete = () => {
		deleteMessage(deleteId);
		setIsOpenConfirm(!isOpenConfirm);
	};

	const handleDelete = (id) => {
		setDeleteId(id);
		setIsOpenConfirm(!isOpenConfirm);
	};

	const handleEdit = (item) => {
		setFormState({ ...item, message: item.mes });
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<TableList
				handleOpenModal={handleOpenModal}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				searchMessage={searchMessage}
				list={listMes}
			/>
			<PopupAdd
				open={isOpen}
				handleOnClose={handleOnClose}
				formState={formState}
				handleChange={handleChange}
				onComfirm={confirmMessage}
			/>
			<PopupConfirm
				open={isOpenConfirm}
				onClose={() => setIsOpenConfirm(!isOpenConfirm)}
				onComfirm={confirmDelete}
			/>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		listMes: state.listMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getDataMes: () => {
			dispatch(getMessageRequest());
		},
		addMessage: (data) => {
			dispatch(addMessageRequest(data));
		},
		updateMessage: (data, id) => {
			dispatch(updateMessageRequest(data, id));
		},
		deleteMessage: (id) => {
			dispatch(deleteMessageRequest(id));
		},

		searchMessage: (data) => {
			dispatch(searchMessageRequest(data));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
