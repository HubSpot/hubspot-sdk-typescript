// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EnrollmentsAPI from './enrollments';
import { EnrollmentEnrollParams, Enrollments } from './enrollments';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sequences extends APIResource {
  enrollments: EnrollmentsAPI.Enrollments = new EnrollmentsAPI.Enrollments(this._client);

  /**
   * Retrieve a list of sequences that belong to a specific user.
   */
  list(
    query: SequenceListParams,
    options?: RequestOptions,
  ): PagePromise<PublicSequenceLiteResponsesPage, PublicSequenceLiteResponse> {
    return this._client.getAPIList('/automation/v4/sequences/', Page<PublicSequenceLiteResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve details of a specific sequence by its ID.
   */
  get(
    sequenceID: string,
    query: SequenceGetParams,
    options?: RequestOptions,
  ): APIPromise<PublicSequenceResponse> {
    return this._client.get(path`/automation/v4/sequences/${sequenceID}`, { query, ...options });
  }
}

export type PublicSequenceLiteResponsesPage = Page<PublicSequenceLiteResponse>;

export interface CollectionResponseWithTotalPublicSequenceLiteResponseForwardPaging {
  results: Array<PublicSequenceLiteResponse>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface EmailSettingsResponse {
  criteria: 'ALL' | 'NONE';

  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED';
}

export interface MeetingSettingsResponse {
  criteria: 'ALL' | 'NONE';

  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED';
}

export interface PublicEmailPatternResponse {
  id: string;

  createdAt: string;

  templateId: string;

  updatedAt: string;

  threadEmailToStepOrder?: number;
}

export interface PublicSequenceEnrollmentLiteResponse {
  id: string;

  enrolledAt: string;

  toEmail: string;

  updatedAt: string;
}

export interface PublicSequenceEnrollmentRequest {
  contactId: string;

  senderEmail: string;

  sequenceId: string;

  senderAliasAddress?: string;
}

export interface PublicSequenceEnrollmentResponse {
  id: string;

  enrolledAt: string;

  enrolledBy: string;

  enrolledByEmail: string;

  sequenceId: string;

  sequenceName: string;

  toEmail: string;

  updatedAt: string;
}

export interface PublicSequenceLiteResponse {
  id: string;

  createdAt: string;

  name: string;

  updatedAt: string;

  userId: string;

  folderId?: string;
}

export interface PublicSequenceResponse {
  id: string;

  createdAt: string;

  dependencies: Array<PublicSequenceStepDependencyResponse>;

  name: string;

  steps: Array<PublicSequenceStepResponse>;

  updatedAt: string;

  userId: string;

  folderId?: string;

  settings?: PublicSequenceSettingsResponse;
}

export interface PublicSequenceSettingsResponse {
  id: string;

  createdAt: string;

  eligibleFollowUpDays: string;

  individualTaskRemindersEnabled: boolean;

  sellingStrategy: string;

  sendWindowEndMinute: number;

  sendWindowStartMinute: number;

  taskReminderMinute: number;

  updatedAt: string;

  unenrollmentSettings?: UnenrollmentSettingsResponse;
}

export interface PublicSequenceStepDependencyResponse {
  id: string;

  createdAt: string;

  dependencyType: string;

  reliesOnSequenceStepId: string;

  reliesOnStepOrder: number;

  requiredBySequenceStepId: string;

  requiredByStepOrder: number;

  updatedAt: string;
}

export interface PublicSequenceStepResponse {
  id: string;

  actionType: string;

  createdAt: string;

  delayMillis: number;

  stepOrder: number;

  updatedAt: string;

  emailPattern?: PublicEmailPatternResponse;

  taskPattern?: PublicTaskPatternResponse;
}

export interface PublicTaskPatternResponse {
  id: string;

  createdAt: string;

  taskPriority: string;

  taskType: string;

  updatedAt: string;

  notes?: string;

  queueId?: number;

  subject?: string;

  templateId?: number;

  threadEmailToStepOrder?: number;
}

export interface UnenrollmentSettingsResponse {
  emailSettings: EmailSettingsResponse;

  meetingSettings: MeetingSettingsResponse;
}

export interface SequenceListParams extends PageParams {
  userId: string;

  name?: string;
}

export interface SequenceGetParams {
  userId: string;
}

Sequences.Enrollments = Enrollments;

export declare namespace Sequences {
  export {
    type CollectionResponseWithTotalPublicSequenceLiteResponseForwardPaging as CollectionResponseWithTotalPublicSequenceLiteResponseForwardPaging,
    type EmailSettingsResponse as EmailSettingsResponse,
    type MeetingSettingsResponse as MeetingSettingsResponse,
    type PublicEmailPatternResponse as PublicEmailPatternResponse,
    type PublicSequenceEnrollmentLiteResponse as PublicSequenceEnrollmentLiteResponse,
    type PublicSequenceEnrollmentRequest as PublicSequenceEnrollmentRequest,
    type PublicSequenceEnrollmentResponse as PublicSequenceEnrollmentResponse,
    type PublicSequenceLiteResponse as PublicSequenceLiteResponse,
    type PublicSequenceResponse as PublicSequenceResponse,
    type PublicSequenceSettingsResponse as PublicSequenceSettingsResponse,
    type PublicSequenceStepDependencyResponse as PublicSequenceStepDependencyResponse,
    type PublicSequenceStepResponse as PublicSequenceStepResponse,
    type PublicTaskPatternResponse as PublicTaskPatternResponse,
    type UnenrollmentSettingsResponse as UnenrollmentSettingsResponse,
    type PublicSequenceLiteResponsesPage as PublicSequenceLiteResponsesPage,
    type SequenceListParams as SequenceListParams,
    type SequenceGetParams as SequenceGetParams,
  };

  export { Enrollments as Enrollments, type EnrollmentEnrollParams as EnrollmentEnrollParams };
}
