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

import {
    BaseImage,
    instanceOfBaseImage,
    BaseImageFromJSON,
    BaseImageFromJSONTyped,
    BaseImageToJSON,
} from './BaseImage';
import {
    BaseText,
    instanceOfBaseText,
    BaseTextFromJSON,
    BaseTextFromJSONTyped,
    BaseTextToJSON,
} from './BaseText';

/**
 * @type BaseButtonContent
 * Base button content
 * @export
 */
export type BaseButtonContent = BaseImage | BaseText;

export function BaseButtonContentFromJSON(json: any): BaseButtonContent {
    return BaseButtonContentFromJSONTyped(json, false);
}

export function BaseButtonContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseButtonContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...BaseImageFromJSONTyped(json, true), ...BaseTextFromJSONTyped(json, true) };
}

export function BaseButtonContentToJSON(value?: BaseButtonContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfBaseImage(value)) {
        return BaseImageToJSON(value as BaseImage);
    }
    if (instanceOfBaseText(value)) {
        return BaseTextToJSON(value as BaseText);
    }

    return {};
}

