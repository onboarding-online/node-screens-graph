/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyFormatKind } from './CurrencyFormatKind';
import {
    CurrencyFormatKindFromJSON,
    CurrencyFormatKindFromJSONTyped,
    CurrencyFormatKindToJSON,
} from './CurrencyFormatKind';
import type { Divider } from './Divider';
import {
    DividerFromJSON,
    DividerFromJSONTyped,
    DividerToJSON,
} from './Divider';
import type { Loader } from './Loader';
import {
    LoaderFromJSON,
    LoaderFromJSONTyped,
    LoaderToJSON,
} from './Loader';
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
import type { PaywallFooter } from './PaywallFooter';
import {
    PaywallFooterFromJSON,
    PaywallFooterFromJSONTyped,
    PaywallFooterToJSON,
} from './PaywallFooter';
import type { PaywallNavigationBar } from './PaywallNavigationBar';
import {
    PaywallNavigationBarFromJSON,
    PaywallNavigationBarFromJSONTyped,
    PaywallNavigationBarToJSON,
} from './PaywallNavigationBar';
import type { PurchaseFlag } from './PurchaseFlag';
import {
    PurchaseFlagFromJSON,
    PurchaseFlagFromJSONTyped,
    PurchaseFlagToJSON,
} from './PurchaseFlag';
import type { RegularList } from './RegularList';
import {
    RegularListFromJSON,
    RegularListFromJSONTyped,
    RegularListToJSON,
} from './RegularList';
import type { RequestPermission } from './RequestPermission';
import {
    RequestPermissionFromJSON,
    RequestPermissionFromJSONTyped,
    RequestPermissionToJSON,
} from './RequestPermission';
import type { ScreenBasicPaywallBlock } from './ScreenBasicPaywallBlock';
import {
    ScreenBasicPaywallBlockFromJSON,
    ScreenBasicPaywallBlockFromJSONTyped,
    ScreenBasicPaywallBlockToJSON,
} from './ScreenBasicPaywallBlock';
import type { ScreenTimer } from './ScreenTimer';
import {
    ScreenTimerFromJSON,
    ScreenTimerFromJSONTyped,
    ScreenTimerToJSON,
} from './ScreenTimer';
import type { SubscriptionList } from './SubscriptionList';
import {
    SubscriptionListFromJSON,
    SubscriptionListFromJSONTyped,
    SubscriptionListToJSON,
} from './SubscriptionList';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * 
 * @export
 * @interface ScreenBasicPaywall
 */
export interface ScreenBasicPaywall {
    /**
     * 
     * @type {PaywallNavigationBar}
     * @memberof ScreenBasicPaywall
     */
    navigationBar: PaywallNavigationBar;
    /**
     * 
     * @type {PaywallFooter}
     * @memberof ScreenBasicPaywall
     */
    footer: PaywallFooter;
    /**
     * 
     * @type {ScreenBasicPaywallBlock}
     * @memberof ScreenBasicPaywall
     */
    styles: ScreenBasicPaywallBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof ScreenBasicPaywall
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof ScreenBasicPaywall
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenBasicPaywall
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenBasicPaywall
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenBasicPaywall
     */
    screenBasicPaywall: string;
    /**
     * 
     * @type {Text}
     * @memberof ScreenBasicPaywall
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenBasicPaywall
     */
    subtitle: Text;
    /**
     * 
     * @type {Divider}
     * @memberof ScreenBasicPaywall
     */
    divider?: Divider;
    /**
     * 
     * @type {Media}
     * @memberof ScreenBasicPaywall
     */
    media?: Media;
    /**
     * 
     * @type {RegularList}
     * @memberof ScreenBasicPaywall
     */
    list: RegularList;
    /**
     * 
     * @type {Loader}
     * @memberof ScreenBasicPaywall
     */
    loader?: Loader;
    /**
     * Purchase flags
     * @type {Array<PurchaseFlag>}
     * @memberof ScreenBasicPaywall
     */
    flags: Array<PurchaseFlag>;
    /**
     * 
     * @type {SubscriptionList}
     * @memberof ScreenBasicPaywall
     */
    subscriptions: SubscriptionList;
    /**
     * 
     * @type {CurrencyFormatKind}
     * @memberof ScreenBasicPaywall
     */
    currencyFormat: CurrencyFormatKind;
}

/**
 * Check if a given object implements the ScreenBasicPaywall interface.
 */
export function instanceOfScreenBasicPaywall(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "screenBasicPaywall" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "subscriptions" in value;
    isInstance = isInstance && "currencyFormat" in value;

    return isInstance;
}

export function ScreenBasicPaywallFromJSON(json: any): ScreenBasicPaywall {
    return ScreenBasicPaywallFromJSONTyped(json, false);
}

export function ScreenBasicPaywallFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenBasicPaywall {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'navigationBar': PaywallNavigationBarFromJSON(json['navigationBar']),
        'footer': PaywallFooterFromJSON(json['footer']),
        'styles': ScreenBasicPaywallBlockFromJSON(json['styles']),
        'permission': RequestPermissionFromJSON(json['permission']),
        'timer': ScreenTimerFromJSON(json['timer']),
        'animationEnabled': json['animationEnabled'],
        'useLocalAssetsIfAvailable': json['useLocalAssetsIfAvailable'],
        'screenBasicPaywall': json['screenBasicPaywall'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'divider': !exists(json, 'divider') ? undefined : DividerFromJSON(json['divider']),
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'list': RegularListFromJSON(json['list']),
        'loader': !exists(json, 'loader') ? undefined : LoaderFromJSON(json['loader']),
        'flags': ((json['flags'] as Array<any>).map(PurchaseFlagFromJSON)),
        'subscriptions': SubscriptionListFromJSON(json['subscriptions']),
        'currencyFormat': CurrencyFormatKindFromJSON(json['currencyFormat']),
    };
}

export function ScreenBasicPaywallToJSON(value?: ScreenBasicPaywall | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'navigationBar': PaywallNavigationBarToJSON(value.navigationBar),
        'footer': PaywallFooterToJSON(value.footer),
        'styles': ScreenBasicPaywallBlockToJSON(value.styles),
        'permission': RequestPermissionToJSON(value.permission),
        'timer': ScreenTimerToJSON(value.timer),
        'animationEnabled': value.animationEnabled,
        'useLocalAssetsIfAvailable': value.useLocalAssetsIfAvailable,
        'screenBasicPaywall': value.screenBasicPaywall,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'divider': DividerToJSON(value.divider),
        'media': MediaToJSON(value.media),
        'list': RegularListToJSON(value.list),
        'loader': LoaderToJSON(value.loader),
        'flags': ((value.flags as Array<any>).map(PurchaseFlagToJSON)),
        'subscriptions': SubscriptionListToJSON(value.subscriptions),
        'currencyFormat': CurrencyFormatKindToJSON(value.currencyFormat),
    };
}

