// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import * as EmailsAPI from '../../marketing/emails/emails';
import * as SchemaAPI from './schema/schema';
import {
  CollectionResponsePublicAssociationDefinitionNoPaging,
  PublicAssociationDefinition,
  Schema,
  SchemaListParams,
} from './schema/schema';
import * as V4API from './v4/v4';
import {
  AssociationSpec1,
  AssociationSpecWithLabel1,
  BatchInputPublicAssociationMultiArchive,
  BatchInputPublicAssociationMultiPost,
  BatchInputPublicDefaultAssociationMultiPost,
  BatchInputPublicFetchAssociationsBatchRequest,
  BatchResponseLabelsBetweenObjectPair,
  BatchResponsePublicAssociationMultiWithLabel,
  BatchResponseVoid,
  DateTime,
  NextPage1,
  PreviousPage1,
  PublicAssociationMultiArchive,
  PublicAssociationMultiPost,
  PublicAssociationMultiWithLabel,
  PublicDefaultAssociationMultiPost,
  PublicFetchAssociationsBatchRequest,
  ReportCreationResponse,
  StandardError1,
  V4,
  V4CreateDefaultAssociationParams,
  V4DeleteAssociationParams,
  V4ListAssociationsByTypeParams,
  V4UpdateAssociationLabelsParams,
} from './v4/v4';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Associations extends APIResource {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
  v4: V4API.V4 = new V4API.V4(this._client);

  /**
   * @example
   * ```ts
   * const batchResponsePublicAssociation =
   *   await client.crm.associations.create('toObjectType', {
   *     fromObjectType: 'fromObjectType',
   *     inputs: [
   *       {
   *         from: { id: '53628' },
   *         to: { id: '12726' },
   *         type: 'contact_to_company',
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    toObjectType: string,
    params: AssociationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponsePublicAssociation> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/create`, {
      body,
      ...options,
    });
  }

  /**
   * @example
   * ```ts
   * await client.crm.associations.delete('toObjectType', {
   *   fromObjectType: 'fromObjectType',
   *   inputs: [
   *     {
   *       from: { id: '53628' },
   *       to: { id: '12726' },
   *       type: 'contact_to_company',
   *     },
   *   ],
   * });
   * ```
   */
  delete(toObjectType: string, params: AssociationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/archive`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const batchResponsePublicAssociationMulti =
   *   await client.crm.associations.read('toObjectType', {
   *     fromObjectType: 'fromObjectType',
   *     inputs: [{ id: '37295' }],
   *   });
   * ```
   */
  read(
    toObjectType: string,
    params: AssociationReadParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponsePublicAssociationMulti> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/read`, {
      body,
      ...options,
    });
  }
}

export interface BatchInputPublicAssociation {
  inputs: Array<PublicAssociation>;
}

export interface BatchResponsePublicAssociation {
  completedAt: string;

  results: Array<PublicAssociation>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationMulti {
  completedAt: string;

  results: Array<PublicAssociationMulti>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface PublicAssociation {
  from: Shared.PublicObjectID;

  to: Shared.PublicObjectID;

  type: string;
}

export interface PublicAssociationMulti {
  from: Shared.PublicObjectID;

  /**
   * The IDs of objects that are associated with the object identified by the ID in
   * 'from'.
   */
  to: Array<CRMAPI.AssociatedID>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface AssociationCreateParams {
  /**
   * Path param: The type of the object from which associations will be created.
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<PublicAssociation>;
}

export interface AssociationDeleteParams {
  /**
   * Path param: The type of the object from which associations will be removed.
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<PublicAssociation>;
}

export interface AssociationReadParams {
  /**
   * Path param: The type of the object from which associations will be read.
   */
  fromObjectType: string;

  /**
   * Body param:
   */
  inputs: Array<Shared.PublicObjectID>;
}

Associations.Schema = Schema;
Associations.V4 = V4;

export declare namespace Associations {
  export {
    type BatchInputPublicAssociation as BatchInputPublicAssociation,
    type BatchResponsePublicAssociation as BatchResponsePublicAssociation,
    type BatchResponsePublicAssociationMulti as BatchResponsePublicAssociationMulti,
    type PublicAssociation as PublicAssociation,
    type PublicAssociationMulti as PublicAssociationMulti,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationReadParams as AssociationReadParams,
  };

  export {
    Schema as Schema,
    type CollectionResponsePublicAssociationDefinitionNoPaging as CollectionResponsePublicAssociationDefinitionNoPaging,
    type PublicAssociationDefinition as PublicAssociationDefinition,
    type SchemaListParams as SchemaListParams,
  };

  export {
    V4 as V4,
    type AssociationSpec1 as AssociationSpec1,
    type AssociationSpecWithLabel1 as AssociationSpecWithLabel1,
    type BatchInputPublicAssociationMultiArchive as BatchInputPublicAssociationMultiArchive,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchInputPublicDefaultAssociationMultiPost as BatchInputPublicDefaultAssociationMultiPost,
    type BatchInputPublicFetchAssociationsBatchRequest as BatchInputPublicFetchAssociationsBatchRequest,
    type BatchResponseLabelsBetweenObjectPair as BatchResponseLabelsBetweenObjectPair,
    type BatchResponsePublicAssociationMultiWithLabel as BatchResponsePublicAssociationMultiWithLabel,
    type BatchResponseVoid as BatchResponseVoid,
    type DateTime as DateTime,
    type NextPage1 as NextPage1,
    type PreviousPage1 as PreviousPage1,
    type PublicAssociationMultiArchive as PublicAssociationMultiArchive,
    type PublicAssociationMultiPost as PublicAssociationMultiPost,
    type PublicAssociationMultiWithLabel as PublicAssociationMultiWithLabel,
    type PublicDefaultAssociationMultiPost as PublicDefaultAssociationMultiPost,
    type PublicFetchAssociationsBatchRequest as PublicFetchAssociationsBatchRequest,
    type ReportCreationResponse as ReportCreationResponse,
    type StandardError1 as StandardError1,
    type V4CreateDefaultAssociationParams as V4CreateDefaultAssociationParams,
    type V4DeleteAssociationParams as V4DeleteAssociationParams,
    type V4ListAssociationsByTypeParams as V4ListAssociationsByTypeParams,
    type V4UpdateAssociationLabelsParams as V4UpdateAssociationLabelsParams,
  };
}
