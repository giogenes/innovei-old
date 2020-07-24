export const unitTypes = [
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
  {
    _id: "ef2bb21a-d986-45ff-95d4-e7acd06dd24c",
    name: "PowerRay Wizard",
    pn: "PRW10",
    manufacturer: {
      _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
      name: "Powervision",
    },
    description:
      "Underwater teathered drone with mobile carrying case, and various accessories.",
  },
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
    _id: "406c1721-100c-444b-b08c-4c0bafe54950",
    name: "PowerDolphin Wizard",
    pn: "PDW10",
    manufacturer: {
      _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
      name: "Powervision",
    },
    description: "Above water wireless drone with various accessories.",
  },
  {
    _id: "7bfb593e-def0-4cd9-a85f-123cd6bdd2f6",
    name: "PowerDolphin Explorer",
    pn: "PWE10",
    manufacturer: {
      _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
      name: "Powervision",
    },
    description: "Above water wireless drone with core accessories.",
  },
  {
    _id: "568296ca-447d-4f19-9f09-65f7c0fae9ae",
    name: "S5",
    pn: "S50",
    manufacturer: {
      _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
      name: "Roborock",
    },
    description: "Automatic vaccuum cleaner.",
  },
  {
    _id: "91338e08-f48b-4535-8394-9c6ac64f3c65",
    name: "S6+",
    pn: "S61",
    manufacturer: {
      _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
      name: "Roborock",
    },
    description: "Automatic vaccuum cleaner.",
  },
];

export function getUnitTypes() {
  return unitTypes.filter((u) => u);
}
