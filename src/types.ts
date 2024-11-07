export interface FootprintData {
  transportation: {
    carKm: number;
    publicTransportKm: number;
    flightsPerYear: number;
  };
  household: {
    electricityKwh: number;
    lpgCylinders: number;
    wasteKg: number;
  };
  lifestyle: {
    meatServingsPerWeek: number;
    dairyServingsPerWeek: number;
    localProduce: boolean;
  };
}