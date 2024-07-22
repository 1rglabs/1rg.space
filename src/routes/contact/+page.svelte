<script>
	import map from '$lib/images/map.jpeg';

	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<Heading>Contact Contact Contact</Heading>
<section class="flex flex-col md:items-stretch md:flex-row bg-stone-50 text-lg md:text-xl">
	<div class="m-2 md:m-10 md:h-[unset] md:w-4/5 flex flex-col">
		<div class="mt-2 text-lg md:text-xl">
			1RG is located at
			<a class ="hover:text-mediumorchid"
			href="https://www.google.com/maps/search/?api=1&query=1RG&query_place_id=ChIJp-ywuOc1K4gRGQKwgOGgukc"
			target="_blank">
				2567 Dundas Street West, Toronto
			</a>
		</div>
		<img
			class="w-full h-full object-cover object-[50%_30%]"
			src={map}
			alt="2567 Dundas Street West, Toronto, Ontario, Canada, M6P 1X7"
		/>
	</div>
	<div class="flex flex-col md:w-1/2">
		<div class="p-5 md:p-16 m-auto md:max-w-2xl">
			<p class="mb-4">We love to chat.</p>
			<p class="mb-4">
				Interested in collaborating with 1RG for an event? Share your ideas with us.
			</p>
			<p class="mb-4">
				Looking for a space to host your group or meeting? Ask us about our boardroom rentals.
			</p>
			<p class="mb-4">Want to become a member? We’d love to see you.</p>
			<h3 class="mt-10 text-3xl font-bold uppercase text-mediumorchid">Email:</h3>
			<a href="mailto:team@1rg.space" class="mb-4 hover:text-mediumorchid"
				>team@1rg.space</a
			>
		</div>
	</div>
</section>
