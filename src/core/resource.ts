// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hubspot } from '../client';

export abstract class APIResource {
  protected _client: Hubspot;

  constructor(client: Hubspot) {
    this._client = client;
  }
}
