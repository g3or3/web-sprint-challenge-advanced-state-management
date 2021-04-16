import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSmurf, setError } from "../store/smurfSlice";

const initialFormState = {
	name: "",
	position: "",
	nickname: "",
	description: "",
};

const AddForm = (props) => {
	const { errorMsg } = useSelector((state) => state.smurfs);
	const dispatch = useDispatch();

	const [form, setForm] = useState(initialFormState);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const validate = () => {
		return form.name === "" || form.position === "" || form.nickname === ""
			? false
			: true;
	};

	const errorMessage = "Name, position and nickname fields are required.";

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, position, nickname, description } = form;
		const id = Math.random() * 1000000;

		validate()
			? dispatch(addSmurf({ id, name, position, nickname, description }))
			: dispatch(setError(errorMessage));

		setForm(initialFormState);
	};

	return (
		<section>
			<h2>Add Smurf</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<br />
					<input
						onChange={handleChange}
						value={form.name}
						name="name"
						id="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="position">Position:</label>
					<br />
					<input
						onChange={handleChange}
						value={form.position}
						name="position"
						id="position"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="nickname">Nickname:</label>
					<br />
					<input
						onChange={handleChange}
						value={form.nickname}
						name="nickname"
						id="nickname"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description:</label>
					<br />
					<textarea
						onChange={handleChange}
						value={form.description}
						name="description"
						id="description"
					/>
				</div>
				{errorMsg && (
					<div
						data-testid="errorAlert"
						className="alert alert-danger"
						role="alert"
					>
						Error: {errorMsg}
					</div>
				)}
				<button>Submit Smurf</button>
			</form>
		</section>
	);
};

export default AddForm;

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
