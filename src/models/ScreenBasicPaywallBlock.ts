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
import type { BackgroundStyle } from './BackgroundStyle';
import {
    BackgroundStyleFromJSON,
    BackgroundStyleFromJSONTyped,
    BackgroundStyleToJSON,
} from './BackgroundStyle';
import type { BasicPaywallBodyKind } from './BasicPaywallBodyKind';
import {
    BasicPaywallBodyKindFromJSON,
    BasicPaywallBodyKindFromJSONTyped,
    BasicPaywallBodyKindToJSON,
} from './BasicPaywallBodyKind';
import type { BasicPaywallBodyStyle } from './BasicPaywallBodyStyle';
import {
    BasicPaywallBodyStyleFromJSON,
    BasicPaywallBodyStyleFromJSONTyped,
    BasicPaywallBodyStyleToJSON,
} from './BasicPaywallBodyStyle';
import type { BlurKind } from './BlurKind';
import {
    BlurKindFromJSON,
    BlurKindFromJSONTyped,
    BlurKindToJSON,
} from './BlurKind';
import type { PaywallImageVerticalPositionKind } from './PaywallImageVerticalPositionKind';
import {
    PaywallImageVerticalPositionKindFromJSON,
    PaywallImageVerticalPositionKindFromJSONTyped,
    PaywallImageVerticalPositionKindToJSON,
} from './PaywallImageVerticalPositionKind';

/**
 * 
 * @export
 * @interface ScreenBasicPaywallBlock
 */
export interface ScreenBasicPaywallBlock {
    /**
     * 
     * @type {BackgroundStyle}
     * @memberof ScreenBasicPaywallBlock
     */
    background: BackgroundStyle;
    /**
     * Padding left for body
     * @type {number}
     * @memberof ScreenBasicPaywallBlock
     */
    paddingLeft?: number;
    /**
     * Padding right for body
     * @type {number}
     * @memberof ScreenBasicPaywallBlock
     */
    paddingRight?: number;
    /**
     * Padding top for body
     * @type {number}
     * @memberof ScreenBasicPaywallBlock
     */
    paddingTop?: number;
    /**
     * Padding bottom for body
     * @type {number}
     * @memberof ScreenBasicPaywallBlock
     */
    paddingBottom?: number;
    /**
     * 
     * @type {string}
     * @memberof ScreenBasicPaywallBlock
     */
    bodyColor?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenBasicPaywallBlock
     */
    bodyOpacity?: string;
    /**
     * 
     * @type {PaywallImageVerticalPositionKind}
     * @memberof ScreenBasicPaywallBlock
     */
    imageVerticalPosition?: PaywallImageVerticalPositionKind;
    /**
     * 
     * @type {string}
     * @memberof ScreenBasicPaywallBlock
     */
    bodyBackgroundColor?: string;
    /**
     * 
     * @type {number}
     * @memberof ScreenBasicPaywallBlock
     */
    bodyBackgroundOpacity?: number;
    /**
     * 
     * @type {BasicPaywallBodyKind}
     * @memberof ScreenBasicPaywallBlock
     */
    bodyKind?: BasicPaywallBodyKind;
    /**
     * 
     * @type {BasicPaywallBodyStyle}
     * @memberof ScreenBasicPaywallBlock
     */
    bodyStyle?: BasicPaywallBodyStyle;
    /**
     * 
     * @type {BlurKind}
     * @memberof ScreenBasicPaywallBlock
     */
    blur?: BlurKind;
}

/**
 * Check if a given object implements the ScreenBasicPaywallBlock interface.
 */
export function instanceOfScreenBasicPaywallBlock(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "background" in value;

    return isInstance;
}

export function ScreenBasicPaywallBlockFromJSON(json: any): ScreenBasicPaywallBlock {
    return ScreenBasicPaywallBlockFromJSONTyped(json, false);
}

export function ScreenBasicPaywallBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenBasicPaywallBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'background': BackgroundStyleFromJSON(json['background']),
        'paddingLeft': !exists(json, 'paddingLeft') ? undefined : json['paddingLeft'],
        'paddingRight': !exists(json, 'paddingRight') ? undefined : json['paddingRight'],
        'paddingTop': !exists(json, 'paddingTop') ? undefined : json['paddingTop'],
        'paddingBottom': !exists(json, 'paddingBottom') ? undefined : json['paddingBottom'],
        'bodyColor': !exists(json, 'bodyColor') ? undefined : json['bodyColor'],
        'bodyOpacity': !exists(json, 'bodyOpacity') ? undefined : json['bodyOpacity'],
        'imageVerticalPosition': !exists(json, 'imageVerticalPosition') ? undefined : PaywallImageVerticalPositionKindFromJSON(json['imageVerticalPosition']),
        'bodyBackgroundColor': !exists(json, 'bodyBackgroundColor') ? undefined : json['bodyBackgroundColor'],
        'bodyBackgroundOpacity': !exists(json, 'bodyBackgroundOpacity') ? undefined : json['bodyBackgroundOpacity'],
        'bodyKind': !exists(json, 'bodyKind') ? undefined : BasicPaywallBodyKindFromJSON(json['bodyKind']),
        'bodyStyle': !exists(json, 'bodyStyle') ? undefined : BasicPaywallBodyStyleFromJSON(json['bodyStyle']),
        'blur': !exists(json, 'blur') ? undefined : BlurKindFromJSON(json['blur']),
    };
}

export function ScreenBasicPaywallBlockToJSON(value?: ScreenBasicPaywallBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'background': BackgroundStyleToJSON(value.background),
        'paddingLeft': value.paddingLeft,
        'paddingRight': value.paddingRight,
        'paddingTop': value.paddingTop,
        'paddingBottom': value.paddingBottom,
        'bodyColor': value.bodyColor,
        'bodyOpacity': value.bodyOpacity,
        'imageVerticalPosition': PaywallImageVerticalPositionKindToJSON(value.imageVerticalPosition),
        'bodyBackgroundColor': value.bodyBackgroundColor,
        'bodyBackgroundOpacity': value.bodyBackgroundOpacity,
        'bodyKind': BasicPaywallBodyKindToJSON(value.bodyKind),
        'bodyStyle': BasicPaywallBodyStyleToJSON(value.bodyStyle),
        'blur': BlurKindToJSON(value.blur),
    };
}

