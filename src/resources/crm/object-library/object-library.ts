// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EnablementAPI from './enablement';
import {
  BaseEnablement,
  Enablement,
  ObjectTypeEnablementPublicResponse,
  PortalObjectTypeEnablementPublicResponse,
} from './enablement';

export class BaseObjectLibrary extends APIResource {
  static override readonly _key: readonly ['crm', 'objectLibrary'] = Object.freeze([
    'crm',
    'objectLibrary',
  ] as const);
}
export class ObjectLibrary extends BaseObjectLibrary {
  enablement: EnablementAPI.Enablement = new EnablementAPI.Enablement(this._client);
}

ObjectLibrary.Enablement = Enablement;
ObjectLibrary.BaseEnablement = BaseEnablement;

export declare namespace ObjectLibrary {
  export {
    Enablement as Enablement,
    BaseEnablement as BaseEnablement,
    type ObjectTypeEnablementPublicResponse as ObjectTypeEnablementPublicResponse,
    type PortalObjectTypeEnablementPublicResponse as PortalObjectTypeEnablementPublicResponse,
  };
}
