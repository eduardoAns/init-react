import { lazy, LazyExoticComponent } from "react";
import LazyLayout from "../lazyload-01/layout/LazyLayout";
import { NoLazy } from "../lazyload-01/pages/NoLazy";
// import { LazyPageOne, LazyPageTwo, LazyPage3 } from "../lazyload-01/pages";

type JSXComponent =() => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazyLayout = lazy(() => import(/* webpackChunkName:"lazyLayout" */ "../lazyload-01/layout/LazyLayout"));


export const routes:Route[] = [
    {   to: "/lazyload/", 
        path:"/lazyload/*", 
        Component: LazyLayout, 
        name: "LazyLayout" 
    },
    {   to: "/No-Lazy",
        path:"No-Lazy",
        Component: NoLazy,
        name: "No Lazy"
    },
]