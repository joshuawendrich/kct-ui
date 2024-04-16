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


import * as runtime from '../runtime';
import type {
  AuthDto,
  LoginDto,
  RegisterDto,
} from '../models/index';
import {
    AuthDtoFromJSON,
    AuthDtoToJSON,
    LoginDtoFromJSON,
    LoginDtoToJSON,
    RegisterDtoFromJSON,
    RegisterDtoToJSON,
} from '../models/index';

export interface LoginUserRequest {
    loginDto: LoginDto;
}

export interface RegisterUserRequest {
    registerDto: RegisterDto;
}

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     */
    async loginUserRaw(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthDto>> {
        if (requestParameters['loginDto'] == null) {
            throw new runtime.RequiredError(
                'loginDto',
                'Required parameter "loginDto" was null or undefined when calling loginUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/user/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginDtoToJSON(requestParameters['loginDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthDtoFromJSON(jsonValue));
    }

    /**
     */
    async loginUser(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthDto> {
        const response = await this.loginUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerUserRaw(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthDto>> {
        if (requestParameters['registerDto'] == null) {
            throw new runtime.RequiredError(
                'registerDto',
                'Required parameter "registerDto" was null or undefined when calling registerUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/user/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterDtoToJSON(requestParameters['registerDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthDtoFromJSON(jsonValue));
    }

    /**
     */
    async registerUser(requestParameters: RegisterUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthDto> {
        const response = await this.registerUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
