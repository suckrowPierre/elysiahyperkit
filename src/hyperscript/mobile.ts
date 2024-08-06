import {Hyperscript} from "@/hyperscript/hyperscript";

export {isMobileOrNarrow, resizeOrLoadCheck};

const isMobileOrNarrow = (minScreenWidth: number): Hyperscript=> {
    const condition = `window.innerWidth < ${minScreenWidth} || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)`;
    return new Hyperscript(`
    js
    function isMobileOrNarrow() {
    return ${condition};
    }
    end
    `);
}

const resizeOrLoadCheck = new Hyperscript("on resize from window or load");