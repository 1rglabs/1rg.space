<script>
	import couch_conversation from '$lib/images/couch_conversation.jpg';

	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<Heading>About Us About Us About Us</Heading>

<section class="flex justify-center p-10 bg-black md:p-20">
	<p class="max-w-6xl text-4xl font-light leading-normal text-center text-gray-300 ">
		1RG invites individuals, teams and organizations who value community care, creativity and
		innovation to work and play in a space that promotes collaboration and curiosity.
	</p>
</section>
<section class="flex flex-col md:flex-row">
	<div class="p-20 text-white bg-mediumorchid md:w-1/2 md:flex md:items-center">
		<p
			class="text-lg xl:text-8xl md:text-xl md:leading-[4.5rem] xl:leading-none xl:tracking-widest font-bold tracking-[.3em] text-center uppercase"
		>
			Making Space for Everyone
		</p>
	</div>
	<div class="p-16 text-black bg-white md:w-1/2">
		<img class="mx-auto grayscale" src={couch_conversation} alt="Conversation on the couch" />
		<p class="mt-12 text-xl text-center md:text-left">
			Our space includes members from non-profits, community organizers, freelance creatives and
			remote tech teams. Everyone is welcome at 1RG and we believe that the diversity of our members
			is what generates lasting change.
		</p>
	</div>
</section>
<section class="flex flex-col p-16 text-center text-white bg-black md:flex-row space-y-28 md:space-y-0 md:space-x-16">
	<div class="">
		<p>
			“1RG Provides a space where I can connect with like minded individuals who have a strong
			community connection”
		</p>
		<p class="mt-8">— Muzen —</p>
	</div>

	<div class="">
		<p>
			“I've had the priveledge to attend one of the open mic nights at 1RG and it was an amazing
			experience!”
		</p>
		<p class="mt-8">— Lauren M —</p>
	</div>
</section>
