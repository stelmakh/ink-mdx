import * as React from 'react';
import type {FC} from 'react';
import {Text} from 'ink';
import {MDXProvider} from '@mdx-js/react';
import MDXRuntime = require('@mdx-js/runtime');

type MDXElementProps = {
	children: React.ReactNode;
};

const components = {
	p: ({children}: MDXElementProps) => <Text>{children}</Text>,
	h1: ({children}: MDXElementProps) => <Text bold>{children}</Text>,
	h2: ({children}: MDXElementProps) => (
		<Text bold dimColor>
			{children}
		</Text>
	),
	h3: ({children}: MDXElementProps) => (
		<Text bold inverse>
			{children}
		</Text>
	),
	h4: ({children}: MDXElementProps) => (
		<Text bold inverse dimColor>
			{children}
		</Text>
	),
	h5: ({children}: MDXElementProps) => <Text inverse>{children}</Text>,
	h6: ({children}: MDXElementProps) => (
		<Text inverse dimColor>
			{children}
		</Text>
	)
};

interface Props {
	/**
	 * MDX content.
	 */
	content: string;
}

/**
 * MDX.
 */
const MDXComponent: FC<Props> = ({content}) => {
	return (
		<MDXProvider components={components}>
			<MDXRuntime>{content}</MDXRuntime>
		</MDXProvider>
	);
};

export default MDXComponent;
