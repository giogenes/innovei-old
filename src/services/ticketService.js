export const tickets = [
  {
    _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6",
    id: "0001",
    externalId: "17653",
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
        super: {
          _id: "7d6571ba-c2bc-4958-8350-6667414ffafd",
          name: "External Repair",
          super: {},
        },
      },
    },
  },
  {
    _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1",
    id: "0002",
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
];

export function getTickets() {
  return tickets.filter((t) => t);
}
