<script lang="ts">
	export let href: string | undefined = '#';

	let baseClasses =
		'leading-normal text-center underline text-darkseagreen bg-mediumorchid hover:text-mediumorchid hover:bg-darkseagreen';

	$: classes = `${baseClasses} ${$$props.class || ''}`;
</script>

<a class={classes} {href} on:click>
	<slot />
</a>
