// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import {
  EventCreateAttentionSpanEventParams,
  EventCreateAttentionSpanEventResponse,
  EventCreateMediaPlayedEventParams,
  EventCreateMediaPlayedEventResponse,
  EventCreateMediaPlayedPercentEventParams,
  EventCreateMediaPlayedPercentEventResponse,
  Events,
} from './events';
import * as GroupsAPI from './groups';
import {
  GroupCreateParams,
  GroupDeleteByNameParams,
  GroupGetByNameParams,
  GroupListParams,
  GroupListResponse,
  GroupUpdateByNameParams,
  Groups,
} from './groups';
import * as IntegratorSettingsAPI from './integrator-settings';
import {
  IntegratorSettingCreateObjectDefinitionParams,
  IntegratorSettingCreateObjectDefinitionResponse,
  IntegratorSettingCreateOembedDomainParams,
  IntegratorSettingCreateOembedDomainResponse,
  IntegratorSettingGetEventVisibilitySettingsResponse,
  IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
  IntegratorSettingGetObjectDefinitionsByMediaTypeResponse,
  IntegratorSettingGetOembedDomainParams,
  IntegratorSettingGetOembedDomainResponse,
  IntegratorSettingListOembedDomainsResponse,
  IntegratorSettingRegisterAppNameParams,
  IntegratorSettingRegisterAppNameResponse,
  IntegratorSettingUpdateAppNameParams,
  IntegratorSettingUpdateAppNameResponse,
  IntegratorSettingUpdateEventVisibilitySettingsParams,
  IntegratorSettingUpdateEventVisibilitySettingsResponse,
  IntegratorSettingUpdateOembedDomainParams,
  IntegratorSettingUpdateOembedDomainResponse,
  IntegratorSettings,
} from './integrator-settings';
import * as PropertiesAPI from './properties';
import {
  Properties,
  PropertyArchiveBatchParams,
  PropertyCreateBatchParams,
  PropertyCreateParams,
  PropertyDeleteParams,
  PropertyGetBatchParams,
  PropertyGetParams,
  PropertyListParams,
  PropertyListResponse,
  PropertyUpdateParams,
} from './properties';
import * as SchemasAPI from './schemas';
import {
  SchemaCreateAssociationParams,
  SchemaCreateAssociationResponse,
  SchemaDeleteAssociationParams,
  SchemaGetParams,
  SchemaUpdateParams,
  Schemas,
} from './schemas';

export class MediaBridge extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  integratorSettings: IntegratorSettingsAPI.IntegratorSettings = new IntegratorSettingsAPI.IntegratorSettings(
    this._client,
  );
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
}

MediaBridge.Events = Events;
MediaBridge.Groups = Groups;
MediaBridge.IntegratorSettings = IntegratorSettings;
MediaBridge.Properties = Properties;
MediaBridge.Schemas = Schemas;

export declare namespace MediaBridge {
  export {
    Events as Events,
    type EventCreateAttentionSpanEventResponse as EventCreateAttentionSpanEventResponse,
    type EventCreateMediaPlayedEventResponse as EventCreateMediaPlayedEventResponse,
    type EventCreateMediaPlayedPercentEventResponse as EventCreateMediaPlayedPercentEventResponse,
    type EventCreateAttentionSpanEventParams as EventCreateAttentionSpanEventParams,
    type EventCreateMediaPlayedEventParams as EventCreateMediaPlayedEventParams,
    type EventCreateMediaPlayedPercentEventParams as EventCreateMediaPlayedPercentEventParams,
  };

  export {
    Groups as Groups,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteByNameParams as GroupDeleteByNameParams,
    type GroupGetByNameParams as GroupGetByNameParams,
    type GroupUpdateByNameParams as GroupUpdateByNameParams,
  };

  export {
    IntegratorSettings as IntegratorSettings,
    type IntegratorSettingCreateObjectDefinitionResponse as IntegratorSettingCreateObjectDefinitionResponse,
    type IntegratorSettingCreateOembedDomainResponse as IntegratorSettingCreateOembedDomainResponse,
    type IntegratorSettingGetEventVisibilitySettingsResponse as IntegratorSettingGetEventVisibilitySettingsResponse,
    type IntegratorSettingGetObjectDefinitionsByMediaTypeResponse as IntegratorSettingGetObjectDefinitionsByMediaTypeResponse,
    type IntegratorSettingGetOembedDomainResponse as IntegratorSettingGetOembedDomainResponse,
    type IntegratorSettingListOembedDomainsResponse as IntegratorSettingListOembedDomainsResponse,
    type IntegratorSettingRegisterAppNameResponse as IntegratorSettingRegisterAppNameResponse,
    type IntegratorSettingUpdateAppNameResponse as IntegratorSettingUpdateAppNameResponse,
    type IntegratorSettingUpdateEventVisibilitySettingsResponse as IntegratorSettingUpdateEventVisibilitySettingsResponse,
    type IntegratorSettingUpdateOembedDomainResponse as IntegratorSettingUpdateOembedDomainResponse,
    type IntegratorSettingCreateObjectDefinitionParams as IntegratorSettingCreateObjectDefinitionParams,
    type IntegratorSettingCreateOembedDomainParams as IntegratorSettingCreateOembedDomainParams,
    type IntegratorSettingGetObjectDefinitionsByMediaTypeParams as IntegratorSettingGetObjectDefinitionsByMediaTypeParams,
    type IntegratorSettingGetOembedDomainParams as IntegratorSettingGetOembedDomainParams,
    type IntegratorSettingRegisterAppNameParams as IntegratorSettingRegisterAppNameParams,
    type IntegratorSettingUpdateAppNameParams as IntegratorSettingUpdateAppNameParams,
    type IntegratorSettingUpdateEventVisibilitySettingsParams as IntegratorSettingUpdateEventVisibilitySettingsParams,
    type IntegratorSettingUpdateOembedDomainParams as IntegratorSettingUpdateOembedDomainParams,
  };

  export {
    Properties as Properties,
    type PropertyListResponse as PropertyListResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyArchiveBatchParams as PropertyArchiveBatchParams,
    type PropertyCreateBatchParams as PropertyCreateBatchParams,
    type PropertyGetParams as PropertyGetParams,
    type PropertyGetBatchParams as PropertyGetBatchParams,
  };

  export {
    Schemas as Schemas,
    type SchemaCreateAssociationResponse as SchemaCreateAssociationResponse,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaCreateAssociationParams as SchemaCreateAssociationParams,
    type SchemaDeleteAssociationParams as SchemaDeleteAssociationParams,
    type SchemaGetParams as SchemaGetParams,
  };
}
