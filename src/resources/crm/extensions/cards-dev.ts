// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCardsDev extends APIResource {
  static override readonly _key: readonly ['crm', 'extensions', 'cardsDev'] = Object.freeze([
    'crm',
    'extensions',
    'cardsDev',
  ] as const);

  /**
   * Defines a new card that will become active on an account when this app is
   * installed.
   */
  create(
    appID: number,
    body: CardsDevCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicCardResponse> {
    return this._client.post(path`/crm/extensions/cards-dev/2026-03/${appID}`, { body, ...options });
  }

  /**
   * Update a card definition with new details.
   */
  update(
    cardID: string,
    params: CardsDevUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicCardResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/crm/extensions/cards-dev/2026-03/${appId}/${cardID}`, {
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a card definition with the given ID. Once deleted, data
   * fetch requests for this card will no longer be sent to your service. This can't
   * be undone.
   */
  delete(cardID: string, params: CardsDevDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId } = params;
    return this._client.delete(path`/crm/extensions/cards-dev/2026-03/${appId}/${cardID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of cards for a given app.
   */
  get(appID: number, options?: RequestOptions): APIPromise<PublicCardListResponse> {
    return this._client.get(path`/crm/extensions/cards-dev/2026-03/${appID}`, options);
  }

  /**
   * Returns the definition for a card with the given ID.
   */
  getByID(
    cardID: string,
    params: CardsDevGetByIDParams,
    options?: RequestOptions,
  ): APIPromise<PublicCardResponse> {
    const { appId } = params;
    return this._client.get(path`/crm/extensions/cards-dev/2026-03/${appId}/${cardID}`, options);
  }

  /**
   * Returns an example card detail response. This is the payload with displayed
   * details for a card that will be shown to a user. An app should send this in
   * response to the data fetch request.
   */
  getSampleResponse(options?: RequestOptions): APIPromise<IntegratorCardPayloadResponse> {
    return this._client.get('/crm/extensions/cards-dev/2026-03/sample-response', options);
  }

  migrateViews(
    appID: number,
    body: CardsDevMigrateViewsParams,
    options?: RequestOptions,
  ): APIPromise<CardMigrateViewsResponse> {
    return this._client.post(path`/crm/extensions/cards-dev/2026-03/${appID}/views/migrate`, {
      body,
      ...options,
    });
  }
}
export class CardsDev extends BaseCardsDev {}

export interface ActionConfirmationBody {
  /**
   * The label for the button that cancels the action.
   */
  cancelButtonLabel: string;

  /**
   * The label for the button that confirms the action.
   */
  confirmButtonLabel: string;

  /**
   * The message displayed to the user to confirm the action.
   */
  prompt: string;
}

export interface ActionHookActionBody {
  /**
   * The HTTP method to be used when making the call, which can be set to GET, POST,
   * PUT, DELETE, or PATCH. If using GET or DELETE
   */
  httpMethod: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

  /**
   * A list of property names that will be included on the action. See the
   * documentation for more information
   */
  propertyNamesIncluded: Array<string>;

  /**
   * The type of status.
   */
  type: 'ACTION_HOOK';

  /**
   * The URL endpoint that will be called when the action is triggered.
   */
  url: string;

  confirmation?: ActionConfirmationBody;

  /**
   * The label for this property as you'd like it displayed to users.
   */
  label?: string;
}

export interface CardActions {
  /**
   * A list of URL prefixes that will be accepted for card action URLs. If your data
   * fetch response includes an action URL that doesn't begin with one of these
   * values, it will result in an error and the card will not be displayed.
   */
  baseUrls: Array<string>;
}

export interface CardAuditResponse {
  /**
   * The type of action performed, with possible values: CREATE, DELETE, UPDATE.
   */
  actionType: 'CREATE' | 'DELETE' | 'UPDATE';

  /**
   * The ID of the application associated with the card.
   */
  applicationId: number;

  /**
   * The source of authentication for the action, with possible values: APP,
   * EXTERNAL, INTERNAL.
   */
  authSource: 'APP' | 'EXTERNAL' | 'INTERNAL';

  /**
   * The timestamp indicating when the change occurred.
   */
  changedAt: number;

  /**
   * The ID of the user who initiated the action.
   */
  initiatingUserId: number;

  /**
   * The ID of the card.
   */
  objectTypeId: number;
}

export interface CardCreateRequest {
  actions: CardActions;

  display: CardDisplayBody;

  fetch: CardFetchBody;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title: string;
}

export interface CardDisplayBody {
  /**
   * Card display properties. These will will be rendered as "label : value" pairs in
   * the card UI. See the [example card](#) in the overview docs for more details.
   */
  properties: Array<CardDisplayProperty>;
}

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

export interface CardFetchBody {
  /**
   * A deprecated field to determine the type of card returned.
   */
  cardType: 'EXTERNAL' | 'SERVERLESS';

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

  /**
   * A deprecated field to specify serverless functionality with the card
   */
  serverlessFunction?: string;
}

export interface CardFetchBodyPatch {
  /**
   * An array of CRM object types where this card should be displayed. HubSpot will
   * call your target URL whenever a user visits a record page of the types defined
   * here.
   */
  objectTypes: Array<CardObjectTypeBody>;

  /**
   * A deprecated field to determine the type of card returned.
   */
  cardType?: 'EXTERNAL' | 'SERVERLESS';

  /**
   * A deprecated field to specify serverless functionality with the card
   */
  serverlessFunction?: string;

  /**
   * URL to a service endpoint that will respond with details for this card. HubSpot
   * will call this endpoint each time a user visits a CRM record page where this
   * card should be displayed.
   */
  targetUrl?: string;
}

export interface CardMigrateViewsRequest {
  appCardId: number;

  legacyCrmCardId: number;

  helpdeskAppCardId?: number;
}

export interface CardMigrateViewsResponse {
  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate
   */
  message: string;
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

export interface CardPatchRequest {
  actions?: CardActions;

  display?: CardDisplayBody;

  fetch?: CardFetchBodyPatch;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title?: string;
}

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
  /**
   * The height of the iframe in pixels.
   */
  height: number;

  /**
   * A list of property names that will be included on the url of the iframe.
   */
  propertyNamesIncluded: Array<string>;

  /**
   * The type of status.
   */
  type: 'IFRAME';

  /**
   * The URL endpoint that will be loaded in the iframe when triggered.
   */
  url: string;

  /**
   * The width of the iframe in pixels.
   */
  width: number;

  /**
   * The label for this property as you'd like it displayed to users.
   */
  label?: string;
}

export interface IntegratorCardPayloadResponse {
  /**
   * The number version of the response.
   */
  responseVersion: 'v1' | 'v3';

  /**
   * A list of up to five valid card sub categories.
   */
  sections: Array<IntegratorObjectResult>;

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

  topLevelActions?: TopLevelActions;
}

export interface IntegratorObjectResult {
  /**
   * The unique identifier for the card.
   */
  id: string;

  /**
   * A list of actions associated with the card, which can include action hooks,
   * confirmation action hooks, or iframes.
   */
  actions: Array<ActionHookActionBody | IFrameActionBody>;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title: string;

  /**
   * A collection of tokens representing specific properties related to the card.
   */
  tokens: Array<ObjectToken>;

  /**
   * A URL used on the title of the card
   */
  linkUrl?: string;
}

export interface ObjectToken {
  /**
   * The value of the property
   */
  value: string;

  /**
   * Type of data represented by this property.
   */
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

  /**
   * The label for this property as you'd like it displayed to users.
   */
  label?: string;

  /**
   * An internal identifier for this property. This value must be unique TODO.
   */
  name?: string;
}

export interface PublicCardFetchBody {
  /**
   * An array of CRM object types where this card should be displayed. HubSpot will
   * call your target URL whenever a user visits a record page of the types defined
   * here.
   */
  objectTypes: Array<CardObjectTypeBody>;

  /**
   * URL to a service endpoint that will respond with details for this card. HubSpot
   * will call this endpoint each time a user visits a CRM record page where this
   * card should be displayed.
   */
  targetUrl: string;
}

export interface PublicCardListResponse {
  /**
   * A list of card responses
   */
  results: Array<PublicCardResponse>;
}

export interface PublicCardResponse {
  /**
   * The unique id of the card.
   */
  id: string;

  actions: CardActions;

  /**
   * A list of actions performed on the card, including creation, deletion, and
   * updates.
   */
  auditHistory: Array<CardAuditResponse>;

  display: CardDisplayBody;

  fetch: PublicCardFetchBody;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title: string;

  /**
   * The date and time when the card was created.
   */
  createdAt?: string;

  /**
   * The date and time when the card was last updated.
   */
  updatedAt?: string;
}

export interface TopLevelActions {
  /**
   * Specifies a list of secondary actions for a card, each of which can be an action
   * hook or an iframe.
   */
  secondary: Array<ActionHookActionBody | IFrameActionBody>;

  /**
   * Defines the primary action for a card, which can be either an action hook or an
   * iframe.
   */
  primary?: ActionHookActionBody | IFrameActionBody;

  settings?: IFrameActionBody;
}

export interface CardsDevCreateParams {
  actions: CardActions;

  display: CardDisplayBody;

  fetch: CardFetchBody;

  /**
   * The top-level title for this card. Displayed to users in the CRM UI.
   */
  title: string;
}

export interface CardsDevUpdateParams {
  /**
   * Path param
   */
  appId: number;

  /**
   * Body param
   */
  actions?: CardActions;

  /**
   * Body param
   */
  display?: CardDisplayBody;

  /**
   * Body param
   */
  fetch?: CardFetchBodyPatch;

  /**
   * Body param: The top-level title for this card. Displayed to users in the CRM UI.
   */
  title?: string;
}

export interface CardsDevDeleteParams {
  appId: number;
}

export interface CardsDevGetByIDParams {
  appId: number;
}

export interface CardsDevMigrateViewsParams {
  appCardId: number;

  legacyCrmCardId: number;

  helpdeskAppCardId?: number;
}

export declare namespace CardsDev {
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
    type CardMigrateViewsRequest as CardMigrateViewsRequest,
    type CardMigrateViewsResponse as CardMigrateViewsResponse,
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
    type CardsDevCreateParams as CardsDevCreateParams,
    type CardsDevUpdateParams as CardsDevUpdateParams,
    type CardsDevDeleteParams as CardsDevDeleteParams,
    type CardsDevGetByIDParams as CardsDevGetByIDParams,
    type CardsDevMigrateViewsParams as CardsDevMigrateViewsParams,
  };
}
