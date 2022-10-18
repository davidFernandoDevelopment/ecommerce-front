import { ChangeEvent, FocusEvent, useEffect, useMemo, useState } from 'react';

//* Interface key = propiedad, value: [función, mensaje de error].
export type FormValidation<T> = {
	[key in keyof T]: [(...args: any[]) => boolean, string];
};

//* Se agrega nuevas propiedades con el formato [${prop}Valid] para representar propiedades válidas.
type FormResult<T> = {
	[key in keyof T as `${string & key}Valid`]: string;
};

//* Verificar si una propiedad fue tocada.
type FormVerify<T> = { [key in keyof T]: boolean };

//* Se requiere 2 parámetros genéricos T = Tipo de dato del state, [U = Sale de las props de T].
export const useForm = <T, U extends keyof T = keyof T>(
	initialForm: T,
	formValidations?: FormValidation<T>
) => {
	const [formState, setFormState] = useState<T>(initialForm);
	const [formValidation, setFormValidation] = useState<FormResult<T>>(
		{} as FormResult<T>
	);
	const [touched, setTouched] = useState<FormVerify<T>>({} as FormVerify<T>);

	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (formValidation[formValue as keyof FormResult<T>] !== '') return false;
		}

		return true;
	}, [formValidation]);

	useEffect(() => {
		createValidators();
		//eslint-disable-next-line
	}, [formState]);

	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
		setTouched({
			...touched,
			[name]: true,
		});
	};

	const onBlurChange = (e: FocusEvent<HTMLInputElement>) => {
		const { name } = e.target;
		setTouched({
			...touched,
			[name]: true,
		});
	};

	const checkAllTouched = () => {
		let result: FormVerify<T> = {} as FormVerify<T>;
		if (formState) {
			for (const iterator of Object.keys(formState)) {
				result = {
					...result,
					[iterator]: true,
				};
			}
			setTouched(result);
		}
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = () => {
		const formCheckValues: any = {};
		if (formValidations) {
			for (const formField of Object.keys(formValidations)) {
				let newProp: U = formField as U;
				const [fn, errorMessage] = formValidations[newProp];
				formCheckValues[`${formField}Valid`] = fn(formState[newProp])
					? ''
					: !!formState[newProp]
					? errorMessage
					: 'Campo requerido';
			}
			setFormValidation(formCheckValues);
		}
	};

	return {
		...formState,
		...formValidation,
		touched,
		checkAllTouched,
		isFormValid,
		formState,
		onInputChange,
		onResetForm,
		onBlurChange,
	};
};
