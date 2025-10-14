// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emails', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.emails.create({ name: 'My subject' });
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
    const response = await client.marketing.emails.create({
      name: 'My subject',
      activeDomain: 'test.hs-sites.com',
      archived: false,
      businessUnitId: 0,
      campaign: '1b7f51a6-33c1-44d6-ba28-fe81f655dced',
      content: {
        flexAreas: { main: {} },
        plainTextVersion:
          'This is custom! View in browser ({{view_as_page_url}})\n\nHello {{ contact.firstname }},\n\nPlain text emails have minimal formatting so your reader can really focus on what you have to say. Introduce yourself and explain why you’re reaching out.\n\nEvery email should try to lead the reader to some kind of action. Use this space to describe why the reader should want to click on the link below. Put the link on its own line to really draw their eye to it.\n\nLink text\n\nNow it’s time to wrap up your email. Before your signature, thank the recipient for reading. You can also invite them to send this email to any of their colleagues who might be interested.\n\nAll the best,\n\nYour full name\n\nYour job title\n\nOther contact information\n\n{{site_settings.company_name}}, {{site_settings.company_street_address_1}}, {{site_settings.company_street_address_2}}, {{site_settings.company_city}}, {{site_settings.company_state}} {{site_settings.company_zip}}, {{site_settings.company_country}}, {{site_settings.company_phone}}\n\nUnsubscribe ({{unsubscribe_link_all}})\n\nManage preferences ({{unsubscribe_link}})',
        smartFields: { foo: {} },
        styleSettings: {
          backgroundColor: 'backgroundColor',
          backgroundImage: 'backgroundImage',
          backgroundImageType: 'backgroundImageType',
          bodyBorderColor: 'bodyBorderColor',
          bodyBorderColorChoice: 'bodyBorderColorChoice',
          bodyBorderWidth: 0,
          bodyColor: 'bodyColor',
          buttonStyleSettings: {
            backgroundColor: {},
            cornerRadius: 0,
            fontStyle: { bold: true, color: 'color', font: 'font', italic: true, size: 0, underline: true },
          },
          colorPickerFavorite1: 'colorPickerFavorite1',
          colorPickerFavorite2: 'colorPickerFavorite2',
          colorPickerFavorite3: 'colorPickerFavorite3',
          colorPickerFavorite4: 'colorPickerFavorite4',
          colorPickerFavorite5: 'colorPickerFavorite5',
          colorPickerFavorite6: 'colorPickerFavorite6',
          dividerStyleSettings: { color: {}, height: 0, lineType: 'lineType' },
          emailBodyPadding: 'emailBodyPadding',
          emailBodyWidth: 'emailBodyWidth',
          headingOneFont: {
            bold: true,
            color: 'color',
            font: 'font',
            italic: true,
            size: 0,
            underline: true,
          },
          headingTwoFont: {
            bold: true,
            color: 'color',
            font: 'font',
            italic: true,
            size: 0,
            underline: true,
          },
          linksFont: { bold: true, color: 'color', font: 'font', italic: true, size: 0, underline: true },
          primaryAccentColor: 'primaryAccentColor',
          primaryFont: 'primaryFont',
          primaryFontColor: 'primaryFontColor',
          primaryFontLineHeight: 'primaryFontLineHeight',
          primaryFontSize: 0,
          secondaryAccentColor: 'secondaryAccentColor',
          secondaryFont: 'secondaryFont',
          secondaryFontColor: 'secondaryFontColor',
          secondaryFontLineHeight: 'secondaryFontLineHeight',
          secondaryFontSize: 0,
        },
        templatePath: 'templatePath',
        themeSettingsValues: { foo: {} },
        widgetContainers: { foo: {} },
        widgets: { 'module-0-1-1': {}, 'module-1-1-1': {}, module_160676180617911: {}, preview_text: {} },
      },
      feedbackSurveyId: 'feedbackSurveyId',
      folderIdV2: 0,
      from: { customReplyTo: 'customReplyTo', fromName: 'Bruce Wayne', replyTo: 'test@hubspot.com' },
      jitterSendTime: true,
      language: 'af',
      publishDate: '2023-11-30T18:44:20.387Z',
      rssData: {
        blogEmailType: 'blogEmailType',
        blogImageMaxWidth: 0,
        blogLayout: 'blogLayout',
        hubspotBlogId: 'hubspotBlogId',
        maxEntries: 0,
        rssEntryTemplate: 'rssEntryTemplate',
        timing: { foo: {} },
        url: 'url',
        useHeadlineAsSubject: true,
      },
      sendOnPublish: true,
      state: 'DRAFT',
      subcategory: 'batch',
      subject: 'My subject',
      subscriptionDetails: {
        officeLocationId: '5449392956',
        preferencesGroupId: 'preferencesGroupId',
        subscriptionId: 'subscriptionId',
        subscriptionName: 'subscriptionName',
      },
      testing: {
        abSampleSizeDefault: 'master',
        abSamplingDefault: 'master',
        abStatus: 'master',
        abSuccessMetric: 'CLICKS_BY_OPENS',
        abTestPercentage: 0,
        hoursToWait: 0,
        isAbVariation: true,
        testId: 'testId',
      },
      to: {
        contactIds: { exclude: ['string'], include: ['string'] },
        contactIlsLists: { exclude: ['string'], include: ['string'] },
        contactLists: { exclude: ['string'], include: ['string'] },
        limitSendFrequency: true,
        suppressGraymail: true,
      },
      webversion: {
        domain: 'domain',
        enabled: true,
        expiresAt: '2020-11-30T18:44:20.387Z',
        isPageRedirected: true,
        metaDescription: '',
        pageExpiryEnabled: true,
        redirectToPageId: 'redirectToPageId',
        redirectToUrl: 'http://www.example.org',
        slug: 'slug',
        title: 'title',
        url: 'url',
      },
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.marketing.emails.update('emailId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.emails.list();
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
      client.marketing.emails.list(
        {
          after: 'after',
          archived: true,
          campaign: 'campaign',
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          includedProperties: ['string'],
          includeStats: true,
          isPublished: true,
          limit: 0,
          marketingCampaignNames: true,
          sort: ['string'],
          type: 'AB_EMAIL',
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
          workflowNames: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.marketing.emails.delete('emailId');
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
      client.marketing.emails.delete('emailId', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.marketing.emails.clone({ id: 'id' });
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
    const response = await client.marketing.emails.clone({
      id: 'id',
      cloneName: 'cloneName',
      language: 'language',
    });
  });

  // Prism tests are disabled
  test.skip('createAbTestVariation: only required params', async () => {
    const responsePromise = client.marketing.emails.createAbTestVariation({
      contentId: '7',
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
    const response = await client.marketing.emails.createAbTestVariation({
      contentId: '7',
      variationName: 'variationName',
    });
  });

  // Prism tests are disabled
  test.skip('getAbTestVariation', async () => {
    const responsePromise = client.marketing.emails.getAbTestVariation('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getDraft', async () => {
    const responsePromise = client.marketing.emails.getDraft('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getEmailsList', async () => {
    const responsePromise = client.marketing.emails.getEmailsList();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getEmailsList: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.getEmailsList(
        {
          emailIds: [0],
          endTimestamp: 'endTimestamp',
          property: 'property',
          startTimestamp: 'startTimestamp',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getHistogram', async () => {
    const responsePromise = client.marketing.emails.getHistogram();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistogram: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.getHistogram(
        { emailIds: [0], endTimestamp: 'endTimestamp', interval: 'YEAR', startTimestamp: 'startTimestamp' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRevisionByID: only required params', async () => {
    const responsePromise = client.marketing.emails.getRevisionByID('revisionId', { emailId: 'emailId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRevisionByID: required and optional params', async () => {
    const response = await client.marketing.emails.getRevisionByID('revisionId', { emailId: 'emailId' });
  });

  // Prism tests are disabled
  test.skip('getRevisions', async () => {
    const responsePromise = client.marketing.emails.getRevisions('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.getRevisions(
        'emailId',
        { after: 'after', before: 'before', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFull', async () => {
    const responsePromise = client.marketing.emails.listFull();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFull: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.listFull(
        {
          emailIds: [0],
          endTimestamp: 'endTimestamp',
          property: 'property',
          startTimestamp: 'startTimestamp',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('publishOrSend', async () => {
    const responsePromise = client.marketing.emails.publishOrSend('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('read', async () => {
    const responsePromise = client.marketing.emails.read('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('read: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.read(
        'emailId',
        {
          archived: true,
          includedProperties: ['string'],
          includeStats: true,
          marketingCampaignNames: true,
          workflowNames: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('resetDraft', async () => {
    const responsePromise = client.marketing.emails.resetDraft('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restoreDraftRevision: only required params', async () => {
    const responsePromise = client.marketing.emails.restoreDraftRevision(0, { emailId: 'emailId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('restoreDraftRevision: required and optional params', async () => {
    const response = await client.marketing.emails.restoreDraftRevision(0, { emailId: 'emailId' });
  });

  // Prism tests are disabled
  test.skip('restoreRevision: only required params', async () => {
    const responsePromise = client.marketing.emails.restoreRevision('revisionId', { emailId: 'emailId' });
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
    const response = await client.marketing.emails.restoreRevision('revisionId', { emailId: 'emailId' });
  });

  // Prism tests are disabled
  test.skip('unpublishOrCancel', async () => {
    const responsePromise = client.marketing.emails.unpublishOrCancel('emailId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsertDraft', async () => {
    const responsePromise = client.marketing.emails.upsertDraft('emailId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
