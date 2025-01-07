<template> 
  <div > 
    <label for="Energi">Energi</label>
    <input id="Energi"  @input="handleEnergyChange(energyValue)" type="range" min="0" max="5" v-model="energyValue">
    <h2>{{energyValue}}</h2>
  </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return{
            title:'Anders og Lars sin app',
            energyValue: 0,
        }
    },

    methods: {
      handleEnergyChange(value){
     
      this.energyValueValue = value;
      }
    }
}
</script>