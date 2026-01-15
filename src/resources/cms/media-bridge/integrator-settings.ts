// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MediaBridgeAPI from './media-bridge';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IntegratorSettings extends APIResource {
  /**
   * Create a new media object type
   *
   * @example
   * ```ts
   * const bulkIntegratorObjectCreationResponse =
   *   await client.cms.mediaBridge.integratorSettings.createObjectDefinition(
   *     0,
   *     { mediaTypes: ['VIDEO'] },
   *   );
   * ```
   */
  createObjectDefinition(
    appID: number,
    body: IntegratorSettingCreateObjectDefinitionParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.BulkIntegratorObjectCreationResponse> {
    return this._client.post(path`/media-bridge/v1/${appID}/settings/object-definitions`, {
      body,
      ...options,
    });
  }

  /**
   * Set up a new oEmbed domain for your media bridge app.
   *
   * @example
   * ```ts
   * const integratorOEmbedDomainModel =
   *   await client.cms.mediaBridge.integratorSettings.createOembedDomain(
   *     0,
   *     {
   *       endpoints: {
   *         discovery: true,
   *         schemes: ['string'],
   *         url: 'url',
   *       },
   *     },
   *   );
   * ```
   */
  createOembedDomain(
    appID: number,
    body: IntegratorSettingCreateOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.IntegratorOEmbedDomainModel> {
    return this._client.post(path`/media-bridge/v1/${appID}/settings/oembed-domains`, { body, ...options });
  }

  /**
   * Delete an existing oEmbed domain.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.integratorSettings.deleteOembedDomain(
   *   0,
   * );
   * ```
   */
  deleteOembedDomain(
    appID: number,
    params: IntegratorSettingDeleteOembedDomainParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, domainPortalId } = params ?? {};
    return this._client.delete(path`/media-bridge/v1/${appID}/settings/oembed-domains`, {
      query: { id, domainPortalId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the visibility settings for media bridge events for your apps.
   *
   * @example
   * ```ts
   * const eventVisibilityResponse =
   *   await client.cms.mediaBridge.integratorSettings.getEventVisibilitySettings(
   *     0,
   *   );
   * ```
   */
  getEventVisibilitySettings(
    appID: number,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.EventVisibilityResponse> {
    return this._client.get(path`/media-bridge/v1/${appID}/settings/event-visibility`, options);
  }

  /**
   * Get the existing objects types that belong to the specified media type.
   *
   * @example
   * ```ts
   * const objectDefinitionResponse =
   *   await client.cms.mediaBridge.integratorSettings.getObjectDefinitionsByMediaType(
   *     'AUDIO',
   *     { appId: 0 },
   *   );
   * ```
   */
  getObjectDefinitionsByMediaType(
    mediaType: 'AUDIO' | 'DOCUMENT' | 'IMAGE' | 'OTHER' | 'VIDEO',
    params: IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.ObjectDefinitionResponse> {
    const { appId, ...query } = params;
    return this._client.get(path`/media-bridge/v1/${appId}/settings/object-definitions/${mediaType}`, {
      query,
      ...options,
    });
  }

  /**
   * Get the details for an existing oEmbed domain.
   *
   * @example
   * ```ts
   * const integratorOEmbedDomainModel =
   *   await client.cms.mediaBridge.integratorSettings.getOembedDomain(
   *     'oEmbedDomainId',
   *     { appId: 0 },
   *   );
   * ```
   */
  getOembedDomain(
    oEmbedDomainID: string,
    params: IntegratorSettingGetOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.IntegratorOEmbedDomainModel> {
    const { appId } = params;
    return this._client.get(
      path`/media-bridge/v1/${appId}/settings/oembed-domains/${oEmbedDomainID}`,
      options,
    );
  }

  /**
   * Get the details for existing oEmbed domains for your app
   *
   * @example
   * ```ts
   * const oEmbedDomainsCollectionResponse =
   *   await client.cms.mediaBridge.integratorSettings.listOembedDomains(
   *     0,
   *   );
   * ```
   */
  listOembedDomains(
    appID: number,
    query: IntegratorSettingListOembedDomainsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.OEmbedDomainsCollectionResponse> {
    return this._client.get(path`/media-bridge/v1/${appID}/settings/oembed-domains`, { query, ...options });
  }

  /**
   * Register the name that your app will display when a user is selecting media
   * bridge items.
   *
   * @deprecated
   */
  registerAppName(
    appID: number,
    body: IntegratorSettingRegisterAppNameParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.MediaBridgeProviderRegistrationResponse> {
    return this._client.post(path`/media-bridge/v1/${appID}/settings/register`, { body, ...options });
  }

  /**
   * Update the name that your app will display when a user is selecting media bridge
   * items.
   *
   * @example
   * ```ts
   * const mediaBridgeProviderRegistrationResponse =
   *   await client.cms.mediaBridge.integratorSettings.updateAppName(
   *     0,
   *     { updatedAt: 0 },
   *   );
   * ```
   */
  updateAppName(
    appID: number,
    body: IntegratorSettingUpdateAppNameParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.MediaBridgeProviderRegistrationResponse> {
    return this._client.put(path`/media-bridge/v1/${appID}/settings`, { body, ...options });
  }

  /**
   * Set the visibility settings for media bridge events created by your app.
   *
   * @example
   * ```ts
   * const eventVisibilityChange =
   *   await client.cms.mediaBridge.integratorSettings.updateEventVisibilitySettings(
   *     0,
   *     { eventType: 'ALL', updatedAt: 0 },
   *   );
   * ```
   */
  updateEventVisibilitySettings(
    appID: number,
    body: IntegratorSettingUpdateEventVisibilitySettingsParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.EventVisibilityChange> {
    return this._client.patch(path`/media-bridge/v1/${appID}/settings/event-visibility`, {
      body,
      ...options,
    });
  }

  /**
   * Update an existing oEmbed domain.
   *
   * @example
   * ```ts
   * const integratorOEmbedDomainModel =
   *   await client.cms.mediaBridge.integratorSettings.updateOembedDomain(
   *     'oEmbedDomainId',
   *     {
   *       appId: 0,
   *       endpoints: {
   *         discovery: true,
   *         schemes: ['string'],
   *         url: 'url',
   *       },
   *     },
   *   );
   * ```
   */
  updateOembedDomain(
    oEmbedDomainID: string,
    params: IntegratorSettingUpdateOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<MediaBridgeAPI.IntegratorOEmbedDomainModel> {
    const { appId, ...body } = params;
    return this._client.patch(path`/media-bridge/v1/${appId}/settings/oembed-domains/${oEmbedDomainID}`, {
      body,
      ...options,
    });
  }
}

export interface IntegratorSettingCreateObjectDefinitionParams {
  mediaTypes: Array<'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE'>;
}

export interface IntegratorSettingCreateOembedDomainParams {
  endpoints: MediaBridgeAPI.Endpoints;

  portalId?: number;
}

export interface IntegratorSettingDeleteOembedDomainParams {
  /**
   * The ID of the oEmbed to delete.
   */
  id?: number;

  /**
   * Filter response by Hub ID.
   */
  domainPortalId?: number;
}

export interface IntegratorSettingGetObjectDefinitionsByMediaTypeParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Query param: Include the full definition in the response.
   */
  includeFullDefinition?: boolean;
}

export interface IntegratorSettingGetOembedDomainParams {
  /**
   * The appId for the media bridge app. It is possible to have multiple apps in your
   * developer account that use the media bridge.
   */
  appId: number;
}

export interface IntegratorSettingListOembedDomainsParams {
  /**
   * Filter response by Hub ID.
   */
  domainPortalId?: number;
}

export interface IntegratorSettingRegisterAppNameParams {
  updatedAt: number;

  name?: string;
}

export interface IntegratorSettingUpdateAppNameParams {
  updatedAt: number;

  name?: string;
}

export interface IntegratorSettingUpdateEventVisibilitySettingsParams {
  eventType: 'ALL' | 'ATTENTION_SPAN' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT';

  updatedAt: number;

  showInReporting?: boolean;

  showInTimeline?: boolean;

  showInWorkflows?: boolean;
}

export interface IntegratorSettingUpdateOembedDomainParams {
  /**
   * Path param: The appId for the media bridge app. It is possible to have multiple
   * apps in your developer account that use the media bridge.
   */
  appId: number;

  /**
   * Body param
   */
  endpoints: MediaBridgeAPI.Endpoints;

  /**
   * Body param
   */
  portalId?: number;
}

export declare namespace IntegratorSettings {
  export {
    type IntegratorSettingCreateObjectDefinitionParams as IntegratorSettingCreateObjectDefinitionParams,
    type IntegratorSettingCreateOembedDomainParams as IntegratorSettingCreateOembedDomainParams,
    type IntegratorSettingDeleteOembedDomainParams as IntegratorSettingDeleteOembedDomainParams,
    type IntegratorSettingGetObjectDefinitionsByMediaTypeParams as IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
    type IntegratorSettingGetOembedDomainParams as IntegratorSettingGetOembedDomainParams,
    type IntegratorSettingListOembedDomainsParams as IntegratorSettingListOembedDomainsParams,
    type IntegratorSettingRegisterAppNameParams as IntegratorSettingRegisterAppNameParams,
    type IntegratorSettingUpdateAppNameParams as IntegratorSettingUpdateAppNameParams,
    type IntegratorSettingUpdateEventVisibilitySettingsParams as IntegratorSettingUpdateEventVisibilitySettingsParams,
    type IntegratorSettingUpdateOembedDomainParams as IntegratorSettingUpdateOembedDomainParams,
  };
}
