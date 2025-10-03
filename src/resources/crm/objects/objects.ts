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

export class Objects extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  deals: DealsAPI.Deals = new DealsAPI.Deals(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
}

export interface CRMObjectsBatchInputSimplePublicObjectBatchInput {
  inputs: Array<CRMObjectsSimplePublicObjectBatchInput>;
}

export interface CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate {
  inputs: Array<CRMObjectsSimplePublicObjectBatchInputForCreate>;
}

export interface CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert {
  inputs: Array<CRMObjectsSimplePublicObjectBatchInputUpsert>;
}

export interface CRMObjectsBatchInputSimplePublicObjectID {
  inputs: Array<CRMObjectsSimplePublicObjectID>;
}

export interface CRMObjectsBatchReadInputSimplePublicObjectID {
  inputs: Array<CRMObjectsSimplePublicObjectID>;

  properties: Array<string>;

  propertiesWithHistory: Array<string>;

  idProperty?: string;
}

export interface CRMObjectsBatchResponseSimplePublicObject {
  completedAt: string;

  results: Array<CRMObjectsSimplePublicObject>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMObjectsBatchResponseSimplePublicUpsertObject {
  completedAt: string;

  results: Array<CRMObjectsSimplePublicUpsertObject>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CRMObjectsCollectionResponseAssociatedID {
  results: Array<CRMAPI.CRMAssociatedID>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface CRMObjectsCollectionResponseSimplePublicObjectWithAssociations {
  results: Array<CRMObjectsSimplePublicObjectWithAssociations>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface CRMObjectsCollectionResponseWithTotalSimplePublicObject {
  results: Array<CRMObjectsSimplePublicObject>;

  total: number;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface CRMObjectsCreatedResponseSimplePublicObject {
  createdResourceId: string;

  entity: CRMObjectsSimplePublicObject;

  location?: string;
}

export interface CRMObjectsFilter {
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

export interface CRMObjectsFilterGroup {
  filters: Array<CRMObjectsFilter>;
}

export interface CRMObjectsPublicAssociationsForObject {
  to: CRMAPI.CRMPublicObjectID;

  types: Array<CRMAPI.CRMAssociationSpec>;
}

export interface CRMObjectsPublicGdprDeleteInput {
  objectId: string;

  idProperty?: string;
}

export interface CRMObjectsPublicMergeInput {
  objectIdToMerge: string;

  primaryObjectId: string;
}

export interface CRMObjectsPublicObjectSearchRequest {
  after?: string;

  filterGroups?: Array<CRMObjectsFilterGroup>;

  limit?: number;

  properties?: Array<string>;

  query?: string;

  sorts?: Array<string>;
}

export interface CRMObjectsSimplePublicObject {
  id: string;

  createdAt: string;

  properties: { [key: string]: string | null };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<CRMObjectsValueWithTimestamp> };
}

export interface CRMObjectsSimplePublicObjectBatchInput {
  id: string;

  properties: { [key: string]: string };

  idProperty?: string;

  objectWriteTraceId?: string;
}

export interface CRMObjectsSimplePublicObjectBatchInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<CRMObjectsPublicAssociationsForObject>;

  objectWriteTraceId?: string;
}

export interface CRMObjectsSimplePublicObjectBatchInputUpsert {
  id: string;

  properties: { [key: string]: string };

  idProperty?: string;

  objectWriteTraceId?: string;
}

export interface CRMObjectsSimplePublicObjectID {
  id: string;
}

export interface CRMObjectsSimplePublicObjectInput {
  properties: { [key: string]: string };
}

export interface CRMObjectsSimplePublicObjectInputForCreate {
  properties: { [key: string]: string };

  associations?: Array<CRMObjectsPublicAssociationsForObject>;
}

export interface CRMObjectsSimplePublicObjectWithAssociations {
  id: string;

  createdAt: string;

  properties: { [key: string]: string | null };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  associations?: { [key: string]: CRMObjectsCollectionResponseAssociatedID };

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<CRMObjectsValueWithTimestamp> };
}

export interface CRMObjectsSimplePublicUpsertObject {
  id: string;

  createdAt: string;

  new: boolean;

  properties: { [key: string]: string };

  updatedAt: string;

  archived?: boolean;

  archivedAt?: string;

  objectWriteTraceId?: string;

  propertiesWithHistory?: { [key: string]: Array<CRMObjectsValueWithTimestamp> };
}

export interface CRMObjectsValueWithTimestamp {
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
    type CRMObjectsBatchInputSimplePublicObjectBatchInput as CRMObjectsBatchInputSimplePublicObjectBatchInput,
    type CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate as CRMObjectsBatchInputSimplePublicObjectBatchInputForCreate,
    type CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert as CRMObjectsBatchInputSimplePublicObjectBatchInputUpsert,
    type CRMObjectsBatchInputSimplePublicObjectID as CRMObjectsBatchInputSimplePublicObjectID,
    type CRMObjectsBatchReadInputSimplePublicObjectID as CRMObjectsBatchReadInputSimplePublicObjectID,
    type CRMObjectsBatchResponseSimplePublicObject as CRMObjectsBatchResponseSimplePublicObject,
    type CRMObjectsBatchResponseSimplePublicUpsertObject as CRMObjectsBatchResponseSimplePublicUpsertObject,
    type CRMObjectsCollectionResponseAssociatedID as CRMObjectsCollectionResponseAssociatedID,
    type CRMObjectsCollectionResponseSimplePublicObjectWithAssociations as CRMObjectsCollectionResponseSimplePublicObjectWithAssociations,
    type CRMObjectsCollectionResponseWithTotalSimplePublicObject as CRMObjectsCollectionResponseWithTotalSimplePublicObject,
    type CRMObjectsCreatedResponseSimplePublicObject as CRMObjectsCreatedResponseSimplePublicObject,
    type CRMObjectsFilter as CRMObjectsFilter,
    type CRMObjectsFilterGroup as CRMObjectsFilterGroup,
    type CRMObjectsPublicAssociationsForObject as CRMObjectsPublicAssociationsForObject,
    type CRMObjectsPublicGdprDeleteInput as CRMObjectsPublicGdprDeleteInput,
    type CRMObjectsPublicMergeInput as CRMObjectsPublicMergeInput,
    type CRMObjectsPublicObjectSearchRequest as CRMObjectsPublicObjectSearchRequest,
    type CRMObjectsSimplePublicObject as CRMObjectsSimplePublicObject,
    type CRMObjectsSimplePublicObjectBatchInput as CRMObjectsSimplePublicObjectBatchInput,
    type CRMObjectsSimplePublicObjectBatchInputForCreate as CRMObjectsSimplePublicObjectBatchInputForCreate,
    type CRMObjectsSimplePublicObjectBatchInputUpsert as CRMObjectsSimplePublicObjectBatchInputUpsert,
    type CRMObjectsSimplePublicObjectID as CRMObjectsSimplePublicObjectID,
    type CRMObjectsSimplePublicObjectInput as CRMObjectsSimplePublicObjectInput,
    type CRMObjectsSimplePublicObjectInputForCreate as CRMObjectsSimplePublicObjectInputForCreate,
    type CRMObjectsSimplePublicObjectWithAssociations as CRMObjectsSimplePublicObjectWithAssociations,
    type CRMObjectsSimplePublicUpsertObject as CRMObjectsSimplePublicUpsertObject,
    type CRMObjectsValueWithTimestamp as CRMObjectsValueWithTimestamp,
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
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaArchiveAssociationParams as SchemaArchiveAssociationParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
  };
}
