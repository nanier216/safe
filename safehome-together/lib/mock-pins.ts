export type HazardType =
  | "Flood Risk"
  | "Heavy Furniture"
  | "Loose Wiring"
  | "Trip Hazard"
  | "Blocked Exit";

export type Priority = "Low" | "Medium" | "High";

export type PinStatus = "Open" | "Claimed" | "Fixed";

export type Pin = {
  id: string;
  x: number;
  y: number;
  hazard: HazardType;
  priority: Priority;
  fix: string;
  status: PinStatus;
  claimedBy?: string;
};

export const samplePins: Pin[] = [
  {
    id: "pin-1",
    x: 17,
    y: 30,
    hazard: "Heavy Furniture",
    priority: "High",
    fix: "Anchor the picture ledge and shelf to a wall stud with an anti-tip kit.",
    status: "Open",
  },
  {
    id: "pin-2",
    x: 72,
    y: 52,
    hazard: "Flood Risk",
    priority: "High",
    fix: "Seal the window sill and move anything electrical off the floor nearby.",
    status: "Claimed",
    claimedBy: "Maya",
  },
  {
    id: "pin-3",
    x: 52,
    y: 86,
    hazard: "Trip Hazard",
    priority: "Medium",
    fix: "Add anti-slip tape under the rug and flatten the curled corner.",
    status: "Open",
  },
  {
    id: "pin-4",
    x: 85,
    y: 68,
    hazard: "Loose Wiring",
    priority: "Medium",
    fix: "Swap the frayed lamp cord for a braided one and clip it along the wall.",
    status: "Fixed",
  },
  {
    id: "pin-5",
    x: 9,
    y: 80,
    hazard: "Blocked Exit",
    priority: "Low",
    fix: "Clear the boxes so there is a 90 cm walking line to the hallway.",
    status: "Open",
  },
  {
    id: "pin-6",
    x: 62,
    y: 44,
    hazard: "Loose Wiring",
    priority: "High",
    fix: "Move the power strip off the floor and coil the slack away from the window.",
    status: "Claimed",
    claimedBy: "Leo",
  },
];
