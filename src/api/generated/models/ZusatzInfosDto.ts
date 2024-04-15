/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ZusatzInfosDto
 */
export interface ZusatzInfosDto {
    /**
     * 
     * @type {number}
     * @memberof ZusatzInfosDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ZusatzInfosDto
     */
    bemerkung?: string;
    /**
     * 
     * @type {number}
     * @memberof ZusatzInfosDto
     */
    abgerechnetMonat?: number;
    /**
     * 
     * @type {string}
     * @memberof ZusatzInfosDto
     */
    vergleichIlv?: string;
    /**
     * 
     * @type {string}
     * @memberof ZusatzInfosDto
     */
    pspElement?: string;
}

/**
 * Check if a given object implements the ZusatzInfosDto interface.
 */
export function instanceOfZusatzInfosDto(value: object): boolean {
    return true;
}

export function ZusatzInfosDtoFromJSON(json: any): ZusatzInfosDto {
    return ZusatzInfosDtoFromJSONTyped(json, false);
}

export function ZusatzInfosDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZusatzInfosDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'bemerkung': json['bemerkung'] == null ? undefined : json['bemerkung'],
        'abgerechnetMonat': json['abgerechnetMonat'] == null ? undefined : json['abgerechnetMonat'],
        'vergleichIlv': json['vergleichIlv'] == null ? undefined : json['vergleichIlv'],
        'pspElement': json['pspElement'] == null ? undefined : json['pspElement'],
    };
}

export function ZusatzInfosDtoToJSON(value?: ZusatzInfosDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'bemerkung': value['bemerkung'],
        'abgerechnetMonat': value['abgerechnetMonat'],
        'vergleichIlv': value['vergleichIlv'],
        'pspElement': value['pspElement'],
    };
}
