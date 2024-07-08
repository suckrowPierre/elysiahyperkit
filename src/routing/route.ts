export {Route, RequestType};

enum RequestType {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
}

class Route {
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
