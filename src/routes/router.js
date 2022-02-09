import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreatListView.js';
import store from '../store/store.js';
import bus from '../utils/bus.js';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                        // bus.$emit('end:spinner');
                    })
                    .catch((error) => console.log(error));
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                        // bus.$emit('end:spinner');
                    })
                    .catch((error) => console.log(error));
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                        // bus.$emit('end:spinner');
                    })
                    .catch((error) => console.log(error));
            }
        },
        {
            path: '/item',
            name: 'item',
            component: ItemView,
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
        },
        {
            path: '/item?id=:id',
            name: 'itemInfo',
            component: ItemView,
        },
    ]
});