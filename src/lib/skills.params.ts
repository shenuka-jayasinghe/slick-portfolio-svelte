import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'aws',
		color: 'yellow',
		description:
			`I am proficient in creating Virtual Private Clouds (VPCs) with associated subnets, providing a robust and secure network foundation for AWS resources. I have hands-on experience configuring security groups to control inbound and outbound traffic, ensuring the security of my infrastructure.
			Launching and managing EC2 instances is second nature to me. I am familiar with various instance types, storage options, and configurations, allowing me to deploy and maintain virtual machines tailored to specific needs.
			When it comes to databases, I excel at setting up and managing RDS instances. This includes handling relational databases efficiently, ensuring optimal performance without the need for manual administrative tasks.
			Furthermore, I have successfully launched and deployed applications on EC2 instances, showcasing my ability to run workloads in the cloud environment. My expertise extends to understanding the nuances of deploying and managing applications in a scalable and reliable manner.
			While these are some of my core skills, I am always eager to expand my knowledge. I recognize the vastness of the AWS ecosystem and stay abreast of the latest developments, continuously seeking opportunities to enhance my skills. Whether it's exploring serverless computing with AWS Lambda or delving into infrastructure as code using AWS CloudFormation, I am committed to staying at the forefront of AWS technology to deliver robust and efficient solutions.`,
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'node',
		color: 'green',
		description:
			`I excel in both Object-Oriented Programming (OOP) and Functional Programming within JavaScript. Leveraging OOP principles, I craft modular and maintainable code by organizing it around objects and their interactions. Simultaneously, my understanding of functional programming allows me to embrace immutability, higher-order functions, and a declarative coding style for enhanced code clarity.
			When it comes to API development, I am proficient in utilizing Node.js. This powerful runtime environment enables me to create scalable and efficient server-side applications. I specialize in frameworks like Express.js, streamlining the process of building robust and RESTful APIs. My expertise lies in the backend development of web applications, ensuring seamless communication between the client and server.
			In discussions about my skills, I can articulate:
			The significance of code organization and modularity through OOP.
			The advantages of functional programming concepts for clear and concise code.
			How Node.js facilitates asynchronous, non-blocking I/O and its role in scalable API development.
			My approach to API design, encompassing RESTful principles and optimal resource naming conventions.
			Proficiency in API documentation tools like Swagger, ensuring seamless integration for fellow developers.
			Strategies for testing Node.js applications, encompassing unit, integration, and potentially end-to-end testing.
			A robust debugging methodology, employing Node.js debugger and other relevant tools.
			These skills not only showcase my technical proficiency but also underscore my ability to communicate complex concepts effectively, fostering collaboration in dynamic development environments`,
		logo: Assets.NodeJs,
		name: 'NodeJS'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description:
			``,
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'kubernetes',
		color: 'blue',
		description:
			``,
		logo: Assets.Kubernetes,
		name: 'Kubernetes'
	}),
	s({
		slug: 'terraform',
		color: 'blue',
		description:
			``,
		logo: Assets.Terraform,
		name: 'Terraform'
	}),
	s({
		slug: 'postgres',
		color: 'blue',
		description:
			``,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description:
			``,
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),

	s({
		slug: 'angular',
		color: 'red',
		description:
			``,
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: '',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'jest',
		color: 'orange',
		description: ' ',
		logo: Assets.Jest,
		name: 'Jest'
	}),
	s({
		slug: 'express',
		color: 'orange',
		description: ' ',
		logo: Assets.ExpressJs,
		name: 'Express'
	}),
	s({
		slug: 'javascript',
		color: 'orange',
		description: ' ',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'jenkins',
		color: 'orange',
		description: ' ',
		logo: Assets.Jenkins,
		name: 'Jenkins'
	}),
	s({
		slug: 'argo',
		color: 'orange',
		description: ' ',
		logo: Assets.Argo,
		name: 'Argo'
	}),
	s({
		slug: 'circle',
		color: 'orange',
		description: ' ',
		logo: Assets.Circle,
		name: 'Circle'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
