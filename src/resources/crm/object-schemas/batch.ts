// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  get(
    body: BatchGetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CollectionResponseObjectSchemaNoPaging> {
    return this._client.post('/crm-object-schemas/2026-03/schemas/batch/read', { body, ...options });
  }
}

export interface BatchGetParams {
  includeAssociationDefinitions: boolean;

  includeAuditMetadata: boolean;

  includePropertyDefinitions: boolean;

  inputs: Array<string>;
}

export declare namespace Batch {
  export { type BatchGetParams as BatchGetParams };
}
