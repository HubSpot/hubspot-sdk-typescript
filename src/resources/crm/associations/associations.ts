// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchGetParams } from './batch';
import * as SchemaAPI from './schema/schema';
import {
  CollectionResponsePublicAssociationDefinitionNoPaging,
  PublicAssociationDefinition,
  Schema,
  SchemaListParams,
} from './schema/schema';
import * as V4API from './v4/v4';
import {
  BatchInputPublicAssociationMultiArchive,
  BatchInputPublicAssociationMultiPost,
  BatchInputPublicDefaultAssociationMultiPost,
  BatchInputPublicFetchAssociationsBatchRequest,
  BatchResponseLabelsBetweenObjectPair,
  BatchResponsePublicAssociationMultiWithLabel,
  DateTime,
  PublicAssociationMultiArchive,
  PublicAssociationMultiPost,
  PublicAssociationMultiWithLabel,
  PublicDefaultAssociationMultiPost,
  PublicFetchAssociationsBatchRequest,
  ReportCreationResponse,
  V4,
  V4MergeParams,
} from './v4/v4';

export class Associations extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
  v4: V4API.V4 = new V4API.V4(this._client);
}

export interface BatchInputPublicAssociation {
  inputs: Array<PublicAssociation>;
}

export interface BatchResponsePublicAssociation {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  results: Array<PublicAssociation>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * A collection of URLs related to the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch operation was requested.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicAssociationMulti {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  results: Array<PublicAssociationMulti>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * URLs linking to resources or documentation associated with the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch request was made.
   */
  requestedAt?: string;
}

export interface BatchResponseVoid {
  completedAt: string;

  results: Array<unknown>;

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

  /**
   * The type of association between the 'from' and 'to' objects.
   */
  type: string;
}

export interface PublicAssociationMulti {
  from: Shared.PublicObjectID;

  /**
   * The IDs of objects that are associated with the object identified by the ID in
   * 'from'.
   */
  to: Array<CrmAPI.AssociatedID>;

  paging?: Shared.Paging;
}

Associations.Batch = Batch;
Associations.Schema = Schema;
Associations.V4 = V4;

export declare namespace Associations {
  export {
    type BatchInputPublicAssociation as BatchInputPublicAssociation,
    type BatchResponsePublicAssociation as BatchResponsePublicAssociation,
    type BatchResponsePublicAssociationMulti as BatchResponsePublicAssociationMulti,
    type BatchResponseVoid as BatchResponseVoid,
    type PublicAssociation as PublicAssociation,
    type PublicAssociationMulti as PublicAssociationMulti,
  };

  export {
    Batch as Batch,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchGetParams as BatchGetParams,
  };

  export {
    Schema as Schema,
    type CollectionResponsePublicAssociationDefinitionNoPaging as CollectionResponsePublicAssociationDefinitionNoPaging,
    type PublicAssociationDefinition as PublicAssociationDefinition,
    type SchemaListParams as SchemaListParams,
  };

  export {
    V4 as V4,
    type BatchInputPublicAssociationMultiArchive as BatchInputPublicAssociationMultiArchive,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchInputPublicDefaultAssociationMultiPost as BatchInputPublicDefaultAssociationMultiPost,
    type BatchInputPublicFetchAssociationsBatchRequest as BatchInputPublicFetchAssociationsBatchRequest,
    type BatchResponseLabelsBetweenObjectPair as BatchResponseLabelsBetweenObjectPair,
    type BatchResponsePublicAssociationMultiWithLabel as BatchResponsePublicAssociationMultiWithLabel,
    type DateTime as DateTime,
    type PublicAssociationMultiArchive as PublicAssociationMultiArchive,
    type PublicAssociationMultiPost as PublicAssociationMultiPost,
    type PublicAssociationMultiWithLabel as PublicAssociationMultiWithLabel,
    type PublicDefaultAssociationMultiPost as PublicDefaultAssociationMultiPost,
    type PublicFetchAssociationsBatchRequest as PublicFetchAssociationsBatchRequest,
    type ReportCreationResponse as ReportCreationResponse,
    type V4MergeParams as V4MergeParams,
  };
}
