import * as unitTypesApi from "./fakeUnitTypeService";
import * as unitManufacturersApi from "./fakeManufacturerService";
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
    location: { _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970", name: "A Stock" },
  },
];

export function getUnits() {
  return units;
}

export function getUnit(id) {
  return units.find((u) => u._id === id);
}

export function saveUnit(unit) {
  let unitInDb = units.find((u) => u._id === u._id) || {};
  unitInDb.serialNumber = movie.serialNumber;
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
