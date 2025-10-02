// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from '../associations/batch';
import * as PropertiesAPI from './properties';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Batch extends APIResource {
  /**
   * Create a batch of properties
   */
  create(
    objectType: string,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesBatchResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/create`, { body, ...options });
  }

  /**
   * Archive a batch of properties
   */
  archive(objectType: string, body: BatchArchiveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read a batch of properties
   */
  read(
    objectType: string,
    body: BatchReadParams,
    options?: RequestOptions,
  ): APIPromise<CRMPropertiesBatchResponseProperty> {
    return this._client.post(path`/crm/v3/properties/${objectType}/batch/read`, { body, ...options });
  }
}

export interface CRMPropertiesBatchResponseProperty {
  completedAt: string;

  results: Array<PropertiesAPI.CRMProperty>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchAPI.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMPropertiesPropertyName {
  name: string;
}

export interface BatchCreateParams {
  inputs: Array<PropertiesAPI.CRMPropertiesPropertyCreate>;
}

export interface BatchArchiveParams {
  inputs: Array<CRMPropertiesPropertyName>;
}

export interface BatchReadParams {
  archived: boolean;

  inputs: Array<CRMPropertiesPropertyName>;

  dataSensitivity?: 'non_sensitive' | 'sensitive' | 'highly_sensitive';
}

export declare namespace Batch {
  export {
    type CRMPropertiesBatchResponseProperty as CRMPropertiesBatchResponseProperty,
    type CRMPropertiesPropertyName as CRMPropertiesPropertyName,
    type BatchCreateParams as BatchCreateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
  };
}
