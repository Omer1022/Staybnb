
<template>
  <button class="x-btn" @click="emit('close')">x</button>
  <DatePicker :columns="2" v-model="date" is-range update-on-input/>
  <!-- <div>{{date}}</div> -->

</template>
    <script>
    import { Calendar, DatePicker } from 'v-calendar';
    
    export default {
      components: {
        Calendar,
        DatePicker,
      },
      props: {
        // startDate: Object
      },
      data() {
        return {
          date: null,
        }
      },
      created() {
        // this.date = this.startDate || new Date()
      },
      watch: { 
        date(){
          console.log('new date', this.date)
          this.$emit('dateChange',this.date)
        }
      },
      methods: {
      },
    }
    </script>
