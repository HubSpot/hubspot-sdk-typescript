// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Defines the type, direction, and details of the relationship between two CRM
 * objects.
 */
export interface AssociationSpec {
  /**
   * The category of the association, such as "HUBSPOT_DEFINED".
   */
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * The ID representing the specific type of association.
   */
  associationTypeId: number;
}

export interface Error {
  /**
   * The error category.
   */
  category: string;

  /**
   * A unique identifier for the request. Include this value with any error reports
   * or support tickets
   */
  correlationId: string;

  /**
   * A human readable message describing the error along with remediation steps where
   * appropriate
   */
  message: string;

  /**
   * Context about the error condition
   */
  context?: { [key: string]: Array<string> };

  /**
   * further information about the error
   */
  errors?: Array<ErrorDetail>;

  /**
   * A map of link names to associated URIs containing documentation about the error
   * or recommended remediation steps
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
   * appropriate
   */
  message: string;

  /**
   * The status code associated with the error detail
   */
  code?: string;

  /**
   * Context about the error condition
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

/**
 * Contains the Id of a Public Object
 */
export interface PublicObjectID {
  /**
   * The unique ID of the object.
   */
  id: string;
}

/**
 * Ye olde error
 */
export interface StandardError {
  /**
   * Error category.
   */
  category: string;

  /**
   * Error context.
   */
  context: { [key: string]: Array<string> };

  /**
   * List of error details.
   */
  errors: Array<ErrorDetail>;

  /**
   * Error links.
   */
  links: { [key: string]: string };

  /**
   * Error message.
   */
  message: string;

  /**
   * Error status.
   */
  status: string;

  /**
   * Error ID.
   */
  id?: string;

  /**
   * Error subcategory.
   */
  subCategory?: unknown;
}
