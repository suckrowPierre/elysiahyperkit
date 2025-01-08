import { RequestType } from "@/types/enums";

export class Route {
    endpoint: string;
    requestType: RequestType;
    service: any;
    additionalArgs: any;

    constructor(requestType: RequestType, endpoint: string, service: any, ...args: any) {
        this.requestType = requestType;
        this.endpoint = endpoint;
        this.service = service;
        this.additionalArgs = args;
    }

    register(app: any, routeArgs: any) {
        if (this.additionalArgs.length === 0) {
            app[this.requestType.toLowerCase()](this.endpoint, this.service.bind(this, routeArgs));
            return;
        }
        app[this.requestType.toLowerCase()](this.endpoint, this.service.bind(this, ...this.additionalArgs, routeArgs));
    }
}

export class Page extends Route {
    title: string;
    showInNavbar: boolean;
    constructor(endpoint: string, service: any, title: string, showInNavbar: boolean, ...args: any) {
        super(RequestType.GET, endpoint, service, ...args);
        this.title = title;
        this.showInNavbar = showInNavbar;
    }
}