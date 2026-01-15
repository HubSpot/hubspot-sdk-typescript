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
   * Query param
   */
  query_archived?: boolean;

  /**
   * Body param
   */
  body_archived?: boolean;

  /**
   * Body param
   */
  status?: 'CLOSED' | 'OPEN';
}

export interface ThreadListParams extends PageParams {
  archived?: boolean;

  associatedContactId?: number;

  association?: Array<'TICKET'>;

  inboxId?: Array<number>;

  latestMessageTimestampAfter?: string;

  property?: string;

  sort?: Array<string>;

  threadStatus?: string;
}

export interface ThreadGetParams {
  archived?: boolean;

  association?: Array<'TICKET'>;

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
