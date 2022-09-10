import { lazy, LazyExoticComponent } from "react";
// import { LazyPageOne, LazyPageTwo, LazyPage3 } from "../lazyload-01/pages";

type JSXComponent =() => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazy1 = lazy(() => import(/* webpackChunkName:"lazyPage1" */ "../lazyload-01/pages/LazyPageOne"));
const lazy2 = lazy(() => import(/* webpackChunkName:"lazyPage2" */  "../lazyload-01/pages/LazyPageTwo"));
const lazy3 = lazy(() => import(/* webpackChunkName:"lazyPage3" */  "../lazyload-01/pages/LazyPage3"));


export const routes:Route[] = [
    {   to: "/lazy1", 
        path:"lazy1", 
        Component: lazy1, 
        name: "LazyPage1" 
    },
    {   to: "/lazy2",
        path:"lazy2",
        Component: lazy2,
        name: "LazyPage2"
    },
    {   to: "/lazy3",
        path:"lazy3",
        Component: lazy3,
        name: "LazyPage3"
    }
]