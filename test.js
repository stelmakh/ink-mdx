import React from 'react';
import {render} from 'ink-testing-library';
import test from 'ava';
import MDXComponent from '.';

test('render h1', t => {
	const {frames, unmount} = render(<MDXComponent content="# H1" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H1'];

	t.deepEqual(uniqueFrames, expected);
});

test('render h2', t => {
	const {frames, unmount} = render(<MDXComponent content="## H2" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H2'];

	t.deepEqual(uniqueFrames, expected);
});

test('render h3', t => {
	const {frames, unmount} = render(<MDXComponent content="### H3" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H3'];

	t.deepEqual(uniqueFrames, expected);
});

test('render h4', t => {
	const {frames, unmount} = render(<MDXComponent content="#### H4" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H4'];

	t.deepEqual(uniqueFrames, expected);
});

test('render h5', t => {
	const {frames, unmount} = render(<MDXComponent content="##### H5" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H5'];

	t.deepEqual(uniqueFrames, expected);
});

test('render h6', t => {
	const {frames, unmount} = render(<MDXComponent content="# H6" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H6'];

	t.deepEqual(uniqueFrames, expected);
});

test('render blockquote', t => {
	const content = `
> blockquote
> here
`;

	const {frames, unmount} = render(<MDXComponent content={content} />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['\n\n | blockquote\n | here\n\n'];

	t.deepEqual(uniqueFrames, expected);
});
