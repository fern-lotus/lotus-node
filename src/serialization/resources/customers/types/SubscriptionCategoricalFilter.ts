/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LotusApi } from "@fern-api/lotus";
import * as core from "../../../../core";

export const SubscriptionCategoricalFilter: core.serialization.ObjectSchema<
    serializers.SubscriptionCategoricalFilter.Raw,
    LotusApi.SubscriptionCategoricalFilter
> = core.serialization.object({
    value: core.serialization.string(),
    propertyName: core.serialization.property("property_name", core.serialization.string()),
});

export declare namespace SubscriptionCategoricalFilter {
    interface Raw {
        value: string;
        property_name: string;
    }
}