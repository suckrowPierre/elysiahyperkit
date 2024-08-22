import { AppSettings } from "./types/interfaces";

let appSettings: AppSettings;

export const initializeSettings = async (settings: AppSettings): Promise<void> => {
    appSettings = settings;
}

export const getSettings = (): AppSettings => {
    if (!appSettings) {
        throw new Error("Settings have not been initialized.");
    }
    return appSettings;
}


