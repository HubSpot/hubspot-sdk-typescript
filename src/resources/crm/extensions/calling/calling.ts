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

  delete(appID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/extensions/calling/2026-03/${appID}/settings/channel-connection`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  get(appID: number, options?: RequestOptions): APIPromise<RecordingSettingsResponse> {
    return this._client.get(path`/crm/extensions/calling/2026-03/${appID}/settings/recording`, options);
  }

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
  callerIdType: 'COMPANY';

  objectCoordinates: ObjectCoordinates;

  name?: string;
}

export interface CompletedThirdPartyCallRequest {
  createEngagement: boolean;

  engagementProperties: { [key: string]: string };

  externalCallId: string;

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

  callStartedTimestamp?: string;

  durationSeconds?: number;

  userId?: number;
}

export interface CompletedThirdPartyCallResponse {
  callerIdMatches: Array<ContactCallerID | CompanyCallerID>;
}

export interface ContactCallerID {
  callerIdType: 'CONTACT';

  objectCoordinates: ObjectCoordinates;

  email?: string;

  firstName?: string;

  lastName?: string;
}

export interface FormattedPhoneNumber {
  e164Number: string;

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

  extension?: string;
}

export interface MarkRecordingAsReadyRequest {
  /**
   * The unique identifier for the engagement associated with the call recording.
   */
  engagementId: number;
}

export interface ObjectCoordinates {
  objectId: number;

  objectTypeId: string;

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
