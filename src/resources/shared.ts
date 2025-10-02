// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface BatchInputString {
  inputs: Array<string>;
}

export interface Error {
  category: string;

  correlationId: string;

  message: string;

  context?: { [key: string]: Array<string> };

  errors?: Array<ErrorDetail>;

  links?: { [key: string]: string };

  subCategory?: string;
}

export interface ErrorDetail {
  message: string;

  code?: string;

  context?: { [key: string]: Array<string> };

  in?: string;

  subCategory?: string;
}

export interface ForwardPaging {
  next?: NextPage;
}

export interface NextPage {
  after: string;

  link?: string;
}

export interface Paging {
  next?: NextPage;

  prev?: PreviousPage;
}

export interface PreviousPage {
  before: string;

  link?: string;
}

export interface StandardError {
  category: string;

  context: { [key: string]: Array<string> };

  errors: Array<ErrorDetail>;

  links: { [key: string]: string };

  message: string;

  status: string;

  id?: string;

  subCategory?: unknown;
}
