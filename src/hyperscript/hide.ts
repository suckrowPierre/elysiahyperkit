import {Hyperscript} from "@/hyperscript/hyperscript";

export const onClickDropDown = (contentIds: string[]): Hyperscript => {
    let script = new Hyperscript(`on click`);
    contentIds.forEach(contentId => {
        script = script.concat(Hyperscript.ifElse(`#${contentId}'s style.display == "none"`, `show #${contentId}`, `hide #${contentId}`));
    });
    return script;
}
