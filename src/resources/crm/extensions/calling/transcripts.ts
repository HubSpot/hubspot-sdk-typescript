// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTranscripts extends APIResource {
  static override readonly _key: readonly ['crm', 'extensions', 'calling', 'transcripts'] = Object.freeze([
    'crm',
    'extensions',
    'calling',
    'transcripts',
  ] as const);

  create(body: TranscriptCreateParams, options?: RequestOptions): APIPromise<TranscriptCreateResponse> {
    return this._client.post('/crm/extensions/calling/2026-03/transcripts', { body, ...options });
  }

  delete(transcriptID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/extensions/calling/2026-03/transcripts/${transcriptID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createInboundCall(
    body: TranscriptCreateInboundCallParams,
    options?: RequestOptions,
  ): APIPromise<CallingAPI.CompletedThirdPartyCallResponse> {
    return this._client.post('/crm/extensions/calling/2026-03/inbound-call', { body, ...options });
  }

  get(transcriptID: string, options?: RequestOptions): APIPromise<TranscriptResponse> {
    return this._client.get(path`/crm/extensions/calling/2026-03/transcripts/${transcriptID}`, options);
  }
}
export class Transcripts extends BaseTranscripts {}

export interface Speaker {
  id: string;

  name: string;

  email?: string;
}

export interface TranscriptCreateRequest {
  engagementId: number;

  transcriptCreateUtterances: Array<TranscriptCreateUtterance>;
}

export interface TranscriptCreateResponse {
  id: string;
}

export interface TranscriptCreateUtterance {
  endTimeMillis: number;

  speaker: Speaker;

  startTimeMillis: number;

  text: string;

  languageCode?: string;
}

export interface TranscriptResponse {
  id: string;

  createdAt: string;

  engagementId: number;

  transcriptSource: 'HUBSPOT_GENERATED' | 'INTEGRATOR_GENERATED';

  transcriptUtterances: Array<TranscriptUtterance>;

  updatedAt: string;
}

export interface TranscriptUtterance {
  id: string;

  endTimeMillis: number;

  startTimeMillis: number;

  text: string;

  languageCode?: string;

  speaker?: Speaker;
}

export interface TranscriptCreateParams {
  engagementId: number;

  transcriptCreateUtterances: Array<TranscriptCreateUtterance>;
}

export interface TranscriptCreateInboundCallParams {
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

  fromNumber: CallingAPI.FormattedPhoneNumber;

  potentialRecipientUserIds: Array<number>;

  toNumber: CallingAPI.FormattedPhoneNumber;

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

export declare namespace Transcripts {
  export {
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
