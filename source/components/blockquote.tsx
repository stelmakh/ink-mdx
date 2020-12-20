import * as React from 'react';
import {Newline, Text} from 'ink';
import type {ComponentProps} from '../types';

/**
 * Blockquote component.
 */
const Blockquote = (props: ComponentProps) => {
	const childrenProps = props.children.props;
	const lines = childrenProps.children.split('\n');

	if (lines.length === 0) return <Newline />;

	return (
		<>
			<Text>
				<Newline />
			</Text>
			{lines.map(line => (
				<Text key={line}> | {line}</Text>
			))}
			<Text>
				<Newline />
			</Text>
		</>
	);
};

export default Blockquote;
