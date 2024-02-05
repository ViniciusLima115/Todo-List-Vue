/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('@/pages/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // Use the 'routes' array directly here
  // extendRoutes: (routes) => setupLayouts(routes), // This line is optional based on your needs
});

export default router;
