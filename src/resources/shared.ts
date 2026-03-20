// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
