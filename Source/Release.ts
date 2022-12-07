// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents a release.
 */
export type Release = {
    version: string,
    title: string,
    body: string,
    isPrerelease: boolean,
    microservice?: string
};
