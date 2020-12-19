import React from 'react';
import {render} from 'ink-testing-library';
import test from 'ava';
import MDXComponent from '.';

test('render h1', t => {
	const {frames, unmount} = render(<MDXComponent content="# Hello" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['Hello'];

	t.deepEqual(uniqueFrames, expected);
});
