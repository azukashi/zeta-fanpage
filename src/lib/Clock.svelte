<script lang="ts">
	import { onMount } from 'svelte';
	let date = new Date();
	$: tgl = date.getDate();
	$: month = monthNames[date.getMonth()];
	$: year = date.getFullYear();
	$: hour = date.getHours();
	$: minutes = date.getMinutes();
	$: seconds = date.getSeconds();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);
	});
</script>

<p>{month} {tgl}, {year} - {hour} : {minutes} : {seconds}</p>
