// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnablementAPI from './enablement';
import {
  Enablement,
  ObjectTypeEnablementPublicResponse,
  PortalObjectTypeEnablementPublicResponse,
} from './enablement';

export class ObjectLibrary extends APIResource {
  enablement: EnablementAPI.Enablement = new EnablementAPI.Enablement(this._client);
}

ObjectLibrary.Enablement = Enablement;

export declare namespace ObjectLibrary {
  export {
    Enablement as Enablement,
    type ObjectTypeEnablementPublicResponse as ObjectTypeEnablementPublicResponse,
    type PortalObjectTypeEnablementPublicResponse as PortalObjectTypeEnablementPublicResponse,
  };
}
