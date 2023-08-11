// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { getInput, setOutput, setFailed } from '@actions/core';
import { getOctokit, context } from '@actions/github';
import { Logger } from '@woksin/github-actions.shared.logging';
import { ReleaseContext } from './ReleaseContext';
import { ReleaseCreator } from './ReleaseCreator';
import { VersionReleaser } from './VersionReleaser';

const logger = new Logger();

run();

/**
 * Runs the action.
 */
export async function run() {
    try {
        const version = getInput('version', { required: true })!;
        const token = getInput('token');
        const body = getInput('body');
        const applicationName = getInput('application-name');
        const releaseCreator = new ReleaseCreator(logger);
        const { owner, repo } = context.repo;
        const versionReleaser = new VersionReleaser(owner, repo, context.sha, getOctokit(token), logger);
        const release = releaseCreator.create(version, body, applicationName);

        logger.info(`Release prepared for ${release.version} - ${release.title}`);

        const releaseContext = await versionReleaser.release(release);
        logger.info(`Created release ${release.version} - ${release.title}`);
        outputContext(releaseContext);
    } catch (error: any) {
        fail(error);
    }
}

function output(
    uploadUrl: string) {
    logger.info('Outputting: ');
    logger.info(`'upload_url': ${uploadUrl}`);

    setOutput('upload_url', uploadUrl);
}
function outputContext(context: ReleaseContext) {
    output(
        context.uploadUrl);
}

function fail(error: Error) {
    logger.error(error.message);
    if (error.stack) {
        logger.error(error.stack);
    }
    setFailed(error.message);
}
