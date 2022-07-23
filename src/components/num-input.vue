<template>
<section class="num-input-cmp">
   <div class="item-label">
       <span class="title">{{title}}</span>
       <br>
    <span class="sub-title">{{subtitle}}</span>
   </div>
    <div class="plus-minus-btn">
        <button @click="updateNumOfitems(-1)" :disabled="numOfItems === 0">-</button>
        <input type="number" v-model="numOfItems">
        <button @click="updateNumOfitems(1)">+</button>
    </div>
        </section>

        
</template>
<script>
export default {
    name: 'plusMinusInput',
    props:{
      title:String,
      subtitle: String
    },
    data(){
        return {
            numOfItems: 0,
            title: "",
            subtitle: ""
        }
    },
    methods: {
        updateNumOfitems(dir) {
            this.numOfItems += dir
            this.$emit('updateItemsNum', this.numOfItems)
        }
    },
    created(){
        // console.log('title',title)
        console.log( this.$props.title)
        this.title = this.$props.title
         console.log( this.$props.subtitle)
        this.subtitle = this.$props.subtitle
    }
}
</script>
