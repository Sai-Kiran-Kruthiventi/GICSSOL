export interface ElectricModel {
  id: string;
  name: string;
  tagline: string;
  category: 'Urban Scooter' | 'Performance GT' | 'Hyper Sport EV' | 'Commuter Lite';
  price: string;
  rangeKm: number;
  topSpeedKmh: number;
  batteryKwh: number;
  chargingTimeHours: number;
  acceleration0to50: number; // in seconds
  weightKg: number;
  motorPeakPowerKw: number;
  colors: {
    name: string;
    hex: string;
    textColor: string;
  }[];
  features: string[];
  specs: {
    label: string;
    value: string;
    sub?: string;
  }[];
  description: string;
  heroBadge?: string;
  badge?: string;
}

export interface SolarSolution {
  id: string;
  name: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Storage';
  capacityRange: string;
  efficiency: string;
  warranty: string;
  paybackEst: string;
  description: string;
  features: string[];
  idealFor: string;
  startingPrice: string;
}

export interface TestRideBooking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  preferredModelId: string;
  preferredDate: string;
  preferredTime: string;
  locationType: 'showroom' | 'home_delivery';
  experienceLevel: 'beginner' | 'intermediate' | 'expert';
  notes?: string;
}

export interface DealerInquiry {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  investmentRange: string;
  showroomAreaSqFt: string;
  businessBackground: string;
  message?: string;
}

export interface SolarQuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Farmhouse';
  monthlyElectricityBill: number;
  roofAreaSqFt: number;
  batteryBackupNeeded: boolean;
  timeline: 'Immediate (1-2 weeks)' | 'Next Month' | 'Exploring options';
  message?: string;
}

export interface SolarCalculationInput {
  monthlyBill: number;
  currency: 'INR' | 'USD' | 'EUR';
  roofAreaSqFt: number;
  propertyType: 'residential' | 'commercial' | 'industrial';
  sunHoursPerDay: number;
  includeBattery: boolean;
}

export interface SolarCalculationResult {
  systemSizeKw: number;
  panelCount: number;
  monthlyGenerationKwh: number;
  annualGenerationKwh: number;
  estimatedMonthlySavings: number;
  estimatedAnnualSavings: number;
  estimated25YearSavings: number;
  co2OffsetTonsPerYear: number;
  treesEquivalent: number;
  paybackPeriodYears: number;
  systemCostEstimated: number;
  batteryCapacityRecommendedKwh?: number;
}
