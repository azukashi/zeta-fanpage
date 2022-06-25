<template>
    <h1>Welcome to {{ data.name.abbrevEN }} Fan page!</h1>
    <p>{{ data.name.en }}'s Fan page is currently under construction.</p>
    <hr />
    <p>Estimated progress : {{ data.dev.value }}% until done</p>
    <progress min="0" :max="data.dev.maxValue" :value="data.dev.value" />
    <hr />
    <h3>We're currently need an Design Ideas!</h3>
    <p>Have an Design Ideas for this Website? Feel free to Create new Issues at The Repository and Tell me!</p>
    <p>
        Repository :
        <a href="https://github.com/gifaldyazkaa/zeta-fanpage" target="_blank">gifaldyazka/zeta-fanpage.git</a>
    </p>
    <p>Stay tuned until this website done.</p>
</template>

<script lang="ts">
import data from '../data/data';
export default {
    name: 'Home',
    data() {
        return {
            data,
        };
    },
};
</script>

<style lang="scss"></style>
