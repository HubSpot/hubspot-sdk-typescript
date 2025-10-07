// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { HubSpotError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type HubSpot } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: HubSpot;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: HubSpot, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new HubSpotError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: HubSpot,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface CursorURLPageResponse<Item> {
  results: Array<Item>;

  paging: CursorURLPageResponse.Paging;
}

export namespace CursorURLPageResponse {
  export interface Paging {
    next?: Paging.Next;
  }

  export namespace Paging {
    export interface Next {
      link?: string;
    }
  }
}

export interface CursorURLPageParams {
  limit?: number;
}

export class CursorURLPage<Item> extends AbstractPage<Item> implements CursorURLPageResponse<Item> {
  results: Array<Item>;

  paging: CursorURLPageResponse.Paging;

  constructor(
    client: HubSpot,
    response: Response,
    body: CursorURLPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.results = body.results || [];
    this.paging = body.paging || {};
  }

  getPaginatedItems(): Item[] {
    return this.results ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const urlString = this.paging?.next?.link;
    if (!urlString) return null;

    const url = new URL(urlString);

    // ensure all of the query params that we used for the last request are also included
    // in the next request
    const params = [...Object.entries(this.options.query || {}), ...url.searchParams.entries()];
    for (const [key, value] of params) {
      url.searchParams.set(key, value as any);
    }

    return {
      ...this.options,
      path: url.toString(),
      query: undefined,
    };
  }
}
