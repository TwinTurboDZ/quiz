<template>
    <div class="quiz">
        <timerBar @timer-end="nextQuesiton()" ></timerBar>
        <p class="question-counter" >
            QUESTION 
            <span>{{ $route.params.num }}/{{ Object.keys(QuizStore.quiz).length }}</span>
        </p>
        <div class="quizz-media">
            <img class="" :src="require('../assets/images/' + $route.params.num+ '.png')" alt="car head light">
        </div>
        <div class="options">
            <optionLine  @click="SelectedOption(key)" v-for="question , key  in quiz.questions" :key="key"  style="text-align: left;" >
                <template #Key >{{  key }}</template>
                <template #OptionText >{{ question }}</template>
            </optionLine>
        </div>
        <div style="width: 100%;height: 30px;background-color: gray;" >
        </div>

    </div>
</template>
<script>
import {UseQuizStore} from "../store.js"
import timerBar from "@/components/timer-bar.vue"
import optionLine from "@/components/option-line.vue"
export default{
    name : 'quiz-page',
    data(){
        return {
            QuizStore : UseQuizStore(),
            quiz : {},
            image : null,
            selectedOption : null,
        }
    },
    components : {
        timerBar,
        optionLine
    },
    beforeMount(){

        this.laodQuiz()

        console.log("ALL QUESTIONS",this.QuizStore.quiz)
        if( this.$route.params.num < Object.keys(this.QuizStore.quiz).length && this.quiz.played == true ){
            this.$router.push({name : 'quizPage' , params : {num : Number(this.$route.params.num )+ 1}})
        }
    },
    methods : {
        SelectedOption(key){
            this.selectedOption = key;
            this.nextQuesiton() 
        },
        nextQuesiton(){
            if(this.selectedOption === this.quiz.answer){
                this.QuizStore.userScore += 1; 
            }

            this.quiz.played = true;

            this.$router.push({name : 'quizSolutionPage' , params : { num : String(Number(this.currentQuizID) )  }  })
        },
        laodQuiz(){
            this.quiz = this.QuizStore.quiz[this.currentQuizID];
            console.log("index loading",this.currentQuizID)
            console.log("quizz loaded",this.quiz)
        }
    },
    computed: {
        currentQuizID() {
            return this.$route.params.num
        }
    }
}
</script>
<style scoped>
.question-counter{
    font-weight: 500;
    text-align: center;
    font-size: 20px;

    color: #f3f3f3;
}
.question-counter span{
    color : var(--yellow);
}
.quiz{

    grid-column: 2/3;

    height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr 1fr min-content;
    gap: 5px;
    padding: 15px;
    box-sizing: border-box;

    place-items: center;
}
.quizz-media{
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 30vh;

}
.quizz-media img{
    position: absolute;

     height: 100%;
     width: auto;

    left: 50%;
    top: 0;
    transform: translateX(-50%);
}
.quiz .options{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;

    gap: 10px;
}
@media only screen and (max-width: 700px) {
    .quizz-media img {
        height: 100%;
     width: auto;
    }
}
</style>