<template>
  <main class="mx-5">
    <h2 class="text-2xl">LE PROGRAMME</h2>

      <div class="flex flex-col border-terne-red border m-5 rounded">
        <div class="p-2">
        <div class="btn-group">
          <Bouton class="bg-Dark_Bouton m-1">1er Jour</Bouton>
          <Bouton class="m-1">2ème Jour</Bouton>
          <Bouton class="m-1">3ème Jour</Bouton>        
        </div>
      </div>
      </div>

    <ul>
      <li>
        <h3>Kap Bambino</h3>
        <p>Vendredi 15 juillet, 19h 
          Grande scène
          Musique électronique | Bordeaux</p>
      </li>

      <li>
        <h3>Kap Bambino</h3>
        <p>Vendredi 15 juillet, 19h 
          Grande scène
          Musique électronique | Bordeaux</p>
      </li>

      <li>
        <h3>Kap Bambino</h3>
        <p>Vendredi 15 juillet, 19h 
          Grande scène
          Musique électronique | Bordeaux</p>
      </li>

      <li>
        <h3>Kap Bambino</h3>
        <p>Vendredi 15 juillet, 19h 
          Grande scène
          Musique électronique | Bordeaux</p>
      </li>

    </ul>




  </main>

</template>

<script>
import Bouton from "../components/icons/Bouton.vue";


export default {
    components: {
    Bouton
},    



};
</script>