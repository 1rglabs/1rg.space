<script>
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/MarketingFooter.svelte';

</script>

<Header />

<main>
	<slot />
</main>

<Footer />
