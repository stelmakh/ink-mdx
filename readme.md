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

#### Supported components

- [x] `p`
- [x] `h1`
- [x] `h2`
- [x] `h3`
- [x] `h4`
- [x] `h5`
- [x] `h6`
- [x] `blockquote`
- [x] `ul`
- [x] `ol`
- [x] `li`
- [ ] `table`
- [ ] `thead`
- [ ] `tbody`
- [ ] `tr`
- [ ] `td`/`th`
- [ ] `code`
- [ ] `inlineCode`
- [ ] `pre`
- [x] `em`
- [x] `strong`
- [x] `del`
- [ ] `hr`
- [ ] `a`
- [ ] `img`
