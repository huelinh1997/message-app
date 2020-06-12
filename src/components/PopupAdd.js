import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Label,
	Form,
	Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { FormGroup } from "@material-ui/core";
import SelectOption from "../components/Select";

const PropsType = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	onComfirm: PropTypes.func,
};

const PopupAdd = ({
	open,
	onClose,
	onComfirm,
	formState,
	handleChange,
	handleOnClose,
}) => {
	return (
		<Modal isOpen={open} toggle={handleOnClose} id='exampleModalCenter'>
			<ModalHeader toggle={handleOnClose}>
				{formState.id ? "Edit new message" : "Create new message"}
			</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup>
						<Label>{`Message`}</Label>
						<Input
							type='text'
							name='message'
							value={formState.message === undefined ? "" : formState.message}
							onChange={(event) => handleChange(event)}
						/>
					</FormGroup>
					<FormGroup className='mt-3'>
						<Label>{`Type`}</Label>
						<SelectOption
							handleChangeOption={handleChange}
							type={formState.type === undefined ? "" : formState.type}
						/>
					</FormGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button className='blue-dark' color='primary' onClick={onComfirm}>
					{formState.id ? "Edit" : "Create"}
				</Button>
				<Button color='secondary' onClick={handleOnClose}>
					close
				</Button>
			</ModalFooter>
		</Modal>
	);
};
PopupAdd.propTypes = PropsType;

export default PopupAdd;
