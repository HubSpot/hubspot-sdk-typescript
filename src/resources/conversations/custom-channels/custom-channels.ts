// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ChannelAccountStagingTokensAPI from './channel-account-staging-tokens';
import {
  ChannelAccountStagingTokenUpdateParams,
  ChannelAccountStagingTokens,
} from './channel-account-staging-tokens';
import * as ChannelAccountsAPI from './channel-accounts';
import {
  ChannelAccountCreateParams,
  ChannelAccountGetParams,
  ChannelAccountUpdateParams,
  ChannelAccounts,
} from './channel-accounts';
import * as MessagesAPI from './messages';
import { MessageCreateParams, MessageGetParams, MessageUpdateParams, Messages } from './messages';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CustomChannels extends APIResource {
  channelAccountStagingTokens: ChannelAccountStagingTokensAPI.ChannelAccountStagingTokens =
    new ChannelAccountStagingTokensAPI.ChannelAccountStagingTokens(this._client);
  channelAccounts: ChannelAccountsAPI.ChannelAccounts = new ChannelAccountsAPI.ChannelAccounts(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Register a new channel along with its capabilities and the webhook url that will
   * be used to receive messages published over the channel
   *
   * @example
   * ```ts
   * const publicChannelIntegrationChannel = await client.conversations.customChannels.create({
   *   capabilities: {
   *     '0': {},
   *     '1': {},
   *     '2': {},
   *     '3': {},
   *     '4': {},
   *     '5': {},
   *     '6': {},
   *     '7': {},
   *     '8': {},
   *     '9': {},
   *     '10': {},
   *     '11': {},
   *     '12': {},
   *     '13': {},
   *     '14': {},
   *     '15': {},
   *     '16': {},
   *     '17': {},
   *     '18': {},
   *     '19': {},
   *     '20': {},
   *     '21': {},
   *     '22': {},
   *     '23': {},
   *     '24': {},
   *     '25': {},
   *     '26': {},
   *     '27': {},
   *     '28': {},
   *     '29': {},
   *     '30': {},
   *     '31': {},
   *     '32': {},
   *     '33': {},
   *     '34': {},
   *     '35': {},
   *     '36': {},
   *     '37': {},
   *     '38': {},
   *     '39': {},
   *     '40': {},
   *     '41': {},
   *     '42': {},
   *     '43': {},
   *     '44': {},
   *     '45': {},
   *     '46': {},
   *     '47': {},
   *     '48': {},
   *     '49': {},
   *     '50': {},
   *     '51': {},
   *     '52': {},
   *     '53': {},
   *     '54': {},
   *     '55': {},
   *     '56': {},
   *     '57': {},
   *     '58': {},
   *     '59': {},
   *     '60': {},
   *     '61': {},
   *     '62': {},
   *     '63': {},
   *     '64': {},
   *     '65': {},
   *     '66': {},
   *     '67': {},
   *     '68': {},
   *     '69': {},
   *     '70': {},
   *     '71': {},
   *     '72': {},
   *     '73': {},
   *     '74': {},
   *     '75': {},
   *     '76': {},
   *     '77': {},
   *     '78': {},
   *     '79': {},
   *     '80': {},
   *     '81': {},
   *     '82': {},
   *     '83': {},
   *     '84': {},
   *     '85': {},
   *     '86': {},
   *     '87': {},
   *     '88': {},
   *     '89': {},
   *     '90': {},
   *     '91': {},
   *     '92': {},
   *     '93': {},
   *     '94': {},
   *     '95': {},
   *     '96': {},
   *     '97': {},
   *     '98': {},
   *     '99': {},
   *     '100': {},
   *     '101': {},
   *     '102': {},
   *     '103': {},
   *     '104': {},
   *     '105': {},
   *     '106': {},
   *     '107': {},
   *     '108': {},
   *     '109': {},
   *     '110': {},
   *     '111': {},
   *     '112': {},
   *     '113': {},
   *     '114': {},
   *     '115': {},
   *     '116': {},
   *     '117': {},
   *     '118': {},
   *     '119': {},
   *     '120': {},
   *     '121': {},
   *     '122': {},
   *     '123': {},
   *     '124': {},
   *     '125': {},
   *     '126': {},
   *     '127': {},
   *     '128': {},
   *     '129': {},
   *     '130': {},
   *     '131': {},
   *     '132': {},
   *     '133': {},
   *     '134': {},
   *     '135': {},
   *     '136': {},
   *     '137': {},
   *     '138': {},
   *     '139': {},
   *     '140': {},
   *     '141': {},
   *     '142': {},
   *     '143': {},
   *     '144': {},
   *     '145': {},
   *     '146': {},
   *     '147': {},
   *     '148': {},
   *     '149': {},
   *     '150': {},
   *     '151': {},
   *     '152': {},
   *     '153': {},
   *     '154': {},
   *     '155': {},
   *     '156': {},
   *     '157': {},
   *     '158': {},
   *     '159': {},
   *     '160': {},
   *     '161': {},
   *     '162': {},
   *     '163': {},
   *     '164': {},
   *     '165': {},
   *     '166': {},
   *     '167': {},
   *     '168': {},
   *     '169': {},
   *     '170': {},
   *     '171': {},
   *     '172': {},
   *     '173': {},
   *     '174': {},
   *     '175': {},
   *     '176': {},
   *     '177': {},
   *     '178': {},
   *     '179': {},
   *     '180': {},
   *     '181': {},
   *     '182': {},
   *     '183': {},
   *     '184': {},
   *     '185': {},
   *     '186': {},
   *     '187': {},
   *     '188': {},
   *     '189': {},
   *     '190': {},
   *     '191': {},
   *     '192': {},
   *     '193': {},
   *     '194': {},
   *     '195': {},
   *     '196': {},
   *     '197': {},
   *     '198': {},
   *     '199': {},
   *     '200': {},
   *     '201': {},
   *     '202': {},
   *     '203': {},
   *     '204': {},
   *     '205': {},
   *     '206': {},
   *     '207': {},
   *     '208': {},
   *     '209': {},
   *     '210': {},
   *     '211': {},
   *     '212': {},
   *     '213': {},
   *     '214': {},
   *     '215': {},
   *     '216': {},
   *     '217': {},
   *     '218': {},
   *     '219': {},
   *     '220': {},
   *     '221': {},
   *     '222': {},
   *     '223': {},
   *     '224': {},
   *     '225': {},
   *     '226': {},
   *     '227': {},
   *     '228': {},
   *     '229': {},
   *     '230': {},
   *     '231': {},
   *     '232': {},
   *     '233': {},
   *     '234': {},
   *     '235': {},
   *     '236': {},
   *     '237': {},
   *     '238': {},
   *     '239': {},
   *     '240': {},
   *     '241': {},
   *     '242': {},
   *     '243': {},
   *     '244': {},
   *     '245': {},
   *     '246': {},
   *     '247': {},
   *     '248': {},
   *     '249': {},
   *     '250': {},
   *     '251': {},
   *     '252': {},
   *     '253': {},
   *     '254': {},
   *     '255': {},
   *     '256': {},
   *     '257': {},
   *     '258': {},
   *     '259': {},
   *     '260': {},
   *     '261': {},
   *     '262': {},
   *     '263': {},
   *     '264': {},
   *     '265': {},
   *     '266': {},
   *     '267': {},
   *     '268': {},
   *     '269': {},
   *     '270': {},
   *     '271': {},
   *     '272': {},
   *     '273': {},
   *     '274': {},
   *     '275': {},
   *     '276': {},
   *     '277': {},
   *     '278': {},
   *     '279': {},
   *     '280': {},
   *     '281': {},
   *     '282': {},
   *     '283': {},
   *     '284': {},
   *     '285': {},
   *     '286': {},
   *     '287': {},
   *     '288': {},
   *     '289': {},
   *     '290': {},
   *     '291': {},
   *     '292': {},
   *     '293': {},
   *     '294': {},
   *     '295': {},
   *     '296': {},
   *     '297': {},
   *     '298': {},
   *     '299': {},
   *     '300': {},
   *     '301': {},
   *     '302': {},
   *     '303': {},
   *     '304': {},
   *     '305': {},
   *     '306': {},
   *     '307': {},
   *     '308': {},
   *     '309': {},
   *     '310': {},
   *     '311': {},
   *     '312': {},
   *     '313': {},
   *     '314': {},
   *     '315': {},
   *     '316': {},
   *     '317': {},
   *     '318': {},
   *     '319': {},
   *     '320': {},
   *     '321': {},
   *     '322': {},
   *     '323': {},
   *     '324': {},
   *     '325': {},
   *     '326': {},
   *     '327': {},
   *     '328': {},
   *     '329': {},
   *     '330': {},
   *     '331': {},
   *     '332': {},
   *     '333': {},
   *     '334': {},
   *     '335': {},
   *     '336': {},
   *     '337': {},
   *     '338': {},
   *     '339': {},
   *     '340': {},
   *     '341': {},
   *     '342': {},
   *     '343': {},
   *     '344': {},
   *     '345': {},
   *     '346': {},
   *     '347': {},
   *     '348': {},
   *     '349': {},
   *     '350': {},
   *     '351': {},
   *     '352': {},
   *     '353': {},
   *     '354': {},
   *     '355': {},
   *     '356': {},
   *     '357': {},
   *     '358': {},
   *     '359': {},
   *     '360': {},
   *     '361': {},
   *     '362': {},
   *     '363': {},
   *     '364': {},
   *     '365': {},
   *     '366': {},
   *     '367': {},
   *     '368': {},
   *     '369': {},
   *     '370': {},
   *     '371': {},
   *     '372': {},
   *     '373': {},
   *     '374': {},
   *     '375': {},
   *     '376': {},
   *     '377': {},
   *     '378': {},
   *     '379': {},
   *     '380': {},
   *     '381': {},
   *     '382': {},
   *     '383': {},
   *     '384': {},
   *     '385': {},
   *     '386': {},
   *     '387': {},
   *     '388': {},
   *     '389': {},
   *     '390': {},
   *     '391': {},
   *     '392': {},
   *     '393': {},
   *     '394': {},
   *     '395': {},
   *     '396': {},
   *     '397': {},
   *     '398': {},
   *     '399': {},
   *     '400': {},
   *     '401': {},
   *     '402': {},
   *     '403': {},
   *     '404': {},
   *     '405': {},
   *     '406': {},
   *     '407': {},
   *     '408': {},
   *     '409': {},
   *     '410': {},
   *     '411': {},
   *     '412': {},
   *     '413': {},
   *     '414': {},
   *     '415': {},
   *     '416': {},
   *     '417': {},
   *     '418': {},
   *     '419': {},
   *     '420': {},
   *     '421': {},
   *     '422': {},
   *     '423': {},
   *     '424': {},
   *     '425': {},
   *     '426': {},
   *     '427': {},
   *     '428': {},
   *     '429': {},
   *     '430': {},
   *     '431': {},
   *     '432': {},
   *     '433': {},
   *     '434': {},
   *     '435': {},
   *     '436': {},
   *     '437': {},
   *     '438': {},
   *     '439': {},
   *     '440': {},
   *     '441': {},
   *     '442': {},
   *     '443': {},
   *     '444': {},
   *     '445': {},
   *     '446': {},
   *     '447': {},
   *     '448': {},
   *     '449': {},
   *     '450': {},
   *     '451': {},
   *     '452': {},
   *     '453': {},
   *     '454': {},
   *   },
   *   name: 'name',
   * });
   * ```
   */
  create(
    body: CustomChannelCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.post('/conversations/v3/custom-channels/', { body, ...options });
  }

  /**
   * Update the capabilities for an existing. You can also use it to update the
   * channel's webhookUri and its channelAccountConnectionRedirectUrl.
   *
   * @example
   * ```ts
   * const publicChannelIntegrationChannel = await client.conversations.customChannels.update(
   *   'channelId',
   *   {
   *     capabilities: {
   *       '0': {},
   *       '1': {},
   *       '2': {},
   *       '3': {},
   *       '4': {},
   *       '5': {},
   *       '6': {},
   *       '7': {},
   *       '8': {},
   *       '9': {},
   *       '10': {},
   *       '11': {},
   *       '12': {},
   *       '13': {},
   *       '14': {},
   *       '15': {},
   *       '16': {},
   *       '17': {},
   *       '18': {},
   *       '19': {},
   *       '20': {},
   *       '21': {},
   *       '22': {},
   *       '23': {},
   *       '24': {},
   *       '25': {},
   *       '26': {},
   *       '27': {},
   *       '28': {},
   *       '29': {},
   *       '30': {},
   *       '31': {},
   *       '32': {},
   *       '33': {},
   *       '34': {},
   *       '35': {},
   *       '36': {},
   *       '37': {},
   *       '38': {},
   *       '39': {},
   *       '40': {},
   *       '41': {},
   *       '42': {},
   *       '43': {},
   *       '44': {},
   *       '45': {},
   *       '46': {},
   *       '47': {},
   *       '48': {},
   *       '49': {},
   *       '50': {},
   *       '51': {},
   *       '52': {},
   *       '53': {},
   *       '54': {},
   *       '55': {},
   *       '56': {},
   *       '57': {},
   *       '58': {},
   *       '59': {},
   *       '60': {},
   *       '61': {},
   *       '62': {},
   *       '63': {},
   *       '64': {},
   *       '65': {},
   *       '66': {},
   *       '67': {},
   *       '68': {},
   *       '69': {},
   *       '70': {},
   *       '71': {},
   *       '72': {},
   *       '73': {},
   *       '74': {},
   *       '75': {},
   *       '76': {},
   *       '77': {},
   *       '78': {},
   *       '79': {},
   *       '80': {},
   *       '81': {},
   *       '82': {},
   *       '83': {},
   *       '84': {},
   *       '85': {},
   *       '86': {},
   *       '87': {},
   *       '88': {},
   *       '89': {},
   *       '90': {},
   *       '91': {},
   *       '92': {},
   *       '93': {},
   *       '94': {},
   *       '95': {},
   *       '96': {},
   *       '97': {},
   *       '98': {},
   *       '99': {},
   *       '100': {},
   *       '101': {},
   *       '102': {},
   *       '103': {},
   *       '104': {},
   *       '105': {},
   *       '106': {},
   *       '107': {},
   *       '108': {},
   *       '109': {},
   *       '110': {},
   *       '111': {},
   *       '112': {},
   *       '113': {},
   *       '114': {},
   *       '115': {},
   *       '116': {},
   *       '117': {},
   *       '118': {},
   *       '119': {},
   *       '120': {},
   *       '121': {},
   *       '122': {},
   *       '123': {},
   *       '124': {},
   *       '125': {},
   *       '126': {},
   *       '127': {},
   *       '128': {},
   *       '129': {},
   *       '130': {},
   *       '131': {},
   *       '132': {},
   *       '133': {},
   *       '134': {},
   *       '135': {},
   *       '136': {},
   *       '137': {},
   *       '138': {},
   *       '139': {},
   *       '140': {},
   *       '141': {},
   *       '142': {},
   *       '143': {},
   *       '144': {},
   *       '145': {},
   *       '146': {},
   *       '147': {},
   *       '148': {},
   *       '149': {},
   *       '150': {},
   *       '151': {},
   *       '152': {},
   *       '153': {},
   *       '154': {},
   *       '155': {},
   *       '156': {},
   *       '157': {},
   *       '158': {},
   *       '159': {},
   *       '160': {},
   *       '161': {},
   *       '162': {},
   *       '163': {},
   *       '164': {},
   *       '165': {},
   *       '166': {},
   *       '167': {},
   *       '168': {},
   *       '169': {},
   *       '170': {},
   *       '171': {},
   *       '172': {},
   *       '173': {},
   *       '174': {},
   *       '175': {},
   *       '176': {},
   *       '177': {},
   *       '178': {},
   *       '179': {},
   *       '180': {},
   *       '181': {},
   *       '182': {},
   *       '183': {},
   *       '184': {},
   *       '185': {},
   *       '186': {},
   *       '187': {},
   *       '188': {},
   *       '189': {},
   *       '190': {},
   *       '191': {},
   *       '192': {},
   *       '193': {},
   *       '194': {},
   *       '195': {},
   *       '196': {},
   *       '197': {},
   *       '198': {},
   *       '199': {},
   *       '200': {},
   *       '201': {},
   *       '202': {},
   *       '203': {},
   *       '204': {},
   *       '205': {},
   *       '206': {},
   *       '207': {},
   *       '208': {},
   *       '209': {},
   *       '210': {},
   *       '211': {},
   *       '212': {},
   *       '213': {},
   *       '214': {},
   *       '215': {},
   *       '216': {},
   *       '217': {},
   *       '218': {},
   *       '219': {},
   *       '220': {},
   *       '221': {},
   *       '222': {},
   *       '223': {},
   *       '224': {},
   *       '225': {},
   *       '226': {},
   *       '227': {},
   *       '228': {},
   *       '229': {},
   *       '230': {},
   *       '231': {},
   *       '232': {},
   *       '233': {},
   *       '234': {},
   *       '235': {},
   *       '236': {},
   *       '237': {},
   *       '238': {},
   *       '239': {},
   *       '240': {},
   *       '241': {},
   *       '242': {},
   *       '243': {},
   *       '244': {},
   *       '245': {},
   *       '246': {},
   *       '247': {},
   *       '248': {},
   *       '249': {},
   *       '250': {},
   *       '251': {},
   *       '252': {},
   *       '253': {},
   *       '254': {},
   *       '255': {},
   *       '256': {},
   *       '257': {},
   *       '258': {},
   *       '259': {},
   *       '260': {},
   *       '261': {},
   *       '262': {},
   *       '263': {},
   *       '264': {},
   *       '265': {},
   *       '266': {},
   *       '267': {},
   *       '268': {},
   *       '269': {},
   *       '270': {},
   *       '271': {},
   *       '272': {},
   *       '273': {},
   *       '274': {},
   *       '275': {},
   *       '276': {},
   *       '277': {},
   *       '278': {},
   *       '279': {},
   *       '280': {},
   *       '281': {},
   *       '282': {},
   *       '283': {},
   *       '284': {},
   *       '285': {},
   *       '286': {},
   *       '287': {},
   *       '288': {},
   *       '289': {},
   *       '290': {},
   *       '291': {},
   *       '292': {},
   *       '293': {},
   *       '294': {},
   *       '295': {},
   *       '296': {},
   *       '297': {},
   *       '298': {},
   *       '299': {},
   *       '300': {},
   *       '301': {},
   *       '302': {},
   *       '303': {},
   *       '304': {},
   *       '305': {},
   *       '306': {},
   *       '307': {},
   *       '308': {},
   *       '309': {},
   *       '310': {},
   *       '311': {},
   *       '312': {},
   *       '313': {},
   *       '314': {},
   *       '315': {},
   *       '316': {},
   *       '317': {},
   *       '318': {},
   *       '319': {},
   *       '320': {},
   *       '321': {},
   *       '322': {},
   *       '323': {},
   *       '324': {},
   *       '325': {},
   *       '326': {},
   *       '327': {},
   *       '328': {},
   *       '329': {},
   *       '330': {},
   *       '331': {},
   *       '332': {},
   *       '333': {},
   *       '334': {},
   *       '335': {},
   *       '336': {},
   *       '337': {},
   *       '338': {},
   *       '339': {},
   *       '340': {},
   *       '341': {},
   *       '342': {},
   *       '343': {},
   *       '344': {},
   *       '345': {},
   *       '346': {},
   *       '347': {},
   *       '348': {},
   *       '349': {},
   *       '350': {},
   *       '351': {},
   *       '352': {},
   *       '353': {},
   *       '354': {},
   *       '355': {},
   *       '356': {},
   *       '357': {},
   *       '358': {},
   *       '359': {},
   *       '360': {},
   *       '361': {},
   *       '362': {},
   *       '363': {},
   *       '364': {},
   *       '365': {},
   *       '366': {},
   *       '367': {},
   *       '368': {},
   *       '369': {},
   *       '370': {},
   *       '371': {},
   *       '372': {},
   *       '373': {},
   *       '374': {},
   *       '375': {},
   *       '376': {},
   *       '377': {},
   *       '378': {},
   *       '379': {},
   *       '380': {},
   *       '381': {},
   *       '382': {},
   *       '383': {},
   *       '384': {},
   *       '385': {},
   *       '386': {},
   *       '387': {},
   *       '388': {},
   *       '389': {},
   *       '390': {},
   *       '391': {},
   *       '392': {},
   *       '393': {},
   *       '394': {},
   *       '395': {},
   *       '396': {},
   *       '397': {},
   *       '398': {},
   *       '399': {},
   *       '400': {},
   *       '401': {},
   *       '402': {},
   *       '403': {},
   *       '404': {},
   *       '405': {},
   *       '406': {},
   *       '407': {},
   *       '408': {},
   *       '409': {},
   *       '410': {},
   *       '411': {},
   *       '412': {},
   *       '413': {},
   *       '414': {},
   *       '415': {},
   *       '416': {},
   *       '417': {},
   *       '418': {},
   *       '419': {},
   *       '420': {},
   *       '421': {},
   *       '422': {},
   *       '423': {},
   *       '424': {},
   *       '425': {},
   *       '426': {},
   *       '427': {},
   *       '428': {},
   *       '429': {},
   *       '430': {},
   *       '431': {},
   *       '432': {},
   *       '433': {},
   *       '434': {},
   *       '435': {},
   *       '436': {},
   *       '437': {},
   *       '438': {},
   *       '439': {},
   *       '440': {},
   *       '441': {},
   *       '442': {},
   *       '443': {},
   *       '444': {},
   *       '445': {},
   *       '446': {},
   *       '447': {},
   *       '448': {},
   *       '449': {},
   *       '450': {},
   *       '451': {},
   *       '452': {},
   *       '453': {},
   *       '454': {},
   *     },
   *     channelDescription: {},
   *     channelLogoUrl: {},
   *   },
   * );
   * ```
   */
  update(
    channelID: string,
    body: CustomChannelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.patch(path`/conversations/v3/custom-channels/${channelID}`, { body, ...options });
  }

  /**
   * Retrieve all custom channels associated with the app.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging =
   *   await client.conversations.customChannels.list();
   * ```
   */
  list(
    options?: RequestOptions,
  ): APIPromise<CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging> {
    return this._client.get('/conversations/v3/custom-channels/', options);
  }

  /**
   * Archive an existing registered custom channel
   *
   * @example
   * ```ts
   * await client.conversations.customChannels.delete(
   *   'channelId',
   * );
   * ```
   */
  delete(channelID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/conversations/v3/custom-channels/${channelID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the details about a custom channel. This API allows you to see a custom
   * channel's current capabilties and other configuration metadata
   *
   * @example
   * ```ts
   * const publicChannelIntegrationChannel =
   *   await client.conversations.customChannels.get(
   *     'channelId',
   *   );
   * ```
   */
  get(channelID: string, options?: RequestOptions): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.get(path`/conversations/v3/custom-channels/${channelID}`, options);
  }
}

export interface ChannelIntegrationMessageEgg {
  attachments: Array<
    | FileAttachment
    | LocationAttachment
    | ContactAttachment
    | UnsupportedContentAttachment
    | MessageHeaderAttachment
    | QuickRepliesAttachment
    | SocialMetadataIntegrationAttachment
  >;

  channelAccountId: string;

  integrationThreadId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<ChannelIntegrationParticipant>;

  senders: Array<ChannelIntegrationParticipant>;

  text: string;

  timestamp: string;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  preResolvedContacts?: PreResolvedContacts;

  richText?: string;
}

export interface ChannelIntegrationParticipant {
  deliveryIdentifier: PublicDeliveryIdentifier;

  name?: string;
}

export interface CollectionResponseWithTotalPublicChannelAccountForwardPaging {
  results: Array<PublicChannelAccount>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging {
  results: Array<PublicChannelIntegrationChannel>;

  total: number;

  paging?: Shared.ForwardPaging;
}

export interface ContactAddress {
  city?: string;

  country?: string;

  countryCode?: string;

  state?: string;

  street?: string;

  type?: 'HOME' | 'WORK';

  zip?: string;
}

export interface ContactAttachment {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface ContactEmail {
  email: string;

  type?: 'HOME' | 'WORK';
}

export interface ContactName {
  firstName?: string;

  lastName?: string;

  middleName?: string;

  prefix?: string;

  suffix?: string;
}

export interface ContactOrg {
  company?: string;

  department?: string;

  title?: string;
}

export interface ContactPhone {
  phone: string;

  type?: 'CELL' | 'MAIN' | 'HOME' | 'WORK';
}

export interface ContactProfile {
  addresses: Array<ContactAddress>;

  emails: Array<ContactEmail>;

  phones: Array<ContactPhone>;

  urls: Array<ContactURL>;

  name?: ContactName;

  org?: ContactOrg;
}

export interface ContactURL {
  url: string;

  type?: 'HOME' | 'WORK';
}

export interface FileAttachment {
  fileId: string;

  type: 'FILE';

  fileUsageType?: string;
}

export interface LocationAttachment {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export interface MessageHeaderAttachment {
  type: 'MESSAGE_HEADER';

  fileId?: number;

  text?: string;
}

export interface PreResolvedContact {
  contactPropertiesLeadingToMatch: Array<string>;

  contactVid: number;
}

export interface PreResolvedContacts {
  contacts: Array<PreResolvedContact>;
}

export interface PublicChannelAccount {
  id: string;

  active: boolean;

  archived: boolean;

  authorized: boolean;

  channelId: string;

  createdAt: string;

  inboxId: string;

  name: string;

  archivedAt?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountEgg {
  authorized: boolean;

  inboxId: string;

  name: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingToken {
  accountToken: string;

  createdAt: string;

  genericChannelId: number;

  inboxId: number;

  userId: number;

  accountName?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingTokenUpdateRequest {
  accountName: string;

  deliveryIdentifier: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountUpdateRequest {
  authorized?: boolean;

  name?: string;
}

export interface PublicChannelIntegrationChannel {
  id: string;

  capabilities: { [key: string]: unknown };

  createdAt: string;

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface PublicChannelIntegrationChannelCreate {
  capabilities: { [key: string]: unknown };

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface PublicChannelIntegrationChannelPatch {
  capabilities: { [key: string]: unknown };

  channelDescription: unknown;

  channelLogoUrl: unknown;

  channelAccountConnectionRedirectUrl?: unknown;

  name?: unknown;

  webhookUrl?: unknown;
}

export interface PublicChannelIntegrationMessageUpdateRequest {
  /**
   * Valid status are SENT, FAILED, and READ
   */
  statusType: 'SENT' | 'FAILED' | 'READ';

  errorMessage?: string;
}

export interface PublicClient {
  clientType: 'HUBSPOT' | 'SYSTEM' | 'INTEGRATION' | 'UNKNOWN';

  integrationAppId?: number;
}

export interface PublicContact {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface PublicConversationsMessage {
  id: string;

  archived: boolean;

  attachments: Array<
    | PublicFile
    | PublicLocation
    | PublicContact
    | PublicUnsupportedContent
    | PublicMessageHeader
    | PublicQuickReplies
    | PublicWhatsAppTemplateMetadata
    | PublicSocialMetadataAttachment
  >;

  channelAccountId: string;

  channelId: string;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  direction: 'INCOMING' | 'OUTGOING';

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  text: string;

  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY' | 'TRUNCATED';

  type: 'MESSAGE';

  inReplyToId?: string;

  richText?: string;

  status?: PublicMessageStatus;

  subject?: string;

  updatedAt?: string;
}

export interface PublicDeliveryIdentifier {
  type: string;

  value: string;
}

export interface PublicFile {
  fileId: string;

  fileUsageType: string;

  type: 'FILE';

  name?: string;

  url?: string;
}

export interface PublicLocation {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export interface PublicMessageFailureDetails {
  errorMessageTokens: { [key: string]: string };

  errorMessage?: string;
}

export interface PublicMessageHeader {
  type: 'MESSAGE_HEADER';

  fileId?: number;

  text?: string;
}

export interface PublicMessageStatus {
  statusType: 'SENT' | 'FAILED' | 'RECEIVED' | 'READ';

  failureDetails?: PublicMessageFailureDetails;
}

export interface PublicQuickReplies {
  allowMultiSelect: boolean;

  allowUserInput: boolean;

  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface PublicRecipient {
  deliveryIdentifier: PublicDeliveryIdentifier;

  actorId?: string;

  name?: string;

  recipientField?: string;
}

export interface PublicSender {
  actorId?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;

  name?: string;

  senderField?: string;
}

export interface PublicSocialMetadataAttachment {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface PublicUnsupportedContent {
  type: 'UNSUPPORTED_CONTENT';
}

export interface PublicWhatsAppTemplateMetadata {
  crmObjectIds: { [key: string]: number };

  mappedTemplateId: string;

  parameters: { [key: string]: string };

  type: 'WHATSAPP_TEMPLATE_METADATA';
}

export interface QuickRepliesAttachment {
  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface QuickReply {
  value: string;

  valueType: string;

  label?: string;
}

export interface SocialMetadata {
  mediaType: string;

  id?: string;

  description?: string;

  mediaTitle?: string;

  mediaUrl?: string;

  mediaUrlString?: string;

  thumbnailUrl?: string;
}

export interface SocialMetadataIntegrationAttachment {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface UnsupportedContentAttachment {
  type: 'UNSUPPORTED_CONTENT';
}

export interface CustomChannelCreateParams {
  capabilities: { [key: string]: unknown };

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface CustomChannelUpdateParams {
  capabilities: { [key: string]: unknown };

  channelDescription: unknown;

  channelLogoUrl: unknown;

  channelAccountConnectionRedirectUrl?: unknown;

  name?: unknown;

  webhookUrl?: unknown;
}

CustomChannels.ChannelAccountStagingTokens = ChannelAccountStagingTokens;
CustomChannels.ChannelAccounts = ChannelAccounts;
CustomChannels.Messages = Messages;

export declare namespace CustomChannels {
  export {
    type ChannelIntegrationMessageEgg as ChannelIntegrationMessageEgg,
    type ChannelIntegrationParticipant as ChannelIntegrationParticipant,
    type CollectionResponseWithTotalPublicChannelAccountForwardPaging as CollectionResponseWithTotalPublicChannelAccountForwardPaging,
    type CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging as CollectionResponseWithTotalPublicChannelIntegrationChannelForwardPaging,
    type ContactAddress as ContactAddress,
    type ContactAttachment as ContactAttachment,
    type ContactEmail as ContactEmail,
    type ContactName as ContactName,
    type ContactOrg as ContactOrg,
    type ContactPhone as ContactPhone,
    type ContactProfile as ContactProfile,
    type ContactURL as ContactURL,
    type FileAttachment as FileAttachment,
    type LocationAttachment as LocationAttachment,
    type MessageHeaderAttachment as MessageHeaderAttachment,
    type PreResolvedContact as PreResolvedContact,
    type PreResolvedContacts as PreResolvedContacts,
    type PublicChannelAccount as PublicChannelAccount,
    type PublicChannelAccountEgg as PublicChannelAccountEgg,
    type PublicChannelAccountStagingToken as PublicChannelAccountStagingToken,
    type PublicChannelAccountStagingTokenUpdateRequest as PublicChannelAccountStagingTokenUpdateRequest,
    type PublicChannelAccountUpdateRequest as PublicChannelAccountUpdateRequest,
    type PublicChannelIntegrationChannel as PublicChannelIntegrationChannel,
    type PublicChannelIntegrationChannelCreate as PublicChannelIntegrationChannelCreate,
    type PublicChannelIntegrationChannelPatch as PublicChannelIntegrationChannelPatch,
    type PublicChannelIntegrationMessageUpdateRequest as PublicChannelIntegrationMessageUpdateRequest,
    type PublicClient as PublicClient,
    type PublicContact as PublicContact,
    type PublicConversationsMessage as PublicConversationsMessage,
    type PublicDeliveryIdentifier as PublicDeliveryIdentifier,
    type PublicFile as PublicFile,
    type PublicLocation as PublicLocation,
    type PublicMessageFailureDetails as PublicMessageFailureDetails,
    type PublicMessageHeader as PublicMessageHeader,
    type PublicMessageStatus as PublicMessageStatus,
    type PublicQuickReplies as PublicQuickReplies,
    type PublicRecipient as PublicRecipient,
    type PublicSender as PublicSender,
    type PublicSocialMetadataAttachment as PublicSocialMetadataAttachment,
    type PublicUnsupportedContent as PublicUnsupportedContent,
    type PublicWhatsAppTemplateMetadata as PublicWhatsAppTemplateMetadata,
    type QuickRepliesAttachment as QuickRepliesAttachment,
    type QuickReply as QuickReply,
    type SocialMetadata as SocialMetadata,
    type SocialMetadataIntegrationAttachment as SocialMetadataIntegrationAttachment,
    type UnsupportedContentAttachment as UnsupportedContentAttachment,
    type CustomChannelCreateParams as CustomChannelCreateParams,
    type CustomChannelUpdateParams as CustomChannelUpdateParams,
  };

  export {
    ChannelAccountStagingTokens as ChannelAccountStagingTokens,
    type ChannelAccountStagingTokenUpdateParams as ChannelAccountStagingTokenUpdateParams,
  };

  export {
    ChannelAccounts as ChannelAccounts,
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountGetParams as ChannelAccountGetParams,
  };

  export {
    Messages as Messages,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
