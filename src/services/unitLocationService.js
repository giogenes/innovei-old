export const unitLocations = [
  {
    _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
    name: "A Stock",
    super: {},
  },
  {
    _id: "e84cc278-d7ce-404f-99ad-d6d2d07be299",
    name: "B Stock",
    super: {},
  },
  {
    _id: "44c14344-dda6-4741-b755-691f79895174",
    name: "Ready to Ship",
    super: {},
  },
  {
    _id: "a39139be-bdd2-4bfb-8749-83f5ae8829f2",
    name: "Shipped",
    super: {},
  },
  {
    _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
    name: "Under Repair",
    super: {},
  },
  {
    _id: "008185d8-0324-4627-b817-6e9dd17538e3",
    name: "Testing",
    super: {},
  },
  {
    _id: "159bca70-4945-4e5d-bb81-79a3a75db460",
    name: "Pending Diagnosis",
    super: {},
  },
  {
    _id: "fb2fad71-4866-4eed-851c-e7af9bbca33a",
    name: "Under Diagnostics",
    super: {},
  },
  {
    _id: "ade846ae-c3f5-495d-9e09-ba0f062c4074",
    name: "Under Diagnostics",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
  },
  {
    _id: "4e075f22-b655-4c9f-8a91-8572a7aaf9fe",
    name: "Pending Parts",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
  },
  {
    _id: "c0e6093c-23c4-4335-af68-c835f6fbc663",
    name: "Pending Manufacturer",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
  },
  {
    _id: "cea6d6b4-4295-4f84-9df1-4ed2d9d8046e",
    name: "Pending Innovei",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
  },
  {
    _id: "2f117a8b-fc91-483c-b361-2434db4f2a50",
    name: "Pending Customer",
    super: {
      _id: "40a712b1-8652-46c6-92f1-fd8706177443",
      name: "Under Diagnostics",
      super: {},
    },
  },
];

export function getUnitLocations() {
  return unitLocations.filter((l) => l);
}
