<template> 
  <div > 
    <input  @input="handleSlideChange(sliderValue)" type="range" min="0" max="5" v-model="sliderValue">
    <h2>{{sliderValue}}</h2>
  </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return{
            title:'Anders og Lars sin app',
            sliderValue: 0,
        }
    },

    methods: {
      handleSlideChange(value){
     
      this.sliderValue = value;
      }
    }
}
</script>