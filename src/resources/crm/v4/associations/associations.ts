// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsageAPI from './usage';
import { Usage, UsageReportResponse } from './usage';
import * as BatchAPI from './batch/batch';
import {
  AssociationSpec,
  Batch,
  BatchCreateParams,
  BatchCreateResponse,
  BatchDeleteParams,
  BatchInputPublicAssociationMultiPost,
  BatchReadParams,
  BatchReadResponse,
  BatchResponseVoid,
} from './batch/batch';

export class Associations extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Associations.Batch = Batch;
Associations.Usage = Usage;

export declare namespace Associations {
  export {
    Batch as Batch,
    type AssociationSpec as AssociationSpec,
    type BatchInputPublicAssociationMultiPost as BatchInputPublicAssociationMultiPost,
    type BatchResponseVoid as BatchResponseVoid,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchReadResponse as BatchReadResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchReadParams as BatchReadParams,
  };

  export { Usage as Usage, type UsageReportResponse as UsageReportResponse };
}
