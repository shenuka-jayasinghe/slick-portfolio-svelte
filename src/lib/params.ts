import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experience',
	resume: 'CV',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Shenuka',
	lastName: 'Jayasinghe',
	description:
		`Meet a versatile AWS cloud engineer and full-stack JavaScript developer skilled in Angular, Svelte, NoSQL, and PSQL databases.His background as a concert pianist and conductor fuels creative leadership, while experience in construction sharpens project management and teamwork.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/shenuka-jayasinghe/' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/shenuka-jayasinghe-553387139/'
		},
		{
			platform: Platform.Email,
			link: 'shenukacj@gmail.com'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com/@shenukamusic604'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'CV',
	item: 'https://drive.google.com/file/d/196VKpCl8tFF2KJvRwx4S-TY7LHq00KJw/view?usp=sharing'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
