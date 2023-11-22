import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Northcoders',
		description: `Training in cloud, devops and software development under expert guidance.
		From JavaScript fundamentals, writing APIs, test-driven-development (TDD) to AWS, TerraForm, Docker and Kubernetes.
		 `,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Manchester, UK',
		period: { from: new Date(2023,8,10) },
		skills: getSkills('aws', 'node','postgres','javascript','express','jest'),
		name: 'Junior Cloud and Devops Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Northcoders,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
