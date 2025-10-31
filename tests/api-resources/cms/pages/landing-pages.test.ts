// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource landingPages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.create({
      id: 'id',
      abStatus: 'master',
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
    const response = await client.cms.pages.landingPages.create({
      id: 'id',
      abStatus: 'master',
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
    const responsePromise = client.cms.pages.landingPages.update('objectId', {
      id: 'id',
      abStatus: 'master',
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
    const response = await client.cms.pages.landingPages.update('objectId', {
      id: 'id',
      abStatus: 'master',
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
    const responsePromise = client.cms.pages.landingPages.list();
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
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.delete(
        'objectId',
        { archived: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attachToLangGroup: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.attachToLangGroup({
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
    const response = await client.cms.pages.landingPages.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('clone: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.clone({ id: 'id', cloneName: 'cloneName' });
  });

  // Prism tests are disabled
  test.skip('createAbTestVariation: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.createAbTestVariation({
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
    const response = await client.cms.pages.landingPages.createAbTestVariation({
      contentId: 'contentId',
      variationName: 'variationName',
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.createBatch({
      inputs: [
        {
          id: 'id',
          abStatus: 'master',
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
    const response = await client.cms.pages.landingPages.createBatch({
      inputs: [
        {
          id: 'id',
          abStatus: 'master',
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
  test.skip('createFolder: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.createFolder({
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
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
  test.skip('createFolder: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.createFolder({
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('createFoldersBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.createFoldersBatch({
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

  // Prism tests are disabled
  test.skip('createFoldersBatch: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.createFoldersBatch({
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

  // Prism tests are disabled
  test.skip('createLanguageVariation: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.createLanguageVariation({ id: 'id' });
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
    const response = await client.cms.pages.landingPages.createLanguageVariation({
      id: 'id',
      language: 'language',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('deleteBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.deleteBatch({ inputs: ['string'] });
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
    const response = await client.cms.pages.landingPages.deleteBatch({ inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('deleteFolder', async () => {
    const responsePromise = client.cms.pages.landingPages.deleteFolder('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteFolder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.deleteFolder(
        'objectId',
        { archived: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('deleteFoldersBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.deleteFoldersBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteFoldersBatch: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.deleteFoldersBatch({ inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.detachFromLangGroup({ id: 'id' });
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
    const response = await client.cms.pages.landingPages.detachFromLangGroup({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('endAbTest: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.endAbTest({
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
    const response = await client.cms.pages.landingPages.endAbTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.get(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.getBatch({ inputs: ['string'] });
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
    const response = await client.cms.pages.landingPages.getBatch({ inputs: ['string'], archived: true });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('getFolder', async () => {
    const responsePromise = client.cms.pages.landingPages.getFolder('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getFolder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.getFolder(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getFolderRevision: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.getFolderRevision('revisionId', {
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
  test.skip('getFolderRevision: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.getFolderRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Prism tests are disabled
  test.skip('getFoldersBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.getFoldersBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getFoldersBatch: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.getFoldersBatch({
      inputs: ['string'],
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('getRevision: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.getRevision('revisionId', { objectId: 'objectId' });
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
    const response = await client.cms.pages.landingPages.getRevision('revisionId', { objectId: 'objectId' });
  });

  // Prism tests are disabled
  test.skip('listFolderRevisions', async () => {
    const responsePromise = client.cms.pages.landingPages.listFolderRevisions('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFolderRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.listFolderRevisions(
        'objectId',
        { after: 'after', before: 'before', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFolders', async () => {
    const responsePromise = client.cms.pages.landingPages.listFolders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFolders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.listFolders(
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
  test.skip('listRevisions', async () => {
    const responsePromise = client.cms.pages.landingPages.listRevisions('objectId');
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
      client.cms.pages.landingPages.listRevisions(
        'objectId',
        { after: 'after', before: 'before', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('publishDraft', async () => {
    const responsePromise = client.cms.pages.landingPages.publishDraft('objectId');
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
    const responsePromise = client.cms.pages.landingPages.rerunAbTest({
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
    const response = await client.cms.pages.landingPages.rerunAbTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('restoreFolderRevision: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.restoreFolderRevision('revisionId', {
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
  test.skip('restoreFolderRevision: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.restoreFolderRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Prism tests are disabled
  test.skip('restoreRevision: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.restoreRevision('revisionId', {
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
    const response = await client.cms.pages.landingPages.restoreRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Prism tests are disabled
  test.skip('restoreRevisionToDraft: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.restoreRevisionToDraft(0, { objectId: 'objectId' });
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
    const response = await client.cms.pages.landingPages.restoreRevisionToDraft(0, { objectId: 'objectId' });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('schedule: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.schedule({
      id: 'id',
      publishDate: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('setNewLangPrimary: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.setNewLangPrimary({ id: 'id' });
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
    const response = await client.cms.pages.landingPages.setNewLangPrimary({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.updateBatch({ inputs: [{}] });
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
    const response = await client.cms.pages.landingPages.updateBatch({ inputs: [{}], archived: true });
  });

  // Prism tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.updateDraft('objectId', {
      id: 'id',
      abStatus: 'master',
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
    const response = await client.cms.pages.landingPages.updateDraft('objectId', {
      id: 'id',
      abStatus: 'master',
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
  test.skip('updateFolder: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.updateFolder('objectId', {
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
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
  test.skip('updateFolder: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.updateFolder('objectId', {
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateFoldersBatch: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.updateFoldersBatch({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateFoldersBatch: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.updateFoldersBatch({ inputs: [{}], archived: true });
  });

  // Prism tests are disabled
  test.skip('updateLanguages: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.updateLanguages({
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
    const response = await client.cms.pages.landingPages.updateLanguages({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
    });
  });
});
