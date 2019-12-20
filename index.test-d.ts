import {expectType, expectError} from 'tsd';

import * as hasPermissions from '.';

expectType<boolean>(hasPermissions.isSupported)
expectType<boolean>(hasPermissions())
expectType<boolean>(hasPermissions({}))
expectType<boolean>(hasPermissions({ask: true}))

expectError(hasPermissions({ask: 'bad'}))
