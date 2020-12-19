# ink-mdx

> Markdown component for [Ink](https://github.com/vadimdemedes/ink). Uses [MDX](https://mdxjs.com/) for markdown rendering.

## Install

```
$ npm install https://github.com/stelmakh/ink-mdx
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

#### Supported components

- `p`
- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`
