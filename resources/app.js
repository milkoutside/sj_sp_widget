// app.js
import Vue from 'vue';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';

import Index from "./Index.vue";
import store from './store';

import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from "vue-sweetalert2";
Vue.component('app', Index);
Vue.use(Vuetify);
const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdiSvg',
    },
});
let app = new Vue({
    vuetify,
    el: '#app',
    store
});