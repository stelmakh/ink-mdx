import * as React from 'react';
import {Newline, Text} from 'ink';
import type {ListComponentProps} from '../types';

/**
 * Unordered list component.
 */
const UnorderedList = (props: ListComponentProps) => {
	return (
		<Text>
			<Newline />
			{props.children.map(child => (
				<Text key={Math.random()}>
					- {child.props.children}
					<Newline />
				</Text>
			))}
		</Text>
	);
};

export default UnorderedList;
