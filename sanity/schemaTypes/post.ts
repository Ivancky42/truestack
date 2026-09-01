import {defineArrayMember, defineField, defineType} from "sanity";
import {INSIGHT_CATEGORIES} from "../../lib/insights/types";

const relatedProductOptions = [
	{title: "TrueKredit™", value: "truekredit"},
	{title: "TrueSyariah™", value: "truesyariah"},
	{title: "TrueP2P™", value: "truep2p"},
	{title: "KPKT digital licence", value: "digitalLicense"},
	{title: "KPKT account management", value: "accountManagement"},
	{title: "TrueIdentity™", value: "trueidentity"},
	{title: "TrueSSM™", value: "truessm"},
];

export const insightAuthorType = defineType({
	name: "insightAuthor",
	title: "Author",
	type: "object",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required().min(2).max(80),
		}),
		defineField({
			name: "role",
			title: "Role",
			type: "string",
			validation: (rule) => rule.max(80),
		}),
	],
});

export const insightFaqType = defineType({
	name: "insightFaq",
	title: "FAQ",
	type: "object",
	fields: [
		defineField({
			name: "question",
			title: "Question",
			type: "string",
			validation: (rule) => rule.required().min(10).max(160),
		}),
		defineField({
			name: "answer",
			title: "Answer",
			description:
				"Write a self-contained, factual answer in two to four sentences.",
			type: "text",
			rows: 5,
			validation: (rule) => rule.required().min(80).max(700),
		}),
	],
	preview: {
		select: {title: "question", subtitle: "answer"},
	},
});

export const insightPostType = defineType({
	name: "insightPost",
	title: "Insight",
	type: "document",
	groups: [
		{name: "content", title: "Content", default: true},
		{name: "seo", title: "SEO"},
		{name: "connections", title: "Connections"},
	],
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			group: "content",
			validation: (rule) => rule.required().min(12).max(100),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			group: "content",
			options: {source: "title", maxLength: 80},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			description:
				"A specific 140–200 character summary shown on the Insights page.",
			type: "text",
			rows: 4,
			group: "content",
			validation: (rule) => rule.required().min(140).max(200),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			group: "content",
			options: {
				list: INSIGHT_CATEGORIES.map((category) => ({
					title: category,
					value: category,
				})),
				layout: "radio",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
			group: "content",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "author",
			title: "Author",
			description: 'Defaults to "Truestack team" when omitted.',
			type: "insightAuthor",
			group: "content",
		}),
		defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			group: "content",
			options: {hotspot: true},
			validation: (rule) => rule.required(),
			fields: [
				defineField({
					name: "alt",
					title: "Alternative text",
					type: "string",
					validation: (rule) => rule.required().min(8).max(180),
				}),
			],
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			group: "content",
			of: [
				defineArrayMember({
					type: "block",
					styles: [
						{title: "Normal", value: "normal"},
						{title: "Heading 2", value: "h2"},
						{title: "Heading 3", value: "h3"},
						{title: "Heading 4", value: "h4"},
						{title: "Quote", value: "blockquote"},
					],
					lists: [
						{title: "Bullet", value: "bullet"},
						{title: "Numbered", value: "number"},
					],
					marks: {
						decorators: [
							{title: "Strong", value: "strong"},
							{title: "Emphasis", value: "em"},
						],
						annotations: [
							defineArrayMember({
								name: "link",
								title: "Link",
								type: "object",
								fields: [
									defineField({
										name: "href",
										title: "URL",
										type: "url",
										validation: (rule) =>
											rule.required().uri({
												allowRelative: true,
												scheme: ["http", "https", "mailto", "tel"],
											}),
									}),
								],
							}),
						],
					},
				}),
				defineArrayMember({
					type: "image",
					options: {hotspot: true},
					fields: [
						defineField({
							name: "alt",
							title: "Alternative text",
							type: "string",
							validation: (rule) => rule.required().min(8).max(180),
						}),
					],
				}),
			],
			validation: (rule) => rule.required().min(3),
		}),
		defineField({
			name: "faq",
			title: "Frequently asked questions",
			type: "array",
			group: "content",
			of: [defineArrayMember({type: "insightFaq"})],
			validation: (rule) => rule.max(8),
		}),
		defineField({
			name: "seoTitle",
			title: "SEO title",
			description:
				"Optional. Defaults to the article title. Keep this at 60 characters or fewer.",
			type: "string",
			group: "seo",
			validation: (rule) => rule.max(60),
		}),
		defineField({
			name: "seoDescription",
			title: "SEO description",
			description:
				"Write 140–160 characters containing the article's primary Malaysian search term.",
			type: "text",
			rows: 3,
			group: "seo",
			validation: (rule) => rule.required().min(140).max(160),
		}),
		defineField({
			name: "relatedProducts",
			title: "Related products and services",
			description:
				"Choose at least one useful next step. These become internal links.",
			type: "array",
			group: "connections",
			of: [
				defineArrayMember({
					type: "string",
					options: {list: relatedProductOptions},
				}),
			],
			options: {layout: "tags"},
			validation: (rule) => rule.required().min(1).max(4).unique(),
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			group: "connections",
			of: [defineArrayMember({type: "string"})],
			options: {layout: "tags"},
			validation: (rule) => rule.max(8).unique(),
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "category",
			media: "mainImage",
		},
	},
	orderings: [
		{
			title: "Published, newest first",
			name: "publishedAtDesc",
			by: [{field: "publishedAt", direction: "desc"}],
		},
	],
});
