<template>
  <main class="p-8 pb-10 "> 
    <h2 class="text-2xl">ARTISTES</h2>
    <section class="flex-col items-center grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <article class="mx-3">
        <h3 class="mt-6">
          Forfaits 3 ou 2 jours
        </h3>
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


      <article class="mx-3">
        <h3 class="mt-6">
          Forfaits jours
        </h3> 

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


      <article class="mx-3">
        <h3 class="mt-6">
          Forfaits réduits
        </h3>
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


      <article class="mx-3">
        <h3 class="mt-6">
          Forfaits Packs
        </h3>
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

    </section>
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