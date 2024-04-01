/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    Gradient,
    instanceOfGradient,
    GradientFromJSON,
    GradientFromJSONTyped,
    GradientToJSON,
} from './Gradient';
import {
    PaywallBodyMask,
    instanceOfPaywallBodyMask,
    PaywallBodyMaskFromJSON,
    PaywallBodyMaskFromJSONTyped,
    PaywallBodyMaskToJSON,
} from './PaywallBodyMask';

/**
 * @type BasicPaywallBodyStyle
 * Base button content
 * @export
 */
export type BasicPaywallBodyStyle = Gradient | PaywallBodyMask;

export function BasicPaywallBodyStyleFromJSON(json: any): BasicPaywallBodyStyle {
    return BasicPaywallBodyStyleFromJSONTyped(json, false);
}

export function BasicPaywallBodyStyleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicPaywallBodyStyle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...GradientFromJSONTyped(json, true), ...PaywallBodyMaskFromJSONTyped(json, true) };
}

export function BasicPaywallBodyStyleToJSON(value?: BasicPaywallBodyStyle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfGradient(value)) {
        return GradientToJSON(value as Gradient);
    }
    if (instanceOfPaywallBodyMask(value)) {
        return PaywallBodyMaskToJSON(value as PaywallBodyMask);
    }

    return {};
}

