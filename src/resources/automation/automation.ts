// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V4API from './v4/v4';
import { V4 } from './v4/v4';

export class Automation extends APIResource {
  v4: V4API.V4 = new V4API.V4(this._client);
}

Automation.V4 = V4;

export declare namespace Automation {
  export { V4 as V4 };
}
