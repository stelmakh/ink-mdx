import * as React from 'react';
import type {FC} from 'react';
import {Text} from 'ink';
import {MDXProvider} from '@mdx-js/react';
import MDXRuntime = require('@mdx-js/runtime');

import Blockquote from './components/blockquote';
import ListItem from './components/list-item';
import OrderedList from './components/ordered-list';
import UnorderedList from './components/unordered-list';
import {ComponentProps} from './types';

const components = {
	p: ({children}: ComponentProps) => <Text>{children}</Text>,
	h1: ({children}: ComponentProps) => <Text bold>{children}</Text>,
	h2: ({children}: ComponentProps) => (
		<Text bold dimColor>
			{children}
		</Text>
	),
	h3: ({children}: ComponentProps) => (
		<Text bold inverse>
			{children}
		</Text>
	),
	h4: ({children}: ComponentProps) => (
		<Text bold inverse dimColor>
			{children}
		</Text>
	),
	h5: ({children}: ComponentProps) => <Text inverse>{children}</Text>,
	h6: ({children}: ComponentProps) => (
		<Text inverse dimColor>
			{children}
		</Text>
	),
	blockquote: Blockquote,
	li: ListItem,
	ul: UnorderedList,
	ol: OrderedList
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
