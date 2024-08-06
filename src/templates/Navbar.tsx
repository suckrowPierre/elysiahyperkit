import {Page} from "@/routing/route";
import {ComponentParams} from "@/types/interfaces";
import * as elements from "typed-html";
import {getSettings} from "@/appSettings";


interface NavbarParams extends ComponentParams {
    pages: Page[];
    ListWrapper: any;
    ListElement: any;
}


export const Navbar = (params: NavbarParams) => {
    const pagesToShow = params.pages.filter(page =>
        page.showInNavbar
    );
    const ListWrapper = params.ListWrapper;
    const ListElement = params.ListElement;
    return (
        <nav class={params.classes ? params.classes : ""} id={params.id ? params.id : ""} _={params.hyperScript && getSettings().hyperScript ? params.hyperScript.toString() : ""}>
            <ListWrapper>
                    {pagesToShow.map(page => (
                        <ListElement>
                                <a href={page.endpoint}>{page.title}</a>
                        </ListElement>
                    )).join("")}
            </ListWrapper>
        </nav>
    )
}