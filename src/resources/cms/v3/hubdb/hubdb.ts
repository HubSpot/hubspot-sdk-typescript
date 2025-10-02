// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TablesAPI from './tables/tables';
import {
  HubdbTableV3Request,
  TableCreateParams,
  TableDeleteParams,
  TableListParams,
  TableRetrieveExportParams,
  TableRetrieveParams,
  TableUnpublishParams,
  Tables,
} from './tables/tables';

export class Hubdb extends APIResource {
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);
}

Hubdb.Tables = Tables;

export declare namespace Hubdb {
  export {
    Tables as Tables,
    type HubdbTableV3Request as HubdbTableV3Request,
    type TableCreateParams as TableCreateParams,
    type TableRetrieveParams as TableRetrieveParams,
    type TableListParams as TableListParams,
    type TableDeleteParams as TableDeleteParams,
    type TableRetrieveExportParams as TableRetrieveExportParams,
    type TableUnpublishParams as TableUnpublishParams,
  };
}
