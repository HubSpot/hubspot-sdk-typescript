// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLandingPages } from '@hubspot/sdk/resources/cms/pages/landing-pages';
import { Pages } from '@hubspot/sdk/resources/cms/pages/pages';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseLandingPages],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Pages],
});

const runTests = (client: PartialHubSpot<{ cms: { pages: { landingPages: BaseLandingPages } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.create({
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
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.create({
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
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.update('objectId', {
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
    const response = await client.cms.pages.landingPages.update('objectId', {
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
      archived: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.pages.landingPages.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.list(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.pages.landingPages.delete('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.delete(
        'objectId',
        { archived: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.clone({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('clone: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.clone({ id: 'id', cloneName: 'cloneName' });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.pages.landingPages.get('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.get(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getDraft', async () => {
    const responsePromise = client.cms.pages.landingPages.getDraft('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pushDraftLive', async () => {
    const responsePromise = client.cms.pages.landingPages.pushDraftLive('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resetDraft', async () => {
    const responsePromise = client.cms.pages.landingPages.resetDraft('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('schedule: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.schedule({
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

  // Mock server tests are disabled
  test.skip('schedule: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.schedule({
      id: 'id',
      publishDate: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.updateDraft('objectId', {
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
  test.skip('updateDraft: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.updateDraft('objectId', {
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
    });
  });
};
describe('resource landingPages', () => runTests(client));
describe('resource landingPages (tree shakable, base)', () => runTests(partialClient));
describe('resource landingPages (tree shakable, subresource)', () => runTests(parentPartialClient));
