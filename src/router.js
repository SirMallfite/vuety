import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import TextField from "@/views/TextField.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/text-field",
        name: "TextField",
        component: TextField,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
