import Assets from './data/assets';
import type { Education } from './types';
// !TODO: Get the Icons for Clemson Unviersity and White Knoll Highschool

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelors of Science in Computer Science',
		description: '',
		location: 'South Carolina, USA',
		logo: Assets.ClemsonAcademic, 			//Add in the Clemson University Crest
		name: '',
		organization: 'Clemson University',
		period: { from: new Date(2018, 1, 1), to: new Date(2022, 1, 1) },
		shortDescription: 'Minor in Engineering',
		slug: 'dummy-education-item',
		subjects: ['Computer Architecture', 'Algorithms and Data Structures', 'C++', 'Java', 'English', 'German', 'GPU Programming', 'Computer Vision', 'High Performance Computing', 'Linear Algebra', 'Operating Systems' ]
	},
	{
		degree: 'High School Diploma',
		description: '',
		location: 'South Carolina, USA',
		logo: Assets.WKHS,		//Add in The White Knoll Crest
		name: '',
		organization: 'White Knoll High',
		period: { from: new Date(2014, 0, 1), to: new Date(2018, 1,1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C', 'Computer Architecture','Algebra', 'Calculus', 'Geometry', 'German']
	},
];
