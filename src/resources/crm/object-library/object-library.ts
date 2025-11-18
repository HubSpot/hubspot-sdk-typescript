// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnablementAPI from './enablement';
import { Enablement } from './enablement';

export class ObjectLibrary extends APIResource {
  enablement: EnablementAPI.Enablement = new EnablementAPI.Enablement(this._client);
}

export interface ObjectTypeEnablementPublicResponse {
  /**
   * Whether the object type is enabled or not
   */
  enablement: boolean;
}

export interface PortalObjectTypeEnablementPublicResponse {
  /**
   * A map of objectTypeId to whether that object type is enabled or not
   */
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
