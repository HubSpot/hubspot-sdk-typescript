// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
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
   *   await client.conversations.threads.update('threadId');
   * ```
   */
  update(
    threadID: string,
    body: ThreadUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicThread> {
    return this._client.patch(path`/conversations/v3/conversations/threads/${threadID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of threads, with optional filters and sorting.
   *
   * @example
   * ```ts
   * const collectionResponsePublicThreadForwardPaging =
   *   await client.conversations.threads.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ConversationsAPI.CollectionResponsePublicThreadForwardPaging> {
    return this._client.get('/conversations/v3/conversations/threads', options);
  }

  /**
   * Archives a single thread. The thread will be permanently deleted 30 days after
   * placed in an archived state.
   *
   * @example
   * ```ts
   * await client.conversations.threads.delete('threadId');
   * ```
   */
  delete(threadID: string, options?: RequestOptions): APIPromise<void> {
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
   *   'threadId',
   * );
   * ```
   */
  get(threadID: string, options?: RequestOptions): APIPromise<ConversationsAPI.PublicThread> {
    return this._client.get(path`/conversations/v3/conversations/threads/${threadID}`, options);
  }
}

export interface ThreadUpdateParams {
  /**
   * Whether this thread is archived. Set to false to restore the thread.
   */
  archived?: boolean;

  /**
   * The thread's status: `OPEN` or `CLOSED`.
   */
  status?: 'OPEN' | 'CLOSED';
}

export declare namespace Threads {
  export { type ThreadUpdateParams as ThreadUpdateParams };
}
