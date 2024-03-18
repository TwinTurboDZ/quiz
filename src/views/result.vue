<template>
    <div class="result-holder">
        <h1>TwinTurbo DZ QUIZ!
            
        </h1>
        <h1>Teba3na f tiktok 
            <img @click="redirectToTikTokAccount()" style="cursor: pointer;height: 40px; width: 40px;background-color: white;" src="@/assets/images/tiktok.png" alt="">
        </h1>
        <p class="result"  >
            Score dyalk! : 
            <span>{{ QuizStore.userScore }}</span>
            {{ QuizStore.userScore }}/{{ Object.keys(QuizStore.quiz).length }}
        </p>
        <p class="message" >{{ this.QuizStore.userScore >= (Object.keys(this.QuizStore.quiz).length)/2   ? 'CHIKOUR SAHBI!' : 'ZIYER ROHEK!' }}</p>
        <nextButton @click="replay()" >
            <template #Text>ZID KASS!</template>
        </nextButton>

    </div>
</template>
<script>
import {UseQuizStore} from "../store.js"
import nextButton from '@/components/buttons/next-button.vue';
export default{
    name : 'user-result',
    data(){
        return {
            QuizStore : UseQuizStore(),
        }
    },
    components : {
        nextButton
    },
    mounted(){
        // for(let quiz in this.QuizStore.quiz){
        //     console.log("checking ",quiz)
        //     console.log("found ",this.QuizStore.quiz[quiz].played == false)
        //     if(this.QuizStore.quiz[quiz].played == false){
        //         this.$router.push({'name' : 'quizPage' , params : {num : quiz} })
        //         break;
        //     }
        // }
    },
    methods : {
        replay(){
            this.QuizStore.$reset();
            this.$router.push({"name" : "quizPage" , params : { num : 1  }})
        },
        redirectToTikTokAccount(){
            window.open('https://www.tiktok.com/@twinturbodz?_t=8klaQUpiOwA&_r=1&fbclid=IwAR1Jvo65C3cnFKs-EJXgQEAoLKiKPyvdx1i_i0vMNsP63LA5rY30Xz42d2U', '_blank');
        }
    } 
}
</script>
<style scoped >
.result-holder{
    grid-column: 2/3;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 25px;
}
.result{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    color : white;
    font-size: 24px;
    font-weight: 600;

}
.result span{
    color: var(--bgc);

    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    width: 30px;
    border-radius: 50%;

    background-color: var(--yellow);

}
.message{
    color : white;
    font-size: 24px;
    font-weight: 600;
}
.result-holder h1{
    color : white;

display: flex;
justify-content: center;
align-items: center;
gap: 5px;
}
</style>
