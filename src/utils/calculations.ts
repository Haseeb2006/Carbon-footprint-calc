import { FootprintData } from '../types';

// Indian-specific emission factors (kg CO2e)
const EMISSION_FACTORS = {
  CAR_PER_KM: 0.18,
  PUBLIC_TRANSPORT_PER_KM: 0.04,
  FLIGHT_PER_TRIP: 90,
  ELECTRICITY_PER_KWH: 0.82,
  LPG_PER_CYLINDER: 42.5,
  WASTE_PER_KG: 0.5,
  MEAT_PER_SERVING: 3.3,
  DAIRY_PER_SERVING: 0.7
};

export function calculateFootprint(data: FootprintData): number {
  const transportation = 
    (data.transportation.carKm * EMISSION_FACTORS.CAR_PER_KM) +
    (data.transportation.publicTransportKm * EMISSION_FACTORS.PUBLIC_TRANSPORT_PER_KM) +
    ((data.transportation.flightsPerYear / 12) * EMISSION_FACTORS.FLIGHT_PER_TRIP);

  const household =
    (data.household.electricityKwh * EMISSION_FACTORS.ELECTRICITY_PER_KWH) +
    (data.household.lpgCylinders * EMISSION_FACTORS.LPG_PER_CYLINDER) +
    (data.household.wasteKg * EMISSION_FACTORS.WASTE_PER_KG);

  const lifestyle =
    (data.lifestyle.meatServingsPerWeek * 4 * EMISSION_FACTORS.MEAT_PER_SERVING) +
    (data.lifestyle.dairyServingsPerWeek * 4 * EMISSION_FACTORS.DAIRY_PER_SERVING);

  const localProduceFactor = data.lifestyle.localProduce ? 0.9 : 1;

  return (transportation + household + (lifestyle * localProduceFactor));
}

export function getFootprintCategory(footprint: number): { text: string; color: string } {
  if (footprint < 100) {
    return { text: "Low Impact - Excellent!", color: "text-green-600" };
  } else if (footprint < 200) {
    return { text: "Moderate Impact - Good", color: "text-yellow-600" };
  } else if (footprint < 300) {
    return { text: "High Impact - Needs Improvement", color: "text-orange-600" };
  } else {
    return { text: "Very High Impact - Immediate Action Needed", color: "text-red-600" };
  }
}