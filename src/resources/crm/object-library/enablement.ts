// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEnablement extends APIResource {
  static override readonly _key: readonly ['crm', 'objectLibrary', 'enablement'] = Object.freeze([
    'crm',
    'objectLibrary',
    'enablement',
  ] as const);

  getAll(options?: RequestOptions): APIPromise<PortalObjectTypeEnablementPublicResponse> {
    return this._client.get('/crm/object-library/2026-03/enablement', options);
  }

  getByObjectTypeID(
    objectTypeID: string,
    options?: RequestOptions,
  ): APIPromise<ObjectTypeEnablementPublicResponse> {
    return this._client.get(path`/crm/object-library/2026-03/enablement/${objectTypeID}`, options);
  }
}
export class Enablement extends BaseEnablement {}

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

export declare namespace Enablement {
  export {
    type ObjectTypeEnablementPublicResponse as ObjectTypeEnablementPublicResponse,
    type PortalObjectTypeEnablementPublicResponse as PortalObjectTypeEnablementPublicResponse,
  };
}
