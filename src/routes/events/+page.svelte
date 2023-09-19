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

<section class="flex flex-col px-20 py-16 bg-white overflow-auto">
	{#each events as event}
		<div class="py-16 border-t-2 border-b-2 border-mediumorchid">
			<div class="md:relative md:text-center">
				<div
					class="text-lg xl:text-xl font-semibold uppercase md:absolute md:top-0 md:left-0 text-mediumorchid"
				>
					{event.date}
					{#if event.time} | {event.time.start} - {event.time.end} {/if}
				</div>
				<div class="py-5 text-lg font-bold uppercase md:py-0 xl:text-2xl md:text-right">
					{event.name}
				</div>
			</div>
			<div class="py-6">
				<p class="mt-3 event-description xl:text-lg">
					{@html event.description}
				</p>
			</div>

			{#if event.invite}
				<div>
					<Button
						href={event.invite.url}
						class="px-6 py-2 m-1 text-m font-black leading-tight xl:leading-normal"
					>
						{event.invite.text}
					</Button>
				</div>
			{/if}

			{#if event.image}
				<div class="flex justify-center">
					<img src={event.image} />
				</div>
			{/if}
		</div>
	{/each}
</section>
