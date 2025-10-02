// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings, ThrottlingSettings } from './settings';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions/subscriptions';

export class V3 extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

V3.Subscriptions = Subscriptions;

export declare namespace V3 {
  export {
    type Settings as Settings,
    type ThrottlingSettings as ThrottlingSettings,
    type SettingUpdateParams as SettingUpdateParams,
  };

  export {
    Subscriptions as Subscriptions,
    type Subscription as Subscription,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
