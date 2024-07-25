import {SiteType} from "@/types/enums";
import {Route} from "@/routing/route";

export interface AppParams {
    port: number;
    cors?: boolean;
    staticDir?: boolean;
    routes: Route[]
    routeArgs?: any
    siteType: SiteType
    hyperScript?: boolean
}

export interface ServiceParams {
    additionalArgs: any,
    request: any,
    html: any,
    params?: any,
};