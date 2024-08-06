import {SiteType} from "@/types/enums";
import {Route} from "@/routing/route";
import {Hyperscript} from "@/hyperscript/hyperscript";

export interface AppParams extends AppSettings{
    port: number;
    cors?: boolean;
    staticDir?: boolean;
    routes: Route[]
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
};

export interface ComponentParams {
    style?: string;
    classes?: string;
    id?: string;
    mobileStyle?: string;
    mobileClasses?: string;
    siteType?: SiteType;
    hyperScript?: string | Hyperscript;
    children?: any;
}