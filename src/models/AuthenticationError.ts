/* tslint:disable */
/* eslint-disable */
/**
 * BMLT
 * BMLT Admin API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthenticationError
 */
export interface AuthenticationError {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationError
     */
    message: string;
}

/**
 * Check if a given object implements the AuthenticationError interface.
 */
export function instanceOfAuthenticationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function AuthenticationErrorFromJSON(json: any): AuthenticationError {
    return AuthenticationErrorFromJSONTyped(json, false);
}

export function AuthenticationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function AuthenticationErrorToJSON(value?: AuthenticationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

