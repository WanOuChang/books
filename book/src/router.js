import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: "/home",
        component: () =>
            import ("./views/home/"),
        redirect: "/home/homes",
        children: [{
            path: "/home/homes",
            component: () =>
                import ("./views/home/homes/")
        }, {
            path: "/home/classify",
            component: () =>
                import ("./views/home/classify/")
        }, {
            path: "/home/seniority",
            component: () =>
                import ("./views/home/seniority/")
        }, {
            path: "/home/bookrack",
            component: () =>
                import ("./views/home/bookrack/")
        }]
    }, {
        path: "/login",
        component: () =>
            import ("./views/login/")
    }, {
        path: "/detail",
        component: () =>
            import ("./views/detail/")
    }, {
        path: "*",
        redirect: "/home"
    }]
})