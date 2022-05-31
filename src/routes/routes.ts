import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface IRoute{
    path: string,
    Component: () => JSX.Element,
    name: string,
    children?: IRoute[]
}

export const routes: IRoute[] = [
    {
        path:"/lazy1",
        Component: LazyPage1,
        name: 'LazyPage1'
    },
    {
        path:"/lazy2",
        Component: LazyPage2,
        name: 'LazyPage2'
    },
    {
        path:"/lazy3",
        Component: LazyPage3,
        name: 'LazyPage3'
    },
]