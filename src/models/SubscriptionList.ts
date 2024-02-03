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
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { ItemTypeSubscription } from './ItemTypeSubscription';
import {
    ItemTypeSubscriptionFromJSON,
    ItemTypeSubscriptionFromJSONTyped,
    ItemTypeSubscriptionToJSON,
} from './ItemTypeSubscription';
import type { SelectedSubscriptionListItemBlock } from './SelectedSubscriptionListItemBlock';
import {
    SelectedSubscriptionListItemBlockFromJSON,
    SelectedSubscriptionListItemBlockFromJSONTyped,
    SelectedSubscriptionListItemBlockToJSON,
} from './SelectedSubscriptionListItemBlock';
import type { SubscriptionListBlock } from './SubscriptionListBlock';
import {
    SubscriptionListBlockFromJSON,
    SubscriptionListBlockFromJSONTyped,
    SubscriptionListBlockToJSON,
} from './SubscriptionListBlock';
import type { SubscriptionListItemType } from './SubscriptionListItemType';
import {
    SubscriptionListItemTypeFromJSON,
    SubscriptionListItemTypeFromJSONTyped,
    SubscriptionListItemTypeToJSON,
} from './SubscriptionListItemType';

/**
 * Subscriptions list element
 * @export
 * @interface SubscriptionList
 */
export interface SubscriptionList {
    /**
     * 
     * @type {SubscriptionListItemType}
     * @memberof SubscriptionList
     */
    itemType: SubscriptionListItemType;
    /**
     * Item rows
     * @type {Array<ItemTypeSubscription>}
     * @memberof SubscriptionList
     */
    items: Array<ItemTypeSubscription>;
    /**
     * 
     * @type {SubscriptionListBlock}
     * @memberof SubscriptionList
     */
    styles: SubscriptionListBlock;
    /**
     * 
     * @type {SelectedSubscriptionListItemBlock}
     * @memberof SubscriptionList
     */
    selectedBlock: SelectedSubscriptionListItemBlock;
    /**
     * 
     * @type {Box}
     * @memberof SubscriptionList
     */
    box: Box;
}

/**
 * Check if a given object implements the SubscriptionList interface.
 */
export function instanceOfSubscriptionList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "itemType" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "selectedBlock" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function SubscriptionListFromJSON(json: any): SubscriptionList {
    return SubscriptionListFromJSONTyped(json, false);
}

export function SubscriptionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemType': SubscriptionListItemTypeFromJSON(json['itemType']),
        'items': ((json['items'] as Array<any>).map(ItemTypeSubscriptionFromJSON)),
        'styles': SubscriptionListBlockFromJSON(json['styles']),
        'selectedBlock': SelectedSubscriptionListItemBlockFromJSON(json['selectedBlock']),
        'box': BoxFromJSON(json['box']),
    };
}

export function SubscriptionListToJSON(value?: SubscriptionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemType': SubscriptionListItemTypeToJSON(value.itemType),
        'items': ((value.items as Array<any>).map(ItemTypeSubscriptionToJSON)),
        'styles': SubscriptionListBlockToJSON(value.styles),
        'selectedBlock': SelectedSubscriptionListItemBlockToJSON(value.selectedBlock),
        'box': BoxToJSON(value.box),
    };
}

