// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Forms extends APIResource {
  /**
   * Add a new `hubspot` form
   *
   * @example
   * ```ts
   * const formDefinitionBase =
   *   await client.marketing.forms.create();
   * ```
   */
  create(body: FormCreateParams, options?: RequestOptions): APIPromise<FormDefinitionBase> {
    return this._client.post('/marketing/v3/forms/', { body, ...options });
  }

  /**
   * Update some of the form definition components
   *
   * @example
   * ```ts
   * const formDefinitionBase =
   *   await client.marketing.forms.update('formId');
   * ```
   */
  update(formID: string, body: FormUpdateParams, options?: RequestOptions): APIPromise<FormDefinitionBase> {
    return this._client.patch(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }

  /**
   * Returns a list of forms based on the search filters. By default, it returns the
   * first 20 `hubspot` forms
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const hubSpotFormDefinition of client.marketing.forms.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FormListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubSpotFormDefinitionsPage, HubSpotFormDefinition> {
    return this._client.getAPIList('/marketing/v3/forms/', Page<HubSpotFormDefinition>, {
      query,
      ...options,
    });
  }

  /**
   * Archive a form definition. New submissions will not be accepted and the form
   * definition will be permanently deleted after 3 months.
   *
   * @example
   * ```ts
   * await client.marketing.forms.delete('formId');
   * ```
   */
  delete(formID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/v3/forms/${formID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a form based on the form ID provided.
   *
   * @example
   * ```ts
   * const formDefinitionBase =
   *   await client.marketing.forms.read('formId');
   * ```
   */
  read(
    formID: string,
    query: FormReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FormDefinitionBase> {
    return this._client.get(path`/marketing/v3/forms/${formID}`, { query, ...options });
  }

  /**
   * Update all fields of a hubspot form definition.
   *
   * @example
   * ```ts
   * const formDefinitionBase =
   *   await client.marketing.forms.replace('formId');
   * ```
   */
  replace(formID: string, body: FormReplaceParams, options?: RequestOptions): APIPromise<FormDefinitionBase> {
    return this._client.put(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }
}

export type HubSpotFormDefinitionsPage = Page<HubSpotFormDefinition>;

export interface CollectionResponseFormDefinitionBaseForwardPaging {
  results: Array<HubSpotFormDefinition>;

  paging?: Shared.ForwardPaging;
}

/**
 * A form field used to select a date
 */
export interface DatepickerField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'datepicker';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * A form field that will be displayed based on what the customer entered in
 * another field.
 */
export interface DependentField {
  /**
   * A condition based on customer input
   */
  dependentCondition: DependentFieldFilter;

  /**
   * A form field used for collecting an email address.
   */
  dependentField:
    | EmailField
    | PhoneField
    | MobilePhoneField
    | SingleLineTextField
    | MultiLineTextField
    | NumberField
    | SingleCheckboxField
    | MultipleCheckboxesField
    | DropdownField
    | RadioField
    | DatepickerField
    | FileField
    | PaymentLinkRadioField;
}

/**
 * A condition based on customer input
 */
export interface DependentFieldFilter {
  operator:
    | 'eq'
    | 'neq'
    | 'contains'
    | 'doesnt_contain'
    | 'str_starts_with'
    | 'str_ends_with'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'between'
    | 'not_between'
    | 'within_time_reverse'
    | 'within_time'
    | 'set_any'
    | 'set_not_any'
    | 'set_all'
    | 'set_not_all'
    | 'set_eq'
    | 'set_neq'
    | 'is_not_empty';

  rangeEnd: string;

  rangeStart: string;

  value: string;

  values: Array<string>;
}

/**
 * A field consisting of a drop down with multiple choices.
 */
export interface DropdownField {
  /**
   * The values selected by default. Those values will be submitted unless the
   * customer modifies them.
   */
  defaultValues: Array<string>;

  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'dropdown';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * The list of available choices for this field.
   */
  options: Array<EnumeratedFieldOption>;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * A form field used for collecting an email address.
 */
export interface EmailField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'email';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * Describes how an email address should be validated.
   */
  validation: EmailFieldValidation;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * Describes how an email address should be validated.
 */
export interface EmailFieldValidation {
  /**
   * A list of email domains to block.
   */
  blockedEmailDomains: Array<string>;

  /**
   * Whether to block the free email providers.
   */
  useDefaultBlockList: boolean;
}

export interface EnumeratedFieldOption {
  /**
   * The order the choices will be displayed in.
   */
  displayOrder: number;

  /**
   * The visible label for this choice.
   */
  label: string;

  /**
   * The value which will be submitted if this choice is selected.
   */
  value: string;

  description?: string;
}

/**
 * A collection of up to three form fields usually displayed in a row.
 */
export interface FieldGroup {
  /**
   * The form fields included in the group
   */
  fields: Array<
    | EmailField
    | PhoneField
    | MobilePhoneField
    | SingleLineTextField
    | MultiLineTextField
    | NumberField
    | SingleCheckboxField
    | MultipleCheckboxesField
    | DropdownField
    | RadioField
    | DatepickerField
    | FileField
    | PaymentLinkRadioField
  >;

  groupType: 'default_group' | 'progressive' | 'queued';

  /**
   * The type of rich text included. The default value is text.
   */
  richTextType: 'text' | 'image';

  /**
   * A block of rich text or an image. Those can be used to add extra information for
   * the customers filling in the form. If the field group includes fields, the rich
   * text will be displayed before the fields.
   */
  richText?: string;
}

/**
 * A form field used for uploading one or more files.
 */
export interface FileField {
  /**
   * Whether to allow the upload of multiple files.
   */
  allowMultipleFiles: boolean;

  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'file';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

export interface FormDefinitionBase {
  id: string;

  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  /**
   * Options for styling the form.
   */
  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface HubSpotFormDefinitionCreateRequest {
  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  /**
   * Options for styling the form.
   */
  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

/**
 * Options for styling the form.
 */
export interface FormDisplayOptions {
  /**
   * Whether the form will render as raw HTML as opposed to inside an iFrame.
   */
  renderRawHtml: boolean;

  /**
   * Styling options for the form
   */
  style: FormStyle;

  /**
   * The text displayed on the form submit button.
   */
  submitButtonText: string;

  /**
   * The theme used for styling the input fields. This will not apply if the form is
   * added to a HubSpot CMS page.
   */
  theme: 'default_style' | 'canvas' | 'linear' | 'round' | 'sharp' | 'legacy';

  cssClass?: string;
}

/**
 * What should happen after the customer submits the form.
 */
export interface FormPostSubmitAction {
  /**
   * The action to take after submit. The default action is displaying a thank you
   * message.
   */
  type: 'thank_you' | 'redirect_url';

  /**
   * The thank you text or the page to redirect to.
   */
  value: string;
}

/**
 * Styling options for the form
 */
export interface FormStyle {
  backgroundWidth: string;

  fontFamily: string;

  helpTextColor: string;

  helpTextSize: string;

  labelTextColor: string;

  labelTextSize: string;

  legalConsentTextColor: string;

  legalConsentTextSize: string;

  submitAlignment: 'left' | 'right' | 'center';

  submitColor: string;

  submitFontColor: string;

  submitSize: string;
}

export interface HubSpotFormConfiguration {
  /**
   * Whether to add a reset link to the form. This removes any pre-populated content
   * on the form and creates a new contact on submission.
   */
  allowLinkToResetKnownValues: boolean;

  /**
   * Whether the form can be archived.
   */
  archivable: boolean;

  /**
   * Whether the form can be cloned.
   */
  cloneable: boolean;

  /**
   * Whether to create a new contact when a form is submitted with an email address
   * that doesn’t match any in your existing contacts records.
   */
  createNewContactForNewEmail: boolean;

  /**
   * Whether the form can be edited.
   */
  editable: boolean;

  /**
   * The language of the form.
   */
  language:
    | 'af'
    | 'ar-eg'
    | 'bg'
    | 'bn'
    | 'ca-es'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'es-mx'
    | 'fi'
    | 'fr'
    | 'fr-ca'
    | 'he-il'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'ms'
    | 'nl'
    | 'no-no'
    | 'pl'
    | 'pt'
    | 'pt-br'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'th'
    | 'tl'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-cn'
    | 'zh-hk'
    | 'zh-tw';

  /**
   * Whether to send a notification email to the contact owner when a submission is
   * received.
   */
  notifyContactOwner: boolean;

  /**
   * The list of user IDs to receive a notification email when a submission is
   * received.
   */
  notifyRecipients: Array<string>;

  /**
   * What should happen after the customer submits the form.
   */
  postSubmitAction: FormPostSubmitAction;

  /**
   * Whether contact fields should pre-populate with known information when a contact
   * returns to your site.
   */
  prePopulateKnownValues: boolean;

  /**
   * Whether CAPTCHA (spam prevention) is enabled.
   */
  recaptchaEnabled: boolean;

  lifecycleStages?: Array<LifecycleStage>;
}

export interface HubSpotFormDefinition {
  id: string;

  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  /**
   * Options for styling the form.
   */
  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface HubSpotFormDefinitionCreateRequest {
  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  /**
   * Options for styling the form.
   */
  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface HubSpotFormDefinitionPatchRequest {
  /**
   * Whether this form is archived.
   */
  archived?: boolean;

  configuration?: HubSpotFormConfiguration;

  /**
   * Options for styling the form.
   */
  displayOptions?: FormDisplayOptions;

  /**
   * The fields in the form, grouped in rows.
   */
  fieldGroups?: Array<FieldGroup>;

  legalConsentOptions?:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  /**
   * The name of the form. Expected to be unique for a hub.
   */
  name?: string;
}

export interface LegalConsentCheckbox {
  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * Whether this checkbox is required when submitting the form.
   */
  required: boolean;

  subscriptionTypeId: number;
}

export interface LegalConsentOptionsExplicitConsentToProcess {
  communicationsCheckboxes: Array<LegalConsentCheckbox>;

  privacyText: string;

  type: 'explicit_consent_to_process';

  communicationConsentText?: string;

  consentToProcessCheckboxLabel?: string;

  consentToProcessFooterText?: string;

  consentToProcessText?: string;
}

export interface LegalConsentOptionsImplicitConsentToProcess {
  communicationsCheckboxes: Array<LegalConsentCheckbox>;

  privacyText: string;

  type: 'implicit_consent_to_process';

  communicationConsentText?: string;

  consentToProcessText?: string;
}

export interface LegalConsentOptionsLegitimateInterest {
  lawfulBasis: 'lead' | 'client' | 'other';

  privacyText: string;

  subscriptionTypeIds: Array<number>;

  type: 'legitimate_interest';
}

export interface LegalConsentOptionsNone {
  type: 'none';
}

export interface LifecycleStage {
  /**
   * The objectTypeId for both contact and company
   */
  objectTypeId: string;

  /**
   * The internal name of the contact's lifecycle stage set when submitting a form
   */
  value: string;
}

/**
 * A form field used for collecting a mobile phone number.
 */
export interface MobilePhoneField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'mobile_phone';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * Describes how a phone number should be validated.
   */
  validation: PhoneFieldValidation;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * A form field consisting of a multiple-line text box.
 */
export interface MultiLineTextField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'multi_line_text';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * A form field consisting of a set of checkboxes allowing multiple choices to be
 * selected at one time.
 */
export interface MultipleCheckboxesField {
  /**
   * The values selected by default. Those values will be submitted unless the
   * customer modifies them.
   */
  defaultValues: Array<string>;

  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'multiple_checkboxes';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * The list of available choices for this field.
   */
  options: Array<EnumeratedFieldOption>;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;
}

/**
 * A form field used for collecting a numeric value.
 */
export interface NumberField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'number';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;

  /**
   * Describes how a numeric value should be validated.
   */
  validation?: NumberFieldValidation;
}

/**
 * Describes how a numeric value should be validated.
 */
export interface NumberFieldValidation {
  maxAllowedDigits: number;

  minAllowedDigits: number;
}

export interface PaymentLinkRadioField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'payment_link_radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<EnumeratedFieldOption>;

  required: boolean;

  description?: string;
}

/**
 * A form field used for collecting a phone number.
 */
export interface PhoneField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'phone';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * Whether to display a country code drop down next to the phone field.
   */
  useCountryCodeSelect: boolean;

  /**
   * Describes how a phone number should be validated.
   */
  validation: PhoneFieldValidation;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * Describes how a phone number should be validated.
 */
export interface PhoneFieldValidation {
  maxAllowedDigits: number;

  minAllowedDigits: number;
}

/**
 * A form field consisting of a set of radio options, out of which one can be
 * selected at a time.
 */
export interface RadioField {
  /**
   * The values selected by default. Those values will be submitted unless the
   * customer modifies them.
   */
  defaultValues: Array<string>;

  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'radio';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * The list of available choices for this field.
   */
  options: Array<EnumeratedFieldOption>;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

/**
 * A form field consisting of a single checkbox.
 */
export interface SingleCheckboxField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'single_checkbox';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;
}

/**
 * A form field consisting of a single-line text box.
 */
export interface SingleLineTextField {
  /**
   * A list of other fields to make visible based on the value filled in for this
   * field.
   */
  dependentFields: Array<DependentField>;

  /**
   * Determines how the field will be displayed and validated.
   */
  fieldType: 'single_line_text';

  /**
   * Whether a field should be hidden or not. Hidden fields won't appear on the form,
   * but can be used to pass a value to a property without requiring the customer to
   * fill it in.
   */
  hidden: boolean;

  /**
   * The main label for the form field.
   */
  label: string;

  /**
   * The identifier of the field. In combination with the object type ID, it must be
   * unique.
   */
  name: string;

  /**
   * A unique ID for this field's CRM object type. For example a CONTACT field will
   * have the object type ID 0-1.
   */
  objectTypeId: string;

  /**
   * Whether a value for this field is required when submitting the form.
   */
  required: boolean;

  /**
   * The value filled in by default. This value will be submitted unless the customer
   * modifies it.
   */
  defaultValue?: string;

  /**
   * Additional text helping the customer to complete the field.
   */
  description?: string;

  /**
   * The prompt text showing when the field isn't filled in.
   */
  placeholder?: string;
}

export interface FormCreateParams {}

export interface FormUpdateParams {
  /**
   * Whether this form is archived.
   */
  archived?: boolean;

  configuration?: HubSpotFormConfiguration;

  /**
   * Options for styling the form.
   */
  displayOptions?: FormDisplayOptions;

  /**
   * The fields in the form, grouped in rows.
   */
  fieldGroups?: Array<FieldGroup>;

  legalConsentOptions?:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  /**
   * The name of the form. Expected to be unique for a hub.
   */
  name?: string;
}

export interface FormListParams extends PageParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;

  /**
   * The form types to be included in the results.
   */
  formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>;
}

export interface FormReadParams {
  /**
   * Whether to return only results that have been archived.
   */
  archived?: boolean;
}

export interface FormReplaceParams {}

export declare namespace Forms {
  export {
    type CollectionResponseFormDefinitionBaseForwardPaging as CollectionResponseFormDefinitionBaseForwardPaging,
    type DatepickerField as DatepickerField,
    type DependentField as DependentField,
    type DependentFieldFilter as DependentFieldFilter,
    type DropdownField as DropdownField,
    type EmailField as EmailField,
    type EmailFieldValidation as EmailFieldValidation,
    type EnumeratedFieldOption as EnumeratedFieldOption,
    type FieldGroup as FieldGroup,
    type FileField as FileField,
    type FormDefinitionBase as FormDefinitionBase,
    type FormDefinitionCreateRequestBase as FormDefinitionCreateRequestBase,
    type FormDisplayOptions as FormDisplayOptions,
    type FormPostSubmitAction as FormPostSubmitAction,
    type FormStyle as FormStyle,
    type HubSpotFormConfiguration as HubSpotFormConfiguration,
    type HubSpotFormDefinition as HubSpotFormDefinition,
    type HubSpotFormDefinitionCreateRequest as HubSpotFormDefinitionCreateRequest,
    type HubSpotFormDefinitionPatchRequest as HubSpotFormDefinitionPatchRequest,
    type LegalConsentCheckbox as LegalConsentCheckbox,
    type LegalConsentOptionsExplicitConsentToProcess as LegalConsentOptionsExplicitConsentToProcess,
    type LegalConsentOptionsImplicitConsentToProcess as LegalConsentOptionsImplicitConsentToProcess,
    type LegalConsentOptionsLegitimateInterest as LegalConsentOptionsLegitimateInterest,
    type LegalConsentOptionsNone as LegalConsentOptionsNone,
    type LifecycleStage as LifecycleStage,
    type MobilePhoneField as MobilePhoneField,
    type MultiLineTextField as MultiLineTextField,
    type MultipleCheckboxesField as MultipleCheckboxesField,
    type NumberField as NumberField,
    type NumberFieldValidation as NumberFieldValidation,
    type PaymentLinkRadioField as PaymentLinkRadioField,
    type PhoneField as PhoneField,
    type PhoneFieldValidation as PhoneFieldValidation,
    type RadioField as RadioField,
    type SingleCheckboxField as SingleCheckboxField,
    type SingleLineTextField as SingleLineTextField,
    type HubSpotFormDefinitionsPage as HubSpotFormDefinitionsPage,
    type FormCreateParams as FormCreateParams,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormReadParams as FormReadParams,
    type FormReplaceParams as FormReplaceParams,
  };
}
