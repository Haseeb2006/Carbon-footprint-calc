import React, { useState } from 'react';
import { FootprintData } from '../types';
import { calculateFootprint, getFootprintCategory } from '../utils/calculations';
import { Leaf, Car, Lightbulb, Plane, Trash2, Utensils, Info } from 'lucide-react';
import OffsetResources from './OffsetResources';

const initialData: FootprintData = {
  transportation: {
    carKm: 0,
    publicTransportKm: 0,
    flightsPerYear: 0
  },
  household: {
    electricityKwh: 0,
    lpgCylinders: 0,
    wasteKg: 0
  },
  lifestyle: {
    meatServingsPerWeek: 0,
    dairyServingsPerWeek: 0,
    localProduce: false
  }
};

interface CategoryCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

function CategoryCard({ title, icon: Icon, children }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-green-100 rounded-lg">
          <Icon className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: number | boolean;
  onChange: (value: number | boolean) => void;
  type?: "number" | "checkbox";
  unit?: string;
}

function InputField({ label, value, onChange, type = "number", unit }: InputFieldProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-gray-700">{label}</label>
      <div className="flex items-center gap-2">
        {type === "checkbox" ? (
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={(e) => onChange(e.target.checked)}
            className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
          />
        ) : (
          <input
            type="number"
            value={value as number}
            onChange={(e) => onChange(Number(e.target.value))}
            min="0"
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
        )}
        {unit && <span className="text-gray-500">{unit}</span>}
      </div>
    </div>
  );
}

export default function Calculator() {
  const [data, setData] = useState<FootprintData>(initialData);
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const footprint = calculateFootprint(data);
    setResult(footprint);
  };

  const updateData = (category: keyof FootprintData, field: string, value: number | boolean) => {
    setData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Leaf className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="mt-4 text-5xl font-bold text-gray-900 mb-4">Indian Carbon Footprint Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your environmental impact and discover ways to reduce and offset your carbon footprint
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
            <Info className="h-4 w-4" />
            Based on Indian-specific emission factors and lifestyle patterns
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategoryCard title="Transportation" icon={Car}>
              <InputField
                label="Car travel"
                value={data.transportation.carKm}
                onChange={(value) => updateData('transportation', 'carKm', value as number)}
                unit="km/month"
              />
              <InputField
                label="Public transport"
                value={data.transportation.publicTransportKm}
                onChange={(value) => updateData('transportation', 'publicTransportKm', value as number)}
                unit="km/month"
              />
              <InputField
                label="Flights"
                value={data.transportation.flightsPerYear}
                onChange={(value) => updateData('transportation', 'flightsPerYear', value as number)}
                unit="trips/year"
              />
            </CategoryCard>

            <CategoryCard title="Household" icon={Lightbulb}>
              <InputField
                label="Electricity usage"
                value={data.household.electricityKwh}
                onChange={(value) => updateData('household', 'electricityKwh', value as number)}
                unit="kWh/month"
              />
              <InputField
                label="LPG cylinders"
                value={data.household.lpgCylinders}
                onChange={(value) => updateData('household', 'lpgCylinders', value as number)}
                unit="cylinders/month"
              />
              <InputField
                label="Waste generated"
                value={data.household.wasteKg}
                onChange={(value) => updateData('household', 'wasteKg', value as number)}
                unit="kg/month"
              />
            </CategoryCard>

            <CategoryCard title="Lifestyle" icon={Utensils}>
              <InputField
                label="Meat consumption"
                value={data.lifestyle.meatServingsPerWeek}
                onChange={(value) => updateData('lifestyle', 'meatServingsPerWeek', value as number)}
                unit="servings/week"
              />
              <InputField
                label="Dairy consumption"
                value={data.lifestyle.dairyServingsPerWeek}
                onChange={(value) => updateData('lifestyle', 'dairyServingsPerWeek', value as number)}
                unit="servings/week"
              />
              <InputField
                label="Buy local produce"
                value={data.lifestyle.localProduce}
                onChange={(value) => updateData('lifestyle', 'localProduce', value as boolean)}
                type="checkbox"
              />
            </CategoryCard>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105"
            >
              Calculate My Footprint
            </button>
          </div>
        </form>

        {result !== null && (
          <>
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Carbon Footprint Results</h2>
                
                <div className="flex flex-col items-center justify-center space-y-4 mb-8">
                  <div className="text-6xl font-bold text-green-600">
                    {result.toFixed(2)}
                    <span className="text-2xl ml-2">kg CO₂e/month</span>
                  </div>
                  
                  <p className={`text-xl font-semibold ${getFootprintCategory(result).color}`}>
                    {getFootprintCategory(result).text}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">How You Compare</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      The average Indian carbon footprint is approximately 167 kg CO₂e per month per person. 
                      {result < 167 
                        ? " You're doing better than average! Keep up the great work!" 
                        : " There's room for improvement. Check out our tips below to reduce your impact."}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">Reduction Tips</h3>
                    <ul className="text-gray-700 space-y-3 text-lg">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Use public transport or carpool
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Switch to LED bulbs
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Consider solar power
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Reduce plastic usage
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Practice waste segregation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <OffsetResources />
          </>
        )}
      </div>
    </div>
  );
}