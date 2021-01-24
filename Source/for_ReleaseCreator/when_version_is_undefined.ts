/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_release_creator } from './given/a_release_creator';
import { expect } from 'chai';

describe('when version is undefined', () => {
    const release_creator = new a_release_creator().release_creator;
    let exception: Error;
    try {
        release_creator.create(undefined as any, '');
    } catch (error) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.undefined);
});
