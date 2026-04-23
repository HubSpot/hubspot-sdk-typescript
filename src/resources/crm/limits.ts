// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseLimits extends APIResource {
  static override readonly _key: readonly ['crm', 'limits'] = Object.freeze(['crm', 'limits'] as const);

  /**
   * Returns limits and usage for custom association labels
   */
  getAssociationLabelLimits(
    query: LimitGetAssociationLabelLimitsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionResponseAssociationLabelLimitResponseNoPaging> {
    return this._client.get('/crm/limits/2026-03/associations/labels', { query, ...options });
  }

  /**
   * Returns records approaching or at association limits between two objects
   */
  getAssociationRecordsLimitsByObjectType(
    toObjectTypeID: string,
    params: LimitGetAssociationRecordsLimitsByObjectTypeParams,
    options?: RequestOptions,
  ): APIPromise<AssociationRecordLimitResponse> {
    const { fromObjectTypeId } = params;
    return this._client.get(
      path`/crm/limits/2026-03/associations/records/${fromObjectTypeId}/${toObjectTypeID}`,
      options,
    );
  }

  /**
   * Returns objects with records approaching or at association limits
   */
  getAssociationRecordsLimitsFromObjects(
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging> {
    return this._client.get('/crm/limits/2026-03/associations/records/from', options);
  }

  /**
   * Returns objects for which the from object has records approaching or at
   * association limits
   */
  getAssociationRecordsLimitsToObjects(
    fromObjectTypeID: string,
    options?: RequestOptions,
  ): APIPromise<CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging> {
    return this._client.get(path`/crm/limits/2026-03/associations/records/${fromObjectTypeID}/to`, options);
  }

  /**
   * Returns overall limit and per object usage for calculated properties
   */
  getCalculatedPropertyLimits(options?: RequestOptions): APIPromise<CalculatedPropertyLimitResponse> {
    return this._client.get('/crm/limits/2026-03/calculated-properties', options);
  }

  /**
   * Returns limits and usage for custom object schemas
   */
  getCustomObjectTypeLimits(options?: RequestOptions): APIPromise<CustomObjectLimitResponse> {
    return this._client.get('/crm/limits/2026-03/custom-object-types', options);
  }

  /**
   * Returns limits and usage per object for custom properties
   */
  getCustomPropertyLimits(options?: RequestOptions): APIPromise<CustomPropertyLimitResponse> {
    return this._client.get('/crm/limits/2026-03/custom-properties', options);
  }

  /**
   * Returns limits and usage per object for pipelines
   */
  getPipelineLimits(options?: RequestOptions): APIPromise<PipelineLimitResponse> {
    return this._client.get('/crm/limits/2026-03/pipelines', options);
  }

  /**
   * Returns limits and usage per object for records
   */
  getRecordLimits(options?: RequestOptions): APIPromise<RecordLimitResponse> {
    return this._client.get('/crm/limits/2026-03/records', options);
  }
}
export class Limits extends BaseLimits {}

export interface AssociationLabelLimitResponse {
  /**
   * A list of all association labels.
   */
  allLabels: Array<string>;

  fromObjectType: LimitsObjectTypeDefinition;

  /**
   * The maximum number of association labels allowed.
   */
  limit: number;

  /**
   * The percentage of the association label limit that has been used.
   */
  percentage: number;

  toObjectType: LimitsObjectTypeDefinition;

  /**
   * The current number of association labels used.
   */
  usage: number;
}

export interface AssociationRecordLimitResponse {
  atLimitFromRecordSamples: Array<AtLimitRecordSample>;

  /**
   * The maximum number of associations allowed for records.
   */
  limit: number;

  nearLimitFromRecordSamples: Array<NearLimitRecordSample>;

  /**
   * The total number of records that have reached their association limit.
   */
  totalRecordsAtLimit: number;

  /**
   * The total number of records that are approaching their association limit.
   */
  totalRecordsNearLimit: number;
}

export interface AtLimitRecordSample {
  /**
   * The label associated with a record that is at its limit.
   */
  label: string;

  /**
   * The objectId of the object that is at its limit.
   */
  objectId: number;
}

export interface CalculatedPropertyLimitResponse {
  byObjectType: Array<UsageForObjectType>;

  /**
   * The maximum number of calculated properties allowed.
   */
  overallLimit: number;

  /**
   * The percentage of the overall limit that is currently being used for calculated
   * properties.
   */
  overallPercentage: number;

  /**
   * The total number of calculated properties currently in use.
   */
  overallUsage: number;
}

export interface CollectionResponseAssociationLabelLimitResponseNoPaging {
  results: Array<AssociationLabelLimitResponse>;
}

export interface CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging {
  results: Array<ObjectTypeNearOrAtAssociationLimit>;
}

export interface CustomObjectLimitResponse {
  /**
   * The maximum number of custom objects allowed.
   */
  limit: number;

  /**
   * The percentage of the custom object limit that is currently used.
   */
  percentage: number;

  /**
   * The current number of custom objects used.
   */
  usage: number;
}

export interface CustomObjectRecordLimitResponse {
  byObjectType: Array<UsageForObjectType>;

  /**
   * The maximum number of custom object records allowed.
   */
  overallLimit: number;

  /**
   * The percentage of the overall custom object record limit that has been used.
   */
  overallPercentage: number;

  /**
   * The total number of custom object records currently in use.
   */
  overallUsage: number;
}

export interface CustomPropertyLimitResponse {
  byObjectType: Array<LimitAndUsageForObjectType>;

  /**
   * The total limit for custom properties across all objects.
   */
  overallLimit: number;

  /**
   * The percentage of the overall custom property limit that has been used.
   */
  overallPercentage: number;

  /**
   * The total number of custom properties currently in use across all objects.
   */
  overallUsage: number;
}

export interface LimitAndUsageForObjectType {
  /**
   * The maximum allowed count for the object type.
   */
  limit: number;

  /**
   * The unique identifier for the object type.
   */
  objectTypeId: string;

  /**
   * The percentage of the limit that has been used.
   */
  percentage: number;

  /**
   * The plural label for the object type.
   */
  pluralLabel: string;

  /**
   * The singular label for the object type.
   */
  singularLabel: string;

  /**
   * The current usage count for the object type.
   */
  usage: number;
}

export interface LimitsObjectTypeDefinition {
  /**
   * The unique identifier for the object type.
   */
  objectTypeId: string;

  /**
   * The plural form label for the object type.
   */
  pluralLabel: string;

  /**
   * The singular form label for the object type.
   */
  singularLabel: string;
}

export interface NearLimitRecordSample {
  /**
   * The primary identifier of the record.
   */
  label: string;

  /**
   * The unique identifier for the object.
   */
  objectId: number;

  /**
   * The percentage of the limit that has been used.
   */
  percentage: number;

  /**
   * The number of records currently in use.
   */
  usage: number;
}

export interface ObjectTypeNearOrAtAssociationLimit {
  /**
   * Indicates whether there are records that have reached the association limit.
   */
  hasRecordsAtLimit: boolean;

  /**
   * Indicates whether there are records that are approaching the association limit.
   */
  hasRecordsNearLimit: boolean;

  /**
   * The unique identifier for the object type.
   */
  objectTypeId: string;

  /**
   * The plural form of the label for the object type.
   */
  pluralLabel: string;

  /**
   * The singular form of the label for the object type.
   */
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
  /**
   * The unique identifier for the object type.
   */
  objectTypeId: string;

  /**
   * The plural form of the label for the object type.
   */
  pluralLabel: string;

  /**
   * The singular form of the label for the object type.
   */
  singularLabel: string;

  /**
   * The number of records used for the object type.
   */
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
    type LimitsObjectTypeDefinition as LimitsObjectTypeDefinition,
    type NearLimitRecordSample as NearLimitRecordSample,
    type ObjectTypeNearOrAtAssociationLimit as ObjectTypeNearOrAtAssociationLimit,
    type PipelineLimitResponse as PipelineLimitResponse,
    type RecordLimitResponse as RecordLimitResponse,
    type UsageForObjectType as UsageForObjectType,
    type LimitGetAssociationLabelLimitsParams as LimitGetAssociationLabelLimitsParams,
    type LimitGetAssociationRecordsLimitsByObjectTypeParams as LimitGetAssociationRecordsLimitsByObjectTypeParams,
  };
}
