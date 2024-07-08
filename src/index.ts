import {Elysia} from "elysia";
import {html} from "@elysiajs/html";
import {staticPlugin} from '@elysiajs/static'
import {cors} from '@elysiajs/cors'
import {Route, RequestType} from "./routing/route";

export {Route, RequestType};

export type { ServiceParams } from "./services/helpers";
export { destructServiceArgs, getFormFromRequest } from "./services/helpers";


export interface AppParams {
    port: number;
    cors?: boolean;
    staticDir?: boolean;
    routes: Route[]
    routeArgs?: any
}

export class App {
    private app: any;
    private readonly port: number;

    constructor(params: AppParams, customCors?: any) {
        this.port = params.port;
        this.app = new Elysia().use(html());

        if (params.staticDir) {
            this.app.use(staticPlugin())
        }

        if (params.cors) {
            const corsOptions = customCors || {
                origin: true,
                methods: ['GET', 'POST', 'PUT', 'DELETE'],
                credentials: true,
                allowedHeaders: '*',
                maxAge: 5
            };
            this.app.use(cors(corsOptions));
        }
        params.routes.forEach(route => {
            if (!(route instanceof Route)) {
                throw new Error('Route is not an instance of Route');
            }
            route.register(this.app, params.routeArgs);
        });
    }

    start() {
        this.app.listen(this.port)
        console.log(`Server is running at http://${this.app.server?.hostname}:${this.app.server?.port}`);
    }
}

export default App;

