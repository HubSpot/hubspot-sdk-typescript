// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { Events } from './events';
import * as GroupsAPI from './groups';
import { Groups } from './groups';
import * as IntegratorSettingsAPI from './integrator-settings';
import { IntegratorSettings } from './integrator-settings';
import * as PropertiesAPI from './properties';
import { Properties } from './properties';
import * as SchemasAPI from './schemas';
import { Schemas } from './schemas';

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
  export { Events as Events };

  export { Groups as Groups };

  export { IntegratorSettings as IntegratorSettings };

  export { Properties as Properties };

  export { Schemas as Schemas };
}
