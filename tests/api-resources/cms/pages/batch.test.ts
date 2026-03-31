// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Mock server tests are disabled
  test.skip('createFolders: only required params', async () => {
    const responsePromise = client.cms.pages.batch.createFolders({
      inputs: [
        {
          id: 'id',
          category: 0,
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          name: 'name',
          parentFolderId: 0,
          updated: '2019-12-27T18:11:19.117Z',
        },
      ],
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
  test.skip('createFolders: required and optional params', async () => {
    const response = await client.cms.pages.batch.createFolders({
      inputs: [
        {
          id: 'id',
          category: 0,
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          name: 'name',
          parentFolderId: 0,
          updated: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('createLandingPages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.createLandingPages({
      inputs: [
        {
          id: 'id',
          abStatus: 'automated_loser_variant',
          abTestId: 'abTestId',
          archivedAt: '2019-12-27T18:11:19.117Z',
          archivedInDashboard: true,
          attachedStylesheets: [{ foo: {} }],
          authorName: 'authorName',
          campaign: 'campaign',
          categoryId: 0,
          contentGroupId: 'contentGroupId',
          contentTypeCategory: '0',
          created: '2019-12-27T18:11:19.117Z',
          createdById: 'createdById',
          currentlyPublished: true,
          currentState: 'AGENT_GENERATED',
          domain: 'domain',
          dynamicPageDataSourceId: 'dynamicPageDataSourceId',
          dynamicPageDataSourceType: 0,
          dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
          enableDomainStylesheets: true,
          enableLayoutStylesheets: true,
          featuredImage: 'featuredImage',
          featuredImageAltText: 'featuredImageAltText',
          folderId: 'folderId',
          footerHtml: 'footerHtml',
          headHtml: 'headHtml',
          htmlTitle: 'htmlTitle',
          includeDefaultCustomCss: true,
          language: 'aa',
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
                      angle: { units: 'deg', value: 0 },
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
                      sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                    },
                    backgroundImage: {
                      backgroundPosition: 'backgroundPosition',
                      backgroundSize: 'backgroundSize',
                      imageUrl: 'imageUrl',
                    },
                    flexboxPositioning: 'BOTTOM_CENTER',
                    forceFullWidthSection: true,
                    maxWidthSectionCentering: 0,
                    verticalAlignment: 'BOTTOM',
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
                  angle: { units: 'deg', value: 0 },
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
                  sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'BOTTOM_CENTER',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'BOTTOM',
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
          pageRedirected: true,
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          publishImmediately: true,
          slug: 'slug',
          state: 'state',
          subcategory: 'subcategory',
          templatePath: 'templatePath',
          themeSettingsValues: { foo: {} },
          translatedFromId: 'translatedFromId',
          translations: {
            foo: {
              id: 0,
              archivedInDashboard: true,
              authorName: 'authorName',
              campaign: 'campaign',
              campaignName: 'campaignName',
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
        },
      ],
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
  test.skip('createLandingPages: required and optional params', async () => {
    const response = await client.cms.pages.batch.createLandingPages({
      inputs: [
        {
          id: 'id',
          abStatus: 'automated_loser_variant',
          abTestId: 'abTestId',
          archivedAt: '2019-12-27T18:11:19.117Z',
          archivedInDashboard: true,
          attachedStylesheets: [{ foo: {} }],
          authorName: 'authorName',
          campaign: 'campaign',
          categoryId: 0,
          contentGroupId: 'contentGroupId',
          contentTypeCategory: '0',
          created: '2019-12-27T18:11:19.117Z',
          createdById: 'createdById',
          currentlyPublished: true,
          currentState: 'AGENT_GENERATED',
          domain: 'domain',
          dynamicPageDataSourceId: 'dynamicPageDataSourceId',
          dynamicPageDataSourceType: 0,
          dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
          enableDomainStylesheets: true,
          enableLayoutStylesheets: true,
          featuredImage: 'featuredImage',
          featuredImageAltText: 'featuredImageAltText',
          folderId: 'folderId',
          footerHtml: 'footerHtml',
          headHtml: 'headHtml',
          htmlTitle: 'htmlTitle',
          includeDefaultCustomCss: true,
          language: 'aa',
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
                      angle: { units: 'deg', value: 0 },
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
                      sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                    },
                    backgroundImage: {
                      backgroundPosition: 'backgroundPosition',
                      backgroundSize: 'backgroundSize',
                      imageUrl: 'imageUrl',
                    },
                    flexboxPositioning: 'BOTTOM_CENTER',
                    forceFullWidthSection: true,
                    maxWidthSectionCentering: 0,
                    verticalAlignment: 'BOTTOM',
                    breakpointStyles: {
                      foo: {
                        hidden: true,
                        margin: {
                          bottom: { units: '%', value: 0 },
                          top: { units: '%', value: 0 },
                        },
                        padding: {
                          bottom: { units: '%', value: 0 },
                          left: { units: '%', value: 0 },
                          right: { units: '%', value: 0 },
                          top: { units: '%', value: 0 },
                        },
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
                  angle: { units: 'deg', value: 0 },
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
                  sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'BOTTOM_CENTER',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'BOTTOM',
                breakpointStyles: {
                  foo: {
                    hidden: true,
                    margin: {
                      bottom: { units: '%', value: 0 },
                      top: { units: '%', value: 0 },
                    },
                    padding: {
                      bottom: { units: '%', value: 0 },
                      left: { units: '%', value: 0 },
                      right: { units: '%', value: 0 },
                      top: { units: '%', value: 0 },
                    },
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
          pageRedirected: true,
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          publishImmediately: true,
          slug: 'slug',
          state: 'state',
          subcategory: 'subcategory',
          templatePath: 'templatePath',
          themeSettingsValues: { foo: {} },
          translatedFromId: 'translatedFromId',
          translations: {
            foo: {
              id: 0,
              archivedInDashboard: true,
              authorName: 'authorName',
              campaign: 'campaign',
              campaignName: 'campaignName',
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
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('createSitePages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.createSitePages({
      inputs: [
        {
          id: 'id',
          abStatus: 'automated_loser_variant',
          abTestId: 'abTestId',
          archivedAt: '2019-12-27T18:11:19.117Z',
          archivedInDashboard: true,
          attachedStylesheets: [{ foo: {} }],
          authorName: 'authorName',
          campaign: 'campaign',
          categoryId: 0,
          contentGroupId: 'contentGroupId',
          contentTypeCategory: '0',
          created: '2019-12-27T18:11:19.117Z',
          createdById: 'createdById',
          currentlyPublished: true,
          currentState: 'AGENT_GENERATED',
          domain: 'domain',
          dynamicPageDataSourceId: 'dynamicPageDataSourceId',
          dynamicPageDataSourceType: 0,
          dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
          enableDomainStylesheets: true,
          enableLayoutStylesheets: true,
          featuredImage: 'featuredImage',
          featuredImageAltText: 'featuredImageAltText',
          folderId: 'folderId',
          footerHtml: 'footerHtml',
          headHtml: 'headHtml',
          htmlTitle: 'htmlTitle',
          includeDefaultCustomCss: true,
          language: 'aa',
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
                      angle: { units: 'deg', value: 0 },
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
                      sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                    },
                    backgroundImage: {
                      backgroundPosition: 'backgroundPosition',
                      backgroundSize: 'backgroundSize',
                      imageUrl: 'imageUrl',
                    },
                    flexboxPositioning: 'BOTTOM_CENTER',
                    forceFullWidthSection: true,
                    maxWidthSectionCentering: 0,
                    verticalAlignment: 'BOTTOM',
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
                  angle: { units: 'deg', value: 0 },
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
                  sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'BOTTOM_CENTER',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'BOTTOM',
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
          pageRedirected: true,
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          publishImmediately: true,
          slug: 'slug',
          state: 'state',
          subcategory: 'subcategory',
          templatePath: 'templatePath',
          themeSettingsValues: { foo: {} },
          translatedFromId: 'translatedFromId',
          translations: {
            foo: {
              id: 0,
              archivedInDashboard: true,
              authorName: 'authorName',
              campaign: 'campaign',
              campaignName: 'campaignName',
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
        },
      ],
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
  test.skip('createSitePages: required and optional params', async () => {
    const response = await client.cms.pages.batch.createSitePages({
      inputs: [
        {
          id: 'id',
          abStatus: 'automated_loser_variant',
          abTestId: 'abTestId',
          archivedAt: '2019-12-27T18:11:19.117Z',
          archivedInDashboard: true,
          attachedStylesheets: [{ foo: {} }],
          authorName: 'authorName',
          campaign: 'campaign',
          categoryId: 0,
          contentGroupId: 'contentGroupId',
          contentTypeCategory: '0',
          created: '2019-12-27T18:11:19.117Z',
          createdById: 'createdById',
          currentlyPublished: true,
          currentState: 'AGENT_GENERATED',
          domain: 'domain',
          dynamicPageDataSourceId: 'dynamicPageDataSourceId',
          dynamicPageDataSourceType: 0,
          dynamicPageHubDbTableId: 'dynamicPageHubDbTableId',
          enableDomainStylesheets: true,
          enableLayoutStylesheets: true,
          featuredImage: 'featuredImage',
          featuredImageAltText: 'featuredImageAltText',
          folderId: 'folderId',
          footerHtml: 'footerHtml',
          headHtml: 'headHtml',
          htmlTitle: 'htmlTitle',
          includeDefaultCustomCss: true,
          language: 'aa',
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
                      angle: { units: 'deg', value: 0 },
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
                      sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                    },
                    backgroundImage: {
                      backgroundPosition: 'backgroundPosition',
                      backgroundSize: 'backgroundSize',
                      imageUrl: 'imageUrl',
                    },
                    flexboxPositioning: 'BOTTOM_CENTER',
                    forceFullWidthSection: true,
                    maxWidthSectionCentering: 0,
                    verticalAlignment: 'BOTTOM',
                    breakpointStyles: {
                      foo: {
                        hidden: true,
                        margin: {
                          bottom: { units: '%', value: 0 },
                          top: { units: '%', value: 0 },
                        },
                        padding: {
                          bottom: { units: '%', value: 0 },
                          left: { units: '%', value: 0 },
                          right: { units: '%', value: 0 },
                          top: { units: '%', value: 0 },
                        },
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
                  angle: { units: 'deg', value: 0 },
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
                  sideOrCorner: { horizontalSide: 'CENTER', verticalSide: 'BOTTOM' },
                },
                backgroundImage: {
                  backgroundPosition: 'backgroundPosition',
                  backgroundSize: 'backgroundSize',
                  imageUrl: 'imageUrl',
                },
                flexboxPositioning: 'BOTTOM_CENTER',
                forceFullWidthSection: true,
                maxWidthSectionCentering: 0,
                verticalAlignment: 'BOTTOM',
                breakpointStyles: {
                  foo: {
                    hidden: true,
                    margin: {
                      bottom: { units: '%', value: 0 },
                      top: { units: '%', value: 0 },
                    },
                    padding: {
                      bottom: { units: '%', value: 0 },
                      left: { units: '%', value: 0 },
                      right: { units: '%', value: 0 },
                      top: { units: '%', value: 0 },
                    },
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
          pageRedirected: true,
          password: 'password',
          publicAccessRules: [{}],
          publicAccessRulesEnabled: true,
          publishDate: '2019-12-27T18:11:19.117Z',
          publishImmediately: true,
          slug: 'slug',
          state: 'state',
          subcategory: 'subcategory',
          templatePath: 'templatePath',
          themeSettingsValues: { foo: {} },
          translatedFromId: 'translatedFromId',
          translations: {
            foo: {
              id: 0,
              archivedInDashboard: true,
              authorName: 'authorName',
              campaign: 'campaign',
              campaignName: 'campaignName',
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
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('deleteFolders: only required params', async () => {
    const responsePromise = client.cms.pages.batch.deleteFolders({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteFolders: required and optional params', async () => {
    const response = await client.cms.pages.batch.deleteFolders({ inputs: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('deleteLandingPages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.deleteLandingPages({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteLandingPages: required and optional params', async () => {
    const response = await client.cms.pages.batch.deleteLandingPages({ inputs: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('deleteSitePages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.deleteSitePages({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteSitePages: required and optional params', async () => {
    const response = await client.cms.pages.batch.deleteSitePages({ inputs: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('getLandingPages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.getLandingPages({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLandingPages: required and optional params', async () => {
    const response = await client.cms.pages.batch.getLandingPages({ inputs: ['string'], archived: true });
  });

  // Mock server tests are disabled
  test.skip('getSitePages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.getSitePages({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSitePages: required and optional params', async () => {
    const response = await client.cms.pages.batch.getSitePages({ inputs: ['string'], archived: true });
  });

  // Mock server tests are disabled
  test.skip('updateFolders: only required params', async () => {
    const responsePromise = client.cms.pages.batch.updateFolders({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateFolders: required and optional params', async () => {
    const response = await client.cms.pages.batch.updateFolders({ inputs: [{}], archived: true });
  });

  // Mock server tests are disabled
  test.skip('updateLandingPages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.updateLandingPages({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateLandingPages: required and optional params', async () => {
    const response = await client.cms.pages.batch.updateLandingPages({ inputs: [{}], archived: true });
  });

  // Mock server tests are disabled
  test.skip('updateSitePages: only required params', async () => {
    const responsePromise = client.cms.pages.batch.updateSitePages({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateSitePages: required and optional params', async () => {
    const response = await client.cms.pages.batch.updateSitePages({ inputs: [{}], archived: true });
  });
});
