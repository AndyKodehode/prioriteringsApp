<template> 

<!--<div class="inner-circle"></div>-->
<div class="body">
  <section class="topSection">
     <div class="circular-progress" >
        <div class="inner-circle"></div>
        <p class="percentage">{{precent}} %</p>
     </div>

     <div class="buttonDiv">
        <button class="topBtn" @click="showHideAnswer" >Resultat</button>
        <button class="borderBtn" @click="resetValues" >Nullstill</button>
     </div>
  </section>



  
   <!--<div>
      <circle-progress :viewport="true"  :is-gradient="true" :percent="precent" :show-percent="true" class="custom-circle-progress"> 
     

      </circle-progress>

      <h2>Anbefaling for kjøp: {{precent}} %</h2>
   </div>-->



   <section class="resultDiv" v-if="isVisible" >
    <ul>
      <div class="answerCont" v-if="energyOff" >

       <div class="answerIconDiv">
        <img src="./components/icons/Energi.svg" alt="">
       </div>
       <div class="answerTextDiv">
       <p >
         {{energyMessage}}
       </p>
      </div>
      </div>

      <div class="answerCont" v-if="needOfOtherOff" >
        <div class="answerIconDiv">
        <img src="./components/icons/Andre.svg" alt="">
       </div>
       <div class="answerTextDiv">
       <p >
        {{otherMessage}}
       </p>
      </div>
      </div>


       <div class="answerCont" v-if="shortTermOff">
        <div class="answerIconDiv">
        <img src="./components/icons/Pris.svg" alt="">
       </div>
       <div class="answerTextDiv">
       <p >
        {{shortTermMessage}}
       </p>
      </div>
      </div>

       <div class="answerCont" v-if="longTermOff">
        <div class="answerIconDiv">
        <img src="./components/icons/Langsiktig.svg" alt="">
       </div>
       <div class="answerTextDiv">
       <p >
        {{longTermMessage}}
       </p>
      </div>
      </div>

       <div class="answerCont" v-if="careerOff">
        <div class="answerIconDiv">
          <img src="./components/icons/Karriere.svg" alt="">
         </div>
         <div class="answerTextDiv">
          <p >
            {{careerMessage}}
          </p>
          </div>
      </div>

      <div class="answerCont" v-if="joyOff">
        <div class="answerIconDiv">
          <img src="./components/icons/Glede3.svg" alt="">
         </div>
         <div class="answerTextDiv">
          <p >
            {{joyMessage}}
          </p>
          </div>
      </div>
    </ul>
  </section>


  <section class="sliderSection" v-if="!isVisible">
        <div  class='padding' > 
          <!--<input type="checkbox" v-model="energyOff" >-->
          <div class="slideInnerDiv">
            <div class="labelDiv">
              <label class="label" for="Energi">Energi</label>
              <input :disabled="!energyOff" :class="[energyOff ? 'sliderActive' : 'slider']" id="Energi"  @input="handleEnergyChange(values.energyValue)" type="range" min="0" max="5" v-model="values.energyValue">
            </div>
            <div class="slideValueDiv"> 
              <h3>{{values.energyValue}}</h3>
              <label for="checkbox">
                 <input type="checkbox" class="checkbox" v-model="energyOff" >
                 <span>Velg</span>
              </label>
            </div>
          </div>
        </div>

          <div class='padding' > 
            <!--<input type="checkbox" v-model="needOfOtherOff"  >-->
            <div class="slideInnerDiv">
              <div class="labelDiv">
                <label class="label" for="AndresBehov">Andres behov</label>
                <input :disabled="!needOfOtherOff" :class="[needOfOtherOff ? 'sliderActive' : 'slider']" id="AndresBehov"  @input="handleNeedOfOther(values.needOfOhterValue)" type="range" min="0" max="5" v-model="values.needOfOhterValue">
              </div> 
              <div class="slideValueDiv"> 
                <h3>{{values.needOfOhterValue}}</h3>
                <label for="checkbox">
                    <input type="checkbox" class="checkbox" v-model="needOfOtherOff" >
                    <span>Velg</span>
                </label>
              </div>
            </div>
        </div>

        
          <div class='padding' > 
            <!--<input type="checkbox" v-model="shortTermOff"  >-->
            <div class="slideInnerDiv">
              <div class="labelDiv">
                <label class="label" for="KortSiktig">Pris</label>
                <input :disabled="!shortTermOff" :class="[shortTermOff ? 'sliderActive' : 'slider']" id="KortSiktig"  @input="handleShortTerm(values.shortTermValue)" type="range" min="0" max="5" v-model="values.shortTermValue">
              </div> 
              <div class="slideValueDiv">  
                <h3>{{values.shortTermValue}}</h3>
                <label for="checkbox">
                  <input type="checkbox" class="checkbox" v-model="shortTermOff" >
                  <span>Velg</span>
              </label>
              </div>
            </div>
        </div>

        <div class='padding' > 
            <!--<input type="checkbox" v-model="longTermOff"  >-->
            <div class="slideInnerDiv">
              <div class="labelDiv">
                <label class="label" for="Langsiktig">Lang sikt</label>
                <input :disabled="!longTermOff" :class="[longTermOff ? 'sliderActive' : 'slider']" id="Langsiktig"  @input="handleLongTerm(values.longTermValue)" type="range" min="0" max="5" v-model="values.longTermValue">
              </div>  
              <div class="slideValueDiv"> 
                <h3>{{values.longTermValue}}</h3>
                <label for="checkbox">
                    <input type="checkbox" class="checkbox" v-model="longTermOff" >
                    <span>Velg</span>
                </label>
              </div>
            </div> 
        </div>

        <div class='padding' > 
            <!--<input type="checkbox"  v-model="careerOff" >-->
            <div class="slideInnerDiv">
                <div class="labelDiv">
                    <label class="label" for="Karriere">Karriere</label>
                    <input :disabled="!careerOff" :class="[careerOff ? 'sliderActive' : 'slider']" id="Karriere"  @input="handleCareer(values.careerValue)" type="range" min="0" max="5" v-model="values.careerValue">
                 </div>
                <div class="slideValueDiv">
                   <h3 class="slideValueText">{{values.careerValue}}</h3>
                   <label for="checkbox">
                    <input type="checkbox" class="checkbox" v-model="careerOff" >
                    <span>Velg</span>
                  </label>
                </div>
            </div>
        </div>



        <div class='padding' > 
            <!--<input type="checkbox"  v-model="careerOff" >-->
            <div class="slideInnerDiv">
                <div class="labelDiv">
                    <label class="label" for="glede">Glede</label>
                    <input :disabled="!joyOff" :class="[joyOff ? 'sliderActive' : 'slider']" id="glede"  @input="handleJoy(values.joyValue)" type="range" min="0" max="5" v-model="values.joyValue">
                 </div>
                <div class="slideValueDiv">
                   <h3 class="slideValueText">{{values.joyValue}}</h3>
                   <label for="checkbox">
                      <input type="checkbox" class="checkbox" v-model="joyOff" >
                      <span>Velg</span>
                  </label>
                </div>
            </div>
        </div>

        
      </section>
</div>
</template>

<script>

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
/*import { ref } from 'vue';
import { useLongPress } from '@vueuse/core';*/




export default {
  /*setup() {
    // Your existing function
    const myFunction = () => {
      console.log('Long press triggered!');
      alert('Long press action executed!');
    };

    // Attach your function to useLongPress
    const { bindings: longPressBindings } = useLongPress(handleCheck, {
      duration: 500, // Set duration to 500ms (or your preferred time)
    });

    return { longPressBindings };
  },*/


    name: "App",
    components: {CircleProgress},
    data(){
        return{
            title:'Anders og Lars sin app',
            values:{
            energyValue: 0,
            needOfOhterValue: 0,
            shortTermValue: 0,
            longTermValue: 0,
            careerValue: 0,
            joyValue: 0
            },
            
            

            energyMessage: "",
            otherMessage: "",
            shortTermMessage: "",
            longTermMessage: "",
            careerMessage: "",
            joyMessage: "",

            isVisible: false,
            precent: 0,
            needOfOtherOff : false,
            energyOff: false,
            shortTermOff: false,
            longTermOff: false,
            careerOff: false,
            joyOff: false,

            displayPercent: "0%", // Display text
           
            

        }
    },

    

    watch: {
  
      needOfOtherOff(newValue, oldValue) {
    console.log('needOfOthers changed:', newValue);
      },

      shortTermOff(newValue, oldValue) {
    console.log('shortTerm changed:', newValue);
      },

      careerOff(newValue, oldValue) {
    console.log('shortTerm changed:', newValue);
      },


      

      


   },

    methods: {
      handleEnergyChange(value){
     
      this.values.energyValue = value;

      if(this.values.energyValue <= 1){
        this.energyMessage = "Dette krever mye! Kanskje bedre gjøre noe som gir deg mer energi?"
      } else if( this.values.energyValue == 2){
        this.energyMessage = "Krever litt energi av deg"
      } else if( this.values.energyValue == 3){
        this.energyMessage = "Dette hverken krever eller gir deg energi."
      }else if( this.values.energyValue == 4){
        this.energyMessage = "Dette gir jo litt energi!"
      } else if( this.values.energyValue == 5){
        this.energyMessage = "Ojoj, dette fyller opp energilageret"
      } 
      },

      handleNeedOfOther(value){

        this.values.needOfOhterValue = value

        if(this.values.needOfOhterValue <= 1){
            this.otherMessage = "Dette betyr lite for de rundt deg. Kanskje du først og fremst skal tenke på deg selv?"
         } else if( this.values.needOfOhterValue == 2){
          this.otherMessage = "Betyr jo litt for andre, men er det verdt det?"
         }else if( this.values.needOfOhterValue == 3){
          this.otherMessage = "Er jo hyggelig da."
         }else if( this.values.needOfOhterValue == 4){
          this.otherMessage = "Dette betyr noe! Her blir de sikkert glad."
         }else if( this.values.needOfOhterValue == 5){
          this.otherMessage = "That’s what friends are for!"
         }
      },


      handleShortTerm(value){

        this.values.shortTermValue = value

        if(this.values.shortTermValue <= 1){
            this.shortTermMessage = "Veeeeldig dyrt. Anbefaler å styre unna med mindre du virkelig innerst inne trenger dette. Inkassobyrået gnir seg i henda nå."
         } else if( this.values.shortTermValue == 2){
          this.shortTermMessage = "Ganske dyrt. Her bør du bruke noen dager til å tenke på det. Husk at du sparer til bolig!"
         }else if( this.values.shortTermValue == 3){
          this.shortTermMessage = "Litt dyrt. Vente til i morra kanskje?"
         }else if( this.values.shortTermValue == 4){
          this.shortTermMessage = "Koster jo ikke såå mye."
         }else if( this.values.shortTermValue == 5){
          this.shortTermMessage = "Koster ingen ting. Så økonomisk er det ingen ting å tape her."
         }
      },

      handleLongTerm(value){

        this.values.longTermValue = value

        if(this.values.longTermValue <= 1){
            this.longTermMessage = "Gir null niks nada i framtidig avkastning. (men det er gøy da?)"
         } else if( this.values.longTermValue == 2){
          this.longTermMessage = "Dette var litt vel kortsiktig?"
         }else if( this.values.longTermValue == 3){
          this.longTermMessage = "Kanskje du får litt tilbake, men det er jo ikke helt sikkert da…"
         }else if( this.values.longTermValue == 4){
          this.longTermMessage = "Her får du en del tilbake igjen på lang sikt"
         }else if( this.values.longTermValue == 5){
          this.longTermMessage = "Investering!!!"
         }
      },


      handleCareer(value){

        this.values.careerValue = value

        if(this.values.careerValue <= 1){
            this.careerMessage = "Blir ingen professor av dette. Spist i dag, glemt i morra."
         } else if( this.values.careerValue == 2){
          this.careerMessage = "Havner utenfor CV’en"
         }else if( this.values.careerValue == 3){
          this.careerMessage = "Kanskje du blir litt klokere?"
         }else if( this.values.careerValue == 4){
          this.careerMessage = "Dette kan du skrive om på Linked-in"
         }else if( this.values.careerValue == 5){
          this.careerMessage = "Dannelse!!"
         }
      },

      handleJoy(value){

     this.values.joyValue = value

      if(this.values.joyValue <= 1){
          this.joyMessage = "Blir ingen professor av dette. Spist i dag, glemt i morra."
      } else if( this.values.joyValue == 2){
        this.joyMessage = "Havner utenfor CV’en"
      }else if( this.values.joyValue == 3){
        this.joyMessage = "Kanskje du blir litt klokere?"
      }else if( this.values.joyValue == 4){
        this.joyMessage = "Dette kan du skrive om på Linked-in"
      }else if( this.values.joyValue == 5){
        this.joyMessage = "Dannelse!!"
      }
      },

      showHideAnswer(){
          this.isVisible = !this.isVisible


          let values = [
          { value: parseFloat(this.values.energyValue), isOff: this.energyOff },
          { value: parseFloat(this.values.needOfOhterValue), isOff: this.needOfOtherOff },
          { value: parseFloat(this.values.shortTermValue), isOff: this.shortTermOff },
          { value: parseFloat(this.values.longTermValue), isOff: this.longTermOff },
          { value: parseFloat(this.values.careerValue), isOff: this.careerOff },
          { value: parseFloat(this.values.joyValue), isOff: this.joyOff }
        ];

        

          let activeValues = values.filter(item => item.isOff);

          

          let total = activeValues.reduce((sum, item) => sum + item.value, 0);
          let divisor = activeValues.length * 5;  // Maximum possible total for active properties
          let percentage = Math.floor((total / divisor) * 100);

          this.precent = percentage 


          
          let degrees = (percentage / 100) * 360;
          document.documentElement.style.setProperty("--progress", `${degrees}deg`);


      }, 

      handleCheck(value){
    
        this.values[value] = !this.values[value];
        console.log("energyOff is:", this.values[value]);

     

         /*this.value = !this.value

         
         if(this.value === true){
           console.log("check is on")
         } else if(this.value === false){
           console.log("check is off")
         }

         console.log("energy is:"+ " " + this.energyOff)
         console.log("need of others is" + " " + this.needOfOtherOff)*/
 
       },

       handleViewport() {
      this.displayPercent = this.percent + "%";
    },

    resetValues(){

      this.isVisible = !this.isVisible

      this.values ={
        energyValue: 0,
        needOfOhterValue: 0,
        shortTermValue: 0,
        longTermValue: 0,
        careerValue: 0,
        joyValue:0
            
      }

            this.energyMessage= "",
            this.otherMessage= "",
            this.shortTermMessage= "",
            this.longTermMessage= "",
            this.careerMessage= "",
            this.joyMessage= ""

      this.precent = 0;
      let percentage = this.precent
      let degrees = (percentage / 100) * 360;
      document.documentElement.style.setProperty("--progress", `${degrees}deg`);

    }

 
       }

      
    }

</script>