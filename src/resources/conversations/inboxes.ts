// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { PublicInboxesPage } from './conversations';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Inboxes extends APIResource {
  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicInbox of client.conversations.inboxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicInboxesPage, ConversationsAPI.PublicInbox> {
    return this._client.getAPIList(
      '/conversations/v3/conversations/inboxes',
      Page<ConversationsAPI.PublicInbox>,
      { query, ...options },
    );
  }

  /**
   * @example
   * ```ts
   * const publicInbox = await client.conversations.inboxes.get(
   *   0,
   * );
   * ```
   */
  get(
    inboxID: number,
    query: InboxGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicInbox> {
    return this._client.get(path`/conversations/v3/conversations/inboxes/${inboxID}`, { query, ...options });
  }
}

export interface InboxListParams extends PageParams {
  archived?: boolean;

  defaultPageLength?: number;

  sort?: Array<string>;
}

export interface InboxGetParams {
  archived?: boolean;
}

export declare namespace Inboxes {
  export { type InboxListParams as InboxListParams, type InboxGetParams as InboxGetParams };
}

export { type PublicInboxesPage };
