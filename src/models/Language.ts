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


/**
 * language codes in ISO 639-1 and ISO 3166-1 standards
 * @export
 */
export const Language = {
    Ar: 'ar',
    Ca: 'ca',
    ZhHans: 'zh-Hans',
    ZhHant: 'zh-Hant',
    Hr: 'hr',
    Cs: 'cs',
    Da: 'da',
    Nl: 'nl',
    EnAu: 'en-AU',
    EnCa: 'en-CA',
    EnGb: 'en-GB',
    EnUs: 'en-US',
    Fi: 'fi',
    Fr: 'fr',
    FrCa: 'fr-CA',
    De: 'de',
    El: 'el',
    He: 'he',
    Hi: 'hi',
    Hu: 'hu',
    Id: 'id',
    It: 'it',
    Ja: 'ja',
    Ko: 'ko',
    Ms: 'ms',
    No: 'no',
    Pl: 'pl',
    PtBr: 'pt-BR',
    PtPt: 'pt-PT',
    Ro: 'ro',
    Ru: 'ru',
    Sk: 'sk',
    EsMx: 'es-MX',
    EsEs: 'es-ES',
    Sv: 'sv',
    Th: 'th',
    Tr: 'tr',
    Uk: 'uk',
    Vi: 'vi'
} as const;
export type Language = typeof Language[keyof typeof Language];


export function LanguageFromJSON(json: any): Language {
    return LanguageFromJSONTyped(json, false);
}

export function LanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Language {
    return json as Language;
}

export function LanguageToJSON(value?: Language | null): any {
    return value as any;
}

