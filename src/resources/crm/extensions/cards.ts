// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cards extends APIResource {
  /**
   * Defines a new card that will become active on an account when this app is
   * installed.
   *
   * @example
   * ```ts
   * const publicCardResponse = await client.crm.extensions.cards.create(0, {
   *   actions: { baseUrls: ['https://www.example.com/hubspot'] },
   *   display: {
   *     properties: [
   *       { ... },
   *     ],
   *   },
   *   fetch: {
   *     objectTypes: [
   *       { ... },
   *     ],
   *     targetUrl: 'https://www.example.com/hubspot/target',
   *   },
   *   title: 'PetSpot',
   * });
   * ```
   */
  create(appID: number, body: CardCreateParams, options?: RequestOptions): APIPromise<PublicCardResponse> {
    return this._client.post(path`/crm/v3/extensions/cards-dev/${appID}`, { body, ...options });
  }

  /**
   * Update a card definition with new details.
   *
   * @example
   * ```ts
   * const publicCardResponse =
   *   await client.crm.extensions.cards.update('cardId', {
   *     appId: 0,
   *   });
   * ```
   */
  update(cardID: string, params: CardUpdateParams, options?: RequestOptions): APIPromise<PublicCardResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/crm/v3/extensions/cards-dev/${appId}/${cardID}`, { body, ...options });
  }

  /**
   * Returns a list of cards for a given app.
   *
   * @example
   * ```ts
   * const publicCardListResponse =
   *   await client.crm.extensions.cards.list(0);
   * ```
   */
  list(appID: number, options?: RequestOptions): APIPromise<PublicCardListResponse> {
    return this._client.get(path`/crm/v3/extensions/cards-dev/${appID}`, options);
  }

  /**
   * Permanently deletes a card definition with the given ID. Once deleted, data
   * fetch requests for this card will no longer be sent to your service. This can't
   * be undone.
   *
   * @example
   * ```ts
   * await client.crm.extensions.cards.delete('cardId', {
   *   appId: 0,
   * });
   * ```
   */
  delete(cardID: string, params: CardDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/crm/v3/extensions/cards-dev/${appId}/${cardID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the definition for a card with the given ID.
   *
   * @example
   * ```ts
   * const publicCardResponse =
   *   await client.crm.extensions.cards.get('cardId', {
   *     appId: 0,
   *   });
   * ```
   */
  get(cardID: string, params: CardGetParams, options?: RequestOptions): APIPromise<PublicCardResponse> {
    const { appId } = params;
    return this._client.get(path`/crm/v3/extensions/cards-dev/${appId}/${cardID}`, options);
  }

  /**
   * Returns an example card detail response. This is the payload with displayed
   * details for a card that will be shown to a user. An app should send this in
   * response to the data fetch request.
   *
   * @example
   * ```ts
   * const integratorCardPayloadResponse =
   *   await client.crm.extensions.cards.getSampleResponse();
   * ```
   */
  getSampleResponse(options?: RequestOptions): APIPromise<IntegratorCardPayloadResponse> {
    return this._client.get('/crm/v3/extensions/cards-dev/sample-response', options);
  }
}

export interface ActionConfirmationBody {
  cancelButtonLabel: string;

  confirmButtonLabel: string;

  prompt: string;
}

export interface ActionHookActionBody {
  httpMethod: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

  propertyNamesIncluded: Array<string>;

  type: 'ACTION_HOOK';

  url: string;

  confirmation?: ActionConfirmationBody;

  label?: string;
}

/**
 * Configuration for custom user actions on cards.
 */
export interface CardActions {
  /**
   * A list of URL prefixes that will be accepted for card action URLs. If your data
   * fetch response includes an action URL that doesn't begin with one of these
   * values, it will result in an error and the card will not be displayed.
   */
  baseUrls: Array<string>;
}

export interface CardAuditResponse {
  actionType: 'CREATE' | 'DELETE' | 'UPDATE';

  applicationId: number;

  authSource: 'APP' | 'EXTERNAL' | 'INTERNAL';

  changedAt: number;

  initiatingUserId: number;

  objectTypeId: number;
}

/**
 * State of card definition to be created
 */
export interface CardCreateRequest {
  /**
   * Configuration for custom user actions on cards.
   */
  actions: CardActions;

  /**
   * Configuration for displayed info on a card
   */
  display: CardDisplayBody;

  /**
   * Configuration for this card's data fetch request.
   */
  fetch: CardFetchBody;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title: string;
}

/**
 * Configuration for displayed info on a card
 */
export interface CardDisplayBody {
  /**
   * Card display properties. These will will be rendered as "label : value" pairs in
   * the card UI. See the [example card](#) in the overview docs for more details.
   */
  properties: Array<CardDisplayProperty>;
}

/**
 * Definition for a card display property.
 */
export interface CardDisplayProperty {
  /**
   * Type of data represented by this property.
   */
  dataType: 'BOOLEAN' | 'CURRENCY' | 'DATE' | 'DATETIME' | 'EMAIL' | 'LINK' | 'NUMERIC' | 'STATUS' | 'STRING';

  /**
   * The label for this property as you'd like it displayed to users.
   */
  label: string;

  /**
   * An internal identifier for this property. This value must be unique TODO.
   */
  name: string;

  /**
   * An array of available options that can be displayed. Only used in when
   * `dataType` is `STATUS`.
   */
  options: Array<DisplayOption>;
}

/**
 * Configuration for this card's data fetch request.
 */
export interface CardFetchBody {
  /**
   * An array of CRM object types where this card should be displayed. HubSpot will
   * call your data fetch URL whenever a user visits a record page of the types
   * defined here.
   */
  objectTypes: Array<CardObjectTypeBody>;

  /**
   * URL to a service endpoints that will respond with card details. HubSpot will
   * call this endpoint each time a user visits a CRM record page where this card
   * should be displayed.
   */
  targetUrl: string;

  cardType?: 'EXTERNAL' | 'SERVERLESS';

  serverlessFunction?: string;
}

/**
 * Variant of CardFetchBody with fields as optional for patches
 */
export interface CardFetchBodyPatch {
  /**
   * An array of CRM object types where this card should be displayed. HubSpot will
   * call your target URL whenever a user visits a record page of the types defined
   * here.
   */
  objectTypes: Array<CardObjectTypeBody>;

  cardType?: 'EXTERNAL' | 'SERVERLESS';

  serverlessFunction?: string;

  /**
   * URL to a service endpoint that will respond with details for this card. HubSpot
   * will call this endpoint each time a user visits a CRM record page where this
   * card should be displayed.
   */
  targetUrl?: string;
}

export interface CardObjectTypeBody {
  /**
   * A CRM object type where this card should be displayed.
   */
  name: 'companies' | 'contacts' | 'deals' | 'marketing_events' | 'tickets';

  /**
   * An array of properties that should be sent to this card's target URL when the
   * data fetch request is made. Must be valid properties for the corresponding CRM
   * object type.
   */
  propertiesToSend: Array<string>;
}

/**
 * Body for a patch with optional fields
 */
export interface CardPatchRequest {
  /**
   * Configuration for custom user actions on cards.
   */
  actions?: CardActions;

  /**
   * Configuration for displayed info on a card
   */
  display?: CardDisplayBody;

  /**
   * Variant of CardFetchBody with fields as optional for patches
   */
  fetch?: CardFetchBodyPatch;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title?: string;
}

/**
 * Option definition for STATUS dataTypes.
 */
export interface DisplayOption {
  /**
   * The text that will be displayed to users for this option.
   */
  label: string;

  /**
   * JSON-friendly unique name for option.
   */
  name: string;

  /**
   * The type of status.
   */
  type: 'DANGER' | 'DEFAULT' | 'INFO' | 'SUCCESS' | 'WARNING';
}

export interface IFrameActionBody {
  height: number;

  propertyNamesIncluded: Array<string>;

  type: 'IFRAME';

  url: string;

  width: number;

  label?: string;
}

/**
 * The card details payload, sent to HubSpot by an app in response to a data fetch
 * request when a user visits a CRM record page.
 */
export interface IntegratorCardPayloadResponse {
  /**
   * The total number of card properties that will be sent in this response.
   */
  totalCount: number;

  /**
   * URL to a page the integrator has built that displays all details for this card.
   * This URL will be displayed to users under a `See more [x]` link if there are
   * more than five items in your response, where `[x]` is the value of `itemLabel`.
   */
  allItemsLinkUrl?: string;

  /**
   * The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets').
   * If not provided, this falls back to the card's title.
   */
  cardLabel?: string;

  responseVersion?: 'v1' | 'v3';

  /**
   * A list of up to five valid card sub categories.
   */
  sections?: Array<IntegratorObjectResult>;

  topLevelActions?: TopLevelActions;
}

export interface IntegratorObjectResult {
  id: string;

  actions: Array<ActionHookActionBody | IFrameActionBody>;

  title: string;

  tokens: Array<ObjectToken>;

  linkUrl?: string;
}

export interface ObjectToken {
  value: string;

  dataType?:
    | 'BOOLEAN'
    | 'CURRENCY'
    | 'DATE'
    | 'DATETIME'
    | 'EMAIL'
    | 'LINK'
    | 'NUMERIC'
    | 'STATUS'
    | 'STRING';

  label?: string;

  name?: string;
}

export interface PublicCardFetchBody {
  objectTypes: Array<CardObjectTypeBody>;

  targetUrl: string;
}

export interface PublicCardListResponse {
  results: Array<PublicCardResponse>;
}

export interface PublicCardResponse {
  id: string;

  /**
   * Configuration for custom user actions on cards.
   */
  actions: CardActions;

  auditHistory: Array<CardAuditResponse>;

  /**
   * Configuration for displayed info on a card
   */
  display: CardDisplayBody;

  fetch: PublicCardFetchBody;

  title: string;

  createdAt?: string;

  updatedAt?: string;
}

export interface TopLevelActions {
  secondary: Array<ActionHookActionBody | IFrameActionBody>;

  primary?: ActionHookActionBody | IFrameActionBody;

  settings?: IFrameActionBody;
}

export interface CardCreateParams {
  /**
   * Configuration for custom user actions on cards.
   */
  actions: CardActions;

  /**
   * Configuration for displayed info on a card
   */
  display: CardDisplayBody;

  /**
   * Configuration for this card's data fetch request.
   */
  fetch: CardFetchBody;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title: string;
}

export interface CardUpdateParams {
  /**
   * Path param: The ID of the target app.
   */
  appId: number;

  /**
   * Body param: Configuration for custom user actions on cards.
   */
  actions?: CardActions;

  /**
   * Body param: Configuration for displayed info on a card
   */
  display?: CardDisplayBody;

  /**
   * Body param: Variant of CardFetchBody with fields as optional for patches
   */
  fetch?: CardFetchBodyPatch;

  /**
   * Body param: The top-level title for this card. Displayed to users in the CRM UI.
   */
  title?: string;
}

export interface CardDeleteParams {
  /**
   * The ID of the target app.
   */
  appId: number;
}

export interface CardGetParams {
  /**
   * The ID of the target app.
   */
  appId: number;
}

export declare namespace Cards {
  export {
    type ActionConfirmationBody as ActionConfirmationBody,
    type ActionHookActionBody as ActionHookActionBody,
    type CardActions as CardActions,
    type CardAuditResponse as CardAuditResponse,
    type CardCreateRequest as CardCreateRequest,
    type CardDisplayBody as CardDisplayBody,
    type CardDisplayProperty as CardDisplayProperty,
    type CardFetchBody as CardFetchBody,
    type CardFetchBodyPatch as CardFetchBodyPatch,
    type CardObjectTypeBody as CardObjectTypeBody,
    type CardPatchRequest as CardPatchRequest,
    type DisplayOption as DisplayOption,
    type IFrameActionBody as IFrameActionBody,
    type IntegratorCardPayloadResponse as IntegratorCardPayloadResponse,
    type IntegratorObjectResult as IntegratorObjectResult,
    type ObjectToken as ObjectToken,
    type PublicCardFetchBody as PublicCardFetchBody,
    type PublicCardListResponse as PublicCardListResponse,
    type PublicCardResponse as PublicCardResponse,
    type TopLevelActions as TopLevelActions,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardDeleteParams as CardDeleteParams,
    type CardGetParams as CardGetParams,
  };
}
