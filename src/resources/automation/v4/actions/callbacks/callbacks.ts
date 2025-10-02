// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as CompleteAPI from './complete';
import { Complete, CompleteCreateParams } from './complete';

export class Callbacks extends APIResource {
  complete: CompleteAPI.Complete = new CompleteAPI.Complete(this._client);
}

Callbacks.Complete = Complete;

export declare namespace Callbacks {
  export { Complete as Complete, type CompleteCreateParams as CompleteCreateParams };
}
