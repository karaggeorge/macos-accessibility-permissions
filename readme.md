# macos-accessibility-permissions

> Check and request macOS accessibility permissions.

Requires macOS 10.12 or later. macOS 10.13 or earlier needs to download the [Swift runtime support libraries](https://download.developer.apple.com/Developer_Tools/Swift_5_Runtime_Support_for_Command_Line_Tools/Swift_5_Runtime_Support_for_Command_Line_Tools.dmg).


## Install

```
$ npm install macos-accessibility-permissions
```

## Usage

```js
const hasPermissions = require('macos-accessibility-permissions');

hasPermissions()

// false

hasPermissions({ask: true})

// false

// After enabling permissions

hasPermissions()

// true
```

## API

### `hasPermissions({hasAsked: boolean}): boolean`

Returns `true` if the permissions are granted, and `false` otherwise. Optionally provide a `hasAsked` parameter to trigger the accessibility dialog

## Related

- [mac-focus-window](https://github.com/karaggeorge/mac-focus-window) - Focus a window and bring it to the front on macOS
- [mac-windows](https://github.com/karaggeorge/mac-windows) - Provide Information about Application Windows running

## License

MIT