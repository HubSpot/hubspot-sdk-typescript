// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as SubscriptionsAPI from './subscriptions';

export class V4 extends APIResource {}

export interface ActionResponseWithResultsPublicStatus {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array of results from the operation.
   */
  results: Array<PublicStatus>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * Indicates the current status of the operation, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * A list of errors that occurred during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * Contains URLs related to the response, such as documentation or resources.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface ActionResponseWithResultsPublicWideStatus {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<PublicWideStatus>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * An array of error objects detailing any issues encountered during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * An object containing related links, where each key is a link name and each value
   * is a URL.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface ActionResponseWithResultsSubscriptionDefinition {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<SubscriptionsAPI.SubscriptionDefinition>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * An array of errors that occurred during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the operation was requested.
   */
  requestedAt?: string;
}

export interface BatchInputPublicStatusRequest {
  inputs: Array<PublicStatusRequest>;
}

export interface BatchResponsePublicBulkOptOutFromAllResponse {
  /**
   * The date and time when the bulk opt-out operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the bulk opt-out from all communications
   * operation.
   */
  results: Array<PublicBulkOptOutFromAllResponse>;

  /**
   * The date and time when the bulk opt-out operation began.
   */
  startedAt: string;

  /**
   * The current status of the bulk opt-out operation, which can be PENDING,
   * PROCESSING, CANCELED, or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * An array of error objects detailing any issues encountered during the bulk
   * opt-out operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of URLs linking to related resources or documentation.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors encountered during the bulk opt-out operation.
   */
  numErrors?: number;

  /**
   * The date and time when the bulk opt-out request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicStatus {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the batch operation.
   */
  results: Array<PublicStatus>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, which can be PENDING, PROCESSING,
   * CANCELED, or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * An array of error objects detailing any issues encountered.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * URLs linking to related resources or documentation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicStatusBulkResponse {
  /**
   * The date and time when the batch process was completed.
   */
  completedAt: string;

  /**
   * The array of results from the batch process, each containing subscription status
   * information.
   */
  results: Array<PublicStatusBulkResponse>;

  /**
   * The date and time when the batch process began.
   */
  startedAt: string;

  /**
   * The current status of the batch process, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicStatusBulkResponseWithErrors {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<PublicStatusBulkResponse>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * An array of error objects detailing any issues encountered during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * An object containing related links, where each key is a link name and each value
   * is a URL.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicWideStatusBulkResponse {
  /**
   * The date and time when the batch process was completed.
   */
  completedAt: string;

  /**
   * The array of results from the batch process, each containing subscription status
   * information.
   */
  results: Array<PublicWideStatusBulkResponse>;

  /**
   * The date and time when the batch process began.
   */
  startedAt: string;

  /**
   * The current status of the batch process, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicWideStatusBulkResponseWithErrors {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<PublicWideStatusBulkResponse>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * An array of error objects detailing any issues encountered during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * An object containing related links, where each key is a link name and each value
   * is a URL.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the operation was requested.
   */
  requestedAt?: string;
}

export interface LinkGenerationRequest {
  subscriberIdString: string;

  language?: string;

  subscriptionId?: number;
}

export interface LinkGenerationResponse {
  managePreferencesUrl: string;

  subscriberIdString: string;

  unsubscribeAllUrl: string;

  unsubscribeSingleUrl?: string;
}

export interface PartialPublicStatusRequest {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  statusState: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  /**
   * The unique identifier of the subscription to be updated.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication, with options including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;
}

export interface PublicBulkOptOutFromAllResponse {
  /**
   * The email address of the contact.
   */
  subscriberIdString: string;

  /**
   * An array of subscription status objects for the contact.
   */
  statuses?: Array<PublicStatus>;
}

export interface PublicStatus {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The origin or method through which the subscription status was set.
   */
  source: string;

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  status: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * The unique identifier of the subscription.
   */
  subscriptionId: number;

  /**
   * The date and time when the subscription status was last updated.
   */
  timestamp: string;

  /**
   * The ID of the business unit associated with the subscription.
   */
  businessUnitId?: number;

  /**
   * The legal basis for communication, with options including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;

  /**
   * The reason for the successful change in subscription status, such as
   * 'RESUBSCRIBE_OCCURRED' or 'NO_STATUS_CHANGE'.
   */
  setStatusSuccessReason?:
    | 'RESUBSCRIBE_OCCURRED'
    | 'NO_STATUS_CHANGE'
    | 'UNSUBSCRIBE_FROM_ALL_OCCURRED'
    | 'REQUESTED_CHANGE_OCCURRED';

  /**
   * The name of the subscription.
   */
  subscriptionName?: string;
}

export interface PublicStatusBulkResponse {
  /**
   * An array of subscription status objects for the contact.
   */
  statuses: Array<PublicStatus>;

  /**
   * The email address of the contact.
   */
  subscriberIdString: string;
}

export interface PublicStatusRequest {
  /**
   * The type of communication channel. Currently, only `EMAIL` is supported.
   */
  channel: 'EMAIL';

  /**
   * The status of the contact's subscription.
   */
  statusState: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * The ID of the subscription to update.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication.
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * The explanation for the legal basis.
   */
  legalBasisExplanation?: string;
}

export interface PublicSubscriptionTranslation {
  /**
   * The timestamp indicating when the subscription translation was created.
   */
  createdAt: number;

  /**
   * A text description of the subscription translation.
   */
  description: string;

  /**
   * The code representing the language of the subscription translation.
   */
  languageCode: string;

  /**
   * The name of the subscription translation.
   */
  name: string;

  /**
   * The unique identifier for the subscription associated with the translation.
   */
  subscriptionId: number;

  /**
   * The timestamp indicating when the subscription translation was last updated.
   */
  updatedAt: number;
}

export interface PublicWideStatus {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  status: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'NOT_SPECIFIED';

  /**
   * The email address of the contact.
   */
  subscriberIdString: string;

  /**
   * The date and time when the status was recorded.
   */
  timestamp: string;

  /**
   * The type of wide status, which can be 'PORTAL_WIDE' or 'BUSINESS_UNIT_WIDE'.
   */
  wideStatusType: 'PORTAL_WIDE' | 'BUSINESS_UNIT_WIDE';

  /**
   * The ID of the business unit associated with the status.
   */
  businessUnitId?: number;
}

export interface PublicWideStatusBulkResponse {
  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * An array containing the wide status results for the operation.
   */
  wideStatuses: Array<PublicWideStatus>;
}

export declare namespace V4 {
  export {
    type ActionResponseWithResultsPublicStatus as ActionResponseWithResultsPublicStatus,
    type ActionResponseWithResultsPublicWideStatus as ActionResponseWithResultsPublicWideStatus,
    type ActionResponseWithResultsSubscriptionDefinition as ActionResponseWithResultsSubscriptionDefinition,
    type BatchInputPublicStatusRequest as BatchInputPublicStatusRequest,
    type BatchResponsePublicBulkOptOutFromAllResponse as BatchResponsePublicBulkOptOutFromAllResponse,
    type BatchResponsePublicStatus as BatchResponsePublicStatus,
    type BatchResponsePublicStatusBulkResponse as BatchResponsePublicStatusBulkResponse,
    type BatchResponsePublicStatusBulkResponseWithErrors as BatchResponsePublicStatusBulkResponseWithErrors,
    type BatchResponsePublicWideStatusBulkResponse as BatchResponsePublicWideStatusBulkResponse,
    type BatchResponsePublicWideStatusBulkResponseWithErrors as BatchResponsePublicWideStatusBulkResponseWithErrors,
    type LinkGenerationRequest as LinkGenerationRequest,
    type LinkGenerationResponse as LinkGenerationResponse,
    type PartialPublicStatusRequest as PartialPublicStatusRequest,
    type PublicBulkOptOutFromAllResponse as PublicBulkOptOutFromAllResponse,
    type PublicStatus as PublicStatus,
    type PublicStatusBulkResponse as PublicStatusBulkResponse,
    type PublicStatusRequest as PublicStatusRequest,
    type PublicSubscriptionTranslation as PublicSubscriptionTranslation,
    type PublicWideStatus as PublicWideStatus,
    type PublicWideStatusBulkResponse as PublicWideStatusBulkResponse,
  };
}
