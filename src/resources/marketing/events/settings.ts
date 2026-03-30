// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Create or update the current settings for the application.
   */
  createOrUpdate(
    appID: number,
    body: SettingCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.EventDetailSettings> {
    return this._client.post(path`/marketing/marketing-events/2026-03/${appID}/settings`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the current settings for the application.
   */
  get(appID: number, options?: RequestOptions): APIPromise<EventsAPI.EventDetailSettings> {
    return this._client.get(path`/marketing/marketing-events/2026-03/${appID}/settings`, options);
  }
}

export interface SettingCreateOrUpdateParams {
  /**
   * The url that will be used to fetch marketing event details by id. Must contain a
   * `%s` character sequence that will be substituted with the event id. For example:
   * `https://my.event.app/events/%s`
   */
  eventDetailsUrl: string;
}

export declare namespace Settings {
  export { type SettingCreateOrUpdateParams as SettingCreateOrUpdateParams };
}
