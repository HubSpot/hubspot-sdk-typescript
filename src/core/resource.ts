// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { HubspotSDK } from '../client';

export abstract class APIResource {
  protected _client: HubspotSDK;

  constructor(client: HubspotSDK) {
    this._client = client;
  }
}
