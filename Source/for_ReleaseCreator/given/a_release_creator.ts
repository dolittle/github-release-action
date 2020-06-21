/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { NullLogger } from '@dolittle/github-actions.shared.logging';
import { ICreateRelease } from '../../ICreateRelease';
import { ReleaseCreator } from '../../ReleaseCreator';

export class a_release_creator {
    release_creator: ICreateRelease;
    constructor() {
        this.release_creator = new ReleaseCreator(new NullLogger());
    }
}
