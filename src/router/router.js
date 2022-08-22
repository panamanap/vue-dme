import {createRouter, createWebHistory} from "vue-router";
import Category from "@/components/Category.vue";
import EquipmentList from "@/components/EquipmentList.vue";
import CustomModal from "@/components/UI/CustomModal.vue";

const routes = [
    {
        path: '/',
        component: CustomModal,
        props: {
            type: 'reg',
        }
    },
    {
        path: '/catalog',
        component: Category,
        props: {
            title: 'Categories',
        }
    },
    {
        path: '/catalog/:catId',
        component: Category,
        props: {
            title: 'Subcategories',
        }
    },
    {
        path: '/catalog/:catId/:subcatId',
        component: EquipmentList
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});


export default router;