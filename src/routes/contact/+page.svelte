<script>
	import serena_serving from '$lib/images/portraits/047A6622.jpg';

	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<Heading>Contact Contact Contact</Heading>
<section class="flex flex-col md:flex-row">
	<div class="md:w-1/2 h-48 md:h-[56rem] lg:h-[48rem]">
		<img class="object-cover object-[50%_50%] w-full h-full" src={serena_serving} alt="contact us" />
	</div>
	<div class="flex flex-col md:w-1/2 bg-stone-50">
		<div class="p-16 m-auto text-2xl md:max-w-2xl">
			<p class="mb-4">We love to chat.</p>
			<p class="mb-4">
				Interested in collaborating with 1RG for an event? Share your ideas with us.
			</p>
			<p class="mb-4">
				Looking for a space to host your group or meeting? Ask us about our boardroom rentals.
			</p>
			<p class="mb-4">Want to become a member? We’d love to see you.</p>
			<h3 class="mt-10 text-3xl font-bold uppercase text-mediumorchid">Email:</h3>
			<a href="mailto:team@1rg.space" class="mb-4 text-2xl">team@1rg.space</a>
		</div>
	</div>
</section>
