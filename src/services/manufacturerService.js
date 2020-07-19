export const manufacturers = [
  { _id: "e549fdaa-a0b5-42f0-acc0-4baea7b8ecd6", name: "Powervision" },
  { _id: "1dc3b79b-5a0d-4e7f-8a81-fec58151b9d1", name: "Roborock" },
];

export function getManufacturers() {
  return manufacturers.filter((m) => m);
}
