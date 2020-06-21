// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Release } from './Release';

/**
 * Defines a system that can create tag strings.
 *
 * @export
 * @interface ICreateRelease
 */
export interface ICreateRelease {

    /**
     * Creates tags based off the version
     *
     * @param {string} version
     * @returns {Tag[]}
     */
    create(version: string, cascadingRelease: boolean, body: string): Release
}
