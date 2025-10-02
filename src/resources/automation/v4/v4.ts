// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions/actions';
import {
  ActionDeleteParams,
  ActionRetrieveParams,
  ActionUpdateParams,
  Actions,
  AutomationActionDefinition,
  ConditionalSingleFieldDependency,
  ExecutionTranslationRule,
  FieldTypeDefinition,
  InputFieldDefinition,
  ObjectRequestOptions,
  OutputFieldDefinition,
  SingleFieldDependency,
} from './actions/actions';
import * as FlowsAPI from './flows/flows';
import {
  AndFilterBranch,
  AssociationFilterBranch,
  ContactFlow,
  ContactFlowCreateRequest,
  ContactFlowPutRequest,
  Flow,
  FlowCreateParams,
  FlowCreateRequest,
  FlowListParams,
  FlowListResponse,
  FlowPutRequest,
  FlowRetrieveEmailCampaignsParams,
  FlowRetrieveEmailCampaignsResponse,
  FlowUpdateParams,
  Flows,
  NotAllFilterBranch,
  NotAnyFilterBranch,
  OrFilterBranch,
  PlatformFlow,
  PlatformFlowCreateRequest,
  PlatformFlowPutRequest,
  PropertyAssociationFilterBranch,
  RestrictedFilterBranch,
  UnifiedEventsFilterBranch,
} from './flows/flows';
import * as WorkflowIDMappingsAPI from './workflow-id-mappings/workflow-id-mappings';
import { WorkflowIDMappings } from './workflow-id-mappings/workflow-id-mappings';

export class V4 extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  flows: FlowsAPI.Flows = new FlowsAPI.Flows(this._client);
  workflowIDMappings: WorkflowIDMappingsAPI.WorkflowIDMappings = new WorkflowIDMappingsAPI.WorkflowIDMappings(
    this._client,
  );
}

V4.Actions = Actions;
V4.Flows = Flows;
V4.WorkflowIDMappings = WorkflowIDMappings;

export declare namespace V4 {
  export {
    Actions as Actions,
    type AutomationActionDefinition as AutomationActionDefinition,
    type ConditionalSingleFieldDependency as ConditionalSingleFieldDependency,
    type ExecutionTranslationRule as ExecutionTranslationRule,
    type FieldTypeDefinition as FieldTypeDefinition,
    type InputFieldDefinition as InputFieldDefinition,
    type ObjectRequestOptions as ObjectRequestOptions,
    type OutputFieldDefinition as OutputFieldDefinition,
    type SingleFieldDependency as SingleFieldDependency,
    type ActionRetrieveParams as ActionRetrieveParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionDeleteParams as ActionDeleteParams,
  };

  export {
    Flows as Flows,
    type AndFilterBranch as AndFilterBranch,
    type AssociationFilterBranch as AssociationFilterBranch,
    type ContactFlow as ContactFlow,
    type ContactFlowCreateRequest as ContactFlowCreateRequest,
    type ContactFlowPutRequest as ContactFlowPutRequest,
    type Flow as Flow,
    type FlowCreateRequest as FlowCreateRequest,
    type FlowPutRequest as FlowPutRequest,
    type NotAllFilterBranch as NotAllFilterBranch,
    type NotAnyFilterBranch as NotAnyFilterBranch,
    type OrFilterBranch as OrFilterBranch,
    type PlatformFlow as PlatformFlow,
    type PlatformFlowCreateRequest as PlatformFlowCreateRequest,
    type PlatformFlowPutRequest as PlatformFlowPutRequest,
    type PropertyAssociationFilterBranch as PropertyAssociationFilterBranch,
    type RestrictedFilterBranch as RestrictedFilterBranch,
    type UnifiedEventsFilterBranch as UnifiedEventsFilterBranch,
    type FlowListResponse as FlowListResponse,
    type FlowRetrieveEmailCampaignsResponse as FlowRetrieveEmailCampaignsResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowListParams as FlowListParams,
    type FlowRetrieveEmailCampaignsParams as FlowRetrieveEmailCampaignsParams,
  };

  export { WorkflowIDMappings as WorkflowIDMappings };
}
