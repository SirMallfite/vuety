import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import TextFieldView from "@/views/TextFieldView.vue";
import IconView from "@/views/IconView.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/text-field",
        name: "TextField",
        component: TextFieldView,
    },
    {
        path: "/icon",
        name: "Icon",
        component: IconView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
