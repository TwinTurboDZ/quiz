<template>
    <div class="option-holder" >
        <p class="option-number" ><i>
            <slot name="Key" ></slot>
        </i></p>
        <p class="option-text" >
            <slot name="OptionText" ></slot>

        </p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            selected : false,
        }
    }
}
</script>
<style scoped>
.option-holder{
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 3px;
    box-sizing: border-box;
    border-radius: 6px;

    gap: 20px;

    transition: all 0.15s ease;
    cursor: pointer;
}
.option-holder:hover,.option-holder.touched{
    scale: 1.1;
    background-color: rgb(90, 90, 90);
}
.option-number{
    font-weight: 800;
    background-color: var(--yellow);
    border-radius: 50%;

    font-size: 18px;
    height: 20px ;
    width: 20px ;

    display: flex;
    justify-content: center;
    align-items: center;
}
.option-text{
    font-size: 18px;
    color: #f3f3f3;

    font-weight: 700;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>