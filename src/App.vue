<template>
  <header class="bg-HeadFoot flex justify-between">
    <img src="/logofestival.svg" class="h-20 w-auto" alt="LogoFestival">
    <h1 class="font-rubik-mono-one text-xl text-Color-Bouton">BonyFest</h1>

    <div>
      <MenuIcon class="h-12 w-12 fill-blue-300 stroke-PrincipalyText" />
      <nav class="text-PrincipalyText">
        <RouterLink to="/" class="">Accueil</RouterLink>
        <RouterLink to="/Billeterie" class="">Billeterie</RouterLink>
        <RouterLink to="/LeFestival" class="">LeFestival</RouterLink>
        <RouterLink to="/" class="">Nouveautées</RouterLink>
        <RouterLink to="/Programme" class="">Programme</RouterLink>
      </nav>
    </div>

  </header>

  <main class="bg-Background">
  <RouterView />
  </main>
  <footer>

  </footer>
</template>

<script>
import { FilmIcon } from "@heroicons/vue/outline";
import { MenuIcon } from "@heroicons/vue/outline"
export default {
  components: { FilmIcon,  MenuIcon },
};
</script>

<style>

</style>