# ink-mdx

> Markdown component for [Ink](https://github.com/vadimdemedes/ink). Uses [MDX](https://mdxjs.com/) for markdown rendering.

## Install

```
$ npm install ink-mdx
```

## Usage

```jsx
import React from 'react';
import {render} from 'ink';
import MDX from 'ink-mdx';

render(<MDX content="# Hello" />);
```

## Props

### content

Type: `string`<br>

Markdown content. See [MDX documentation](https://mdxjs.com/table-of-components) for available components.
