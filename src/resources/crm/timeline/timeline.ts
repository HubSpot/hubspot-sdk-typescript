// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BatchAPI from './batch';
import { Batch, BatchCreateParams } from './batch';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Timeline extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Send a single instance of event data to a specified event type.
   */
  createEvent(body: TimelineCreateEventParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/integrators/timeline/2026-03/events', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createProjectType(
    body: TimelineCreateProjectTypeParams,
    options?: RequestOptions,
  ): APIPromise<AppEventResolutionResponse> {
    return this._client.post('/integrators/timeline/2026-03/types/projects', { body, ...options });
  }
}

export interface AppEventOccurrence {
  id: string;

  eventTypeName: string;

  properties: { [key: string]: string };

  domain?: string;

  email?: string;

  extraData?: unknown;

  objectId?: string;

  objectTypeFullyQualifiedName?: string;

  timelineIFrame?: TimelineEventIFrame;

  timestamp?: string;

  utk?: string;
}

export interface AppEventResolutionResponse {
  developerQualifiedSymbol: DeveloperQualifiedSymbol;

  fullyQualifiedName: string;
}

export interface BatchInputAppEventOccurrence {
  inputs: Array<AppEventOccurrence>;
}

export interface BatchResponseAppEventOccurrence {
  completedAt: string;

  results: Array<AppEventOccurrence>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface DeveloperQualifiedSymbol {
  developerSymbol: string;

  projectName: string;
}

export interface ExternalAppEventResolutionRequest {
  developerSymbol: string;

  projectName: string;
}

export interface TimelineEventIFrame {
  /**
   * The label of the modal window that displays the iframe contents.
   */
  headerLabel: string;

  /**
   * The height of the modal window in pixels.
   */
  height: number;

  /**
   * The text displaying the link that will display the iframe.
   */
  linkLabel: string;

  /**
   * The URI of the iframe contents.
   */
  url: string;

  /**
   * The width of the modal window in pixels.
   */
  width: number;
}

export interface TimelineCreateEventParams {
  id: string;

  eventTypeName: string;

  properties: { [key: string]: string };

  domain?: string;

  email?: string;

  extraData?: unknown;

  objectId?: string;

  objectTypeFullyQualifiedName?: string;

  timelineIFrame?: TimelineEventIFrame;

  timestamp?: string;

  utk?: string;
}

export interface TimelineCreateProjectTypeParams {
  developerSymbol: string;

  projectName: string;
}

Timeline.Batch = Batch;

export declare namespace Timeline {
  export {
    type AppEventOccurrence as AppEventOccurrence,
    type AppEventResolutionResponse as AppEventResolutionResponse,
    type BatchInputAppEventOccurrence as BatchInputAppEventOccurrence,
    type BatchResponseAppEventOccurrence as BatchResponseAppEventOccurrence,
    type DeveloperQualifiedSymbol as DeveloperQualifiedSymbol,
    type ExternalAppEventResolutionRequest as ExternalAppEventResolutionRequest,
    type TimelineEventIFrame as TimelineEventIFrame,
    type TimelineCreateEventParams as TimelineCreateEventParams,
    type TimelineCreateProjectTypeParams as TimelineCreateProjectTypeParams,
  };

  export { Batch as Batch, type BatchCreateParams as BatchCreateParams };
}
