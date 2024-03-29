import { Level } from "src/types/Program";
export const levelsList: Level[] = [
  {
    cups: 2,
    startingBalls: {
      orange: 1,
    },

    program: [
      {
        _type: "swap",
        cups: [0, 1],
      },
      {
        _type: "swap",
        cups: [0, 1],
      },
    ],
    question: "orange",
  },
  {
    cups: 3,
    startingBalls: {
      orange: 2,
    },

    program: [
      {
        _type: "swap",
        cups: [0, 1],
      },
      {
        _type: "swap",
        cups: [2, 0],
      },
      {
        _type: "swap",
        cups: [1, 2],
      },
    ],
    question: "orange",
  },
  {
    cups: 3,
    startingBalls: {
      orange: 2,
    },

    program: [
      {
        _type: "swap",
        cups: [0, 1],
      },
      {
        _type: "swap",
        cups: [1, 2],
      },
      {
        _type: "swap",
        cups: [0, 2],
      },
      {
        _type: "swap",
        cups: [1, 2],
      },
    ],
    question: "orange",
  },
  {
    cups: 2,
    startingBalls: {
      orange: 1,
    },
    question: "orange",
    program: [
      {
        _type: "ifContainsBall",
        ballColor: "orange",
        otherwise: [],
        target: 1,
        then: [
          {
            _type: "swap",
            cups: [0, 1],
          },
        ],
      },
    ],
  },
  {
    cups: 3,
    startingBalls: {
      orange: 1,
    },
    question: "orange",
    program: [
      {
        _type: "ifContainsBall",
        ballColor: "orange",
        otherwise: [
          {
            _type: "swap",
            cups: [1, 2],
          },
        ],
        target: 0,
        then: [
          {
            _type: "swap",
            cups: [0, 1],
          },
        ],
      },
    ],
  },
  {
    cups: 3,
    startingBalls: {
      orange: 1,
    },

    program: [
      {
        _type: "swap",
        cups: [0, 1],
      },
      {
        _type: "ifContainsBall",
        ballColor: "orange",
        then: [
          {
            _type: "swap",
            cups: [1, 2],
          },
        ],
        otherwise: [
          {
            _type: "swap",
            cups: [0, 2],
          },
        ],
        target: 1,
      },
    ],
    question: "orange",
  },
  {
    cups: 3,
    startingBalls: {
      green: 1,
    },

    program: [
      {
        _type: "swap",
        cups: [0, 1],
      },
      {
        _type: "ifContainsBall",
        ballColor: "orange",
        then: [
          {
            _type: "swap",
            cups: [1, 2],
          },
        ],
        otherwise: [
          {
            _type: "swap",
            cups: [0, 2],
          },
        ],
        target: 0,
      },
    ],
    question: "green",
  },
  {
    cups: 4,
    startingBalls: {
      blue: 1,
    },

    program: [
      {
        _type: "ifContainsBall",
        ballColor: "blue",
        then: [
          {
            _type: "swap",
            cups: [1, 2],
          },
        ],
        otherwise: [
          {
            _type: "swap",
            cups: [3, 1],
          },
        ],
        target: 1,
      },
      {
        _type: "swap",
        cups: [2, 3],
      },
      {
        _type: "ifContainsBall",
        ballColor: "blue",
        then: [
          {
            _type: "swap",
            cups: [2, 0],
          },
        ],
        otherwise: [
          {
            _type: "swap",
            cups: [3, 2],
          },
        ],
        target: 2,
      },
    ],
    question: "blue",
  },

  {
    cups: 2,
    startingBalls: {
      cyan: 1,
    },

    program: [
      {
        _type: "repeat",
        times: 3,
        program: [
          {
            _type: "swap",
            cups: [0, 1],
          },
        ],
      },
    ],
    question: "cyan",
  },
  {
    cups: 3,
    startingBalls: {
      cyan: 1,
    },

    program: [
      {
        _type: "repeat",
        times: 3,
        program: [
          {
            _type: "swap",
            cups: [1, 2],
          },

          {
            _type: "swap",
            cups: [2, 0],
          },
          {
            _type: "swap",
            cups: [0, 1],
          },
        ],
      },
    ],
    question: "cyan",
  },
  {
    cups: 4,
    startingBalls: {
      orange: 3,
    },
    program: [
      {
        _type: "repeat",
        times: 4,
        program: [
          {
            _type: "ifContainsBall",
            ballColor: "orange",
            then: [
              {
                _type: "swap",
                cups: [1, 3],
              },
            ],
            otherwise: [
              {
                _type: "swap",
                cups: [2, 3],
              },
            ],
            target: 3,
          },
          {
            _type: "swap",
            cups: [0, 3],
          },
          {
            _type: "swap",
            cups: [2, 3],
          },
        ],
      },
    ],
    question: "orange",
  },
  {
    cups: 4,
    startingBalls: {
      blue: 3,
    },
    question: "blue",
    program: [
      {
        _type: "repeat",
        times: 3,
        program: [
          {
            _type: "ifContainsBall",
            ballColor: "blue",
            then: [
              {
                _type: "repeat",
                times: 2,
                program: [
                  {
                    _type: "swap",
                    cups: [1, 3],
                  },
                  {
                    _type: "swap",
                    cups: [2, 3],
                  },
                ],
              },
            ],
            otherwise: [
              {
                _type: "swap",
                cups: [1, 3],
              },
            ],
            target: 3,
          },
        ],
      },
    ],
  },
  {
    cups: 3,
    startingBalls: {
      orange: 1,
      blue: 0,
    },

    question: "orange",
    program: [
      {
        _type: "swap",
        cups: [0, 2],
      },
      {
        _type: "swap",
        cups: [1, 0],
      },
      {
        _type: "swap",
        cups: [2, 1],
      },
    ],
  },
  {
    cups: 3,
    startingBalls: {
      orange: 1,
      blue: 0,
    },
    question: "blue",

    program: [
      {
        _type: "repeat",
        times: 2,
        program: [
          {
            _type: "swap",
            cups: [0, 2],
          },
          {
            _type: "swap",
            cups: [1, 0],
          },
          {
            _type: "swap",
            cups: [2, 1],
          },
        ],
      },
    ],
  },
  {
    cups: 4,
    startingBalls: {
      green: 1,
      blue: 0,
    },
    question: "green",
    program: [
      {
        _type: "repeat",
        times: 3,
        program: [
          {
            _type: "ifContainsBall",
            ballColor: "blue",
            target: 0,
            then: [
              {
                _type: "swap",
                cups: [0, 1],
              },
            ],
            otherwise: [
              {
                _type: "swap",
                cups: [1, 2],
              },
            ],
          },
          {
            _type: "ifContainsBall",
            ballColor: "green",
            target: 0,
            then: [
              {
                _type: "swap",
                cups: [2, 3],
              },
            ],
            otherwise: [
              {
                _type: "swap",
                cups: [0, 3],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cups: 5,
    startingBalls: {
      orange: 1,
      cyan: 0,
    },
    question: "cyan",
    program: [
      {
        _type: "repeat",
        times: 5,
        program: [
          {
            _type: "ifContainsBall",
            ballColor: "cyan",
            target: 0,
            then: [
              {
                _type: "swap",
                cups: [0, 1],
              },
              {
                _type: "swap",
                cups: [1, 4],
              },
            ],
            otherwise: [
              {
                _type: "swap",
                cups: [0, 3],
              },
              {
                _type: "swap",
                cups: [1, 2],
              },
              {
                _type: "swap",
                cups: [0, 1],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cups: 10,
    startingBalls: {
      orange: 1,
      cyan: 0,
      blue: 3,
      green: 2,
    },
    question: "green",
    program: [
      {
        _type: "repeat",
        times: 2,
        program: [
          {
            _type: "swap",
            cups: [0, 1],
          },
          {
            _type: "swap",
            cups: [2, 3],
          },
          {
            _type: "swap",
            cups: [3, 5],
          },
          {
            _type: "swap",
            cups: [5, 2],
          },
          {
            _type: "swap",
            cups: [7, 9],
          },
          {
            _type: "swap",
            cups: [4, 7],
          },
          {
            _type: "swap",
            cups: [6, 4],
          },
          {
            _type: "swap",
            cups: [1, 6],
          },
          {
            _type: "swap",
            cups: [2, 0],
          },
        ],
      },
    ],
  },
  {
    cups: 5,
    startingBalls: {
      orange: 1,
      cyan: 0,
    },
    question: "cyan",
    program: [
      {
        _type: "repeat",
        times: 2,
        program: [
          {
            _type: "swap",
            cups: [2, 4],
          },
          {
            _type: "ifContainsBall",
            ballColor: "cyan",
            target: 0,
            then: [
              {
                _type: "repeat",
                times: 3,
                program: [
                  {
                    _type: "swap",
                    cups: [0, 3],
                  },
                ],
              },
            ],
            otherwise: [
              {
                _type: "repeat",
                times: 3,
                program: [
                  {
                    _type: "swap",
                    cups: [1, 4],
                  },
                ],
              },
            ],
          },
          {
            _type: "swap",
            cups: [0, 2],
          },
        ],
      },
    ],
  },
  {
    cups: 7,
    startingBalls: {
      orange: 3,
      cyan: 6,
    },
    question: "cyan",
    program: [
      {
        _type: "swap",
        cups: [1, 4],
      },
      {
        _type: "ifContainsBall",
        ballColor: "orange",
        target: 3,
        then: [
          {
            _type: "repeat",
            times: 2,
            program: [
              {
                _type: "swap",
                cups: [3, 6],
              },
              {
                _type: "ifContainsBall",
                ballColor: "cyan",
                target: 1,
                then: [
                  {
                    _type: "swap",
                    cups: [2, 5],
                  },
                  {
                    _type: "repeat",
                    times: 2,
                    program: [
                      {
                        _type: "swap",
                        cups: [0, 3],
                      },
                    ],
                  },
                ],
                otherwise: [
                  {
                    _type: "swap",
                    cups: [4, 6],
                  },
                ],
              },
            ],
          },
          {
            _type: "swap",
            cups: [2, 5],
          },
        ],
        otherwise: [],
      },
    ],
  },
  {
    cups: 5,
    startingBalls: {
      orange: 2,
      cyan: 4,
      green: 1,
    },
    question: "green",
    program: [
      {
        _type: "swap",
        cups: [1, 4],
      },
      {
        _type: "ifContainsBall",
        ballColor: "orange",
        target: 2,
        then: [
          {
            _type: "repeat",
            times: 2,
            program: [
              {
                _type: "swap",
                cups: [3, 4],
              },
              {
                _type: "ifContainsBall",
                ballColor: "green",
                target: 1,
                then: [
                  {
                    _type: "swap",
                    cups: [2, 3],
                  },
                  {
                    _type: "repeat",
                    times: 2,
                    program: [
                      {
                        _type: "swap",
                        cups: [0, 2],
                      },
                    ],
                  },
                ],
                otherwise: [
                  {
                    _type: "swap",
                    cups: [4, 2],
                  },
                ],
              },
            ],
          },
          {
            _type: "swap",
            cups: [2, 3],
          },
        ],
        otherwise: [],
      },
    ],
  },
  {
    cups: 6,
    startingBalls: {
      orange: 2,
      cyan: 1,
    },
    question: "orange",
    program: [
      {
        _type: "swap",
        cups: [1, 3],
      },
      {
        _type: "repeat",
        times: 2,
        program: [
          {
            _type: "swap",
            cups: [4, 5],
          },
          {
            _type: "ifContainsBall",
            ballColor: "orange",
            target: 2,
            then: [
              {
                _type: "swap",
                cups: [0, 2],
              },
              {
                _type: "repeat",
                times: 2,
                program: [
                  {
                    _type: "swap",
                    cups: [3, 4],
                  },
                ],
              },
            ],
            otherwise: [],
          },
          {
            _type: "swap",
            cups: [1, 2],
          },
        ],
      },
      {
        _type: "repeat",
        times: 3,
        program: [
          {
            _type: "swap",
            cups: [0, 5],
          },
        ],
      },
    ],
  },
  {
    cups: 7,
    startingBalls: {
      orange: 1,
      cyan: 2,
    },
    question: "cyan",
    program: [
      {
        _type: "swap",
        cups: [1, 4],
      },
      {
        _type: "ifContainsBall",
        ballColor: "cyan",
        target: 2,
        then: [
          {
            _type: "repeat",
            times: 2,
            program: [
              {
                _type: "swap",
                cups: [2, 5],
              },
              {
                _type: "ifContainsBall",
                ballColor: "cyan",
                target: 0,
                then: [
                  {
                    _type: "swap",
                    cups: [0, 3],
                  },
                  {
                    _type: "repeat",
                    times: 3,
                    program: [
                      {
                        _type: "swap",
                        cups: [4, 6],
                      },
                    ],
                  },
                ],
                otherwise: [],
              },
              {
                _type: "swap",
                cups: [1, 2],
              },
            ],
          },
          {
            _type: "swap",
            cups: [0, 3],
          },
        ],
        otherwise: [],
      },
      {
        _type: "repeat",
        times: 4,
        program: [
          {
            _type: "swap",
            cups: [2, 6],
          },
        ],
      },
    ],
  },
  {
    cups: 8,
    startingBalls: {
      orange: 1,
      cyan: 2,
      green: 3,
    },
    question: "green",
    program: [
      {
        _type: "repeat",
        times: 2,
        program: [
          {
            _type: "swap",
            cups: [1, 3],
          },
          {
            _type: "ifContainsBall",
            ballColor: "cyan",
            target: 2,
            then: [
              {
                _type: "swap",
                cups: [2, 6],
              },
              {
                _type: "repeat",
                times: 3,
                program: [
                  {
                    _type: "swap",
                    cups: [5, 7],
                  },
                ],
              },
              {
                _type: "swap",
                cups: [3, 4],
              },
            ],
            otherwise: [],
          },
          {
            _type: "ifContainsBall",
            ballColor: "green",
            target: 1,
            then: [
              {
                _type: "swap",
                cups: [0, 6],
              },
              {
                _type: "repeat",
                times: 2,
                program: [
                  {
                    _type: "swap",
                    cups: [2, 5],
                  },
                ],
              },
              {
                _type: "ifContainsBall",
                ballColor: "cyan",
                target: 2,
                then: [
                  {
                    _type: "swap",
                    cups: [1, 3],
                  },
                ],
                otherwise: [],
              },
            ],
            otherwise: [],
          },
          {
            _type: "swap",
            cups: [4, 7],
          },
        ],
      },
      {
        _type: "repeat",
        times: 4,
        program: [
          {
            _type: "swap",
            cups: [2, 4],
          },
        ],
      },
    ],
  },

  {
    cups: 10,
    startingBalls: {
      orange: 4,
      cyan: 2,
      green: 7,
    },
    question: "orange",
    program: [
      {
        _type: "swap",
        cups: [1, 5],
      },
      {
        _type: "ifContainsBall",
        ballColor: "green",
        target: 7,
        then: [
          {
            _type: "repeat",
            times: 2,
            program: [
              {
                _type: "swap",
                cups: [2, 8],
              },
              {
                _type: "ifContainsBall",
                ballColor: "cyan",
                target: 2,
                then: [
                  {
                    _type: "swap",
                    cups: [3, 7],
                  },
                  {
                    _type: "repeat",
                    times: 3,
                    program: [
                      {
                        _type: "swap",
                        cups: [5, 9],
                      },
                    ],
                  },
                  {
                    _type: "swap",
                    cups: [4, 6],
                  },
                ],
                otherwise: [],
              },
            ],
          },
          {
            _type: "swap",
            cups: [4, 7],
          },
        ],
        otherwise: [
          {
            _type: "repeat",
            times: 2,
            program: [
              {
                _type: "swap",
                cups: [0, 2],
              },
            ],
          },
        ],
      },
      {
        _type: "repeat",
        times: 4,
        program: [
          {
            _type: "swap",
            cups: [2, 4],
          },
        ],
      },
    ],
  },
  {
    cups: 6,
    startingBalls: {
      orange: 2,
      cyan: 1,
    },
    question: "cyan",
    program: [
      {
        _type: "swap",
        cups: [1, 3],
      },
      {
        _type: "repeat",
        times: 5,
        program: [
          {
            _type: "repeat",
            times: 3,
            program: [
              {
                _type: "ifContainsBall",
                ballColor: "orange",
                target: 2,
                then: [
                  {
                    _type: "swap",
                    cups: [2, 5],
                  },
                  {
                    _type: "repeat",
                    times: 2,
                    program: [
                      {
                        _type: "swap",
                        cups: [1, 3],
                      },
                    ],
                  },
                  {
                    _type: "swap",
                    cups: [1, 2],
                  },
                  {
                    _type: "swap",
                    cups: [0, 1],
                  },
                  {
                    _type: "swap",
                    cups: [3, 4],
                  },
                  {
                    _type: "swap",
                    cups: [2, 3],
                  },
                  {
                    _type: "swap",
                    cups: [5, 0],
                  },
                  {
                    _type: "swap",
                    cups: [4, 5],
                  },
                ],
                otherwise: [
                  {
                    _type: "swap",
                    cups: [4, 5],
                  },
                  {
                    _type: "swap",
                    cups: [1, 2],
                  },
                  {
                    _type: "swap",
                    cups: [3, 4],
                  },
                  {
                    _type: "swap",
                    cups: [0, 1],
                  },
                  {
                    _type: "swap",
                    cups: [5, 0],
                  },
                  {
                    _type: "swap",
                    cups: [2, 3],
                  },
                ],
              },
            ],
          },
          {
            _type: "ifContainsBall",
            ballColor: "orange",
            target: 3,
            then: [
              {
                _type: "swap",
                cups: [3, 2],
              },
            ],
            otherwise: [],
          },
        ],
      },
      {
        _type: "repeat",
        times: 4,
        program: [
          {
            _type: "swap",
            cups: [2, 4],
          },
        ],
      },
    ],
  },
];
