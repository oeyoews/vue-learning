import { createApp } from 'vue';
import '~/style.css';
import App from '~/App.vue';
import router from '~/router';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';

const pinia = createPinia();
const app = createApp(App);
const head = createHead();

// use router
app.use(router).use(pinia).use(head);
// mount
app.mount('#app');
