// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDraft } from '@hubspot/sdk/resources/cms/pages/landing-pages/draft';
import { LandingPages } from '@hubspot/sdk/resources/cms/pages/landing-pages/landing-pages';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDraft],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LandingPages],
});

const runTests = (client: PartialHubSpot<{ cms: { pages: { landingPages: { draft: BaseDraft } } } }>) => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.draft.update('objectId', {
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
                  angle: { units: 'DEGREES', value: 0 },
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
              angle: { units: 'DEGREES', value: 0 },
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
    const response = await client.cms.pages.landingPages.draft.update('objectId', {
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
                  angle: { units: 'DEGREES', value: 0 },
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
                      bottom: { units: 'CH', value: 0 },
                      top: { units: 'CH', value: 0 },
                    },
                    padding: {
                      bottom: { units: 'CH', value: 0 },
                      left: { units: 'CH', value: 0 },
                      right: { units: 'CH', value: 0 },
                      top: { units: 'CH', value: 0 },
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
              angle: { units: 'DEGREES', value: 0 },
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
                  bottom: { units: 'CH', value: 0 },
                  top: { units: 'CH', value: 0 },
                },
                padding: {
                  bottom: { units: 'CH', value: 0 },
                  left: { units: 'CH', value: 0 },
                  right: { units: 'CH', value: 0 },
                  top: { units: 'CH', value: 0 },
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
  test.skip('get', async () => {
    const responsePromise = client.cms.pages.landingPages.draft.get('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pushLive', async () => {
    const responsePromise = client.cms.pages.landingPages.draft.pushLive('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reset', async () => {
    const responsePromise = client.cms.pages.landingPages.draft.reset('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource draft', () => runTests(client));
describe('resource draft (tree shakable, base)', () => runTests(partialClient));
describe('resource draft (tree shakable, subresource)', () => runTests(parentPartialClient));
