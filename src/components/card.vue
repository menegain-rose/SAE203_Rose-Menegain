<template>
    <div>
        <figure class="flex items-center">
            <img class="w-150px h-auto object-cover " :src="imageartist" alt="" />
            <figcaption class="bg-Color-Bouton text-PrincipalyText">
                <h3 class="m-4 font-comfortaa font-bold text-lg">{{ name }}</h3>
                <p class="m-4 font-comfortaa font-bold text-lg"> {{ date }}</p>
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