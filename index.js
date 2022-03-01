import path from 'path';
import {execa} from 'execa';
import electronUtil from 'electron-util/node';
import {macosVersion} from 'macos-version';

const binary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'permissions');

const isSupported = macosVersion.isGreaterThanOrEqualTo('10.14.4');

module.exports = ({ask = false} = {}) => {
	if (!isSupported) {
		return false;
	}

	const {stdout} = execa.sync(binary, [ask && '--ask'].filter(Boolean));
	return stdout === 'true';
};

module.exports.isSupported = isSupported;
