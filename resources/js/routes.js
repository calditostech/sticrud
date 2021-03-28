import AllCliente from './components/AllCliente.vue';
import CreateCliente from './components/CreateCliente.vue';
import EditCliente from './components/EditCliente.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllCliente
    },
    {
        name: 'create',
        path: '/create',
        component: CreateCliente
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditCliente
    }
];