// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SequencesAPI from './sequences';
import {
  BaseSequences,
  CollectionResponseWithTotalPublicSequenceLiteResponse,
  PublicEmailPatternResponse,
  PublicSequenceEnrollmentLiteResponse,
  PublicSequenceEnrollmentRequest,
  PublicSequenceEnrollmentResponse,
  PublicSequenceLiteResponse,
  PublicSequenceLiteResponsesPage,
  PublicSequenceResponse,
  PublicSequenceSettingsResponse,
  PublicSequenceStepDependencyResponse,
  PublicSequenceStepResponse,
  PublicTaskPatternResponse,
  SequenceCreateEnrollmentParams,
  SequenceGetParams,
  SequenceListParams,
  Sequences,
} from './sequences';
import * as ActionsAPI from './actions/actions';
import {
  Actions,
  ArrayFieldSchema,
  BaseActions,
  BatchInputCallbackCompletionBatchRequest,
  BooleanFieldSchema,
  CallbackCompletionBatchRequest,
  CallbackCompletionRequest,
  CollectionResponsePublicActionDefinitionForwardPaging,
  CollectionResponsePublicActionFunctionIdentifierNoPaging,
  CollectionResponsePublicActionRevisionForwardPaging,
  DoubleFieldSchema,
  FieldTypeDefinition,
  IntegerFieldSchema,
  LongFieldSchema,
  ObjectFieldSchema,
  OutputFieldDefinition,
  PublicActionDefinition,
  PublicActionDefinitionEgg,
  PublicActionDefinitionPatch,
  PublicActionDefinitionRequiresObjectRequest,
  PublicActionDefinitionRequiresObjectResponse,
  PublicActionFunction,
  PublicActionFunctionIdentifier,
  PublicActionLabels,
  PublicActionRevision,
  PublicConditionalSingleFieldDependency,
  PublicExecutionTranslationRule,
  PublicFieldTypeDefinition,
  PublicInputFieldDefinition,
  PublicObjectRequestOptions,
  PublicOption,
  PublicSingleFieldDependency,
  StringFieldSchema,
} from './actions/actions';

export class BaseAutomation extends APIResource {
  static override readonly _key: readonly ['automation'] = Object.freeze(['automation'] as const);
}
export class Automation extends BaseAutomation {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  sequences: SequencesAPI.Sequences = new SequencesAPI.Sequences(this._client);
}

Automation.Actions = Actions;
Automation.BaseActions = BaseActions;
Automation.Sequences = Sequences;
Automation.BaseSequences = BaseSequences;

export declare namespace Automation {
  export {
    Actions as Actions,
    BaseActions as BaseActions,
    type ArrayFieldSchema as ArrayFieldSchema,
    type BatchInputCallbackCompletionBatchRequest as BatchInputCallbackCompletionBatchRequest,
    type BooleanFieldSchema as BooleanFieldSchema,
    type CallbackCompletionBatchRequest as CallbackCompletionBatchRequest,
    type CallbackCompletionRequest as CallbackCompletionRequest,
    type CollectionResponsePublicActionDefinitionForwardPaging as CollectionResponsePublicActionDefinitionForwardPaging,
    type CollectionResponsePublicActionFunctionIdentifierNoPaging as CollectionResponsePublicActionFunctionIdentifierNoPaging,
    type CollectionResponsePublicActionRevisionForwardPaging as CollectionResponsePublicActionRevisionForwardPaging,
    type DoubleFieldSchema as DoubleFieldSchema,
    type FieldTypeDefinition as FieldTypeDefinition,
    type IntegerFieldSchema as IntegerFieldSchema,
    type LongFieldSchema as LongFieldSchema,
    type ObjectFieldSchema as ObjectFieldSchema,
    type OutputFieldDefinition as OutputFieldDefinition,
    type PublicActionDefinition as PublicActionDefinition,
    type PublicActionDefinitionEgg as PublicActionDefinitionEgg,
    type PublicActionDefinitionPatch as PublicActionDefinitionPatch,
    type PublicActionDefinitionRequiresObjectRequest as PublicActionDefinitionRequiresObjectRequest,
    type PublicActionDefinitionRequiresObjectResponse as PublicActionDefinitionRequiresObjectResponse,
    type PublicActionFunction as PublicActionFunction,
    type PublicActionFunctionIdentifier as PublicActionFunctionIdentifier,
    type PublicActionLabels as PublicActionLabels,
    type PublicActionRevision as PublicActionRevision,
    type PublicConditionalSingleFieldDependency as PublicConditionalSingleFieldDependency,
    type PublicExecutionTranslationRule as PublicExecutionTranslationRule,
    type PublicFieldTypeDefinition as PublicFieldTypeDefinition,
    type PublicInputFieldDefinition as PublicInputFieldDefinition,
    type PublicObjectRequestOptions as PublicObjectRequestOptions,
    type PublicOption as PublicOption,
    type PublicSingleFieldDependency as PublicSingleFieldDependency,
    type StringFieldSchema as StringFieldSchema,
  };

  export {
    Sequences as Sequences,
    BaseSequences as BaseSequences,
    type CollectionResponseWithTotalPublicSequenceLiteResponse as CollectionResponseWithTotalPublicSequenceLiteResponse,
    type PublicEmailPatternResponse as PublicEmailPatternResponse,
    type PublicSequenceEnrollmentLiteResponse as PublicSequenceEnrollmentLiteResponse,
    type PublicSequenceEnrollmentRequest as PublicSequenceEnrollmentRequest,
    type PublicSequenceEnrollmentResponse as PublicSequenceEnrollmentResponse,
    type PublicSequenceLiteResponse as PublicSequenceLiteResponse,
    type PublicSequenceResponse as PublicSequenceResponse,
    type PublicSequenceSettingsResponse as PublicSequenceSettingsResponse,
    type PublicSequenceStepDependencyResponse as PublicSequenceStepDependencyResponse,
    type PublicSequenceStepResponse as PublicSequenceStepResponse,
    type PublicTaskPatternResponse as PublicTaskPatternResponse,
    type PublicSequenceLiteResponsesPage as PublicSequenceLiteResponsesPage,
    type SequenceListParams as SequenceListParams,
    type SequenceCreateEnrollmentParams as SequenceCreateEnrollmentParams,
    type SequenceGetParams as SequenceGetParams,
  };
}
