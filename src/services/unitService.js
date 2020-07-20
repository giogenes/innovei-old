import * as unitTypesApi from "./unitTypeService";
import * as unitOwnersApi from "./unitOwnerService";
import * as unitLocationsApi from "./unitLocationService";

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
    ticket: {
      _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
      id: "RMA 17653",
      type: "RMA",
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
        _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
        name: "Pending Customer",
        super: {
          _id: "40a712b1-8652-46c6-92f1-fd8706177443",
          name: "Under Diagnostics",
          super: {},
        },
      },
    },
    parts: [
      {
        _id: "2c55cac4-1bc5-472b-9d55-cdcf2b63d584",
        name: "Arm Assembly 1",
        pn: "43130001-01",
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
    ],
    notes: [
      {
        author: "Giovanni Leon",
        date: new Date(2020, 9, 17, 3, 24, 0),
        location: {
          _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
          name: "A Stock",
          super: {},
        },
        content: "Unit was fixed and put into A Stock. Ready to sell",
      },
      {
        author: "Eddie Delgado",
        date: new Date(2020, 10, 17, 3, 24, 0),
        location: {
          _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
          name: "Under Repair",
          super: {},
        },
        content: "Under Repair",
      },
      {
        author: "Eddie Delgado",
        date: new Date(2020, 11, 17, 12, 0, 0),
        location: {
          _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
          name: "Pending Parts",
          super: {
            _id: "40a712b1-8652-46c6-92f1-fd8706177443",
            name: "Under Diagnostics",
            super: {},
          },
        },
        content: "Needs gimbal. Pending parts",
      },
    ],
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
