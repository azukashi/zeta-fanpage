<template>
    <h1>Welcome to {{ name.abbrevEN }} Fan page!</h1>
    <p>{{ name.en }}'s Fan page is currently under construction.</p>
    <hr />
    <p>Estimated progress : {{ dev.value }}% until done</p>
    <progress min="0" :max="dev.maxValue" :value="dev.value" />
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
export default {
    name: 'Home',
    data() {
        return {
            dev: {
                value: '4.20',
                maxValue: '100',
            },
            name: {
                en: 'Vestia Zeta',
                jp: 'ベスティア・ゼータ',
                abbrevEN: 'Zeta',
                abbrevJP: 'ゼータ',
                code: 'V.7',
            },
            gender: 'Female',
            fanName: 'Zecretary',
            birthday: 'November 7',
            debutDate: 'March 25, 2022',
            generation: 'hololive-ID Gen 3',
            height: '155cm',
            oshi: '📜',
            // Likes & Dislikes
            likes: ['Cats', 'Learning new Things', 'Horror & Mystery', 'Milk', 'Fashion', 'Retro stuff', 'Drawing'],
            dislikes: ['Heat', 'Sussy people', 'Vegetables', 'Cliffhangers', 'Forgetting things'],
            goals: [
                'Voice act in a game',
                'Hold a Live concert and dance ("Joget") in 3D',
                'Trend #1 on Twitter',
                'Collab with everyone',
                'Make a lot of people happy',
                'World domination',
                'Reach 500k subs',
                'Apex Masters',
            ],
            // Misc
            languages: ['Indonesian', 'English', 'Japanese', 'Korean'],
            // Credits for this data endpoint
            _credits: {
                hololive_fan_wiki: 'https://hololive.wiki/wiki/Vestia_Zeta',
                virtualyoutuber_fandom: 'https://virtualyoutuber.fandom.com/wiki/Vestia_Zeta',
            },
        };
    },
};
</script>

<style lang="scss"></style>
