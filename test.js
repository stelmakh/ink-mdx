import React from 'react';
import {render} from 'ink-testing-library';
import test from 'ava';
import MDXComponent from '.';

test('render h1', t => {
	const {frames, unmount} = render(<MDXComponent content="# H1" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H1'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render h2', t => {
	const {frames, unmount} = render(<MDXComponent content="## H2" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H2'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render h3', t => {
	const {frames, unmount} = render(<MDXComponent content="### H3" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H3'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render h4', t => {
	const {frames, unmount} = render(<MDXComponent content="#### H4" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H4'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render h5', t => {
	const {frames, unmount} = render(<MDXComponent content="##### H5" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H5'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render h6', t => {
	const {frames, unmount} = render(<MDXComponent content="# H6" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['H6'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

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

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render ul', t => {
	const content = `
- first
- second
`;

	const {frames, unmount} = render(<MDXComponent content={content} />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['\n- first\n- second\n'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render ol', t => {
	const content = `
1. first
1. second
`;

	const {frames, unmount} = render(<MDXComponent content={content} />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['\n1. first\n2. second\n'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render em', t => {
	const {frames, unmount} = render(<MDXComponent content="_em_" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['em'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render strong', t => {
	const {frames, unmount} = render(<MDXComponent content="**strong**" />);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['strong'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});

test('render strikethrough', t => {
	const {frames, unmount} = render(
		<MDXComponent content="~~strikethrough~~" />
	);
	unmount();

	const uniqueFrames = [...new Set(frames)];
	const expected = ['strikethrough'];

	if (process.env.CI && uniqueFrames[uniqueFrames.length - 1] === '\n') {
		uniqueFrames.pop();
	}

	t.deepEqual(uniqueFrames, expected);
});
