// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_release_creator } from './given/a_release_creator';
import { expect } from 'chai';

import { describeThis } from '@woksin/typescript.testing';

describeThis(__filename, () => {
    const tags_creator = new a_release_creator().release_creator;
    const version = 'v1.0.0';
    const result = tags_creator.create(version, '');

    it('should return a result', () => expect(result).to.not.be.undefined);
    it('should return a version', () => expect(result.version).to.not.be.undefined);
    it('should return the same version', () => result.version.should.equal(version));
});
