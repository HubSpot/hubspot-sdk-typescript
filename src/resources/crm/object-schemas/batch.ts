// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectSchemasAPI from './object-schemas';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseBatch extends APIResource {
  static override readonly _key: readonly ['crm', 'objectSchemas', 'batch'] = Object.freeze([
    'crm',
    'objectSchemas',
    'batch',
  ] as const);

  /**
   * Retrieve details of multiple custom object schemas by providing a batch request
   * with specified inputs. This operation allows you to fetch schema information,
   * including properties and associations, for multiple custom objects in a single
   * API call.
   */
  get(
    body: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<ObjectSchemasAPI.CollectionResponseObjectSchemaNoPaging> {
    return this._client.post('/crm-object-schemas/2026-03/schemas/batch/read', { body, ...options });
  }
}
export class Batch extends BaseBatch {}

export interface BatchGetParams {
  /**
   * Indicates whether to include association definitions in the response.
   */
  includeAssociationDefinitions: boolean;

  /**
   * Indicates whether to include audit metadata in the response.
   */
  includeAuditMetadata: boolean;

  /**
   * Indicates whether to include property definitions in the response.
   */
  includePropertyDefinitions: boolean;

  inputs: Array<string>;
}

export declare namespace Batch {
  export { type BatchGetParams as BatchGetParams };
}
