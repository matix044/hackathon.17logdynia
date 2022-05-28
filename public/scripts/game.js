import { changeTexture } from "/scripts/earth.js";
import QUESTIONS from "/scripts/questions.js";

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
    tension: 10,
    costBuf: 1.0
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

function endGame(reason) {
    const qNode = document.getElementById("question");
    const btnNodes = document.getElementsByClassName("option");

    GAME_STATE.question = null;
    GAME_STATE.questionId = 999;
    GAME_STATE.year = 2022;
    qNode.innerText = `Koniec gry! ${reason} Przetrwano ${GAME_STATE.round} rund(y)!`;
    if (GAME_STATE.round > GAME_STATE.bestRound) GAME_STATE.bestRound = GAME_STATE.round;
    GAME_STATE.round = 0;
    GAME_STATE.started = false;
    GAME_STATE.money = 0;
    GAME_STATE.costBuf = 1.0;

    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            btnNodes[0].textContent = "Zacznij nową gre";
            btnNodes[0].disabled = false;
            continue;
        }

        btnNodes[i].textContent = "";
        btnNodes[i].disabled = true;
    }

    document.getElementById("extra").innerHTML = `Najlepszy wynik: ${GAME_STATE.bestRound}`;
}

/**
 * @param {number?} decision
 */
export function updateGame(decision) {
    if (!GAME_STATE.started) {
        GAME_STATE.started = true;
        GAME_STATE.round = 1;
        GAME_STATE.money = 1000;

        const bars = [
            "temperature",
            "wood-level",
            "water-level",
            "contamination",
            "tension"
        ];
        const base = [35, 80, 45, 0, 10];

        for (let i = 0; i < 5; i++) updateBar(bars[i], base[i]);
    }
    else {
        GAME_STATE.round++;
        GAME_STATE.money += 650 + GAME_STATE.round * 32;
        
        if (decision) {
            const t = GAME_STATE.question.answers[decision - 1];
            for (const [key, value] of Object.entries(t.effect)) updateBar(key, GAME_STATE[key] + value);
            GAME_STATE.money -= Math.ceil(t.cost * GAME_STATE.costBuf);
            GAME_STATE.costBuf += 0.05;
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
                const cost = Math.ceil(l.cost * GAME_STATE.costBuf);
                btnNodes[i].textContent = `${l.answer} (${cost == 0 ? cost : `${cost}mln `}$)`;
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
    if (options == 0) return endGame("Tracisz ostatnie pieniądze i nie możesz już wprowadzać zmian.");

    document.getElementById("extra").innerHTML = `Najlepszy wynik: ${GAME_STATE.bestRound >= GAME_STATE.round ? GAME_STATE.bestRound : GAME_STATE.round}, runda: ${GAME_STATE.round}, pieniądze: ${GAME_STATE.money}mln $, Rok symulacji: ${GAME_STATE.year}`;

    if (GAME_STATE["tension"] >= 95) {
        changeTexture("nuclear", false);
        if (GAME_STATE["tension"] == 100) {
            changeTexture("nuclear", true);
            return endGame("Wojna światowa (nuklearna).");
        }
        return;
    }

    if (GAME_STATE["contamination"] >= 80) {
        changeTexture("toxic", false);
        if (GAME_STATE["contamination"] == 100) {
            changeTexture("toxic", true);
            return endGame("Radiacja.");
        }
        return;
    }

    if (GAME_STATE["temperature"] <= 10) {
        changeTexture("frozen", false);
        if (GAME_STATE["temperature"] == 0) {
            changeTexture("frozen", true);
            return endGame("Zamrożenie.");
        }
        return;
    }
    else if (GAME_STATE["temperature"] > 70) {
        changeTexture("dry", false);
        if (GAME_STATE["temperature"] == 100) {
            changeTexture("dry", true);
            return endGame("Spalenie.");
        }
        return;
    }

    if (GAME_STATE["water-level"] <= 10) {
        changeTexture("dry", false);
        if (GAME_STATE["water-level"] == 0) {
            changeTexture("dry", true);
            return endGame("Susza.");
        }
        return;
    }
    else if (GAME_STATE["water-level"] > 64) {
        changeTexture("watery", false);
        if (GAME_STATE["water-level"] == 100) {
            changeTexture("watery", true);
            return endGame("Zatopienie.");
        }
        return;
    }

    if (GAME_STATE["wood-level"] <= 10) {
        changeTexture("noforest", false);
        if (GAME_STATE["wood-level"] == 0) {
            changeTexture("noforest", true);
            return endGame("Brak zieleni.");
        }
        return;
    }

    changeTexture("normal", false);
}

document.addEventListener("DOMContentLoaded", () => {
    const btnNodes = document.getElementsByClassName("option");
    for (let i = 0; i < 4; i++) btnNodes[i].onclick = updateGame.bind(undefined, i + 1);
});