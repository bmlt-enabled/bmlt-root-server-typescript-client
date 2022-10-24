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
 * @interface AuthorizationError
 */
export interface AuthorizationError {
    /**
     * 
     * @type {string}
     * @memberof AuthorizationError
     */
    message: string;
}

/**
 * Check if a given object implements the AuthorizationError interface.
 */
export function instanceOfAuthorizationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function AuthorizationErrorFromJSON(json: any): AuthorizationError {
    return AuthorizationErrorFromJSONTyped(json, false);
}

export function AuthorizationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function AuthorizationErrorToJSON(value?: AuthorizationError | null): any {
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

