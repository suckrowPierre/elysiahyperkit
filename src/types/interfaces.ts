import {SiteType} from "@/types/enums";

export interface AppParams extends AppSettings{
    port: number;
    cors?: boolean;
    staticDir?: boolean;
    routeArgs?: any
}

export interface AppSettings {
    siteType: SiteType
    hyperScript: boolean
}

export interface ServiceParams {
    additionalArgs: any,
    request: any,
    html: any,
    params?: any,
}