<template>
  <header>
    <icon-logo />
    <FilmIcon class="h-5 w-5 fill-blue-300 stroke-blue-600" />
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
    </nav>

      <header class="bg-black-primary flex justify-between">
    <img class="w-24 h-auto" src="/images-icones/Logoblanc.svg" alt="">
    <section>
      <div  class="w-max ">
        <Profil class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/> 
      </div>
      
      <!-- menu -->
      <nav>
          <div  class="w-max ">
            <Menu class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/>
              <div class="text-blanc-primary">
                <router-link to="/">Accueil</router-link>
                <router-link to="/Apropos">A propos</router-link>
                <router-link to="/compteArtiste">Votre Compte</router-link>
                <router-link to="/Dons">Dons</router-link>
                <router-link to="/FAQ">FAQ</router-link>
                <router-link to="/Inscription">Inscription</router-link>
                <router-link to="/Messagerie">Messagerie</router-link>
                <router-link to="/MLegal">Mentions légales</router-link>
                <router-link to="/NosArtistes">Nos Artistes</router-link>
              </div>
        </div>
      </nav>
    </section>
  </header>
  </header>

  <RouterView />

  <footer>

  </footer>
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon },
};
</script>