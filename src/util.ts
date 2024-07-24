import {Route} from "./routing/route";

export enum SiteType {
    STATIC = 'STATIC',
    HTMX = 'HTMX',
    CUSTOM = 'CUSTOM'
}


export interface AppParams {
    port: number;
    cors?: boolean;
    staticDir?: boolean;
    routes: Route[]
    routeArgs?: any
    siteType: SiteType
    hyperScript?: boolean
}