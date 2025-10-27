// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';

export class CommerceSubscriptions extends APIResource {}

/**
 * Specifies the input for reading a batch of CRM objects, including arrays of
 * object IDs, requested property names (with optional history), and an optional
 * unique identifying property.
 */
export interface BatchReadInputSimplePublicObjectID {
  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Key-value pairs for setting properties for the new object and their histories.
   */
  propertiesWithHistory: Array<string>;

  idProperty?: string;

  inputs?: Array<CRMAPI.SimplePublicObjectID>;
}

/**
 * A public object batch response object
 */
export interface BatchResponseSimplePublicObject {
  /**
   * The timestamp when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * The timestamp when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING",
   * "CANCELLED", or "COMPLETE"
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;

  results?: Array<CRMAPI.SimplePublicObject>;
}

/**
 * Represents the result of a batch upsert operation, including the operation’s
 * status, timestamps, and a list of successfully created or updated objects.
 */
export interface BatchResponseSimplePublicUpsertObject {
  /**
   * The timestamp when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  /**
   * The timestamp when the batch process began execution, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request. Can be: "PENDING", "PROCESSING",
   * "CANCELED", or "COMPLETE".
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;

  results?: Array<CRMAPI.SimplePublicUpsertObject>;
}

export interface PauseSubscriptionRequest {
  pauseReason?: string;
}

export interface SimplePublicObjectBatchInputForCreate {
  associations: Array<CRMAPI.PublicAssociationsForObject>;

  properties: { [key: string]: string };

  objectWriteTraceId?: string;
}

export interface UnpauseRequest {
  proposedNextBillingDate: number;
}

export declare namespace CommerceSubscriptions {
  export {
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type PauseSubscriptionRequest as PauseSubscriptionRequest,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type UnpauseRequest as UnpauseRequest,
  };
}
