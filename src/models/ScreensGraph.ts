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

import { exists, mapValues } from '../runtime';
import type { Language } from './Language';
import {
    LanguageFromJSON,
    LanguageFromJSONTyped,
    LanguageToJSON,
} from './Language';
import type { Screen } from './Screen';
import {
    ScreenFromJSON,
    ScreenFromJSONTyped,
    ScreenToJSON,
} from './Screen';

/**
 * The graph of screens for onboarding
 * @export
 * @interface ScreensGraph
 */
export interface ScreensGraph {
    /**
     * 
     * @type {Language}
     * @memberof ScreensGraph
     */
    defaultLanguage: Language;
    /**
     * The list of languages
     * @type {Array<Language>}
     * @memberof ScreensGraph
     */
    languages: Array<Language>;
    /**
     * Schema version in semver format
     * @type {string}
     * @memberof ScreensGraph
     */
    schemaVersion?: string;
    /**
     * First screen id
     * @type {string}
     * @memberof ScreensGraph
     */
    launchScreenId: string;
    /**
     * All screens nodes dictionary
     * @type {{ [key: string]: Screen; }}
     * @memberof ScreensGraph
     */
    screens: { [key: string]: Screen; };
    /**
     * Metadata dictionary
     * @type {{ [key: string]: string; }}
     * @memberof ScreensGraph
     */
    metadata: { [key: string]: string; };
}

/**
 * Check if a given object implements the ScreensGraph interface.
 */
export function instanceOfScreensGraph(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "defaultLanguage" in value;
    isInstance = isInstance && "languages" in value;
    isInstance = isInstance && "launchScreenId" in value;
    isInstance = isInstance && "screens" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function ScreensGraphFromJSON(json: any): ScreensGraph {
    return ScreensGraphFromJSONTyped(json, false);
}

export function ScreensGraphFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreensGraph {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultLanguage': LanguageFromJSON(json['defaultLanguage']),
        'languages': ((json['languages'] as Array<any>).map(LanguageFromJSON)),
        'schemaVersion': !exists(json, 'schemaVersion') ? undefined : json['schemaVersion'],
        'launchScreenId': json['launchScreenId'],
        'screens': (mapValues(json['screens'], ScreenFromJSON)),
        'metadata': json['metadata'],
    };
}

export function ScreensGraphToJSON(value?: ScreensGraph | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultLanguage': LanguageToJSON(value.defaultLanguage),
        'languages': ((value.languages as Array<any>).map(LanguageToJSON)),
        'schemaVersion': value.schemaVersion,
        'launchScreenId': value.launchScreenId,
        'screens': (mapValues(value.screens, ScreenToJSON)),
        'metadata': value.metadata,
    };
}

