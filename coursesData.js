/**
 * WSU VSCEB Course Catalog
 */

const COURSE_CATALOG = [
  {
    "code": "BIO ENG 140",
    "name": "Introduction to Bioengineering",
    "credits": 1,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          4
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "SEH 210"
      }
    ]
  },
  {
    "code": "BIO ENG 201",
    "name": "Chemical Process Principles and Calculations",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "WEGN G0001"
      }
    ]
  },
  {
    "code": "BIO ENG 210",
    "name": "Bioengineering Problem Solving",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "WEGN 205"
      }
    ]
  },
  {
    "code": "BIO ENG 305",
    "name": "Bioengineering Ethics and Professional Development",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "WEGN 205"
      }
    ]
  },
  {
    "code": "BIO ENG 310",
    "name": "Bioengineering Transport Phenomena",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "WEGN G070C"
      }
    ]
  },
  {
    "code": "BIO ENG 315",
    "name": "Thermodynamics and Kinetics in Biological Systems",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "13:20",
        "location": "WEGN 205"
      }
    ]
  },
  {
    "code": "BIO ENG 410",
    "name": "Bioengineering Capstone Project I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "meetings": [
          {
            "days": [
              1,
              3
            ],
            "startTime": "09:10",
            "endTime": "10:00",
            "location": "SEH 205"
          },
          {
            "days": [
              1,
              3
            ],
            "startTime": "10:10",
            "endTime": "11:25",
            "location": "SEH 205"
          }
        ]
      }
    ]
  },
  {
    "code": "BIO ENG 420",
    "name": "Mechanics of Biological Materials",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "14:55",
        "endTime": "16:10",
        "location": "WEGN 205"
      }
    ]
  },
  {
    "code": "BIO ENG 430",
    "name": "Bioinstrumentation",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "meetings": [
          {
            "days": [
              0,
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "WEGN 205"
          },
          {
            "days": [
              0
            ],
            "startTime": "15:10",
            "endTime": "18:00",
            "location": "WEGN 205"
          }
        ]
      }
    ]
  },
  {
    "code": "BIO ENG 475",
    "name": "Biochemical Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "13:20",
        "location": "WEGN G070C"
      }
    ]
  },
  {
    "code": "BIO ENG 476",
    "name": "Applied Molecular and Cellular Bioengineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "WLSH 4"
      }
    ]
  },
  {
    "code": "BIOLOGY 102",
    "name": "Exploring Biology",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "TODD 116"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST 166"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST 192"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST 166"
      },
      {
        "section": "04",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST 192"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST 166"
      },
      {
        "section": "06",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST 192"
      },
      {
        "section": "08",
        "days": [
          2
        ],
        "startTime": "12:10",
        "endTime": "15:00",
        "location": "EAST 166"
      },
      {
        "section": "10",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EAST 166"
      },
      {
        "section": "12",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST 166"
      },
      {
        "section": "13",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST 166"
      },
      {
        "section": "14",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST 166"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "BIOLOGY 105",
    "name": "Hands-on Biology: A Laboratory Experience",
    "credits": 4,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          3
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "EAST 166"
      }
    ]
  },
  {
    "code": "BIOLOGY 106",
    "name": "Introductory Biology: Organismal Biology",
    "credits": 4,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "TODD 116"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST G0088"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST G0082"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST G0088"
      },
      {
        "section": "04",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST G0082"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST G0088"
      },
      {
        "section": "06",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST G0082"
      },
      {
        "section": "07",
        "days": [
          1
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "EAST G0088"
      },
      {
        "section": "09",
        "days": [
          2
        ],
        "startTime": "12:10",
        "endTime": "15:00",
        "location": "EAST G0088"
      },
      {
        "section": "10",
        "days": [
          2
        ],
        "startTime": "12:10",
        "endTime": "15:00",
        "location": "EAST G0082"
      },
      {
        "section": "11",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EAST G0088"
      },
      {
        "section": "12",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EAST G0082"
      },
      {
        "section": "13",
        "days": [
          2
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "EAST G0088"
      },
      {
        "section": "14",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST G0088"
      },
      {
        "section": "15",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST G0082"
      },
      {
        "section": "16",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST G0088"
      },
      {
        "section": "17",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "EAST G0082"
      },
      {
        "section": "18",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST G0088"
      },
      {
        "section": "19",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST G0082"
      },
      {
        "section": "20",
        "days": [
          3
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "EAST G0088"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "BIOLOGY 107",
    "name": "Introductory Biology: Cell Biology and Genetics",
    "credits": 4,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "TODD 116"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "MCOY 152"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "MCOY 153"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "MCOY 152"
      },
      {
        "section": "04",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "MCOY 153"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "MCOY 152"
      },
      {
        "section": "06",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "MCOY 153"
      },
      {
        "section": "07",
        "days": [
          1
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "MCOY 152"
      },
      {
        "section": "08",
        "days": [
          1
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "MCOY 153"
      },
      {
        "section": "09",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "MCOY 152"
      },
      {
        "section": "10",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "MCOY 153"
      },
      {
        "section": "11",
        "days": [
          2
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "MCOY 152"
      },
      {
        "section": "12",
        "days": [
          2
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "MCOY 153"
      },
      {
        "section": "13",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "MCOY 152"
      },
      {
        "section": "14",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "MCOY 153"
      },
      {
        "section": "15",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "MCOY 152"
      },
      {
        "section": "16",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "MCOY 153"
      },
      {
        "section": "17",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "MCOY 152"
      },
      {
        "section": "18",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "MCOY 153"
      },
      {
        "section": "19",
        "days": [
          3
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "MCOY 152"
      },
      {
        "section": "20",
        "days": [
          3
        ],
        "startTime": "19:10",
        "endTime": "22:00",
        "location": "MCOY 153"
      },
      {
        "section": "21",
        "days": [
          4
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "MCOY 152"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "BIOLOGY 120",
    "name": "Biology of Plants",
    "credits": 4,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "CARP 102"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "EAST G0099"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST G0099"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "19:05",
        "endTime": "21:55",
        "location": "EAST G0099"
      },
      {
        "section": "04",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "EAST G0099"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "BIOLOGY 140",
    "name": "The Power of Food, The Science of Nutrition",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:45",
        "location": "TODD 116"
      }
    ]
  },
  {
    "code": "CHE 101",
    "name": "Overview of Chemical Engineering",
    "credits": 1,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          4
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "WEGN G0001"
      }
    ]
  },
  {
    "code": "CHE 201",
    "name": "Chemical Process Principles and Calculations",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "WEGN G0001"
      }
    ]
  },
  {
    "code": "CHE 211",
    "name": "Process Simulation",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "WEGN G070C"
      }
    ]
  },
  {
    "code": "CHE 301",
    "name": "Chemical Engineering Thermodynamics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "WEGN G0001"
      }
    ]
  },
  {
    "code": "CHE 310",
    "name": "Introduction to Transport Processes",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "CUE 219"
      }
    ]
  },
  {
    "code": "CE 211",
    "name": "Statics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SEH G0005"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "TODD 411"
      }
    ]
  },
  {
    "code": "CE 215",
    "name": "Mechanics of Materials",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SEH G0005"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SPRK 235"
      }
    ]
  },
  {
    "code": "CE 302",
    "name": "Introduction to Surveying",
    "credits": 1,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "CLEV 30"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "SLOA 235"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "SLOA 235"
      },
      {
        "section": "03",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "SLOA 235"
      },
      {
        "section": "04",
        "days": [
          2
        ],
        "startTime": "10:10",
        "endTime": "13:00",
        "location": "SLOA 235"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CE 315",
    "name": "Fluid Mechanics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SLOA 169"
      }
    ]
  },
  {
    "code": "CE 317",
    "name": "Geotechnical Engineering I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "COLL 125"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "16:45",
        "location": "PETB 315"
      },
      {
        "section": "02",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "17:00",
        "location": "PETB 315"
      },
      {
        "section": "03",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "16:45",
        "location": "PETB 315"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CE 322",
    "name": "Transportation Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "SLOA 167"
      }
    ]
  },
  {
    "code": "CE 330",
    "name": "Introduction to Structural Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:45",
        "location": "TODD 307"
      }
    ]
  },
  {
    "code": "CE 341",
    "name": "Introduction to Environmental Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SLOA 169"
      }
    ]
  },
  {
    "code": "CE 351",
    "name": "Water Resources Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SLOA 9"
      }
    ]
  },
  {
    "code": "ENGR 101",
    "name": "Engineering Fundamentals I",
    "credits": 1,
    "mode": "studio",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "SEH G0014"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SEH G0014"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SEH G0014"
      },
      {
        "section": "04",
        "days": [
          1,
          3
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SEH G0014"
      },
      {
        "section": "05",
        "days": [
          1,
          3
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "SEH G0014"
      },
      {
        "section": "06",
        "days": [
          1,
          3
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "SEH G0014"
      },
      {
        "section": "07",
        "days": [
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SEH 205"
      },
      {
        "section": "08",
        "days": [
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SEH 205"
      },
      {
        "section": "09",
        "days": [
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SEH 205"
      },
      {
        "section": "10",
        "days": [
          1,
          3
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "SEH 205"
      },
      {
        "section": "11",
        "days": [
          1,
          3
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SEH 205"
      },
      {
        "section": "12",
        "days": [
          1,
          3
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SEH 205"
      },
      {
        "section": "13",
        "days": [
          1,
          3
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "SEH 205"
      },
      {
        "section": "14",
        "days": [
          1,
          3
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "SEH 205"
      }
    ]
  },
  {
    "code": "ENGR 102",
    "name": "Engineering Fundamentals II",
    "credits": 1,
    "mode": "studio",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "SEH G0012"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SEH G0012"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SEH G0012"
      },
      {
        "section": "04",
        "days": [
          1,
          3
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "SEH G0012"
      },
      {
        "section": "05",
        "days": [
          1,
          3
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "SEH G0012"
      }
    ]
  },
  {
    "code": "ENGR 107",
    "name": "Introductory Mathematics for Engineering Applications",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SEH G0014"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "13:25",
        "endTime": "14:40",
        "location": "SEH G0012"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "ENGR 201",
    "name": "Metal Fabrication",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "ELB 2"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "13:10",
        "endTime": "16:00",
        "location": "ELB 59"
      }
    ],
    "labCredits": 2
  },
  {
    "code": "ME 116",
    "name": "Engineering Computer-aided Design and Visualization",
    "credits": 3,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "08:10",
        "endTime": "11:00",
        "location": "SLOA 249"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "SLOA 249"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "ETRL 249"
      },
      {
        "section": "04",
        "days": [
          1,
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "SLOA 249"
      }
    ]
  },
  {
    "code": "ME 212",
    "name": "Dynamics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SEH 210"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "ME 216",
    "name": "Integrated CAD Design",
    "credits": 3,
    "mode": "lab",
    "sections": [
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "08:10",
        "endTime": "11:00",
        "location": "ETRL 249"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "ETRL 249"
      }
    ]
  },
  {
    "code": "ME 220",
    "name": "Materials Laboratory",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "SEH G0005"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "07:45",
        "endTime": "10:35",
        "location": "SEH G0005"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "SEH G0005"
      },
      {
        "section": "03",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "SEH G0005"
      },
      {
        "section": "04",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "SEH G0005"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "SEH G0005"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "ME 301",
    "name": "Fundamentals of Thermodynamics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SEH G0005"
      }
    ]
  },
  {
    "code": "ME 303",
    "name": "Fluid Mechanics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "GTZN 21"
      }
    ]
  },
  {
    "code": "ME 304",
    "name": "Heat Transfer",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SLOA 175"
      }
    ]
  },
  {
    "code": "ME 306",
    "name": "Thermal and Fluids Laboratory",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "SLOA 175"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "ETRL 226"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "ETRL 226"
      },
      {
        "section": "03",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "ETRL 226"
      },
      {
        "section": "04",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "ETRL 226"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "08:10",
        "endTime": "11:00",
        "location": "ETRL 226"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "ME 312",
    "name": "Manufacturing Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SEH 105"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          2
        ],
        "startTime": "08:10",
        "endTime": "11:00",
        "location": "ETRL 25"
      },
      {
        "section": "02",
        "days": [
          0
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "ETRL 25"
      },
      {
        "section": "03",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "ETRL 25"
      },
      {
        "section": "04",
        "days": [
          3
        ],
        "startTime": "08:10",
        "endTime": "11:00",
        "location": "ETRL 25"
      },
      {
        "section": "05",
        "days": [
          4
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "ETRL 25"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "ME 313",
    "name": "Engineering Analysis",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "GTZN 21"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          2
        ],
        "startTime": "18:10",
        "endTime": "21:00",
        "location": "SLOA 249"
      },
      {
        "section": "02",
        "days": [
          3
        ],
        "startTime": "17:45",
        "endTime": "20:35",
        "location": "SLOA 249"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "ME 316",
    "name": "Mechanical Component Analysis and Design",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "ME 348",
    "name": "Dynamics Systems",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "TODD 130"
      }
    ]
  },
  {
    "code": "MSE 201",
    "name": "Materials Engineering Fundamentals",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "GTZN 21"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "CARP 102"
      }
    ]
  },
  {
    "code": "MSE 302",
    "name": "Electronic Materials",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SEH 210"
      }
    ]
  },
  {
    "code": "MSE 316",
    "name": "Thermodynamics and Kinetics of Materials",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SLOA 233"
      }
    ]
  },
  {
    "code": "MSE 318",
    "name": "Materials Design",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "14:55",
        "endTime": "16:10",
        "location": "SLOA 5"
      }
    ]
  },
  {
    "code": "MSE 320",
    "name": "Materials Structure - Properties Lab",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SLOA 150"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "ETRL 150"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "MSE 332",
    "name": "Polymeric Materials",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SLOA 150"
      }
    ]
  },
  {
    "code": "CPT_S 101",
    "name": "Introduction to Electrical Engineering and Computer Science",
    "credits": 1,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "15:10",
        "endTime": "16:00",
        "location": "SEH G0005"
      }
    ]
  },
  {
    "code": "CPT_S 111",
    "name": "Introduction to Computer Programming",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SEH 210"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          2
        ],
        "startTime": "17:10",
        "endTime": "20:00",
        "location": "EME 52"
      },
      {
        "section": "03",
        "days": [
          3
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 52"
      },
      {
        "section": "04",
        "days": [
          3
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 52"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CPT_S 121",
    "name": "Program Design and Development C/C++",
    "credits": 4,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SEH G0005"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SEH G0005"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "07:45",
        "endTime": "10:35",
        "location": "EME 120"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 120"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 120"
      },
      {
        "section": "04",
        "days": [
          1
        ],
        "startTime": "16:20",
        "endTime": "19:10",
        "location": "EME 120"
      },
      {
        "section": "05",
        "days": [
          2
        ],
        "startTime": "08:10",
        "endTime": "11:00",
        "location": "EME 120"
      },
      {
        "section": "07",
        "days": [
          2
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "EME 120"
      },
      {
        "section": "09",
        "days": [
          3
        ],
        "startTime": "07:45",
        "endTime": "10:35",
        "location": "EME 120"
      },
      {
        "section": "16",
        "days": [
          4
        ],
        "startTime": "17:10",
        "endTime": "20:00",
        "location": "EME 120"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CPT_S 122",
    "name": "Data Structures C/C++",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "SEH G0005"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "07:45",
        "endTime": "10:35",
        "location": "EME 128"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 128"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 128"
      },
      {
        "section": "05",
        "days": [
          3
        ],
        "startTime": "07:45",
        "endTime": "10:35",
        "location": "EME 128"
      },
      {
        "section": "06",
        "days": [
          3
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 128"
      },
      {
        "section": "07",
        "days": [
          3
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 128"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CPT_S 223",
    "name": "Advanced Data Structures C/C++",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "CPT_S 233",
    "name": "Advanced Data Structures Java",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "EME B0046"
      }
    ]
  },
  {
    "code": "CPT_S 260",
    "name": "Introduction to Computer Architecture",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "16:10",
        "endTime": "17:00",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "CPT_S 302",
    "name": "Professional Skills in Computing and Engineering",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:45",
        "location": "SEH G0005"
      }
    ]
  },
  {
    "code": "CPT_S 317",
    "name": "Automata and Formal Languages",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:50",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "CPT_S 321",
    "name": "Object-Oriented Software Principles",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "SEH 210"
      }
    ]
  },
  {
    "code": "CPT_S 322",
    "name": "Software Engineering Principles I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "CARP 102"
      }
    ]
  },
  {
    "code": "CPT_S 327",
    "name": "Fundamentals of Cyber Security and Cryptography",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "CLEV 30"
      }
    ]
  },
  {
    "code": "CPT_S 350",
    "name": "Design and Analysis of Algorithms",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "CPT_S 355",
    "name": "Programming Language Design",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "16:20",
        "endTime": "17:35",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "CPT_S 360",
    "name": "Systems Programming C/C++",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "E_E 214",
    "name": "Design of Logic Circuits",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "CARP 102"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "11:10",
        "endTime": "14:00",
        "location": "EME 56"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 56"
      },
      {
        "section": "03",
        "days": [
          2
        ],
        "startTime": "11:10",
        "endTime": "14:00",
        "location": "EME 56"
      },
      {
        "section": "04",
        "days": [
          3
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 56"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "E_E 234",
    "name": "Microprocessor Systems",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SLOA 9"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 56"
      },
      {
        "section": "02",
        "days": [
          3
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 56"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "E_E 261",
    "name": "Electrical Circuits I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "SEH 105"
      }
    ]
  },
  {
    "code": "E_E 262",
    "name": "Electrical Circuits Laboratory I",
    "credits": 1,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EME 34"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "07:45",
        "endTime": "10:35",
        "location": "EME 34"
      },
      {
        "section": "03",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EME 34"
      },
      {
        "section": "05",
        "days": [
          4
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EME 34"
      }
    ]
  },
  {
    "code": "E_E 311",
    "name": "Electronics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SLOA 9"
      }
    ]
  },
  {
    "code": "E_E 321",
    "name": "Electrical Circuits II",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SLOA 46"
      }
    ]
  },
  {
    "code": "E_E 324",
    "name": "Fundamentals of Digital Systems",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SLOA 5"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "EME 56"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "E_E 331",
    "name": "Electromagnetic Fields and Waves",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SLOA 46"
      }
    ]
  },
  {
    "code": "E_E 341",
    "name": "Signals and Systems",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "SLOA 163"
      }
    ]
  },
  {
    "code": "E_E 352",
    "name": "Electrical Engineering Laboratory I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SLOA 46"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "13:25",
        "location": "EME 34"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "16:20",
        "location": "EME 34"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "E_E 361",
    "name": "Electrical Power Systems",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "SLOA 163"
      }
    ]
  },
  {
    "code": "MATH 106",
    "name": "College Algebra",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "COLL 125"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "TODD 413"
      },
      {
        "section": "03",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "SPRK 323"
      },
      {
        "section": "04",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SPRK 327"
      }
    ]
  },
  {
    "code": "MATH 108",
    "name": "Trigonometry",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:20",
        "location": "WEBS 11"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SLOA 169"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "12:55",
        "location": "SLOA 175"
      },
      {
        "section": "06",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:20",
        "location": "JANX C0105"
      },
      {
        "section": "07",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:25",
        "location": "WEBS 17"
      }
    ]
  },
  {
    "code": "MATH 110",
    "name": "Mathematics Acceleration",
    "credits": 1,
    "mode": "lecture",
    "sections": [
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "10:35",
        "endTime": "11:25",
        "location": "CUE 416"
      }
    ]
  },
  {
    "code": "MATH 171",
    "name": "Calculus I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "SPRK G0045"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "CUE 203"
      },
      {
        "section": "03",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "CUE 203"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          0,
          2
        ],
        "startTime": "17:10",
        "endTime": "18:25",
        "location": "NEIL 101W"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "TODD 303"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "16:20",
        "endTime": "17:35",
        "location": "CUE 416"
      },
      {
        "section": "04",
        "days": [
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:25",
        "location": "WEBS B0012"
      },
      {
        "section": "05",
        "days": [
          2,
          4
        ],
        "startTime": "15:45",
        "endTime": "17:00",
        "location": "COLL 135"
      },
      {
        "section": "06",
        "days": [
          1,
          3
        ],
        "startTime": "14:55",
        "endTime": "16:10",
        "location": "TODD 226"
      },
      {
        "section": "07",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:45",
        "location": "SLOA 167"
      },
      {
        "section": "08",
        "days": [
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "DAGG 232"
      },
      {
        "section": "09",
        "days": [
          2,
          4
        ],
        "startTime": "07:45",
        "endTime": "09:00",
        "location": "COLL 135"
      },
      {
        "section": "10",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "13:20",
        "location": "COLL 135"
      },
      {
        "section": "11",
        "days": [
          0,
          2
        ],
        "startTime": "17:10",
        "endTime": "18:25",
        "location": "TODD 220"
      },
      {
        "section": "12",
        "days": [
          1,
          3
        ],
        "startTime": "17:45",
        "endTime": "19:00",
        "location": "TODD 234"
      },
      {
        "section": "13",
        "days": [
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:25",
        "location": "SLOA 167"
      },
      {
        "section": "14",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:50",
        "location": "SLOA 5"
      },
      {
        "section": "15",
        "days": [
          1,
          3
        ],
        "startTime": "07:45",
        "endTime": "09:00",
        "location": "TODD 301"
      },
      {
        "section": "16",
        "days": [
          2,
          4
        ],
        "startTime": "12:45",
        "endTime": "14:00",
        "location": "TODD 411"
      },
      {
        "section": "17",
        "days": [
          0,
          2
        ],
        "startTime": "10:10",
        "endTime": "11:25",
        "location": "NEIL 101W"
      },
      {
        "section": "18",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:45",
        "location": "TODD 234"
      },
      {
        "section": "20",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "NEIL 101W"
      },
      {
        "section": "21",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:50",
        "location": "NEIL 101W"
      },
      {
        "section": "22",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "13:20",
        "location": "NEIL 101W"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "MATH 172",
    "name": "Calculus II",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "TDAD 276"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "TDAD 276"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "07:45",
        "endTime": "09:00",
        "location": "NEIL 101W"
      },
      {
        "section": "02",
        "days": [
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:25",
        "location": "TODD 234"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "CUE 418"
      },
      {
        "section": "04",
        "days": [
          2,
          4
        ],
        "startTime": "12:45",
        "endTime": "14:00",
        "location": "SPRK 223"
      },
      {
        "section": "05",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:45",
        "location": "CUE 409"
      },
      {
        "section": "06",
        "days": [
          2,
          4
        ],
        "startTime": "15:45",
        "endTime": "17:00",
        "location": "TODD 411"
      },
      {
        "section": "07",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:50",
        "location": "FLMA 150"
      },
      {
        "section": "08",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "13:20",
        "location": "CUE 209"
      },
      {
        "section": "09",
        "days": [
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "TODD 220"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "MATH 182",
    "name": "Honors Calculus II",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "FLMA 150"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:25",
        "location": "WEBS B0008"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "MATH 216",
    "name": "Discrete Structures",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SPRK 335"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "TODD 334"
      },
      {
        "section": "03",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "TODD 334"
      }
    ]
  },
  {
    "code": "MATH 220",
    "name": "Introductory Linear Algebra",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:25",
        "location": "SPRK G0010"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:20",
        "location": "SLOA 169"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "12:55",
        "location": "SPRK 323"
      },
      {
        "section": "04",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "SPRK 339"
      }
    ]
  },
  {
    "code": "MATH 273",
    "name": "Calculus III",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "FULM 201"
      },
      {
        "section": "02",
        "days": [
          1,
          3
        ],
        "startTime": "13:30",
        "endTime": "14:20",
        "location": "WEBS 17"
      },
      {
        "section": "03",
        "days": [
          1,
          3
        ],
        "startTime": "12:05",
        "endTime": "12:55",
        "location": "FULM 201"
      },
      {
        "section": "04",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:25",
        "location": "FULM 201"
      }
    ]
  },
  {
    "code": "MATH 300",
    "name": "Mathematical Computing",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "SPRK 335"
      }
    ]
  },
  {
    "code": "MATH 301",
    "name": "Introduction to Mathematical Reasoning",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:50",
        "location": "WEBS 11"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "CUE 316"
      }
    ]
  },
  {
    "code": "MATH 315",
    "name": "Differential Equations",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "TODD 413"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "TODD 311"
      },
      {
        "section": "03",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "TODD 320"
      },
      {
        "section": "04",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "JANX C0105"
      },
      {
        "section": "05",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "JANX C0105"
      }
    ]
  },
  {
    "code": "MATH 364",
    "name": "Principles of Optimization",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "10:35",
        "endTime": "11:50",
        "location": "TODD 234"
      }
    ]
  },
  {
    "code": "PHYSICS 201",
    "name": "Physics for Scientists and Engineers I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "meetings": [
          {
            "days": [
              0,
              2,
              4
            ],
            "startTime": "12:10",
            "endTime": "13:00",
            "location": "WEBS 16"
          },
          {
            "days": [
              4
            ],
            "startTime": "15:10",
            "endTime": "16:25",
            "location": "WEBS 16"
          }
        ]
      },
      {
        "section": "02",
        "meetings": [
          {
            "days": [
              0,
              2,
              4
            ],
            "startTime": "09:10",
            "endTime": "10:00",
            "location": "WEBS 16"
          },
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "16:10",
            "location": "WEBS 16"
          }
        ]
      },
      {
        "section": "03",
        "meetings": [
          {
            "days": [
              0,
              2,
              4
            ],
            "startTime": "12:10",
            "endTime": "13:00",
            "location": "WEBS 16"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "16:25",
            "location": "WEBS 16"
          }
        ]
      },
      {
        "section": "04",
        "meetings": [
          {
            "days": [
              0,
              2,
              4
            ],
            "startTime": "09:10",
            "endTime": "10:00",
            "location": "WEBS 16"
          },
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "16:10",
            "location": "WEBS 16"
          }
        ]
      }
    ]
  },
  {
    "code": "PHYSICS 202",
    "name": "Physics for Scientists and Engineers II",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "14:55",
        "endTime": "16:10",
        "location": "WEBS 16"
      }
    ]
  },
  {
    "code": "PHYSICS 205",
    "name": "Physics for Scientists and Engineers I - Honors",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "WEBS 11"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "17:45",
        "endTime": "20:25",
        "location": "WEBS 422"
      }
    ],
    "labCredits": 2
  },
  {
    "code": "PHYSICS 206",
    "name": "Physics for Scientists and Engineers II - Honors",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "WEBS 11"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "17:45",
        "endTime": "20:25",
        "location": "WEBS 441"
      }
    ],
    "labCredits": 2
  },
  {
    "code": "PHYSICS 211",
    "name": "Physics Lab for Scientists and Engineers",
    "credits": 1,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "11:50",
        "location": "WEBS 432"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:45",
        "location": "WEBS 432"
      },
      {
        "section": "04",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:45",
        "location": "WEBS 422"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:35",
        "location": "WEBS 432"
      },
      {
        "section": "09",
        "days": [
          2
        ],
        "startTime": "09:10",
        "endTime": "11:50",
        "location": "WEBS 432"
      },
      {
        "section": "11",
        "days": [
          2
        ],
        "startTime": "12:10",
        "endTime": "15:00",
        "location": "WEBS 432"
      },
      {
        "section": "13",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "WEBS 432"
      },
      {
        "section": "14",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "WEBS 422"
      },
      {
        "section": "16",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "11:50",
        "location": "WEBS 422"
      },
      {
        "section": "20",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "WEBS 422"
      },
      {
        "section": "21",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:35",
        "location": "WEBS 432"
      }
    ]
  },
  {
    "code": "PHYSICS 212",
    "name": "Physics Lab for Scientists and Engineers II",
    "credits": 1,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "11:50",
        "location": "WEBS 441"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "12:05",
        "endTime": "14:45",
        "location": "WEBS 441"
      },
      {
        "section": "04",
        "days": [
          2
        ],
        "startTime": "12:10",
        "endTime": "15:00",
        "location": "WEBS 449"
      },
      {
        "section": "05",
        "days": [
          2
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "WEBS 441"
      },
      {
        "section": "06",
        "days": [
          2
        ],
        "startTime": "12:10",
        "endTime": "15:00",
        "location": "WEBS 441"
      },
      {
        "section": "07",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "18:00",
        "location": "WEBS 441"
      },
      {
        "section": "09",
        "days": [
          3
        ],
        "startTime": "09:10",
        "endTime": "11:50",
        "location": "WEBS 441"
      },
      {
        "section": "10",
        "days": [
          3
        ],
        "startTime": "12:05",
        "endTime": "14:55",
        "location": "WEBS 441"
      }
    ]
  },
  {
    "code": "PHYSICS 303",
    "name": "Modern Physics I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "WEBS 11"
      }
    ]
  },
  {
    "code": "PHYSICS 320",
    "name": "Mechanics",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "WEBS 941"
      }
    ]
  },
  {
    "code": "PHYSICS 322",
    "name": "Sound Waves and Music",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "WEBS B0012"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "16:10",
        "endTime": "19:00",
        "location": "WEBS 249"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "PHYSICS 341",
    "name": "Electricity and Magnetism I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "WEBS 11"
      }
    ]
  },
  {
    "code": "CHEM 101",
    "name": "Introduction to Chemistry",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "09:10",
        "endTime": "10:00",
        "location": "FLMA 226"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "14:10",
        "endTime": "15:00",
        "location": "FLMA 226"
      }
    ],
    "labs": [
      {
        "section": "01",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "08:10",
            "endTime": "09:00",
            "location": "FLMA 225"
          },
          {
            "days": [
              1
            ],
            "startTime": "09:10",
            "endTime": "11:00",
            "location": "FLMA 225"
          }
        ]
      },
      {
        "section": "02",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "COLL 135"
          },
          {
            "days": [
              1
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "COLL 135"
          }
        ]
      },
      {
        "section": "03",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "FLMA 225"
          },
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "FLMA 225"
          }
        ]
      },
      {
        "section": "04",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "17:45",
            "endTime": "18:35",
            "location": "TODD 304"
          },
          {
            "days": [
              1
            ],
            "startTime": "18:45",
            "endTime": "20:35",
            "location": "TODD 304"
          }
        ]
      },
      {
        "section": "05",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "CUE 412"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "17:00",
            "location": "CUE 412"
          }
        ]
      },
      {
        "section": "06",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "18:00",
            "location": "CUE 407"
          },
          {
            "days": [
              2
            ],
            "startTime": "18:10",
            "endTime": "20:00",
            "location": "CUE 407"
          }
        ]
      },
      {
        "section": "07",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "CUE 407"
          },
          {
            "days": [
              3
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "CUE 407"
          }
        ]
      },
      {
        "section": "08",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "COLL 135"
          },
          {
            "days": [
              3
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "COLL 135"
          }
        ]
      },
      {
        "section": "09",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "CUE 412"
          },
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "CUE 412"
          }
        ]
      },
      {
        "section": "12",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "TROY G0005"
          },
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "TROY G0005"
          }
        ]
      },
      {
        "section": "13",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "17:45",
            "endTime": "18:35",
            "location": "TODD 211"
          },
          {
            "days": [
              1
            ],
            "startTime": "18:45",
            "endTime": "20:35",
            "location": "TODD 211"
          }
        ]
      },
      {
        "section": "14",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "CUE 216"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "17:00",
            "location": "CUE 216"
          }
        ]
      },
      {
        "section": "15",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "18:00",
            "location": "CUE 416"
          },
          {
            "days": [
              2
            ],
            "startTime": "18:10",
            "endTime": "20:00",
            "location": "CUE 416"
          }
        ]
      },
      {
        "section": "18",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "SLOA 163"
          },
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "SLOA 163"
          }
        ]
      },
      {
        "section": "19",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "CUE 409"
          },
          {
            "days": [
              1
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "CUE 409"
          }
        ]
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CHEM 103",
    "name": "Concepts in Chemistry",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "FLMA 226"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "15:10",
        "endTime": "17:00",
        "location": "WEBS B0008"
      },
      {
        "section": "02",
        "days": [
          0
        ],
        "startTime": "15:10",
        "endTime": "17:00",
        "location": "TODD 202"
      },
      {
        "section": "03",
        "days": [
          0
        ],
        "startTime": "16:10",
        "endTime": "18:00",
        "location": "CUE 216"
      },
      {
        "section": "05",
        "days": [
          1
        ],
        "startTime": "13:30",
        "endTime": "15:20",
        "location": "MURR 229"
      },
      {
        "section": "06",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "16:45",
        "location": "CUE 216"
      },
      {
        "section": "07",
        "days": [
          3
        ],
        "startTime": "16:20",
        "endTime": "18:10",
        "location": "TODD 202"
      },
      {
        "section": "08",
        "days": [
          1
        ],
        "startTime": "16:20",
        "endTime": "18:10",
        "location": "WEBS B0008"
      },
      {
        "section": "09",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "17:00",
        "location": "CUE 412"
      },
      {
        "section": "10",
        "days": [
          2
        ],
        "startTime": "16:10",
        "endTime": "18:00",
        "location": "CUE 218"
      },
      {
        "section": "12",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "16:45",
        "location": "WEBS B0008"
      },
      {
        "section": "13",
        "days": [
          3
        ],
        "startTime": "16:20",
        "endTime": "18:10",
        "location": "TODD 304"
      },
      {
        "section": "16",
        "days": [
          0
        ],
        "startTime": "17:10",
        "endTime": "19:00",
        "location": "CUE 218"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CHEM 105",
    "name": "Principles of Chemistry I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "08:10",
        "endTime": "09:00",
        "location": "FLMA 226"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "FLMA 226"
      }
    ],
    "labs": [
      {
        "section": "01",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "08:45",
            "endTime": "09:35",
            "location": "AVER 8"
          },
          {
            "days": [
              1
            ],
            "startTime": "09:45",
            "endTime": "11:35",
            "location": "AVER 8"
          }
        ]
      },
      {
        "section": "02",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "08:45",
            "endTime": "09:35",
            "location": "CUE 216"
          },
          {
            "days": [
              1
            ],
            "startTime": "09:45",
            "endTime": "11:35",
            "location": "CUE 216"
          }
        ]
      },
      {
        "section": "03",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "08:45",
            "endTime": "09:35",
            "location": "CUE 412"
          },
          {
            "days": [
              1
            ],
            "startTime": "09:45",
            "endTime": "11:35",
            "location": "CUE 412"
          }
        ]
      },
      {
        "section": "04",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "FLMA 225"
          },
          {
            "days": [
              1
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "FLMA 225"
          }
        ]
      },
      {
        "section": "05",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "WEBS B0012"
          },
          {
            "days": [
              1
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "WEBS B0012"
          }
        ]
      },
      {
        "section": "06",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "AVER 12"
          },
          {
            "days": [
              1
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "AVER 12"
          }
        ]
      },
      {
        "section": "07",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "CUE 407"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "17:00",
            "location": "CUE 407"
          }
        ]
      },
      {
        "section": "08",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "MURR 242"
          },
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "MURR 242"
          }
        ]
      },
      {
        "section": "09",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "CUE 412"
          },
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "CUE 412"
          }
        ]
      },
      {
        "section": "10",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "AVER 8"
          },
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "AVER 8"
          }
        ]
      },
      {
        "section": "11",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "18:00",
            "location": "TODD 211"
          },
          {
            "days": [
              2
            ],
            "startTime": "18:10",
            "endTime": "20:00",
            "location": "TODD 211"
          }
        ]
      },
      {
        "section": "12",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "17:45",
            "endTime": "18:35",
            "location": "TODD 202"
          },
          {
            "days": [
              1
            ],
            "startTime": "18:45",
            "endTime": "20:35",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "13",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "17:45",
            "endTime": "18:35",
            "location": "FLMA 150"
          },
          {
            "days": [
              1
            ],
            "startTime": "18:45",
            "endTime": "20:35",
            "location": "FLMA 150"
          }
        ]
      },
      {
        "section": "14",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "17:45",
            "endTime": "18:35",
            "location": "CUE 216"
          },
          {
            "days": [
              1
            ],
            "startTime": "18:45",
            "endTime": "20:35",
            "location": "CUE 216"
          }
        ]
      },
      {
        "section": "15",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "AVER 104"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "17:00",
            "location": "AVER 104"
          }
        ]
      },
      {
        "section": "16",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "AVER 102"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "17:00",
            "location": "AVER 102"
          }
        ]
      },
      {
        "section": "17",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "18:00",
            "location": "TODD 304"
          },
          {
            "days": [
              2
            ],
            "startTime": "18:10",
            "endTime": "20:00",
            "location": "TODD 304"
          }
        ]
      },
      {
        "section": "19",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "08:45",
            "endTime": "09:35",
            "location": "BRYN 406"
          },
          {
            "days": [
              3
            ],
            "startTime": "09:45",
            "endTime": "11:35",
            "location": "BRYN 406"
          }
        ]
      },
      {
        "section": "20",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "08:45",
            "endTime": "09:35",
            "location": "TODD 202"
          },
          {
            "days": [
              3
            ],
            "startTime": "09:45",
            "endTime": "11:35",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "21",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "08:45",
            "endTime": "09:35",
            "location": "CUE 409"
          },
          {
            "days": [
              3
            ],
            "startTime": "09:45",
            "endTime": "11:35",
            "location": "CUE 409"
          }
        ]
      },
      {
        "section": "22",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "FLMA 225"
          },
          {
            "days": [
              3
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "FLMA 225"
          }
        ]
      },
      {
        "section": "23",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "FLMA 438"
          },
          {
            "days": [
              3
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "FLMA 438"
          }
        ]
      },
      {
        "section": "24",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "11:00",
            "endTime": "11:50",
            "location": "FLMA 150"
          },
          {
            "days": [
              3
            ],
            "startTime": "12:00",
            "endTime": "13:50",
            "location": "FLMA 150"
          }
        ]
      },
      {
        "section": "25",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "SLOA 167"
          },
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "SLOA 167"
          }
        ]
      },
      {
        "section": "26",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "AVER 8"
          },
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "AVER 8"
          }
        ]
      },
      {
        "section": "27",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "13:55",
            "endTime": "14:45",
            "location": "FLMA 150"
          },
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "16:45",
            "location": "FLMA 150"
          }
        ]
      },
      {
        "section": "28",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "10:10",
            "endTime": "11:00",
            "location": "FLMA 150"
          },
          {
            "days": [
              2
            ],
            "startTime": "11:10",
            "endTime": "13:00",
            "location": "FLMA 150"
          }
        ]
      },
      {
        "section": "29",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "10:10",
            "endTime": "11:00",
            "location": "CUE 209"
          },
          {
            "days": [
              2
            ],
            "startTime": "11:10",
            "endTime": "13:00",
            "location": "CUE 209"
          }
        ]
      },
      {
        "section": "40",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "08:10",
            "endTime": "09:00",
            "location": "TODD 202"
          },
          {
            "days": [
              1
            ],
            "startTime": "09:10",
            "endTime": "11:00",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "41",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "18:00",
            "location": "AVER 102"
          },
          {
            "days": [
              2
            ],
            "startTime": "18:10",
            "endTime": "20:00",
            "location": "AVER 102"
          }
        ]
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CHEM 106",
    "name": "Principles of Chemistry II",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "FLMA 226"
      }
    ],
    "labs": [
      {
        "section": "01",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "08:10",
            "endTime": "09:00",
            "location": "TODD 304"
          },
          {
            "days": [
              1
            ],
            "startTime": "09:10",
            "endTime": "11:00",
            "location": "TODD 304"
          }
        ]
      },
      {
        "section": "02",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "10:35",
            "endTime": "11:25",
            "location": "CUE 407"
          },
          {
            "days": [
              1
            ],
            "startTime": "11:35",
            "endTime": "13:20",
            "location": "CUE 407"
          }
        ]
      },
      {
        "section": "03",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "12:30",
            "endTime": "13:20",
            "location": "TODD 202"
          },
          {
            "days": [
              1
            ],
            "startTime": "13:30",
            "endTime": "15:20",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "04",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "14:55",
            "endTime": "15:45",
            "location": "TODD 211"
          },
          {
            "days": [
              1
            ],
            "startTime": "15:55",
            "endTime": "18:10",
            "location": "TODD 211"
          }
        ]
      },
      {
        "section": "05",
        "meetings": [
          {
            "days": [
              1
            ],
            "startTime": "17:20",
            "endTime": "18:10",
            "location": "COLL 235"
          },
          {
            "days": [
              1
            ],
            "startTime": "18:20",
            "endTime": "20:10",
            "location": "COLL 235"
          }
        ]
      },
      {
        "section": "06",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "14:10",
            "endTime": "15:00",
            "location": "TODD 202"
          },
          {
            "days": [
              2
            ],
            "startTime": "15:10",
            "endTime": "17:00",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "07",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "16:10",
            "endTime": "17:00",
            "location": "AVER 8"
          },
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "19:00",
            "location": "AVER 8"
          }
        ]
      },
      {
        "section": "08",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "18:10",
            "endTime": "19:00",
            "location": "TODD 304"
          },
          {
            "days": [
              2
            ],
            "startTime": "19:10",
            "endTime": "21:00",
            "location": "TODD 304"
          }
        ]
      },
      {
        "section": "09",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "08:10",
            "endTime": "09:00",
            "location": "CUE 218"
          },
          {
            "days": [
              3
            ],
            "startTime": "09:10",
            "endTime": "11:00",
            "location": "CUE 218"
          }
        ]
      },
      {
        "section": "10",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "10:35",
            "endTime": "11:25",
            "location": "AVER 12"
          },
          {
            "days": [
              3
            ],
            "startTime": "11:35",
            "endTime": "13:20",
            "location": "AVER 12"
          }
        ]
      },
      {
        "section": "11",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "12:30",
            "endTime": "13:20",
            "location": "TODD 202"
          },
          {
            "days": [
              3
            ],
            "startTime": "13:30",
            "endTime": "15:20",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "12",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "15:45",
            "location": "TODD 211"
          },
          {
            "days": [
              3
            ],
            "startTime": "15:55",
            "endTime": "18:10",
            "location": "TODD 211"
          }
        ]
      },
      {
        "section": "13",
        "meetings": [
          {
            "days": [
              3
            ],
            "startTime": "14:55",
            "endTime": "15:45",
            "location": "TODD 202"
          },
          {
            "days": [
              3
            ],
            "startTime": "15:55",
            "endTime": "18:10",
            "location": "TODD 202"
          }
        ]
      },
      {
        "section": "14",
        "meetings": [
          {
            "days": [
              2
            ],
            "startTime": "16:10",
            "endTime": "17:00",
            "location": "FLMA 225"
          },
          {
            "days": [
              2
            ],
            "startTime": "17:10",
            "endTime": "19:00",
            "location": "FLMA 225"
          }
        ]
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CHEM 161",
    "name": "Nuclear Reactor Operations I",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "16:20",
        "endTime": "18:10",
        "location": "DRF 150"
      }
    ]
  },
  {
    "code": "CHEM 220",
    "name": "Quantitative Analysis",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "12:10",
        "endTime": "13:00",
        "location": "FLMA 438"
      }
    ]
  },
  {
    "code": "CHEM 222",
    "name": "Quantitative Analysis Laboratory",
    "credits": 2,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "FULM 207"
      },
      {
        "section": "02",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "17:45",
        "location": "FULM 207"
      }
    ]
  },
  {
    "code": "CHEM 332",
    "name": "Physical Chemistry",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "10:10",
        "endTime": "11:00",
        "location": "FLMA 438"
      }
    ]
  },
  {
    "code": "CHEM 333",
    "name": "Physical Chemistry Laboratory for Chemists",
    "credits": 1,
    "mode": "lab",
    "sections": [
      {
        "section": "01",
        "days": [
          1
        ],
        "startTime": "09:10",
        "endTime": "12:00",
        "location": "FULM 218"
      }
    ]
  },
  {
    "code": "CHEM 345",
    "name": "Organic Chemistry I",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "11:10",
        "endTime": "12:00",
        "location": "FLMA 226"
      },
      {
        "section": "02",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "GTZN 21"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          0
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "FLMA 438"
      },
      {
        "section": "02",
        "days": [
          1
        ],
        "startTime": "12:50",
        "endTime": "15:45",
        "location": "FLMA 438"
      },
      {
        "section": "03",
        "days": [
          1
        ],
        "startTime": "08:30",
        "endTime": "11:25",
        "location": "FLMA 438"
      },
      {
        "section": "04",
        "days": [
          0
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "FLMA 438"
      },
      {
        "section": "05",
        "days": [
          3
        ],
        "startTime": "12:50",
        "endTime": "15:45",
        "location": "FLMA 438"
      },
      {
        "section": "06",
        "days": [
          2
        ],
        "startTime": "18:10",
        "endTime": "21:00",
        "location": "FLMA 438"
      },
      {
        "section": "07",
        "days": [
          1
        ],
        "startTime": "12:50",
        "endTime": "15:45",
        "location": "FLMA 438"
      },
      {
        "section": "08",
        "days": [
          1
        ],
        "startTime": "08:30",
        "endTime": "11:25",
        "location": "FLMA 438"
      },
      {
        "section": "09",
        "days": [
          3
        ],
        "startTime": "12:50",
        "endTime": "15:45",
        "location": "FLMA 438"
      },
      {
        "section": "10",
        "days": [
          2
        ],
        "startTime": "18:10",
        "endTime": "21:00",
        "location": "FLMA 438"
      },
      {
        "section": "11",
        "days": [
          2
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "FLMA 438"
      },
      {
        "section": "12",
        "days": [
          1
        ],
        "startTime": "12:50",
        "endTime": "15:45",
        "location": "FLMA 438"
      },
      {
        "section": "13",
        "days": [
          3
        ],
        "startTime": "12:50",
        "endTime": "15:45",
        "location": "FLMA 438"
      },
      {
        "section": "14",
        "days": [
          0
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "FLMA 438"
      },
      {
        "section": "15",
        "days": [
          2
        ],
        "startTime": "14:10",
        "endTime": "17:00",
        "location": "FLMA 438"
      },
      {
        "section": "16",
        "days": [
          2
        ],
        "startTime": "18:10",
        "endTime": "21:00",
        "location": "FULM 438"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CHEM 348",
    "name": "Organic Chemistry II and Problem Solving",
    "credits": 3,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          0,
          2,
          4
        ],
        "startTime": "13:10",
        "endTime": "14:00",
        "location": "TODD 216"
      }
    ],
    "labs": [
      {
        "section": "01",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "17:00",
        "location": "FULM 401"
      },
      {
        "section": "02",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "16:45",
        "location": "FULM 401"
      },
      {
        "section": "03",
        "days": [
          4
        ],
        "startTime": "10:10",
        "endTime": "12:00",
        "location": "FULM 401"
      },
      {
        "section": "04",
        "days": [
          2
        ],
        "startTime": "14:10",
        "endTime": "16:00",
        "location": "FULM 401"
      },
      {
        "section": "05",
        "days": [
          2
        ],
        "startTime": "15:10",
        "endTime": "17:00",
        "location": "FULM 401"
      },
      {
        "section": "06",
        "days": [
          2
        ],
        "startTime": "16:10",
        "endTime": "18:00",
        "location": "WEBS B0008"
      },
      {
        "section": "07",
        "days": [
          3
        ],
        "startTime": "13:30",
        "endTime": "15:20",
        "location": "FULM 401"
      },
      {
        "section": "08",
        "days": [
          4
        ],
        "startTime": "11:10",
        "endTime": "13:00",
        "location": "FULM 401"
      },
      {
        "section": "09",
        "days": [
          3
        ],
        "startTime": "14:55",
        "endTime": "16:45",
        "location": "CUE 216"
      },
      {
        "section": "10",
        "days": [
          2
        ],
        "startTime": "14:10",
        "endTime": "16:00",
        "location": "FULM 401"
      },
      {
        "section": "11",
        "days": [
          3
        ],
        "startTime": "13:30",
        "endTime": "15:20",
        "location": "FULM 401"
      }
    ],
    "labCredits": 1
  },
  {
    "code": "CHEM 361",
    "name": "Health Physics and Radiation Shielding",
    "credits": 2,
    "mode": "lecture",
    "sections": [
      {
        "section": "01",
        "days": [
          1,
          3
        ],
        "startTime": "07:45",
        "endTime": "09:00",
        "location": "DRF 150"
      }
    ]
  }
];
