import {RequestType} from "@/types/enums";

export class Route {
    endpoint: string;
    requestType: RequestType;
    service: any;

    constructor(requestType: RequestType, endpoint: string, service: any) {
        this.requestType = requestType;
        this.endpoint = endpoint;
        this.service = service;
    }

    register(app: any, routeArgs: any) {
        app[this.requestType.toLowerCase()](this.endpoint, this.service.bind(this, routeArgs));
    }
}

export class Page extends Route {
    title: string;
    showInNavbar: boolean;
    constructor(endpoint: string, service: any, title: string, showInNavbar: boolean) {
        super(RequestType.GET, endpoint, service);
        this.title = title;
        this.showInNavbar = showInNavbar;
    }
}