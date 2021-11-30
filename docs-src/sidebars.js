module.exports = {
  docs: {
    "Annotell Auth": ["annotell-auth"],
    "Key Concepts": ["key_concepts"],
    "Input API": [
      "input-api/project",
      {"Inputs": [
        "input-api/overview",
        "input-api/annotation_types",
        {"Input Types": [
          "input-api/inputs/cameras",
          "input-api/inputs/lidars",
          "input-api/inputs/lidars_and_cameras",
          "input-api/inputs/cameras_seq",
          "input-api/inputs/lidars_seq",
          "input-api/inputs/lidars_and_cameras_seq"
        ]},
        "input-api/working_with_inputs",
      ]},
      "input-api/annotations",
      "input-api/calibration",
      "input-api/error_handling",
      "input-api/FAQ",
      {
        "Supported File Formats": [
          "input-api/resources/images",
          "input-api/resources/pointclouds"
        ]
      }
    ],
    "OpenLABEL": [
        "openlabel/openlabel-format",
        "openlabel/python-client"
    ]
  },
};
