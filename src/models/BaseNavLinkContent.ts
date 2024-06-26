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
 * @type BaseNavLinkContent
 * Base navigation link content
 * @export
 */
export type BaseNavLinkContent = BaseImage | BaseText;

export function BaseNavLinkContentFromJSON(json: any): BaseNavLinkContent {
    return BaseNavLinkContentFromJSONTyped(json, false);
}

export function BaseNavLinkContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseNavLinkContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...BaseImageFromJSONTyped(json, true), ...BaseTextFromJSONTyped(json, true) };
}

export function BaseNavLinkContentToJSON(value?: BaseNavLinkContent | null): any {
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

