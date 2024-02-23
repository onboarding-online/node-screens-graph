/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Button } from './Button';
import {
    ButtonFromJSON,
    ButtonFromJSONTyped,
    ButtonToJSON,
} from './Button';
import type { DashesPageIndicator } from './DashesPageIndicator';
import {
    DashesPageIndicatorFromJSON,
    DashesPageIndicatorFromJSONTyped,
    DashesPageIndicatorToJSON,
} from './DashesPageIndicator';
import type { PageIndicator } from './PageIndicator';
import {
    PageIndicatorFromJSON,
    PageIndicatorFromJSONTyped,
    PageIndicatorToJSON,
} from './PageIndicator';
import type { PageIndicatorKind } from './PageIndicatorKind';
import {
    PageIndicatorKindFromJSON,
    PageIndicatorKindFromJSONTyped,
    PageIndicatorKindToJSON,
} from './PageIndicatorKind';
import type { PaywallNavigationBarBlock } from './PaywallNavigationBarBlock';
import {
    PaywallNavigationBarBlockFromJSON,
    PaywallNavigationBarBlockFromJSONTyped,
    PaywallNavigationBarBlockToJSON,
} from './PaywallNavigationBarBlock';

/**
 * Paywall navigation bar
 * @export
 * @interface PaywallNavigationBar
 */
export interface PaywallNavigationBar {
    /**
     * 
     * @type {string}
     * @memberof PaywallNavigationBar
     */
    paywallNavigationBar: string;
    /**
     * 
     * @type {Button}
     * @memberof PaywallNavigationBar
     */
    close?: Button;
    /**
     * 
     * @type {PaywallNavigationBarBlock}
     * @memberof PaywallNavigationBar
     */
    styles: PaywallNavigationBarBlock;
    /**
     * 
     * @type {Button}
     * @memberof PaywallNavigationBar
     */
    back?: Button;
    /**
     * 
     * @type {Button}
     * @memberof PaywallNavigationBar
     */
    skip?: Button;
    /**
     * 
     * @type {PageIndicator}
     * @memberof PaywallNavigationBar
     */
    pageIndicator?: PageIndicator;
    /**
     * 
     * @type {PageIndicatorKind}
     * @memberof PaywallNavigationBar
     */
    pageIndicatorKind?: PageIndicatorKind;
    /**
     * 
     * @type {DashesPageIndicator}
     * @memberof PaywallNavigationBar
     */
    dashesPageIndicator?: DashesPageIndicator;
}

/**
 * Check if a given object implements the PaywallNavigationBar interface.
 */
export function instanceOfPaywallNavigationBar(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "paywallNavigationBar" in value;
    isInstance = isInstance && "styles" in value;

    return isInstance;
}

export function PaywallNavigationBarFromJSON(json: any): PaywallNavigationBar {
    return PaywallNavigationBarFromJSONTyped(json, false);
}

export function PaywallNavigationBarFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaywallNavigationBar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paywallNavigationBar': json['paywallNavigationBar'],
        'close': !exists(json, 'close') ? undefined : ButtonFromJSON(json['close']),
        'styles': PaywallNavigationBarBlockFromJSON(json['styles']),
        'back': !exists(json, 'back') ? undefined : ButtonFromJSON(json['back']),
        'skip': !exists(json, 'skip') ? undefined : ButtonFromJSON(json['skip']),
        'pageIndicator': !exists(json, 'pageIndicator') ? undefined : PageIndicatorFromJSON(json['pageIndicator']),
        'pageIndicatorKind': !exists(json, 'pageIndicatorKind') ? undefined : PageIndicatorKindFromJSON(json['pageIndicatorKind']),
        'dashesPageIndicator': !exists(json, 'dashesPageIndicator') ? undefined : DashesPageIndicatorFromJSON(json['dashesPageIndicator']),
    };
}

export function PaywallNavigationBarToJSON(value?: PaywallNavigationBar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paywallNavigationBar': value.paywallNavigationBar,
        'close': ButtonToJSON(value.close),
        'styles': PaywallNavigationBarBlockToJSON(value.styles),
        'back': ButtonToJSON(value.back),
        'skip': ButtonToJSON(value.skip),
        'pageIndicator': PageIndicatorToJSON(value.pageIndicator),
        'pageIndicatorKind': PageIndicatorKindToJSON(value.pageIndicatorKind),
        'dashesPageIndicator': DashesPageIndicatorToJSON(value.dashesPageIndicator),
    };
}
