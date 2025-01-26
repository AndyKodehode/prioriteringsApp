<template> 
<div>
   <div>
      <circle-progress :percent="precent" show-percent:true   class="custom-circle-progress"> 
        
      </circle-progress>

      <h2>Anbefaling for kjøp: {{precent}} %</h2>
   </div>

   <div v-if="isVisible" >
    <ul>
       <li v-if="!energyOff" >
         {{energyMessage}}
       </li>

       <li v-if="!needOfOtherOff" >
        {{otherMessage}}
       </li>

       <li v-if="!shortTermOff">
        {{shortTermMessage}}
       </li>

       <li v-if="!longTermOff">
        {{longTermMessage}}
       </li>

       <li v-if="!careerOff">
        {{careerMessage}}
       </li>

    </ul>
  </div>

  <div @click="handleCheck('energyOff')" class="padding"> 
    <!--<input type="checkbox" v-model="energyOff" >-->
    <div class="innerDiv">
        <label for="Energi">Energi</label>
        <input class="slider" id="Energi"  @input="handleEnergyChange(energyValue)" type="range" min="0" max="5" v-model="energyValue">
        <h3>{{energyValue}}</h3>
     </div>
  </div>
<!--
    <div > 
      <input type="checkbox" v-model="needOfOtherOff"  >
      <label for="AndresBehov">Andres behov</label>
      <input class="slider" id="AndresBehov"  @input="handleNeedOfOther(needOfOhterValue)" type="range" min="0" max="5" v-model="needOfOhterValue">
      <h3>{{needOfOhterValue}}</h3>
   </div>

   
    <div > 
      <input type="checkbox" v-model="shortTermOff"  >
      <label for="KortSiktig">Kort sikt</label>
      <input class="slider" id="KortSiktig"  @input="handleShortTerm(shortTermValue)" type="range" min="0" max="5" v-model="shortTermValue">
      <h3>{{shortTermValue}}</h3>
   </div>

   <div > 
      <input type="checkbox" v-model="longTermOff"  >
      <label for="Langsiktig">Lang sikt</label>
      <input class="slider" id="Langsiktig"  @input="handleLongTerm(longTermValue)" type="range" min="0" max="5" v-model="longTermValue">
      <h3>{{longTermValue}}</h3>
   </div>

   <div > 
      <input type="checkbox"  v-model="careerOff" >
      <label for="Karriere">Karriere</label>
      <input class="slider" id="Karriere"  @input="handleCareer(careerValue)" type="range" min="0" max="5" v-model="careerValue">
      <h3>{{careerValue}}</h3>
   </div>
-->
   <button @click="showHideAnswer" >result</button>

   

   
    

   

    

</div>
</template>

<script>

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";


export default {
    name: "App",
    components: {CircleProgress},
    data(){
        return{
            title:'Anders og Lars sin app',
            energyValue: 0,
            needOfOhterValue: 0,
            shortTermValue: 0,
            longTermValue: 0,
            careerValue: 0,

            energyMessage: "",
            otherMessage: "",
            shortTermMessage: "",
            longTermMessage: "",
            careerMessage: "",

            isVisible: false,
            precent: 0,
            needOfOtherOff : false,
            energyOff: false,
            shortTermOff: false,
            longTermOff: false,
            careerOff: false
           
            

        }
    },

    

    watch: {
  
      needOfOtherOff(newValue, oldValue) {
    console.log('needOfOthers changed:', newValue);
      },

      shortTermOff(newValue, oldValue) {
    console.log('shortTerm changed:', newValue);
      },

      


   },

    methods: {
      handleEnergyChange(value){
     
      this.energyValue = value;

      if(this.energyValue <= 1){
        this.energyMessage = "Dette krever mye! Kanskje bedre gjøre noe som gir deg mer energi?"
      } else if( this.energyValue == 2){
        this.energyMessage = "Krever litt energi av deg"
      } else if( this.energyValue == 3){
        this.energyMessage = "Dette hverken krever eller gir deg energi."
      }else if( this.energyValue == 4){
        this.energyMessage = "Dette gir jo litt energi!"
      } else if( this.energyValue == 5){
        this.energyMessage = "Ojoj, dette fyller opp energilageret"
      } 
      },

      handleNeedOfOther(value){

        this.needOfOhterValue = value

        if(this.needOfOhterValue <= 1){
            this.otherMessage = "Dette betyr lite for de rundt deg. Kanskje du først og fremst skal tenke på deg selv?"
         } else if( this.needOfOhterValue == 2){
          this.otherMessage = "Betyr jo litt for andre, men er det verdt det?"
         }else if( this.needOfOhterValue == 3){
          this.otherMessage = "Er jo hyggelig da."
         }else if( this.needOfOhterValue == 4){
          this.otherMessage = "Dette betyr noe! Her blir de sikkert glad."
         }else if( this.needOfOhterValue == 5){
          this.otherMessage = "That’s what friends are for!"
         }
      },


      handleShortTerm(value){

        this.shortTermValue = value

        if(this.shortTermValue <= 1){
            this.shortTermMessage = "Veeeeldig dyrt. Anbefaler å styre unna med mindre du virkelig innerst inne trenger dette. Inkassobyrået gnir seg i henda nå."
         } else if( this.shortTermValue == 2){
          this.shortTermMessage = "Ganske dyrt. Her bør du bruke noen dager til å tenke på det. Husk at du sparer til bolig!"
         }else if( this.shortTermValue == 3){
          this.shortTermMessage = "Litt dyrt. Vente til i morra kanskje?"
         }else if( this.shortTermValue == 4){
          this.shortTermMessage = "Koster jo ikke såå mye."
         }else if( this.shortTermValue == 5){
          this.shortTermMessage = "Koster ingen ting. Så økonomisk er det ingen ting å tape her."
         }
      },

      handleLongTerm(value){

        this.longTermValue = value

        if(this.longTermValue <= 1){
            this.longTermMessage = "Gir null niks nada i framtidig avkastning. (men det er gøy da?)"
         } else if( this.longTermValue == 2){
          this.longTermMessage = "Dette var litt vel kortsiktig?"
         }else if( this.longTermValue == 3){
          this.longTermMessage = "Kanskje du får litt tilbake, men det er jo ikke helt sikkert da…"
         }else if( this.longTermValue == 4){
          this.longTermMessage = "Her får du en del tilbake igjen på lang sikt"
         }else if( this.longTermValue == 5){
          this.longTermMessage = "Investering!!!"
         }
      },


      handleCareer(value){

        this.careerValue = value

        if(this.careerValue <= 1){
            this.careerMessage = "Blir ingen professor av dette. Spist i dag, glemt i morra."
         } else if( this.careerValue == 2){
          this.careerMessage = "Havner utenfor CV’en"
         }else if( this.careerValue == 3){
          this.careerMessage = "Kanskje du blir litt klokere?"
         }else if( this.careerValue == 4){
          this.careerMessage = "Dette kan du skrive om på Linked-in"
         }else if( this.careerValue == 5){
          this.careerMessage = "Dannelse!!"
         }
      },

      showHideAnswer(){
          this.isVisible = !this.isVisible


          let values = [
          { value: parseFloat(this.energyValue), isOff: this.energyOff },
          { value: parseFloat(this.needOfOhterValue), isOff: this.needOfOtherOff },
          { value: parseFloat(this.shortTermValue), isOff: this.shortTermOff },
          { value: parseFloat(this.longTermValue), isOff: this.longTermOff },
          { value: parseFloat(this.careerValue), isOff: this.careerOff }
        ];

        

          let activeValues = values.filter(item => !item.isOff);

          

          let total = activeValues.reduce((sum, item) => sum + item.value, 0);
          let divisor = activeValues.length * 5;  // Maximum possible total for active properties
          let percentage = Math.floor((total / divisor) * 100);

          this.precent = percentage 




      }, 

      handleCheck(value){
    
        this[value] = !this[value];
        console.log("energyOff is:", this[value]);
         /*this.value = !this.value

         
         if(this.value === true){
           console.log("check is on")
         } else if(this.value === false){
           console.log("check is off")
         }

         console.log("energy is:"+ " " + this.energyOff)
         console.log("need of others is" + " " + this.needOfOtherOff)*/
 
       }
 
       }

      
    }

</script>