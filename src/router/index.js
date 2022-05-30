import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import ContactView from '../views/ContactView.vue'
import LeFestivalView from '../views/LeFestivalView.vue'
import MentionsLegalsView from '../views/MentionsLegalsView.vue'
import PageArtisteView from '../views/PageArtisteView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Artistes', name: 'Artistes', component: ArtistesView },
    { path: '/Billeterie', name: 'Billeterie', component: BilleterieView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/LeFestival', name: 'LeFestival', component: LeFestivalView },
    { path: '/MentionsLegals', name: 'MentionsLegals', component: MentionsLegalsView },
    { path: '/PageArtiste', name: 'PageArtiste', component: PageArtisteView },
    { path: '/Programme', name: 'Programme', component: ProgrammeView },
    // ici les autre routes
  ]
})

export default router
