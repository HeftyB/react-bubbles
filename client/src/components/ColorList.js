import React, { useState } from "react";
import useForm from "./useForm";
import axiosWithAuth from "../protected/axiosWithAuth";

const initialColor = {
	color: "",
	code: { hex: "" },
};

const ColorList = ({ colors, updateColors }) => {
	const [addFormValues, setAddFormsValues, setValues] = useForm(initialColor);
	const [editing, setEditing] = useState(false);
	const [colorToEdit, setColorToEdit] = useState(initialColor);

	const editColor = color => {
		setEditing(true);
		setColorToEdit(color);
	};

	const saveEdit = e => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/api/colors/${colorToEdit.id}`, colorToEdit)
			.then(res => {
				getData();
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	};

	const deleteColor = color => {
		axiosWithAuth()
			.delete(`/api/colors/${color.id}`)
			.then(res => {
				getData();
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	};

	const getData = () => {
		axiosWithAuth()
			.get("/api/colors")
			.then(res => updateColors(res.data))
			.catch(error => {
				console.log(error);
				debugger;
			});
	};

	const addColor = event => {
		event.preventDefault();
		axiosWithAuth()
			.post("/api/colors", addFormValues)
			.then(res => {
				getData();
				setValues(initialColor);
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	};

	return (
		<div className="colors-wrap">
			<p>colors</p>
			<ul>
				{colors.map(color => (
					<li key={color.color} onClick={() => editColor(color)}>
						<span>
							<span
								className="delete"
								onClick={e => {
									e.stopPropagation();
									deleteColor(color);
								}}>
								x
							</span>{" "}
							{color.color}
						</span>
						<div
							className="color-box"
							style={{ backgroundColor: color.code.hex }}
						/>
					</li>
				))}
			</ul>
			{editing && (
				<form onSubmit={saveEdit}>
					<legend>edit color</legend>
					<label>
						color name:
						<input
							onChange={e =>
								setColorToEdit({
									...colorToEdit,
									color: e.target.value,
								})
							}
							value={colorToEdit.color}
						/>
					</label>
					<label>
						hex code:
						<input
							onChange={e =>
								setColorToEdit({
									...colorToEdit,
									code: { hex: e.target.value },
								})
							}
							value={colorToEdit.code.hex}
						/>
					</label>
					<div className="button-row">
						<button type="submit">save</button>
						<button onClick={() => setEditing(false)}>
							cancel
						</button>
					</div>
				</form>
			)}
			<form onSubmit={addColor}>
				Add a Color:
				<label>
					{" "}
					Color: {"  "}
					<input
						type="text"
						name="color"
						value={addFormValues.color}
						onChange={setAddFormsValues}
					/>
				</label>
				<label>
					{" "}
					Hex: {"  "}
					<input
						type="text"
						name="hex"
						value={addFormValues.code.hex}
						onChange={event =>
							setValues({
								...addFormValues,
								code: { hex: event.target.value },
							})
						}
					/>
				</label>
				<div className="button-row">
					<button>Submit</button>
				</div>
			</form>
			<div className="spacer" />
		</div>
	);
};

export default ColorList;
