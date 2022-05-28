const QUESTIONS = [
    {
        "question": "Nadchodzi światowy dzień  Ziemii, co robisz?",
        "answers": [
          {
            "answer": "Ignorujesz to",
            "cost": 0,
            "effect": {
              "tension": 7
            }
          },
          {
            "answer": "Masowo sadzisz drzewa",
            "cost": 345,
            "effect": {
              "wood-level": 10,
              "tension": -3,
              "contamination": -5,
              "temperature": -6
            }
          },
          {
            "answer": "Organizujesz kampanie świadomości społecznej",
            "cost": 1235,
            "effect": {
              "tension": -15
            }
          },
          {
            "answer": "Organizujesz masowe sprzątanie Ziemi",
            "cost": 450,
            "effect": {
              "water-level": 1,
              "contamination": -1,
              "tension": -9,
              "wood-level": 2
            }
          }
        ]
      },
      {
        "question": "W wielu krajach zaczyna brakować wody pitnej, jak to rozwiążesz?",
        "answers": [
          {
            "answer": "Rozpoczynasz wojnę z krajem posiadającym większe zasoby wody pitnej",
            "cost": 2500,
            "effect": {
              "contamination": 12,
              "temperature": 11,
              "tension": 20,
              "water-level": 7
            }
          },
          {
            "answer": "Inwestujesz w urządzenia przetwarzające wodę słoną na wodę słodką",
            "cost": 3000,
            "effect": {
                "water-level": 16
            }
          },
          {
            "answer": "Ograniczasz dostęp wody pitnej dla uboższych grup społczenych",
            "cost": 900,
            "effect": {
              "tension": 12,
              "water-level": 4
            }
          },
          {
            "answer": "Ignorujesz to",
            "cost": 0,
            "effect": {
              "tension": 30
            }
          }
        ]
      },
      {
        "question": "Ostatnio zamkniętych zostało pare kopalni węgla, co robisz?",
        "answers": [
          {
            "answer": "Zakopujesz kopalnie",
            "cost": 400,
            "effect": {
              "contamination": -10,
              "tension": -5,
              "temperature": 3
            }
          },
          {
            "answer": "Ignorujesz to",
            "cost": 0,
            "effect": {
              "contamination": 6,
              "temperature": 2,
              "tension": 3
            }
          },
          {
            "answer": "Budujesz nowe kopalnie",
            "cost": 600,
            "effect": {
              "contamination": 4,
              "temperature": 6,
              "tension": -12,
            }
          },
          {
            "answer": "Kupujesz surowce od sąsiadujących krajów",
            "cost": 3000,
            "effect": {
              "tension": -20
            }
          }
        ]
      },
      {
        "question": "Zaczeło braknać opału w ogniskach domowych, w wydobycie czego zainwestujesz?",
        "answers": [
          {
            "answer": "Węgiel brunatny",
            "cost": 250,
            "effect": {
              "contamination": 10,
              "temperature": 13,
              "tension": 4
            }
          },
          {
            "answer": "Drewno",
            "cost": 1100,
            "effect": {
              "wood-level": -5,
              "contamination": 1,
              "temperature": -3,
              "tension": -1
            }
          },
          {
            "answer": "Ekogroszek",
            "cost": 725,
            "effect": {
              "wood-level": 1,
              "water-level": -2,
              "contamination": 1,
              "temperature": 4,
              "tension": 2
            }
          },
          {
            "answer": "Gaz",
            "cost": 1600,
            "effect": {
              "wood-level": 4,
              "contamination": -2,
              "temperature": 8,
              "tension": -4
            }
          }
        ]
      },
      {
        "question": "Miasto potrzebuje prądu, co zbudujesz?",
        "answers": [
          {
            "answer": "Elektrownia wodna",
            "cost": 1500,
            "effect": {
              "wood-level": -5,
              "water-level": 2,
              "tension": -5,
              "temperature": -1
            }
          },
          {
            "answer": "Elektrownia atomowa",
            "cost": 2200,
            "effect": {
              "wood-level": 10,
              "water-level": -3,
              "contamination": 2,
              "tension": 1
            }
          },
          {
            "answer": "Elektrownia węglowa",
            "cost": 400,
            "effect": {
              "wood-level": -8,
              "water-level": -4,
              "contamination": 10,
              "temperature": 6,
              "tension": 12
            }
          },
          {
            "answer": "Elektrownia wiatrowa",
            "cost": 900,
            "effect": {
              "wood-level": 1,
              "water-level": 1,
              "tension": -5,
              "temperature": -4
            }
          }
        ]
      },
      {
        "question": "Wybuchła elektrownia jądrowa, co robisz?",
        "answers": [
          {
            "answer": "Ignorujesz to",
            "cost": 0,
            "effect": {
              "water-level": -10,
              "contamination": 14,
              "wood-level": -24,
              "temperature": 10,
              "tension": 20,
            }
          },
          {
            "answer": "Tuszujesz to",
            "cost": 725,
            "effect": {
              "water-level": -10,
              "contamination": 14,
              "wood-level": -24,
              "temperature": 10,
              "tension": 26,
            }
          },
          {
            "answer": "Zamykasz wszystkie elektrownie jądrowe, aby sytuacja się nie powtórzyła",
            "cost": 1800,
            "effect": {
                "water-level": -10,
                "contamination": 14,
                "wood-level": -24,
                "temperature": 10,
                "tension": -2,
            }
          },
          {
            "answer": "Nakładasz kopuły, aby skażenie nie przeszło na resztę świata",
            "cost": 2125,
            "effect": {
                "water-level": -10,
                "contamination": 6,
                "wood-level": -16,
                "temperature": 7,
                "tension": -6,
            }
          }
        ]
      },
      {
        "question": "W lesie doszło do pożaru. Z każdą sekundą ogień się coraz bardziej rozprzestrzenia. Musisz coś zrobić!",
        "answers": [
          {
           "answer": "Pozbywasz się wszystkiego z okolic lasu co może się zapalić i czekasz na rozwój sytuacji.",
           "cost": 570,
           "effect": {
             "water-level": -9,
             "contamination": 3,
             "wood-level": -16,
             "temperature": 7,
             "tension": -1,
            }
          },
          {
            "answer": "Liczysz na deszcz.",
            "cost": 0,
            "effect": {
             "water-level": -1,
             "contamination": 11,
             "wood-level": -28,
             "temperature": 15,
             "tension": 2,
            }
          }
        ]
      } 
      
]