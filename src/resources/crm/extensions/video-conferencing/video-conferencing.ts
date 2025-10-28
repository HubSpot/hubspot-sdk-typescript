// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings } from './settings';

export class VideoConferencing extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

VideoConferencing.Settings = Settings;

export declare namespace VideoConferencing {
  export { Settings as Settings, type SettingUpdateParams as SettingUpdateParams };
}
