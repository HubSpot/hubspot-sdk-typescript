// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CampaignsAPI from './campaigns/campaigns';
import {
  BatchInputPublicCampaignBatchUpdateItem,
  BatchInputPublicCampaignDeleteInput,
  BatchInputPublicCampaignInput,
  BatchInputPublicCampaignReadInput,
  BatchResponsePublicCampaign,
  BatchResponsePublicCampaignWithAssets,
  CampaignGetParams,
  CampaignUpdateParams,
  Campaigns,
  CollectionResponseContactReferenceForwardPaging,
  CollectionResponsePublicCampaignAsset,
  CollectionResponsePublicCampaignAssetForwardPaging,
  CollectionResponseWithTotalPublicCampaign,
  ContactReference,
  MetricsCounters,
  PublicBudgetItem,
  PublicBudgetItemInput,
  PublicBudgetTotals,
  PublicBusinessUnit,
  PublicCampaign,
  PublicCampaignAsset,
  PublicCampaignBatchUpdateItem,
  PublicCampaignDeleteInput,
  PublicCampaignInput,
  PublicCampaignReadInput,
  PublicCampaignWithAssets,
  PublicSpendItem,
  PublicSpendItemInput,
  RevenueAttributionAggregate,
} from './campaigns/campaigns';

export class Marketing extends APIResource {
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
}

Marketing.Campaigns = Campaigns;

export declare namespace Marketing {
  export {
    Campaigns as Campaigns,
    type BatchInputPublicCampaignBatchUpdateItem as BatchInputPublicCampaignBatchUpdateItem,
    type BatchInputPublicCampaignDeleteInput as BatchInputPublicCampaignDeleteInput,
    type BatchInputPublicCampaignInput as BatchInputPublicCampaignInput,
    type BatchInputPublicCampaignReadInput as BatchInputPublicCampaignReadInput,
    type BatchResponsePublicCampaign as BatchResponsePublicCampaign,
    type BatchResponsePublicCampaignWithAssets as BatchResponsePublicCampaignWithAssets,
    type CollectionResponseContactReferenceForwardPaging as CollectionResponseContactReferenceForwardPaging,
    type CollectionResponsePublicCampaignAsset as CollectionResponsePublicCampaignAsset,
    type CollectionResponsePublicCampaignAssetForwardPaging as CollectionResponsePublicCampaignAssetForwardPaging,
    type CollectionResponseWithTotalPublicCampaign as CollectionResponseWithTotalPublicCampaign,
    type ContactReference as ContactReference,
    type MetricsCounters as MetricsCounters,
    type PublicBudgetItem as PublicBudgetItem,
    type PublicBudgetItemInput as PublicBudgetItemInput,
    type PublicBudgetTotals as PublicBudgetTotals,
    type PublicBusinessUnit as PublicBusinessUnit,
    type PublicCampaign as PublicCampaign,
    type PublicCampaignAsset as PublicCampaignAsset,
    type PublicCampaignBatchUpdateItem as PublicCampaignBatchUpdateItem,
    type PublicCampaignDeleteInput as PublicCampaignDeleteInput,
    type PublicCampaignInput as PublicCampaignInput,
    type PublicCampaignReadInput as PublicCampaignReadInput,
    type PublicCampaignWithAssets as PublicCampaignWithAssets,
    type PublicSpendItem as PublicSpendItem,
    type PublicSpendItemInput as PublicSpendItemInput,
    type RevenueAttributionAggregate as RevenueAttributionAggregate,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignGetParams as CampaignGetParams,
  };
}
