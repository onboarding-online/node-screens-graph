/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { RegularList } from './RegularList';
import {
    RegularListFromJSON,
    RegularListFromJSONTyped,
    RegularListToJSON,
} from './RegularList';
import type { ScreenBasicPaywallBlock } from './ScreenBasicPaywallBlock';
import {
    ScreenBasicPaywallBlockFromJSON,
    ScreenBasicPaywallBlockFromJSONTyped,
    ScreenBasicPaywallBlockToJSON,
} from './ScreenBasicPaywallBlock';
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
import type { Video } from './Video';
import {
    VideoFromJSON,
    VideoFromJSONTyped,
    VideoToJSON,
} from './Video';

/**
 * Screen basic paywall
 * @export
 * @interface ScreenBasicPaywallAllOf
 */
export interface ScreenBasicPaywallAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenBasicPaywallAllOf
     */
    screenBasicPaywall: string;
    /**
     * 
     * @type {Text}
     * @memberof ScreenBasicPaywallAllOf
     */
    title: Text;
    /**
     * 
     * @type {Text}
     * @memberof ScreenBasicPaywallAllOf
     */
    subtitle: Text;
    /**
     * 
     * @type {Image}
     * @memberof ScreenBasicPaywallAllOf
     */
    image?: Image;
    /**
     * 
     * @type {Video}
     * @memberof ScreenBasicPaywallAllOf
     */
    video?: Video;
    /**
     * 
     * @type {RegularList}
     * @memberof ScreenBasicPaywallAllOf
     */
    list: RegularList;
    /**
     * 
     * @type {SubscriptionList}
     * @memberof ScreenBasicPaywallAllOf
     */
    subscriptions: SubscriptionList;
    /**
     * 
     * @type {ScreenBasicPaywallBlock}
     * @memberof ScreenBasicPaywallAllOf
     */
    styles: ScreenBasicPaywallBlock;
}

/**
 * Check if a given object implements the ScreenBasicPaywallAllOf interface.
 */
export function instanceOfScreenBasicPaywallAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "screenBasicPaywall" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "subscriptions" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function ScreenBasicPaywallAllOfFromJSON(json: any): ScreenBasicPaywallAllOf {
    return ScreenBasicPaywallAllOfFromJSONTyped(json, false);
}

export function ScreenBasicPaywallAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenBasicPaywallAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'screenBasicPaywall': json['screenBasicPaywall'],
        'title': TextFromJSON(json['title']),
        'subtitle': TextFromJSON(json['subtitle']),
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
        'video': !exists(json, 'video') ? undefined : VideoFromJSON(json['video']),
        'list': RegularListFromJSON(json['list']),
        'subscriptions': SubscriptionListFromJSON(json['subscriptions']),
        'styles': ScreenBasicPaywallBlockFromJSON(json['styles']),
    };
}

export function ScreenBasicPaywallAllOfToJSON(value?: ScreenBasicPaywallAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'screenBasicPaywall': value.screenBasicPaywall,
        'title': TextToJSON(value.title),
        'subtitle': TextToJSON(value.subtitle),
        'image': ImageToJSON(value.image),
        'video': VideoToJSON(value.video),
        'list': RegularListToJSON(value.list),
        'subscriptions': SubscriptionListToJSON(value.subscriptions),
        'styles': ScreenBasicPaywallBlockToJSON(value.styles),
    };
}

