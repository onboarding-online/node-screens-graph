/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Slider } from './Slider';
import {
    SliderFromJSON,
    SliderFromJSONTyped,
    SliderToJSON,
} from './Slider';

/**
 * Screen - slider
 * @export
 * @interface ScreenSliderAllOf
 */
export interface ScreenSliderAllOf {
    /**
     * 
     * @type {string}
     * @memberof ScreenSliderAllOf
     */
    sliderDescription: string;
    /**
     * 
     * @type {Slider}
     * @memberof ScreenSliderAllOf
     */
    slider: Slider;
}

/**
 * Check if a given object implements the ScreenSliderAllOf interface.
 */
export function instanceOfScreenSliderAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sliderDescription" in value;
    isInstance = isInstance && "slider" in value;

    return isInstance;
}

export function ScreenSliderAllOfFromJSON(json: any): ScreenSliderAllOf {
    return ScreenSliderAllOfFromJSONTyped(json, false);
}

export function ScreenSliderAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenSliderAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sliderDescription': json['sliderDescription'],
        'slider': SliderFromJSON(json['slider']),
    };
}

export function ScreenSliderAllOfToJSON(value?: ScreenSliderAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sliderDescription': value.sliderDescription,
        'slider': SliderToJSON(value.slider),
    };
}

