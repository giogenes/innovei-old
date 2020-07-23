export const parts = [
  {
    _id: "2c55cac4-1bc5-472b-9d55-cdcf2b63d584",
    name: "Arm Assembly 1",
    pn: "43130001-01",
    amount: 21,
    desc: "2nd generation arm for the PowerEgg",
    unitTypes: [
      {
        _id: "17463019-1abe-40e0-a14e-43ec96798291",
        name: "PowerEgg",
        pn: "PEG10",
        manufacturer: {
          _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
          name: "Powervision",
        },
        description: "Egged shaped flying drone.",
      },
    ],
  },
  {
    _id: "0c3f9003-3346-4df9-ae77-ff3389437443",
    name: "Arm Assembly 2",
    pn: "43130002-01",
    amount: 1,
    desc: "2nd generation arm for the PowerEgg",
    unitTypes: [
      {
        _id: "17463019-1abe-40e0-a14e-43ec96798291",
        name: "PowerEgg",
        pn: "PEG10",
        manufacturer: {
          _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
          name: "Powervision",
        },
        description: "Egged shaped flying drone.",
      },
    ],
  },
  {
    _id: "4fb2e3b7-3776-41e3-ad9a-c6c1b25c506a",
    name: "Powerseeker",
    pn: "43130002-00",
    amount: 23,
    desc: "Sonar detection accessory",
    unitTypes: [
      {
        _id: "7bfb593e-def0-4cd9-a85f-123cd6bdd2f6",
        name: "PowerRay Explorer",
        pn: "PRE10",
        manufacturer: {
          _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
          name: "Powervision",
        },
        description:
          "Underwater teathered drone with foam case, and core accessories.",
      },
      {
        _id: "ef2bb21a-d986-45ff-95d4-e7acd06dd24c",
        name: "PowerDolphin Wizard",
        pn: "PDW10",
        manufacturer: {
          _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
          name: "Powervision",
        },
        description: "Above water wireless drone with various accessories.",
      },
    ],
  },
];

export function getParts() {
  return parts.filter((p) => p);
}

export function getPartsByUnitTypeId(unitTypeId) {
  return parts.filter(
    (p) => p.unitTypes.map((type) => type._id === unitTypeId)[0]
  );
}

export function getPart(id) {
  return parts.filter((p) => p._id === id)[0];
}

export function removePart(part) {}
