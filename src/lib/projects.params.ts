import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';


// !TODO: Get the logos for: Intellipack Web App, Rust Data, PowerBI, MSTeams, Github, SNS, OpenCV, CUCECAS EE, CUCECAS ME
const MY_PROJECTS: Array<Project> = [
	{
		slug: 'fastfetch-cubing-web-service',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'A Rust driven web app to host the FastFetch Intellipack Web Application.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'FastFetch Cubing Web Service',
		period: {
			from: new Date(2023,8,8)
		},
		skills: getSkills('rust', 'clang', 'csharp', 'mysql'),
		type: 'Software Development'
	},
	{
		slug: 'fastfetch-software-rustypipe',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'A Rust driven Data Scraper to connect to Microsoft PowerBI Reporting Software.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Rust,
		name: 'Rust Data Pipeline',
		period: {
			from: new Date(2023,6,8)
		},
		skills: getSkills('rust', 'python', 'mssql'),
		type: 'Software Development'
	},
	{
		slug: 'fastfetch-powerbi-reporting',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Revision of outdated Reporting software to use Microsoft Power BI',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.PowerBI,
		name: 'PowerBI Reporting Software',
		period: {
			from: new Date(2023, 2,1), to: new Date(2023, 9,1)
		},
		skills: getSkills('python', 'mssql'),
		type: 'Software Integration'
	},
	{
		slug: 'fastfetch-teams-integration',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Company Wide Initiative to use Internal Communication through Microsoft Teams',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Teams,
		name: 'Microsoft Teams Initiative',
		period: {
			from: new Date(2023, 1,1), to: new Date(2023, 10, 1)
		},
		skills: getSkills(''),
		type: 'Software Integration'
	},
	{
		slug: 'fastfetch-github-integration',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Company Wide Initiative to use a standardized Version Control System',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Github,
		name: 'Version Control System Initiative',
		period: {
			from: new Date(2022, 11,1), to: new Date(2023, 5, 1)
		},
		skills: getSkills('github'),
		type: 'Software Integration'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio Website',
		period: {
			from: new Date(2023, 11, 9)
		},
		skills: getSkills('svelte', 'tailwind'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'fastfetch-SNS',
		color: '#ff3e00',
		description:
			'A Full Scale Live Logistics Network for Shipping assortment of Agricultural Products from Augusta, GA.',
		shortDescription:
			'A Full Scale Live Logistics Network for Shipping assortment of Agricultural Products from Augusta, GA..',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Seeds \'n \' Such Site Installation',
		period: {
			from: new Date(2022, 8, 20)
		},
		skills: getSkills('python', 'csharp', 'clang', 'cpp', 'mssql'),			//!TODO: add Project Management as a "Skill" and tag this
		type: 'Site Installation',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'clemson-cs-opencv',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Open-CV Driven project investigating tracking of NFL Players from Game Footage',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.OpenCV,
		name: 'NFL OpenCV',
		period: {
			from: new Date(2022,0,1), to: new Date(2022,4,6)
		},
		skills: getSkills('python', 'opencv', 'rlang'),
		type: 'Software Project'
	},
	{
		slug: 'clemson-ee-lanl',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Computational Exploration of Lossy and Lossless Compression Algorithms',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.ClemsonGeneral,
		name: 'College of Electrical Engineering Research Project',
		period: {
			from: new Date(2022,0,1), to: new Date(2022,4,6)
		},
		skills: getSkills('cuda', 'opencv', 'python', 'clang'),
		type: 'Software Internship'
	},
	{
		slug: 'clemson-me-raytheon',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Exploration into Computer Vision Guided Micro Arial Vehicles',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.ClemsonGeneral,
		name: 'College of Mechanical Engineering Research Project',
		period: {
			from: new Date(2020,0,6), to: new Date(2022, 1,1)
		},
		skills: getSkills('python', 'opencv', 'cuda', 'cpp', 'clang', ),
		type: 'Software Internship'
	},
];

export default MY_PROJECTS;
