import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Postulaciones from '@/components/views/Postulaciones'
import Profesores from '@/components/views/Profesores'
import CursosRetos from '@/components/views/CursosRetos'
import Preguntas from '@/components/views/Preguntas'
import Premios from '@/components/views/Premios'
import Cv from '@/components/views/Cv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/postulaciones',
      component: Postulaciones
    },
    {
      path: '/profesores',
      component: Profesores
    },
    {
      path: '/cursos-y-retos',
      component: CursosRetos
    },
    {
      path: '/preguntas',
      component: Preguntas
    },
    {
      path: '/premios',
      component: Premios
    },
    {
      path: '/curriculum',
      component: Cv
    }
  ]
})
