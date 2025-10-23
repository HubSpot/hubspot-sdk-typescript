// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TimelineAPI from './timeline';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Event templates define the general structure for a custom timeline event, and
   * enable you to send event data to HubSpot. A template includes formatted copy for
   * its heading and details, as well as any custom property definitions. A single
   * app can include up to 750 event templates.<br/><Warning>the `v1` and `v3`
   * timeline events APIs are only available for app partners with existing `v1`/`v3`
   * timeline events defined in their public app. <ul><li>If your app doesn't include
   * any timeline events yet, requests to this endpoint will fail. Instead, you can
   * get started on
   * [latest version of the developer platform](/apps/developer-platform/build-apps/overview).
   * Note that you'll need to request approval before you can define app events for
   * your app. Learn more in the
   * [app events overview](/apps/developer-platform/add-features/app-events/overview).</li><li>If
   * your app includes a `v1`/`v3` timeline event, learn how to
   * [migrate it to the developer platform](/apps/developer-platform/add-features/app-events/create-and-manage-event-types#migrate-an-existing-timeline-event-type).
   * You don't need to request approval before migrating existing event
   * types.</li></ul>If you're not an app partner, you can send custom event data to
   * HubSpot using the
   * [custom events API](/api-reference/events-manage-event-definitions-v3/guide).</Warning>
   *
   * @example
   * ```ts
   * const timelineEventTemplate =
   *   await client.crm.timeline.templates.create(0, {
   *     name: 'PetSpot Registration',
   *     objectType: 'contacts',
   *     tokens: [
   *       {
   *         label: 'Pet Name',
   *         name: 'petName',
   *         type: 'string',
   *       },
   *       { label: 'Pet Age', name: 'petAge', type: 'number' },
   *       {
   *         label: 'Pet Color',
   *         name: 'petColor',
   *         type: 'enumeration',
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    appID: number,
    body: TemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.TimelineEventTemplate> {
    return this._client.post(path`/integrators/timeline/v3/${appID}/event-templates`, { body, ...options });
  }

  /**
   * Update an existing event template, specified by ID.
   *
   * @example
   * ```ts
   * const timelineEventTemplate =
   *   await client.crm.timeline.templates.update(
   *     'eventTemplateId',
   *     {
   *       appId: 0,
   *       id: '1001298',
   *       name: 'PetSpot Registration',
   *       tokens: [
   *         {
   *           label: 'Pet Name',
   *           name: 'petName',
   *           type: 'string',
   *         },
   *         {
   *           label: 'Pet Age',
   *           name: 'petAge',
   *           type: 'number',
   *         },
   *         {
   *           label: 'Pet Color',
   *           name: 'petColor',
   *           type: 'enumeration',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    eventTemplateID: string,
    params: TemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.TimelineEventTemplate> {
    const { appId, ...body } = params;
    return this._client.put(path`/integrators/timeline/v3/${appId}/event-templates/${eventTemplateID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve all templates defined for an app.
   *
   * @example
   * ```ts
   * const collectionResponseTimelineEventTemplateNoPaging =
   *   await client.crm.timeline.templates.list(0);
   * ```
   */
  list(
    appID: number,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.CollectionResponseTimelineEventTemplateNoPaging> {
    return this._client.get(path`/integrators/timeline/v3/${appID}/event-templates`, options);
  }

  /**
   * Delete an event type template by ID.
   *
   * @example
   * ```ts
   * await client.crm.timeline.templates.delete(
   *   'eventTemplateId',
   *   { appId: 0 },
   * );
   * ```
   */
  delete(eventTemplateID: string, params: TemplateDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/integrators/timeline/v3/${appId}/event-templates/${eventTemplateID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve an event type template by ID.
   *
   * @example
   * ```ts
   * const timelineEventTemplate =
   *   await client.crm.timeline.templates.get(
   *     'eventTemplateId',
   *     { appId: 0 },
   *   );
   * ```
   */
  get(
    eventTemplateID: string,
    params: TemplateGetParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.TimelineEventTemplate> {
    const { appId } = params;
    return this._client.get(
      path`/integrators/timeline/v3/${appId}/event-templates/${eventTemplateID}`,
      options,
    );
  }
}

export interface TemplateCreateParams {
  /**
   * The template name.
   */
  name: string;

  /**
   * The type of CRM object this template is for. [Contacts, companies, tickets, and
   * deals] are supported.
   */
  objectType: string;

  /**
   * A collection of tokens that can be used as custom properties on the event and to
   * create fully fledged CRM objects.
   */
  tokens: Array<TimelineAPI.TimelineEventTemplateToken>;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline when you expand the details.
   */
  detailTemplate?: string;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline as a header.
   */
  headerTemplate?: string;
}

export interface TemplateUpdateParams {
  /**
   * Path param: The ID of the target app.
   */
  appId: number;

  /**
   * Body param: The template ID.
   */
  id: string;

  /**
   * Body param: The template name.
   */
  name: string;

  /**
   * Body param: A collection of tokens that can be used as custom properties on the
   * event and to create fully fledged CRM objects.
   */
  tokens: Array<TimelineAPI.TimelineEventTemplateToken>;

  /**
   * Body param: This uses Markdown syntax with Handlebars and event-specific data to
   * render HTML on a timeline when you expand the details.
   */
  detailTemplate?: string;

  /**
   * Body param: This uses Markdown syntax with Handlebars and event-specific data to
   * render HTML on a timeline as a header.
   */
  headerTemplate?: string;
}

export interface TemplateDeleteParams {
  /**
   * The ID of the target app.
   */
  appId: number;
}

export interface TemplateGetParams {
  /**
   * The ID of the target app.
   */
  appId: number;
}

export declare namespace Templates {
  export {
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateDeleteParams as TemplateDeleteParams,
    type TemplateGetParams as TemplateGetParams,
  };
}
