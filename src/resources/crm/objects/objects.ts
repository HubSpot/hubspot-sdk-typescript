// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DealSplitsAPI from './deal-splits';
import {
  BatchResponseDealToDealSplits,
  BatchResponseDealToDealSplitsWithErrors,
  DealSplitBatchReadParams,
  DealSplitBatchUpsertParams,
  DealSplits,
  DealToDealSplits,
  PublicDealSplitInput,
  PublicDealSplitsBatchCreateRequest,
  PublicDealSplitsCreateRequest,
} from './deal-splits';
import * as SchemasAPI from './schemas';
import {
  ObjectSchema,
  ObjectSchemaEgg,
  ObjectTypeDefinition,
  ObjectTypeDefinitionPatch,
  ObjectTypePropertyCreate,
  SchemaArchiveAssociationParams,
  SchemaCreateAssociationParams,
  SchemaCreateParams,
  SchemaDeleteParams,
  SchemaListParams,
  SchemaUpdateParams,
  Schemas,
} from './schemas';
import * as AppointmentsAPI from './appointments/appointments';
import {
  AppointmentCreateParams,
  AppointmentGetParams,
  AppointmentListParams,
  AppointmentSearchParams,
  AppointmentUpdateParams,
  Appointments,
} from './appointments/appointments';
import * as CallsAPI from './calls/calls';
import {
  CallCreateParams,
  CallGetParams,
  CallListParams,
  CallSearchParams,
  CallUpdateParams,
  Calls,
} from './calls/calls';
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
} from './contacts/contacts';
import * as CustomAPI from './custom/custom';
import {
  Custom,
  CustomCreateParams,
  CustomDeleteParams,
  CustomListParams,
  CustomMergeParams,
  CustomReadParams,
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
import * as EmailsAPI from './emails/emails';
import {
  EmailCreateParams,
  EmailListParams,
  EmailReadParams,
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
import * as ObjectsAPI from './objects_/objects_';
import {
  ObjectCreateParams,
  ObjectDeleteParams,
  ObjectListParams,
  ObjectReadParams,
  ObjectSearchParams,
  ObjectUpdateParams,
  Objects as ObjectsAPIObjects,
} from './objects_/objects_';
import * as PartnerClientsAPI from './partner-clients/partner-clients';
import {
  PartnerClientGetParams,
  PartnerClientListParams,
  PartnerClientSearchParams,
  PartnerClientUpdateParams,
  PartnerClients,
} from './partner-clients/partner-clients';
import * as ServicesAPI from './services/services';
import {
  ServiceCreateParams,
  ServiceGetParams,
  ServiceListParams,
  ServiceSearchParams,
  ServiceUpdateParams,
  Services,
} from './services/services';
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

export class Objects extends APIResource {
  appointments: AppointmentsAPI.Appointments = new AppointmentsAPI.Appointments(this._client);
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  dealSplits: DealSplitsAPI.DealSplits = new DealSplitsAPI.DealSplits(this._client);
  deals: DealsAPI.Deals = new DealsAPI.Deals(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  feedbackSubmissions: FeedbackSubmissionsAPI.FeedbackSubmissions =
    new FeedbackSubmissionsAPI.FeedbackSubmissions(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  leads: LeadsAPI.Leads = new LeadsAPI.Leads(this._client);
  lineItems: LineItemsAPI.LineItems = new LineItemsAPI.LineItems(this._client);
  meetings: MeetingsAPI.Meetings = new MeetingsAPI.Meetings(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  partnerClients: PartnerClientsAPI.PartnerClients = new PartnerClientsAPI.PartnerClients(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  taxes: TaxesAPI.Taxes = new TaxesAPI.Taxes(this._client);
  tickets: TicketsAPI.Tickets = new TicketsAPI.Tickets(this._client);
}

Objects.Appointments = Appointments;
Objects.Calls = Calls;
Objects.Companies = Companies;
Objects.Contacts = Contacts;
Objects.Custom = Custom;
Objects.DealSplits = DealSplits;
Objects.Deals = Deals;
Objects.Emails = Emails;
Objects.FeedbackSubmissions = FeedbackSubmissions;
Objects.Invoices = Invoices;
Objects.Leads = Leads;
Objects.LineItems = LineItems;
Objects.Meetings = Meetings;
Objects.Notes = Notes;
Objects.Objects = ObjectsAPIObjects;
Objects.PartnerClients = PartnerClients;
Objects.Schemas = Schemas;
Objects.Services = Services;
Objects.Tasks = Tasks;
Objects.Taxes = Taxes;
Objects.Tickets = Tickets;

export declare namespace Objects {
  export {
    Appointments as Appointments,
    type AppointmentCreateParams as AppointmentCreateParams,
    type AppointmentUpdateParams as AppointmentUpdateParams,
    type AppointmentListParams as AppointmentListParams,
    type AppointmentGetParams as AppointmentGetParams,
    type AppointmentSearchParams as AppointmentSearchParams,
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
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactGdprDeleteParams as ContactGdprDeleteParams,
    type ContactGetParams as ContactGetParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Custom as Custom,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomMergeParams as CustomMergeParams,
    type CustomReadParams as CustomReadParams,
    type CustomSearchParams as CustomSearchParams,
  };

  export {
    DealSplits as DealSplits,
    type BatchResponseDealToDealSplits as BatchResponseDealToDealSplits,
    type BatchResponseDealToDealSplitsWithErrors as BatchResponseDealToDealSplitsWithErrors,
    type DealToDealSplits as DealToDealSplits,
    type PublicDealSplitInput as PublicDealSplitInput,
    type PublicDealSplitsBatchCreateRequest as PublicDealSplitsBatchCreateRequest,
    type PublicDealSplitsCreateRequest as PublicDealSplitsCreateRequest,
    type DealSplitBatchReadParams as DealSplitBatchReadParams,
    type DealSplitBatchUpsertParams as DealSplitBatchUpsertParams,
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
    Emails as Emails,
    type EmailCreateParams as EmailCreateParams,
    type EmailUpdateParams as EmailUpdateParams,
    type EmailListParams as EmailListParams,
    type EmailReadParams as EmailReadParams,
    type EmailSearchParams as EmailSearchParams,
  };

  export {
    FeedbackSubmissions as FeedbackSubmissions,
    type FeedbackSubmissionListParams as FeedbackSubmissionListParams,
    type FeedbackSubmissionGetParams as FeedbackSubmissionGetParams,
    type FeedbackSubmissionSearchParams as FeedbackSubmissionSearchParams,
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
    type ObjectReadParams as ObjectReadParams,
    type ObjectSearchParams as ObjectSearchParams,
  };

  export {
    PartnerClients as PartnerClients,
    type PartnerClientUpdateParams as PartnerClientUpdateParams,
    type PartnerClientListParams as PartnerClientListParams,
    type PartnerClientGetParams as PartnerClientGetParams,
    type PartnerClientSearchParams as PartnerClientSearchParams,
  };

  export {
    Schemas as Schemas,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaArchiveAssociationParams as SchemaArchiveAssociationParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
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
}
