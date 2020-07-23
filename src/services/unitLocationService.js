export const unitLocations = [
  {
    _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
    name: "A Stock",
    super: {},
    next: [
      {
        _id: "44c14344-dda6-4741-b755-691f79895174",
        name: "Ready to Ship",
        types: ["New Product", "RGA"],
      },
      {
        _id: "159bca70-4945-4e5d-bb81-79a3a75db460",
        name: "Pending Diagnosis",
        types: ["New Product", "RGA"],
      },
      {
        _id: "008185d8-0324-4627-b817-6e9dd17538e3",
        name: "Testing",
        types: ["New Product", "RGA"],
      },
    ],
  },
  {
    _id: "e84cc278-d7ce-404f-99ad-d6d2d07be299",
    name: "B Stock",
    super: {},
    next: [
      {
        _id: "44c14344-dda6-4741-b755-691f79895174",
        name: "Ready to Ship",

        types: ["New Product", "RGA"],
      },
      {
        _id: "159bca70-4945-4e5d-bb81-79a3a75db460",
        name: "Pending Diagnosis",

        types: ["New Product", "RGA"],
      },
      {
        _id: "008185d8-0324-4627-b817-6e9dd17538e3",
        name: "Testing",

        types: ["New Product", "RGA"],
      },
    ],
  },
  {
    _id: "44c14344-dda6-4741-b755-691f79895174",
    name: "Ready to Ship",
    super: {},
    next: [
      {
        _id: "a39139be-bdd2-4bfb-8749-83f5ae8829f2",
        name: "Shipped",

        types: ["New Product", "RGA", "RMA"],
      },
    ],
  },
  {
    _id: "a39139be-bdd2-4bfb-8749-83f5ae8829f2",
    name: "Shipped",
    super: {},
    next: [],
  },
  {
    _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
    name: "Under Repair",
    super: {},
    next: [
      {
        _id: "2fe5cfca-f21e-401f-a343-3e8e38fa3b4f",
        name: "Not Repairable",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "008185d8-0324-4627-b817-6e9dd17538e3",
        name: "Testing",
        types: ["New Product", "RMA", "RGA"],
      },
    ],
  },
  {
    _id: "2fe5cfca-f21e-401f-a343-3e8e38fa3b4f",
    name: "Not Repairable",
    super: {},
    next: [],
  },
  {
    _id: "008185d8-0324-4627-b817-6e9dd17538e3",
    name: "Testing",
    super: {},
    next: [
      {
        _id: "2fe5cfca-f21e-401f-a343-3e8e38fa3b4f",
        name: "Not Repairable",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
        name: "Diagnostics",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "44c14344-dda6-4741-b755-691f79895174",
        name: "Ready to Ship",
        types: ["RMA"],
      },
      {
        _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
        name: "A Stock",
        types: ["New Product", "RGA"],
      },
      {
        _id: "e84cc278-d7ce-404f-99ad-d6d2d07be299",
        name: "B Stock",
        types: ["New Product", "RGA"],
      },
    ],
  },
  {
    _id: "159bca70-4945-4e5d-bb81-79a3a75db460",
    name: "Pending Diagnosis",
    super: {},
    next: [
      {
        _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
        name: "Diagnostics",
        types: ["New Product", "RMA", "RGA"],
      },
    ],
  },
  {
    _id: "fb2fad71-4866-4eed-851c-e7af9bbca33a",
    name: "Under Diagnostics",
    super: {},
  },
  {
    _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
    name: "Diagnostics",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
    next: [
      {
        _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
        name: "Pending Parts",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
        name: "Pending Manufacturer",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "cea6d6b4-4295-4f84-9df1-4ed2d9d8046e",
        name: "Pending Innovei",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
        name: "Pending Customer",
        types: ["RMA"],
      },
      {
        _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
        name: "Under Repair",
        types: ["New Product", "RMA", "RGA"],
      },
    ],
  },
  {
    _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
    name: "Pending Parts",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
    next: [
      {
        _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
        name: "Diagnostics",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
        name: "Pending Manufacturer",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "cea6d6b4-4295-4f84-9df1-4ed2d9d8046e",
        name: "Pending Innovei",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
        name: "Pending Customer",
        types: ["RMA"],
      },
      {
        _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
        name: "Under Repair",
        types: ["New Product", "RMA", "RGA"],
      },
    ],
  },
  {
    _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
    name: "Pending Manufacturer",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
    next: [
      {
        _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
        name: "Diagnostics",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
        name: "Pending Parts",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "cea6d6b4-4295-4f84-9df1-4ed2d9d8046e",
        name: "Pending Innovei",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
        name: "Pending Customer",
        types: ["RMA"],
      },
      {
        _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
        name: "Under Repair",
        types: ["New Product", "RMA", "RGA"],
      },
    ],
  },
  {
    _id: "cea6d6b4-4295-4f84-9df1-4ed2d9d8046e",
    name: "Pending Innovei",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
    next: [
      {
        _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
        name: "Diagnostics",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
        name: "Pending Parts",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
        name: "Pending Manufacturer",
        types: ["New Product", "RMA", "RGA"],
      },
      {
        _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
        name: "Pending Customer",
        types: ["RMA"],
      },
      {
        _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
        name: "Under Repair",
        types: ["New Product", "RMA", "RGA"],
      },
    ],
  },
  {
    _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
    name: "Pending Customer",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
    next: [
      {
        _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
        name: "Diagnostics",
        types: ["RMA"],
      },
      {
        _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
        name: "Pending Parts",
        types: ["RMA"],
      },
      {
        _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
        name: "Pending Manufacturer",
        types: ["RMA"],
      },
      {
        _id: "cea6d6b4-4295-4f84-9df1-4ed2d9d8046e",
        name: "Pending Innovei",
        types: ["RMA"],
      },
      {
        _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
        name: "Under Repair",
        types: ["RMA"],
      },
    ],
  },
];

export function getUnitLocations() {
  return unitLocations.filter((unitLocation) => unitLocation);
}

export function getUnitLocation(id) {
  const array = unitLocations.filter((unitLocation) => unitLocation._id === id);
  return array[0];
}
