// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CRMAPI from '../crm';
import * as EmailsAPI from '../../marketing/emails';
import * as CompaniesAPI from './companies';
import {
  Companies,
  CompanyCreateParams,
  CompanyDeleteParams,
  CompanyListParams,
  CompanyMergeParams,
  CompanyReadParams,
  CompanySearchParams,
  CompanyUpdateParams,
  CompanyUpsertParams,
} from './companies';
import * as ContactsAPI from './contacts';
import {
  ContactCreateParams,
  ContactDeleteParams,
  ContactListParams,
  ContactMergeParams,
  ContactPurgeParams,
  ContactReadParams,
  ContactSearchParams,
  ContactUpdateParams,
  ContactUpsertParams,
  Contacts,
} from './contacts';
import * as SchemasAPI from './schemas';
import {
  AssociationDefinition,
  AssociationDefinitionEgg,
  CollectionResponseObjectSchemaNoPaging,
  ObjectSchema,
  ObjectSchemaEgg,
  ObjectTypeDefinition,
  ObjectTypeDefinitionLabels,
  ObjectTypeDefinitionPatch,
  ObjectTypePropertyCreate,
  OptionInput,
  SchemaArchiveAssociationParams,
  SchemaCreateAssociationParams,
  SchemaCreateParams,
  SchemaDeleteParams,
  SchemaListParams,
  SchemaUpdateParams,
  Schemas,
} from './schemas';
import * as DealsAPI from './deals/deals';
import {
  DealCreateParams,
  DealListParams,
  DealMergeParams,
  DealReadParams,
  DealSearchParams,
  DealUpdateParams,
  DealUpsertParams,
  Deals,
} from './deals/deals';
import { CursorURLPage } from '../../../core/pagination';

export class Objects extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  deals: DealsAPI.Deals = new DealsAPI.Deals(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
}

export type SimplePublicObjectWithAssociationsCursorURLPage =
  CursorURLPage<SimplePublicObjectWithAssociations>;

export interface BatchInputSimplePublicObjectBatchInput {
  inputs: Array<SimplePublicObjectBatchInput>;
}

export interface BatchInputSimplePublicObjectBatchInputForCreate {
  inputs: Array<SimplePublicObjectBatchInputForCreate>;
}

export interface BatchInputSimplePublicObjectBatchInputUpsert {
  inputs: Array<SimplePublicObjectBatchInputUpsert>;
}

export interface BatchInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;
}

export interface BatchReadInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;

  properties: Array<string>;

  propertiesWithHistory: Array<string>;

  idProperty?: string;
}

export interface BatchResponseSimplePublicObject {
  completedAt: string;

  results: Array<SimplePublicObject>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponseSimplePublicUpsertObject {
  completedAt: string;

  results: Array<SimplePublicUpsertObject>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseAssociatedID {
  results: Array<CRMAPI.AssociatedID>;

  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseSimplePublicObjectWithAssociations {
  results: Array<SimplePublicObjectWithAssociations>;

  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseWithTotalSimplePublicObject {
  results: Array<SimplePublicObject>;

  total: number;

  paging?: EmailsAPI.Paging;
}

export interface CreatedResponseSimplePublicObject {
  createdResourceId: string;

  entity: SimplePublicObject;

  location?: string;
}

export interface Filter {
  operator:
    | 'EQ'
    | 'NEQ'
    | 'LT'
    | 'LTE'
    | 'GT'
    | 'GTE'
    | 'BETWEEN'
    | 'IN'
    | 'NOT_IN'
    | 'HAS_PROPERTY'
    | 'NOT_HAS_PROPERTY'
    | 'CONTAINS_TOKEN'
    | 'NOT_CONTAINS_TOKEN';

  propertyName: string;

  highValue?: string;

  value?: string;

  values?: Array<string>;
}

export interface FilterGroup {
  filters: Array<Filter>;
}

export interface PublicAssociationsForObject {
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

export interface PublicGdprDeleteInput {
  objectId: string;

  idProperty?: string;
}

export interface PublicMergeInput {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface PublicObjectSearchRequest {
  after?: string;

  filterGroups?: Array<FilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export interface SimplePublicObject {
  id: string;

  createdAt: string;

  properties: { [key: string]: string | null };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

export interface SimplePublicObjectBatchInput {
  id: string;

  properties: { [key: string]: string };

  idProperty?: string;

  objectWriteTraceId?: string;
}

export interface SimplePublicObjectBatchInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<PublicAssociationsForObject>;

  objectWriteTraceId?: string;
}

export interface SimplePublicObjectBatchInputUpsert {
  id: string;

  properties: { [key: string]: string };

  idProperty?: string;

  objectWriteTraceId?: string;
}

export interface SimplePublicObjectID {
  id: string;
}

export interface SimplePublicObjectInput {
  properties: { [key: string]: string };
}

export interface SimplePublicObjectInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<PublicAssociationsForObject>;
}

export interface SimplePublicObjectWithAssociations {
  id: string;

  createdAt: string;

  properties: { [key: string]: string | null };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  associations?: { [key: string]: CollectionResponseAssociatedID };

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

export interface SimplePublicUpsertObject {
  id: string;

  createdAt: string;

  new: boolean;

  properties: { [key: string]: string };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<ValueWithTimestamp> };
}

export interface ValueWithTimestamp {
  sourceType: string;

  timestamp: string;

  value: string;

  sourceId?: string;

  sourceLabel?: string;

  updatedByUserId?: number;
}

Objects.Companies = Companies;
Objects.Contacts = Contacts;
Objects.Deals = Deals;
Objects.Schemas = Schemas;

export declare namespace Objects {
  export {
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseSimplePublicObjectWithAssociations as CollectionResponseSimplePublicObjectWithAssociations,
    type CollectionResponseWithTotalSimplePublicObject as CollectionResponseWithTotalSimplePublicObject,
    type CreatedResponseSimplePublicObject as CreatedResponseSimplePublicObject,
    type Filter as Filter,
    type FilterGroup as FilterGroup,
    type PublicAssociationsForObject as PublicAssociationsForObject,
    type PublicGdprDeleteInput as PublicGdprDeleteInput,
    type PublicMergeInput as PublicMergeInput,
    type PublicObjectSearchRequest as PublicObjectSearchRequest,
    type SimplePublicObject as SimplePublicObject,
    type SimplePublicObjectBatchInput as SimplePublicObjectBatchInput,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type SimplePublicObjectBatchInputUpsert as SimplePublicObjectBatchInputUpsert,
    type SimplePublicObjectID as SimplePublicObjectID,
    type SimplePublicObjectInput as SimplePublicObjectInput,
    type SimplePublicObjectInputForCreate as SimplePublicObjectInputForCreate,
    type SimplePublicObjectWithAssociations as SimplePublicObjectWithAssociations,
    type SimplePublicUpsertObject as SimplePublicUpsertObject,
    type ValueWithTimestamp as ValueWithTimestamp,
  };

  export {
    Companies as Companies,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyDeleteParams as CompanyDeleteParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanyReadParams as CompanyReadParams,
    type CompanySearchParams as CompanySearchParams,
    type CompanyUpsertParams as CompanyUpsertParams,
  };

  export {
    Contacts as Contacts,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactDeleteParams as ContactDeleteParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactPurgeParams as ContactPurgeParams,
    type ContactReadParams as ContactReadParams,
    type ContactSearchParams as ContactSearchParams,
    type ContactUpsertParams as ContactUpsertParams,
  };

  export {
    Deals as Deals,
    type DealCreateParams as DealCreateParams,
    type DealUpdateParams as DealUpdateParams,
    type DealListParams as DealListParams,
    type DealMergeParams as DealMergeParams,
    type DealReadParams as DealReadParams,
    type DealSearchParams as DealSearchParams,
    type DealUpsertParams as DealUpsertParams,
  };

  export {
    Schemas as Schemas,
    type AssociationDefinition as AssociationDefinition,
    type AssociationDefinitionEgg as AssociationDefinitionEgg,
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionLabels as ObjectTypeDefinitionLabels,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type OptionInput as OptionInput,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaArchiveAssociationParams as SchemaArchiveAssociationParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
  };
}
