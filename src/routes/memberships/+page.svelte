<script>
	import boardroom from '$lib/images/1rg/047A6732.jpg';

	import Heading from '$lib/components/Heading.svelte';
	import MembershipTierCard from '$lib/components/MembershipTierCard.svelte';
	import Button from '$lib/components/Button.svelte';

	let membershipCardCopy = {
		"Community Membership": {
			description: "You're part of the 1RG community, but don't need a full-time workspace. You'll get access to private events, and one day a week of your choosing to use the space for co-working, or just to drop by!",
			access: "Access any 1 day a week 8am-10pm",
			price: "100"
		},
		"Hot Desk": {
			description: "1RG is part of your routine but you're not working here every day. You'll get access during business hours and can use any of the available desks. This is for people that want to be engaged in the community and love working from here, but don't need a committed office.",
			access: "Access Mon-Fri 8am-10pm",
			price: "300"
		},
		"Dedicated Desk": {
			description: "1RG is your permanent office. You'll get 24/7 access with keys, a dedicated desk, and the ability to throw events in the space (up to 30 people). This is for people who want to actively engage in helping shape the space and community.",
			access: "Access to 1RG 24/7",
			price: "500",
			cancellationPolicy: "6 months commitment required"
		}
	}

</script>

<svelte:head>
	<title>Memberships</title>
</svelte:head>

<Heading>Memberships Memberships Memberships</Heading>
<section class="flex flex-col my-24 p-8">
	<div class="text-center flex flex-col items-center">
		<div class="text-2xl">Please,</div>
		<h1 class="px-6 py-5 md:m-4 text-4xl mt-0 pt-0 font-black leading-tight md:text-6xl xl:text-8xl xl:leading-normal text-center uppercase">Seat yourself </h1>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 p-8">
		{#each Object.entries(membershipCardCopy) as [tier, vals]}
			<MembershipTierCard tier={tier} description={vals.description} access={vals.access} price={vals.price}></MembershipTierCard>
		{/each}
	</div>

	<div class="text-center flex flex-col items-center mt-20">
		<p class="flex flex-col justify-center text-xl font-semibold leading-10 tracking-widest text-center uppercase lg:leading-loose lg:text-2xl  text-mediumorchid">
			<Button href="/book-a-tour" class="px-5 py-3 text-4xl uppercase">book a tour</Button>
		</p>
	</div>
</section>
