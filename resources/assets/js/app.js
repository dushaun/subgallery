
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('register', require('./components/register.vue'));
Vue.component('update-username', require('./components/settings/update-username.vue'));
Vue.component('update-email', require('./components/settings/update-email.vue'));
Vue.component('update-password', require('./components/settings/update-password.vue'));

Vue.component('update-subscription-plan', require('./components/settings/subscriptions/update-subscription-plan.vue'));
Vue.component('update-card-credentials', require('./components/settings/billing/update-card-credentials.vue'));

const app = new Vue({
    el: '#app'
});
