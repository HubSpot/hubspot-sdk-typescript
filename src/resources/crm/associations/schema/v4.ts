// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as CrmAPI from '../../crm';
import * as EmailsAPI from '../../../marketing/emails/emails';

export class V4 extends APIResource {}

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

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
}

export interface CollectionResponsePublicAssociationDefinitionUserConfiguration {
  results: Array<PublicAssociationDefinitionUserConfiguration>;

  /**
   * Contains information pagination of results.
   */
  paging?: EmailsAPI.Paging;
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
}
