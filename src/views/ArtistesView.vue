<template>
  <main>
    <h1 class="text-2xl">Bonjour</h1>

        <section>
            <article v-for="artist in artists" :key="artist.id">
                <card 
                    imageartist="/images-artistes-15juillet/KapBambino.png"
                    name="artist.name"
                    date="15 juillet"


                />
            </article>
    </section>
  </main>
</template>

<script>
import card from "/src/components/card.vue";

export default {
    components: { 
        card,

    },    

};
</script>