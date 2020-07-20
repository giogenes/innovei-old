export const unitLocations = [
  {
    _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970",
    name: "A Stock",
    super: [],
  },
  {
    _id: "e84cc278-d7ce-404f-99ad-d6d2d07be299",
    name: "B Stock",
    super: [],
  },
  {
    _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
    name: "Internal Repair",
    super: [],
  },
  {
    _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
    name: "External Repair",
    super: [],
  },
  {
    _id: "44c14344-dda6-4741-b755-691f79895174",
    name: "Ready to Ship",
    super: [],
  },
  {
    _id: "159bca70-4945-4e5d-bb81-79a3a75db460",
    name: "Pending Diagnosis",
    super: [
      {
        _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
        name: "Internal Repair",
        super: [],
      },
      {
        _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
        name: "External Repair",
        super: [],
      },
    ],
  },
  {
    _id: "40a712b1-8652-46c6-92f1-fd8706177443",
    name: "Under Diagnostics",
    super: [
      {
        _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
        name: "Internal Repair",
        super: [],
      },
      {
        _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
        name: "External Repair",
        super: [],
      },
    ],
  },
  {
    _id: "0dc804a1-9757-4234-8050-b9fc5065552d",
    name: "Under Diagnostics",
    super: [
      {
        _id: "40a712b1-8652-46c6-92f1-fd8706177443",
        name: "Under Diagnostics",
        super: [
          {
            _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
            name: "Internal Repair",
            super: [],
          },
          {
            _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
            name: "External Repair",
            super: [],
          },
        ],
      },
    ],
  },
  {
    _id: "6eca5ae7-60ee-46aa-b91b-64348cca4b4b",
    name: "Pending Parts",
    super: [
      {
        _id: "40a712b1-8652-46c6-92f1-fd8706177443",
        name: "Under Diagnostics",
        super: [
          {
            _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
            name: "Internal Repair",
            super: [],
          },
          {
            _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
            name: "External Repair",
            super: [],
          },
        ],
      },
    ],
  },
  {
    _id: "b3c9b1b8-ca08-40d1-b4d8-0c39945d43be",
    name: "Pending Manufacturer",
    super: [
      {
        _id: "40a712b1-8652-46c6-92f1-fd8706177443",
        name: "Under Diagnostics",
        super: [
          {
            _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
            name: "Internal Repair",
            super: [],
          },
          {
            _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
            name: "External Repair",
            super: [],
          },
        ],
      },
    ],
  },
  {
    _id: "d8bea80d-c59f-4515-a12a-a67ffd23191f",
    name: "Pending Innovei",
    super: [
      {
        _id: "40a712b1-8652-46c6-92f1-fd8706177443",
        name: "Under Diagnostics",
        super: [
          {
            _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
            name: "Internal Repair",
            super: [],
          },
          {
            _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
            name: "External Repair",
            super: [],
          },
        ],
      },
    ],
  },
  {
    _id: "af706f34-c180-4829-b942-6981bd290510",
    name: "Pending Customer",
    super: [
      {
        _id: "40a712b1-8652-46c6-92f1-fd8706177443",
        name: "Under Diagnostics",
        super: [
          {
            _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
            name: "Internal Repair",
            super: [],
          },
          {
            _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
            name: "External Repair",
            super: [],
          },
        ],
      },
    ],
  },
  {
    _id: "966e0d82-6822-45cb-af9d-766edaeaa741",
    name: "Under Repair",
    super: [
      {
        _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
        name: "Internal Repair",
        super: [],
      },
      {
        _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
        name: "External Repair",
        super: [],
      },
    ],
  },
  {
    _id: "008185d8-0324-4627-b817-6e9dd17538e3",
    name: "Testing",
    super: [
      {
        _id: "08f99d9f-2faf-4487-bda6-757c48145e1f",
        name: "Internal Repair",
        super: [],
      },
      {
        _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
        name: "External Repair",
        super: [],
      },
    ],
  },
];

export function getUnitLocations() {
  return unitLocations.filter((l) => l);
}
