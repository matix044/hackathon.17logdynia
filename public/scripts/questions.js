export default [
    {
        question: "Nadchodzi światowy dzień  Ziemii, co robisz?",
        answers: [
            {
                answer: "Ignorujesz to",
                cost: 0,
                effect: {
                    tension: 7
                }
            },
            {
                answer: "Masowo sadzisz drzewa",
                cost: 345,
                effect: {
                    "wood-level": 10,
                    tension: -3,
                    contamination: -5,
                    temperature: -6
                }
            },
            {
                answer: "Organizujesz kampanie świadomości społecznej",
                cost: 1235,
                effect: {
                    tension: -15
                }
            },
            {
                answer: "Organizujesz masowe sprzątanie Ziemi",
                cost: 450,
                effect: {
                    "water-level": 1,
                    contamination: -1,
                    tension: -9,
                    "wood-level": 2
                }
            }
        ]
    },
    {
        question: "W wielu krajach zaczyna brakować wody pitnej, jak to rozwiążesz?",
        answers: [
            {
                answer: "Rozpoczynasz wojnę z krajem posiadającym większe zasoby wody pitnej",
                cost: 2500,
                effect: {
                    contamination: 12,
                    temperature: 11,
                    tension: 20,
                    "water-level": 7
                }
            },
            {
                answer: "Inwestujesz w urządzenia przetwarzające wodę słoną na wodę słodką",
                cost: 3000,
                effect: {
                    "water-level": 16
                }
            },
            {
                answer: "Ograniczasz dostęp wody pitnej dla uboższych grup społczenych",
                cost: 900,
                effect: {
                    tension: 12,
                    "water-level": 4
                }
            },
            {
                answer: "Ignorujesz to",
                cost: 0,
                effect: {
                    tension: 30
                }
            }
        ]
    },
    {
        question: "Ostatnio zamkniętych zostało pare kopalni węgla, co robisz?",
        answers: [
            {
                answer: "Zakopujesz kopalnie",
                cost: 400,
                effect: {
                    contamination: -10,
                    tension: -5,
                    temperature: 3
                }
            },
            {
                answer: "Ignorujesz to",
                cost: 0,
                effect: {
                    contamination: 6,
                    temperature: 2,
                    tension: 3
                }
            },
            {
                answer: "Budujesz nowe kopalnie",
                cost: 600,
                effect: {
                    contamination: 4,
                    temperature: 6,
                    tension: -12
                }
            },
            {
                answer: "Kupujesz surowce od sąsiadujących krajów",
                cost: 3000,
                effect: {
                    tension: -20
                }
            }
        ]
    },
    {
        question: "Zaczeło braknać opału w ogniskach domowych, w wydobycie czego zainwestujesz?",
        answers: [
            {
                answer: "Węgiel brunatny",
                cost: 250,
                effect: {
                    contamination: 10,
                    temperature: 13,
                    tension: 4
                }
            },
            {
                answer: "Drewno",
                cost: 1100,
                effect: {
                    "wood-level": -5,
                    contamination: 1,
                    temperature: -3,
                    tension: -1
                }
            },
            {
                answer: "Ekogroszek",
                cost: 725,
                effect: {
                    "wood-level": 1,
                    "water-level": -2,
                    contamination: 1,
                    temperature: 4,
                    tension: 2
                }
            },
            {
                answer: "Gaz",
                cost: 1600,
                effect: {
                    "wood-level": 4,
                    contamination: -2,
                    temperature: 8,
                    tension: -4
                }
            }
        ]
    },
    {
        question: "Miasto potrzebuje prądu, co zbudujesz?",
        answers: [
            {
                answer: "Elektrownia wodna",
                cost: 1500,
                effect: {
                    "wood-level": -5,
                    "water-level": 2,
                    tension: -5,
                    temperature: -1
                }
            },
            {
                answer: "Elektrownia atomowa",
                cost: 2200,
                effect: {
                    "wood-level": 10,
                    "water-level": -3,
                    contamination: 2,
                    tension: 1
                }
            },
            {
                answer: "Elektrownia węglowa",
                cost: 400,
                effect: {
                    "wood-level": -8,
                    "water-level": -4,
                    contamination: 10,
                    temperature: 6,
                    tension: 12
                }
            },
            {
                answer: "Elektrownia wiatrowa",
                cost: 900,
                effect: {
                    "wood-level": 1,
                    "water-level": 1,
                    tension: -5,
                    temperature: -4
                }
            }
        ]
    },
    {
        question: "Wybuchła elektrownia jądrowa, co robisz?",
        answers: [
            {
                answer: "Ignorujesz to",
                cost: 0,
                effect: {
                    "water-level": -10,
                    contamination: 14,
                    "wood-level": -24,
                    temperature: 10,
                    tension: 20
                }
            },
            {
                answer: "Tuszujesz to",
                cost: 725,
                effect: {
                    "water-level": -10,
                    contamination: 14,
                    "wood-level": -24,
                    temperature: 10,
                    tension: 26
                }
            },
            {
                answer: "Zamykasz wszystkie elektrownie jądrowe, aby sytuacja się nie powtórzyła",
                cost: 1800,
                effect: {
                    "water-level": -10,
                    contamination: 14,
                    "wood-level": -24,
                    temperature: 10,
                    tension: -2
                }
            },
            {
                answer: "Nakładasz kopuły, aby skażenie nie przeszło na resztę świata",
                cost: 2125,
                effect: {
                    "water-level": -10,
                    contamination: 6,
                    "wood-level": -16,
                    temperature: 7,
                    tension: -6
                }
            }
        ]
    },
    {
        question: "Głód zaczyna opanowywać świat. Co zrobisz aby z nim sobie poradzić?",
        answers: [
            {
                answer: "Zaczynasz hodować bydło na skalę masową",
                cost: 1236,
                effect: {
                    temperature: 8,
                    contamination: 2
                }
            },
            {
                answer: "Skupiasz się na polach uprawnych",
                cost: 900,
                effect: {
                    "wood-level": 3,
                    contamination: -4,
                    tension: -3
                }
            },
            {
                answer: "Zwiększasz nacisk na produkty puszkowane",
                cost: 410,
                effect: {
                    contamination: 6,
                    temperature: 1,
                    tension: 1
                }
            },
            {
                answer: "Zaczynasz produkować jedzenie w labolatorium (chemiczne)",
                cost: 1000,
                effect: {
                    contamination: 5,
                    "wood-level": 4,
                    tension: 5
                }
            }
        ]
    },
    {
        "question": "Jeden z najbardziej dochodowych koncernów elektroniki okazał się łamać regulacje w zakresie emisji gazów cieplarnianych. Jakie podejmujesz kroki?",
        "answers": [
          {
            "answer": "Zignoruj",
            "cost": 0,
            "effect": {
              "contamination": 6,
              "wood-level": -2,
              "water-level": 2
            }
          },
          {
            "answer": "Wymuś grzywnę",
            "cost": 100,
            "effect": {
              "tension": 3,
              "contamination": 5,
              "wood-level": -1,
              "water-level": 1
            }
          },
          {
            "answer": "Apeluj o ograniczenie gazów",
            "cost": 400,
            "effect": {
              "contamination": 4,
              "wood-level": -1,
              "water-level": 1
            }
          },
          {
            "answer": "Nałóż sankcje na firmę",
            "cost": 500,
            "effect": {
              "tension": 5,
              "contamination": -4,
              "wood-level": 1,
              "water-level": -1
            }
          }
        ]
      },
      {
        "question": "Zwiększający się procent bezrobocia spowodowany rozwojem technologii osiągnął poziom krytyczny. Postanawiasz...",
        "answers": [
          {
            "answer": "Kontynuować rozwój",
            "cost": 700,
            "effect": {
              "tension": -2,
              "contamination": 4
            }
          },
          {
            "answer": "Zapewnić darmowe szkolenia techniczne, by ludzie mogli się przystosować",
            "cost": 1200,
            "effect": {
              "tension": -5,
              "contamination": -5
            }
          },
          {
            "answer": "Wprowadzić ustawę, zabezpieczającą obecnie pracujących przed utratą pracy",
            "cost": 600,
            "effect": {
              "tension": 1,
              "contamination": 2
            }
          },
          {
            "answer": "Sztucznie spowolnić wprowadzanie maszyn, by opóźnić nadciągający kryzys",
            "cost": 500,
            "effect": {
              "tension": 4,
              "contamination": -2
            }
          }
        ]
      },
      {
        "question": "Wyczerpujące się zasoby naturalne zdążyły doprowadzić do konfliktów. Postanawiasz...",
        "answers": [
          {
            "answer": "To zignorować",
            "cost": 0,
            "effect": {
              "tension": 30
            }
          },
          {
            "answer": "Przeprowadzić zakrojone badania nad nowymi złożami zasobów",
            "cost": 700,
            "effect": {
              "tension": 8,
              "contamination": 5,
              "wood-level": -1,
              "water-level": -1
            }
          },
          {
            "answer": "Wykorzystać potencjał asteroidowego górnictwa",
            "cost": 2000,
            "effect": {
              "tension": -5,
              "temperature": -2,
              "contamination": -10,
              "wood-level": 4,
              "water-level": 1
            }
          },
          {
            "answer": "Zaoferować pomoc finansową dla potrzebujących",
            "cost": 500,
            "effect": {
              "tension": 10,
              "wood-level": -2 
            }
          }
        ]
      },
      {
        "question": "Zwiększona emisja mikroplastiku zaczęła powodować choroby u ludzi, oraz osiadywać na roślinach. Na międzypaństwowych obradach decydujesz...",
        "answers": [
          {
            "answer": "Poczekać z werdyktem aż do zbadania problemu przez naukowców",
            "cost": 100,
            "effect": {
              "tension": 4,
              "contamination": 4,
              "wood-level": -3
            }
          },
          {
            "answer": "Wprowadzić ostrzejsze regulacje dla używania plastiku",
            "cost": 300,
            "effect": {
              "tension": 2,
              "contamination": 3,
              "wood-level": -1,
              "water-level": -1
            }
          },
          {
            "answer": "Sfinansować filtry dla zbiorników wodnych, usuną mikroplastik",
            "cost": 700,
            "effect": {
              "tension": -2,
              "contamination": -3,
              "water-level": 1
            }
          },
          {
            "answer": "Sfinansować badania dla mniej szkodliwego materiału dla mikroplastiku",
            "cost": 1000,
            "effect": {
              "tension": -3,
              "contamination": -8
            }
          }
        ]
      },
      {
        "question": "Spora ilość odpadów w zbiornikach wodnych zaczęła negatywnie wpływać na ekosystem i ryby. Co robisz?",
        "answers": [
          {
            "answer": "Wprowadź drobne regulacje",
            "cost": 200,
            "effect": {
              "tension": 5,
              "contamination": 6,
              "water-level": -1
            }
          },
          {
            "answer": "Rozporządź inspekcje firm zajmujących się wywózką odpadów",
            "cost": 500,
            "effect": {
              "tension": 2,
              "contamination": 3,
              "water-level": -1
            }
          },
          {
            "answer": "Sfinansuj nowe ośrodki przetwarzania odpadów",
            "cost": 700,
            "effect": {
              "tension": -3,
              "contamination": -2
            }
          },
          {
            "answer": "Natychmiastowo podejmij działania oczyszczania zbiorników i wprowadzenia kontroli recyklingu",
            "cost": 1300,
            "effect": {
              "tension": -5,
              "contamination": -10,
              "water-level": 1
            }
          }
        ]
      },
      {
        "question": "Samozapłonowi poddał się jeden z największych lasów w Australii przez długotrwałą suszę. Pozostawiony sobie ogień może wyrządzić ogromne szkody ekosystemowi. Co zrobić?",
        "answers": [
          {
            "answer": "Pozostaw pożar samemu sobie.",
            "cost": 0,
            "effect": {
              "temperature": 2,
              "contamination": 10,
              "wood-level": -10
            }
          },
          {
            "answer": "Wybierz ochotników, którzy opanują sytuację",
            "cost": 400,
            "effect": {
              "temperature": 1,
              "contamination": 8,
              "wood-level": -6
            }
          },
          {
            "answer": "Zmobilizuj wojsko i straż do opanowania sytuacji",
            "cost": 800,
            "effect": {
              "tension": 5,
              "contamination": 4,
              "wood-level": -3
            }
          },
          {
            "answer": "Wykup drogi sprzęt lotniczy do szybkiego opanowania sytuacji",
            "cost": 1700,
            "effect": {
              "tension": -2,
              "contamination": -2
            }
          }
        ]
      },
      {
        "question": "Z innego kraju zaczęto sprowadzać pewien typ rośliny, który okazał się inwazyjny dla naturalnego środowiska.",
        "answers": [
          {
            "answer": "Zwiększ kontrolę na granicach państwa",
            "cost": 700,
            "effect": {
              "wood-level": -8,
              "water-level": -4,
              "tension": 6
            }
          },
          {
            "answer": "Nie podejmuj żadnych kroków",
            "cost": 0,
            "effect": {
              "contamination": 10,
              "temperature": 8
            }
          },
          {
            "answer": "Poinformuj naród o skutkach i wprowadź oficjalny zakaz",
            "cost": 200,
            "effect": {
              "wood-level": -4,
              "water-level": -2,
              "tension": 1,
              "contamination": 2,
              "temperature": 2
            }
        },
            {
            "answer": "Wprowadz delegalizację rośliny w tym kraju pod karą więzienia lub grzywny",
            "cost": 950,
            "effect": {
              "wood-level": -7,
              "water-level": -3,
              "tension": 7,
              "contamination": -5,
              "temperature": -4
            }
          }
        ]
      }

];
