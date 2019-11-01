import Home from '../views/Home.vue'

const router = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, 
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import( /* webpackChunkName: "about" */ '../views/')
    // },
     {
        path: '/login',
        name: 'login',
        component: () => import('../views/personalCenter/login/login.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () => import('../views/personalCenter/login/register.vue')
    },{
        path: '/Welcome',
        name: 'welcome',
        component: () => import('../views/personalCenter/welcome/Welcome.vue')
    }, {
        path: '/personal',
        name: 'personal',
        component: () => import( /* webpackChunkName: "about" */ '../views/personalCenter/personalCenter/Personal.vue'),
        children: [{
                path: '/essentialInformation',
                name: 'essentialInformation',
                component: () => import('../views/personalCenter/personalCenter/EssentialInformation.vue')
            },
            {
                path: '/sampleReels',
                name: 'sampleReels',
                component: () => import('../views/personalCenter/personalCenter/SampleReels.vue')
            },
            {
                path: '/myAttention',
                name: 'myAttention',
                component: () => import('../views/personalCenter/personalCenter/MyAttention.vue')
            },
            {
                path: '/myDynamics',
                name: 'myDynamics',
                component: () => import('../views/personalCenter/personalCenter/MyDynamics.vue')
            },
            {
                path: '/changeInfo',
                name: 'changeInfo',
                component: () => import('../views/personalCenter/personalCenter/ChangeInfo.vue')
            },
            {
                path: '/publication',
                name: 'publication',
                component: () => import('../views/personalCenter/personalCenter/Publication.vue')
            },
            {
                path: '/SampleReelsDetails',
                name: 'sampleReelsDetails',
                component: () => import('../views/personalCenter/personalCenter/SampleReelsDetails.vue')
            }
        ]
    },
]

export default router;