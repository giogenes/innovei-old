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
      id: "17653",
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
    pallet: {
      _id: "40935ea6-495b-435b-898d-8ad2c3570bb3",
      id: "INNPLLT072020003",
      desc: "Gio's Tech Area",
      bay: 3,
    },
    parts: [
      {
        _id: "2c55cac4-1bc5-472b-9d55-cdcf2b63d584",
        name: "Arm Assembly 1",
        pn: "43130001-01",
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
    ],
    timeline: [
      {
        author: "Giovanni Leon",
        type: "note",
        date: new Date(2020, 9, 17, 3, 24, 0),
        location: {
          _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
          name: "A Stock",
          super: {},
        },
        content: "Unit was fixed and put into A Stock. Ready to sell",
      },
      {
        author: "",
        type: "movement",
        date: new Date(2020, 9, 16, 4, 24, 0),
        location: {
          _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
          name: "A Stock",
          super: {},
        },
        content: "",
      },
      {
        author: "Eddie Delgado",
        type: "note",
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
        type: "note",
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
  {
    _id: "a54050aa-909a-4f37-8030-11958e99872c",
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
    serialNumber: "110CAAA7570456",
    ticket: {
      _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
      id: "0001",
      type: "New Product",
      externalId: "",
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
        _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
        name: "A Stock",
        super: {},
      },
    },
    pallet: {
      _id: "22cbc806-f4f6-4b26-a3c0-bbd19c1a4c0b",
      id: "INNPLLT072020002",
      desc: "A Stock PowerRay Wizards",
      bay: 2,
    },
    parts: [
      {
        _id: "4fb2e3b7-3776-41e3-ad9a-c6c1b25c506a",
        name: "Powerseeker",
        pn: "43130002-00",
        amount: 1,
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
    ],
    timeline: [
      {
        author: "Andy Mendoza",
        type: "note",
        date: new Date(2020, 9, 17, 3, 24, 0),
        location: {
          _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
          name: "A Stock",
          super: {},
        },
        content: "Unit recieved",
      },
    ],
  },
  {
    _id: "55b86d72-4570-471e-bb1f-c9d74b22381b",
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
    serialNumber: "R0703S93501355",
    ticket: {
      _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
      id: "0001",
      type: "RMA",
      externalId: "",
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
        _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
        name: "Pending Manufacturer",
        super: {
          _id: "40a712b1-8652-46c6-92f1-fd8706177443",
          name: "Under Diagnostics",
          super: {},
        },
      },
    },
    pallet: {
      _id: "719ae29d-a204-4cf5-a5ec-ccf3e750ca09",
      id: "INNPLLT072020004",
      desc: "Eddie's Tech Area",
      bay: 4,
    },
    parts: [],
    timeline: [],
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
