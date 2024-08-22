import {Attributes} from "../../../../typed-html-hyperscript";
import {getSettings} from "@/appSettings";
import {SiteType} from "@/types/enums";
import * as elements from "../../../../typed-html-hyperscript";

interface LinkElementParams {
    endpoint: string;
}

const turnEndpointToStaticLink = (endpoint: string) => {
    if (endpoint === "/") {
        return "index.html";
    }
    return endpoint + ".html";
}

export const HtmxOrStaticLink = ({
                                children,
                                endpoint,
                                ...attributes
                            }: Attributes & LinkElementParams) => {
    const appSettings = getSettings();
    if (appSettings.siteType === SiteType.HTMX) {
        return (
            <button
                hx-get={endpoint}
                {...attributes}
            >
                {children}
            </button>
        );
    } else {
        return (
            <a href={turnEndpointToStaticLink(endpoint)} {...attributes}>
                {children}
            </a>
        );
    }
};