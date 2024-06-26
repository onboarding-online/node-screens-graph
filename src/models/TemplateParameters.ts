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
import type { LabelBlock } from './LabelBlock';
import {
    LabelBlockFromJSON,
    LabelBlockFromJSONTyped,
    LabelBlockToJSON,
} from './LabelBlock';

/**
 * Template parameters
 * @export
 * @interface TemplateParameters
 */
export interface TemplateParameters {
    /**
     * Dictionary of labels styles
     * @type {{ [key: string]: LabelBlock; }}
     * @memberof TemplateParameters
     */
    labels: { [key: string]: LabelBlock; };
    /**
     * Template link dictionary
     * @type {{ [key: string]: string; }}
     * @memberof TemplateParameters
     */
    links: { [key: string]: string; };
}

/**
 * Check if a given object implements the TemplateParameters interface.
 */
export function instanceOfTemplateParameters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function TemplateParametersFromJSON(json: any): TemplateParameters {
    return TemplateParametersFromJSONTyped(json, false);
}

export function TemplateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': (mapValues(json['labels'], LabelBlockFromJSON)),
        'links': json['links'],
    };
}

export function TemplateParametersToJSON(value?: TemplateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': (mapValues(value.labels, LabelBlockToJSON)),
        'links': value.links,
    };
}

