import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import Content from './Content';

interface IAppgradientProps {
	children: any;
	colors: string[];
}

const AppGradient: FC<IAppgradientProps> = ({ children, colors }) => {
	return (
		<LinearGradient colors={colors} className='flex-1'>
			<Content>{children}</Content>
		</LinearGradient>
	);
};

export default AppGradient;
