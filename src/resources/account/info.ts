// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailsAPI from '../marketing/emails';

export class Info extends APIResource {}

export interface APIUsage {
  collectedAt: string;

  currentUsage: number;

  fetchStatus: 'SUCCESS' | 'TIMEOUT' | 'FAILURE' | 'CACHED' | 'NOTFOUND';

  name: string;

  usageLimit: number;

  resetsAt?: string;
}

export interface CollectionResponseAPIUsage {
  results: Array<APIUsage>;

  paging?: EmailsAPI.Paging;
}

export interface PortalInformationResponse {
  accountType: 'STANDARD' | 'DEVELOPER_TEST' | 'SANDBOX' | 'APP_DEVELOPER';

  additionalCurrencies: Array<string>;

  companyCurrency: string;

  dataHostingLocation: string;

  portalId: number;

  timeZone: string;

  uiDomain: string;

  utcOffset: string;

  utcOffsetMilliseconds: number;
}

export declare namespace Info {
  export {
    type APIUsage as APIUsage,
    type CollectionResponseAPIUsage as CollectionResponseAPIUsage,
    type PortalInformationResponse as PortalInformationResponse,
  };
}
