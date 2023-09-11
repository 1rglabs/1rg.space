<script>
	import boardroom from '$lib/images/1rg/047A6732.jpg';

	import Heading from '$lib/components/Heading.svelte';

</script>

<svelte:head>
	<title>Memberships</title>
</svelte:head>

<Heading>Memberships Memberships Memberships</Heading>
<!-- <section class="flex flex-col md:items-stretch md:flex-row">
	<div class="h-64 md:h-[unset] md:w-1/2">
		<img
			class="object-cover object-center w-full h-full grayscale"
			src={boardroom}
			alt="boardroom meeting"
		/>
	</div>

	<div
		class="flex flex-col justify-center p-16 space-y-10 text-xl font-semibold leading-10 tracking-widest text-center uppercase lg:leading-loose lg:text-2xl md:w-1/2 bg-stone-50 text-mediumorchid"
	>
		<p>Interested in joining? Email us at <a class="hover:text-darkseagreen" href="mailto:team@1rg.space">team@1rg.space</a></p>
	</div>
</section> -->

<section class="flex flex-col my-24 p-8">
	<div class="text-center flex flex-col items-center">
		<div class="text-2xl">Please,</div>
		<h1 class="px-6 py-5 md:m-4 text-4xl mt-0 pt-0 font-black leading-tight md:text-6xl xl:text-8xl xl:leading-normal text-center uppercase">Seat yourself </h1>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 p-8">

		<!-- Community Membership -->
			<div class="flex flex-col p-8 border-2 rounded-md border-slate-300 shadow">
				<div class="text-center font-bold uppercase text-xl lg:text-2xl tracking-wide text-mediumorchid">Community Membership</div>
				<div class="mt-4 text-center font text-lg lg:text-xl">
					
					You're part of the 1RG community, but don't need a workspace. You'll get access to Tuesday dinners, and a weekly open house on Thursday where you can come use the space during the day for co-working, or just to drop by!
				</div>
				<div class="mt-4 font text-lg lg:text-xl">
					What's included:
					<ul class="list-disc list-inside ml-4">
						<li>Tuesday Community Dinners</li>
						<li>Access to 1RG on Thursday between 8am and 6pm</li>
						<li>Any future community event</li>
						<li>Open guest policy</li>
					</ul>
				</div>
				<div class="mt-10 text-center">
					<p class="font-bold text-xl lg:text-2xl">$100/month + HST</p>
					<p class="text-lg lg:text-xl">cancel any time</p>
				</div>
			</div>

			<!-- Hot Desk -->
			<div class="flex flex-col p-8 border-2 rounded-md border-slate-300 shadow">
				<div class="text-center font-bold uppercase text-xl lg:text-2xl tracking-wide text-mediumorchid">Hot Desk</div>
				<div class="mt-4 text-center font text-lg lg:text-xl">
					1RG is part of your rountine but you're not working here every day. You'll get access during business hours and can use any of the vailable desks. This is for people that want to be engaged in the community and love working from here, but don't need a committed office.
				</div>
				<div class="mt-4 font text-lg lg:text-xl">
					What's included:
					<ul class="list-disc list-inside ml-4">
						<li>Tuesday Community Dinners</li>
						<li>Access to 1RG Monday to Friday between 8am and 6pm</li>
						<li>Any future community event</li>
						<li>Open guest policy</li>
					</ul>
				</div>
				<div class="mt-10 text-center">
					<p class="font-bold text-xl lg:text-2xl">$300/month + HST</p>
					<p class="text-lg lg:text-xl">cancel any time</p>
				</div>
			</div>
			
			<!-- Dedicated Desk -->
			<div class="flex flex-col p-8 border-2 rounded-md border-slate-300 shadow">
				<div class="text-center font-bold uppercase text-xl lg:text-2xl tracking-wide text-mediumorchid">Dedicated Desk</div>
				<div class="mt-4 text-center font text-lg lg:text-xl">
					1RG is your permanent office. You'll get 24/7 access with keys, a dedicated desk, and the ability to throw events in the space (up to 30 people). This is for people who want to actively engage in helping shape the space and community.
				</div>
				<div class="mt-4 font text-lg lg:text-xl">
					What's included:
					<ul class="list-disc list-inside ml-4">
						<li>Tuesday Community Dinners</li>
						<li>Access to 1RG 24/7</li>
						<li>Any future community event</li>
						<li>Open guest policy</li>
					</ul>
				</div>
				<div class="mt-10 text-center">
					<p class="font-bold text-xl lg:text-2xl">$500/month + HST</p>
					<p class="text-lg lg:text-xl">6 months commitment required</p>
				</div>
			</div>
	</div>

	<div class="text-center flex flex-col items-center mt-20">
		<p class="flex flex-col justify-center text-xl font-semibold leading-10 tracking-widest text-center uppercase lg:leading-loose lg:text-2xl md:w-1/2 text-mediumorchid">
			Interested in joining? Email us at <a class="hover:text-darkseagreen" href="mailto:team@1rg.space">team@1rg.space</a>
		</p>
	</div>
</section>
