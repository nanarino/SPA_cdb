import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import library from '@/components/library/library'
import music from '@/components/music/music'
import picture from '@/components/picture/picture'
import watch from '@/components/picture/watch'
import relaxation from '@/components/relaxation/relaxation'
import staff from '@/components/staff/staff'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/picture',
      name: 'picture',
      component: picture
    },
    {
      path: '/picture/watch/:id',
      name: 'watch',
      component: watch
    },
    {
      path: '/library',
      name: 'library',
      component: library
    },
    {
      path: '/relaxation',
      name: 'relaxation',
      component: relaxation
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff
    },
  ]
})
