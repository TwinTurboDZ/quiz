<template>
    <div class="quiz">
        <p class="question-counter" >
            QUESTION 
            <span>{{ $route.params.num }}/{{ Object.keys(QuizStore.quiz).length }}</span>
        </p>
        <div class="quizz-media">
            <img class="" :src="require('../assets/images/' + $route.params.num+ '_s.png')" alt="car head light">
        </div>
        <div class="options">
            <optionLine   style="text-align: left;" >
                <template #Key >{{  quiz.answer }}</template>
                <template #OptionText >{{  quiz.questions[quiz.answer] }}</template>
            </optionLine>
        </div>
        <div class="button-holder">
            <nextButton @click="nextQuesiton">
                <template #Text>NEXT!</template>
            </nextButton>
        </div>
        <div style="width: 100%;height: 30px;background-color: gray;" >
        </div>

    </div>
</template>
<script>
import nextButton from '@/components/buttons/next-button.vue';
import {UseQuizStore} from "../store.js"
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
        optionLine,
        nextButton
    },
    beforeMount(){

        this.laodQuiz()
    },
    methods : {
        SelectedOption(key){
            this.selectedOption = key;
            this.nextQuesiton() 
        },
        nextQuesiton(){
            if(this.currentQuizID < Object.keys(this.QuizStore.quiz).length){
                this.$router.push({name : 'quizPage' , params : { num : String(Number(this.currentQuizID) +1 )  }  })
            }else{
                this.$router.push({name : 'resultPage'})
            }
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
.button-holder{
    display: flex;
    justify-content: center;
    align-items: center;
}
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
    grid-template-rows: min-content  1fr 1fr min-content;
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