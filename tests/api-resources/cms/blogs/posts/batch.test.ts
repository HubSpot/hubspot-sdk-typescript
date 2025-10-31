// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.batch.create({
      inputs: [
        {
          id: 'id',
          abStatus: 'master',
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
                    backgroundColor: { a: 0, b: 0, g: 0, r: 0 },
                    backgroundGradient: {
                      angle: { units: 'units', value: 0 },
                      colors: [{ color: { a: 0, b: 0, g: 0, r: 0 } }],
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
                backgroundColor: { a: 0, b: 0, g: 0, r: 0 },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [{ color: { a: 0, b: 0, g: 0, r: 0 } }],
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.blogs.posts.batch.create({
      inputs: [
        {
          id: 'id',
          abStatus: 'master',
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
                    backgroundColor: { a: 0, b: 0, g: 0, r: 0 },
                    backgroundGradient: {
                      angle: { units: 'units', value: 0 },
                      colors: [{ color: { a: 0, b: 0, g: 0, r: 0 } }],
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
                    breakpointStyles: { foo: { hidden: true, margin: {}, padding: {} } },
                  },
                },
              ],
              rows: [{}],
              styles: {
                backgroundColor: { a: 0, b: 0, g: 0, r: 0 },
                backgroundGradient: {
                  angle: { units: 'units', value: 0 },
                  colors: [{ color: { a: 0, b: 0, g: 0, r: 0 } }],
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
                breakpointStyles: { foo: { hidden: true, margin: {}, padding: {} } },
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
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.batch.update({ inputs: [{}] });
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
    const response = await client.cms.blogs.posts.batch.update({ inputs: [{}], archived: true });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.batch.delete({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.cms.blogs.posts.batch.delete({ inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.batch.get({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.cms.blogs.posts.batch.get({ inputs: ['string'], archived: true });
  });
});
