// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnablementAPI from './enablement';
import { Enablement } from './enablement';

export class ObjectLibrary extends APIResource {
  enablement: EnablementAPI.Enablement = new EnablementAPI.Enablement(this._client);
}

export interface ObjectTypeEnablementPublicResponse {
  enablement: boolean;
}

export interface PortalObjectTypeEnablementPublicResponse {
  enablementByObjectTypeId: { [key: string]: boolean };
}

ObjectLibrary.Enablement = Enablement;

export declare namespace ObjectLibrary {
  export {
    type ObjectTypeEnablementPublicResponse as ObjectTypeEnablementPublicResponse,
    type PortalObjectTypeEnablementPublicResponse as PortalObjectTypeEnablementPublicResponse,
  };

  export { Enablement as Enablement };
}
