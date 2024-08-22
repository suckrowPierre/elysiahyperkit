import {Elysia} from "elysia";
import {html} from "@elysiajs/html";
import {staticPlugin} from '@elysiajs/static'
import {cors} from '@elysiajs/cors'
import {AppParams, AppSettings} from "./types/interfaces";
import {Route} from "@/routing/route";
import {getSettings, initializeSettings} from "@/appSettings";

export class App {
    private app: any;
    private appParams: AppParams;

    constructor(params: AppParams, customCors?: any) {
        this.app = new Elysia().use(html());
        this.appParams = params;
        initializeSettings(params as AppSettings);


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
    }

    setRoutes(routes: Route[]) {
        routes.forEach(route => {
            if (!(route instanceof Route)) {
                throw new Error('Route is not an instance of Route');
            }
            route.register(this.app, this.appParams.routeArgs);
        });
        return this;
    }

    use(plugin: any) {
        this.app.use(plugin);
        return this;
    }

    start() {
        this.app.listen(this.appParams.port)
        console.log(`Server is running at http://${this.app.server?.hostname}:${this.app.server?.port}`);
    }
}