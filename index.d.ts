

declare namespace hasPermissions {
    /**
    Whether or not this module is supported
    */
    export const isSupported: boolean
}

/**
Check if the current app has accessibility permissions.
If the `ask` parameter is passed as `true`and the permissions are not granted, the user will be prompted.

@example
```
hasPermissions({ask: true}); // false
```

@param options - Whether to promp the user or not
@returns Whether or not the permissions are granted
*/
declare function hasPermissions(options?: {ask?: boolean}): boolean;

export = hasPermissions