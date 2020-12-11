// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { getInput, setFailed } from '@actions/core';
import { getOctokit, context } from '@actions/github';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { getInputAsBoolean } from '@dolittle/github-actions.shared.rudiments';
import { ReleaseCreator } from './ReleaseCreator';
import { VersionReleaser } from './VersionReleaser';

const logger = new Logger();

run();
export async function run() {
    try {
        const token = getInput('token', { required: true });
        const version = getInput('version', { required: true })!;
        const cascadingRelease = getInputAsBoolean('cascading-release', true);
        const body = getInput('body');
        const releaseCreator = new ReleaseCreator(logger);
        const { owner, repo } = context.repo;
        const versionReleaser = new VersionReleaser(owner, repo, context.sha, getOctokit(token), logger);
        const release = releaseCreator.create(version, cascadingRelease, body);

        logger.info(`Release prepared for ${release.version} - ${release.title}`);

        await versionReleaser.release(release);
    } catch (error) {
        fail(error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    if (error.stack) {
        logger.error(error.stack);
    }
    setFailed(error.message);
}
