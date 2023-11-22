import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'northcoders',
		company: 'Northcoders',
		description: `Training in cloud, devops and software development under expert guidance.
		From JavaScript fundamentals, writing APIs, designing databases, test-driven-development (TDD) to AWS, TerraForm, Docker and Kubernetes.
		 `,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Manchester, UK',
		period: { from: new Date(2023,8,10) },
		skills: getSkills('aws', 'node','postgres','javascript','express','jest', 'terraform', 'docker','kubernetes'),
		name: 'Junior Cloud and Devops Engineer',
		color: '#ffffff',
		links: [{to: 'https://northcoders.com/', label:'Northcoders.com'}],
		logo: Assets.Northcoders,
		shortDescription: ''
	},
	{
		slug: 'adamah',
		company: 'Adamah Media',
		description: 'Completed data migration to different server to meet the client\'s budget.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Manchester',
		period: { from: new Date(2023,6,2), to: new Date(2023,7,2) },
		skills: getSkills(''),
		name: 'Data Migration Technician (Freelance)',
		color: '#ffffff',
		links: [],
		logo: Assets.Adamah,
		shortDescription: ''
	},
	{
		slug: 'music-teacher',
		company: 'CityWise',
		description: 'Volunteer mentor and music teacher for children from disadvantaged backgrounds.',
		contract: ContractType.PartTime,
		type: 'Volunteer',
		location: 'Manchester',
		period: { from: new Date(2021, 8, 1), to: new Date(2022, 2, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Music teacher',
		color: '#ffffff',
		links: [],
		logo: Assets.Citywise,
		shortDescription: ''
	},
	{
		slug: 'acoustic-engineer',
		company: 'Sandy Brown LLC',
		description: 'Consulted contractors and architects on acoustic design for rooms and buildings.',
		contract: ContractType.PartTime,
		type: 'Volunteer',
		location: 'London and Manchester',
		period: { from: new Date(2017, 7, 1), to: new Date(2019,6,1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Assistant Acoustic Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Sandybrown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
