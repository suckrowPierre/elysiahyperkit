import * as elements from "typed-html";
import type {ExtendedComponentParams} from "./util";

export const BaseHTML = ({siteType}: ExtendedComponentParams) => {
    console.log(siteType)
    return (
        <div>
            <h1>BaseHTML</h1>
        </div>
    )
}