// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailsAPI from '../marketing/emails';

export class Info extends APIResource {}

export interface AccountInfoAPIUsage {
  collectedAt: string;

  currentUsage: number;

  fetchStatus: 'SUCCESS' | 'TIMEOUT' | 'FAILURE' | 'CACHED' | 'NOTFOUND';

  name: string;

  usageLimit: number;

  resetsAt?: string;
}

export interface AccountInfoCollectionResponseAPIUsage {
  results: Array<AccountInfoAPIUsage>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface AccountInfoPortalInformationResponse {
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
    type AccountInfoAPIUsage as AccountInfoAPIUsage,
    type AccountInfoCollectionResponseAPIUsage as AccountInfoCollectionResponseAPIUsage,
    type AccountInfoPortalInformationResponse as AccountInfoPortalInformationResponse,
  };
}
