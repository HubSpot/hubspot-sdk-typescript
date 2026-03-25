// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasource', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.dataStudio.datasource.create({
      bodyParts: [
        {
          contentDisposition: {
            creationDate: '2019-12-27T18:11:19.117Z',
            fileName: 'fileName',
            modificationDate: '2019-12-27T18:11:19.117Z',
            parameters: { foo: 'string' },
            readDate: '2019-12-27T18:11:19.117Z',
            size: 0,
            type: 'type',
          },
          entity: {},
          headers: { foo: ['string'] },
          mediaType: {
            parameters: { foo: 'string' },
            subtype: 'subtype',
            type: 'type',
            wildcardSubtype: true,
            wildcardType: true,
          },
          messageBodyWorkers: {},
          parameterizedHeaders: {
            foo: [
              {
                parameters: { foo: 'string' },
                value: 'value',
              },
            ],
          },
          providers: {},
          parent: {
            bodyParts: [],
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
          },
        },
      ],
      contentDisposition: {
        creationDate: '2019-12-27T18:11:19.117Z',
        fileName: 'fileName',
        modificationDate: '2019-12-27T18:11:19.117Z',
        parameters: { foo: 'string' },
        readDate: '2019-12-27T18:11:19.117Z',
        size: 0,
        type: 'type',
      },
      entity: {},
      fields: {
        foo: [
          {
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            formDataContentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              name: 'name',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            name: 'name',
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
            simple: true,
            value: 'value',
            parent: {
              bodyParts: [
                {
                  contentDisposition: {
                    creationDate: '2019-12-27T18:11:19.117Z',
                    fileName: 'fileName',
                    modificationDate: '2019-12-27T18:11:19.117Z',
                    parameters: { foo: 'string' },
                    readDate: '2019-12-27T18:11:19.117Z',
                    size: 0,
                    type: 'type',
                  },
                  entity: {},
                  headers: { foo: ['string'] },
                  mediaType: {
                    parameters: { foo: 'string' },
                    subtype: 'subtype',
                    type: 'type',
                    wildcardSubtype: true,
                    wildcardType: true,
                  },
                  messageBodyWorkers: {},
                  parameterizedHeaders: {
                    foo: [
                      {
                        parameters: { foo: 'string' },
                        value: 'value',
                      },
                    ],
                  },
                  providers: {},
                },
              ],
              contentDisposition: {
                creationDate: '2019-12-27T18:11:19.117Z',
                fileName: 'fileName',
                modificationDate: '2019-12-27T18:11:19.117Z',
                parameters: { foo: 'string' },
                readDate: '2019-12-27T18:11:19.117Z',
                size: 0,
                type: 'type',
              },
              entity: {},
              headers: { foo: ['string'] },
              mediaType: {
                parameters: { foo: 'string' },
                subtype: 'subtype',
                type: 'type',
                wildcardSubtype: true,
                wildcardType: true,
              },
              messageBodyWorkers: {},
              parameterizedHeaders: {
                foo: [
                  {
                    parameters: { foo: 'string' },
                    value: 'value',
                  },
                ],
              },
              providers: {},
            },
          },
        ],
      },
      headers: { foo: ['string'] },
      mediaType: {
        parameters: { foo: 'string' },
        subtype: 'subtype',
        type: 'type',
        wildcardSubtype: true,
        wildcardType: true,
      },
      messageBodyWorkers: {},
      parameterizedHeaders: {
        foo: [
          {
            parameters: { foo: 'string' },
            value: 'value',
          },
        ],
      },
      providers: {},
      parent: {
        bodyParts: [
          {
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
          },
        ],
        contentDisposition: {
          creationDate: '2019-12-27T18:11:19.117Z',
          fileName: 'fileName',
          modificationDate: '2019-12-27T18:11:19.117Z',
          parameters: { foo: 'string' },
          readDate: '2019-12-27T18:11:19.117Z',
          size: 0,
          type: 'type',
        },
        entity: {},
        headers: { foo: ['string'] },
        mediaType: {
          parameters: { foo: 'string' },
          subtype: 'subtype',
          type: 'type',
          wildcardSubtype: true,
          wildcardType: true,
        },
        messageBodyWorkers: {},
        parameterizedHeaders: {
          foo: [
            {
              parameters: { foo: 'string' },
              value: 'value',
            },
          ],
        },
        providers: {},
      },
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dataStudio.datasource.update(0, {
      bodyParts: [
        {
          contentDisposition: {
            creationDate: '2019-12-27T18:11:19.117Z',
            fileName: 'fileName',
            modificationDate: '2019-12-27T18:11:19.117Z',
            parameters: { foo: 'string' },
            readDate: '2019-12-27T18:11:19.117Z',
            size: 0,
            type: 'type',
          },
          entity: {},
          headers: { foo: ['string'] },
          mediaType: {
            parameters: { foo: 'string' },
            subtype: 'subtype',
            type: 'type',
            wildcardSubtype: true,
            wildcardType: true,
          },
          messageBodyWorkers: {},
          parameterizedHeaders: {
            foo: [
              {
                parameters: { foo: 'string' },
                value: 'value',
              },
            ],
          },
          providers: {},
        },
      ],
      contentDisposition: {
        creationDate: '2019-12-27T18:11:19.117Z',
        fileName: 'fileName',
        modificationDate: '2019-12-27T18:11:19.117Z',
        parameters: { foo: 'string' },
        readDate: '2019-12-27T18:11:19.117Z',
        size: 0,
        type: 'type',
      },
      entity: {},
      fields: {
        foo: [
          {
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            formDataContentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              name: 'name',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            name: 'name',
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
            simple: true,
            value: 'value',
          },
        ],
      },
      headers: { foo: ['string'] },
      mediaType: {
        parameters: { foo: 'string' },
        subtype: 'subtype',
        type: 'type',
        wildcardSubtype: true,
        wildcardType: true,
      },
      messageBodyWorkers: {},
      parameterizedHeaders: {
        foo: [
          {
            parameters: { foo: 'string' },
            value: 'value',
          },
        ],
      },
      providers: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.dataStudio.datasource.update(0, {
      bodyParts: [
        {
          contentDisposition: {
            creationDate: '2019-12-27T18:11:19.117Z',
            fileName: 'fileName',
            modificationDate: '2019-12-27T18:11:19.117Z',
            parameters: { foo: 'string' },
            readDate: '2019-12-27T18:11:19.117Z',
            size: 0,
            type: 'type',
          },
          entity: {},
          headers: { foo: ['string'] },
          mediaType: {
            parameters: { foo: 'string' },
            subtype: 'subtype',
            type: 'type',
            wildcardSubtype: true,
            wildcardType: true,
          },
          messageBodyWorkers: {},
          parameterizedHeaders: {
            foo: [
              {
                parameters: { foo: 'string' },
                value: 'value',
              },
            ],
          },
          providers: {},
          parent: {
            bodyParts: [],
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
          },
        },
      ],
      contentDisposition: {
        creationDate: '2019-12-27T18:11:19.117Z',
        fileName: 'fileName',
        modificationDate: '2019-12-27T18:11:19.117Z',
        parameters: { foo: 'string' },
        readDate: '2019-12-27T18:11:19.117Z',
        size: 0,
        type: 'type',
      },
      entity: {},
      fields: {
        foo: [
          {
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            formDataContentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              name: 'name',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            name: 'name',
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
            simple: true,
            value: 'value',
            parent: {
              bodyParts: [
                {
                  contentDisposition: {
                    creationDate: '2019-12-27T18:11:19.117Z',
                    fileName: 'fileName',
                    modificationDate: '2019-12-27T18:11:19.117Z',
                    parameters: { foo: 'string' },
                    readDate: '2019-12-27T18:11:19.117Z',
                    size: 0,
                    type: 'type',
                  },
                  entity: {},
                  headers: { foo: ['string'] },
                  mediaType: {
                    parameters: { foo: 'string' },
                    subtype: 'subtype',
                    type: 'type',
                    wildcardSubtype: true,
                    wildcardType: true,
                  },
                  messageBodyWorkers: {},
                  parameterizedHeaders: {
                    foo: [
                      {
                        parameters: { foo: 'string' },
                        value: 'value',
                      },
                    ],
                  },
                  providers: {},
                },
              ],
              contentDisposition: {
                creationDate: '2019-12-27T18:11:19.117Z',
                fileName: 'fileName',
                modificationDate: '2019-12-27T18:11:19.117Z',
                parameters: { foo: 'string' },
                readDate: '2019-12-27T18:11:19.117Z',
                size: 0,
                type: 'type',
              },
              entity: {},
              headers: { foo: ['string'] },
              mediaType: {
                parameters: { foo: 'string' },
                subtype: 'subtype',
                type: 'type',
                wildcardSubtype: true,
                wildcardType: true,
              },
              messageBodyWorkers: {},
              parameterizedHeaders: {
                foo: [
                  {
                    parameters: { foo: 'string' },
                    value: 'value',
                  },
                ],
              },
              providers: {},
            },
          },
        ],
      },
      headers: { foo: ['string'] },
      mediaType: {
        parameters: { foo: 'string' },
        subtype: 'subtype',
        type: 'type',
        wildcardSubtype: true,
        wildcardType: true,
      },
      messageBodyWorkers: {},
      parameterizedHeaders: {
        foo: [
          {
            parameters: { foo: 'string' },
            value: 'value',
          },
        ],
      },
      providers: {},
      parent: {
        bodyParts: [
          {
            contentDisposition: {
              creationDate: '2019-12-27T18:11:19.117Z',
              fileName: 'fileName',
              modificationDate: '2019-12-27T18:11:19.117Z',
              parameters: { foo: 'string' },
              readDate: '2019-12-27T18:11:19.117Z',
              size: 0,
              type: 'type',
            },
            entity: {},
            headers: { foo: ['string'] },
            mediaType: {
              parameters: { foo: 'string' },
              subtype: 'subtype',
              type: 'type',
              wildcardSubtype: true,
              wildcardType: true,
            },
            messageBodyWorkers: {},
            parameterizedHeaders: {
              foo: [
                {
                  parameters: { foo: 'string' },
                  value: 'value',
                },
              ],
            },
            providers: {},
          },
        ],
        contentDisposition: {
          creationDate: '2019-12-27T18:11:19.117Z',
          fileName: 'fileName',
          modificationDate: '2019-12-27T18:11:19.117Z',
          parameters: { foo: 'string' },
          readDate: '2019-12-27T18:11:19.117Z',
          size: 0,
          type: 'type',
        },
        entity: {},
        headers: { foo: ['string'] },
        mediaType: {
          parameters: { foo: 'string' },
          subtype: 'subtype',
          type: 'type',
          wildcardSubtype: true,
          wildcardType: true,
        },
        messageBodyWorkers: {},
        parameterizedHeaders: {
          foo: [
            {
              parameters: { foo: 'string' },
              value: 'value',
            },
          ],
        },
        providers: {},
      },
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.dataStudio.datasource.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
