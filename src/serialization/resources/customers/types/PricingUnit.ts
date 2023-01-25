/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LotusApi } from "@fern-api/lotus";
import * as core from "../../../../core";

export const PricingUnit: core.serialization.ObjectSchema<serializers.PricingUnit.Raw, LotusApi.PricingUnit> =
    core.serialization.object({
        code: core.serialization.string(),
        name: core.serialization.string(),
        symbol: core.serialization.string(),
    });

export declare namespace PricingUnit {
    interface Raw {
        code: string;
        name: string;
        symbol: string;
    }
}