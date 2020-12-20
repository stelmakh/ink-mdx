import * as React from 'react';
import {Newline, Text} from 'ink';
import type {ListComponentProps} from '../types';

/**
 * Ordered list component.
 */
const OrderedList = (props: ListComponentProps) => {
	return (
		<Text>
			<Newline />
			{props.children.map((child, i) => (
				<Text key={Math.random()}>
					{i + 1}. {child.props.children}
					<Newline />
				</Text>
			))}
		</Text>
	);
};

export default OrderedList;
