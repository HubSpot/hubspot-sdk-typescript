// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TranscriptsAPI from './transcripts';
import {
  Speaker,
  TranscriptCreateInboundCallParams,
  TranscriptCreateParams,
  TranscriptCreateRequest,
  TranscriptCreateResponse,
  TranscriptCreateUtterance,
  TranscriptResponse,
  TranscriptUtterance,
  Transcripts,
} from './transcripts';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Calling extends APIResource {
  transcripts: TranscriptsAPI.Transcripts = new TranscriptsAPI.Transcripts(this._client);

  /**
   * Create new recording settings for a specific app using the provided app ID.
   */
  create(
    appID: number,
    body: CallingCreateParams,
    options?: RequestOptions,
  ): APIPromise<RecordingSettingsResponse> {
    return this._client.post(path`/crm/extensions/calling/2026-03/${appID}/settings/recording`, {
      body,
      ...options,
    });
  }

  /**
   * Update the recording settings for a specific app using the provided app ID.
   */
  update(
    appID: number,
    body: CallingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RecordingSettingsResponse> {
    return this._client.patch(path`/crm/extensions/calling/2026-03/${appID}/settings/recording`, {
      body,
      ...options,
    });
  }

  /**
   * Delete the channel connection settings associated with the specified app.
   */
  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/extensions/calling/2026-03/${appID}/settings/channel-connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createInboundCall(
    body: CallingCreateInboundCallParams,
    options?: RequestOptions,
  ): APIPromise<CompletedThirdPartyCallResponse> {
    return this._client.post('/crm/extensions/calling/2026-03/inbound-call', { body, ...options });
  }

  /**
   * Retrieve the current recording settings for a specific app using the provided
   * app ID.
   */
  get(appID: number, options?: RequestOptions): APIPromise<RecordingSettingsResponse> {
    return this._client.get(path`/crm/extensions/calling/2026-03/${appID}/settings/recording`, options);
  }

  /**
   * This endpoint is used to mark a call recording as ready. It requires the
   * engagementId to identify the specific recording.
   */
  markReady(body: CallingMarkReadyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/crm/extensions/calling/2026-03/recordings/ready', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChannelConnectionSettingsPatchRequest {
  /**
   * Indicates whether the channel connection settings are ready.
   */
  isReady?: boolean;

  /**
   * The URL for the channel connection settings.
   */
  url?: string;
}

export interface ChannelConnectionSettingsRequest {
  /**
   * Indicates whether the channel connection settings are ready.
   */
  isReady: boolean;

  /**
   * The URL associated with the channel connection settings.
   */
  url: string;
}

export interface ChannelConnectionSettingsResponse {
  /**
   * The date and time when the channel connection settings were created.
   */
  createdAt: string;

  /**
   * Indicates whether the channel connection settings are ready for use.
   */
  isReady: boolean;

  /**
   * The date and time when the channel connection settings were last updated.
   */
  updatedAt: string;

  /**
   * The URL associated with the channel connection settings.
   */
  url: string;
}

export interface CompanyCallerID {
  /**
   * Specifies the type of caller ID, which is set to 'COMPANY' by default.
   */
  callerIdType: 'COMPANY';

  objectCoordinates: ObjectCoordinates;

  /**
   * The name associated with the company caller ID.
   */
  name?: string;
}

export interface CompletedThirdPartyCallRequest {
  /**
   * Indicates whether an engagement should be created for the call.
   */
  createEngagement: boolean;

  /**
   * Contains additional properties related to the engagement.
   */
  engagementProperties: { [key: string]: string };

  /**
   * The unique identifier for the call from an external system.
   */
  externalCallId: string;

  /**
   * The final status of the call, with accepted values including: BUSY,
   * CALLING_CRM_USER, CANCELED, COMPLETED, CONNECTING, FAILED, HOLD, IN_PROGRESS,
   * MISSED, NO_ANSWER, QUEUED, RINGING, UNKNOWN.
   */
  finalCallStatus:
    | 'BUSY'
    | 'CALLING_CRM_USER'
    | 'CANCELED'
    | 'COMPLETED'
    | 'CONNECTING'
    | 'FAILED'
    | 'HOLD'
    | 'IN_PROGRESS'
    | 'MISSED'
    | 'NO_ANSWER'
    | 'QUEUED'
    | 'RINGING'
    | 'UNKNOWN';

  fromNumber: FormattedPhoneNumber;

  potentialRecipientUserIds: Array<number>;

  toNumber: FormattedPhoneNumber;

  /**
   * The timestamp indicating when the call started, formatted as a date-time string.
   */
  callStartedTimestamp?: string;

  /**
   * The duration of the call in seconds.
   */
  durationSeconds?: number;

  /**
   * The ID of the user associated with the call.
   */
  userId?: number;
}

export interface CompletedThirdPartyCallResponse {
  callerIdMatches: Array<ContactCallerID | CompanyCallerID>;
}

export interface ContactCallerID {
  /**
   * Specifies the type of caller ID, with the default value being CONTACT.
   */
  callerIdType: 'CONTACT';

  objectCoordinates: ObjectCoordinates;

  /**
   * The email address of the contact.
   */
  email?: string;

  /**
   * The first name of the contact.
   */
  firstName?: string;

  /**
   * The last name of the contact.
   */
  lastName?: string;
}

export interface FormattedPhoneNumber {
  /**
   * The phone number formatted in E.164 standard.
   */
  e164Number: string;

  /**
   * The type of phone number, with accepted values including FIXED_LINE, MOBILE,
   * VOIP, and others.
   */
  phoneNumberType:
    | 'FIXED_LINE'
    | 'FIXED_LINE_OR_MOBILE'
    | 'MOBILE'
    | 'PAGER'
    | 'PERSONAL_NUMBER'
    | 'PREMIUM_RATE'
    | 'SHARED_COST'
    | 'TOLL_FREE'
    | 'UAN'
    | 'UNKNOWN'
    | 'VOICEMAIL'
    | 'VOIP';

  /**
   * The extension number associated with the phone number.
   */
  extension?: string;
}

export interface MarkRecordingAsReadyRequest {
  /**
   * The unique identifier for the engagement associated with the call recording.
   */
  engagementId: number;
}

export interface ObjectCoordinates {
  /**
   * The unique identifier for the object.
   */
  objectId: number;

  /**
   * The type identifier for the object.
   */
  objectTypeId: string;

  /**
   * The unique identifier for the portal.
   */
  portalId: number;
}

export interface RecordingSettingsPatchRequest {
  /**
   * The URL used to access authenticated call recordings.
   */
  urlToRetrieveAuthedRecording?: string;
}

export interface RecordingSettingsRequest {
  /**
   * The URL used to access authenticated call recordings.
   */
  urlToRetrieveAuthedRecording: string;
}

export interface RecordingSettingsResponse {
  /**
   * The URL used to retrieve authenticated call recordings.
   */
  urlToRetrieveAuthedRecording: string;
}

export interface SettingsPatchRequest {
  /**
   * The height setting for the calling extension interface.
   */
  height?: number;

  /**
   * Specifies whether the calling extension is ready for use.
   */
  isReady?: boolean;

  /**
   * The name of the calling extension.
   */
  name?: string;

  /**
   * Indicates if the calling extension supports custom objects.
   */
  supportsCustomObjects?: boolean;

  /**
   * Indicates if the calling extension supports inbound calling.
   */
  supportsInboundCalling?: boolean;

  /**
   * The URL associated with the calling extension settings.
   */
  url?: string;

  /**
   * Indicates if the calling extension uses a calling window.
   */
  usesCallingWindow?: boolean;

  /**
   * Indicates if the calling extension uses a remote connection.
   */
  usesRemote?: boolean;

  /**
   * The width setting for the calling extension interface.
   */
  width?: number;
}

export interface SettingsRequest {
  /**
   * Specifies the height of the calling extension interface.
   */
  height: number;

  /**
   * Indicates if the calling extension is ready for use.
   */
  isReady: boolean;

  /**
   * The name of the calling extension.
   */
  name: string;

  /**
   * Indicates if the calling extension supports custom objects.
   */
  supportsCustomObjects: boolean;

  /**
   * Indicates if the calling extension supports inbound calling.
   */
  supportsInboundCalling: boolean;

  /**
   * The URL associated with the calling extension.
   */
  url: string;

  /**
   * Indicates if the calling extension uses a separate calling window.
   */
  usesCallingWindow: boolean;

  /**
   * Indicates if the calling extension uses remote services.
   */
  usesRemote: boolean;

  /**
   * Specifies the width of the calling extension interface.
   */
  width: number;
}

export interface SettingsResponse {
  /**
   * The date and time when the calling extension settings were created.
   */
  createdAt: string;

  /**
   * The height of the calling extension interface.
   */
  height: number;

  /**
   * Specifies whether the calling extension settings are ready for use.
   */
  isReady: boolean;

  /**
   * The name of the calling extension.
   */
  name: string;

  /**
   * Indicates if the calling extension supports custom objects.
   */
  supportsCustomObjects: boolean;

  /**
   * Indicates if the calling extension supports inbound calling.
   */
  supportsInboundCalling: boolean;

  /**
   * The date and time when the calling extension settings were last updated.
   */
  updatedAt: string;

  /**
   * The URL associated with the calling extension.
   */
  url: string;

  /**
   * Specifies if the calling extension uses a dedicated calling window.
   */
  usesCallingWindow: boolean;

  /**
   * Indicates if the calling extension uses a remote service.
   */
  usesRemote: boolean;

  /**
   * The width of the calling extension interface.
   */
  width: number;
}

export interface CallingCreateParams {
  /**
   * The URL used to access authenticated call recordings.
   */
  urlToRetrieveAuthedRecording: string;
}

export interface CallingUpdateParams {
  /**
   * The URL used to access authenticated call recordings.
   */
  urlToRetrieveAuthedRecording?: string;
}

export interface CallingCreateInboundCallParams {
  /**
   * Indicates whether an engagement should be created for the call.
   */
  createEngagement: boolean;

  /**
   * Contains additional properties related to the engagement.
   */
  engagementProperties: { [key: string]: string };

  /**
   * The unique identifier for the call from an external system.
   */
  externalCallId: string;

  /**
   * The final status of the call, with accepted values including: BUSY,
   * CALLING_CRM_USER, CANCELED, COMPLETED, CONNECTING, FAILED, HOLD, IN_PROGRESS,
   * MISSED, NO_ANSWER, QUEUED, RINGING, UNKNOWN.
   */
  finalCallStatus:
    | 'BUSY'
    | 'CALLING_CRM_USER'
    | 'CANCELED'
    | 'COMPLETED'
    | 'CONNECTING'
    | 'FAILED'
    | 'HOLD'
    | 'IN_PROGRESS'
    | 'MISSED'
    | 'NO_ANSWER'
    | 'QUEUED'
    | 'RINGING'
    | 'UNKNOWN';

  fromNumber: FormattedPhoneNumber;

  potentialRecipientUserIds: Array<number>;

  toNumber: FormattedPhoneNumber;

  /**
   * The timestamp indicating when the call started, formatted as a date-time string.
   */
  callStartedTimestamp?: string;

  /**
   * The duration of the call in seconds.
   */
  durationSeconds?: number;

  /**
   * The ID of the user associated with the call.
   */
  userId?: number;
}

export interface CallingMarkReadyParams {
  /**
   * The unique identifier for the engagement associated with the call recording.
   */
  engagementId: number;
}

Calling.Transcripts = Transcripts;

export declare namespace Calling {
  export {
    type ChannelConnectionSettingsPatchRequest as ChannelConnectionSettingsPatchRequest,
    type ChannelConnectionSettingsRequest as ChannelConnectionSettingsRequest,
    type ChannelConnectionSettingsResponse as ChannelConnectionSettingsResponse,
    type CompanyCallerID as CompanyCallerID,
    type CompletedThirdPartyCallRequest as CompletedThirdPartyCallRequest,
    type CompletedThirdPartyCallResponse as CompletedThirdPartyCallResponse,
    type ContactCallerID as ContactCallerID,
    type FormattedPhoneNumber as FormattedPhoneNumber,
    type MarkRecordingAsReadyRequest as MarkRecordingAsReadyRequest,
    type ObjectCoordinates as ObjectCoordinates,
    type RecordingSettingsPatchRequest as RecordingSettingsPatchRequest,
    type RecordingSettingsRequest as RecordingSettingsRequest,
    type RecordingSettingsResponse as RecordingSettingsResponse,
    type SettingsPatchRequest as SettingsPatchRequest,
    type SettingsRequest as SettingsRequest,
    type SettingsResponse as SettingsResponse,
    type CallingCreateParams as CallingCreateParams,
    type CallingUpdateParams as CallingUpdateParams,
    type CallingCreateInboundCallParams as CallingCreateInboundCallParams,
    type CallingMarkReadyParams as CallingMarkReadyParams,
  };

  export {
    Transcripts as Transcripts,
    type Speaker as Speaker,
    type TranscriptCreateRequest as TranscriptCreateRequest,
    type TranscriptCreateResponse as TranscriptCreateResponse,
    type TranscriptCreateUtterance as TranscriptCreateUtterance,
    type TranscriptResponse as TranscriptResponse,
    type TranscriptUtterance as TranscriptUtterance,
    type TranscriptCreateParams as TranscriptCreateParams,
    type TranscriptCreateInboundCallParams as TranscriptCreateInboundCallParams,
  };
}
