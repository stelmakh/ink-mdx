export type ComponentType =
	| 'a'
	| 'blockquote'
	| 'code'
	| 'del'
	| 'em'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'hr'
	| 'img'
	| 'inlineCode'
	| 'li'
	| 'ol'
	| 'p'
	| 'pre'
	| 'strong'
	| 'sup'
	| 'table'
	| 'td'
	| 'thematicBreak'
	| 'tr'
	| 'ul';

export type MDXComponentProps = {
	parentName: ComponentType;
	originalType: ComponentType;
	mdxType: ComponentType;
	children: string;
};

export type MDXComponent = {
	props: MDXComponentProps;
};

export type ComponentProps = {
	children: MDXComponent;
};
