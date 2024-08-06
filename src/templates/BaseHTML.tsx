import * as elements from "typed-html";
import {HTMX, HYPERSCRIPT} from "@/templates/scripts";
import {ComponentParams} from "@/types/interfaces";
import {SiteType} from "@/types/enums";
import {getSettings} from "@/appSettings";
import {isMobileOrNarrow, resizeOrLoadCheck} from "@/hyperscript/mobile";
import {Hyperscript} from "@/hyperscript/hyperscript";


interface HeadParams {
    title: string;
    authors: string[];
    children?: any;
}

export const Head = (props : HeadParams) => {
    const appSettings = getSettings();
    return (
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{props.title}</title>
            {props.authors.map((author: any) => `<meta name="author" content="${author}">`).join("\n")}
            {appSettings.hyperScript ? <HYPERSCRIPT/> : null}
            {appSettings.siteType === SiteType.HTMX ? <HTMX/> : null}
            {props.children}
        </head>
    )
}


export const Body = (props: ComponentParams & {minScreenWidth?:number}) => {
    let hyperscript = props.hyperScript || "";
    if (props.minScreenWidth && !getSettings().hyperScript) {
        throw new Error("minScreenWidth can only be used with hyperScript");
    } else if (props.minScreenWidth) {
        hyperscript = isMobileOrNarrow(props.minScreenWidth).concat(hyperscript)
    }
    return (
            <body class={props.classes} _={hyperscript.toString()}>
            <div _={resizeOrLoadCheck.concat(Hyperscript.ifElse("isMobileOrNarrow()", "add .bg-red-500 to me then remove .bg-blue-500 from me ","add .bg-blue-500 to me then remove .bg-red-500 from me" )).script}>
                {props.children}
            </div>
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