import {
	FC,
	useState,
	useContext,
	createContext,
} from 'react';

interface ICustomProvider {
	children: React.ReactNode;
	initialValue: any;
	other: Object;
}


export const CustomContext = createContext<any>({});

export const CustomProvider: FC<ICustomProvider> = ({ children, initialValue, other }) => {
	const [val, setVal] = useState<typeof initialValue>(initialValue);

	return (
		<CustomContext.Provider value={{ val, setVal, ...other }}>
			{children}
		</CustomContext.Provider>
	);
};

export function useCustomContext<T>() {
	const context = useContext<T>(CustomContext);
	if (context === undefined) {
		throw new Error('CustomContext must be used within a CustomProvider');
	}

	return context;
}


