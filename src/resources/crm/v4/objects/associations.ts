// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssociationsAPI from './associations';
import * as DailyAPI from '../../../account-info/v3/api-usage/daily';
import * as BatchAPI from '../../v3/associations/batch';
import * as DraftAPI from '../../../cms/v3/hubdb/tables/draft';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Associations extends APIResource {
  /**
   * Create
   */
  create(
    toObjectID: string,
    params: AssociationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationCreateResponse> {
    const { objectType, objectId, toObjectType, body } = params;
    return this._client.put(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { body: body, ...options },
    );
  }

  /**
   * List
   */
  list(
    toObjectType: string,
    params: AssociationListParams,
    options?: RequestOptions,
  ): APIPromise<AssociationListResponse> {
    const { objectType, objectId, ...query } = params;
    return this._client.get(path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}`, {
      query,
      ...options,
    });
  }

  /**
   * Delete
   */
  delete(toObjectID: string, params: AssociationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { objectType, objectId, toObjectType } = params;
    return this._client.delete(
      path`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Create Default
   */
  createDefault(
    toObjectID: string,
    params: AssociationCreateDefaultParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponsePublicDefaultAssociation> {
    const { fromObjectType, fromObjectId, toObjectType } = params;
    return this._client.put(
      path`/crm/v4/objects/${fromObjectType}/${fromObjectId}/associations/default/${toObjectType}/${toObjectID}`,
      options,
    );
  }
}

export interface AssociationSpecV4 {
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  associationTypeId: number;
}

export interface BatchResponsePublicDefaultAssociation {
  completedAt: string;

  results: Array<BatchResponsePublicDefaultAssociation.Result>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<BatchResponsePublicDefaultAssociation.Error>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export namespace BatchResponsePublicDefaultAssociation {
  export interface Result {
    associationSpec: AssociationsAPI.AssociationSpecV4;

    from: BatchAPI.CRMPublicObjectID;

    to: BatchAPI.CRMPublicObjectID;
  }

  export interface Error {
    category: string;

    context: { [key: string]: Array<string> };

    errors: Array<DraftAPI.ErrorDetail>;

    links: { [key: string]: string };

    message: string;

    status: string;

    id?: string;

    subCategory?: unknown;
  }
}

export interface LabelsBetweenObjectPair {
  fromObjectId: string;

  fromObjectTypeId: string;

  labels: Array<string>;

  toObjectId: string;

  toObjectTypeId: string;
}

export interface MultiAssociatedObjectWithLabel {
  associationTypes: Array<MultiAssociatedObjectWithLabel.AssociationType>;

  toObjectId: string;
}

export namespace MultiAssociatedObjectWithLabel {
  export interface AssociationType {
    category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

    typeId: number;

    label?: string;
  }
}

export interface AssociationCreateResponse {
  createdResourceId: string;

  entity: LabelsBetweenObjectPair;

  location?: string;
}

export interface AssociationListResponse {
  results: Array<MultiAssociatedObjectWithLabel>;

  paging?: DailyAPI.Paging;
}

export interface AssociationCreateParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  objectId: string;

  /**
   * Path param:
   */
  toObjectType: string;

  /**
   * Body param:
   */
  body: Array<AssociationSpecV4>;
}

export interface AssociationListParams {
  /**
   * Path param:
   */
  objectType: string;

  /**
   * Path param:
   */
  objectId: string;

  /**
   * Query param:
   */
  after?: string;

  /**
   * Query param:
   */
  limit?: number;
}

export interface AssociationDeleteParams {
  objectType: string;

  objectId: string;

  toObjectType: string;
}

export interface AssociationCreateDefaultParams {
  fromObjectType: string;

  fromObjectId: string;

  toObjectType: string;
}

export declare namespace Associations {
  export {
    type AssociationSpecV4 as AssociationSpecV4,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type AssociationCreateResponse as AssociationCreateResponse,
    type AssociationListResponse as AssociationListResponse,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationCreateDefaultParams as AssociationCreateDefaultParams,
  };
}
