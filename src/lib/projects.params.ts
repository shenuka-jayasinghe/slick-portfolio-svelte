import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'microservices',
		color: '#3bcc53',
		description:
			`Infrastructure `,
		shortDescription:
			`A full-stack book review website using Sveltekit for the frontend, 
			Node with express server for the API
			and PostgreSQL for the database. Click on this card for more information.
			`,
		links: [{ to: 'https://cultured-front-end.onrender.com/', label: 'Visit Website' }, { to: 'https://github.com/shenuka-jayasinghe/book-reviews', label: 'Github' }],
		logo: Assets.Cultured,
		name: 'Cultured',
		period: {
			from: new Date(2023,10, 10)
		},
		skills: getSkills('svelte', 'node', 'aws', 'postgres','express'),
		type: 'Full-stack book review website'
	},
	{
		slug: 'cultured',
		color: '#5e95e3',
		description:
			`A dynamic and responsive full-stack book review website using SvelteKit for the frontend, complemented by the Skeleton UI library for efficient loading transitions and Tailwind CSS for streamlined styling. On the backend, Node.js with Express follows a clean MVC architecture, ensuring organized and maintainable code. The PostgreSQL database is optimized with tailored queries, strategically incorporating Skeleton UI to enhance the user experience by minimizing perceived load times. This integrated stack not only provides a visually appealing interface but also prioritizes efficiency and responsiveness for an optimal user experience`,
		shortDescription:
			`A full-stack book review website using Sveltekit for the frontend, 
			Node with express server for the API
			and PostgreSQL for the database. Click on this card for more information.
			`,
		links: [{ to: 'https://cultured-front-end.onrender.com/', label: 'Visit Website' }, { to: 'https://github.com/shenuka-jayasinghe/book-reviews', label: 'Github' }],
		logo: Assets.Cultured,
		name: 'Cultured',
		period: {
			from: new Date(2023,10, 10)
		},
		skills: getSkills('svelte', 'node', 'aws', 'postgres','express'),
		type: 'Full-stack book review website'
	},
	{
		slug: 'interlingo',
		color: '#ff3e00',
		description:
			`I designed a personalized language learning app using Angular 
			for the frontend and Node.js for the API, catering to my unique 
			language learning style centered around engaging stories. 
			To enrich the content, I integrated OpenAI API for intelligent 
			story generation, DeepL API for language translation, and Google
			(Text-to-Speech) TTS API for enhancing pronunciation practice. 
			This full-stack application allows me to seamlessly navigate through 
			interactive lessons, leveraging Angular's capabilities for a user-friendly 
			interface. The Node.js backend efficiently manages API requests, 
			ensuring a smooth experience as I learn Lithuanian and Polish.
			This app is still in development. `,
		shortDescription:
			'I wrote an app to help me learn Lithuanian and Polish as I could not find the right resource to learn with my style of language learning, which is with interesting stories.',
		links: [{ to: 'https://interlingo.netlify.app/', label: 'Visit Website' }, { to: 'https://github.com/shenuka-jayasinghe/interlingo-2', label: 'Github' }],
		logo: Assets.Interlingo,
		name: 'Interlingo',
		period: {
			from: new Date(2023,9,1),
		},
		skills: getSkills('angular','node', 'express'),
		type: 'Language learning app using AI intergration',
		screenshots: [
			// {
			// 	label: 'screen 1',
			// 	src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '2',
			// 	src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '3',
			// 	src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '4',
			// 	src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '5',
			// 	src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '6',
			// 	src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// }
		]
	}
	// {
	// 	slug: 'employee records',
	// 	color: '#3bcc53',
	// 	description:
	// 		`I recently developed a straightforward MEAN (MongoDB, Express.js, Angular, Node.js) stack CRUD application tailored for an employee record portal. Leveraging the MEAN stack's full-stack capabilities, the application enables seamless management of employee records with Create, Read, Update, and Delete (CRUD) functionalities. The backend, powered by Node.js and Express.js, serves as the robust API layer, handling data interactions with the MongoDB database. Angular, serving as the frontend framework, provides an intuitive and responsive user interface, allowing administrators to effortlessly add, view, modify, and remove employee records. The application's modular architecture and use of the MEAN stack contribute to its scalability, making it adaptable to the evolving needs of the employee record management system. Through this MEAN stack CRUD application, I aimed to deliver a user-friendly and efficient solution for maintaining employee data within an organizational setting.`,
	// 	shortDescription:
	// 		`
	// 		I developed a MEAN stack CRUD app for an employee portal, combining MongoDB, Express.js, Angular, and Node.js. It offers seamless record management with a user-friendly Angular interface and efficient backend operations.
	// 		`,
	// 	links: [{ to: 'http://18.130.46.26/', label: 'Visit Website' }, { to: 'https://github.com/shenuka-jayasinghe/employee-records', label: 'Github' }],
	// 	logo: Assets.MongoDB,
	// 	name: 'Employee Records',
	// 	period: {
	// 		from: new Date(2023,1, 10),
	// 		to: new Date(2023, 2, 10)
	// 	},
	// 	skills: getSkills('mongodb', 'express','angular','node'),
	// 	type: 'Full-stack employee records application'
	// }
];

export default MY_PROJECTS;
