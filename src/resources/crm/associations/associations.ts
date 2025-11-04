// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams, BatchDeleteParams, BatchGetParams } from './batch';
import * as SchemaAPI from './schema';
import {
  CollectionResponsePublicAssociationDefinitionNoPaging,
  PublicAssociationDefinition,
  Schema,
  SchemaListParams,
} from './schema';
import * as EmailsAPI from '../../marketing/emails/emails';
import * as V4API from './v4/v4';
import {
  AssociationSpec1,
  AssociationsV4PublicObjectSearchRequest,
  AssociationsV4SimplePublicObject,
  AssociationsV4SimplePublicObjectBatchInputForCreate,
  AssociationsV4SimplePublicObjectInputForCreate,
  AssociationsV4SimplePublicObjectWithAssociations,
  AssociationsV4SimplePublicUpsertObject,
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
  to: Array<CrmAPI.AssociatedID>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.EmailsPaging;
}

Associations.Batch = Batch;
Associations.Schema = Schema;
Associations.V4 = V4;

export declare namespace Associations {
  export {
    type BatchInputPublicAssociation as BatchInputPublicAssociation,
    type BatchResponsePublicAssociation as BatchResponsePublicAssociation,
    type BatchResponsePublicAssociationMulti as BatchResponsePublicAssociationMulti,
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
    type AssociationSpec1 as AssociationSpec1,
    type AssociationsV4PublicObjectSearchRequest as AssociationsV4PublicObjectSearchRequest,
    type AssociationsV4SimplePublicObject as AssociationsV4SimplePublicObject,
    type AssociationsV4SimplePublicObjectBatchInputForCreate as AssociationsV4SimplePublicObjectBatchInputForCreate,
    type AssociationsV4SimplePublicObjectInputForCreate as AssociationsV4SimplePublicObjectInputForCreate,
    type AssociationsV4SimplePublicObjectWithAssociations as AssociationsV4SimplePublicObjectWithAssociations,
    type AssociationsV4SimplePublicUpsertObject as AssociationsV4SimplePublicUpsertObject,
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
  };
}
