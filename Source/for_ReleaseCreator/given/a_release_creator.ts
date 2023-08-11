// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { NullLogger } from '@woksin/github-actions.shared.logging';
import { ICreateRelease } from '../../ICreateRelease';
import { ReleaseCreator } from '../../ReleaseCreator';

export class a_release_creator {
    release_creator: ICreateRelease;
    constructor() {
        this.release_creator = new ReleaseCreator(new NullLogger());
    }
}
