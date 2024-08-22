import {Page} from "@/routing/route";
import * as elements from "typed-html";
import {Attributes, CustomElementHandler} from "typed-html"
import {HtmxOrStaticLink} from "@/templates/Link";

interface NavbarParams {
    pages: Page[];
    ListWrapper: any;
    ListElement: any;
}

export const NavbarLink = ({ page, ...attributes }: Attributes & { page: Page }) => {
    if (!page){
        throw new Error("Page is undefined")
    }
    return (
    <HtmxOrStaticLink endpoint={page.endpoint} {...attributes}>
        {page.title}
    </HtmxOrStaticLink>
)};

export const Navbar = ({
                           pages,
                           ListWrapper,
                           ListElement,
                           LinkElement,
                           children,
                           ...attributes
    }: Attributes & NavbarParams) => {
    const pagesToShow = pages.filter((page) => page.showInNavbar);

    return (
        <nav {...attributes}>
            <ListWrapper>
                    {pagesToShow.map(page => (
                        <ListElement>
                            <LinkElement page={page}>
                                {page.title}
                            </LinkElement>
                        </ListElement>
                    )).join("")}
            </ListWrapper>
        </nav>
    )
}