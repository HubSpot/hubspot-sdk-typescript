// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sequences extends APIResource {
  /**
   * Retrieve a list of sequences available in your HubSpot account. This endpoint
   * allows you to filter sequences by user ID and name, and supports pagination for
   * large result sets. Use this endpoint to manage and review your sequences
   * effectively.
   */
  list(
    query: SequenceListParams,
    options?: RequestOptions,
  ): PagePromise<PublicSequenceLiteResponsesPage, PublicSequenceLiteResponse> {
    return this._client.getAPIList('/automation/sequences/2026-03', Page<PublicSequenceLiteResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Enroll a contact into a sequence using the specified sequence ID and sender
   * email. This endpoint requires the user ID to be provided as a query parameter
   * and a valid JSON body with the necessary enrollment details. It is used to
   * automate the process of enrolling contacts into predefined sequences for
   * streamlined communication.
   */
  createEnrollment(
    params: SequenceCreateEnrollmentParams,
    options?: RequestOptions,
  ): APIPromise<PublicSequenceEnrollmentLiteResponse> {
    const { userId, ...body } = params;
    return this._client.post('/automation/sequences/2026-03/enrollments', {
      query: { userId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve details of a specific sequence in your HubSpot account using the
   * sequence ID. This endpoint requires the user ID to be specified and provides
   * comprehensive information about the sequence, including its steps and
   * dependencies.
   */
  get(
    sequenceID: string,
    query: SequenceGetParams,
    options?: RequestOptions,
  ): APIPromise<PublicSequenceResponse> {
    return this._client.get(path`/automation/sequences/2026-03/${sequenceID}`, { query, ...options });
  }

  /**
   * Retrieve the sequence enrollment details for a specific contact in your HubSpot
   * account. This endpoint provides information about the sequence a contact is
   * enrolled in, including enrollment timestamps and the sequence's name. It is
   * useful for tracking the progress and status of a contact within a sequence.
   */
  getEnrollmentByContactID(
    contactID: string,
    options?: RequestOptions,
  ): APIPromise<PublicSequenceEnrollmentResponse> {
    return this._client.get(path`/automation/sequences/2026-03/enrollments/contact/${contactID}`, options);
  }
}

export type PublicSequenceLiteResponsesPage = Page<PublicSequenceLiteResponse>;

export interface CollectionResponseWithTotalPublicSequenceLiteResponse {
  /**
   * An array of PublicSequenceLiteResponse objects, each representing a lightweight
   * version of a sequence.
   */
  results: Array<PublicSequenceLiteResponse>;

  /**
   * An integer representing the total number of sequence items available.
   */
  total: number;

  paging?: Shared.Paging;
}

export interface PublicEmailPatternResponse {
  /**
   * The unique identifier of the email pattern.
   */
  id: string;

  /**
   * The date and time when the email pattern was created.
   */
  createdAt: string;

  /**
   * The unique identifier of the email template associated with the pattern.
   */
  templateId: string;

  /**
   * The date and time when the email pattern was last updated.
   */
  updatedAt: string;

  /**
   * The order identifying the previous step to which the email thread is linked.
   */
  threadEmailToStepOrder?: number;
}

export interface PublicSequenceEnrollmentLiteResponse {
  /**
   * The unique identifier for the sequence enrollment.
   */
  id: string;

  /**
   * The date and time when the contact was enrolled in the sequence.
   */
  enrolledAt: string;

  /**
   * The email address of the contact enrolled in the sequence.
   */
  toEmail: string;

  /**
   * The date and time when the sequence enrollment was last updated.
   */
  updatedAt: string;
}

export interface PublicSequenceEnrollmentRequest {
  /**
   * The unique identifier of the contact to be enrolled in the sequence.
   */
  contactId: string;

  /**
   * The email address of the sender enrolling the contact in the sequence.
   */
  senderEmail: string;

  /**
   * The unique identifier of the sequence in which the contact will be enrolled.
   */
  sequenceId: string;

  /**
   * The alias email address used by the sender when enrolling the contact.
   */
  senderAliasAddress?: string;
}

export interface PublicSequenceEnrollmentResponse {
  /**
   * The unique identifier for the sequence enrollment.
   */
  id: string;

  /**
   * The date and time when the contact was enrolled in the sequence.
   */
  enrolledAt: string;

  /**
   * The identifier of the user who enrolled the contact in the sequence.
   */
  enrolledBy: string;

  /**
   * The email address of the user who enrolled the contact in the sequence.
   */
  enrolledByEmail: string;

  /**
   * The unique identifier of the sequence in which the contact is enrolled.
   */
  sequenceId: string;

  /**
   * The name of the sequence in which the contact is enrolled.
   */
  sequenceName: string;

  /**
   * The email address of the contact enrolled in the sequence.
   */
  toEmail: string;

  /**
   * The date and time when the sequence enrollment was last updated.
   */
  updatedAt: string;
}

export interface PublicSequenceLiteResponse {
  /**
   * The unique identifier of the sequence.
   */
  id: string;

  /**
   * The date and time when the sequence was created.
   */
  createdAt: string;

  /**
   * The name of the sequence.
   */
  name: string;

  /**
   * The date and time when the sequence was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the user associated with the sequence.
   */
  userId: string;

  /**
   * The ID of the folder containing the sequence.
   */
  folderId?: string;
}

export interface PublicSequenceResponse {
  /**
   * The unique identifier for the sequence.
   */
  id: string;

  /**
   * The date and time when the sequence was created.
   */
  createdAt: string;

  /**
   * An array of dependencies for the sequence steps, each represented as a
   * PublicSequenceStepDependencyResponse object.
   */
  dependencies: Array<PublicSequenceStepDependencyResponse>;

  /**
   * The name of the sequence.
   */
  name: string;

  /**
   * An array of steps included in the sequence, each represented by a
   * PublicSequenceStepResponse object.
   */
  steps: Array<PublicSequenceStepResponse>;

  /**
   * The date and time when the sequence was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the user associated with the sequence.
   */
  userId: string;

  /**
   * The identifier of the folder containing the sequence.
   */
  folderId?: string;

  settings?: PublicSequenceSettingsResponse;
}

export interface PublicSequenceSettingsResponse {
  /**
   * The unique identifier for the sequence settings.
   */
  id: string;

  /**
   * The timestamp of when the sequence settings were created.
   */
  createdAt: string;

  /**
   * Specifies the days on which follow-up actions are allowed.
   */
  eligibleFollowUpDays: 'BUSINESS_DAYS' | 'EVERYDAY' | 'WEEKDAYS_ONLY';

  /**
   * Indicates whether individual task reminders are enabled.
   */
  individualTaskRemindersEnabled: boolean;

  /**
   * (deprecated) Defines the unenrollment strategy, with accepted values being
   * ACCOUNT_BASED or LEAD_BASED. If ACCOUNT_BASED is used, all contacts associated
   * with the same company will be unenrolled if one contact meets any of the
   * unenrollment criteria.
   */
  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED';

  /**
   * Indicates the end minute of the time window during which automated emails can be
   * sent.
   */
  sendWindowEndMinute: number;

  /**
   * Indicates the start minute of the time window during which automated emails can
   * be sent.
   */
  sendWindowStartMinute: number;

  /**
   * Specifies the minute of day at which task reminders are triggered.
   */
  taskReminderMinute: number;

  /**
   * The timestamp of when the sequence settings were last updated.
   */
  updatedAt: string;
}

export interface PublicSequenceStepDependencyResponse {
  /**
   * The unique identifier of the step dependency.
   */
  id: string;

  /**
   * The date and time when the step dependency was created.
   */
  createdAt: string;

  /**
   * The type of dependency between sequence steps with accepted values being
   * TASK_COMPLETION or MANUAL_PAUSE.
   */
  dependencyType: 'MANUAL_PAUSE' | 'TASK_COMPLETION';

  /**
   * The unique identifier of the sequence step that is responsible for creating and
   * resolving this dependency.
   */
  reliesOnSequenceStepId: string;

  /**
   * The order number of the step that is responsible for creating and resolving this
   * dependency.
   */
  reliesOnStepOrder: number;

  /**
   * The unique identifier of the sequence step that requires this dependency.
   */
  requiredBySequenceStepId: string;

  /**
   * The order number of the step that requires this dependency.
   */
  requiredByStepOrder: number;

  /**
   * The date and time when the step dependency was last updated.
   */
  updatedAt: string;
}

export interface PublicSequenceStepResponse {
  /**
   * The unique identifier of the sequence step.
   */
  id: string;

  /**
   * The type of action to be performed in the sequence step.
   */
  actionType: 'EMAIL' | 'FINISH_ENROLLMENT' | 'TASK';

  /**
   * The date and time when the sequence step was created.
   */
  createdAt: string;

  /**
   * The delay in milliseconds before the sequence step is executed.
   */
  delayMillis: number;

  /**
   * The order of the step within the sequence.
   */
  stepOrder: number;

  /**
   * The date and time when the sequence step was last updated.
   */
  updatedAt: string;

  emailPattern?: PublicEmailPatternResponse;

  taskPattern?: PublicTaskPatternResponse;
}

export interface PublicTaskPatternResponse {
  /**
   * The unique identifier for the task pattern.
   */
  id: string;

  /**
   * The date and time when the task pattern was created.
   */
  createdAt: string;

  /**
   * The priority level assigned to the task.
   */
  taskPriority: 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE';

  /**
   * The type of task, such as an email or call.
   */
  taskType: 'CALL' | 'EMAIL' | 'LINKED_IN_CONNECT' | 'LINKED_IN_MESSAGE' | 'MEETING' | 'TODO';

  /**
   * The date and time when the task pattern was last updated.
   */
  updatedAt: string;

  /**
   * Additional notes or comments associated with the task.
   */
  notes?: string;

  /**
   * The identifier for the queue associated with the task.
   */
  queueId?: number;

  /**
   * The subject line of the task.
   */
  subject?: string;

  /**
   * The identifier for the template used in the task.
   */
  templateId?: number;

  /**
   * The order of the step to which the email thread is related.
   */
  threadEmailToStepOrder?: number;
}

export interface SequenceListParams extends PageParams {
  /**
   * The unique identifier of the user whose sequences are to be retrieved. This
   * parameter is required.
   */
  userId: string;

  /**
   * The name of the sequence to filter results by.
   */
  name?: string;
}

export interface SequenceCreateEnrollmentParams {
  /**
   * Query param: The unique identifier of the user performing the enrollment. This
   * parameter is required.
   */
  userId: string;

  /**
   * Body param: The unique identifier of the contact to be enrolled in the sequence.
   */
  contactId: string;

  /**
   * Body param: The email address of the sender enrolling the contact in the
   * sequence.
   */
  senderEmail: string;

  /**
   * Body param: The unique identifier of the sequence in which the contact will be
   * enrolled.
   */
  sequenceId: string;

  /**
   * Body param: The alias email address used by the sender when enrolling the
   * contact.
   */
  senderAliasAddress?: string;
}

export interface SequenceGetParams {
  /**
   * The unique identifier of the user requesting the sequence details. This
   * parameter is required.
   */
  userId: string;
}

export declare namespace Sequences {
  export {
    type CollectionResponseWithTotalPublicSequenceLiteResponse as CollectionResponseWithTotalPublicSequenceLiteResponse,
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
    type PublicSequenceLiteResponsesPage as PublicSequenceLiteResponsesPage,
    type SequenceListParams as SequenceListParams,
    type SequenceCreateEnrollmentParams as SequenceCreateEnrollmentParams,
    type SequenceGetParams as SequenceGetParams,
  };
}
