<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<!-- TODO padding after font? -->
<footer class="grid mb-2 text-black grid-cols-13 min-h-40 bg-darkseagreen">
	<div class="col-span-6 font-black uppercase text-9xl">Join the list</div>
	<div class="flex flex-col justify-end col-span-3 pb-5 space-y-5 text-xl">
		<div class="font-bold tracking-widest uppercase">
			subscribe for exclusive updates on our events
		</div>
		<div><Input placeholder="Email" /></div>
	</div>
	<div class="flex flex-col justify-end col-span-2 pb-5 pr-2">
		<div><Button class="px-1 text-4xl uppercase" hoverColor="white">subscribe</Button></div>
	</div>
	<div class="col-span-2 bg-stone-50">
		<div class="p-10">
			<il class="text-xl font-bold leading-8 tracking-wider uppercase">
				<ul>membership</ul>
				<ul>events</ul>
				<ul>about</ul>
				<ul>contact</ul>
			</il>
		</div>
	</div>
</footer>
