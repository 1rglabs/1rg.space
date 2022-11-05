<script>
	import Input from '$lib/components/Input.svelte'
</script>
<!-- TODO padding after font? -->
<footer class="mb-2 text-black min-h-40 bg-darkseagreen">
	<div class="flex">
		<div class="w-1/2"><span class="font-black uppercase text-6xl">join the list</span></div>
		<div class="flex flex-col justify-end w-1/2">
			<div class="w-1/2 text-lg font-bold uppercase tracking-wide">
				subscribe for exclusive updates on our events
			</div>
			<div class="mb-2">
				<Input
					type="email"
					placeholder="Email"
				/>
			</div>
		</div>
	</div>
</footer>
