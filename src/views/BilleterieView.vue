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

      <billet
          price="100"
          text="Forfait 2 jours"
          dates="Samedi 16 + Dimanche 17 Juillet"
      />
    </article>

    <h3>
      Forfaits jours
    </h3>

    <article>
      <billet
          price="49"
          text="Vendredi 15 juillet"
          dates="BILLET JOUR"
      />

              <billet
          price="49"
          text="Samedi 16 juillet"
          dates="BILLET JOUR"
      />

      <billet
          price="59"
          text="Dimanche 17 juillet"
          dates="BILLET JOUR"
      />
    </article>

    <h3>
      Forfaits réduits
    </h3>

    <article>
      <billet
          price="130"
          text="Forfait Réduit 3 jours"
          dates="Carte avantages jeunes, Étudiants de Strasbourg"
      />

        <billet
          price="85"
          text="Forfait réduit 2 jours"
          dates="Samedi 16 + Dimanche 17 Juillet"
      />
    </article>

    <h3>
      Forfaits Packs
    </h3>

    <article>
      <billet
          price="150"
          text="Forfait pack 2 pers. &   2 jours"
          dates="Samedi 16 + Dimanche 17 Juillet"
      />

        <billet
          price="300"
          text="Forfait pack 4 pers. &   2 jours"
          dates="Samedi 16 + Dimanche 17 Juillet"
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