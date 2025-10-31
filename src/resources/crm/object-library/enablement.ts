// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectLibraryAPI from './object-library';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Enablement extends APIResource {
  /**
   * @example
   * ```ts
   * const portalObjectTypeEnablementPublicResponse =
   *   await client.crm.objectLibrary.enablement.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ObjectLibraryAPI.PortalObjectTypeEnablementPublicResponse> {
    return this._client.get('/crm/v3/object-library/enablement', options);
  }

  /**
   * @example
   * ```ts
   * const objectTypeEnablementPublicResponse =
   *   await client.crm.objectLibrary.enablement.get(
   *     'objectTypeId',
   *   );
   * ```
   */
  get(
    objectTypeID: string,
    options?: RequestOptions,
  ): APIPromise<ObjectLibraryAPI.ObjectTypeEnablementPublicResponse> {
    return this._client.get(path`/crm/v3/object-library/enablement/${objectTypeID}`, options);
  }
}
