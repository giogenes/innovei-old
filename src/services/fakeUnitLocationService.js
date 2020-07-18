export const unitLocations = [
  { _id: "1b0b1fe9-3a7f-41a9-88d9-8085cb85d970", name: "A Stock" },
  { _id: "e84cc278-d7ce-404f-99ad-d6d2d07be299", name: "B Stock" },
  { _id: "159bca70-4945-4e5d-bb81-79a3a75db460", name: "Pending Diagnosis" },
  { _id: "008185d8-0324-4627-b817-6e9dd17538e3", name: "Pending Repair" },
  { _id: "6eca5ae7-60ee-46aa-b91b-64348cca4b4b", name: "Pending Parts" },
  { _id: "b3c9b1b8-ca08-40d1-b4d8-0c39945d43be", name: "Pending Manufacturer" },
  { _id: "d8bea80d-c59f-4515-a12a-a67ffd23191f", name: "Pending Innovei" },
  { _id: "af706f34-c180-4829-b942-6981bd290510", name: "Pending Customer" },
  { _id: "40a712b1-8652-46c6-92f1-fd8706177443", name: "Under Diagnostics" },
  { _id: "966e0d82-6822-45cb-af9d-766edaeaa741", name: "Under Repair" },
  { _id: "b8f34d8a-ff32-4c5f-9f89-e0b3e2839489", name: "Repaired" },
];

export function getUnitLocations() {
  return unitLocations.filter((l) => l);
}
