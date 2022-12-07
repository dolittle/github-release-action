// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Release } from './Release';
import { ReleaseContext } from './ReleaseContext';

/**
 * Defines a system that that can release a version to GitHub.
 *
 * @interface IReleaseVersion
 */
export interface IReleaseVersion {

    /**
     * Releases a new version.
     *
     * @param {Release} release
     * @returns {Promise<ReleaseContext>}
     */
    release(release: Release): Promise<ReleaseContext>;
}
