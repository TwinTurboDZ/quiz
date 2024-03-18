<template>
    <div class="bar">
        <div :style="{ width: timerWidth }" class="timer"></div>
    </div>
</template>
<script>
export default{
    name : 'timer-bar',
    data(){
        return{
            timerWidth: '0%', // Initial width of the timer bar
            duration: 10000, // Duration of the timer in milliseconds (10 seconds)
            intervalTime: 500, // Interval time in milliseconds (0.5 seconds)
            elapsedTime: 0, // Initial elapsed time
            timerInterval: null, // Interval ID
        }
    },
    methods: {
        startTimer() {
            this.timerInterval = setInterval(() => {
                this.elapsedTime += this.intervalTime; // Update elapsed time
                this.timerWidth = `${(this.elapsedTime / this.duration) * 100}%`; // Calculate width percentage
                if (this.elapsedTime >= this.duration) {
                    this.$emit('timer-end');
                    clearInterval(this.timerInterval);
                }
            }, this.intervalTime);
        },
    },
    watch : {
        '$route'(){
            console.log("route changed")
            this.elapsedTime = 0;
        }
    },
    mounted() {
        this.startTimer();
    },
}
</script>
<style scoped>
.bar{

    position: relative;

    width: 100%;
    height: 12px;

    background-color: rgb(75, 75, 75);

    border-radius: 5px;
    overflow: hidden;
}
.timer{
    position: absolute;

    left: 0;
    top: 0;
    height: 100%;

    width: 33%;

    background-color: #158615b9;


    transition: all 0.5s;
}
</style>