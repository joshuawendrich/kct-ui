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
import type { ZusatzInfosDto } from './ZusatzInfosDto';
import {
    ZusatzInfosDtoFromJSON,
    ZusatzInfosDtoFromJSONTyped,
    ZusatzInfosDtoToJSON,
} from './ZusatzInfosDto';

/**
 * 
 * @export
 * @interface DatensatzDto
 */
export interface DatensatzDto {
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    leistungsart?: string;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    aarNummer?: number;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    aposType?: number;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    vertragsnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    vertragsbezeichnung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    teilvertragsnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    bestellnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    bestellnummerKunde?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    systelPspElement?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    systelPspElementBezeichnung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    aufwandskonto?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    aufwandskontobezeichnung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    buchungskreis?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    debitornummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    kunde?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    bahnstelle?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    organisationseinheit?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    kostenstelle?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    sapPspElement?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    sapPspElementBezeichnung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    anlagenNummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    anlagenBezeichnung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    belasteterAarAuftrag?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    korrekturbuchnung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    produktLeistung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    produktId?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    leistendePerson?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    detailangabe1?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    detailangabe2?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    kurzbeschreibung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    nutzer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    nutzerOe?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    emailAdresse?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    ipPort?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    seriennummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    idgNummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    imeiNummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    telefonnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    ort?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    strasseHausnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    raum?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    leistungszeitraum?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    preisinformation?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    foerderung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    anteil?: string;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    menge?: number;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    mengeneinheit?: string;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    einzelpreis?: number;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    vkZuschlag?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    arbeitsplatzZuschlag?: string;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    gesamtpreis?: number;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    monat?: number;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    jahr?: number;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    rechnungsnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    rechnungsdatum?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    kundenkennung?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    leistungssegment?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    produktgruppe?: string;
    /**
     * 
     * @type {string}
     * @memberof DatensatzDto
     */
    bestandsId?: string;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof DatensatzDto
     */
    periode?: number;
    /**
     * 
     * @type {ZusatzInfosDto}
     * @memberof DatensatzDto
     */
    zusatzInfos?: ZusatzInfosDto;
}

/**
 * Check if a given object implements the DatensatzDto interface.
 */
export function instanceOfDatensatzDto(value: object): boolean {
    return true;
}

export function DatensatzDtoFromJSON(json: any): DatensatzDto {
    return DatensatzDtoFromJSONTyped(json, false);
}

export function DatensatzDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatensatzDto {
    if (json == null) {
        return json;
    }
    return {
        
        'leistungsart': json['leistungsart'] == null ? undefined : json['leistungsart'],
        'aarNummer': json['aarNummer'] == null ? undefined : json['aarNummer'],
        'aposType': json['aposType'] == null ? undefined : json['aposType'],
        'vertragsnummer': json['vertragsnummer'] == null ? undefined : json['vertragsnummer'],
        'vertragsbezeichnung': json['vertragsbezeichnung'] == null ? undefined : json['vertragsbezeichnung'],
        'teilvertragsnummer': json['teilvertragsnummer'] == null ? undefined : json['teilvertragsnummer'],
        'bestellnummer': json['bestellnummer'] == null ? undefined : json['bestellnummer'],
        'bestellnummerKunde': json['bestellnummerKunde'] == null ? undefined : json['bestellnummerKunde'],
        'systelPspElement': json['systelPspElement'] == null ? undefined : json['systelPspElement'],
        'systelPspElementBezeichnung': json['systelPspElementBezeichnung'] == null ? undefined : json['systelPspElementBezeichnung'],
        'aufwandskonto': json['aufwandskonto'] == null ? undefined : json['aufwandskonto'],
        'aufwandskontobezeichnung': json['aufwandskontobezeichnung'] == null ? undefined : json['aufwandskontobezeichnung'],
        'buchungskreis': json['buchungskreis'] == null ? undefined : json['buchungskreis'],
        'debitornummer': json['debitornummer'] == null ? undefined : json['debitornummer'],
        'kunde': json['kunde'] == null ? undefined : json['kunde'],
        'bahnstelle': json['bahnstelle'] == null ? undefined : json['bahnstelle'],
        'organisationseinheit': json['organisationseinheit'] == null ? undefined : json['organisationseinheit'],
        'kostenstelle': json['kostenstelle'] == null ? undefined : json['kostenstelle'],
        'sapPspElement': json['sapPspElement'] == null ? undefined : json['sapPspElement'],
        'sapPspElementBezeichnung': json['sapPspElementBezeichnung'] == null ? undefined : json['sapPspElementBezeichnung'],
        'anlagenNummer': json['anlagenNummer'] == null ? undefined : json['anlagenNummer'],
        'anlagenBezeichnung': json['anlagenBezeichnung'] == null ? undefined : json['anlagenBezeichnung'],
        'belasteterAarAuftrag': json['belasteterAarAuftrag'] == null ? undefined : json['belasteterAarAuftrag'],
        'korrekturbuchnung': json['korrekturbuchnung'] == null ? undefined : json['korrekturbuchnung'],
        'produktLeistung': json['produktLeistung'] == null ? undefined : json['produktLeistung'],
        'produktId': json['produktId'] == null ? undefined : json['produktId'],
        'leistendePerson': json['leistendePerson'] == null ? undefined : json['leistendePerson'],
        'detailangabe1': json['detailangabe1'] == null ? undefined : json['detailangabe1'],
        'detailangabe2': json['detailangabe2'] == null ? undefined : json['detailangabe2'],
        'kurzbeschreibung': json['kurzbeschreibung'] == null ? undefined : json['kurzbeschreibung'],
        'nutzer': json['nutzer'] == null ? undefined : json['nutzer'],
        'nutzerOe': json['nutzerOe'] == null ? undefined : json['nutzerOe'],
        'emailAdresse': json['emailAdresse'] == null ? undefined : json['emailAdresse'],
        'ipPort': json['ipPort'] == null ? undefined : json['ipPort'],
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
        'seriennummer': json['seriennummer'] == null ? undefined : json['seriennummer'],
        'idgNummer': json['idgNummer'] == null ? undefined : json['idgNummer'],
        'imeiNummer': json['imeiNummer'] == null ? undefined : json['imeiNummer'],
        'telefonnummer': json['telefonnummer'] == null ? undefined : json['telefonnummer'],
        'ort': json['ort'] == null ? undefined : json['ort'],
        'strasseHausnummer': json['strasseHausnummer'] == null ? undefined : json['strasseHausnummer'],
        'raum': json['raum'] == null ? undefined : json['raum'],
        'leistungszeitraum': json['leistungszeitraum'] == null ? undefined : json['leistungszeitraum'],
        'preisinformation': json['preisinformation'] == null ? undefined : json['preisinformation'],
        'foerderung': json['foerderung'] == null ? undefined : json['foerderung'],
        'anteil': json['anteil'] == null ? undefined : json['anteil'],
        'menge': json['menge'] == null ? undefined : json['menge'],
        'mengeneinheit': json['mengeneinheit'] == null ? undefined : json['mengeneinheit'],
        'einzelpreis': json['einzelpreis'] == null ? undefined : json['einzelpreis'],
        'vkZuschlag': json['vkZuschlag'] == null ? undefined : json['vkZuschlag'],
        'arbeitsplatzZuschlag': json['arbeitsplatzZuschlag'] == null ? undefined : json['arbeitsplatzZuschlag'],
        'gesamtpreis': json['gesamtpreis'] == null ? undefined : json['gesamtpreis'],
        'monat': json['monat'] == null ? undefined : json['monat'],
        'jahr': json['jahr'] == null ? undefined : json['jahr'],
        'rechnungsnummer': json['rechnungsnummer'] == null ? undefined : json['rechnungsnummer'],
        'rechnungsdatum': json['rechnungsdatum'] == null ? undefined : json['rechnungsdatum'],
        'kundenkennung': json['kundenkennung'] == null ? undefined : json['kundenkennung'],
        'leistungssegment': json['leistungssegment'] == null ? undefined : json['leistungssegment'],
        'produktgruppe': json['produktgruppe'] == null ? undefined : json['produktgruppe'],
        'bestandsId': json['bestandsId'] == null ? undefined : json['bestandsId'],
        'id': json['id'] == null ? undefined : json['id'],
        'periode': json['periode'] == null ? undefined : json['periode'],
        'zusatzInfos': json['zusatzInfos'] == null ? undefined : ZusatzInfosDtoFromJSON(json['zusatzInfos']),
    };
}

export function DatensatzDtoToJSON(value?: DatensatzDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'leistungsart': value['leistungsart'],
        'aarNummer': value['aarNummer'],
        'aposType': value['aposType'],
        'vertragsnummer': value['vertragsnummer'],
        'vertragsbezeichnung': value['vertragsbezeichnung'],
        'teilvertragsnummer': value['teilvertragsnummer'],
        'bestellnummer': value['bestellnummer'],
        'bestellnummerKunde': value['bestellnummerKunde'],
        'systelPspElement': value['systelPspElement'],
        'systelPspElementBezeichnung': value['systelPspElementBezeichnung'],
        'aufwandskonto': value['aufwandskonto'],
        'aufwandskontobezeichnung': value['aufwandskontobezeichnung'],
        'buchungskreis': value['buchungskreis'],
        'debitornummer': value['debitornummer'],
        'kunde': value['kunde'],
        'bahnstelle': value['bahnstelle'],
        'organisationseinheit': value['organisationseinheit'],
        'kostenstelle': value['kostenstelle'],
        'sapPspElement': value['sapPspElement'],
        'sapPspElementBezeichnung': value['sapPspElementBezeichnung'],
        'anlagenNummer': value['anlagenNummer'],
        'anlagenBezeichnung': value['anlagenBezeichnung'],
        'belasteterAarAuftrag': value['belasteterAarAuftrag'],
        'korrekturbuchnung': value['korrekturbuchnung'],
        'produktLeistung': value['produktLeistung'],
        'produktId': value['produktId'],
        'leistendePerson': value['leistendePerson'],
        'detailangabe1': value['detailangabe1'],
        'detailangabe2': value['detailangabe2'],
        'kurzbeschreibung': value['kurzbeschreibung'],
        'nutzer': value['nutzer'],
        'nutzerOe': value['nutzerOe'],
        'emailAdresse': value['emailAdresse'],
        'ipPort': value['ipPort'],
        'hostname': value['hostname'],
        'seriennummer': value['seriennummer'],
        'idgNummer': value['idgNummer'],
        'imeiNummer': value['imeiNummer'],
        'telefonnummer': value['telefonnummer'],
        'ort': value['ort'],
        'strasseHausnummer': value['strasseHausnummer'],
        'raum': value['raum'],
        'leistungszeitraum': value['leistungszeitraum'],
        'preisinformation': value['preisinformation'],
        'foerderung': value['foerderung'],
        'anteil': value['anteil'],
        'menge': value['menge'],
        'mengeneinheit': value['mengeneinheit'],
        'einzelpreis': value['einzelpreis'],
        'vkZuschlag': value['vkZuschlag'],
        'arbeitsplatzZuschlag': value['arbeitsplatzZuschlag'],
        'gesamtpreis': value['gesamtpreis'],
        'monat': value['monat'],
        'jahr': value['jahr'],
        'rechnungsnummer': value['rechnungsnummer'],
        'rechnungsdatum': value['rechnungsdatum'],
        'kundenkennung': value['kundenkennung'],
        'leistungssegment': value['leistungssegment'],
        'produktgruppe': value['produktgruppe'],
        'bestandsId': value['bestandsId'],
        'id': value['id'],
        'periode': value['periode'],
        'zusatzInfos': ZusatzInfosDtoToJSON(value['zusatzInfos']),
    };
}

