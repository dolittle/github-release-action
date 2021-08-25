// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ILogger } from '@dolittle/github-actions.shared.logging';
import { IReleaseVersion } from './IReleaseVersion';
import { Release } from './Release';
import { GitHub } from '@actions/github/lib/utils';

export class VersionReleaser implements IReleaseVersion {

    constructor(
        private readonly _owner: string,
        private readonly _repo: string,
        private readonly _sha: string,
        private readonly _github: InstanceType<typeof GitHub>,
        private readonly _logger: ILogger) {
    }

    async release(release: Release) {
        this._logger.debug(`Creating release with version '${release.version}' and title '${release.title}' on repository 'github.com/${this._owner}/${this._repo}'`);

        // GitHub Create Release documentation: https://developer.github.com/v3/repos/releases/#create-a-release
        // GitHub Octokit Create Release documentation: https://octokit.github.io/rest.js/v16#octokit-routes-repos-create-release

        const releaseResponse = await this._github.repos.createRelease({
            owner: this._owner,
            repo: this._repo,
            tag_name: `${release.microservice !== undefined ? `${release.microservice}-` : ''}${release.version}`,
            name: release.title,
            body: release.body || '',
            prerelease: release.isPrerelease,
            target_commitish: this._sha

        });
        this._logger.debug(`Status: ${releaseResponse.status}`);

    }
}
