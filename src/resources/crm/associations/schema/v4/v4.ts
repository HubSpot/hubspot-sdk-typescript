// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as CrmAPI from '../../../crm';
import * as ConfigurationsAPI from './configurations';
import {
  ConfigurationBatchCreateParams,
  ConfigurationBatchDeleteParams,
  ConfigurationBatchUpdateParams,
  ConfigurationGetByObjectTypesParams,
  Configurations,
} from './configurations';
import * as DefinitionsAPI from './definitions';
import {
  DefinitionCreateLabelParams,
  DefinitionDeleteLabelParams,
  DefinitionListLabelsParams,
  DefinitionUpdateLabelParams,
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

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseAssociationSpecWithLabel {
  results: Array<CrmAPI.AssociationSpecWithLabel>;

  paging?: Shared.Paging;
}

export interface CollectionResponsePublicAssociationDefinitionUserConfiguration {
  results: Array<PublicAssociationDefinitionUserConfiguration>;

  paging?: Shared.Paging;
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
    type BatchResponsePublicAssociationDefinitionUserConfiguration as BatchResponsePublicAssociationDefinitionUserConfiguration,
    type CollectionResponseAssociationSpecWithLabel as CollectionResponseAssociationSpecWithLabel,
    type CollectionResponsePublicAssociationDefinitionUserConfiguration as CollectionResponsePublicAssociationDefinitionUserConfiguration,
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
    type ConfigurationBatchCreateParams as ConfigurationBatchCreateParams,
    type ConfigurationBatchDeleteParams as ConfigurationBatchDeleteParams,
    type ConfigurationBatchUpdateParams as ConfigurationBatchUpdateParams,
    type ConfigurationGetByObjectTypesParams as ConfigurationGetByObjectTypesParams,
  };

  export {
    Definitions as Definitions,
    type DefinitionCreateLabelParams as DefinitionCreateLabelParams,
    type DefinitionDeleteLabelParams as DefinitionDeleteLabelParams,
    type DefinitionListLabelsParams as DefinitionListLabelsParams,
    type DefinitionUpdateLabelParams as DefinitionUpdateLabelParams,
  };
}
