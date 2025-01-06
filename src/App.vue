<template> 
  <div > 
    <h1>{{title}}</h1>
    <button @click="number++"> Øke</button>
    <button @click="number--"> Minske</button>
    <h2>{{number}}</h2>
  </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return{
            title:'Anders og Lars sin app',
            number: 0
        }
    }
}
</script>