export type IncidentStatus = 
  | 'DETECTED'
  | 'ANALYZED'
  | 'REVIEWED'
  | 'RESPONSE INITIATED'
  | 'CLEANUP IN PROGRESS'
  | 'RESOLVED';

export interface IncidentData {
  id: string;
  location: string;
  coordinates: string;
  riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  estimatedArea: string;
  detectionConfidence: number;
  nearbyVessels: number;
  environmentalConditions: string;
  status: IncidentStatus;
  timestamp: string;
}

export const sampleIncident: IncidentData = {
  id: "INC-2024-08-CAS-091",
  location: "Caspian Sea — Sector 4",
  coordinates: "40.3777° N, 50.3667° E",
  riskLevel: "HIGH",
  estimatedArea: "4.2 sq km",
  detectionConfidence: 87,
  nearbyVessels: 3,
  environmentalConditions: "Wind 12 knots NW, Wave height 0.8m",
  status: "REVIEWED",
  timestamp: "2024-08-15T08:30:00Z"
};
