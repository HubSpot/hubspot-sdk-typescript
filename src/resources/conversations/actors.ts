// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actors extends APIResource {
  /**
   * Resolve a set of `ActorId`s to the underlying actors/participants.
   *
   * @example
   * ```ts
   * const batchResponsePublicActor =
   *   await client.conversations.actors.batchRead({
   *     inputs: ['string'],
   *   });
   * ```
   */
  batchRead(
    params: ActorBatchReadParams,
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.BatchResponsePublicActor> {
    const { property, ...body } = params;
    return this._client.post('/conversations/v3/conversations/actors/batch/read', {
      query: { property },
      body,
      ...options,
    });
  }

  /**
   * Retrieve details of a single actor using the actor ID.
   *
   * @example
   * ```ts
   * const publicActor = await client.conversations.actors.get(
   *   'actorId',
   * );
   * ```
   */
  get(
    actorID: string,
    query: ActorGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationsAPI.PublicActor> {
    return this._client.get(path`/conversations/v3/conversations/actors/${actorID}`, { query, ...options });
  }
}

export interface ActorBatchReadParams {
  /**
   * Body param: Strings to input.
   */
  inputs: Array<string>;

  /**
   * Query param: A specific property to include in the actor response.
   */
  property?: string;
}

export interface ActorGetParams {
  /**
   * A specific property to include in the actor response.
   */
  property?: string;
}

export declare namespace Actors {
  export { type ActorBatchReadParams as ActorBatchReadParams, type ActorGetParams as ActorGetParams };
}
