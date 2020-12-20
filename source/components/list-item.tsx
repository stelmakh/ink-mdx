import * as React from 'react';
import {Text} from 'ink';
import type {ComponentProps} from '../types';

/**
 * List item component.
 */
const ListItem = (props: ComponentProps) => {
	return <Text>{props.children}</Text>;
};

export default ListItem;
