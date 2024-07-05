import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

// !TODO: Get the Icons for FastFetch, Freelancer, CCIT, CUCECAS EE, CUCECAS ME
const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'software-fastfetch',
		company: 'FastFetch Corp.',
		description: 'Creating software driven solutions.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Seneca, South Carolina, USA',
		period: { from: new Date(2022, 5, 6) },
		skills: getSkills('clang', 'csharp', 'python', 'rust'),
		name: 'Software Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Collection of Projects.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2018,6,6) },
		skills: getSkills('svelte','python', 'rust', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'it-clemson',
		company: 'Clemson University CCIT Division',
		description: 'Supporting Clemson\'s critical cyber infrastructure.',
		contract: ContractType.PartTime,
		type: 'Information Technology support',
		location: 'Clemson, South Carolina, USA',
		period: { from: new Date(2021,1,1), to: new Date(2022,4,4) },
		skills: getSkills('python', 'mysql'),
		name: 'Student Consulting Lead',
		color: '#ffffff',
		links: [],
		logo: Assets.ClemsonGeneral,
		shortDescription: ''
	},
	{
		slug: 'software-researcher-EE',
		company: 'Clemson University Department of Electrical Engineering',
		description: 'Undergraduate Researcher working in partnership with LANL.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Clemson, South Carolina, USA',
		period: { from: new Date(2022,0,1), to: new Date(2022,4,6) },
		skills: getSkills('python', 'clang', 'cpp', 'cuda', 'opencv'),
		name: 'Undergraduate Researcher',
		color: '#ffffff',
		links: [],
		logo: Assets.ClemsonGeneral,
		shortDescription: ''
	},
	{
		slug: 'software-researcher-ME',
		company: 'Clemson Unviersity Department of Mechanical Engineering',
		description: 'Undergraduate Computer Vision Researcher working in partnership with Raytheon.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Clemson, South Carolina, USA',
		period: { from: new Date(2020,0,6), to: new Date(2022, 1,1)},
		skills: getSkills('python', 'opencv', 'cpp', 'cuda', 'ros'),
		name: 'Undergraduate Research Assistant',
		color: '#ffffff',
		links: [],
		logo: Assets.ClemsonGeneral,
		shortDescription: ''
	},

];

export default MY_EXPERIENCES;
