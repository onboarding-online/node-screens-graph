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
import type { Badge } from './Badge';
import {
    BadgeFromJSON,
    BadgeFromJSONTyped,
    BadgeToJSON,
} from './Badge';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { CheckBox } from './CheckBox';
import {
    CheckBoxFromJSON,
    CheckBoxFromJSONTyped,
    CheckBoxToJSON,
} from './CheckBox';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';

/**
 * Structure of full collection item type for subscription list
 * @export
 * @interface ItemTypeSubscription
 */
export interface ItemTypeSubscription {
    /**
     * 
     * @type {string}
     * @memberof ItemTypeSubscription
     */
    subscriptionId: string;
    /**
     * 
     * @type {CheckBox}
     * @memberof ItemTypeSubscription
     */
    checkBox: CheckBox;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    period: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    price: Text;
    /**
     * 
     * @type {Text}
     * @memberof ItemTypeSubscription
     */
    description: Text;
    /**
     * 
     * @type {Badge}
     * @memberof ItemTypeSubscription
     */
    badge?: Badge;
    /**
     * 
     * @type {Box}
     * @memberof ItemTypeSubscription
     */
    box: Box;
    /**
     * 
     * @type {number}
     * @memberof ItemTypeSubscription
     */
    weight: number;
}

/**
 * Check if a given object implements the ItemTypeSubscription interface.
 */
export function instanceOfItemTypeSubscription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscriptionId" in value;
    isInstance = isInstance && "checkBox" in value;
    isInstance = isInstance && "period" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "box" in value;
    isInstance = isInstance && "weight" in value;

    return isInstance;
}

export function ItemTypeSubscriptionFromJSON(json: any): ItemTypeSubscription {
    return ItemTypeSubscriptionFromJSONTyped(json, false);
}

export function ItemTypeSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemTypeSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionId': json['subscriptionId'],
        'checkBox': CheckBoxFromJSON(json['checkBox']),
        'period': TextFromJSON(json['period']),
        'price': TextFromJSON(json['price']),
        'description': TextFromJSON(json['description']),
        'badge': !exists(json, 'badge') ? undefined : BadgeFromJSON(json['badge']),
        'box': BoxFromJSON(json['box']),
        'weight': json['weight'],
    };
}

export function ItemTypeSubscriptionToJSON(value?: ItemTypeSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptionId': value.subscriptionId,
        'checkBox': CheckBoxToJSON(value.checkBox),
        'period': TextToJSON(value.period),
        'price': TextToJSON(value.price),
        'description': TextToJSON(value.description),
        'badge': BadgeToJSON(value.badge),
        'box': BoxToJSON(value.box),
        'weight': value.weight,
    };
}

