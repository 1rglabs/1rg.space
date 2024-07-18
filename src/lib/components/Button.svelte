<script lang="ts">
	export let href: string | undefined = '#';

	export let target: string | undefined = '_self';

	export let hoverColor = 'green';

	let baseClasses =
		'leading-normal text-center underline text-darkseagreen bg-mediumorchid hover:text-mediumorchid';

	$: classes = `${baseClasses} ${hoverColor === 'green' ? 'hover:bg-darkseagreen' : 'hover:bg-white'} ${$$props.class || ''}`;
</script>

<a class={classes} {href} {target} on:click>
	<slot />
</a>
