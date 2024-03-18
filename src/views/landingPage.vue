<template>
    <div class="landingPage">
        <div class="profile-picture">
            <img src="@/assets/logo.png" alt="">
        </div>
        <h1>TwinTurbo DZ QUIZ!
            <img @click="redirectToTikTokAccount()" style="cursor: pointer;height: 40px; width: 40px;background-color: white;" src="@/assets/images/tiktok.png" alt="">

        </h1>
        <div class="button-holder">
            <nextButton @click="$router.push({ name: 'quizPage', params: { num: Number(1) } })">
                <template #Text>AL3AB!</template>
            </nextButton>
        </div>
    </div>
</template>

<script>
import nextButton from '@/components/buttons/next-button.vue';


export default {
    name: 'landing-page',
    components: {
        nextButton
    },
    methods : {
        redirectToTikTokAccount(){
            window.open('https://www.tiktok.com/@twinturbodz?_t=8klaQUpiOwA&_r=1&fbclid=IwAR1Jvo65C3cnFKs-EJXgQEAoLKiKPyvdx1i_i0vMNsP63LA5rY30Xz42d2U', '_blank');
        }
    }
}

</script>
<style scoped>
.button-holder{
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile-picture{
    border-radius: 50%;

    position: relative;

    height: 200px;
    width: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    justify-self: center;
}
.profile-picture img{
    width: 100%;
    height: auto;
}
.landingPage h1{
    color : white;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.landingPage{

    height: calc(100vh );
    width: 100%;

    background-color: var(--bgc);

    grid-column: 2/3;

    display: grid;
    grid-template-rows: min-content min-content 1fr;
    place-content: center;
    justify-content: center;

    gap: 15px;

    padding: 2vh;
    box-sizing: border-box;
}
@media only screen and (max-width: 500px) {
    .landingPage h1 {
        color: white;
        font-size: 26px;
    }
}
@media only screen and (max-width: 400px) {
    .landingPage h1 {
        color: white;
        font-size: 22px;
    }
}
</style>