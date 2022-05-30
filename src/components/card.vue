<template>
    <div>
        <figure class="mt-10">
            <img class="h-36 w-auto object-cover " :src="imageartist" alt="image de l'artiste" />

            <figcaption class="bg-Color-Bouton text-PrincipalyText h-36 w-72">
                <h3 class="p-4 font-rubik-mono-one text-lg">{{ name }}</h3>
                <p class="m-4 font-raleway text-lg float-right flow-root"> {{ date }}</p>
            </figcaption>
        </figure>
    </div>
</template>

<script >
import { RouterLink } from "vue-router";

export default {
    props: {
        imageartist: String,
        name: String,
        date: String
    },

    components: { 
        RouterLink,
    },
}

</script>