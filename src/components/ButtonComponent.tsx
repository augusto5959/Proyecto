import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props {
	textButton: string;
	actionButton: () => void;
}

export const ButtonComponent = ({
	textButton,
	actionButton,
}: Props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={actionButton}>
			<Text style={styles.buttonText}>{textButton}</Text>
		</TouchableOpacity>
	);
};
