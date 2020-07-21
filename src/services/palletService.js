export const pallets = [
  {
    _id: "e536d911-c90b-4f89-8ab8-8ed75fc20c4b",
    id: "INNPLLT072020001",
    desc: "A Stock PowerEggs",
    bay: 1,
  },
  {
    _id: "22cbc806-f4f6-4b26-a3c0-bbd19c1a4c0b",
    id: "INNPLLT072020002",
    desc: "A Stock PowerRay Wizards",
    bay: 2,
  },
  {
    _id: "40935ea6-495b-435b-898d-8ad2c3570bb3",
    id: "INNPLLT072020003",
    desc: "Gio's Tech Area",
    bay: 3,
  },
  {
    _id: "719ae29d-a204-4cf5-a5ec-ccf3e750ca09",
    id: "INNPLLT072020004",
    desc: "Eddie's Tech Area",
    bay: 4,
  },
];

export function getManufacturers() {
  return manufacturers.filter((m) => m);
}
