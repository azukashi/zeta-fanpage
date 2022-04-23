<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/data.json`);
		const { data } = await res.json();
		if (res.ok) {
			return {
				props: {
					data
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not fetch the data')
		};
	}
</script>

<script lang="ts">
	import Clock from '$lib/Clock.svelte';
	import './api/api.d.ts';
	export let data: Data;
	let devProgress = {
		value: '3.40',
		maxVal: '100'
	};
</script>

<h1>Welcome to {data.name.abbrevJP} Fan page!</h1>
<p>{data.name.en}'s Fan page is currently under construction.</p>
<hr />
<p>Estimated progress : {devProgress.value}% until done</p>
<progress min="0" max={devProgress.maxVal} value={devProgress.value} />
<hr />
<h3>We're currently need an Design Ideas!</h3>
<p>
	Have an Design Ideas for this Website? Feel free to Create new Issues at The Repository and Tell
	me!
</p>
<p>
	Repository : <a href="https://github.com/gifaldyazkaa/zeta-fanpage"
		>gifaldyazka/zeta-fanpage.git</a
	>
</p>
<p>Stay tuned until this website done.</p>

<hr />

<h3>Current Time</h3>

<Clock />

<style>
	a {
		color: rgb(0, 38, 255);
		text-decoration: none;
	}
	a:hover {
		color: rgb(0, 21, 141);
	}
	a:active {
		color: rgb(49, 80, 255);
	}
	progress {
		margin-bottom: 9px;
	}
</style>
