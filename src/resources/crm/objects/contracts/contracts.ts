// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ObjectsAPI from '../objects';
import { SimplePublicObjectWithAssociationsPage } from '../objects';
import * as BatchAPI from './batch';
import { BaseBatch, Batch, BatchGetParams } from './batch';
import { APIPromise } from '../../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseContracts extends APIResource {
  static override readonly _key: readonly ['crm', 'objects', 'contracts'] = Object.freeze([
    'crm',
    'objects',
    'contracts',
  ] as const);

  /**
   * Read a page of contracts. Control what is returned via the `properties` query
   * param.
   */
  list(
    query: ContractListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SimplePublicObjectWithAssociationsPage, ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.getAPIList(
      '/crm/objects/2026-03/contracts',
      Page<ObjectsAPI.SimplePublicObjectWithAssociations>,
      { query, ...options },
    );
  }

  /**
   * Read an Object identified by `{contractId}`. `{contractId}` refers to the
   * internal object ID by default, or optionally any unique property value as
   * specified by the `idProperty` query param. Control what is returned via the
   * `properties` query param.
   */
  get(
    contractID: string,
    query: ContractGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectsAPI.SimplePublicObjectWithAssociations> {
    return this._client.get(path`/crm/objects/2026-03/contracts/${contractID}`, { query, ...options });
  }
}
export class Contracts extends BaseContracts {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

export interface ContractListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored. Usage of this parameter will reduce
   * the maximum number of objects that can be read by a single request.
   */
  propertiesWithHistory?: Array<string>;
}

export interface ContractGetParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * A comma separated list of object types to retrieve associated IDs for. If any of
   * the specified associations do not exist, they will be ignored.
   */
  associations?: Array<string>;

  /**
   * The name of a property whose values are unique for this object type
   */
  idProperty?: string;

  /**
   * A comma separated list of the properties to be returned in the response. If any
   * of the specified properties are not present on the requested object(s), they
   * will be ignored.
   */
  properties?: Array<string>;

  /**
   * A comma separated list of the properties to be returned along with their history
   * of previous values. If any of the specified properties are not present on the
   * requested object(s), they will be ignored.
   */
  propertiesWithHistory?: Array<string>;
}

Contracts.Batch = Batch;
Contracts.BaseBatch = BaseBatch;

export declare namespace Contracts {
  export { type ContractListParams as ContractListParams, type ContractGetParams as ContractGetParams };

  export { Batch as Batch, BaseBatch as BaseBatch, type BatchGetParams as BatchGetParams };
}

export { type SimplePublicObjectWithAssociationsPage };
