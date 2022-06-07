import { lazy, LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element
interface IRoute{
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,//() => JSX.Element,
    name: string,
    children?: IRoute[]
}

const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes: IRoute[] = [
    {
        path:"/lazy1",
        Component: LazyPage1,
        name: 'Lazy-Page1'
    },
    {
        path:"/lazy2",
        Component: LazyPage2,
        name: 'Lazy-Page2'
    },
    {
        path:"/lazy3",
        Component: LazyPage3,
        name: 'Lazy-Page3'
    },
]