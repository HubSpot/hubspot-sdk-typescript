// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.create({
      id: 'id',
      abStatus: 'automated_loser_variant',
      abTestId: 'abTestId',
      archivedAt: 0,
      archivedInDashboard: true,
      attachedStylesheets: [{ foo: {} }],
      authorName: 'authorName',
      blogAuthorId: 'blogAuthorId',
      campaign: 'campaign',
      categoryId: 0,
      contentGroupId: 'contentGroupId',
      contentTypeCategory: '0',
      created: '2019-12-27T18:11:19.117Z',
      createdById: 'createdById',
      currentlyPublished: true,
      currentState: 'AUTOMATED',
      domain: 'domain',
      dynamicPageDataSourceId: 'dynamicPageDataSourceId',
      dynamicPageDataSourceType: 0,
      dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
      enableDomainStylesheets: true,
      enableGoogleAmpOutputOverride: true,
      enableLayoutStylesheets: true,
      featuredImage: 'featuredImage',
      featuredImageAltText: 'featuredImageAltText',
      folderId: 'folderId',
      footerHtml: 'footerHtml',
      headHtml: 'headHtml',
      htmlTitle: 'htmlTitle',
      includeDefaultCustomCss: true,
      language: 'af',
      layoutSections: {
        foo: {
          cells: [],
          cssClass: 'cssClass',
          cssId: 'cssId',
          cssStyle: 'cssStyle',
          label: 'label',
          name: 'name',
          params: { foo: {} },
          rowMetaData: [
            {
              cssClass: 'cssClass',
              styles: {
                backgroundColor: {
                  a: 0,
                  b: 0,
                  g: 0,
                  r: 0,
                },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [
                    {
                      color: {
                        a: 0,
                        b: 0,
                        g: 0,
                        r: 0,
                      },
                    },
                  ],
                  sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'flexboxPositioning',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'verticalAlignment',
              },
            },
          ],
          rows: [{}],
          styles: {
            backgroundColor: {
              a: 0,
              b: 0,
              g: 0,
              r: 0,
            },
            backgroundGradient: {
              angle: { units: 'units', value: 0 },
              colors: [
                {
                  color: {
                    a: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                  },
                },
              ],
              sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
            },
            backgroundImage: {
              backgroundPosition: 'backgroundPosition',
              backgroundSize: 'backgroundSize',
              imageUrl: 'imageUrl',
            },
            flexboxPositioning: 'flexboxPositioning',
            forceFullWidthSection: true,
            maxWidthSectionCentering: 0,
            verticalAlignment: 'verticalAlignment',
          },
          type: 'type',
          w: 0,
          x: 0,
        },
      },
      linkRelCanonicalUrl: 'linkRelCanonicalUrl',
      mabExperimentId: 'mabExperimentId',
      metaDescription: 'metaDescription',
      name: 'name',
      pageExpiryDate: 0,
      pageExpiryEnabled: true,
      pageExpiryRedirectId: 0,
      pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
      password: 'password',
      postBody: 'postBody',
      postSummary: 'postSummary',
      publicAccessRules: [{}],
      publicAccessRulesEnabled: true,
      publishDate: '2019-12-27T18:11:19.117Z',
      publishImmediately: true,
      rssBody: 'rssBody',
      rssSummary: 'rssSummary',
      slug: 'slug',
      state: 'state',
      tagIds: [0],
      themeSettingsValues: { foo: {} },
      translatedFromId: 'translatedFromId',
      translations: {
        foo: {
          id: 0,
          archivedInDashboard: true,
          authorName: 'authorName',
          campaign: 'campaign',
          created: '2019-12-27T18:11:19.117Z',
          name: 'name',
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          slug: 'slug',
          state: 'state',
          updated: '2019-12-27T18:11:19.117Z',
        },
      },
      updated: '2019-12-27T18:11:19.117Z',
      updatedById: 'updatedById',
      url: 'url',
      useFeaturedImage: true,
      widgetContainers: { foo: {} },
      widgets: { foo: {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.blogs.posts.create({
      id: 'id',
      abStatus: 'automated_loser_variant',
      abTestId: 'abTestId',
      archivedAt: 0,
      archivedInDashboard: true,
      attachedStylesheets: [{ foo: {} }],
      authorName: 'authorName',
      blogAuthorId: 'blogAuthorId',
      campaign: 'campaign',
      categoryId: 0,
      contentGroupId: 'contentGroupId',
      contentTypeCategory: '0',
      created: '2019-12-27T18:11:19.117Z',
      createdById: 'createdById',
      currentlyPublished: true,
      currentState: 'AUTOMATED',
      domain: 'domain',
      dynamicPageDataSourceId: 'dynamicPageDataSourceId',
      dynamicPageDataSourceType: 0,
      dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
      enableDomainStylesheets: true,
      enableGoogleAmpOutputOverride: true,
      enableLayoutStylesheets: true,
      featuredImage: 'featuredImage',
      featuredImageAltText: 'featuredImageAltText',
      folderId: 'folderId',
      footerHtml: 'footerHtml',
      headHtml: 'headHtml',
      htmlTitle: 'htmlTitle',
      includeDefaultCustomCss: true,
      language: 'af',
      layoutSections: {
        foo: {
          cells: [],
          cssClass: 'cssClass',
          cssId: 'cssId',
          cssStyle: 'cssStyle',
          label: 'label',
          name: 'name',
          params: { foo: {} },
          rowMetaData: [
            {
              cssClass: 'cssClass',
              styles: {
                backgroundColor: {
                  a: 0,
                  b: 0,
                  g: 0,
                  r: 0,
                },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [
                    {
                      color: {
                        a: 0,
                        b: 0,
                        g: 0,
                        r: 0,
                      },
                    },
                  ],
                  sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'flexboxPositioning',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'verticalAlignment',
                breakpointStyles: {
                  foo: {
                    hidden: true,
                    margin: {},
                    padding: {},
                  },
                },
              },
            },
          ],
          rows: [{}],
          styles: {
            backgroundColor: {
              a: 0,
              b: 0,
              g: 0,
              r: 0,
            },
            backgroundGradient: {
              angle: { units: 'units', value: 0 },
              colors: [
                {
                  color: {
                    a: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                  },
                },
              ],
              sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
            },
            backgroundImage: {
              backgroundPosition: 'backgroundPosition',
              backgroundSize: 'backgroundSize',
              imageUrl: 'imageUrl',
            },
            flexboxPositioning: 'flexboxPositioning',
            forceFullWidthSection: true,
            maxWidthSectionCentering: 0,
            verticalAlignment: 'verticalAlignment',
            breakpointStyles: {
              foo: {
                hidden: true,
                margin: {},
                padding: {},
              },
            },
          },
          type: 'type',
          w: 0,
          x: 0,
        },
      },
      linkRelCanonicalUrl: 'linkRelCanonicalUrl',
      mabExperimentId: 'mabExperimentId',
      metaDescription: 'metaDescription',
      name: 'name',
      pageExpiryDate: 0,
      pageExpiryEnabled: true,
      pageExpiryRedirectId: 0,
      pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
      password: 'password',
      postBody: 'postBody',
      postSummary: 'postSummary',
      publicAccessRules: [{}],
      publicAccessRulesEnabled: true,
      publishDate: '2019-12-27T18:11:19.117Z',
      publishImmediately: true,
      rssBody: 'rssBody',
      rssSummary: 'rssSummary',
      slug: 'slug',
      state: 'state',
      tagIds: [0],
      themeSettingsValues: { foo: {} },
      translatedFromId: 'translatedFromId',
      translations: {
        foo: {
          id: 0,
          archivedInDashboard: true,
          authorName: 'authorName',
          campaign: 'campaign',
          created: '2019-12-27T18:11:19.117Z',
          name: 'name',
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          slug: 'slug',
          state: 'state',
          updated: '2019-12-27T18:11:19.117Z',
          tagIds: [0],
        },
      },
      updated: '2019-12-27T18:11:19.117Z',
      updatedById: 'updatedById',
      url: 'url',
      useFeaturedImage: true,
      widgetContainers: { foo: {} },
      widgets: { foo: {} },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.update('objectId', {
      id: 'id',
      abStatus: 'automated_loser_variant',
      abTestId: 'abTestId',
      archivedAt: 0,
      archivedInDashboard: true,
      attachedStylesheets: [{ foo: {} }],
      authorName: 'authorName',
      blogAuthorId: 'blogAuthorId',
      campaign: 'campaign',
      categoryId: 0,
      contentGroupId: 'contentGroupId',
      contentTypeCategory: '0',
      created: '2019-12-27T18:11:19.117Z',
      createdById: 'createdById',
      currentlyPublished: true,
      currentState: 'AUTOMATED',
      domain: 'domain',
      dynamicPageDataSourceId: 'dynamicPageDataSourceId',
      dynamicPageDataSourceType: 0,
      dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
      enableDomainStylesheets: true,
      enableGoogleAmpOutputOverride: true,
      enableLayoutStylesheets: true,
      featuredImage: 'featuredImage',
      featuredImageAltText: 'featuredImageAltText',
      folderId: 'folderId',
      footerHtml: 'footerHtml',
      headHtml: 'headHtml',
      htmlTitle: 'htmlTitle',
      includeDefaultCustomCss: true,
      language: 'af',
      layoutSections: {
        foo: {
          cells: [],
          cssClass: 'cssClass',
          cssId: 'cssId',
          cssStyle: 'cssStyle',
          label: 'label',
          name: 'name',
          params: { foo: {} },
          rowMetaData: [
            {
              cssClass: 'cssClass',
              styles: {
                backgroundColor: {
                  a: 0,
                  b: 0,
                  g: 0,
                  r: 0,
                },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [
                    {
                      color: {
                        a: 0,
                        b: 0,
                        g: 0,
                        r: 0,
                      },
                    },
                  ],
                  sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'flexboxPositioning',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'verticalAlignment',
              },
            },
          ],
          rows: [{}],
          styles: {
            backgroundColor: {
              a: 0,
              b: 0,
              g: 0,
              r: 0,
            },
            backgroundGradient: {
              angle: { units: 'units', value: 0 },
              colors: [
                {
                  color: {
                    a: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                  },
                },
              ],
              sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
            },
            backgroundImage: {
              backgroundPosition: 'backgroundPosition',
              backgroundSize: 'backgroundSize',
              imageUrl: 'imageUrl',
            },
            flexboxPositioning: 'flexboxPositioning',
            forceFullWidthSection: true,
            maxWidthSectionCentering: 0,
            verticalAlignment: 'verticalAlignment',
          },
          type: 'type',
          w: 0,
          x: 0,
        },
      },
      linkRelCanonicalUrl: 'linkRelCanonicalUrl',
      mabExperimentId: 'mabExperimentId',
      metaDescription: 'metaDescription',
      name: 'name',
      pageExpiryDate: 0,
      pageExpiryEnabled: true,
      pageExpiryRedirectId: 0,
      pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
      password: 'password',
      postBody: 'postBody',
      postSummary: 'postSummary',
      publicAccessRules: [{}],
      publicAccessRulesEnabled: true,
      publishDate: '2019-12-27T18:11:19.117Z',
      publishImmediately: true,
      rssBody: 'rssBody',
      rssSummary: 'rssSummary',
      slug: 'slug',
      state: 'state',
      tagIds: [0],
      themeSettingsValues: { foo: {} },
      translatedFromId: 'translatedFromId',
      translations: {
        foo: {
          id: 0,
          archivedInDashboard: true,
          authorName: 'authorName',
          campaign: 'campaign',
          created: '2019-12-27T18:11:19.117Z',
          name: 'name',
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          slug: 'slug',
          state: 'state',
          updated: '2019-12-27T18:11:19.117Z',
        },
      },
      updated: '2019-12-27T18:11:19.117Z',
      updatedById: 'updatedById',
      url: 'url',
      useFeaturedImage: true,
      widgetContainers: { foo: {} },
      widgets: { foo: {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.cms.blogs.posts.update('objectId', {
      id: 'id',
      abStatus: 'automated_loser_variant',
      abTestId: 'abTestId',
      archivedAt: 0,
      archivedInDashboard: true,
      attachedStylesheets: [{ foo: {} }],
      authorName: 'authorName',
      blogAuthorId: 'blogAuthorId',
      campaign: 'campaign',
      categoryId: 0,
      contentGroupId: 'contentGroupId',
      contentTypeCategory: '0',
      created: '2019-12-27T18:11:19.117Z',
      createdById: 'createdById',
      currentlyPublished: true,
      currentState: 'AUTOMATED',
      domain: 'domain',
      dynamicPageDataSourceId: 'dynamicPageDataSourceId',
      dynamicPageDataSourceType: 0,
      dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
      enableDomainStylesheets: true,
      enableGoogleAmpOutputOverride: true,
      enableLayoutStylesheets: true,
      featuredImage: 'featuredImage',
      featuredImageAltText: 'featuredImageAltText',
      folderId: 'folderId',
      footerHtml: 'footerHtml',
      headHtml: 'headHtml',
      htmlTitle: 'htmlTitle',
      includeDefaultCustomCss: true,
      language: 'af',
      layoutSections: {
        foo: {
          cells: [],
          cssClass: 'cssClass',
          cssId: 'cssId',
          cssStyle: 'cssStyle',
          label: 'label',
          name: 'name',
          params: { foo: {} },
          rowMetaData: [
            {
              cssClass: 'cssClass',
              styles: {
                backgroundColor: {
                  a: 0,
                  b: 0,
                  g: 0,
                  r: 0,
                },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [
                    {
                      color: {
                        a: 0,
                        b: 0,
                        g: 0,
                        r: 0,
                      },
                    },
                  ],
                  sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'flexboxPositioning',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'verticalAlignment',
                breakpointStyles: {
                  foo: {
                    hidden: true,
                    margin: {},
                    padding: {},
                  },
                },
              },
            },
          ],
          rows: [{}],
          styles: {
            backgroundColor: {
              a: 0,
              b: 0,
              g: 0,
              r: 0,
            },
            backgroundGradient: {
              angle: { units: 'units', value: 0 },
              colors: [
                {
                  color: {
                    a: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                  },
                },
              ],
              sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
            },
            backgroundImage: {
              backgroundPosition: 'backgroundPosition',
              backgroundSize: 'backgroundSize',
              imageUrl: 'imageUrl',
            },
            flexboxPositioning: 'flexboxPositioning',
            forceFullWidthSection: true,
            maxWidthSectionCentering: 0,
            verticalAlignment: 'verticalAlignment',
            breakpointStyles: {
              foo: {
                hidden: true,
                margin: {},
                padding: {},
              },
            },
          },
          type: 'type',
          w: 0,
          x: 0,
        },
      },
      linkRelCanonicalUrl: 'linkRelCanonicalUrl',
      mabExperimentId: 'mabExperimentId',
      metaDescription: 'metaDescription',
      name: 'name',
      pageExpiryDate: 0,
      pageExpiryEnabled: true,
      pageExpiryRedirectId: 0,
      pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
      password: 'password',
      postBody: 'postBody',
      postSummary: 'postSummary',
      publicAccessRules: [{}],
      publicAccessRulesEnabled: true,
      publishDate: '2019-12-27T18:11:19.117Z',
      publishImmediately: true,
      rssBody: 'rssBody',
      rssSummary: 'rssSummary',
      slug: 'slug',
      state: 'state',
      tagIds: [0],
      themeSettingsValues: { foo: {} },
      translatedFromId: 'translatedFromId',
      translations: {
        foo: {
          id: 0,
          archivedInDashboard: true,
          authorName: 'authorName',
          campaign: 'campaign',
          created: '2019-12-27T18:11:19.117Z',
          name: 'name',
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          slug: 'slug',
          state: 'state',
          updated: '2019-12-27T18:11:19.117Z',
          tagIds: [0],
        },
      },
      updated: '2019-12-27T18:11:19.117Z',
      updatedById: 'updatedById',
      url: 'url',
      useFeaturedImage: true,
      widgetContainers: { foo: {} },
      widgets: { foo: {} },
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.blogs.posts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.posts.list(
        {
          after: 'after',
          archived: true,
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          limit: 0,
          property: 'property',
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.blogs.posts.delete('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.posts.delete('objectId', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attachToLangGroup: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('attachToLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.posts.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.clone({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('clone: required and optional params', async () => {
    const response = await client.cms.blogs.posts.clone({ id: 'id', cloneName: 'cloneName' });
  });

  // Prism tests are disabled
  test.skip('createLangVariation: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.createLangVariation({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createLangVariation: required and optional params', async () => {
    const response = await client.cms.blogs.posts.createLangVariation({ id: 'id', language: 'language' });
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.detachFromLangGroup({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.posts.detachFromLangGroup({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.blogs.posts.get('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.posts.get(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getDraftByID', async () => {
    const responsePromise = client.cms.blogs.posts.getDraftByID('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPreviousVersion: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.getPreviousVersion('revisionId', { objectId: 'objectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPreviousVersion: required and optional params', async () => {
    const response = await client.cms.blogs.posts.getPreviousVersion('revisionId', { objectId: 'objectId' });
  });

  // Prism tests are disabled
  test.skip('getPreviousVersions', async () => {
    const responsePromise = client.cms.blogs.posts.getPreviousVersions('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPreviousVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.posts.getPreviousVersions(
        'objectId',
        {
          after: 'after',
          before: 'before',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('pushLive', async () => {
    const responsePromise = client.cms.blogs.posts.pushLive('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resetDraft', async () => {
    const responsePromise = client.cms.blogs.posts.resetDraft('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restorePreviousVersion: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.restorePreviousVersion('revisionId', {
      objectId: 'objectId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restorePreviousVersion: required and optional params', async () => {
    const response = await client.cms.blogs.posts.restorePreviousVersion('revisionId', {
      objectId: 'objectId',
    });
  });

  // Prism tests are disabled
  test.skip('restorePreviousVersionToDraft: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.restorePreviousVersionToDraft(0, { objectId: 'objectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restorePreviousVersionToDraft: required and optional params', async () => {
    const response = await client.cms.blogs.posts.restorePreviousVersionToDraft(0, { objectId: 'objectId' });
  });

  // Prism tests are disabled
  test.skip('schedule: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.schedule({
      id: 'id',
      publishDate: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('schedule: required and optional params', async () => {
    const response = await client.cms.blogs.posts.schedule({
      id: 'id',
      publishDate: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('setLangPrimary: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.setLangPrimary({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setLangPrimary: required and optional params', async () => {
    const response = await client.cms.blogs.posts.setLangPrimary({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.updateDraft('objectId', {
      id: 'id',
      abStatus: 'automated_loser_variant',
      abTestId: 'abTestId',
      archivedAt: 0,
      archivedInDashboard: true,
      attachedStylesheets: [{ foo: {} }],
      authorName: 'authorName',
      blogAuthorId: 'blogAuthorId',
      campaign: 'campaign',
      categoryId: 0,
      contentGroupId: 'contentGroupId',
      contentTypeCategory: '0',
      created: '2019-12-27T18:11:19.117Z',
      createdById: 'createdById',
      currentlyPublished: true,
      currentState: 'AUTOMATED',
      domain: 'domain',
      dynamicPageDataSourceId: 'dynamicPageDataSourceId',
      dynamicPageDataSourceType: 0,
      dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
      enableDomainStylesheets: true,
      enableGoogleAmpOutputOverride: true,
      enableLayoutStylesheets: true,
      featuredImage: 'featuredImage',
      featuredImageAltText: 'featuredImageAltText',
      folderId: 'folderId',
      footerHtml: 'footerHtml',
      headHtml: 'headHtml',
      htmlTitle: 'htmlTitle',
      includeDefaultCustomCss: true,
      language: 'af',
      layoutSections: {
        foo: {
          cells: [],
          cssClass: 'cssClass',
          cssId: 'cssId',
          cssStyle: 'cssStyle',
          label: 'label',
          name: 'name',
          params: { foo: {} },
          rowMetaData: [
            {
              cssClass: 'cssClass',
              styles: {
                backgroundColor: {
                  a: 0,
                  b: 0,
                  g: 0,
                  r: 0,
                },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [
                    {
                      color: {
                        a: 0,
                        b: 0,
                        g: 0,
                        r: 0,
                      },
                    },
                  ],
                  sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'flexboxPositioning',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'verticalAlignment',
              },
            },
          ],
          rows: [{}],
          styles: {
            backgroundColor: {
              a: 0,
              b: 0,
              g: 0,
              r: 0,
            },
            backgroundGradient: {
              angle: { units: 'units', value: 0 },
              colors: [
                {
                  color: {
                    a: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                  },
                },
              ],
              sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
            },
            backgroundImage: {
              backgroundPosition: 'backgroundPosition',
              backgroundSize: 'backgroundSize',
              imageUrl: 'imageUrl',
            },
            flexboxPositioning: 'flexboxPositioning',
            forceFullWidthSection: true,
            maxWidthSectionCentering: 0,
            verticalAlignment: 'verticalAlignment',
          },
          type: 'type',
          w: 0,
          x: 0,
        },
      },
      linkRelCanonicalUrl: 'linkRelCanonicalUrl',
      mabExperimentId: 'mabExperimentId',
      metaDescription: 'metaDescription',
      name: 'name',
      pageExpiryDate: 0,
      pageExpiryEnabled: true,
      pageExpiryRedirectId: 0,
      pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
      password: 'password',
      postBody: 'postBody',
      postSummary: 'postSummary',
      publicAccessRules: [{}],
      publicAccessRulesEnabled: true,
      publishDate: '2019-12-27T18:11:19.117Z',
      publishImmediately: true,
      rssBody: 'rssBody',
      rssSummary: 'rssSummary',
      slug: 'slug',
      state: 'state',
      tagIds: [0],
      themeSettingsValues: { foo: {} },
      translatedFromId: 'translatedFromId',
      translations: {
        foo: {
          id: 0,
          archivedInDashboard: true,
          authorName: 'authorName',
          campaign: 'campaign',
          created: '2019-12-27T18:11:19.117Z',
          name: 'name',
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          slug: 'slug',
          state: 'state',
          updated: '2019-12-27T18:11:19.117Z',
        },
      },
      updated: '2019-12-27T18:11:19.117Z',
      updatedById: 'updatedById',
      url: 'url',
      useFeaturedImage: true,
      widgetContainers: { foo: {} },
      widgets: { foo: {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateDraft: required and optional params', async () => {
    const response = await client.cms.blogs.posts.updateDraft('objectId', {
      id: 'id',
      abStatus: 'automated_loser_variant',
      abTestId: 'abTestId',
      archivedAt: 0,
      archivedInDashboard: true,
      attachedStylesheets: [{ foo: {} }],
      authorName: 'authorName',
      blogAuthorId: 'blogAuthorId',
      campaign: 'campaign',
      categoryId: 0,
      contentGroupId: 'contentGroupId',
      contentTypeCategory: '0',
      created: '2019-12-27T18:11:19.117Z',
      createdById: 'createdById',
      currentlyPublished: true,
      currentState: 'AUTOMATED',
      domain: 'domain',
      dynamicPageDataSourceId: 'dynamicPageDataSourceId',
      dynamicPageDataSourceType: 0,
      dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
      enableDomainStylesheets: true,
      enableGoogleAmpOutputOverride: true,
      enableLayoutStylesheets: true,
      featuredImage: 'featuredImage',
      featuredImageAltText: 'featuredImageAltText',
      folderId: 'folderId',
      footerHtml: 'footerHtml',
      headHtml: 'headHtml',
      htmlTitle: 'htmlTitle',
      includeDefaultCustomCss: true,
      language: 'af',
      layoutSections: {
        foo: {
          cells: [],
          cssClass: 'cssClass',
          cssId: 'cssId',
          cssStyle: 'cssStyle',
          label: 'label',
          name: 'name',
          params: { foo: {} },
          rowMetaData: [
            {
              cssClass: 'cssClass',
              styles: {
                backgroundColor: {
                  a: 0,
                  b: 0,
                  g: 0,
                  r: 0,
                },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [
                    {
                      color: {
                        a: 0,
                        b: 0,
                        g: 0,
                        r: 0,
                      },
                    },
                  ],
                  sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'flexboxPositioning',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'verticalAlignment',
                breakpointStyles: {
                  foo: {
                    hidden: true,
                    margin: {},
                    padding: {},
                  },
                },
              },
            },
          ],
          rows: [{}],
          styles: {
            backgroundColor: {
              a: 0,
              b: 0,
              g: 0,
              r: 0,
            },
            backgroundGradient: {
              angle: { units: 'units', value: 0 },
              colors: [
                {
                  color: {
                    a: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                  },
                },
              ],
              sideOrCorner: { horizontalSide: 'horizontalSide', verticalSide: 'verticalSide' },
            },
            backgroundImage: {
              backgroundPosition: 'backgroundPosition',
              backgroundSize: 'backgroundSize',
              imageUrl: 'imageUrl',
            },
            flexboxPositioning: 'flexboxPositioning',
            forceFullWidthSection: true,
            maxWidthSectionCentering: 0,
            verticalAlignment: 'verticalAlignment',
            breakpointStyles: {
              foo: {
                hidden: true,
                margin: {},
                padding: {},
              },
            },
          },
          type: 'type',
          w: 0,
          x: 0,
        },
      },
      linkRelCanonicalUrl: 'linkRelCanonicalUrl',
      mabExperimentId: 'mabExperimentId',
      metaDescription: 'metaDescription',
      name: 'name',
      pageExpiryDate: 0,
      pageExpiryEnabled: true,
      pageExpiryRedirectId: 0,
      pageExpiryRedirectUrl: 'pageExpiryRedirectUrl',
      password: 'password',
      postBody: 'postBody',
      postSummary: 'postSummary',
      publicAccessRules: [{}],
      publicAccessRulesEnabled: true,
      publishDate: '2019-12-27T18:11:19.117Z',
      publishImmediately: true,
      rssBody: 'rssBody',
      rssSummary: 'rssSummary',
      slug: 'slug',
      state: 'state',
      tagIds: [0],
      themeSettingsValues: { foo: {} },
      translatedFromId: 'translatedFromId',
      translations: {
        foo: {
          id: 0,
          archivedInDashboard: true,
          authorName: 'authorName',
          campaign: 'campaign',
          created: '2019-12-27T18:11:19.117Z',
          name: 'name',
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          slug: 'slug',
          state: 'state',
          updated: '2019-12-27T18:11:19.117Z',
          tagIds: [0],
        },
      },
      updated: '2019-12-27T18:11:19.117Z',
      updatedById: 'updatedById',
      url: 'url',
      useFeaturedImage: true,
      widgetContainers: { foo: {} },
      widgets: { foo: {} },
    });
  });

  // Prism tests are disabled
  test.skip('updateLangs: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.updateLangs({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateLangs: required and optional params', async () => {
    const response = await client.cms.blogs.posts.updateLangs({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
    });
  });
});
