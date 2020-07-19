export const parts = [
  {
    _id: "2c55cac4-1bc5-472b-9d55-cdcf2b63d584",
    name: "Arm Assembly 1",
    pn: "43130001-01",
    desc: "2nd generation arm for the PowerEgg",
    unitType: {
      _id: "17463019-1abe-40e0-a14e-43ec96798291",
      name: "PowerEgg",
      pn: "PEG10",
      manufacturer: {
        _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
        name: "Powervision",
      },
      description: "Egged shaped flying drone.",
    },
  },
  {
    _id: "0c3f9003-3346-4df9-ae77-ff3389437443",
    name: "Arm Assembly 2",
    pn: "43130002-01",
    desc: "2nd generation arm for the PowerEgg",
    unitType: {
      _id: "17463019-1abe-40e0-a14e-43ec96798291",
      name: "PowerEgg",
      pn: "PEG10",
      manufacturer: {
        _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
        name: "Powervision",
      },
      description: "Egged shaped flying drone.",
    },
  },
];

export function getParts() {
  return parts.filter((p) => p);
}
