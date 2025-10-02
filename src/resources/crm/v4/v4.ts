// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsAPI from './associations/associations';
import { Associations } from './associations/associations';
import * as ObjectsAPI from './objects/objects';
import { Objects } from './objects/objects';

export class V4 extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
}

V4.Objects = Objects;
V4.Associations = Associations;

export declare namespace V4 {
  export { Objects as Objects };

  export { Associations as Associations };
}
