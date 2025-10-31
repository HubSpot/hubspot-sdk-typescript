// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Enablement extends APIResource {
  /**
   * Returns all objects in the object library and their enablement status
   *
   * @example
   * ```ts
   * const enablements =
   *   await client.crm.objectLibrary.enablement.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<EnablementListResponse> {
    return this._client.get('/crm/v3/object-library/enablement', options);
  }

  /**
   * Returns an object and its enablement status
   *
   * @example
   * ```ts
   * const enablement =
   *   await client.crm.objectLibrary.enablement.get(
   *     'objectTypeId',
   *   );
   * ```
   */
  get(objectTypeID: string, options?: RequestOptions): APIPromise<EnablementGetResponse> {
    return this._client.get(path`/crm/v3/object-library/enablement/${objectTypeID}`, options);
  }
}

export interface EnablementListResponse {
  enablementByObjectTypeId: { [key: string]: boolean };
}

export interface EnablementGetResponse {
  enablement: boolean;
}

export declare namespace Enablement {
  export {
    type EnablementListResponse as EnablementListResponse,
    type EnablementGetResponse as EnablementGetResponse,
  };
}
