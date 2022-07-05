// declare let __DEV__: boolean|undefined;
export function log(message, ...optionalParams) {
    if (!global.__DEV__)
        return;
    console.log(message, optionalParams);
}
export function warn(message, ...optionalParams) {
    if (!global.__DEV__)
        return;
    console.warn(message, optionalParams);
}
export function error(message, ...optionalParams) {
    // if(!(global as any).__DEV__) return;
    console.error(message, optionalParams);
}
//# sourceMappingURL=Logger.js.map