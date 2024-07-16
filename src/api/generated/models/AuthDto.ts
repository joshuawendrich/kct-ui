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
 * @interface AuthDto
 */
export interface AuthDto {
    /**
     * 
     * @type {string}
     * @memberof AuthDto
     */
    accessToken?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof AuthDto
     */
    kostenstellen?: Set<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AuthDto
     */
    organisationseinheiten?: Array<string>;
}

/**
 * Check if a given object implements the AuthDto interface.
 */
export function instanceOfAuthDto(value: object): boolean {
    return true;
}

export function AuthDtoFromJSON(json: any): AuthDto {
    return AuthDtoFromJSONTyped(json, false);
}

export function AuthDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthDto {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'kostenstellen': json['kostenstellen'] == null ? undefined : json['kostenstellen'],
        'organisationseinheiten': json['organisationseinheiten'] == null ? undefined : json['organisationseinheiten'],
    };
}

export function AuthDtoToJSON(value?: AuthDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accessToken': value['accessToken'],
        'kostenstellen': value['kostenstellen'] == null ? undefined : Array.from(value['kostenstellen'] as Set<any>),
        'organisationseinheiten': value['organisationseinheiten'],
    };
}

