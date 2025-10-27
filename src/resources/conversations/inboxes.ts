// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Inboxes extends APIResource {
  /**
   * Retrieve a list of conversations inboxes, with optional filters and sorting.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalPublicInboxForwardPaging =
   *   await client.conversations.inboxes.list();
   * ```
   */
  list(
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.CollectionResponseWithTotalPublicInboxForwardPaging> {
    return this._client.get('/conversations/v3/conversations/inboxes', options);
  }

  /**
   * Retrieve details of a single conversations inbox using the inbox ID.
   *
   * @example
   * ```ts
   * const publicInbox = await client.conversations.inboxes.get(
   *   'inboxId',
   * );
   * ```
   */
  get(inboxID: string, options?: RequestOptions): APIPromise<ConversationsAPI.PublicInbox> {
    return this._client.get(path`/conversations/v3/conversations/inboxes/${inboxID}`, options);
  }
}
