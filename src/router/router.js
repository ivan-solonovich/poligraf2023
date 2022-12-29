
import {createRouter, createWebHashHistory} from "vue-router";


import HomeTitle from "@/components/HomeTitle/HomeTitle";
import PriceMain from "@/components/Price/PriceMain";
import WorkCheck from "@/components/work-check/WorkCheck";
import TreasonMain from "@/components/treason/TreasonMain";
import CourtMain from "@/components/court/CourtMain";
import TeensCheck from "@/components/teens/TeensCheck";
import PrevMain from "@/components/prev/PrevMain";
import AboutMain from "@/components/about/AboutMain";
import HistoryMain from "@/components/history/HistoryMain";

const routes =
    [

        {
            path: '/',
            name: 'home',
            component: HomeTitle,
            meta: {
                sitemap: {
                    lastmod:    'December 29, 2022',
                    priority:    1,
                    changefreq: 'daily',
                }
            }
        },
        {
            path: '/price',
            name: 'price',
            component: PriceMain
        },
        {
            path: '/work',
            name: 'work',
            component: WorkCheck
        },
        {
            path: '/treason',
            name: 'treason',
            component: TreasonMain
        },
        {
            path: '/court',
            name: 'court',
            component: CourtMain
        },
        {
            path: '/teens',
            name: 'teens',
            component: TeensCheck
        },
        {
            path: '/prev',
            name: 'prev',
            component: PrevMain
        },
        {
            path: '/about',
            name: 'about',
            component: AboutMain
        },
        {
            path: '/history',
            name: 'history',
            component: HistoryMain
        }

    ]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})


export default router