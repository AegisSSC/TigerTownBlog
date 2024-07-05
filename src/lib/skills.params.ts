import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;


	// !TODO: Get the remaining Icons for CUDA, OpenCV, R Lang, MS SQL, MySql
	// !TODO: Investigate switching between the Dark and Light Rust Logo depending on "Light" or "Dark" mode. 
const MY_SKILLS = [
	s({
		slug: 'python',
		color: 'blue',
		description: 'Python',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'rust',
		color: 'orange',
		description: 'Rust',
		logo: Assets.Rust,
		name: 'Rust'
	}),
	s({
		slug: 'clang',
		color: 'blue',
		description: 'C Programming Language',
		logo: Assets.C,
		name: 'C Lang'
	}),
	s({
		slug: 'Cpp',
		color: 'blue',
		description: 'C++ Programming Language',
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'Csharp',
		color: 'purple',
		description: 'C# Programming Language',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'cuda',
		color: 'green',
		description: 'CUDA GPU Programming',
		logo: Assets.Cuda,
		name: 'CUDA'
	}),
	s({
		slug: 'opencv',
		color: 'white',
		description: 'Open CV Computer Vision Library',
		logo: Assets.OpenCV,
		name: 'OpenCV'
	}),
	s({
		slug: 'rlang',
		color: 'red',
		description: 'R Statistical Programming Language',
		logo: Assets.RLang,
		name: 'R Lang'
	}),
	s({
		slug: 'mssql',
		color: 'red',
		description: 'Microsoft SQL Server',
		logo: Assets.MSSQL,
		name: 'MS SQL'
	}),
	s({
		slug: 'mysql',
		color: 'red',
		description: 'MySQL',
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'ros',
		color: 'green',
		description: 'ROS or Robotic Operating System',
		logo: Assets.ROS,
		name: 'ROS'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
