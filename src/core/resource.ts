// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { HubSpot } from '../client';

export abstract class APIResource {
  protected _client: HubSpot;

  constructor(client: HubSpot) {
    this._client = client;
  }
}
