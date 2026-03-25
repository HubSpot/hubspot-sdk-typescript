// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DefinitionsAPI from './definitions';
import { DefinitionListParams, Definitions } from './definitions';
import * as StatusesAPI from './statuses/statuses';
import { Statuses } from './statuses/statuses';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CommunicationPreferences extends APIResource {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);

  /**
   * Generate communication preference links for a subscriber. This endpoint allows
   * you to create URLs for managing preferences and unsubscribing, tailored to a
   * specific subscriber. It is useful for integrating communication preference
   * management into your applications.
   */
  generateLinks(
    params: CommunicationPreferenceGenerateLinksParams,
    options?: RequestOptions,
  ): APIPromise<LinkGenerationResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/2026-03/links/generate', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve the subscription statuses for a specific email address. This endpoint
   * allows you to check the current subscription status for email communications,
   * which can be useful for managing communication preferences and ensuring
   * compliance with user preferences.
   */
  getStatusByEmail(
    emailAddress: string,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatusesResponse> {
    return this._client.get(path`/communication-preferences/2026-03/status/email/${emailAddress}`, options);
  }

  /**
   * Retrieve a contact's current email subscription preferences.
   */
  getStatuses(
    subscriberIDString: string,
    query: CommunicationPreferenceGetStatusesParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicStatus> {
    return this._client.get(path`/communication-preferences/2026-03/statuses/${subscriberIDString}`, {
      query,
      ...options,
    });
  }

  /**
   * Check whether a contact has unsubscribed from all email subscriptions. If a
   * contact has not opted out of all communications, the response `results` array
   * will be empty.
   */
  getUnsubscribeAllStatus(
    subscriberIDString: string,
    query: CommunicationPreferenceGetUnsubscribeAllStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicWideStatus> {
    return this._client.get(
      path`/communication-preferences/2026-03/statuses/${subscriberIDString}/unsubscribe-all`,
      { query, ...options },
    );
  }

  /**
   * Subscribe a user to a specific communication preference using their email
   * address and subscription ID. This endpoint allows you to manage subscription
   * statuses by updating them to 'subscribed' for a given email address. It is
   * useful for ensuring that users receive communications they have opted into.
   */
  subscribe(
    body: CommunicationPreferenceSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/2026-03/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe a user from communication preferences. This endpoint allows you to
   * update the subscription status of a user to 'unsubscribed' for specified
   * communication channels. It is useful for managing user preferences and ensuring
   * compliance with user opt-out requests.
   */
  unsubscribe(
    body: CommunicationPreferenceUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/2026-03/unsubscribe', { body, ...options });
  }

  /**
   * Unsubscribe a subscriber from all communication channels. This endpoint allows
   * you to remove a subscriber from all communication preferences, effectively
   * opting them out from receiving any further communications. This can be useful
   * for ensuring compliance with user requests or legal requirements.
   */
  unsubscribeAll(
    subscriberIDString: string,
    params: CommunicationPreferenceUnsubscribeAllParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicStatus> {
    const { channel, businessUnitId, verbose } = params;
    return this._client.post(
      path`/communication-preferences/2026-03/statuses/${subscriberIDString}/unsubscribe-all`,
      { query: { channel, businessUnitId, verbose }, ...options },
    );
  }

  /**
   * Set the subscription status of a specific contact.
   */
  updateStatus(
    subscriberIDString: string,
    body: CommunicationPreferenceUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicStatus> {
    return this._client.post(path`/communication-preferences/2026-03/statuses/${subscriberIDString}`, {
      body,
      ...options,
    });
  }
}

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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  results: Array<SubscriptionDefinition>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  /**
   * An array of PublicStatusRequest objects, each representing a subscription status
   * update request. This property is required.
   */
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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of errors encountered during the batch operation, each represented by a
   * StandardError object.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation, represented as an
   * integer.
   */
  numErrors?: number;

  /**
   * The date and time when the batch request was made.
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
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of errors encountered during the batch operation, each item providing
   * details about a specific error.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the batch request was made.
   */
  requestedAt?: string;
}

export interface LinkGenerationRequest {
  /**
   * A string representing the unique identifier of the subscriber. This property is
   * required.
   */
  subscriberIdString: string;

  /**
   * The language in which the generated link should be presented, represented as a
   * string.
   */
  language?: string;

  /**
   * The unique identifier for the subscription, represented as an integer in int64
   * format.
   */
  subscriptionId?: number;
}

export interface LinkGenerationResponse {
  /**
   * The URL where the subscriber can manage their communication preferences.
   */
  managePreferencesUrl: string;

  /**
   * A string representing the unique identifier of the subscriber.
   */
  subscriberIdString: string;

  /**
   * A string containing the URL for unsubscribing the subscriber from all
   * communications.
   */
  unsubscribeAllUrl: string;

  /**
   * A string containing the URL to unsubscribe the subscriber from a single
   * communication.
   */
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
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

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
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

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
  status: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

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
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;

  /**
   * The reason for the successful change in subscription status, such as
   * 'RESUBSCRIBE_OCCURRED' or 'NO_STATUS_CHANGE'.
   */
  setStatusSuccessReason?:
    | 'NO_STATUS_CHANGE'
    | 'REQUESTED_CHANGE_OCCURRED'
    | 'RESUBSCRIBE_OCCURRED'
    | 'UNSUBSCRIBE_FROM_ALL_OCCURRED';

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
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

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
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * The explanation for the legal basis.
   */
  legalBasisExplanation?: string;
}

export interface PublicSubscriptionStatus {
  /**
   * The unique identifier for the subscription status.
   */
  id: string;

  /**
   * A description of the subscription status.
   */
  description: string;

  /**
   * The name of the subscription status.
   */
  name: string;

  /**
   * Indicates the origin of the subscription status, with possible values being
   * 'PORTAL_WIDE_STATUS', 'BRAND_WIDE_STATUS', or 'SUBSCRIPTION_STATUS'.
   */
  sourceOfStatus: 'BRAND_WIDE_STATUS' | 'PORTAL_WIDE_STATUS' | 'SUBSCRIPTION_STATUS';

  /**
   * The current status of the subscription, which can be 'SUBSCRIBED' or
   * 'NOT_SUBSCRIBED'.
   */
  status: 'NOT_SUBSCRIBED' | 'SUBSCRIBED';

  /**
   * The unique identifier for the brand associated with the subscription status,
   * represented as an integer.
   */
  brandId?: number;

  /**
   * The legal basis for processing the subscription, which can include values such
   * as 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', or 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation of the legal basis for the subscription status.
   */
  legalBasisExplanation?: string;

  /**
   * The name of the preference group associated with the subscription status.
   */
  preferenceGroupName?: string;
}

export interface PublicSubscriptionStatusesResponse {
  /**
   * The email address of the recipient for whom the subscription statuses are being
   * retrieved. It is a string.
   */
  recipient: string;

  /**
   * An array of PublicSubscriptionStatus objects, each detailing the subscription
   * status of the recipient for a particular subscription.
   */
  subscriptionStatuses: Array<PublicSubscriptionStatus>;
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

export interface PublicUpdateSubscriptionStatusRequest {
  /**
   * The email address of the user whose subscription status is being updated. It is
   * a required field and must be a string.
   */
  emailAddress: string;

  /**
   * The unique identifier of the subscription for which the status is being updated.
   * It is a required field and must be a string.
   */
  subscriptionId: string;

  /**
   * The legal basis for processing the subscription status change. It is an optional
   * field and must be a string with valid values including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An optional field providing an explanation for the legal basis used. It must be
   * a string.
   */
  legalBasisExplanation?: string;
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
  status: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

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
  wideStatusType: 'BUSINESS_UNIT_WIDE' | 'PORTAL_WIDE';

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

export interface SubscriptionDefinition {
  /**
   * The unique identifier for the subscription.
   */
  id: string;

  /**
   * The date and time when the subscription was created.
   */
  createdAt: string;

  /**
   * A description of the subscription.
   */
  description: string;

  /**
   * Indicates whether the subscription is active.
   */
  isActive: boolean;

  /**
   * Indicates whether the subscription is the default option.
   */
  isDefault: boolean;

  /**
   * Indicates whether the subscription is internal.
   */
  isInternal: boolean;

  /**
   * The name of the subscription.
   */
  name: string;

  /**
   * The date and time when the subscription was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the business unit associated with the subscription.
   */
  businessUnitId?: number;

  /**
   * The method of communication for the subscription.
   */
  communicationMethod?: string;

  /**
   * The purpose of the subscription.
   */
  purpose?: string;

  /**
   * A list of translations associated with the subscription.
   */
  subscriptionTranslations?: Array<PublicSubscriptionTranslation>;
}

export interface CommunicationPreferenceGenerateLinksParams {
  /**
   * Query param: The communication channel for which the links are generated. Must
   * be 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * Body param: A string representing the unique identifier of the subscriber. This
   * property is required.
   */
  subscriberIdString: string;

  /**
   * Query param: The ID of the business unit associated with the request. Defaults
   * to 0.
   */
  businessUnitId?: number;

  /**
   * Body param: The language in which the generated link should be presented,
   * represented as a string.
   */
  language?: string;

  /**
   * Body param: The unique identifier for the subscription, represented as an
   * integer in int64 format.
   */
  subscriptionId?: number;
}

export interface CommunicationPreferenceGetStatusesParams {
  /**
   * A required string indicating the communication channel to retrieve the status
   * for. Valid value is 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * An optional integer representing the business unit ID to filter the subscription
   * status.
   */
  businessUnitId?: number;
}

export interface CommunicationPreferenceGetUnsubscribeAllStatusParams {
  /**
   * The communication channel to unsubscribe from. Must be 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * The ID of the business unit associated with the communication preferences.
   */
  businessUnitId?: number;

  /**
   * A boolean indicating whether to include detailed information in the response.
   * Defaults to false.
   */
  verbose?: boolean;
}

export interface CommunicationPreferenceSubscribeParams {
  /**
   * The email address of the user whose subscription status is being updated. It is
   * a required field and must be a string.
   */
  emailAddress: string;

  /**
   * The unique identifier of the subscription for which the status is being updated.
   * It is a required field and must be a string.
   */
  subscriptionId: string;

  /**
   * The legal basis for processing the subscription status change. It is an optional
   * field and must be a string with valid values including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An optional field providing an explanation for the legal basis used. It must be
   * a string.
   */
  legalBasisExplanation?: string;
}

export interface CommunicationPreferenceUnsubscribeParams {
  /**
   * The email address of the user whose subscription status is being updated. It is
   * a required field and must be a string.
   */
  emailAddress: string;

  /**
   * The unique identifier of the subscription for which the status is being updated.
   * It is a required field and must be a string.
   */
  subscriptionId: string;

  /**
   * The legal basis for processing the subscription status change. It is an optional
   * field and must be a string with valid values including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An optional field providing an explanation for the legal basis used. It must be
   * a string.
   */
  legalBasisExplanation?: string;
}

export interface CommunicationPreferenceUnsubscribeAllParams {
  /**
   * The communication channel from which to unsubscribe the subscriber. Must be
   * 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * The ID of the business unit associated with the subscriber. This is an optional
   * parameter.
   */
  businessUnitId?: number;

  /**
   * A boolean flag indicating whether to include detailed information in the
   * response. Defaults to false.
   */
  verbose?: boolean;
}

export interface CommunicationPreferenceUpdateStatusParams {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

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
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;
}

CommunicationPreferences.Definitions = Definitions;
CommunicationPreferences.Statuses = Statuses;

export declare namespace CommunicationPreferences {
  export {
    type ActionResponseWithResultsPublicStatus as ActionResponseWithResultsPublicStatus,
    type ActionResponseWithResultsPublicWideStatus as ActionResponseWithResultsPublicWideStatus,
    type ActionResponseWithResultsSubscriptionDefinition as ActionResponseWithResultsSubscriptionDefinition,
    type BatchInputPublicStatusRequest as BatchInputPublicStatusRequest,
    type BatchResponsePublicBulkOptOutFromAllResponse as BatchResponsePublicBulkOptOutFromAllResponse,
    type BatchResponsePublicStatus as BatchResponsePublicStatus,
    type BatchResponsePublicStatusBulkResponse as BatchResponsePublicStatusBulkResponse,
    type BatchResponsePublicWideStatusBulkResponse as BatchResponsePublicWideStatusBulkResponse,
    type LinkGenerationRequest as LinkGenerationRequest,
    type LinkGenerationResponse as LinkGenerationResponse,
    type PartialPublicStatusRequest as PartialPublicStatusRequest,
    type PublicBulkOptOutFromAllResponse as PublicBulkOptOutFromAllResponse,
    type PublicStatus as PublicStatus,
    type PublicStatusBulkResponse as PublicStatusBulkResponse,
    type PublicStatusRequest as PublicStatusRequest,
    type PublicSubscriptionStatus as PublicSubscriptionStatus,
    type PublicSubscriptionStatusesResponse as PublicSubscriptionStatusesResponse,
    type PublicSubscriptionTranslation as PublicSubscriptionTranslation,
    type PublicUpdateSubscriptionStatusRequest as PublicUpdateSubscriptionStatusRequest,
    type PublicWideStatus as PublicWideStatus,
    type PublicWideStatusBulkResponse as PublicWideStatusBulkResponse,
    type SubscriptionDefinition as SubscriptionDefinition,
    type CommunicationPreferenceGenerateLinksParams as CommunicationPreferenceGenerateLinksParams,
    type CommunicationPreferenceGetStatusesParams as CommunicationPreferenceGetStatusesParams,
    type CommunicationPreferenceGetUnsubscribeAllStatusParams as CommunicationPreferenceGetUnsubscribeAllStatusParams,
    type CommunicationPreferenceSubscribeParams as CommunicationPreferenceSubscribeParams,
    type CommunicationPreferenceUnsubscribeParams as CommunicationPreferenceUnsubscribeParams,
    type CommunicationPreferenceUnsubscribeAllParams as CommunicationPreferenceUnsubscribeAllParams,
    type CommunicationPreferenceUpdateStatusParams as CommunicationPreferenceUpdateStatusParams,
  };

  export { Definitions as Definitions, type DefinitionListParams as DefinitionListParams };

  export { Statuses as Statuses };
}
