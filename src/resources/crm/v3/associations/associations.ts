// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchArchiveParams,
  BatchCreateParams,
  BatchCreateResponse,
  BatchReadParams,
  BatchReadResponse,
  CRMAssociationsBatchInputPublicAssociation,
  CRMAssociationsPublicAssociation,
  CRMPublicObjectID,
  StandardError,
} from './batch';

export class Associations extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
}

Associations.Batch = Batch;

export declare namespace Associations {
  export {
    Batch as Batch,
    type CRMAssociationsBatchInputPublicAssociation as CRMAssociationsBatchInputPublicAssociation,
    type CRMAssociationsPublicAssociation as CRMAssociationsPublicAssociation,
    type CRMPublicObjectID as CRMPublicObjectID,
    type StandardError as StandardError,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchReadResponse as BatchReadResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchArchiveParams as BatchArchiveParams,
    type BatchReadParams as BatchReadParams,
  };
}
