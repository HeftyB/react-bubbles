import { useState } from "react";

export default function useForm(initialValue) {
	const [values, setValues] = useState(initialValue);

	const handleChanges = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return [values, handleChanges, setValues];
}
