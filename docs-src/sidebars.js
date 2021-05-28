module.exports = {
  docs: {
    "Annotell Auth": ["annotell-auth"],
    "Key Concepts": ["key_concepts"],
    "Input API": [
      "input-api/project",
      {"Inputs": [
        "input-api/overview",
        {"Input Types": [
          "input-api/inputs/cameras",
          "input-api/inputs/lidars_and_cameras",
          "input-api/inputs/cameras_seq",
          "input-api/inputs/lidars_and_cameras_seq"
        ]},
        "input-api/annotation_types",
        "input-api/usage",
      ]},
      "input-api/calibration",
      "input-api/error_handling",
      "input-api/FAQ",
      {
        "Supported File Formats": [
          "input-api/resources/pointclouds"
        ]
      }
    ],
  },
};
