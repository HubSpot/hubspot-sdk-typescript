// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
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
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.createObjectDefinition(
   *     'appId',
   *     { mediaTypes: ['VIDEO'] },
   *   );
   * ```
   */
  createObjectDefinition(
    appID: string,
    body: IntegratorSettingCreateObjectDefinitionParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingCreateObjectDefinitionResponse> {
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
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.createOembedDomain(
   *     'appId',
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
    appID: string,
    body: IntegratorSettingCreateOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingCreateOembedDomainResponse> {
    return this._client.post(path`/media-bridge/v1/${appID}/settings/oembed-domains`, { body, ...options });
  }

  /**
   * Delete an existing oEmbed domain.
   *
   * @example
   * ```ts
   * await client.cms.mediaBridge.integratorSettings.deleteOembedDomain(
   *   'appId',
   * );
   * ```
   */
  deleteOembedDomain(appID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/media-bridge/v1/${appID}/settings/oembed-domains`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the visibility settings for media bridge events for your apps.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.getEventVisibilitySettings(
   *     'appId',
   *   );
   * ```
   */
  getEventVisibilitySettings(
    appID: string,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingGetEventVisibilitySettingsResponse> {
    return this._client.get(path`/media-bridge/v1/${appID}/settings/event-visibility`, options);
  }

  /**
   * Get the existing objects types that belong to the specified media type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.getObjectDefinitionsByMediaType(
   *     'mediaType',
   *     { appId: 'appId' },
   *   );
   * ```
   */
  getObjectDefinitionsByMediaType(
    mediaType: string,
    params: IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingGetObjectDefinitionsByMediaTypeResponse> {
    const { appId } = params;
    return this._client.get(
      path`/media-bridge/v1/${appId}/settings/object-definitions/${mediaType}`,
      options,
    );
  }

  /**
   * Get the details for an existing oEmbed domain.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.getOembedDomain(
   *     'oEmbedDomainId',
   *     { appId: 'appId' },
   *   );
   * ```
   */
  getOembedDomain(
    oEmbedDomainID: string,
    params: IntegratorSettingGetOembedDomainParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingGetOembedDomainResponse> {
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
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.listOembedDomains(
   *     'appId',
   *   );
   * ```
   */
  listOembedDomains(
    appID: string,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingListOembedDomainsResponse> {
    return this._client.get(path`/media-bridge/v1/${appID}/settings/oembed-domains`, options);
  }

  /**
   * Register the name that your app will display when a user is selecting media
   * bridge items.
   *
   * @deprecated
   */
  registerAppName(
    appID: string,
    body: IntegratorSettingRegisterAppNameParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingRegisterAppNameResponse> {
    return this._client.post(path`/media-bridge/v1/${appID}/settings/register`, { body, ...options });
  }

  /**
   * Update the name that your app will display when a user is selecting media bridge
   * items.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.updateAppName(
   *     'appId',
   *     { updatedAt: 0 },
   *   );
   * ```
   */
  updateAppName(
    appID: string,
    body: IntegratorSettingUpdateAppNameParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingUpdateAppNameResponse> {
    return this._client.put(path`/media-bridge/v1/${appID}/settings`, { body, ...options });
  }

  /**
   * Set the visibility settings for media bridge events created by your app.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.updateEventVisibilitySettings(
   *     'appId',
   *     { eventType: 'ALL', updatedAt: 0 },
   *   );
   * ```
   */
  updateEventVisibilitySettings(
    appID: string,
    body: IntegratorSettingUpdateEventVisibilitySettingsParams,
    options?: RequestOptions,
  ): APIPromise<IntegratorSettingUpdateEventVisibilitySettingsResponse> {
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
   * const response =
   *   await client.cms.mediaBridge.integratorSettings.updateOembedDomain(
   *     'oEmbedDomainId',
   *     {
   *       appId: 'appId',
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
  ): APIPromise<IntegratorSettingUpdateOembedDomainResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/media-bridge/v1/${appId}/settings/oembed-domains/${oEmbedDomainID}`, {
      body,
      ...options,
    });
  }
}

export interface IntegratorSettingCreateObjectDefinitionResponse {
  createdObjects: { [key: string]: IntegratorSettingCreateObjectDefinitionResponse.CreatedObjects };
}

export namespace IntegratorSettingCreateObjectDefinitionResponse {
  export interface CreatedObjects {
    objectType: CreatedObjects.ObjectType;

    properties: Array<CreatedObjects.Property>;

    propertyGroups: Array<CreatedObjects.PropertyGroup>;
  }

  export namespace CreatedObjects {
    export interface ObjectType {
      id: number;

      allowsSensitiveProperties: boolean;

      createDatePropertyName: string;

      defaultSearchPropertyNames: Array<string>;

      deleted: boolean;

      fullyQualifiedName: string;

      hasCustomProperties: boolean;

      hasDefaultProperties: boolean;

      hasExternalObjectIds: boolean;

      hasOwners: boolean;

      hasPipelines: boolean;

      indexedForFiltersAndReports: boolean;

      lastModifiedPropertyName: string;

      metaType:
        | 'HUBSPOT'
        | 'INTEGRATION'
        | 'PORTAL_SPECIFIC'
        | 'CMS_HUBDB'
        | 'HUBSPOT_EVENT'
        | 'INTEGRATION_EVENT'
        | 'PORTAL_SPECIFIC_EVENT';

      metaTypeId: number;

      name: string;

      objectTypeId: string;

      permissioningType: string;

      pipelinePropertyName: string;

      pipelineStagePropertyName: string;

      requiredProperties: Array<string>;

      restorable: boolean;

      scopeMappings: Array<ObjectType.ScopeMapping>;

      secondaryDisplayLabelPropertyNames: Array<string>;

      accessScopeName?: string;

      createdAt?: number;

      description?: string;

      integrationAppId?: number;

      janusGroup?: string;

      ownerPortalId?: number;

      pipelineCloseDatePropertyName?: string;

      pipelineTimeToClosePropertyName?: string;

      pluralForm?: string;

      primaryDisplayLabelPropertyName?: string;

      readScopeName?: string;

      singularForm?: string;

      status?: string;

      visibility?: string;

      writeScopeName?: string;
    }

    export namespace ObjectType {
      export interface ScopeMapping {
        accessLevel: string;

        requestAction: string;

        scopeName: string;
      }
    }

    export interface Property {
      objectTypeId: string;

      /**
       * Defines a property
       */
      property: Shared.Property;

      calculationExpression?:
        | Property.CmsMediabridgeConstantBoolean
        | Property.CmsMediabridgeConstantNumber
        | Property.CmsMediabridgeConstantString
        | Property.CmsMediabridgeBooleanPropertyVariable
        | Property.CmsMediabridgeStringPropertyVariable
        | Property.CmsMediabridgeNumberPropertyVariable
        | Property.CmsMediabridgeTimestampOfPropertyVariable
        | Property.CmsMediabridgeBooleanTargetPropertyVariable
        | Property.CmsMediabridgeStringTargetPropertyVariable
        | Property.CmsMediabridgeNumberTargetPropertyVariable
        | Property.CmsMediabridgeTimestampOfTargetPropertyVariable
        | Property.CmsMediabridgeAddNumbers
        | Property.CmsMediabridgeSubtractNumbers
        | Property.CmsMediabridgeMultiplyNumbers
        | Property.CmsMediabridgeDivideNumbers
        | Property.CmsMediabridgeRoundDownNumbers
        | Property.CmsMediabridgeRoundUpNumbers
        | Property.CmsMediabridgeRoundNearestNumbers
        | Property.CmsMediabridgeUpperCase
        | Property.CmsMediabridgeLowerCase
        | Property.CmsMediabridgeConcatStrings
        | Property.CmsMediabridgeContains
        | Property.CmsMediabridgeBeginsWith
        | Property.CmsMediabridgeNumberToString
        | Property.CmsMediabridgeParseNumber
        | Property.CmsMediabridgeFetchExchangeRate
        | Property.CmsMediabridgeFetchCurrencyDecimalPlaces
        | Property.CmsMediabridgeFetchSingleCurrencyPortalCurrency
        | Property.CmsMediabridgeDatedExchangeRate
        | Property.CmsMediabridgePipelineProbability
        | Property.CmsMediabridgeMaxNumbers
        | Property.CmsMediabridgeMinNumbers
        | Property.CmsMediabridgeLessThan
        | Property.CmsMediabridgeLessThanOrEqual
        | Property.CmsMediabridgeMoreThan
        | Property.CmsMediabridgeMoreThanOrEqual
        | Property.CmsMediabridgeNumberEquals
        | Property.CmsMediabridgeStringEquals
        | Property.CmsMediabridgeIsPipelineStageClosed
        | Property.CmsMediabridgeNot
        | Property.CmsMediabridgeDate
        | Property.CmsMediabridgeMonth
        | Property.CmsMediabridgeYear
        | Property.CmsMediabridgeNow
        | Property.CmsMediabridgeTimeBetween
        | Property.CmsMediabridgePeriodToMonths
        | Property.CmsMediabridgePeriodToWeeks
        | Property.CmsMediabridgeAnd
        | Property.CmsMediabridgeOr
        | Property.CmsMediabridgeXor
        | Property.CmsMediabridgeIfString
        | Property.CmsMediabridgeIfNumber
        | Property.CmsMediabridgeIfBoolean
        | Property.CmsMediabridgeIsPresent
        | Property.CmsMediabridgeHasEmailReply
        | Property.CmsMediabridgeHasPlainTextEmailReply
        | Property.CmsMediabridgeExtractMostRecentEmailReplyHTML
        | Property.CmsMediabridgeExtractMostRecentEmailReplyText
        | Property.CmsMediabridgeExtractMostRecentPlainTextEmailReply
        | Property.CmsMediabridgeSetContainsString
        | Property.CmsMediabridgeIsEngagementType
        | Property.CmsMediabridgeFormatFullName
        | Property.CmsMediabridgeAbsoluteValue
        | Property.CmsMediabridgeSquareRoot
        | Property.CmsMediabridgePower
        | Property.CmsMediabridgeSubstring
        | Property.CmsMediabridgeEuler
        | Property.CmsMediabridgeStringLength
        | Property.CmsMediabridgeAddTime
        | Property.CmsMediabridgeSubtractTime;

      calculationFormula?: string;

      definitionSource?: Property.DefinitionSource;

      extensionData?: Property.ExtensionData;

      externalOptionsMetaData?: Property.ExternalOptionsMetaData;

      fulcrumPortalId?: number;

      fulcrumTimestamp?: number;

      janusGroup?: string;

      permission?: Property.Permission;

      propertyDefinitionSource?: Property.PropertyDefinitionSource;

      propertyRequirements?: Property.PropertyRequirements;

      rollupExpression?: Property.RollupExpression;
    }

    export namespace Property {
      export interface CmsMediabridgeConstantBoolean {
        operator: 'CONSTANT_BOOLEAN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeConstantNumber {
        operator: 'CONSTANT_NUMBER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeConstantString {
        operator: 'CONSTANT_STRING';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeBooleanPropertyVariable {
        operator: 'BOOLEAN_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeStringPropertyVariable {
        operator: 'STRING_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeNumberPropertyVariable {
        operator: 'NUMBER_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeTimestampOfPropertyVariable {
        operator: 'TIMESTAMP_OF_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeBooleanTargetPropertyVariable {
        operator: 'BOOLEAN_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeStringTargetPropertyVariable {
        operator: 'STRING_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeNumberTargetPropertyVariable {
        operator: 'NUMBER_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeTimestampOfTargetPropertyVariable {
        operator: 'TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeAddNumbers {
        enclosedInParentheses: boolean;

        operator: 'ADD_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSubtractNumbers {
        enclosedInParentheses: boolean;

        operator: 'SUBTRACT_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMultiplyNumbers {
        enclosedInParentheses: boolean;

        operator: 'MULTIPLY_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeDivideNumbers {
        enclosedInParentheses: boolean;

        operator: 'DIVIDE_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeRoundDownNumbers {
        operator: 'ROUND_DOWN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeRoundUpNumbers {
        operator: 'ROUND_UP';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeRoundNearestNumbers {
        operator: 'ROUND_NEAREST';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeUpperCase {
        operator: 'UPPER_CASE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeLowerCase {
        operator: 'LOWER_CASE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeConcatStrings {
        operator: 'CONCAT_STRINGS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeContains {
        operator: 'CONTAINS';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeBeginsWith {
        operator: 'BEGINS_WITH';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeNumberToString {
        operator: 'NUMBER_TO_STRING';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeParseNumber {
        operator: 'PARSE_NUMBER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeFetchExchangeRate {
        operator: 'FETCH_EXCHANGE_RATE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeFetchCurrencyDecimalPlaces {
        operator: 'FETCH_CURRENCY_DECIMAL_PLACES';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeFetchSingleCurrencyPortalCurrency {
        operator: 'FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeDatedExchangeRate {
        operator: 'DATED_EXCHANGE_RATE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePipelineProbability {
        operator: 'PIPELINE_PROBABILITY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMaxNumbers {
        operator: 'MAX_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMinNumbers {
        operator: 'MIN_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeLessThan {
        operator: 'LESS_THAN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeLessThanOrEqual {
        operator: 'LESS_THAN_OR_EQUAL';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeMoreThan {
        operator: 'MORE_THAN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeMoreThanOrEqual {
        operator: 'MORE_THAN_OR_EQUAL';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeNumberEquals {
        operator: 'NUMBER_EQUALS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeStringEquals {
        operator: 'STRING_EQUALS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIsPipelineStageClosed {
        operator: 'IS_PIPELINE_STAGE_CLOSED';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeNot {
        operator: 'NOT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeDate {
        operator: 'DATE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMonth {
        operator: 'MONTH';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeYear {
        operator: 'YEAR';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeNow {
        operator: 'NOW';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeTimeBetween {
        operator: 'TIME_BETWEEN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePeriodToMonths {
        operator: 'PERIOD_TO_MONTHS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePeriodToWeeks {
        operator: 'PERIOD_TO_WEEKS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeAnd {
        enclosedInParentheses: boolean;

        operator: 'AND';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeOr {
        enclosedInParentheses: boolean;

        operator: 'OR';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeXor {
        enclosedInParentheses: boolean;

        operator: 'XOR';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIfString {
        enclosedInParentheses: boolean;

        ifExpression: unknown;

        operator: 'IF_STRING';

        elseExpression?: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeIfNumber {
        enclosedInParentheses: boolean;

        ifExpression: unknown;

        operator: 'IF_NUMBER';

        elseExpression?: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeIfBoolean {
        enclosedInParentheses: boolean;

        ifExpression: unknown;

        operator: 'IF_BOOLEAN';

        elseExpression?: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIsPresent {
        expressionToEvaluate: unknown;

        operator: 'IS_PRESENT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeHasEmailReply {
        operator: 'HAS_EMAIL_REPLY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeHasPlainTextEmailReply {
        operator: 'HAS_PLAIN_TEXT_EMAIL_REPLY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeExtractMostRecentEmailReplyHTML {
        operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeExtractMostRecentEmailReplyText {
        operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeExtractMostRecentPlainTextEmailReply {
        operator: 'EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeSetContainsString {
        operator: 'SET_CONTAINS_STRING';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIsEngagementType {
        operator: 'IS_ENGAGEMENT_TYPE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeFormatFullName {
        operator: 'FORMAT_FULL_NAME';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeAbsoluteValue {
        operator: 'ABSOLUTE_VALUE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSquareRoot {
        operator: 'SQUARE_ROOT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePower {
        operator: 'POWER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSubstring {
        operator: 'SUBSTRING';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeEuler {
        operator: 'EULER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeStringLength {
        operator: 'STRING_LENGTH';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeAddTime {
        operator: 'ADD_TIME';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSubtractTime {
        operator: 'SUBTRACT_TIME';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface DefinitionSource {
        type: 'GLOBAL' | 'OBJECT_TYPE' | 'HAVEN_BRANCH' | 'PORTAL';

        name?: string;
      }

      export interface ExtensionData {
        extensionStatusMap: { [key: string]: string };

        tags: Array<string>;

        caseChangeTestExtensionData?: ExtensionData.CaseChangeTestExtensionData;

        optionDecoratorsExtensionData?: ExtensionData.OptionDecoratorsExtensionData;

        requiredPropertiesExtensionData?: ExtensionData.RequiredPropertiesExtensionData;

        softRequiredPropertiesExtensionData?: ExtensionData.SoftRequiredPropertiesExtensionData;
      }

      export namespace ExtensionData {
        export interface CaseChangeTestExtensionData {
          mood: string;
        }

        export interface OptionDecoratorsExtensionData {
          optionDecorators: { [key: string]: OptionDecoratorsExtensionData.OptionDecorators };

          optionDecoratorStyle: string;
        }

        export namespace OptionDecoratorsExtensionData {
          export interface OptionDecorators {
            color: string;
          }
        }

        export interface RequiredPropertiesExtensionData {
          isRequiredProperty: boolean;
        }

        export interface SoftRequiredPropertiesExtensionData {
          isSoftRequiredProperty: boolean;
        }
      }

      export interface ExternalOptionsMetaData {
        filter?: ExternalOptionsMetaData.Filter;

        relatedObjectTypeId?: string;
      }

      export namespace ExternalOptionsMetaData {
        export interface Filter {
          includeUnconfirmedUsers: boolean;

          pipelineIds: Array<string>;
        }
      }

      export interface Permission {
        accessLevel: string;
      }

      export interface PropertyDefinitionSource {
        type: string;

        name?: string;
      }

      export interface PropertyRequirements {
        gates: Array<string>;

        operator: 'AND' | 'OR';

        scopeNames: Array<string>;

        settings: Array<string>;
      }

      export interface RollupExpression {
        associationTypes: Array<Shared.AssociationSpec>;

        rollupOperator: string;

        sourceObjectTypeId: string;

        sourcePropertyName: string;

        conditionalExpression?:
          | RollupExpression.CmsMediabridgeConstantBoolean
          | RollupExpression.CmsMediabridgeConstantNumber
          | RollupExpression.CmsMediabridgeConstantString
          | RollupExpression.CmsMediabridgeBooleanPropertyVariable
          | RollupExpression.CmsMediabridgeStringPropertyVariable
          | RollupExpression.CmsMediabridgeNumberPropertyVariable
          | RollupExpression.CmsMediabridgeTimestampOfPropertyVariable
          | RollupExpression.CmsMediabridgeBooleanTargetPropertyVariable
          | RollupExpression.CmsMediabridgeStringTargetPropertyVariable
          | RollupExpression.CmsMediabridgeNumberTargetPropertyVariable
          | RollupExpression.CmsMediabridgeTimestampOfTargetPropertyVariable
          | RollupExpression.CmsMediabridgeAddNumbers
          | RollupExpression.CmsMediabridgeSubtractNumbers
          | RollupExpression.CmsMediabridgeMultiplyNumbers
          | RollupExpression.CmsMediabridgeDivideNumbers
          | RollupExpression.CmsMediabridgeRoundDownNumbers
          | RollupExpression.CmsMediabridgeRoundUpNumbers
          | RollupExpression.CmsMediabridgeRoundNearestNumbers
          | RollupExpression.CmsMediabridgeUpperCase
          | RollupExpression.CmsMediabridgeLowerCase
          | RollupExpression.CmsMediabridgeConcatStrings
          | RollupExpression.CmsMediabridgeContains
          | RollupExpression.CmsMediabridgeBeginsWith
          | RollupExpression.CmsMediabridgeNumberToString
          | RollupExpression.CmsMediabridgeParseNumber
          | RollupExpression.CmsMediabridgeFetchExchangeRate
          | RollupExpression.CmsMediabridgeFetchCurrencyDecimalPlaces
          | RollupExpression.CmsMediabridgeFetchSingleCurrencyPortalCurrency
          | RollupExpression.CmsMediabridgeDatedExchangeRate
          | RollupExpression.CmsMediabridgePipelineProbability
          | RollupExpression.CmsMediabridgeMaxNumbers
          | RollupExpression.CmsMediabridgeMinNumbers
          | RollupExpression.CmsMediabridgeLessThan
          | RollupExpression.CmsMediabridgeLessThanOrEqual
          | RollupExpression.CmsMediabridgeMoreThan
          | RollupExpression.CmsMediabridgeMoreThanOrEqual
          | RollupExpression.CmsMediabridgeNumberEquals
          | RollupExpression.CmsMediabridgeStringEquals
          | RollupExpression.CmsMediabridgeIsPipelineStageClosed
          | RollupExpression.CmsMediabridgeNot
          | RollupExpression.CmsMediabridgeDate
          | RollupExpression.CmsMediabridgeMonth
          | RollupExpression.CmsMediabridgeYear
          | RollupExpression.CmsMediabridgeNow
          | RollupExpression.CmsMediabridgeTimeBetween
          | RollupExpression.CmsMediabridgePeriodToMonths
          | RollupExpression.CmsMediabridgePeriodToWeeks
          | RollupExpression.CmsMediabridgeAnd
          | RollupExpression.CmsMediabridgeOr
          | RollupExpression.CmsMediabridgeXor
          | RollupExpression.CmsMediabridgeIfString
          | RollupExpression.CmsMediabridgeIfNumber
          | RollupExpression.CmsMediabridgeIfBoolean
          | RollupExpression.CmsMediabridgeIsPresent
          | RollupExpression.CmsMediabridgeHasEmailReply
          | RollupExpression.CmsMediabridgeHasPlainTextEmailReply
          | RollupExpression.CmsMediabridgeExtractMostRecentEmailReplyHTML
          | RollupExpression.CmsMediabridgeExtractMostRecentEmailReplyText
          | RollupExpression.CmsMediabridgeExtractMostRecentPlainTextEmailReply
          | RollupExpression.CmsMediabridgeSetContainsString
          | RollupExpression.CmsMediabridgeIsEngagementType
          | RollupExpression.CmsMediabridgeFormatFullName
          | RollupExpression.CmsMediabridgeAbsoluteValue
          | RollupExpression.CmsMediabridgeSquareRoot
          | RollupExpression.CmsMediabridgePower
          | RollupExpression.CmsMediabridgeSubstring
          | RollupExpression.CmsMediabridgeEuler
          | RollupExpression.CmsMediabridgeStringLength
          | RollupExpression.CmsMediabridgeAddTime
          | RollupExpression.CmsMediabridgeSubtractTime;

        conditionalFormula?: string;

        emptyRollupValue?: string;

        sourceCompareByPropertyName?: string;
      }

      export namespace RollupExpression {
        export interface CmsMediabridgeConstantBoolean {
          operator: 'CONSTANT_BOOLEAN';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeConstantNumber {
          operator: 'CONSTANT_NUMBER';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeConstantString {
          operator: 'CONSTANT_STRING';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeBooleanPropertyVariable {
          operator: 'BOOLEAN_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeStringPropertyVariable {
          operator: 'STRING_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeNumberPropertyVariable {
          operator: 'NUMBER_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeTimestampOfPropertyVariable {
          operator: 'TIMESTAMP_OF_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeBooleanTargetPropertyVariable {
          operator: 'BOOLEAN_TARGET_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeStringTargetPropertyVariable {
          operator: 'STRING_TARGET_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeNumberTargetPropertyVariable {
          operator: 'NUMBER_TARGET_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeTimestampOfTargetPropertyVariable {
          operator: 'TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeAddNumbers {
          enclosedInParentheses: boolean;

          operator: 'ADD_NUMBERS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeSubtractNumbers {
          enclosedInParentheses: boolean;

          operator: 'SUBTRACT_NUMBERS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeMultiplyNumbers {
          enclosedInParentheses: boolean;

          operator: 'MULTIPLY_NUMBERS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeDivideNumbers {
          enclosedInParentheses: boolean;

          operator: 'DIVIDE_NUMBERS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeRoundDownNumbers {
          operator: 'ROUND_DOWN';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeRoundUpNumbers {
          operator: 'ROUND_UP';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeRoundNearestNumbers {
          operator: 'ROUND_NEAREST';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeUpperCase {
          operator: 'UPPER_CASE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeLowerCase {
          operator: 'LOWER_CASE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeConcatStrings {
          operator: 'CONCAT_STRINGS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeContains {
          operator: 'CONTAINS';

          stringToCheck: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeBeginsWith {
          operator: 'BEGINS_WITH';

          stringToCheck: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeNumberToString {
          operator: 'NUMBER_TO_STRING';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeParseNumber {
          operator: 'PARSE_NUMBER';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeFetchExchangeRate {
          operator: 'FETCH_EXCHANGE_RATE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeFetchCurrencyDecimalPlaces {
          operator: 'FETCH_CURRENCY_DECIMAL_PLACES';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeFetchSingleCurrencyPortalCurrency {
          operator: 'FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeDatedExchangeRate {
          operator: 'DATED_EXCHANGE_RATE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgePipelineProbability {
          operator: 'PIPELINE_PROBABILITY';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeMaxNumbers {
          operator: 'MAX_NUMBERS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeMinNumbers {
          operator: 'MIN_NUMBERS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeLessThan {
          operator: 'LESS_THAN';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeLessThanOrEqual {
          operator: 'LESS_THAN_OR_EQUAL';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeMoreThan {
          operator: 'MORE_THAN';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeMoreThanOrEqual {
          operator: 'MORE_THAN_OR_EQUAL';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeNumberEquals {
          operator: 'NUMBER_EQUALS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeStringEquals {
          operator: 'STRING_EQUALS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeIsPipelineStageClosed {
          operator: 'IS_PIPELINE_STAGE_CLOSED';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeNot {
          operator: 'NOT';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeDate {
          operator: 'DATE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeMonth {
          operator: 'MONTH';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeYear {
          operator: 'YEAR';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeNow {
          operator: 'NOW';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeTimeBetween {
          operator: 'TIME_BETWEEN';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgePeriodToMonths {
          operator: 'PERIOD_TO_MONTHS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgePeriodToWeeks {
          operator: 'PERIOD_TO_WEEKS';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeAnd {
          enclosedInParentheses: boolean;

          operator: 'AND';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeOr {
          enclosedInParentheses: boolean;

          operator: 'OR';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeXor {
          enclosedInParentheses: boolean;

          operator: 'XOR';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeIfString {
          enclosedInParentheses: boolean;

          ifExpression: unknown;

          operator: 'IF_STRING';

          elseExpression?: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeIfNumber {
          enclosedInParentheses: boolean;

          ifExpression: unknown;

          operator: 'IF_NUMBER';

          elseExpression?: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeIfBoolean {
          enclosedInParentheses: boolean;

          ifExpression: unknown;

          operator: 'IF_BOOLEAN';

          elseExpression?: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeIsPresent {
          expressionToEvaluate: unknown;

          operator: 'IS_PRESENT';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeHasEmailReply {
          operator: 'HAS_EMAIL_REPLY';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeHasPlainTextEmailReply {
          operator: 'HAS_PLAIN_TEXT_EMAIL_REPLY';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeExtractMostRecentEmailReplyHTML {
          operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeExtractMostRecentEmailReplyText {
          operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeExtractMostRecentPlainTextEmailReply {
          operator: 'EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeSetContainsString {
          operator: 'SET_CONTAINS_STRING';

          stringToCheck: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeIsEngagementType {
          operator: 'IS_ENGAGEMENT_TYPE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: boolean;
        }

        export interface CmsMediabridgeFormatFullName {
          operator: 'FORMAT_FULL_NAME';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeAbsoluteValue {
          operator: 'ABSOLUTE_VALUE';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeSquareRoot {
          operator: 'SQUARE_ROOT';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgePower {
          operator: 'POWER';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeSubstring {
          operator: 'SUBSTRING';

          stringToCheck: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: string;
        }

        export interface CmsMediabridgeEuler {
          operator: 'EULER';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeStringLength {
          operator: 'STRING_LENGTH';

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeAddTime {
          operator: 'ADD_TIME';

          stringToCheck: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }

        export interface CmsMediabridgeSubtractTime {
          operator: 'SUBTRACT_TIME';

          stringToCheck: unknown;

          inputs?: Array<unknown>;

          propertyName?: string;

          value?: number;
        }
      }
    }

    export interface PropertyGroup {
      deleted: boolean;

      displayName: string;

      displayOrder: number;

      fulcrumPortalId: number;

      fulcrumTimestamp: number;

      hubspotDefined: boolean;

      name: string;

      portalId: number;
    }
  }
}

export interface IntegratorSettingCreateOembedDomainResponse {
  id: number;

  appId: number;

  createdAt: number;

  deletedAt: number;

  endpoints: IntegratorSettingCreateOembedDomainResponse.Endpoints;

  portalId: number;

  updatedAt: number;
}

export namespace IntegratorSettingCreateOembedDomainResponse {
  export interface Endpoints {
    discovery: boolean;

    schemes: Array<string>;

    url: string;
  }
}

export interface IntegratorSettingGetEventVisibilitySettingsResponse {
  createdAt: string;

  visibilitySettings: Array<IntegratorSettingGetEventVisibilitySettingsResponse.VisibilitySetting>;
}

export namespace IntegratorSettingGetEventVisibilitySettingsResponse {
  export interface VisibilitySetting {
    eventType: 'ALL' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT' | 'ATTENTION_SPAN';

    updatedAt: number;

    showInReporting?: boolean;

    showInTimeline?: boolean;

    showInWorkflows?: boolean;
  }
}

export interface IntegratorSettingGetObjectDefinitionsByMediaTypeResponse {
  objectTypeId: string;

  objectTypeName: string;

  properties: Array<IntegratorSettingGetObjectDefinitionsByMediaTypeResponse.Property>;

  propertyGroups: Array<IntegratorSettingGetObjectDefinitionsByMediaTypeResponse.PropertyGroup>;

  schema?: IntegratorSettingGetObjectDefinitionsByMediaTypeResponse.Schema;
}

export namespace IntegratorSettingGetObjectDefinitionsByMediaTypeResponse {
  export interface Property {
    objectTypeId: string;

    /**
     * Defines a property
     */
    property: Shared.Property;

    calculationExpression?:
      | Property.CmsMediabridgeConstantBoolean
      | Property.CmsMediabridgeConstantNumber
      | Property.CmsMediabridgeConstantString
      | Property.CmsMediabridgeBooleanPropertyVariable
      | Property.CmsMediabridgeStringPropertyVariable
      | Property.CmsMediabridgeNumberPropertyVariable
      | Property.CmsMediabridgeTimestampOfPropertyVariable
      | Property.CmsMediabridgeBooleanTargetPropertyVariable
      | Property.CmsMediabridgeStringTargetPropertyVariable
      | Property.CmsMediabridgeNumberTargetPropertyVariable
      | Property.CmsMediabridgeTimestampOfTargetPropertyVariable
      | Property.CmsMediabridgeAddNumbers
      | Property.CmsMediabridgeSubtractNumbers
      | Property.CmsMediabridgeMultiplyNumbers
      | Property.CmsMediabridgeDivideNumbers
      | Property.CmsMediabridgeRoundDownNumbers
      | Property.CmsMediabridgeRoundUpNumbers
      | Property.CmsMediabridgeRoundNearestNumbers
      | Property.CmsMediabridgeUpperCase
      | Property.CmsMediabridgeLowerCase
      | Property.CmsMediabridgeConcatStrings
      | Property.CmsMediabridgeContains
      | Property.CmsMediabridgeBeginsWith
      | Property.CmsMediabridgeNumberToString
      | Property.CmsMediabridgeParseNumber
      | Property.CmsMediabridgeFetchExchangeRate
      | Property.CmsMediabridgeFetchCurrencyDecimalPlaces
      | Property.CmsMediabridgeFetchSingleCurrencyPortalCurrency
      | Property.CmsMediabridgeDatedExchangeRate
      | Property.CmsMediabridgePipelineProbability
      | Property.CmsMediabridgeMaxNumbers
      | Property.CmsMediabridgeMinNumbers
      | Property.CmsMediabridgeLessThan
      | Property.CmsMediabridgeLessThanOrEqual
      | Property.CmsMediabridgeMoreThan
      | Property.CmsMediabridgeMoreThanOrEqual
      | Property.CmsMediabridgeNumberEquals
      | Property.CmsMediabridgeStringEquals
      | Property.CmsMediabridgeIsPipelineStageClosed
      | Property.CmsMediabridgeNot
      | Property.CmsMediabridgeDate
      | Property.CmsMediabridgeMonth
      | Property.CmsMediabridgeYear
      | Property.CmsMediabridgeNow
      | Property.CmsMediabridgeTimeBetween
      | Property.CmsMediabridgePeriodToMonths
      | Property.CmsMediabridgePeriodToWeeks
      | Property.CmsMediabridgeAnd
      | Property.CmsMediabridgeOr
      | Property.CmsMediabridgeXor
      | Property.CmsMediabridgeIfString
      | Property.CmsMediabridgeIfNumber
      | Property.CmsMediabridgeIfBoolean
      | Property.CmsMediabridgeIsPresent
      | Property.CmsMediabridgeHasEmailReply
      | Property.CmsMediabridgeHasPlainTextEmailReply
      | Property.CmsMediabridgeExtractMostRecentEmailReplyHTML
      | Property.CmsMediabridgeExtractMostRecentEmailReplyText
      | Property.CmsMediabridgeExtractMostRecentPlainTextEmailReply
      | Property.CmsMediabridgeSetContainsString
      | Property.CmsMediabridgeIsEngagementType
      | Property.CmsMediabridgeFormatFullName
      | Property.CmsMediabridgeAbsoluteValue
      | Property.CmsMediabridgeSquareRoot
      | Property.CmsMediabridgePower
      | Property.CmsMediabridgeSubstring
      | Property.CmsMediabridgeEuler
      | Property.CmsMediabridgeStringLength
      | Property.CmsMediabridgeAddTime
      | Property.CmsMediabridgeSubtractTime;

    calculationFormula?: string;

    definitionSource?: Property.DefinitionSource;

    extensionData?: Property.ExtensionData;

    externalOptionsMetaData?: Property.ExternalOptionsMetaData;

    fulcrumPortalId?: number;

    fulcrumTimestamp?: number;

    janusGroup?: string;

    permission?: Property.Permission;

    propertyDefinitionSource?: Property.PropertyDefinitionSource;

    propertyRequirements?: Property.PropertyRequirements;

    rollupExpression?: Property.RollupExpression;
  }

  export namespace Property {
    export interface CmsMediabridgeConstantBoolean {
      operator: 'CONSTANT_BOOLEAN';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeConstantNumber {
      operator: 'CONSTANT_NUMBER';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeConstantString {
      operator: 'CONSTANT_STRING';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeBooleanPropertyVariable {
      operator: 'BOOLEAN_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeStringPropertyVariable {
      operator: 'STRING_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeNumberPropertyVariable {
      operator: 'NUMBER_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeTimestampOfPropertyVariable {
      operator: 'TIMESTAMP_OF_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeBooleanTargetPropertyVariable {
      operator: 'BOOLEAN_TARGET_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeStringTargetPropertyVariable {
      operator: 'STRING_TARGET_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeNumberTargetPropertyVariable {
      operator: 'NUMBER_TARGET_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeTimestampOfTargetPropertyVariable {
      operator: 'TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeAddNumbers {
      enclosedInParentheses: boolean;

      operator: 'ADD_NUMBERS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeSubtractNumbers {
      enclosedInParentheses: boolean;

      operator: 'SUBTRACT_NUMBERS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeMultiplyNumbers {
      enclosedInParentheses: boolean;

      operator: 'MULTIPLY_NUMBERS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeDivideNumbers {
      enclosedInParentheses: boolean;

      operator: 'DIVIDE_NUMBERS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeRoundDownNumbers {
      operator: 'ROUND_DOWN';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeRoundUpNumbers {
      operator: 'ROUND_UP';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeRoundNearestNumbers {
      operator: 'ROUND_NEAREST';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeUpperCase {
      operator: 'UPPER_CASE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeLowerCase {
      operator: 'LOWER_CASE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeConcatStrings {
      operator: 'CONCAT_STRINGS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeContains {
      operator: 'CONTAINS';

      stringToCheck: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeBeginsWith {
      operator: 'BEGINS_WITH';

      stringToCheck: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeNumberToString {
      operator: 'NUMBER_TO_STRING';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeParseNumber {
      operator: 'PARSE_NUMBER';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeFetchExchangeRate {
      operator: 'FETCH_EXCHANGE_RATE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeFetchCurrencyDecimalPlaces {
      operator: 'FETCH_CURRENCY_DECIMAL_PLACES';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeFetchSingleCurrencyPortalCurrency {
      operator: 'FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeDatedExchangeRate {
      operator: 'DATED_EXCHANGE_RATE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgePipelineProbability {
      operator: 'PIPELINE_PROBABILITY';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeMaxNumbers {
      operator: 'MAX_NUMBERS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeMinNumbers {
      operator: 'MIN_NUMBERS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeLessThan {
      operator: 'LESS_THAN';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeLessThanOrEqual {
      operator: 'LESS_THAN_OR_EQUAL';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeMoreThan {
      operator: 'MORE_THAN';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeMoreThanOrEqual {
      operator: 'MORE_THAN_OR_EQUAL';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeNumberEquals {
      operator: 'NUMBER_EQUALS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeStringEquals {
      operator: 'STRING_EQUALS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeIsPipelineStageClosed {
      operator: 'IS_PIPELINE_STAGE_CLOSED';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeNot {
      operator: 'NOT';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeDate {
      operator: 'DATE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeMonth {
      operator: 'MONTH';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeYear {
      operator: 'YEAR';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeNow {
      operator: 'NOW';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeTimeBetween {
      operator: 'TIME_BETWEEN';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgePeriodToMonths {
      operator: 'PERIOD_TO_MONTHS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgePeriodToWeeks {
      operator: 'PERIOD_TO_WEEKS';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeAnd {
      enclosedInParentheses: boolean;

      operator: 'AND';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeOr {
      enclosedInParentheses: boolean;

      operator: 'OR';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeXor {
      enclosedInParentheses: boolean;

      operator: 'XOR';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeIfString {
      enclosedInParentheses: boolean;

      ifExpression: unknown;

      operator: 'IF_STRING';

      elseExpression?: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeIfNumber {
      enclosedInParentheses: boolean;

      ifExpression: unknown;

      operator: 'IF_NUMBER';

      elseExpression?: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeIfBoolean {
      enclosedInParentheses: boolean;

      ifExpression: unknown;

      operator: 'IF_BOOLEAN';

      elseExpression?: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeIsPresent {
      expressionToEvaluate: unknown;

      operator: 'IS_PRESENT';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeHasEmailReply {
      operator: 'HAS_EMAIL_REPLY';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeHasPlainTextEmailReply {
      operator: 'HAS_PLAIN_TEXT_EMAIL_REPLY';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeExtractMostRecentEmailReplyHTML {
      operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeExtractMostRecentEmailReplyText {
      operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeExtractMostRecentPlainTextEmailReply {
      operator: 'EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeSetContainsString {
      operator: 'SET_CONTAINS_STRING';

      stringToCheck: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeIsEngagementType {
      operator: 'IS_ENGAGEMENT_TYPE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: boolean;
    }

    export interface CmsMediabridgeFormatFullName {
      operator: 'FORMAT_FULL_NAME';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeAbsoluteValue {
      operator: 'ABSOLUTE_VALUE';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeSquareRoot {
      operator: 'SQUARE_ROOT';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgePower {
      operator: 'POWER';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeSubstring {
      operator: 'SUBSTRING';

      stringToCheck: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: string;
    }

    export interface CmsMediabridgeEuler {
      operator: 'EULER';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeStringLength {
      operator: 'STRING_LENGTH';

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeAddTime {
      operator: 'ADD_TIME';

      stringToCheck: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface CmsMediabridgeSubtractTime {
      operator: 'SUBTRACT_TIME';

      stringToCheck: unknown;

      inputs?: Array<unknown>;

      propertyName?: string;

      value?: number;
    }

    export interface DefinitionSource {
      type: 'GLOBAL' | 'OBJECT_TYPE' | 'HAVEN_BRANCH' | 'PORTAL';

      name?: string;
    }

    export interface ExtensionData {
      extensionStatusMap: { [key: string]: string };

      tags: Array<string>;

      caseChangeTestExtensionData?: ExtensionData.CaseChangeTestExtensionData;

      optionDecoratorsExtensionData?: ExtensionData.OptionDecoratorsExtensionData;

      requiredPropertiesExtensionData?: ExtensionData.RequiredPropertiesExtensionData;

      softRequiredPropertiesExtensionData?: ExtensionData.SoftRequiredPropertiesExtensionData;
    }

    export namespace ExtensionData {
      export interface CaseChangeTestExtensionData {
        mood: string;
      }

      export interface OptionDecoratorsExtensionData {
        optionDecorators: { [key: string]: OptionDecoratorsExtensionData.OptionDecorators };

        optionDecoratorStyle: string;
      }

      export namespace OptionDecoratorsExtensionData {
        export interface OptionDecorators {
          color: string;
        }
      }

      export interface RequiredPropertiesExtensionData {
        isRequiredProperty: boolean;
      }

      export interface SoftRequiredPropertiesExtensionData {
        isSoftRequiredProperty: boolean;
      }
    }

    export interface ExternalOptionsMetaData {
      filter?: ExternalOptionsMetaData.Filter;

      relatedObjectTypeId?: string;
    }

    export namespace ExternalOptionsMetaData {
      export interface Filter {
        includeUnconfirmedUsers: boolean;

        pipelineIds: Array<string>;
      }
    }

    export interface Permission {
      accessLevel: string;
    }

    export interface PropertyDefinitionSource {
      type: string;

      name?: string;
    }

    export interface PropertyRequirements {
      gates: Array<string>;

      operator: 'AND' | 'OR';

      scopeNames: Array<string>;

      settings: Array<string>;
    }

    export interface RollupExpression {
      associationTypes: Array<Shared.AssociationSpec>;

      rollupOperator: string;

      sourceObjectTypeId: string;

      sourcePropertyName: string;

      conditionalExpression?:
        | RollupExpression.CmsMediabridgeConstantBoolean
        | RollupExpression.CmsMediabridgeConstantNumber
        | RollupExpression.CmsMediabridgeConstantString
        | RollupExpression.CmsMediabridgeBooleanPropertyVariable
        | RollupExpression.CmsMediabridgeStringPropertyVariable
        | RollupExpression.CmsMediabridgeNumberPropertyVariable
        | RollupExpression.CmsMediabridgeTimestampOfPropertyVariable
        | RollupExpression.CmsMediabridgeBooleanTargetPropertyVariable
        | RollupExpression.CmsMediabridgeStringTargetPropertyVariable
        | RollupExpression.CmsMediabridgeNumberTargetPropertyVariable
        | RollupExpression.CmsMediabridgeTimestampOfTargetPropertyVariable
        | RollupExpression.CmsMediabridgeAddNumbers
        | RollupExpression.CmsMediabridgeSubtractNumbers
        | RollupExpression.CmsMediabridgeMultiplyNumbers
        | RollupExpression.CmsMediabridgeDivideNumbers
        | RollupExpression.CmsMediabridgeRoundDownNumbers
        | RollupExpression.CmsMediabridgeRoundUpNumbers
        | RollupExpression.CmsMediabridgeRoundNearestNumbers
        | RollupExpression.CmsMediabridgeUpperCase
        | RollupExpression.CmsMediabridgeLowerCase
        | RollupExpression.CmsMediabridgeConcatStrings
        | RollupExpression.CmsMediabridgeContains
        | RollupExpression.CmsMediabridgeBeginsWith
        | RollupExpression.CmsMediabridgeNumberToString
        | RollupExpression.CmsMediabridgeParseNumber
        | RollupExpression.CmsMediabridgeFetchExchangeRate
        | RollupExpression.CmsMediabridgeFetchCurrencyDecimalPlaces
        | RollupExpression.CmsMediabridgeFetchSingleCurrencyPortalCurrency
        | RollupExpression.CmsMediabridgeDatedExchangeRate
        | RollupExpression.CmsMediabridgePipelineProbability
        | RollupExpression.CmsMediabridgeMaxNumbers
        | RollupExpression.CmsMediabridgeMinNumbers
        | RollupExpression.CmsMediabridgeLessThan
        | RollupExpression.CmsMediabridgeLessThanOrEqual
        | RollupExpression.CmsMediabridgeMoreThan
        | RollupExpression.CmsMediabridgeMoreThanOrEqual
        | RollupExpression.CmsMediabridgeNumberEquals
        | RollupExpression.CmsMediabridgeStringEquals
        | RollupExpression.CmsMediabridgeIsPipelineStageClosed
        | RollupExpression.CmsMediabridgeNot
        | RollupExpression.CmsMediabridgeDate
        | RollupExpression.CmsMediabridgeMonth
        | RollupExpression.CmsMediabridgeYear
        | RollupExpression.CmsMediabridgeNow
        | RollupExpression.CmsMediabridgeTimeBetween
        | RollupExpression.CmsMediabridgePeriodToMonths
        | RollupExpression.CmsMediabridgePeriodToWeeks
        | RollupExpression.CmsMediabridgeAnd
        | RollupExpression.CmsMediabridgeOr
        | RollupExpression.CmsMediabridgeXor
        | RollupExpression.CmsMediabridgeIfString
        | RollupExpression.CmsMediabridgeIfNumber
        | RollupExpression.CmsMediabridgeIfBoolean
        | RollupExpression.CmsMediabridgeIsPresent
        | RollupExpression.CmsMediabridgeHasEmailReply
        | RollupExpression.CmsMediabridgeHasPlainTextEmailReply
        | RollupExpression.CmsMediabridgeExtractMostRecentEmailReplyHTML
        | RollupExpression.CmsMediabridgeExtractMostRecentEmailReplyText
        | RollupExpression.CmsMediabridgeExtractMostRecentPlainTextEmailReply
        | RollupExpression.CmsMediabridgeSetContainsString
        | RollupExpression.CmsMediabridgeIsEngagementType
        | RollupExpression.CmsMediabridgeFormatFullName
        | RollupExpression.CmsMediabridgeAbsoluteValue
        | RollupExpression.CmsMediabridgeSquareRoot
        | RollupExpression.CmsMediabridgePower
        | RollupExpression.CmsMediabridgeSubstring
        | RollupExpression.CmsMediabridgeEuler
        | RollupExpression.CmsMediabridgeStringLength
        | RollupExpression.CmsMediabridgeAddTime
        | RollupExpression.CmsMediabridgeSubtractTime;

      conditionalFormula?: string;

      emptyRollupValue?: string;

      sourceCompareByPropertyName?: string;
    }

    export namespace RollupExpression {
      export interface CmsMediabridgeConstantBoolean {
        operator: 'CONSTANT_BOOLEAN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeConstantNumber {
        operator: 'CONSTANT_NUMBER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeConstantString {
        operator: 'CONSTANT_STRING';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeBooleanPropertyVariable {
        operator: 'BOOLEAN_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeStringPropertyVariable {
        operator: 'STRING_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeNumberPropertyVariable {
        operator: 'NUMBER_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeTimestampOfPropertyVariable {
        operator: 'TIMESTAMP_OF_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeBooleanTargetPropertyVariable {
        operator: 'BOOLEAN_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeStringTargetPropertyVariable {
        operator: 'STRING_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeNumberTargetPropertyVariable {
        operator: 'NUMBER_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeTimestampOfTargetPropertyVariable {
        operator: 'TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeAddNumbers {
        enclosedInParentheses: boolean;

        operator: 'ADD_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSubtractNumbers {
        enclosedInParentheses: boolean;

        operator: 'SUBTRACT_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMultiplyNumbers {
        enclosedInParentheses: boolean;

        operator: 'MULTIPLY_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeDivideNumbers {
        enclosedInParentheses: boolean;

        operator: 'DIVIDE_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeRoundDownNumbers {
        operator: 'ROUND_DOWN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeRoundUpNumbers {
        operator: 'ROUND_UP';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeRoundNearestNumbers {
        operator: 'ROUND_NEAREST';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeUpperCase {
        operator: 'UPPER_CASE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeLowerCase {
        operator: 'LOWER_CASE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeConcatStrings {
        operator: 'CONCAT_STRINGS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeContains {
        operator: 'CONTAINS';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeBeginsWith {
        operator: 'BEGINS_WITH';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeNumberToString {
        operator: 'NUMBER_TO_STRING';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeParseNumber {
        operator: 'PARSE_NUMBER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeFetchExchangeRate {
        operator: 'FETCH_EXCHANGE_RATE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeFetchCurrencyDecimalPlaces {
        operator: 'FETCH_CURRENCY_DECIMAL_PLACES';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeFetchSingleCurrencyPortalCurrency {
        operator: 'FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeDatedExchangeRate {
        operator: 'DATED_EXCHANGE_RATE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePipelineProbability {
        operator: 'PIPELINE_PROBABILITY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMaxNumbers {
        operator: 'MAX_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMinNumbers {
        operator: 'MIN_NUMBERS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeLessThan {
        operator: 'LESS_THAN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeLessThanOrEqual {
        operator: 'LESS_THAN_OR_EQUAL';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeMoreThan {
        operator: 'MORE_THAN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeMoreThanOrEqual {
        operator: 'MORE_THAN_OR_EQUAL';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeNumberEquals {
        operator: 'NUMBER_EQUALS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeStringEquals {
        operator: 'STRING_EQUALS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIsPipelineStageClosed {
        operator: 'IS_PIPELINE_STAGE_CLOSED';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeNot {
        operator: 'NOT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeDate {
        operator: 'DATE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeMonth {
        operator: 'MONTH';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeYear {
        operator: 'YEAR';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeNow {
        operator: 'NOW';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeTimeBetween {
        operator: 'TIME_BETWEEN';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePeriodToMonths {
        operator: 'PERIOD_TO_MONTHS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePeriodToWeeks {
        operator: 'PERIOD_TO_WEEKS';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeAnd {
        enclosedInParentheses: boolean;

        operator: 'AND';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeOr {
        enclosedInParentheses: boolean;

        operator: 'OR';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeXor {
        enclosedInParentheses: boolean;

        operator: 'XOR';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIfString {
        enclosedInParentheses: boolean;

        ifExpression: unknown;

        operator: 'IF_STRING';

        elseExpression?: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeIfNumber {
        enclosedInParentheses: boolean;

        ifExpression: unknown;

        operator: 'IF_NUMBER';

        elseExpression?: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeIfBoolean {
        enclosedInParentheses: boolean;

        ifExpression: unknown;

        operator: 'IF_BOOLEAN';

        elseExpression?: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIsPresent {
        expressionToEvaluate: unknown;

        operator: 'IS_PRESENT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeHasEmailReply {
        operator: 'HAS_EMAIL_REPLY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeHasPlainTextEmailReply {
        operator: 'HAS_PLAIN_TEXT_EMAIL_REPLY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeExtractMostRecentEmailReplyHTML {
        operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeExtractMostRecentEmailReplyText {
        operator: 'EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeExtractMostRecentPlainTextEmailReply {
        operator: 'EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeSetContainsString {
        operator: 'SET_CONTAINS_STRING';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeIsEngagementType {
        operator: 'IS_ENGAGEMENT_TYPE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: boolean;
      }

      export interface CmsMediabridgeFormatFullName {
        operator: 'FORMAT_FULL_NAME';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeAbsoluteValue {
        operator: 'ABSOLUTE_VALUE';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSquareRoot {
        operator: 'SQUARE_ROOT';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgePower {
        operator: 'POWER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSubstring {
        operator: 'SUBSTRING';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: string;
      }

      export interface CmsMediabridgeEuler {
        operator: 'EULER';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeStringLength {
        operator: 'STRING_LENGTH';

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeAddTime {
        operator: 'ADD_TIME';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }

      export interface CmsMediabridgeSubtractTime {
        operator: 'SUBTRACT_TIME';

        stringToCheck: unknown;

        inputs?: Array<unknown>;

        propertyName?: string;

        value?: number;
      }
    }
  }

  export interface PropertyGroup {
    displayName: string;

    displayOrder: number;

    fulcrumPortalId: number;

    fulcrumTimestamp: number;

    hubspotDefined: boolean;

    name: string;
  }

  export interface Schema {
    id: number;

    allowsSensitiveProperties: boolean;

    createDatePropertyName: string;

    defaultSearchPropertyNames: Array<string>;

    deleted: boolean;

    fullyQualifiedName: string;

    hasCustomProperties: boolean;

    hasDefaultProperties: boolean;

    hasExternalObjectIds: boolean;

    hasOwners: boolean;

    hasPipelines: boolean;

    indexedForFiltersAndReports: boolean;

    lastModifiedPropertyName: string;

    metaType:
      | 'HUBSPOT'
      | 'INTEGRATION'
      | 'PORTAL_SPECIFIC'
      | 'CMS_HUBDB'
      | 'HUBSPOT_EVENT'
      | 'INTEGRATION_EVENT'
      | 'PORTAL_SPECIFIC_EVENT';

    metaTypeId: number;

    name: string;

    objectTypeId: string;

    permissioningType: string;

    pipelinePropertyName: string;

    pipelineStagePropertyName: string;

    requiredProperties: Array<string>;

    restorable: boolean;

    scopeMappings: Array<Schema.ScopeMapping>;

    secondaryDisplayLabelPropertyNames: Array<string>;

    accessScopeName?: string;

    createdAt?: number;

    description?: string;

    integrationAppId?: number;

    janusGroup?: string;

    ownerPortalId?: number;

    pipelineCloseDatePropertyName?: string;

    pipelineTimeToClosePropertyName?: string;

    pluralForm?: string;

    primaryDisplayLabelPropertyName?: string;

    readScopeName?: string;

    singularForm?: string;

    status?: string;

    visibility?: string;

    writeScopeName?: string;
  }

  export namespace Schema {
    export interface ScopeMapping {
      accessLevel: string;

      requestAction: string;

      scopeName: string;
    }
  }
}

export interface IntegratorSettingGetOembedDomainResponse {
  id: number;

  appId: number;

  createdAt: number;

  deletedAt: number;

  endpoints: IntegratorSettingGetOembedDomainResponse.Endpoints;

  portalId: number;

  updatedAt: number;
}

export namespace IntegratorSettingGetOembedDomainResponse {
  export interface Endpoints {
    discovery: boolean;

    schemes: Array<string>;

    url: string;
  }
}

export interface IntegratorSettingListOembedDomainsResponse {
  results: Array<IntegratorSettingListOembedDomainsResponse.Result>;

  totalCount?: number;
}

export namespace IntegratorSettingListOembedDomainsResponse {
  export interface Result {
    id: number;

    appId: number;

    createdAt: number;

    deletedAt: number;

    endpoints: Result.Endpoints;

    portalId: number;

    updatedAt: number;
  }

  export namespace Result {
    export interface Endpoints {
      discovery: boolean;

      schemes: Array<string>;

      url: string;
    }
  }
}

export interface IntegratorSettingRegisterAppNameResponse {
  appId: number;

  name: string;
}

export interface IntegratorSettingUpdateAppNameResponse {
  appId: number;

  name: string;
}

export interface IntegratorSettingUpdateEventVisibilitySettingsResponse {
  eventType: 'ALL' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT' | 'ATTENTION_SPAN';

  updatedAt: number;

  showInReporting?: boolean;

  showInTimeline?: boolean;

  showInWorkflows?: boolean;
}

export interface IntegratorSettingUpdateOembedDomainResponse {
  id: number;

  appId: number;

  createdAt: number;

  deletedAt: number;

  endpoints: IntegratorSettingUpdateOembedDomainResponse.Endpoints;

  portalId: number;

  updatedAt: number;
}

export namespace IntegratorSettingUpdateOembedDomainResponse {
  export interface Endpoints {
    discovery: boolean;

    schemes: Array<string>;

    url: string;
  }
}

export interface IntegratorSettingCreateObjectDefinitionParams {
  mediaTypes: Array<'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'OTHER' | 'IMAGE'>;
}

export interface IntegratorSettingCreateOembedDomainParams {
  endpoints: IntegratorSettingCreateOembedDomainParams.Endpoints;

  portalId?: number;
}

export namespace IntegratorSettingCreateOembedDomainParams {
  export interface Endpoints {
    discovery: boolean;

    schemes: Array<string>;

    url: string;
  }
}

export interface IntegratorSettingGetObjectDefinitionsByMediaTypeParams {
  appId: string;
}

export interface IntegratorSettingGetOembedDomainParams {
  appId: string;
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
  eventType: 'ALL' | 'MEDIA_PLAYS' | 'MEDIA_PLAYS_PERCENT' | 'ATTENTION_SPAN';

  updatedAt: number;

  showInReporting?: boolean;

  showInTimeline?: boolean;

  showInWorkflows?: boolean;
}

export interface IntegratorSettingUpdateOembedDomainParams {
  /**
   * Path param:
   */
  appId: string;

  /**
   * Body param:
   */
  endpoints: IntegratorSettingUpdateOembedDomainParams.Endpoints;

  /**
   * Body param:
   */
  portalId?: number;
}

export namespace IntegratorSettingUpdateOembedDomainParams {
  export interface Endpoints {
    discovery: boolean;

    schemes: Array<string>;

    url: string;
  }
}

export declare namespace IntegratorSettings {
  export {
    type IntegratorSettingCreateObjectDefinitionResponse as IntegratorSettingCreateObjectDefinitionResponse,
    type IntegratorSettingCreateOembedDomainResponse as IntegratorSettingCreateOembedDomainResponse,
    type IntegratorSettingGetEventVisibilitySettingsResponse as IntegratorSettingGetEventVisibilitySettingsResponse,
    type IntegratorSettingGetObjectDefinitionsByMediaTypeResponse as IntegratorSettingGetObjectDefinitionsByMediaTypeResponse,
    type IntegratorSettingGetOembedDomainResponse as IntegratorSettingGetOembedDomainResponse,
    type IntegratorSettingListOembedDomainsResponse as IntegratorSettingListOembedDomainsResponse,
    type IntegratorSettingRegisterAppNameResponse as IntegratorSettingRegisterAppNameResponse,
    type IntegratorSettingUpdateAppNameResponse as IntegratorSettingUpdateAppNameResponse,
    type IntegratorSettingUpdateEventVisibilitySettingsResponse as IntegratorSettingUpdateEventVisibilitySettingsResponse,
    type IntegratorSettingUpdateOembedDomainResponse as IntegratorSettingUpdateOembedDomainResponse,
    type IntegratorSettingCreateObjectDefinitionParams as IntegratorSettingCreateObjectDefinitionParams,
    type IntegratorSettingCreateOembedDomainParams as IntegratorSettingCreateOembedDomainParams,
    type IntegratorSettingGetObjectDefinitionsByMediaTypeParams as IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
    type IntegratorSettingGetOembedDomainParams as IntegratorSettingGetOembedDomainParams,
    type IntegratorSettingRegisterAppNameParams as IntegratorSettingRegisterAppNameParams,
    type IntegratorSettingUpdateAppNameParams as IntegratorSettingUpdateAppNameParams,
    type IntegratorSettingUpdateEventVisibilitySettingsParams as IntegratorSettingUpdateEventVisibilitySettingsParams,
    type IntegratorSettingUpdateOembedDomainParams as IntegratorSettingUpdateOembedDomainParams,
  };
}
