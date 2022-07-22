
<template>

  <DatePicker :columns="2" v-model="date" is-range />

</template>
    <script>
    import { Calendar, DatePicker } from 'v-calendar';
    
    export default {
      components: {
        Calendar,
        DatePicker,
      },
      props: {
        startDate: Object
      },
      data() {
        return {
          date: null,
        }
      },
      created() {
        this.date = this.startDate || new Date()
      }
    }
    </script>
