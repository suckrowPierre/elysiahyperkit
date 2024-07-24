import {SiteType} from "../util";

export type ComponentParams = {
    style?: string;
    classes?: string;
    id?: string;
    mobileStyle?: string;
    mobileClasses?: string;
}

export type ExtendedComponentParams = ComponentParams & {
    siteType: SiteType;
    hyperScript?: boolean;
}


