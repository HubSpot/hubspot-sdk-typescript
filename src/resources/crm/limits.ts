// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchemasAPI from './objects/schemas';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Limits extends APIResource {
  /**
   * Returns limits and usage for custom association labels
   *
   * @example
   * ```ts
   * const collectionResponseAssociationLabelLimitResponseNoPaging =
   *   await client.crm.limits.getAssociationLabelLimits();
   * ```
   */
  getAssociationLabelLimits(
    query: LimitGetAssociationLabelLimitsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseAssociationLabelLimitResponseNoPaging> {
    return this._client.get('/crm/v3/limits/associations/labels', { query, ...options });
  }

  /**
   * Returns records approaching or at association limits between two objects
   *
   * @example
   * ```ts
   * const associationRecordLimitResponse =
   *   await client.crm.limits.getAssociationRecordsLimitsByObjectType(
   *     'toObjectTypeId',
   *     { fromObjectTypeId: 'fromObjectTypeId' },
   *   );
   * ```
   */
  getAssociationRecordsLimitsByObjectType(
    toObjectTypeID: string,
    params: LimitGetAssociationRecordsLimitsByObjectTypeParams,
    options?: RequestOptions,
  ): APIPromise<AssociationRecordLimitResponse> {
    const { fromObjectTypeId } = params;
    return this._client.get(
      path`/crm/v3/limits/associations/records/${fromObjectTypeId}/${toObjectTypeID}`,
      options,
    );
  }

  /**
   * Returns objects with records approaching or at association limits
   *
   * @example
   * ```ts
   * const collectionResponseObjectTypeNearOrAtAssociationLimitNoPaging =
   *   await client.crm.limits.getAssociationRecordsLimitsFromObjects();
   * ```
   */
  getAssociationRecordsLimitsFromObjects(
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging> {
    return this._client.get('/crm/v3/limits/associations/records/from', options);
  }

  /**
   * Returns objects for which the from object has records approaching or at
   * association limits
   *
   * @example
   * ```ts
   * const collectionResponseObjectTypeNearOrAtAssociationLimitNoPaging =
   *   await client.crm.limits.getAssociationRecordsLimitsToObjects(
   *     'fromObjectTypeId',
   *   );
   * ```
   */
  getAssociationRecordsLimitsToObjects(
    fromObjectTypeID: string,
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging> {
    return this._client.get(path`/crm/v3/limits/associations/records/${fromObjectTypeID}/to`, options);
  }

  /**
   * Returns overall limit and per object usage for calculated properties
   *
   * @example
   * ```ts
   * const calculatedPropertyLimitResponse =
   *   await client.crm.limits.getCalculatedPropertyLimits();
   * ```
   */
  getCalculatedPropertyLimits(options?: RequestOptions): APIPromise<CalculatedPropertyLimitResponse> {
    return this._client.get('/crm/v3/limits/calculated-properties', options);
  }

  /**
   * Returns limits and usage for custom object schemas
   *
   * @example
   * ```ts
   * const customObjectLimitResponse =
   *   await client.crm.limits.getCustomObjectTypeLimits();
   * ```
   */
  getCustomObjectTypeLimits(options?: RequestOptions): APIPromise<CustomObjectLimitResponse> {
    return this._client.get('/crm/v3/limits/custom-object-types', options);
  }

  /**
   * Returns limits and usage per object for custom properties
   *
   * @example
   * ```ts
   * const customPropertyLimitResponse =
   *   await client.crm.limits.getCustomPropertyLimits();
   * ```
   */
  getCustomPropertyLimits(options?: RequestOptions): APIPromise<CustomPropertyLimitResponse> {
    return this._client.get('/crm/v3/limits/custom-properties', options);
  }

  /**
   * Returns limits and usage per object for pipelines
   *
   * @example
   * ```ts
   * const pipelineLimitResponse =
   *   await client.crm.limits.getPipelineLimits();
   * ```
   */
  getPipelineLimits(options?: RequestOptions): APIPromise<PipelineLimitResponse> {
    return this._client.get('/crm/v3/limits/pipelines', options);
  }

  /**
   * Returns limits and usage per object for records
   *
   * @example
   * ```ts
   * const recordLimitResponse =
   *   await client.crm.limits.getRecordLimits();
   * ```
   */
  getRecordLimits(options?: RequestOptions): APIPromise<RecordLimitResponse> {
    return this._client.get('/crm/v3/limits/records', options);
  }
}

export interface AssociationLabelLimitResponse {
  allLabels: Array<string>;

  /**
   * Defines an object type.
   */
  fromObjectType: SchemasAPI.ObjectTypeDefinition;

  limit: number;

  percentage: number;

  /**
   * Defines an object type.
   */
  toObjectType: SchemasAPI.ObjectTypeDefinition;

  usage: number;
}

export interface AssociationRecordLimitResponse {
  atLimitFromRecordSamples: Array<AtLimitRecordSample>;

  limit: number;

  nearLimitFromRecordSamples: Array<NearLimitRecordSample>;

  totalRecordsAtLimit: number;

  totalRecordsNearLimit: number;
}

export interface AtLimitRecordSample {
  label: string;

  objectId: number;
}

export interface CalculatedPropertyLimitResponse {
  byObjectType: Array<UsageForObjectType>;

  overallLimit: number;

  overallPercentage: number;

  overallUsage: number;
}

export interface CollectionResponseAssociationLabelLimitResponseNoPaging {
  results: Array<AssociationLabelLimitResponse>;
}

export interface CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging {
  results: Array<ObjectTypeNearOrAtAssociationLimit>;
}

export interface CustomObjectLimitResponse {
  limit: number;

  percentage: number;

  usage: number;
}

export interface CustomObjectRecordLimitResponse {
  byObjectType: Array<UsageForObjectType>;

  overallLimit: number;

  overallPercentage: number;

  overallUsage: number;
}

export interface CustomPropertyLimitResponse {
  byObjectType: Array<LimitAndUsageForObjectType>;

  overallLimit: number;

  overallPercentage: number;

  overallUsage: number;
}

export interface LimitAndUsageForObjectType {
  limit: number;

  objectTypeId: string;

  percentage: number;

  pluralLabel: string;

  singularLabel: string;

  usage: number;
}

export interface NearLimitRecordSample {
  label: string;

  objectId: number;

  percentage: number;

  usage: number;
}

export interface ObjectTypeDefinition {
  objectTypeId: string;

  pluralLabel: string;

  singularLabel: string;
}

export interface ObjectTypeNearOrAtAssociationLimit {
  hasRecordsAtLimit: boolean;

  hasRecordsNearLimit: boolean;

  objectTypeId: string;

  pluralLabel: string;

  singularLabel: string;
}

export interface PipelineLimitResponse {
  customObjectTypes: CustomObjectRecordLimitResponse;

  hubspotDefinedObjectTypes: Array<LimitAndUsageForObjectType>;
}

export interface RecordLimitResponse {
  customObjectTypes: CustomObjectRecordLimitResponse;

  hubspotDefinedObjectTypes: Array<LimitAndUsageForObjectType>;
}

export interface UsageForObjectType {
  objectTypeId: string;

  pluralLabel: string;

  singularLabel: string;

  usage: number;
}

export interface LimitGetAssociationLabelLimitsParams {
  fromObjectTypeId?: string;

  toObjectTypeId?: string;
}

export interface LimitGetAssociationRecordsLimitsByObjectTypeParams {
  fromObjectTypeId: string;
}

export declare namespace Limits {
  export {
    type AssociationLabelLimitResponse as AssociationLabelLimitResponse,
    type AssociationRecordLimitResponse as AssociationRecordLimitResponse,
    type AtLimitRecordSample as AtLimitRecordSample,
    type CalculatedPropertyLimitResponse as CalculatedPropertyLimitResponse,
    type CollectionResponseAssociationLabelLimitResponseNoPaging as CollectionResponseAssociationLabelLimitResponseNoPaging,
    type CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging as CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging,
    type CustomObjectLimitResponse as CustomObjectLimitResponse,
    type CustomObjectRecordLimitResponse as CustomObjectRecordLimitResponse,
    type CustomPropertyLimitResponse as CustomPropertyLimitResponse,
    type LimitAndUsageForObjectType as LimitAndUsageForObjectType,
    type NearLimitRecordSample as NearLimitRecordSample,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeNearOrAtAssociationLimit as ObjectTypeNearOrAtAssociationLimit,
    type PipelineLimitResponse as PipelineLimitResponse,
    type RecordLimitResponse as RecordLimitResponse,
    type UsageForObjectType as UsageForObjectType,
    type LimitGetAssociationLabelLimitsParams as LimitGetAssociationLabelLimitsParams,
    type LimitGetAssociationRecordsLimitsByObjectTypeParams as LimitGetAssociationRecordsLimitsByObjectTypeParams,
  };
}
