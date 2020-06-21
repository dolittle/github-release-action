// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as core from '@actions/core';
import * as github from '@actions/github';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { getInputAsBoolean } from '@dolittle/github-actions.shared.rudiments';
import { ReleaseCreator } from './ReleaseCreator';
import { VersionReleaser } from './VersionReleaser';

const logger = new Logger();

run();
export async function run() {
    try {
        const context = github.context;
        const token = core.getInput('token', { required: true });
        const cascadingRelease = getInputAsBoolean('cascading-release', true);
        const body = core.getInput('body', {required: true});
        const version = core.getInput('version', {required: true})!;
        const releaseCreator = new ReleaseCreator(logger);
        const {owner, repo} = context.repo;
        const versionReleaser = new VersionReleaser(owner, repo, context.sha, github.getOctokit(token), logger);

        await versionReleaser.release(releaseCreator.create(version, cascadingRelease, body));
    } catch (error) {
        fail(error);
    }
}


function fail(error: Error) {
    logger.error(error.message);
    core.setFailed(error.message);
}
