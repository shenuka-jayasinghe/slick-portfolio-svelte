<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';

	const { description, lastName, links, name, title, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<!-- <title>{useTitle(title, TITLE_SUFFIX)}</title> -->
	<title>Shenuka Jayasinghe | Junior Cloud Engineer</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px m-10">
		<MainTitle classes="md:text-left">Hi,</MainTitle>
		<div class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-light">
			<div> I'm Shenuka, a Junior Cloud and DevOps Engineer proficient in 
				JavaScript full-stack, test-driven web development. Having a background in physics and 
				engineering consultancy, consulting on projects for blue-chip companies like 
				Goldman Sachs, Google, and Apple, and being a music teacher, concert pianist 
				and conductor (after studying at the Royal Northern College of Music), I have also founded a tech startup.
			</div>
			<br>
			<div>Meet a developer who understands your client's business needs
				and saves them the headache of cloud architecture and CI/CD pipelines to get their
				products up and running.
			</div>
			<br>
			<div>Let's get in touch!</div>
		</div>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? MY_SKILLS} />
</div>
