// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sitePages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.create({
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
      currentState: 'AUTOMATED',
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
    const response = await client.cms.pages.sitePages.create({
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
      currentState: 'AUTOMATED',
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
    const responsePromise = client.cms.pages.sitePages.update('objectId', {
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
      currentState: 'AUTOMATED',
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
    const response = await client.cms.pages.sitePages.update('objectId', {
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
      currentState: 'AUTOMATED',
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
    const responsePromise = client.cms.pages.sitePages.list();
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
      client.cms.pages.sitePages.list(
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
    const responsePromise = client.cms.pages.sitePages.delete('objectId');
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
      client.cms.pages.sitePages.delete('objectId', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attachToLangGroup: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.attachToLangGroup({
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
    const response = await client.cms.pages.sitePages.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.clone({ id: 'id' });
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
    const response = await client.cms.pages.sitePages.clone({ id: 'id', cloneName: 'cloneName' });
  });

  // Prism tests are disabled
  test.skip('createAbTestVariation: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.createAbTestVariation({
      contentId: 'contentId',
      variationName: 'variationName',
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
  test.skip('createAbTestVariation: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.createAbTestVariation({
      contentId: 'contentId',
      variationName: 'variationName',
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.createBatch({
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
          currentState: 'AUTOMATED',
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
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.createBatch({
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
          currentState: 'AUTOMATED',
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
  test.skip('createLanguageVariation: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.createLanguageVariation({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createLanguageVariation: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.createLanguageVariation({
      id: 'id',
      language: 'language',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('deleteBatch: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.deleteBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteBatch: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.deleteBatch({ inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.detachFromLangGroup({ id: 'id' });
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
    const response = await client.cms.pages.sitePages.detachFromLangGroup({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('endAbTest: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.endAbTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
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
  test.skip('endAbTest: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.endAbTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.pages.sitePages.get('objectId');
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
      client.cms.pages.sitePages.get(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.getBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.getBatch({ inputs: ['string'], archived: true });
  });

  // Prism tests are disabled
  test.skip('getDraft', async () => {
    const responsePromise = client.cms.pages.sitePages.getDraft('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRevision: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.getRevision('revisionId', { objectId: 'objectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRevision: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.getRevision('revisionId', { objectId: 'objectId' });
  });

  // Prism tests are disabled
  test.skip('listRevisions', async () => {
    const responsePromise = client.cms.pages.sitePages.listRevisions('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.sitePages.listRevisions(
        'objectId',
        { after: 'after', before: 'before', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('publishDraft', async () => {
    const responsePromise = client.cms.pages.sitePages.publishDraft('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('rerunAbTest: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.rerunAbTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
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
  test.skip('rerunAbTest: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.rerunAbTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
    });
  });

  // Prism tests are disabled
  test.skip('resetDraft', async () => {
    const responsePromise = client.cms.pages.sitePages.resetDraft('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restoreRevision: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.restoreRevision('revisionId', {
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
  test.skip('restoreRevision: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.restoreRevision('revisionId', { objectId: 'objectId' });
  });

  // Prism tests are disabled
  test.skip('restoreRevisionToDraft: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.restoreRevisionToDraft(0, { objectId: 'objectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restoreRevisionToDraft: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.restoreRevisionToDraft(0, { objectId: 'objectId' });
  });

  // Prism tests are disabled
  test.skip('schedule: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.schedule({
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
    const response = await client.cms.pages.sitePages.schedule({
      id: 'id',
      publishDate: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('setNewLangPrimary: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.setNewLangPrimary({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setNewLangPrimary: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.setNewLangPrimary({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.updateBatch({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.updateBatch({ inputs: [{}], archived: true });
  });

  // Prism tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.updateDraft('objectId', {
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
      currentState: 'AUTOMATED',
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
    const response = await client.cms.pages.sitePages.updateDraft('objectId', {
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
      currentState: 'AUTOMATED',
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
  test.skip('updateLanguages: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.updateLanguages({
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
  test.skip('updateLanguages: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.updateLanguages({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
    });
  });
});
