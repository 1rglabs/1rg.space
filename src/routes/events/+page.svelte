<script>
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import events from '$lib/events/';
	console.log(events);
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<Heading>Events Events Events</Heading>

<section class="flex flex-col overflow-auto h-[50rem]">
	<iframe
		title="1RG Public Calendar"
		src="https://lu.ma/embed/calendar/cal-wYZCgwOcJN8kiNH/events"
		width="100%"
		height="100%"
		frameborder="0"
		allowfullscreen="false"
		aria-hidden="false"
		tabindex="0"
	/>
</section>
