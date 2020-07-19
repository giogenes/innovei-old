import * as unitTypesApi from "./fakeUnitTypeService";
import * as unitOwnersApi from "./fakeUnitOwnerService";
import * as unitLocationsApi from "./fakeUnitLocationService";

const units = [
  {
    _id: "499445fe-cf5f-4d99-be46-1502ce28dba3",
    type: {
      _id: "17463019-1abe-40e0-a14e-43ec96798291",
      name: "PowerEgg",
      pn: "PEG10",
      manufacturer: {
        _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
        name: "Powervision",
      },
      description: "Egged shaped flying drone.",
    },
    serialNumber: "110AAAA7460350",
    owner: {
      _id: "5cb3712d-cd32-42cc-9933-e6e8b7df3a61",
      name: "Powervision Robot",
      email: "us@powervision.me",
      phone: "915-225-5277",
      address: "9570 Pan American Dr.",
      address2: "dock #6",
      city: "El Paso",
      state: "TX",
      zipCode: "79927",
      country: "USA",
    },
    location: { _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970", name: "A Stock" },
  },
  {
    _id: "f25492a6-aeba-4863-9cda-994b21c55340",
    type: {
      _id: "568296ca-447d-4f19-9f09-65f7c0fae9ae",
      name: "S5",
      pn: "S50",
      manufacturer: {
        _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
        name: "Roborock",
      },
      description: "Automatic vaccuum cleaner.",
    },
    serialNumber: "11SSDSD1122000D",
    owner: {
      _id: "d41fa854-4ba6-4825-a593-36d243b63680",
      name: "John Doe",
      email: "john.doe@domain.com",
      phone: "123-456-7890",
      address: "123 Main St.",
      address2: "Apt 123",
      city: "El Paso",
      state: "TX",
      zipCode: "79936",
      country: "USA",
    },
    location: {
      _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
      name: "Under Repair",
    },
  },
  {
    _id: "4e22ca03-b5f2-4f9d-9a5c-81501746aa55",
    type: {
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
    serialNumber: "110CAAA7450134",
    owner: {
      _id: "d41fa854-4ba6-4825-a593-36d243b63680",
      name: "John Doe",
      email: "john.doe@domain.com",
      phone: "123-456-7890",
      address: "123 Main St.",
      address2: "Apt 123",
      city: "El Paso",
      state: "TX",
      zipCode: "79936",
      country: "USA",
    },
    location: {
      _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
      name: "Under Repair",
    },
  },
  {
    _id: "e751c6b0-9d13-45fe-a5d1-da1abfbf23c8",
    type: {
      _id: "7bfb593e-def0-4cd9-a85f-123cd6bdd2f6",
      name: "PowerDolphin Explorer",
      pn: "PWE10",
      manufacturer: {
        _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
        name: "Powervision",
      },
      description: "Above water wireless drone with core accessories.",
    },
    serialNumber: "110DAAP7430549",
    owner: {
      _id: "5cb3712d-cd32-42cc-9933-e6e8b7df3a61",
      name: "Powervision Robot",
      email: "us@powervision.me",
      phone: "915-225-5277",
      address: "9570 Pan American Dr.",
      address2: "dock #6",
      city: "El Paso",
      state: "TX",
      zipCode: "79927",
      country: "USA",
    },
    location: {
      _id: "6eca5ae7-60ee-46aa-b91b-64348cca4b4b",
      name: "Pending Parts",
    },
  },
  {
    _id: "778b13fa-1602-416d-ba1c-dac0556f6a0e",
    type: {
      _id: "91338e08-f48b-4535-8394-9c6ac64f3c65",
      name: "S6+",
      pn: "S61",
      manufacturer: {
        _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
        name: "Roborock",
      },
      description: "Automatic vaccuum cleaner.",
    },
    serialNumber: "11SSDSD1122110E",
    owner: {
      _id: "5b9b5d48-033f-4414-b15a-802e76541a2a",
      name: "Roborock Robot",
      email: "us@roborock.com",
      phone: "915-225-5277",
      address: "9570 Pan American Dr.",
      address2: "dock #6",
      city: "El Paso",
      state: "TX",
      zipCode: "79927",
      country: "USA",
    },
    location: {
      _id: "e84cc278-d7ce-404f-99ad-d6d2d07be299",
      name: "B Stock",
    },
  },
];

export function getUnits() {
  return units;
}

export function getUnit(id) {
  return units.find((u) => u._id === id);
}

export function saveUnit(unit) {
  let unitInDb = units.find((u) => u._id === unit._id) || {};
  unitInDb.serialNumber = unit.serialNumber;
  unitInDb.type = unitTypesApi.unitTypes.find((t) => t._id === unit.typeId);
  unitInDb.owner = unitOwnersApi.unitOwners.find((o) => o._id === unit.ownerId);
  unitInDb.location = unitLocationsApi.unitLocations.find(
    (l) => l._id === unit.locationId
  );

  if (!unitInDb._id) {
    unitInDb._id = Date.now();
    units.push(unitInDb);
  }

  return unitInDb;
}

export function deleteUnit(id) {
  let unitInDb = units.find((u) => u._id === id);
  units.splice(units.indexOf(unitInDb), 1);
  return unitInDb;
}
