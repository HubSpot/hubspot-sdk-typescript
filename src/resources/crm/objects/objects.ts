// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as CallsAPI from './calls/calls';
import {
  CallCreateParams,
  CallGetParams,
  CallListParams,
  CallSearchParams,
  CallUpdateParams,
  Calls,
} from './calls/calls';
import * as CartsAPI from './carts/carts';
import {
  CartCreateParams,
  CartGetParams,
  CartListParams,
  CartSearchParams,
  CartUpdateParams,
  Carts,
} from './carts/carts';
import * as CommercePaymentsAPI from './commerce-payments/commerce-payments';
import {
  CommercePaymentCreateParams,
  CommercePaymentGetParams,
  CommercePaymentListParams,
  CommercePaymentSearchParams,
  CommercePaymentUpdateParams,
  CommercePayments,
} from './commerce-payments/commerce-payments';
import * as CommunicationsAPI from './communications/communications';
import {
  CommunicationCreateParams,
  CommunicationGetParams,
  CommunicationListParams,
  CommunicationSearchParams,
  CommunicationUpdateParams,
  Communications,
} from './communications/communications';
import * as CompaniesAPI from './companies/companies';
import {
  Companies,
  CompanyCreateParams,
  CompanyGetParams,
  CompanyListParams,
  CompanyMergeParams,
  CompanySearchParams,
  CompanyUpdateParams,
} from './companies/companies';
import * as ContactsAPI from './contacts/contacts';
import {
  ContactCreateParams,
  ContactGdprDeleteParams,
  ContactGetParams,
  ContactListParams,
  ContactMergeParams,
  ContactSearchParams,
  ContactUpdateParams,
  Contacts,
  PublicGdprDeleteInput,
} from './contacts/contacts';
import * as ContractsAPI from './contracts/contracts';
import {
  ContractCreateParams,
  ContractGetParams,
  ContractListParams,
  ContractSearchParams,
  ContractUpdateParams,
  Contracts,
} from './contracts/contracts';
import * as CoursesAPI from './courses/courses';
import {
  CourseCreateParams,
  CourseGetParams,
  CourseListParams,
  CourseSearchParams,
  CourseUpdateParams,
  Courses,
} from './courses/courses';
import * as CustomAPI from './custom/custom';
import {
  Custom,
  CustomCreateParams,
  CustomDeleteParams,
  CustomGetParams,
  CustomListParams,
  CustomMergeParams,
  CustomSearchParams,
  CustomUpdateParams,
} from './custom/custom';
import * as DealsAPI from './deals/deals';
import {
  DealCreateParams,
  DealGetParams,
  DealListParams,
  DealMergeParams,
  DealSearchParams,
  DealUpdateParams,
  Deals,
} from './deals/deals';
import * as DiscountsAPI from './discounts/discounts';
import {
  DiscountCreateParams,
  DiscountGetParams,
  DiscountListParams,
  DiscountSearchParams,
  DiscountUpdateParams,
  Discounts,
} from './discounts/discounts';
import * as EmailsAPI from './emails/emails';
import {
  EmailCreateParams,
  EmailGetParams,
  EmailListParams,
  EmailSearchParams,
  EmailUpdateParams,
  Emails,
} from './emails/emails';
import * as FeedbackSubmissionsAPI from './feedback-submissions/feedback-submissions';
import {
  FeedbackSubmissionGetParams,
  FeedbackSubmissionListParams,
  FeedbackSubmissionSearchParams,
  FeedbackSubmissions,
} from './feedback-submissions/feedback-submissions';
import * as FeesAPI from './fees/fees';
import {
  FeeCreateParams,
  FeeGetParams,
  FeeListParams,
  FeeSearchParams,
  FeeUpdateParams,
  Fees,
} from './fees/fees';
import * as GoalTargetsAPI from './goal-targets/goal-targets';
import {
  GoalTargetCreateParams,
  GoalTargetGetParams,
  GoalTargetListParams,
  GoalTargetSearchParams,
  GoalTargetUpdateParams,
  GoalTargets,
} from './goal-targets/goal-targets';
import * as InvoicesAPI from './invoices/invoices';
import {
  InvoiceCreateParams,
  InvoiceGetParams,
  InvoiceListParams,
  InvoiceSearchParams,
  InvoiceUpdateParams,
  Invoices,
} from './invoices/invoices';
import * as LeadsAPI from './leads/leads';
import {
  LeadCreateParams,
  LeadGetParams,
  LeadListParams,
  LeadSearchParams,
  LeadUpdateParams,
  Leads,
} from './leads/leads';
import * as LineItemsAPI from './line-items/line-items';
import {
  LineItemCreateParams,
  LineItemGetParams,
  LineItemListParams,
  LineItemSearchParams,
  LineItemUpdateParams,
  LineItems,
} from './line-items/line-items';
import * as ListingsAPI from './listings/listings';
import {
  ListingCreateParams,
  ListingGetParams,
  ListingListParams,
  ListingSearchParams,
  ListingUpdateParams,
  Listings,
} from './listings/listings';
import * as MeetingsAPI from './meetings/meetings';
import {
  MeetingCreateParams,
  MeetingGetParams,
  MeetingListParams,
  MeetingSearchParams,
  MeetingUpdateParams,
  Meetings,
} from './meetings/meetings';
import * as NotesAPI from './notes/notes';
import {
  NoteCreateParams,
  NoteGetParams,
  NoteListParams,
  NoteSearchParams,
  NoteUpdateParams,
  Notes,
} from './notes/notes';
import * as ObjectsObjectsAPI from './objects_/objects_';
import {
  ObjectCreateParams,
  ObjectDeleteParams,
  ObjectGetParams,
  ObjectListParams,
  ObjectSearchParams,
  ObjectUpdateParams,
  Objects as ObjectsAPIObjects,
} from './objects_/objects_';
import * as OrdersAPI from './orders/orders';
import {
  OrderCreateParams,
  OrderGetParams,
  OrderListParams,
  OrderSearchParams,
  OrderUpdateParams,
  Orders,
} from './orders/orders';
import * as PartnerClientsAPI from './partner-clients/partner-clients';
import {
  PartnerClientGetParams,
  PartnerClientListParams,
  PartnerClientSearchParams,
  PartnerClientUpdateParams,
  PartnerClients,
} from './partner-clients/partner-clients';
import * as PartnerServicesAPI from './partner-services/partner-services';
import {
  PartnerServiceGetParams,
  PartnerServiceListParams,
  PartnerServiceSearchParams,
  PartnerServiceUpdateParams,
  PartnerServices,
} from './partner-services/partner-services';
import * as PostalMailAPI from './postal-mail/postal-mail';
import {
  PostalMail,
  PostalMailCreateParams,
  PostalMailGetParams,
  PostalMailListParams,
  PostalMailSearchParams,
  PostalMailUpdateParams,
} from './postal-mail/postal-mail';
import * as ProductsAPI from './products/products';
import {
  ProductCreateParams,
  ProductGetParams,
  ProductListParams,
  ProductSearchParams,
  ProductUpdateParams,
  Products,
} from './products/products';
import * as ProjectsAPI from './projects/projects';
import {
  ProjectCreateParams,
  ProjectGetParams,
  ProjectListParams,
  ProjectMergeParams,
  ProjectSearchParams,
  ProjectUpdateParams,
  Projects,
} from './projects/projects';
import * as QuotesAPI from './quotes/quotes';
import {
  QuoteCreateParams,
  QuoteGetParams,
  QuoteListParams,
  QuoteSearchParams,
  QuoteUpdateParams,
  Quotes,
} from './quotes/quotes';
import * as ServicesAPI from './services/services';
import {
  ServiceCreateParams,
  ServiceGetParams,
  ServiceListParams,
  ServiceSearchParams,
  ServiceUpdateParams,
  Services,
} from './services/services';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionGetParams,
  SubscriptionListParams,
  SubscriptionSearchParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions/subscriptions';
import * as TasksAPI from './tasks/tasks';
import {
  TaskCreateParams,
  TaskGetParams,
  TaskListParams,
  TaskSearchParams,
  TaskUpdateParams,
  Tasks,
} from './tasks/tasks';
import * as TaxesAPI from './taxes/taxes';
import {
  TaxCreateParams,
  TaxGetParams,
  TaxListParams,
  TaxSearchParams,
  TaxUpdateParams,
  Taxes,
} from './taxes/taxes';
import * as TicketsAPI from './tickets/tickets';
import {
  TicketCreateParams,
  TicketGetParams,
  TicketListParams,
  TicketMergeParams,
  TicketSearchParams,
  TicketUpdateParams,
  Tickets,
} from './tickets/tickets';
import * as UsersAPI from './users/users';
import {
  UserCreateParams,
  UserGetParams,
  UserListParams,
  UserSearchParams,
  UserUpdateParams,
  Users,
} from './users/users';
import { Page } from '../../../core/pagination';

export class Objects extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  carts: CartsAPI.Carts = new CartsAPI.Carts(this._client);
  commercePayments: CommercePaymentsAPI.CommercePayments = new CommercePaymentsAPI.CommercePayments(
    this._client,
  );
  communications: CommunicationsAPI.Communications = new CommunicationsAPI.Communications(this._client);
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
  courses: CoursesAPI.Courses = new CoursesAPI.Courses(this._client);
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  deals: DealsAPI.Deals = new DealsAPI.Deals(this._client);
  discounts: DiscountsAPI.Discounts = new DiscountsAPI.Discounts(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  feedbackSubmissions: FeedbackSubmissionsAPI.FeedbackSubmissions =
    new FeedbackSubmissionsAPI.FeedbackSubmissions(this._client);
  fees: FeesAPI.Fees = new FeesAPI.Fees(this._client);
  goalTargets: GoalTargetsAPI.GoalTargets = new GoalTargetsAPI.GoalTargets(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  leads: LeadsAPI.Leads = new LeadsAPI.Leads(this._client);
  lineItems: LineItemsAPI.LineItems = new LineItemsAPI.LineItems(this._client);
  listings: ListingsAPI.Listings = new ListingsAPI.Listings(this._client);
  meetings: MeetingsAPI.Meetings = new MeetingsAPI.Meetings(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  objects: ObjectsObjectsAPI.Objects = new ObjectsObjectsAPI.Objects(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  partnerClients: PartnerClientsAPI.PartnerClients = new PartnerClientsAPI.PartnerClients(this._client);
  partnerServices: PartnerServicesAPI.PartnerServices = new PartnerServicesAPI.PartnerServices(this._client);
  postalMail: PostalMailAPI.PostalMail = new PostalMailAPI.PostalMail(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  taxes: TaxesAPI.Taxes = new TaxesAPI.Taxes(this._client);
  tickets: TicketsAPI.Tickets = new TicketsAPI.Tickets(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export type SimplePublicObjectWithAssociationsPage = Page<SimplePublicObjectWithAssociations>;

/**
 * Contains the id and type of an association
 */
export interface AssociatedID {
  /**
   * The ID for the association type.
   */
  id: string;

  /**
   * The type of associations.
   */
  type: string;
}

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

/**
 * Specifies the input for reading a batch of CRM objects, including arrays of
 * object IDs, requested property names (with optional history), and an optional
 * unique identifying property.
 */
export interface BatchReadInputSimplePublicObjectID {
  inputs: Array<SimplePublicObjectID>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: Array<string>;

  /**
   * Key-value pairs for setting properties for the new object and their histories.
   */
  propertiesWithHistory: Array<string>;

  /**
   * When using a custom unique value property to retrieve records, the name of the
   * property. Do not include this parameter if retrieving by record ID.
   */
  idProperty?: string;
}

/**
 * A public object batch response object
 */
export interface BatchResponseSimplePublicObject {
  /**
   * The timestamp when the batch processing was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<CrmAPI.SimplePublicObject>;

  /**
   * The timestamp when the batch processing began, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request: "PENDING", "PROCESSING",
   * "CANCELLED", or "COMPLETE"
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors that occurred during the batch operation.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch request was initially made, in ISO 8601 format.
   */
  requestedAt?: string;
}

/**
 * Represents the result of a batch upsert operation, including the operation’s
 * status, timestamps, and a list of successfully created or updated objects.
 */
export interface BatchResponseSimplePublicUpsertObject {
  /**
   * The timestamp when the batch process was completed, in ISO 8601 format.
   */
  completedAt: string;

  results: Array<SimplePublicUpsertObject>;

  /**
   * The timestamp when the batch process began execution, in ISO 8601 format.
   */
  startedAt: string;

  /**
   * The status of the batch processing request. Can be: "PENDING", "PROCESSING",
   * "CANCELED", or "COMPLETE".
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  /**
   * An object containing relevant links related to the batch request.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors that occurred during the operation.
   */
  numErrors?: number;

  /**
   * The timestamp when the batch process was initiated, in ISO 8601 format.
   */
  requestedAt?: string;
}

export interface CollectionResponseAssociatedID {
  results: Array<AssociatedID>;

  paging?: Shared.Paging;
}

export interface CollectionResponseSimplePublicObjectWithAssociationsForwardPaging {
  results: Array<SimplePublicObjectWithAssociations>;

  paging?: Shared.ForwardPaging;
}

export interface PublicAssociationsForObject {
  /**
   * Contains the Id of a Public Object
   */
  to: Shared.PublicObjectID;

  types: Array<Shared.AssociationSpec>;
}

/**
 * Input data for merging two records.
 */
export interface PublicMergeInput {
  /**
   * The ID of the company to merge into the primary.
   */
  objectIdToMerge: string;

  /**
   * The ID of the primary company, which the other will merge into.
   */
  primaryObjectId: string;
}

/**
 * Contains an array of CRM object records to be processed in a batch operation,
 * each defined by their ID and properties.
 */
export interface SimplePublicObjectBatchInput {
  /**
   * The id to be updated. This can be the object id, or the unique property value of
   * the idProperty property
   */
  id: string;

  /**
   * Key-value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * A unique identifier for tracing the request.
   */
  objectWriteTraceId?: string;
}

/**
 * An input object that contains a collection of objects to be created together in
 * a batch.
 */
export interface SimplePublicObjectBatchInputForCreate {
  associations: Array<PublicAssociationsForObject>;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * An identifier used for tracing the creation or update request of the object.
   */
  objectWriteTraceId?: string;
}

/**
 * Represents an object used in batch upsert operations, containing an object’s
 * unique identifier, its properties, and optionally the unique property name and a
 * write trace ID.
 */
export interface SimplePublicObjectBatchInputUpsert {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string;

  /**
   * An identifier for tracing the creation request.
   */
  objectWriteTraceId?: string;
}

/**
 * Contains the Id of a Public Object
 */
export interface SimplePublicObjectID {
  /**
   * The unique ID of the object.
   */
  id: string;
}

/**
 * Represents the input required to create or update a CRM object, containing an
 * object with property names and their corresponding values.
 */
export interface SimplePublicObjectInput {
  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };
}

/**
 * Is the input object used to create a new CRM object, containing the properties
 * to be set and optional associations to link the new record with other CRM
 * objects.
 */
export interface SimplePublicObjectInputForCreate {
  associations: Array<PublicAssociationsForObject>;

  /**
   * Key-value pairs for setting properties for the new object.
   */
  properties: { [key: string]: string };
}

/**
 * Represents a CRM object along with its properties, timestamps, and a set of
 * associated object IDs grouped by association type.
 */
export interface SimplePublicObjectWithAssociations {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * Whether the object is archived.
   */
  archived: boolean;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string | null };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * A list defining relationships with other objects.
   */
  associations?: { [key: string]: CollectionResponseAssociatedID };

  /**
   * An identifier used for tracing the creation or update request of the object.
   */
  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<CrmAPI.ValueWithTimestamp> };

  /**
   * The URL on the API that provide direct navigation to the corresponding UI pages
   * for the connectors.
   */
  url?: string;
}

/**
 * Represents a CRM object that has either been created or updated (upserted)
 */
export interface SimplePublicUpsertObject {
  /**
   * The unique ID of the object.
   */
  id: string;

  /**
   * Whether the object is archived.
   */
  archived: boolean;

  /**
   * The timestamp when the object was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Whether the property is new.
   */
  new: boolean;

  /**
   * Key value pairs representing the properties of the object.
   */
  properties: { [key: string]: string };

  /**
   * The timestamp when the object was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * The timestamp when the object was archived, in ISO 8601 format.
   */
  archivedAt?: string;

  /**
   * An identifier used for tracing the write request for the object.
   */
  objectWriteTraceId?: string;

  /**
   * Key-value pairs representing the properties of the object along with their
   * history.
   */
  propertiesWithHistory?: { [key: string]: Array<CrmAPI.ValueWithTimestamp> };

  /**
   * The URL associated with the object.
   */
  url?: string;
}

Objects.Calls = Calls;
Objects.Carts = Carts;
Objects.CommercePayments = CommercePayments;
Objects.Communications = Communications;
Objects.Companies = Companies;
Objects.Contacts = Contacts;
Objects.Contracts = Contracts;
Objects.Courses = Courses;
Objects.Custom = Custom;
Objects.Deals = Deals;
Objects.Discounts = Discounts;
Objects.Emails = Emails;
Objects.FeedbackSubmissions = FeedbackSubmissions;
Objects.Fees = Fees;
Objects.GoalTargets = GoalTargets;
Objects.Invoices = Invoices;
Objects.Leads = Leads;
Objects.LineItems = LineItems;
Objects.Listings = Listings;
Objects.Meetings = Meetings;
Objects.Notes = Notes;
Objects.Objects = ObjectsAPIObjects;
Objects.Orders = Orders;
Objects.PartnerClients = PartnerClients;
Objects.PartnerServices = PartnerServices;
Objects.PostalMail = PostalMail;
Objects.Products = Products;
Objects.Projects = Projects;
Objects.Quotes = Quotes;
Objects.Services = Services;
Objects.Subscriptions = Subscriptions;
Objects.Tasks = Tasks;
Objects.Taxes = Taxes;
Objects.Tickets = Tickets;
Objects.Users = Users;

export declare namespace Objects {
  export {
    type AssociatedID as AssociatedID,
    type BatchInputSimplePublicObjectBatchInput as BatchInputSimplePublicObjectBatchInput,
    type BatchInputSimplePublicObjectBatchInputForCreate as BatchInputSimplePublicObjectBatchInputForCreate,
    type BatchInputSimplePublicObjectBatchInputUpsert as BatchInputSimplePublicObjectBatchInputUpsert,
    type BatchInputSimplePublicObjectID as BatchInputSimplePublicObjectID,
    type BatchReadInputSimplePublicObjectID as BatchReadInputSimplePublicObjectID,
    type BatchResponseSimplePublicObject as BatchResponseSimplePublicObject,
    type BatchResponseSimplePublicUpsertObject as BatchResponseSimplePublicUpsertObject,
    type CollectionResponseAssociatedID as CollectionResponseAssociatedID,
    type CollectionResponseSimplePublicObjectWithAssociationsForwardPaging as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    type PublicAssociationsForObject as PublicAssociationsForObject,
    type PublicMergeInput as PublicMergeInput,
    type SimplePublicObjectBatchInput as SimplePublicObjectBatchInput,
    type SimplePublicObjectBatchInputForCreate as SimplePublicObjectBatchInputForCreate,
    type SimplePublicObjectBatchInputUpsert as SimplePublicObjectBatchInputUpsert,
    type SimplePublicObjectID as SimplePublicObjectID,
    type SimplePublicObjectInput as SimplePublicObjectInput,
    type SimplePublicObjectInputForCreate as SimplePublicObjectInputForCreate,
    type SimplePublicObjectWithAssociations as SimplePublicObjectWithAssociations,
    type SimplePublicUpsertObject as SimplePublicUpsertObject,
  };

  export {
    Calls as Calls,
    type CallCreateParams as CallCreateParams,
    type CallUpdateParams as CallUpdateParams,
    type CallListParams as CallListParams,
    type CallGetParams as CallGetParams,
    type CallSearchParams as CallSearchParams,
  };

  export {
    Carts as Carts,
    type CartCreateParams as CartCreateParams,
    type CartUpdateParams as CartUpdateParams,
    type CartListParams as CartListParams,
    type CartGetParams as CartGetParams,
    type CartSearchParams as CartSearchParams,
  };

  export {
    CommercePayments as CommercePayments,
    type CommercePaymentCreateParams as CommercePaymentCreateParams,
    type CommercePaymentUpdateParams as CommercePaymentUpdateParams,
    type CommercePaymentListParams as CommercePaymentListParams,
    type CommercePaymentGetParams as CommercePaymentGetParams,
    type CommercePaymentSearchParams as CommercePaymentSearchParams,
  };

  export {
    Communications as Communications,
    type CommunicationCreateParams as CommunicationCreateParams,
    type CommunicationUpdateParams as CommunicationUpdateParams,
    type CommunicationListParams as CommunicationListParams,
    type CommunicationGetParams as CommunicationGetParams,
    type CommunicationSearchParams as CommunicationSearchParams,
  };

  export {
    Companies as Companies,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyGetParams as CompanyGetParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanySearchParams as CompanySearchParams,
  };

  export {
    Contacts as Contacts,
    type PublicGdprDeleteInput as PublicGdprDeleteInput,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactGdprDeleteParams as ContactGdprDeleteParams,
    type ContactGetParams as ContactGetParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Contracts as Contracts,
    type ContractCreateParams as ContractCreateParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
    type ContractGetParams as ContractGetParams,
    type ContractSearchParams as ContractSearchParams,
  };

  export {
    Courses as Courses,
    type CourseCreateParams as CourseCreateParams,
    type CourseUpdateParams as CourseUpdateParams,
    type CourseListParams as CourseListParams,
    type CourseGetParams as CourseGetParams,
    type CourseSearchParams as CourseSearchParams,
  };

  export {
    Custom as Custom,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
    type CustomMergeParams as CustomMergeParams,
    type CustomSearchParams as CustomSearchParams,
  };

  export {
    Deals as Deals,
    type DealCreateParams as DealCreateParams,
    type DealUpdateParams as DealUpdateParams,
    type DealListParams as DealListParams,
    type DealGetParams as DealGetParams,
    type DealMergeParams as DealMergeParams,
    type DealSearchParams as DealSearchParams,
  };

  export {
    Discounts as Discounts,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountUpdateParams as DiscountUpdateParams,
    type DiscountListParams as DiscountListParams,
    type DiscountGetParams as DiscountGetParams,
    type DiscountSearchParams as DiscountSearchParams,
  };

  export {
    Emails as Emails,
    type EmailCreateParams as EmailCreateParams,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailGetParams as EmailGetParams,
    type EmailSearchParams as EmailSearchParams,
  };

  export {
    FeedbackSubmissions as FeedbackSubmissions,
    type FeedbackSubmissionListParams as FeedbackSubmissionListParams,
    type FeedbackSubmissionGetParams as FeedbackSubmissionGetParams,
    type FeedbackSubmissionSearchParams as FeedbackSubmissionSearchParams,
  };

  export {
    Fees as Fees,
    type FeeCreateParams as FeeCreateParams,
    type FeeUpdateParams as FeeUpdateParams,
    type FeeListParams as FeeListParams,
    type FeeGetParams as FeeGetParams,
    type FeeSearchParams as FeeSearchParams,
  };

  export {
    GoalTargets as GoalTargets,
    type GoalTargetCreateParams as GoalTargetCreateParams,
    type GoalTargetUpdateParams as GoalTargetUpdateParams,
    type GoalTargetListParams as GoalTargetListParams,
    type GoalTargetGetParams as GoalTargetGetParams,
    type GoalTargetSearchParams as GoalTargetSearchParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceGetParams as InvoiceGetParams,
    type InvoiceSearchParams as InvoiceSearchParams,
  };

  export {
    Leads as Leads,
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
    type LeadGetParams as LeadGetParams,
    type LeadSearchParams as LeadSearchParams,
  };

  export {
    LineItems as LineItems,
    type LineItemCreateParams as LineItemCreateParams,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
    type LineItemGetParams as LineItemGetParams,
    type LineItemSearchParams as LineItemSearchParams,
  };

  export {
    Listings as Listings,
    type ListingCreateParams as ListingCreateParams,
    type ListingUpdateParams as ListingUpdateParams,
    type ListingListParams as ListingListParams,
    type ListingGetParams as ListingGetParams,
    type ListingSearchParams as ListingSearchParams,
  };

  export {
    Meetings as Meetings,
    type MeetingCreateParams as MeetingCreateParams,
    type MeetingUpdateParams as MeetingUpdateParams,
    type MeetingListParams as MeetingListParams,
    type MeetingGetParams as MeetingGetParams,
    type MeetingSearchParams as MeetingSearchParams,
  };

  export {
    Notes as Notes,
    type NoteCreateParams as NoteCreateParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
    type NoteGetParams as NoteGetParams,
    type NoteSearchParams as NoteSearchParams,
  };

  export {
    ObjectsAPIObjects as Objects,
    type ObjectCreateParams as ObjectCreateParams,
    type ObjectUpdateParams as ObjectUpdateParams,
    type ObjectListParams as ObjectListParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectGetParams as ObjectGetParams,
    type ObjectSearchParams as ObjectSearchParams,
  };

  export {
    Orders as Orders,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
    type OrderGetParams as OrderGetParams,
    type OrderSearchParams as OrderSearchParams,
  };

  export {
    PartnerClients as PartnerClients,
    type PartnerClientUpdateParams as PartnerClientUpdateParams,
    type PartnerClientListParams as PartnerClientListParams,
    type PartnerClientGetParams as PartnerClientGetParams,
    type PartnerClientSearchParams as PartnerClientSearchParams,
  };

  export {
    PartnerServices as PartnerServices,
    type PartnerServiceUpdateParams as PartnerServiceUpdateParams,
    type PartnerServiceListParams as PartnerServiceListParams,
    type PartnerServiceGetParams as PartnerServiceGetParams,
    type PartnerServiceSearchParams as PartnerServiceSearchParams,
  };

  export {
    PostalMail as PostalMail,
    type PostalMailCreateParams as PostalMailCreateParams,
    type PostalMailUpdateParams as PostalMailUpdateParams,
    type PostalMailListParams as PostalMailListParams,
    type PostalMailGetParams as PostalMailGetParams,
    type PostalMailSearchParams as PostalMailSearchParams,
  };

  export {
    Products as Products,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductGetParams as ProductGetParams,
    type ProductSearchParams as ProductSearchParams,
  };

  export {
    Projects as Projects,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectMergeParams as ProjectMergeParams,
    type ProjectSearchParams as ProjectSearchParams,
  };

  export {
    Quotes as Quotes,
    type QuoteCreateParams as QuoteCreateParams,
    type QuoteUpdateParams as QuoteUpdateParams,
    type QuoteListParams as QuoteListParams,
    type QuoteGetParams as QuoteGetParams,
    type QuoteSearchParams as QuoteSearchParams,
  };

  export {
    Services as Services,
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceGetParams as ServiceGetParams,
    type ServiceSearchParams as ServiceSearchParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionGetParams as SubscriptionGetParams,
    type SubscriptionSearchParams as SubscriptionSearchParams,
  };

  export {
    Tasks as Tasks,
    type TaskCreateParams as TaskCreateParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskGetParams as TaskGetParams,
    type TaskSearchParams as TaskSearchParams,
  };

  export {
    Taxes as Taxes,
    type TaxCreateParams as TaxCreateParams,
    type TaxUpdateParams as TaxUpdateParams,
    type TaxListParams as TaxListParams,
    type TaxGetParams as TaxGetParams,
    type TaxSearchParams as TaxSearchParams,
  };

  export {
    Tickets as Tickets,
    type TicketCreateParams as TicketCreateParams,
    type TicketUpdateParams as TicketUpdateParams,
    type TicketListParams as TicketListParams,
    type TicketGetParams as TicketGetParams,
    type TicketMergeParams as TicketMergeParams,
    type TicketSearchParams as TicketSearchParams,
  };

  export {
    Users as Users,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetParams as UserGetParams,
    type UserSearchParams as UserSearchParams,
  };
}
