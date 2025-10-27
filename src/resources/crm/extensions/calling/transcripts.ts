// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Transcripts extends APIResource {
  /**
   * @example
   * ```ts
   * const transcriptCreateResponse =
   *   await client.crm.extensions.calling.transcripts.create({
   *     engagementId: 0,
   *     transcriptCreateUtterances: [
   *       {
   *         endTimeMillis: 0,
   *         speaker: { id: 'id', name: 'name' },
   *         startTimeMillis: 0,
   *         text: 'text',
   *       },
   *     ],
   *   });
   * ```
   */
  create(body: TranscriptCreateParams, options?: RequestOptions): APIPromise<TranscriptCreateResponse> {
    return this._client.post('/crm/v3/extensions/calling/transcripts', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * await client.crm.extensions.calling.transcripts.delete(
   *   'transcriptId',
   * );
   * ```
   */
  delete(transcriptID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/crm/v3/extensions/calling/transcripts/${transcriptID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const transcriptResponse =
   *   await client.crm.extensions.calling.transcripts.get(
   *     'transcriptId',
   *   );
   * ```
   */
  get(transcriptID: string, options?: RequestOptions): APIPromise<TranscriptResponse> {
    return this._client.get(path`/crm/v3/extensions/calling/transcripts/${transcriptID}`, options);
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

export declare namespace Transcripts {
  export {
    type Speaker as Speaker,
    type TranscriptCreateRequest as TranscriptCreateRequest,
    type TranscriptCreateResponse as TranscriptCreateResponse,
    type TranscriptCreateUtterance as TranscriptCreateUtterance,
    type TranscriptResponse as TranscriptResponse,
    type TranscriptUtterance as TranscriptUtterance,
    type TranscriptCreateParams as TranscriptCreateParams,
  };
}
