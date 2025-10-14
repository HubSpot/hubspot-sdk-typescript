// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Page } from '../core/pagination';

/**
 * Defines the type, direction, and details of the relationship between two CRM
 * objects.
 */
export interface AssociationSpec {
  /**
   * The category of the association, such as "HUBSPOT_DEFINED".
   */
  associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED';

  /**
   * The ID representing the specific type of association.
   */
  associationTypeId: number;
}

/**
 * Wrapper for providing an array of strings as inputs.
 */
export interface BatchInputString {
  /**
   * Strings to input.
   */
  inputs: Array<string>;
}

export interface Error {
  /**
   * The error category.
   */
  category: string;

  /**
   * A unique identifier for the request. Include this value with any error reports
   * or support tickets.
   */
  correlationId: string;

  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate.
   */
  message: string;

  /**
   * Context about the error condition.
   */
  context?: { [key: string]: Array<string> };

  /**
   * further information about the error
   */
  errors?: Array<ErrorDetail>;

  /**
   * A map of link names to associated URIs containing documentation about the error
   * or recommended remediation steps.
   */
  links?: { [key: string]: string };

  /**
   * A specific category that contains more specific detail about the error.
   */
  subCategory?: string;
}

export interface ErrorDetail {
  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate.
   */
  message: string;

  /**
   * The status code associated with the error detail.
   */
  code?: string;

  /**
   * Context about the error condition.
   */
  context?: { [key: string]: Array<string> };

  /**
   * The name of the field or parameter in which the error was found.
   */
  in?: string;

  /**
   * A specific category that contains more specific detail about the error.
   */
  subCategory?: string;
}

export interface ForwardPaging {
  /**
   * Specifies the paging information needed to retrieve the next set of results in a
   * paginated API response
   */
  next?: NextPage;
}

/**
 * HubDbTableRowV3Wrapper
 */
export type HubDBTableRowV3Wrapper = unknown;

/**
 * Specifies the paging information needed to retrieve the next set of results in a
 * paginated API response
 */
export interface NextPage {
  /**
   * A paging cursor token for retrieving subsequent pages.
   */
  after: string;

  /**
   * A URL that can be used to retrieve the next page results.
   */
  link?: string;
}

export interface Paging {
  /**
   * Specifies the paging information needed to retrieve the next set of results in a
   * paginated API response
   */
  next?: NextPage;

  /**
   * specifies the paging information needed to retrieve the previous set of results
   * in a paginated API response
   */
  prev?: PreviousPage;
}

/**
 * specifies the paging information needed to retrieve the previous set of results
 * in a paginated API response
 */
export interface PreviousPage {
  /**
   * A paging cursor token for retrieving previous pages.
   */
  before: string;

  /**
   * A URL that can be used to retrieve the previous pages' results.
   */
  link?: string;
}

export interface PublicObjectID {
  /**
   * The unique ID that identifies an object.
   */
  id: string;
}

/**
 * Ye olde error
 */
export interface StandardError {
  /**
   * The main category of the error.
   */
  category: string;

  /**
   * Additional context-specific information related to the error.
   */
  context: { [key: string]: Array<string> };

  /**
   * The detailed error objects.
   */
  errors: Array<ErrorDetail>;

  /**
   * URLs linking to documentation or resources associated with the error.
   */
  links: { [key: string]: string };

  /**
   * A human-readable string describing the error and possible remediation steps.
   */
  message: string;

  /**
   * The HTTP status code associated with the error.
   */
  status: string;

  /**
   * A unique ID for the error instance.
   */
  id?: string;

  /**
   * A more specific error category within each main category.
   */
  subCategory?: unknown;
}

/**
 * Model definition for a version user. Contains addition information about the
 * user who created a version.
 */
export interface VersionUser {
  /**
   * The unique ID of the User.
   */
  id: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The first and last name of the User.
   */
  fullName: string;
}

export type HubDBTableRowV3WrappersPage = Page<HubDBTableRowV3Wrapper>;
