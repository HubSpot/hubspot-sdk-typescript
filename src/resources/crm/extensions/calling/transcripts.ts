// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CallingAPI from './calling';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Transcripts extends APIResource {
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

  fromNumber: CallingAPI.FormattedPhoneNumber;

  potentialRecipientUserIds: Array<number>;

  toNumber: CallingAPI.FormattedPhoneNumber;

  callStartedTimestamp?: string;

  durationSeconds?: number;

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
