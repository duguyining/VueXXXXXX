<template>
    <button class="didi-btn" :class="{
    'disanle':disabled,
    'didi-btn-highlight':highlight
    }" @click="handleClick($event)" ><slot></slot></button>
</template>

<script>
    export default {
        name: "dd-button",
        props:{
            disanle:Boolean,
            highlight:Boolean
        },
        methods:{
            handleClick:function (event) {
                if (this.disabled){
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }
    }
</script>

<style scoped>
    .didi-btn{
        display: block;;
        padding: 0;
        width: 100%;
        height:40px;
    }

    .didi-btn.active,.didi-btn:active{
        background: #ebebeb;
    }

    .didi-btn.disable,.didi-btn:disabled{
        background:#fafafa;
    }

    .didi-btn-hightlight{
        background: #fa8919;
        color: #fff;
        border:none;
    }
    /*...*/

</style>