export const unitOwners = [
  {
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
  {
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
  {
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
];

export function getUnitOwners() {
  return unitOwners.filter((o) => o);
}
