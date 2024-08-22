import * as elements from "typed-html";
import {HTMX, HYPERSCRIPT} from "@/templates/scripts";
import {SiteType} from "@/types/enums";
import {getSettings} from "@/appSettings";
import {Attributes} from "typed-html";


interface HeadParams {
    title: string;
    authors: string[];
}

export const Head = ({ title, authors, children , ...attributes }: Attributes & HeadParams) => {
    const appSettings = getSettings();
    return (
        <head {...attributes}>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            {authors.map((author: any) => `<meta name="author" content="${author}">`).join("\n")}
            {appSettings.hyperScript ? <HYPERSCRIPT/> : null}
            {appSettings.siteType === SiteType.HTMX ? <HTMX/> : null}
            {children}
        </head>
    )
}


export const Body = ({ children , ...attributes }: Attributes) => {
    return (
        <body {...attributes}>
            {children}
        </body>
    )
}

export const BaseHTML = ({head, body}:{head:any, body:any}) => {
    return `
<!DOCTYPE html>
<html lang="en">
    ${head}
    ${body}
</html>
`}