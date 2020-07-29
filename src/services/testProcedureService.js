export const testProcedures = [
  {
    _id: "8ab370f6-9788-4dd8-b10f-9c449027ddbb",
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
    procedure: [
      {
        _id: "c4c13623-b196-4478-8255-d1719cbc7620",
        name: "Check for Missing Parts and/or Scratches",
        procedure:
          "If there is scratch/dirty part on the surface, clean it with plastic cleaner or little bit of alcohol",
        time: "1 to 3 mins",
      },
      {
        _id: "b4ecf820-22d0-4139-a385-06f4839f5ee9",
        name: "Check appearance of the Battery and charge battery",
        procedure:
          "If there is any abnormal appearance, don’t test with that battery",
        time: "40 mins",
      },
      {
        _id: "0718c6c1-33c6-4c43-a93e-039b588deabc",
        name: "All Led lights on drone working properly",
        procedure:
          "Make sure the top power light as well as the 4 arm lights are lighting up properly",
        time: "<1 min",
      },
      {
        _id: "36b812db-2cbe-4808-bfc1-4be38244be19",
        name: "Landing Gear Open/Close",
        procedure:
          "If gear cannot open/close, DON'T fly the drone. Just use the app to confirm the camera is feeding and self-test is normal",
        time: "1 min",
      },
      {
        _id: "728127c6-d014-4167-8450-68938d92c654",
        name: "Base Station - Controller - Drone link",
        procedure:
          "If connection fails, follow procedure to re-bind the base station with drone",
        time: "1 min",
      },
      {
        _id: "9ee1cb93-29b7-4b97-9c5c-227d96c26e42",
        name: "Connect PC to drone and temp activation",
        procedure:
          "If applicable, connect the drone to the computer and use the temp activate tool to activate the drone",
        time: "1 min",
      },
      {
        _id: "e90f2677-922c-456d-af1e-53e8e9887a20",
        name: "Connect phone to drone",
        procedure: "Make sure that the PC is disconnected from the drone",
        time: "1 min",
      },
      {
        _id: "59432918-41b7-4b72-b27f-e4b8f3d5d62e",
        name: "Selft-testing for All Sensors",
        procedure:
          "Record any sensor(s) that are not working. If any sensor isn't working, do not proceed",
        time: "1 min",
      },
      {
        _id: "55e92eb1-ba36-467e-bed3-d806a466ecc4",
        name: "Available FW updates",
        procedure: "Update the drones FW if applicable",
        time: "<5 mins",
      },
      {
        _id: "ec8eeee3-ea52-47e9-9498-8efc2eeeab94",
        name: "Set up outside",
        procedure:
          "Take drone outside, turn on, connect to drone, and get ready for flight",
        time: "5 mins",
      },
      {
        _id: "ec6c063d-2a77-45bc-894e-661f71b6d296",
        name: "Lock/Unlock",
        procedure: "Unlock the drone. This should be done in P mode.",
        time: "<1 min",
      },
      {
        _id: "42274d86-6300-4d39-b949-a5733970abb0",
        name: "Take off",
        procedure: "Take off. This should be done in P mode.",
        time: "<1 min",
      },
      {
        _id: "a9c2e18f-8a6d-46dd-b9f5-58529490f412",
        name: "Flight",
        procedure: "Verify flight capiblities. This should be done in P mode.",
        time: "<1 min",
      },
      {
        _id: "ad013c61-1f54-42eb-86cb-5686eb865b47",
        name: "Land",
        procedure: "Land the drone. This should be done in P mode.",
        time: "<1 min",
      },
      {
        _id: "122d0031-65b4-489f-8060-ca48f58b9294",
        name: "Auto Takeoff",
        procedure:
          "Use the auto takeoff function to takeoff. This should be done in N mode.",
        time: "1 min",
      },
      {
        _id: "9860e8b6-4717-46d0-b51d-6c29cf85cfe6",
        name: "Flight in N Mode",
        procedure: "Verify the unit can around while in N mode",
        time: "1 min",
      },
      {
        _id: "22a4d890-b276-4ed6-9156-c35dfa9f1303",
        name: "Flight in E Mode",
        procedure:
          "While in E mode, the unit can't enter the 10m-radius safe zone of the operator. If it is already inside when switching, there should be no effect on the contols",
        time: "1 min",
      },
      {
        _id: "98c779c2-9380-4ab9-8ef7-4ccb5a1e82b0",
        name: "Camera Performance and Gimbal operations",
        procedure:
          "Regularly Check the screen of camera feed. Take photos and videos during the flight.",
        time: "1 min",
      },
      {
        _id: "ee457148-c5c9-4135-a7de-705b2e5bcf5f",
        name: "Waypoints",
        procedure:
          "Verify the waypoint feature on the drone. This should be done in N mode.",
        time: "2 mins",
      },
      {
        _id: "a557da0e-5a77-40f5-ab03-c4e0ce1d5105",
        name: "Orbit mode",
        procedure:
          "Set a orbit raduis and direction and verify the orbit feature.",
        time: "2 mins",
      },
      {
        _id: "a3f745db-1e73-47bd-9355-c7dfd6f6cd34",
        name: "Follow-Me Mode",
        procedure:
          "Turn on follow me mode and verify its functionality by moving around.",
        time: "2 mins",
      },
      {
        _id: "f84e61cb-f2ba-4424-b1fc-c9fcfb9bd3b4",
        name: "Long range Test",
        procedure:
          "Fly the unit far from its homepoint and verify that it has acceptable signal and battery life.",
        time: "2 mins",
      },
      {
        _id: "d31a936e-e7ea-44d3-b879-4a51618eeecc",
        name: "Return to home",
        procedure: "Have the unit automatically return to home.",
        time: "2 mins",
      },
      {
        _id: "efae3c2d-33b8-48d0-89cb-f9ab29a1cde6",
        name: "Mastro",
        procedure: "Connect the maestro and verify its functionality",
        time: "2 mins",
      },
      {
        _id: "6a7e7299-1891-4331-b325-9934e40df43e",
        name: "Auto landing",
        procedure:
          "Land the drone using auto landing. This should be done in N Mode",
        time: "1 min",
      },
      {
        _id: "39fb00df-3d6e-4135-b9c5-cb693f5d1064",
        name: "Check saved photos and videos",
        procedure:
          "Check all photos and videos taken to make sure both the gimbal and camera are functional.",
        time: "2 to 3 mins",
      },

      {
        _id: "b5fafd55-8ac5-4718-9f01-60d11527cd1b",
        name: "Admin De-activate",
        procedure: "Deactivate the drone on the PC using the activation tool.",
        time: "1",
      },
      {
        _id: "e7ed353e-9709-4424-913a-11afdcac6b82",
        name: "Boxing",
        procedure: "Clean and wipe down drone.",
        time: "5 mins",
      },
    ],
  },
];

export function getTestProcedures() {
  return testProcedures.filter((m) => m);
}

export function getTestProcedureByUnitTypeId(id) {
  return testProcedures.filter(
    (procedure) => procedure.unitTypes.filter((type) => type._id === id)[0]
  )[0];
}
