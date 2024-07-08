export type ServiceParams = {
    additionalArgs: any,
    request: any,
    html: any,
    params?: any,
};

export const destructServiceArgs = (args: any): ServiceParams => {
    return {
        additionalArgs: args[0],
        request: args[1].request,
        html: args[1].html,
        params: args[1].params,
    };
}

export const getFormFromRequest = async (request: any): Promise<Record<string, any>> => {
    const body = await request.text();

    const params = new URLSearchParams(body);
    const formData: Record<string, any> = {};

    for (const key of params.keys()) {
        const values = params.getAll(key);
        if (key.endsWith("[]")) {
            formData[key.slice(0, -2)] = values;
        } else {
            formData[key] = values.length > 1 ? values : values[0];
        }
    }

    return formData;
}