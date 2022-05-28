const GAME_STATE = {
    round: 0,
    bestRound: 0,
    started: false,
    money: 0,
    year: 2022,
    question: null,
    questionId: 999,
    temperature: 35,
    "wood-level": 80,
    "water-level": 45,
    contamination: 0,
    tension: 10
}

/**
 * @param {"temperature" | "wood-level" | "water-level" | "contamination" | "tension"} type 
 * @param {number} value 
 */
function updateBar(type, value) {
    const node = document.getElementById(type);
    const res = value < 0 ? 0 : value > 100 ? 100 : value;
    node.value = res;
    node.max = 100;
    GAME_STATE[type] = res;
}

/**
 * @param {number?} decision
 */
function updateGame(decision) {
    if (!GAME_STATE.started) {
        GAME_STATE.started = true;
        GAME_STATE.round = 1;
        GAME_STATE.money = 1000;
    }
    else {
        GAME_STATE.round++;
        GAME_STATE.money += 725 + GAME_STATE.round * 36;

        if (decision) {
            const t = GAME_STATE.question.answers[decision - 1];
            for (const [key, value] of Object.entries(t.effect)) updateBar(key, GAME_STATE[key] + value);
            GAME_STATE.money -= t.cost;
        }
    }

    let id = Math.floor(Math.random() * QUESTIONS.length);
    let q = QUESTIONS[id];

    while (id == GAME_STATE.questionId || !q) {
        id = Math.floor(Math.random() * QUESTIONS.length);
        q = QUESTIONS[id];
    }

    const qNode = document.getElementById("question");
    const btnNodes = document.getElementsByClassName("option");

    GAME_STATE.question = q;
    GAME_STATE.questionId = id;
    GAME_STATE.year += Math.floor(Math.random() * 4);
    qNode.innerText = q.question;

    let options = 0;
    for (let i = 0; i < 4; i++) {
        const l = q.answers[i];
        
        if (l) {
            if (GAME_STATE.money >= l.cost) {
                btnNodes[i].textContent = `${l.answer} (${l.cost}$)`;
                btnNodes[i].disabled = false;
                options++;
            }
            else {
                btnNodes[i].textContent = `${l.answer} (${l.cost}$)`;
                btnNodes[i].disabled = true;
            }
        }
        else {
            btnNodes[i].textContent = "";
            btnNodes[i].disabled = true;
        }
    }

    document.getElementById("extra").innerHTML = `Najlepszy wynik: ${GAME_STATE.bestRound >= GAME_STATE.round ? GAME_STATE.bestRound : GAME_STATE.round}, runda: ${GAME_STATE.round}, pieniądze: ${GAME_STATE.money}$, Rok symulacji: ${GAME_STATE.year}`;
    updateBar("temperature", GAME_STATE["temperature"]);
    updateBar("wood-level", GAME_STATE["wood-level"]);
    updateBar("water-level", GAME_STATE["water-level"]);
    updateBar("contamination", GAME_STATE["contamination"]);
    updateBar("tension", GAME_STATE["tension"]);
}