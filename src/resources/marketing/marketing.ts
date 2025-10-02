// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailsAPI from './emails';
import { Emails } from './emails';
import * as FormsAPI from './forms';
import {
  FormCreateParams,
  FormListParams,
  FormReadParams,
  FormReplaceParams,
  FormUpdateParams,
  Forms,
  MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging,
  MarketingFormsDatepickerField,
  MarketingFormsDependentField,
  MarketingFormsDependentFieldFilter,
  MarketingFormsDropdownField,
  MarketingFormsEmailField,
  MarketingFormsEmailFieldValidation,
  MarketingFormsEnumeratedFieldOption,
  MarketingFormsFieldGroup,
  MarketingFormsFileField,
  MarketingFormsFormDefinitionBase,
  MarketingFormsFormDefinitionCreateRequestBase,
  MarketingFormsFormDisplayOptions,
  MarketingFormsFormPostSubmitAction,
  MarketingFormsFormStyle,
  MarketingFormsHubSpotFormConfiguration,
  MarketingFormsHubSpotFormDefinition,
  MarketingFormsHubSpotFormDefinitionCreateRequest,
  MarketingFormsHubSpotFormDefinitionPatchRequest,
  MarketingFormsLegalConsentCheckbox,
  MarketingFormsLegalConsentOptionsExplicitConsentToProcess,
  MarketingFormsLegalConsentOptionsImplicitConsentToProcess,
  MarketingFormsLegalConsentOptionsLegitimateInterest,
  MarketingFormsLegalConsentOptionsNone,
  MarketingFormsLifecycleStage,
  MarketingFormsMobilePhoneField,
  MarketingFormsMultiLineTextField,
  MarketingFormsMultipleCheckboxesField,
  MarketingFormsNumberField,
  MarketingFormsNumberFieldValidation,
  MarketingFormsPaymentLinkRadioField,
  MarketingFormsPhoneField,
  MarketingFormsPhoneFieldValidation,
  MarketingFormsRadioField,
  MarketingFormsSingleCheckboxField,
  MarketingFormsSingleLineTextField,
} from './forms';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  MarketingSubscriptionsActionResponseWithResultsPublicStatus,
  MarketingSubscriptionsActionResponseWithResultsPublicWideStatus,
  MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition,
  MarketingSubscriptionsBatchInputPublicStatusRequest,
  MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse,
  MarketingSubscriptionsBatchResponsePublicStatus,
  MarketingSubscriptionsBatchResponsePublicStatusBulkResponse,
  MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors,
  MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse,
  MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors,
  MarketingSubscriptionsPartialPublicStatusRequest,
  MarketingSubscriptionsPublicBulkOptOutFromAllResponse,
  MarketingSubscriptionsPublicStatus,
  MarketingSubscriptionsPublicStatusBulkResponse,
  MarketingSubscriptionsPublicStatusRequest,
  MarketingSubscriptionsPublicSubscriptionTranslation,
  MarketingSubscriptionsPublicWideStatus,
  MarketingSubscriptionsPublicWideStatusBulkResponse,
  MarketingSubscriptionsSubscriptionDefinition,
  SubscriptionSubscribeParams,
  SubscriptionUnsubscribeParams,
  Subscriptions,
} from './subscriptions/subscriptions';

export class Marketing extends APIResource {
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  forms: FormsAPI.Forms = new FormsAPI.Forms(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Marketing.Emails = Emails;
Marketing.Forms = Forms;
Marketing.Subscriptions = Subscriptions;

export declare namespace Marketing {
  export { Emails as Emails };

  export {
    Forms as Forms,
    type MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging as MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging,
    type MarketingFormsDatepickerField as MarketingFormsDatepickerField,
    type MarketingFormsDependentField as MarketingFormsDependentField,
    type MarketingFormsDependentFieldFilter as MarketingFormsDependentFieldFilter,
    type MarketingFormsDropdownField as MarketingFormsDropdownField,
    type MarketingFormsEmailField as MarketingFormsEmailField,
    type MarketingFormsEmailFieldValidation as MarketingFormsEmailFieldValidation,
    type MarketingFormsEnumeratedFieldOption as MarketingFormsEnumeratedFieldOption,
    type MarketingFormsFieldGroup as MarketingFormsFieldGroup,
    type MarketingFormsFileField as MarketingFormsFileField,
    type MarketingFormsFormDefinitionBase as MarketingFormsFormDefinitionBase,
    type MarketingFormsFormDefinitionCreateRequestBase as MarketingFormsFormDefinitionCreateRequestBase,
    type MarketingFormsFormDisplayOptions as MarketingFormsFormDisplayOptions,
    type MarketingFormsFormPostSubmitAction as MarketingFormsFormPostSubmitAction,
    type MarketingFormsFormStyle as MarketingFormsFormStyle,
    type MarketingFormsHubSpotFormConfiguration as MarketingFormsHubSpotFormConfiguration,
    type MarketingFormsHubSpotFormDefinition as MarketingFormsHubSpotFormDefinition,
    type MarketingFormsHubSpotFormDefinitionCreateRequest as MarketingFormsHubSpotFormDefinitionCreateRequest,
    type MarketingFormsHubSpotFormDefinitionPatchRequest as MarketingFormsHubSpotFormDefinitionPatchRequest,
    type MarketingFormsLegalConsentCheckbox as MarketingFormsLegalConsentCheckbox,
    type MarketingFormsLegalConsentOptionsExplicitConsentToProcess as MarketingFormsLegalConsentOptionsExplicitConsentToProcess,
    type MarketingFormsLegalConsentOptionsImplicitConsentToProcess as MarketingFormsLegalConsentOptionsImplicitConsentToProcess,
    type MarketingFormsLegalConsentOptionsLegitimateInterest as MarketingFormsLegalConsentOptionsLegitimateInterest,
    type MarketingFormsLegalConsentOptionsNone as MarketingFormsLegalConsentOptionsNone,
    type MarketingFormsLifecycleStage as MarketingFormsLifecycleStage,
    type MarketingFormsMobilePhoneField as MarketingFormsMobilePhoneField,
    type MarketingFormsMultiLineTextField as MarketingFormsMultiLineTextField,
    type MarketingFormsMultipleCheckboxesField as MarketingFormsMultipleCheckboxesField,
    type MarketingFormsNumberField as MarketingFormsNumberField,
    type MarketingFormsNumberFieldValidation as MarketingFormsNumberFieldValidation,
    type MarketingFormsPaymentLinkRadioField as MarketingFormsPaymentLinkRadioField,
    type MarketingFormsPhoneField as MarketingFormsPhoneField,
    type MarketingFormsPhoneFieldValidation as MarketingFormsPhoneFieldValidation,
    type MarketingFormsRadioField as MarketingFormsRadioField,
    type MarketingFormsSingleCheckboxField as MarketingFormsSingleCheckboxField,
    type MarketingFormsSingleLineTextField as MarketingFormsSingleLineTextField,
    type FormCreateParams as FormCreateParams,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormReadParams as FormReadParams,
    type FormReplaceParams as FormReplaceParams,
  };

  export {
    Subscriptions as Subscriptions,
    type MarketingSubscriptionsActionResponseWithResultsPublicStatus as MarketingSubscriptionsActionResponseWithResultsPublicStatus,
    type MarketingSubscriptionsActionResponseWithResultsPublicWideStatus as MarketingSubscriptionsActionResponseWithResultsPublicWideStatus,
    type MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition as MarketingSubscriptionsActionResponseWithResultsSubscriptionDefinition,
    type MarketingSubscriptionsBatchInputPublicStatusRequest as MarketingSubscriptionsBatchInputPublicStatusRequest,
    type MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse as MarketingSubscriptionsBatchResponsePublicBulkOptOutFromAllResponse,
    type MarketingSubscriptionsBatchResponsePublicStatus as MarketingSubscriptionsBatchResponsePublicStatus,
    type MarketingSubscriptionsBatchResponsePublicStatusBulkResponse as MarketingSubscriptionsBatchResponsePublicStatusBulkResponse,
    type MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors as MarketingSubscriptionsBatchResponsePublicStatusBulkResponseWithErrors,
    type MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse as MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponse,
    type MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors as MarketingSubscriptionsBatchResponsePublicWideStatusBulkResponseWithErrors,
    type MarketingSubscriptionsPartialPublicStatusRequest as MarketingSubscriptionsPartialPublicStatusRequest,
    type MarketingSubscriptionsPublicBulkOptOutFromAllResponse as MarketingSubscriptionsPublicBulkOptOutFromAllResponse,
    type MarketingSubscriptionsPublicStatus as MarketingSubscriptionsPublicStatus,
    type MarketingSubscriptionsPublicStatusBulkResponse as MarketingSubscriptionsPublicStatusBulkResponse,
    type MarketingSubscriptionsPublicStatusRequest as MarketingSubscriptionsPublicStatusRequest,
    type MarketingSubscriptionsPublicSubscriptionTranslation as MarketingSubscriptionsPublicSubscriptionTranslation,
    type MarketingSubscriptionsPublicWideStatus as MarketingSubscriptionsPublicWideStatus,
    type MarketingSubscriptionsPublicWideStatusBulkResponse as MarketingSubscriptionsPublicWideStatusBulkResponse,
    type MarketingSubscriptionsSubscriptionDefinition as MarketingSubscriptionsSubscriptionDefinition,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };
}
