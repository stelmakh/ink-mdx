import * as React from 'react';
import type {FC} from 'react';
import {Text} from 'ink';
import {MDXProvider} from '@mdx-js/react';
import MDXRuntime = require('@mdx-js/runtime');

type MDXElementProps = {
	children: React.ReactNode;
};

const components = {
	h1: ({children}: MDXElementProps) => <Text bold>{children}</Text>,
	p: ({children}: MDXElementProps) => <Text>{children}</Text>
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
