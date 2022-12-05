<script>
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<Heading>Events Events Events</Heading>
<section class="flex flex-col px-20 py-16 bg-white">
	<div class="py-16 border-t-2 border-b-2 border-mediumorchid">
		<div class="md:relative md:text-center">
			<div class="text-xl font-semibold uppercase md:absolute md:top-0 md:left-0 text-mediumorchid">
				Dec 15, 2022
			</div>
			<div class="py-5 text-lg font-bold uppercase md:py-0 lg:text-2xl">Winter Solstice: Restorative Yoga + Soundbath</div>
		</div>
		<div class="py-6">
			<p class="mt-3">
				Invite in rest and stress release through a gentle 60-minute restorative practice, while being bathed in healing sound vibrations.
			</p>
		</div>
		<div>
			<Button href="https://www.eventbrite.ca/e/winter-solstice-restorative-yoga-soundbath-tickets-481790677887" class="px-6 py-2 m-1 text-m font-black leading-tight xl:leading-normal">
			RSVP
			</Button>
		</div>
	</div>
	<div class="py-16 border-t-2 border-b-2 border-mediumorchid">
		<div class="md:relative md:text-center">
			<div class="text-xl font-semibold uppercase md:absolute md:top-0 md:left-0 text-mediumorchid">
				Dec 16, 2022
			</div>
			<div class="py-5 text-lg font-bold uppercase md:py-0 lg:text-2xl">Holiday/Closing Party</div>
		</div>
		<div class="py-6">
			<p class="">A Toast Beofore We Say Goodbye.</p>
			<p class="mt-3">
				You’re invited to toast the holidays and say goodbye to Roof Garden - in case you missed it,
				we’re moving in 2023.
			</p>
		</div>
	</div>
</section>
