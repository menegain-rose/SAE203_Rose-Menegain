<template>
  <main>
    <h2 class="text-2xl">ARTISTES</h2>
    <h3>
      Forfaits 3 ou 2 jours
    </h3>

    <article>
        <billet
            price="150"
            text="Forfait 3 jours"
            dates="Vendredi 15 + Samedi 16 + Dimanche 17 Juillet"
        />
    </article>



  </main>
</template>

<script>
import billet from "/src/components/billet.vue";

export default {
    components: {
    billet,
},    

};
</script>