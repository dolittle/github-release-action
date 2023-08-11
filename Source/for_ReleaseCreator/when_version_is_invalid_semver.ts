// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_release_creator } from './given/a_release_creator';
import { expect } from 'chai';

import { describeThis } from '@woksin/typescript.testing';

describeThis(__filename, () => {
    const release_creator = new a_release_creator().release_creator;
    let exception: Error;
    try {
        release_creator.create('2-0-0', '');
    } catch (error: any) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.undefined);
});
