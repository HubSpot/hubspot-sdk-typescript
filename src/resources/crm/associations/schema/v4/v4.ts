// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as CRMAPI from '../../../crm';
import * as ConfigurationsAPI from './configurations';
import {
  ConfigurationBatchCreateByObjectTypesParams,
  ConfigurationBatchDeleteByObjectTypesParams,
  ConfigurationBatchUpdateByObjectTypesParams,
  ConfigurationGetByObjectTypesParams,
  Configurations,
} from './configurations';
import * as DefinitionsAPI from './definitions';
import {
  DefinitionCreateParams,
  DefinitionDeleteParams,
  DefinitionListParams,
  DefinitionUpdateParams,
  Definitions,
} from './definitions';

export class V4 extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
}

export interface BatchInputPublicAssociationDefinitionConfigurationCreateRequest {
  inputs: Array<PublicAssociationDefinitionConfigurationCreateRequest>;
}

export interface BatchInputPublicAssociationDefinitionConfigurationUpdateRequest {
  inputs: Array<PublicAssociationDefinitionConfigurationUpdateRequest>;
}

export interface BatchInputPublicAssociationSpec {
  inputs: Array<PublicAssociationSpec>;
}

export interface BatchResponsePublicAssociationDefinitionConfigurationUpdateResult {
  completedAt: string;

  results: Array<PublicAssociationDefinitionConfigurationUpdateResult>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors {
  completedAt: string;

  results: Array<PublicAssociationDefinitionConfigurationUpdateResult>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationDefinitionUserConfiguration {
  completedAt: string;

  results: Array<PublicAssociationDefinitionUserConfiguration>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  links?: { [key: string]: string };

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors {
  completedAt: string;

  results: Array<PublicAssociationDefinitionUserConfiguration>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseAssociationSpecWithLabelNoPaging {
  results: Array<CRMAPI.AssociationSpecWithLabel>;
}

export interface CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging {
  results: Array<PublicAssociationDefinitionUserConfiguration>;
}

export interface PublicAssociationDefinitionConfigurationCreateRequest {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  maxToObjectIds: number;

  typeId: number;
}

export interface PublicAssociationDefinitionConfigurationUpdateRequest {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  maxToObjectIds: number;

  typeId: number;
}

export interface PublicAssociationDefinitionConfigurationUpdateResult {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  typeId: number;

  userEnforcedMaxToObjectIds?: number;
}

export interface PublicAssociationDefinitionCreateRequest {
  label: string;

  name: string;

  inverseLabel?: string;
}

export interface PublicAssociationDefinitionUpdateRequest {
  associationTypeId: number;

  label: string;

  inverseLabel?: string;
}

export interface PublicAssociationDefinitionUserConfiguration {
  category: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  typeId: number;

  label?: string;

  userEnforcedMaxToObjectIds?: number;
}

export interface PublicAssociationSpec {
  category: string;

  typeId: number;
}

V4.Configurations = Configurations;
V4.Definitions = Definitions;

export declare namespace V4 {
  export {
    type BatchInputPublicAssociationDefinitionConfigurationCreateRequest as BatchInputPublicAssociationDefinitionConfigurationCreateRequest,
    type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest as BatchInputPublicAssociationDefinitionConfigurationUpdateRequest,
    type BatchInputPublicAssociationSpec as BatchInputPublicAssociationSpec,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResult as BatchResponsePublicAssociationDefinitionConfigurationUpdateResult,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors as BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors,
    type BatchResponsePublicAssociationDefinitionUserConfiguration as BatchResponsePublicAssociationDefinitionUserConfiguration,
    type BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors as BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors,
    type CollectionResponseAssociationSpecWithLabelNoPaging as CollectionResponseAssociationSpecWithLabelNoPaging,
    type CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging,
    type PublicAssociationDefinitionConfigurationCreateRequest as PublicAssociationDefinitionConfigurationCreateRequest,
    type PublicAssociationDefinitionConfigurationUpdateRequest as PublicAssociationDefinitionConfigurationUpdateRequest,
    type PublicAssociationDefinitionConfigurationUpdateResult as PublicAssociationDefinitionConfigurationUpdateResult,
    type PublicAssociationDefinitionCreateRequest as PublicAssociationDefinitionCreateRequest,
    type PublicAssociationDefinitionUpdateRequest as PublicAssociationDefinitionUpdateRequest,
    type PublicAssociationDefinitionUserConfiguration as PublicAssociationDefinitionUserConfiguration,
    type PublicAssociationSpec as PublicAssociationSpec,
  };

  export {
    Configurations as Configurations,
    type ConfigurationBatchCreateByObjectTypesParams as ConfigurationBatchCreateByObjectTypesParams,
    type ConfigurationBatchDeleteByObjectTypesParams as ConfigurationBatchDeleteByObjectTypesParams,
    type ConfigurationBatchUpdateByObjectTypesParams as ConfigurationBatchUpdateByObjectTypesParams,
    type ConfigurationGetByObjectTypesParams as ConfigurationGetByObjectTypesParams,
  };

  export {
    Definitions as Definitions,
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionDeleteParams as DefinitionDeleteParams,
  };
}
