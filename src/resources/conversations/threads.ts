// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { PublicThreadsPage } from './conversations';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Threads extends APIResource {
  /**
   * Updates a single thread. Either a thread's status can be updated, or the thread
   * can be restored.
   *
   * @example
   * ```ts
   * const publicThread =
   *   await client.conversations.threads.update(0);
   * ```
   */
  update(
    threadID: number,
    params: ThreadUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicThread> {
    const { query_archived, ...body } = params;
    return this._client.patch(path`/conversations/v3/conversations/threads/${threadID}`, {
      query: { archived: query_archived },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of threads, with optional filters and sorting.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicThread of client.conversations.threads.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ThreadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicThreadsPage, ConversationsAPI.PublicThread> {
    return this._client.getAPIList(
      '/conversations/v3/conversations/threads',
      Page<ConversationsAPI.PublicThread>,
      { query, ...options },
    );
  }

  /**
   * Archives a single thread. The thread will be permanently deleted 30 days after
   * placed in an archived state.
   *
   * @example
   * ```ts
   * await client.conversations.threads.delete(0);
   * ```
   */
  delete(threadID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/conversations/v3/conversations/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single thread by its ID
   *
   * @example
   * ```ts
   * const publicThread = await client.conversations.threads.get(
   *   0,
   * );
   * ```
   */
  get(
    threadID: number,
    query: ThreadGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicThread> {
    return this._client.get(path`/conversations/v3/conversations/threads/${threadID}`, { query, ...options });
  }
}

export interface ThreadUpdateParams {
  /**
   * Query param: Whether the thread to update is archived. Default is false. A
   * thread's status property can not be updated if the thread is archived.
   */
  query_archived?: boolean;

  /**
   * Body param: Whether this thread is archived. Set to false to restore the thread.
   */
  body_archived?: boolean;

  /**
   * Body param: The thread's status: `OPEN` or `CLOSED`.
   */
  status?: 'OPEN' | 'CLOSED';
}

export interface ThreadListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * Retrieve a filtered list of conversations for a specific contact by its ID. This
   * parameter cannot be used in conjunction with the `inboxId` property.
   */
  associatedContactId?: number;

  /**
   * You can specify an association type here of `TICKET`. If this is set the
   * response will included a thread associations object and associated ticket id if
   * present. If there are no associations to a ticket with this conversation, then
   * the thread associations object will not be present on the response.
   */
  association?: Array<'TICKET'>;

  /**
   * The ID of the conversations inbox you can optionally include to retrieve the
   * associated messages for. This parameter cannot be used in conjunction with the
   * `associatedContactId` property.
   */
  inboxId?: Array<number>;

  /**
   * The minimum(earliest) `latestMessageTimestamp`. This is required only when
   * sorting by `latestMessageTimestamp`.
   */
  latestMessageTimestampAfter?: string;

  /**
   * A specific property to include in the thread response.
   */
  property?: string;

  /**
   * Set the sort order of the response. Valid options are `id` (default) and
   * `latestMessageTimestamp` (which requires the `latestMessageTimestampAfter` field
   * to also be set). If you’re filtering threads by `associatedContactId` , you can
   * sort in descending order by prepending - to the sort option (e.g., `-id` or
   * `-latestMessageTimestampAfter` ). Otherwise, results are always returned in
   * ascending order.
   */
  sort?: Array<string>;

  /**
   * The status of the associated conversations to filter by (either `OPEN` or
   * `CLOSED`). This property must be provided if you’re including the
   * `associatedContactId` query parameter.
   */
  threadStatus?: string;
}

export interface ThreadGetParams {
  /**
   * Whether to return only results that have been archived. Default is false.
   */
  archived?: boolean;

  /**
   * You can specify an association type here of `TICKET`. If this is set the
   * response will included a thread associations object and associated ticket id if
   * present. If there are no associations to a ticket with this conversation, then
   * the thread associations object will not be present on the response.
   */
  association?: Array<'TICKET'>;

  /**
   * A specific property to include in the thread response.
   */
  property?: string;
}

export declare namespace Threads {
  export {
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadListParams as ThreadListParams,
    type ThreadGetParams as ThreadGetParams,
  };
}

export { type PublicThreadsPage };
