<template>
    <div class="quiz">
        <p class="question-counter">
            QUESTION
            <span>{{ $route.params.num }}/{{ Object.keys(QuizStore.quiz).length }}</span>
        </p>
        <div class="quizz-media">
            <img class="" :src="require('../assets/images/' + $route.params.num+ '_s.png')" alt="car head light">
        </div>
        <div class="options">
            <optionLine style="text-align: left;">
                <template #Key>{{ quiz.answer }}</template>
                <template #OptionText>
                    {{ quiz.questions[quiz.answer] }}
                    <svg v-if="quiz.userAnswer == quiz.answer" width="26" height="26" viewBox="0 0 48 48" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z"
                            fill="#4CAF50" />
                        <path d="M34.6 14.6L21 28.2L15.4 22.6L12.6 25.4L21 33.8L37.4 17.4L34.6 14.6Z" fill="#CCFF90" />
                    </svg>
                    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 22V2H22V18H6L2 22ZM9.4 14L12 11.4L14.6 14L16 12.6L13.4 10L16 7.4L14.6 6L12 8.6L9.4 6L8 7.4L10.6 10L8 12.6L9.4 14Z"
                            fill="#F24E1E" />
                    </svg>

                </template>
            </optionLine>
        </div>
        <div class="button-holder">
            <nextButton @click="nextQuesiton">
                <template #Text>NEXT!</template>
            </nextButton>
        </div>
        <div style="width: 100%;height: 30px;background-color: gray;">
            <div id="adsgoeshere" style="background: #1d1f29; padding-top:60px; text-align: center;" v-html="adsenseContent"></div>
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
            adsenseContent: ''
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
    },
    mounted(){
        this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
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

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}
@media only screen and (max-width: 700px) {
    .quizz-media img {
        height: auto;
        width: 100%;
    }
}
</style>