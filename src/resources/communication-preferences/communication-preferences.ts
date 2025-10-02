// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3/v3';
import {
  MarketingSubscriptionsV3PublicSubscriptionStatus,
  MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest,
  V3,
  V3RetrieveDefinitionsResponse,
  V3SubscribeParams,
  V3UnsubscribeParams,
} from './v3/v3';
import * as V4API from './v4/v4';
import {
  MarketingSubscriptionsSubscriptionDefinition,
  V4,
  V4RetrieveDefinitionsParams,
  V4RetrieveDefinitionsResponse,
} from './v4/v4';

export class CommunicationPreferences extends APIResource {
  v4: V4API.V4 = new V4API.V4(this._client);
  v3: V3API.V3 = new V3API.V3(this._client);
}

CommunicationPreferences.V4 = V4;
CommunicationPreferences.V3 = V3;

export declare namespace CommunicationPreferences {
  export {
    V4 as V4,
    type MarketingSubscriptionsSubscriptionDefinition as MarketingSubscriptionsSubscriptionDefinition,
    type V4RetrieveDefinitionsResponse as V4RetrieveDefinitionsResponse,
    type V4RetrieveDefinitionsParams as V4RetrieveDefinitionsParams,
  };

  export {
    V3 as V3,
    type MarketingSubscriptionsV3PublicSubscriptionStatus as MarketingSubscriptionsV3PublicSubscriptionStatus,
    type MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest as MarketingSubscriptionsV3PublicUpdateSubscriptionStatusRequest,
    type V3RetrieveDefinitionsResponse as V3RetrieveDefinitionsResponse,
    type V3SubscribeParams as V3SubscribeParams,
    type V3UnsubscribeParams as V3UnsubscribeParams,
  };
}
