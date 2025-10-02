// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3/v3';
import { V3 } from './v3/v3';
import * as V4API from './v4/v4';
import { V4 } from './v4/v4';

export class CRM extends APIResource {
  v3: V3API.V3 = new V3API.V3(this._client);
  v4: V4API.V4 = new V4API.V4(this._client);
}

CRM.V3 = V3;
CRM.V4 = V4;

export declare namespace CRM {
  export { V3 as V3 };

  export { V4 as V4 };
}
