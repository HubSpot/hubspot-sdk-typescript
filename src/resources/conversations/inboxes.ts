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
   * Retrieve a list of conversations inboxes, with optional filters and sorting.
   *
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
   * Retrieve details of a single conversations inbox using the inbox ID.
   *
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
  /**
   * Whether to include archived inboxes in the response.
   */
  archived?: boolean;

  /**
   * The default number of results to display per page.
   */
  defaultPageLength?: number;

  /**
   * Specify the sort order for the inboxes.
   */
  sort?: Array<string>;
}

export interface InboxGetParams {
  /**
   * Whether to include archived inboxes in the response.
   */
  archived?: boolean;
}

export declare namespace Inboxes {
  export { type InboxListParams as InboxListParams, type InboxGetParams as InboxGetParams };
}

export { type PublicInboxesPage };
