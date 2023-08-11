// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ILogger } from '@woksin/github-actions.shared.logging';
import semver from 'semver';
import { ICreateRelease } from './ICreateRelease';
import { Release } from './Release';

/**.
 * Represents an implementation of {ICreateRelease}
 *
 * @export
 * @class TagsCreator
 * @implements {ICreateRelease}
 */
export class ReleaseCreator implements ICreateRelease {

    /**
     * Instantiates an instance of {TagsCreator}.
     * @param {ILogger} _logger - The logger.
     */
    constructor(private _logger: ILogger) { }

    /**
     * @inheritdoc
     */
    create(version: string, body: string, applicationName: string = ''): Release {
        this._logger.info(`Creating release for version '${version}'`);
        if (!semver.valid(version)) throw new Error(`${version} is not a valid SemVer`);
        version = version.toLowerCase().startsWith('v') ? version : 'v' + version;
        const isPrerelease = semver.parse(version)!.prerelease?.length > 0;
        const isForApplication = applicationName !== '';
        const title = `${isPrerelease ? 'Prerelease' : 'Release'} ${isForApplication ? `${applicationName} ` : ''}${version}`;
        return {
            version,
            isPrerelease,
            title,
            body,
            microservice: isForApplication ? applicationName : undefined
        };
    }
}
