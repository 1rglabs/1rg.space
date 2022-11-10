<script>
	import couch_conversation from '$lib/images/couch_conversation.jpg';

	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<Heading>About Us About Us About Us</Heading>

<section class="p-20 text-4xl font-light leading-normal text-center text-gray-300 bg-black">
	<p>
		1RG invites individuals, teams and organizations who value community care, creativity and
		innovation to work and play in a space that promotes collaboration and curiosity.
	</p>
</section>
<section class="flex flex-col">
	<div
		class="p-20 text-lg font-bold tracking-[.3em] text-center text-white uppercase bg-mediumorchid"
	>
		Making Space for Everyone
	</div>
	<div class="p-16 text-black bg-white">
		<img class="mx-auto grayscale" src={couch_conversation} alt="Conversation on the couch" />
		<p class="mt-12 text-xl text-center">
			Our space includes members from non-profits, community organizers, freelance creatives and
			remote tech teams. Everyone is welcome at 1RG and we believe that the diversity of our members
			is what generates lasting change.
		</p>
	</div>
</section>
<section class="flex flex-col p-16 text-center text-white bg-black">
	<div class="">
		<p>
			“1RG Provides a space where I can connect with like minded individuals who have a strong
			community connection”
		</p>
		<p class="mt-8">— Muzen —</p>
	</div>

	<div class="mt-28">
		<p>
			“I've had the priveledge to attend one of the open mic nights at 1RG and it was an amazing
			experience!”
		</p>
		<p class="mt-8">— Lauren M —</p>
	</div>
</section>
