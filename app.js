const DATA={
A:{name:'Treino A',desc:'Peito, ombros e tríceps',mob:'Mobilidade de ombros',ex:[
['Supino inclinado com halteres ou máquina',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Supino reto com halteres ou máquina',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']], '2 rest pause de 10 segundos na última série'],
['Supino declinado barra ou máquina',[['Ajuste','1','4–6','1–2 min'],['Trabalho','2','6–10','2 min']]],
['Voador com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','10–15','1 min']], '1 drop set na última série'],
['Elevação frontal',[['Ajuste','1','4–6','1–2 min'],['Trabalho','2','6–10','2 min']]],
['Elevação lateral sentado com halteres',[['Ajuste','1–2','4–6','1 min'],['Trabalho','2','8–12','1 min']], '1 drop set na última série'],
['Tríceps francês na corda',[['Ajuste','1','4–6','1–2 min'],['Trabalho','3','6–10','2 min']]]]},
B:{name:'Treino B',desc:'Costas e bíceps',mob:'Mobilidade de ombros e alongamento peito',ex:[
['Remada curvada com barra com 2 segundos de pico de contração',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Remada baixa triângulo com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']], '2 rest pause de 10 segundos na última série'],
['Remada baixa pegada aberta ou máquina pegada aberta com 2 segundos de pico de contração',[['Ajuste','1','4–6','1–2 min'],['Trabalho','2','6–10','2 min']]],
['Pulley frente triângulo com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','8–12','2 min']], '1 drop set na última série'],
['Meio Terra',[['Aquecimento','1','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Hiper extensão no banco romano',[['Trabalho','3','10–15','90 s']]],
['Rosca scott máquina com 2 segundos de pico de contração',[['Ajuste','1','4–6','1–2 min'],['Trabalho','3','6–10','2 min']]]]},
C:{name:'Treino C',desc:'Membros inferiores',mob:'Mobilidade e alongamento posteriores de coxa, glúteos, quadríceps e ílio-psoas',ex:[
['Agachamento livre',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Leg 45',[['Ajuste','1','4–6','1–2 min'],['Trabalho','2','8–12','2–3 min']], '2 rest pause de 10 segundos na última série'],
['Extensor com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','10–15','1 min']]],
['Flexor deitado com 2 segundos de pico de contração',[['Aquecimento','1','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Stiff',[['Aquecimento','1','10–15','1 min'],['Ajuste','1','4–6','1–2 min'],['Trabalho','2','8–10','2–3 min']]],
['Elevação de quadril com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']], '1 drop set na última série'],
['Panturrilha em pé na máquina ou no smith com 2 segundos de pico de contração',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','3','10–15','2 min']]]]},
D:{name:'Treino D',desc:'Ombros, estímulo em peito e tríceps',mob:'Mobilidade e alongamento ombros e tríceps',ex:[
['Desenvolvimento com halteres',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Elevação frontal',[['Ajuste','1–2','4–6','1 min'],['Trabalho','2','10–15','1 min']], '2 rest pause de 10 segundos na última série'],
['Elevação lateral sentado com halteres',[['Ajuste','1–2','4–6','1 min'],['Trabalho','2','8–12','1 min']]],
['Elevação lateral máquina ou unilateral no cabo',[['Ajuste','1','4–6','1 min'],['Trabalho','2','8–12','1 min']], '1 drop set na última série'],
['Voador com 2 segundos de pico de contração',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','3','6–10','2–3 min']]],
['Tríceps corda com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','3','6–10','2 min']]],
['Tríceps testa corda banco 35 graus',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','3','8–12','2 min']], '2 rest pause de 10 segundos'] ]},
E:{name:'Treino E',desc:'Bíceps, costas e abdômen',mob:'Mobilidade de ombros e alongamento peito',ex:[
['Rosca direta cabo com 2 segundos de pico de contração',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2–3 min']]],
['Rosca scott máquina ou no cabo com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','8–12','2 min']], '2 rest pause de 10 segundos na última série'],
['Rosca direta corda',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','10–15','1 min']], '1 drop na última série'],
['Pulley frente aberto com 2 segundos de pico de contração',[['Aquecimento','1–2','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','3','8–12','2 min']]],
['Pulley frente triângulo com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','3','8–12','2 min']], '1 drop na última série'],
['Serrote com 2 segundos de pico de contração',[['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','6–10','2 min']]],
['Abdominal infra na torre com 2 segundos de pico de contração',[['Trabalho','3','RM','45 s']], '3x RM (máximo de repetições possíveis) · intervalo 1 min'],
['Abdominal supra na prancha declinada',[['Trabalho','3','RM','45 s']], '3x RM (máximo de repetições possíveis) · intervalo 1 min'] ]}
};

const KEY='solo_leveling_v15';

let db;
try {
    db = JSON.parse(localStorage.getItem(KEY)) || null;
} catch (e) {
    db = null;
}
db = db || {
    history:[],
    drafts:{},
    user:{name:'Sung Jin-Woo', targetWorkouts: 5, targetCardio: 60},
    restState:{deadline:0,total:0,startedAt:0}
};

if (!db.user.targetWorkouts) db.user.targetWorkouts = 5;
if (!db.user.targetCardio) db.user.targetCardio = 60;

let screen='home',current=null,timerId=null,totalTimerId=null;
let selectedExEvo = null;
let currentRecordsFilter = 'ALL';
let activeChartInstance = null;
let wakeLock = null;
const app=document.getElementById('app');

const SoundFX = {
    ctx: null,
    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    playLevelUp() {
        try {
            this.init();
            if (!this.ctx) return;
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                const startTime = this.ctx.currentTime + (idx * 0.09);
                gain.gain.setValueAtTime(0.12, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.15);
            });
        } catch(e) {}
    }
};

document.addEventListener('touchstart', () => SoundFX.init(), { once: true });
document.addEventListener('click', () => SoundFX.init(), { once: true });

function playBeep() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.5);
    } catch(e) {}
}

if(!document.getElementById('solo-leveling-enhanced-styles')){
    const styleEl = document.createElement('style');
    styleEl.id = 'solo-leveling-enhanced-styles';
    styleEl.textContent = `
        @keyframes prMonarchPulse {
            0% { transform: scale(1); box-shadow: 0 0 8px rgba(168,85,247,0.4); }
            50% { transform: scale(1.04); box-shadow: 0 0 16px rgba(168,85,247,0.9); }
            100% { transform: scale(1); box-shadow: 0 0 8px rgba(168,85,247,0.4); }
        }
        .pr-badge-live {
            display: inline-flex; align-items: center; gap: 4px; background: rgba(168, 85, 247, 0.18);
            border: 1px solid #a855f7; color: #a855f7; padding: 4px 10px; border-radius: 6px;
            font-size: 12px; font-weight: 800; animation: prMonarchPulse 1.6s infinite ease-in-out; text-transform: uppercase;
        }
        input:focus, textarea:focus {
            outline: none !important; border-color: #a855f7 !important;
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.6) !important;
        }
        .home-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
        .home-card-btn {
            background: rgba(20, 16, 35, 0.85); border: 1px solid rgba(168, 85, 247, 0.3);
            border-radius: 12px; padding: 14px; text-align: left; display: flex; flex-direction: column;
            justify-content: space-between; transition: all 0.2s ease; cursor: pointer; color: #fff;
        }
        .home-card-btn:active { transform: scale(0.98); background: rgba(168, 85, 247, 0.2); }
        .home-card-btn .icon { font-size: 24px; margin-bottom: 6px; }
        .home-card-btn .title { font-size: 14px; font-weight: bold; color: #e0e0e0; }
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(4px); z-index: 9999;
            display: flex; align-items: center; justify-content: center; animation: fadeIn 0.2s;
        }
        .modal-box {
            background: #0d0b18; border: 1px solid #a855f7; border-radius: 16px;
            padding: 20px; width: 90%; max-width: 420px; box-shadow: 0 0 30px rgba(168, 85, 247, 0.4); max-height: 85vh; overflow-y: auto;
        }
        .tech { font-size: 14px !important; font-weight: 800; color: #c084fc; background: rgba(168, 85, 247, 0.15); border: 1px solid #a855f7; padding: 6px 10px; border-radius: 6px; margin-top: 8px; display: inline-block; }
        .tech-inline { font-size: 13px !important; color: #d8b4fe; font-weight: 800; background: rgba(168, 85, 247, 0.2); border-left: 3px solid #a855f7; padding: 6px 8px; margin-top: 6px; border-radius: 0 6px 6px 0; }
        .group-label { font-size: 15px !important; font-weight: bold; color: #a855f7; margin: 12px 0 6px 0; }
        .group-label span { font-size: 13px !important; color: #bbb; font-weight: normal; }
        .total-bottom { margin-bottom: 120px !important; border: 2px solid rgba(168,85,247,0.4) !important; padding: 16px !important; border-radius: 12px; background: rgba(15,12,25,0.8); }
        .total-bottom strong#totalTime { font-size: 28px !important; color: #a855f7; }
        .global-rest { padding: 10px 14px !important; min-height: 75px; background: #0b0914; border-top: 2px solid #a855f7; }
        .global-rest strong#globalRestClock { font-size: 26px !important; color: #a855f7; }
        .global-rest-actions button.mini { font-size: 13px !important; padding: 8px 12px !important; font-weight: bold !important; border-radius: 6px !important; }
        .global-rest-actions button.mini.start { font-size: 14px !important; padding: 8px 16px !important; background: linear-gradient(135deg, #8a2be2, #a855f7) !important; color: #fff; }
        .evo-stat-card { background: rgba(168,85,247,0.08); border: 1px solid rgba(168,85,247,0.25); border-radius: 12px; padding: 12px; text-align: center; }
        .evo-stat-card .val { font-size: 18px; font-weight: 800; color: #a855f7; margin-top: 4px; }
        .evo-stat-card .lbl { font-size: 11px; color: #aaa; text-transform: uppercase; font-weight: 600; }
    `;
    document.head.appendChild(styleEl);
}

const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

// Epley Formula para 1RM Estimado
function calc1RM(kg, reps) {
    if (!kg || !reps || reps <= 0) return 0;
    if (reps === 1) return kg;
    return kg * (1 + reps / 30);
}

function formatVolume(kg) {
    if (kg >= 10000) {
        return (kg / 1000).toFixed(1).replace('.', ',') + ' t';
    }
    return kg.toLocaleString('pt-BR') + ' kg';
}

function showConfirmModal(title, text, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box" style="text-align:center;">
            <div style="font-size:36px; margin-bottom:8px;">⚠️</div>
            <h3 style="color:#a855f7; margin:0 0 10px 0; font-size:18px;">${esc(title)}</h3>
            <p style="color:#ccc; font-size:14px; margin-bottom:20px;">${esc(text)}</p>
            <div style="display:flex; gap:10px;">
                <button class="secondary" style="flex:1; padding:12px;" id="modalCancelBtn">Cancelar</button>
                <button class="primary" style="flex:1; padding:12px; background:linear-gradient(135deg, #8a2be2, #a855f7);" id="modalConfirmBtn">Confirmar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('modalCancelBtn').onclick = () => modal.remove();
    document.getElementById('modalConfirmBtn').onclick = () => { modal.remove(); onConfirm(); };
}

function toast(t){const x=document.createElement('div');x.className='toast';x.textContent=t;document.body.appendChild(x);setTimeout(()=>x.remove(),1800)}
function header(title,homeBack=true){return `<div class="top"><div class="brand">SOLO LEVELING</div><button class="iconbtn" onclick="${homeBack?'goHome()':'settingsScreen()'}">${homeBack?'‹':'⚙'}</button></div><h1 class="screen-title">${title}</h1>`}

function loadChartJS(callback){
    if(window.Chart) { callback(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function getGreeting(){
    const h = new Date().getHours();
    if(h >= 5 && h < 12) return 'Bom dia';
    if(h >= 12 && h < 18) return 'Boa tarde';
    return 'Boa noite';
}

function getRelativeDate(isoString){
    if(!isoString) return 'Nenhum';
    const d = new Date(isoString);
    const now = new Date();
    const diffDays = Math.floor((now.setHours(0,0,0,0) - new Date(d).setHours(0,0,0,0)) / (1000*60*60*24));
    if(diffDays === 0) return 'Hoje';
    if(diffDays === 1) return 'Ontem';
    return `Há ${diffDays} dias`;
}

function getRankTitle(level) {
    if (level >= 100) return "Monarca das Sombras";
    if (level >= 80)  return "Comandante de Sombras";
    if (level >= 65)  return "Caçador Rank Nacional";
    if (level >= 50)  return "Caçador Rank S";
    if (level >= 35)  return "Caçador Rank A";
    if (level >= 25)  return "Caçador Rank B";
    if (level >= 15)  return "Caçador Rank C";
    if (level >= 8)   return "Caçador Rank D";
    if (level >= 3)   return "Caçador Rank E";
    return "Iniciante / Humano";
}

function getRequiredXPForLevel(lvl) {
    return Math.floor(450 * Math.pow(lvl, 2.2));
}

// Expande o vetor de tipos de série
function expandedGroups(groups){
    const res = [];
    groups.forEach(g => {
        const typeName = g[0];
        const count = parseInt(g[1]) || 1;
        for(let i=0; i<count; i++) {
            res.push({ type: typeName, origGroup: g });
        }
    });
    return res;
}

// Regra estrita de PRs por Tipo de Série
function isValidPRSetType(setType) {
    if (!setType) return true; 
    const norm = setType.toLowerCase();
    if (norm.includes('aquecimento') || norm.includes('ajuste')) {
        return false;
    }
    return true; // Trabalho, Drop set, Rest-pause são válidos
}

function getUserStats(){
    const totalWorkouts = db.history.length;
    let totalXP = 0;
    let totalVolume = 0;
    let totalCardioMin = 0;
    let totalSetsDone = 0;
    let totalPRsCount = 0;

    const prTracker = {};

    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(r => {
        const cardioMin = parseFloat(r.data?.cardio?.time) || 0;
        const vol = (r.totalVolume || 0);
        totalVolume += vol;
        totalCardioMin += cardioMin;

        totalXP += 100 + Math.floor(cardioMin * 1.5);

        const wData = DATA[r.workout];
        if(wData){
            wData.ex.forEach((exInfo, i) => {
                let exCompleted = true;
                const setGroups = expandedGroups(exInfo[1]);
                setGroups.forEach((groupObj, j) => {
                    const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                    if(setData.done) {
                        totalSetsDone++;
                        totalXP += 8;
                        const kg = parseFloat(setData.kg) || 0;
                        const reps = parseInt(setData.reps) || 0;
                        const exKey = exInfo[0];
                        
                        // FILTRAGEM DE PR: Apenas Séries de Trabalho / Drop set / Rest-pause
                        if (kg > 0 && isValidPRSetType(groupObj.type)) {
                            const prevBest = prTracker[exKey] || { kg: 0, reps: 0 };
                            if (kg > prevBest.kg || (kg === prevBest.kg && reps > prevBest.reps)) {
                                prTracker[exKey] = { kg, reps };
                                totalPRsCount++;
                                totalXP += 80; 
                            }
                        }
                    } else {
                        exCompleted = false;
                    }
                });
                if(exCompleted) totalXP += 20;
            });
        }
    });

    let level = 1;
    let accumulatedXP = totalXP;
    while (accumulatedXP >= getRequiredXPForLevel(level)) {
        accumulatedXP -= getRequiredXPForLevel(level);
        level++;
    }

    const nextLevelReq = getRequiredXPForLevel(level);
    const progressPct = Math.min(100, Math.floor((accumulatedXP / nextLevelReq) * 100));
    const rank = getRankTitle(level);
    const lastWorkout = db.history.length ? db.history[db.history.length - 1].date : null;

    return { 
        level, rank, currentLevelXP: accumulatedXP, nextLevelReq, progressPct, 
        totalWorkouts, totalSetsDone, totalPRsCount, lastWorkoutDateStr: getRelativeDate(lastWorkout), 
        totalVolume, totalCardioMin 
    };
}

function getAchievements() {
    const stats = getUserStats();
    const achievements = [
        { id: 'rank_e', title: 'Erguer-se (Rank E)', desc: 'Complete seu 1º treino e entre na Dungeon.', icon: '🗝️', current: stats.totalWorkouts, target: 1 },
        { id: 'igris', title: 'Sombra de Igris', desc: 'Quebre 10 Recordes Pessoais (PRs).', icon: '🗡️', current: stats.totalPRsCount, target: 10 },
        { id: 'rank_c', title: 'Caçador Rank C', desc: 'Complete 30 treinos e 150 séries.', icon: '🛡️', current: stats.totalWorkouts, target: 30 },
        { id: 'tank', title: 'Sombra de Tank', desc: 'Mova mais de 100.000 kg de volume total.', icon: '🐻', current: stats.totalVolume, target: 100000 },
        { id: 'rank_a', title: 'Caçador Rank A', desc: 'Alcance Nível 35 e 100 treinos finalizados.', icon: '🔮', current: stats.level, target: 35 },
        { id: 'beru', title: 'Rei Formiga (Beru)', desc: 'Acumule 1.000 minutos de cardio.', icon: '🐜', current: Math.floor(stats.totalCardioMin), target: 1000 },
        { id: 'rank_s', title: 'Caçador Rank S', desc: 'Alcance Nível 50 na sua jornada.', icon: '👑', current: stats.level, target: 50 },
        { id: 'monarch', title: 'Monarca das Sombras', desc: 'Conclua 300 treinos no sistema (Anos de dedicação).', icon: '☠️', current: stats.totalWorkouts, target: 300 }
    ];

    let unlockedCount = 0;
    achievements.forEach(a => {
        a.unlocked = a.current >= a.target;
        if (a.unlocked) unlockedCount++;
    });

    return { achievements, unlockedCount, totalCount: achievements.length };
}

function achievementsScreen() {
    stopTotalTimer();
    screen = 'achievements';
    const { achievements, unlockedCount, totalCount } = getAchievements();

    let html = `<div class="app">${header('Conquistas & Sombras')}
    <div class="card" style="background: linear-gradient(135deg, rgba(20,15,35,0.95), rgba(10,8,20,0.98)); border: 1px solid #8a2be2; margin-bottom: 20px; text-align:center;">
        <div style="font-size: 32px; margin-bottom: 4px;">🏆</div>
        <div style="font-size: 18px; font-weight: bold; color: #a855f7;">${unlockedCount} / ${totalCount} Desbloqueadas</div>
        <div style="font-size: 12px; color: #aaa; margin-top: 4px;">Evolua seu Nível e domine o Sistema de Treino</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 30px;">`;

    achievements.forEach(a => {
        const pct = Math.min(100, Math.floor((a.current / a.target) * 100));
        html += `
        <div class="card" style="border-left: 4px solid ${a.unlocked ? '#a855f7' : '#444'}; opacity: ${a.unlocked ? '1' : '0.65'}; background: ${a.unlocked ? 'rgba(20,16,35,0.9)' : 'rgba(15,12,22,0.6)'};">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="font-size:28px;">${a.icon}</span>
                    <div>
                        <div style="font-weight:bold; color:${a.unlocked ? '#fff' : '#aaa'}; font-size:15px;">${esc(a.title)}</div>
                        <div style="font-size:12px; color:#bbb;">${esc(a.desc)}</div>
                    </div>
                </div>
                ${a.unlocked ? '<span style="color:#a855f7; font-weight:bold; font-size:18px;">✓</span>' : ''}
            </div>
            <div style="margin-top:10px;">
                <div style="display:flex; justify-content:space-between; font-size:11px; color:#888; margin-bottom:3px;">
                    <span>Progresso</span>
                    <span>${a.current.toLocaleString('pt-BR')} / ${a.target.toLocaleString('pt-BR')}</span>
                </div>
                <div style="height:6px; background:#222; border-radius:3px; overflow:hidden;">
                    <div style="width:${pct}%; height:100%; background:linear-gradient(90deg, #8a2be2, #a855f7); border-radius:3px;"></div>
                </div>
            </div>
        </div>`;
    });

    html += `</div><button class="secondary" onclick="goHome()" style="width:100%;">Voltar</button></div>`;
    app.innerHTML = html;
}

function recordsScreen() {
    stopTotalTimer();
    screen = 'records';

    const exerciseMap = {};

    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(r => {
        const wData = DATA[r.workout];
        if(!wData) return;
        wData.ex.forEach((exInfo, i) => {
            const exName = exInfo[0];
            if(!exerciseMap[exName]) {
                exerciseMap[exName] = { maxKg: 0, maxReps: 0, est1RM: 0, date: null, workoutKey: r.workout };
            }

            const setGroups = expandedGroups(exInfo[1]);
            setGroups.forEach((groupObj, j) => {
                const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                if(setData.done) {
                    const kg = parseFloat(setData.kg) || 0;
                    const reps = parseInt(setData.reps) || 0;
                    
                    // FILTRAGEM DE PRs: Apenas Séries de Trabalho / Drop set / Rest-pause
                    if(kg > 0 && isValidPRSetType(groupObj.type)) {
                        const e1rm = calc1RM(kg, reps);
                        if(kg > exerciseMap[exName].maxKg || (kg === exerciseMap[exName].maxKg && reps > exerciseMap[exName].maxReps)) {
                            exerciseMap[exName].maxKg = kg;
                            exerciseMap[exName].maxReps = reps;
                            exerciseMap[exName].date = r.date;
                        }
                        if(e1rm > exerciseMap[exName].est1RM) {
                            exerciseMap[exName].est1RM = e1rm;
                        }
                    }
                }
            });
        });
    });

    const categories = [
        { id: 'ALL', label: 'Todos' },
        { id: 'A', label: 'Treino A' },
        { id: 'B', label: 'Treino B' },
        { id: 'C', label: 'Treino C' },
        { id: 'D', label: 'Treino D' },
        { id: 'E', label: 'Treino E' }
    ];

    let html = `<div class="app">${header('Recordes Pessoais (PRs)')}
    
    <div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:10px; margin-bottom:15px;" class="no-scrollbar">`;
    categories.forEach(c => {
        const active = currentRecordsFilter === c.id;
        html += `<button class="${active ? 'primary' : 'secondary'}" style="padding:6px 14px; font-size:12px; white-space:nowrap; border-radius:20px;" onclick="currentRecordsFilter='${c.id}'; recordsScreen();">${c.label}</button>`;
    });
    html += `</div>

    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:30px;">`;

    let entries = Object.entries(exerciseMap);

    if(currentRecordsFilter !== 'ALL') {
        entries = entries.filter(([exName, data]) => {
            return Object.entries(DATA).some(([wKey, wVal]) => wKey === currentRecordsFilter && wVal.ex.some(e => e[0] === exName));
        });
    }

    if(entries.length === 0) {
        html += `<div class="card" style="text-align:center; color:#888; padding:30px;">Nenhum recorde registrado nesta categoria ainda.</div>`;
    } else {
        entries.forEach(([exName, data]) => {
            if(data.maxKg > 0) {
                const dateStr = data.date ? new Date(data.date).toLocaleDateString('pt-BR') : '';
                html += `
                <div class="card" style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="selectedExEvo='${esc(exName)}'; evolutionScreen();">
                    <div style="flex:1; padding-right:10px;">
                        <div style="font-weight:bold; font-size:14px; color:#fff;">${esc(exName)}</div>
                        <div style="font-size:11px; color:#888; margin-top:2px;">Última quebra: ${dateStr}</div>
                    </div>
                    <div style="text-align:right;">
                        <span class="pr-badge-live">${data.maxKg} kg</span>
                        <div style="font-size:11px; color:#aaa; margin-top:2px;">${data.maxReps} reps • 1RM ~${Math.round(data.est1RM)}kg</div>
                    </div>
                </div>`;
            }
        });
    }

    html += `</div><button class="secondary" onclick="goHome()" style="width:100%;">Voltar</button></div>`;
    app.innerHTML = html;
}

// TELA DE EVOLUÇÃO REFORMULADA (Top Bar 3-Segundos + Métricas Duplas + Insight)
function evolutionScreen() {
    stopTotalTimer();
    screen = 'evolution';

    const allExercises = [];
    Object.values(DATA).forEach(w => {
        w.ex.forEach(e => {
            if(!allExercises.includes(e[0])) allExercises.push(e[0]);
        });
    });

    if(!selectedExEvo || !allExercises.includes(selectedExEvo)) {
        selectedExEvo = allExercises[0];
    }

    const historyData = [];
    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(r => {
        const wData = DATA[r.workout];
        if(!wData) return;
        wData.ex.forEach((exInfo, i) => {
            if(exInfo[0] === selectedExEvo) {
                let maxKg = 0;
                let maxReps = 0;
                let best1RM = 0;
                const setGroups = expandedGroups(exInfo[1]);

                setGroups.forEach((groupObj, j) => {
                    const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                    if(setData.done) {
                        const kg = parseFloat(setData.kg) || 0;
                        const reps = parseInt(setData.reps) || 0;
                        // FILTRAGEM DE PR: Apenas Séries de Trabalho / Drop set / Rest-pause
                        if(kg > 0 && isValidPRSetType(groupObj.type)) {
                            const e1rm = calc1RM(kg, reps);
                            if(kg > maxKg || (kg === maxKg && reps > maxReps)) {
                                maxKg = kg;
                                maxReps = reps;
                            }
                            if(e1rm > best1RM) {
                                best1RM = e1rm;
                            }
                        }
                    }
                });

                if(maxKg > 0) {
                    historyData.push({
                        date: new Date(r.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }),
                        fullDate: new Date(r.date).toLocaleDateString('pt-BR'),
                        kg: maxKg,
                        reps: maxReps,
                        est1RM: Math.round(best1RM)
                    });
                }
            }
        });
    });

    let maxKgHistorical = 0;
    let maxKgReps = 0;
    let max1RMHistorical = 0;
    let lastKg = 0;
    let lastReps = 0;
    let firstKg = 0;

    if (historyData.length > 0) {
        firstKg = historyData[0].kg;
        const lastEntry = historyData[historyData.length - 1];
        lastKg = lastEntry.kg;
        lastReps = lastEntry.reps;

        historyData.forEach(h => {
            if (h.kg > maxKgHistorical || (h.kg === maxKgHistorical && h.reps > maxKgReps)) {
                maxKgHistorical = h.kg;
                maxKgReps = h.reps;
            }
            if (h.est1RM > max1RMHistorical) {
                max1RMHistorical = h.est1RM;
            }
        });
    }

    const diffKg = lastKg - firstKg;
    const pctDiff = firstKg > 0 ? Math.round(((lastKg - firstKg) / firstKg) * 100) : 0;

    let html = `<div class="app">${header('Evolução do Exercício')}
    
    <div style="margin-bottom:15px;">
        <label style="font-size:12px; color:#aaa; margin-bottom:5px; display:block;">Selecione o Exercício:</label>
        <select id="evoExSelect" onchange="selectedExEvo=this.value; evolutionScreen();" style="width:100%; padding:12px; background:#141023; border:1px solid #a855f7; border-radius:10px; color:#fff; font-size:14px; font-weight:bold;">`;
        allExercises.forEach(ex => {
            html += `<option value="${esc(ex)}" ${ex === selectedExEvo ? 'selected' : ''}>${esc(ex)}</option>`;
        });
    html += `</select>
    </div>`;

    if(historyData.length === 0) {
        html += `<div class="card" style="text-align:center; color:#888; padding:30px; margin-bottom:20px;">
            Nenhum registro de carga de trabalho encontrado para este exercício.
        </div>`;
    } else {
        // TOP BAR DE 3 SEGUNDOS
        html += `
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px; margin-bottom:16px;">
            <div class="evo-stat-card">
                <div class="lbl">Último</div>
                <div class="val">${lastKg}<span style="font-size:11px; color:#aaa;">kg</span></div>
                <div style="font-size:10px; color:#888; margin-top:2px;">${lastReps} reps</div>
            </div>
            <div class="evo-stat-card" style="border-color:#a855f7; background:rgba(168,85,247,0.15);">
                <div class="lbl" style="color:#c084fc;">Carga Máx</div>
                <div class="val" style="color:#fff;">${maxKgHistorical}<span style="font-size:11px; color:#aaa;">kg</span></div>
                <div style="font-size:10px; color:#a855f7; margin-top:2px;">${maxKgReps} reps</div>
            </div>
            <div class="evo-stat-card">
                <div class="lbl">1RM Est.</div>
                <div class="val">${max1RMHistorical}<span style="font-size:11px; color:#aaa;">kg</span></div>
                <div style="font-size:10px; color:#888; margin-top:2px;">Força Máx</div>
            </div>
        </div>

        <div class="card" style="padding:15px; margin-bottom:15px; position:relative;">
            <div style="font-size:12px; font-weight:bold; color:#a855f7; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">Progressão de Carga (kg)</div>
            <div style="height:220px; width:100%;">
                <canvas id="evoChart"></canvas>
            </div>
        </div>

        <!-- INSIGHT RÁPIDO DE RODA-PÉ -->
        <div class="card" style="background:linear-gradient(135deg, rgba(20,16,35,0.9), rgba(168,85,247,0.15)); border:1px solid rgba(168,85,247,0.4); text-align:center; padding:14px; margin-bottom:20px;">
            <div style="font-size:13px; color:#ddd;">
                ${diffKg >= 0 
                    ? `<strong style="color:#a855f7; font-size:16px;">+${diffKg} kg</strong> (${pctDiff >= 0 ? '+' : ''}${pctDiff}%) desde o primeiro registro`
                    : `<strong style="color:#f87171; font-size:16px;">${diffKg} kg</strong> desde o primeiro registro`
                }
            </div>
        </div>`;
    }

    html += `<button class="secondary" onclick="goHome()" style="width:100%;">Voltar</button></div>`;
    app.innerHTML = html;

    if(historyData.length > 0) {
        loadChartJS(() => {
            const ctx = document.getElementById('evoChart');
            if(!ctx) return;
            if(activeChartInstance) activeChartInstance.destroy();

            activeChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: historyData.map(h => h.date),
                    datasets: [{
                        label: 'Carga (kg)',
                        data: historyData.map(h => h.kg),
                        borderColor: '#a855f7',
                        backgroundColor: 'rgba(168, 85, 247, 0.15)',
                        borderWidth: 3,
                        pointBackgroundColor: '#a855f7',
                        pointBorderColor: '#fff',
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        fill: true,
                        tension: 0.35
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const index = context.dataIndex;
                                    const item = historyData[index];
                                    return ` ${item.kg} kg × ${item.reps} reps (1RM ~${item.est1RM}kg)`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: 'rgba(255, 255, 255, 0.05)' },
                            ticks: { color: '#aaa', font: { size: 10 } }
                        },
                        y: {
                            grid: { color: 'rgba(255, 255, 255, 0.08)' },
                            ticks: { color: '#aaa', font: { size: 11 } },
                            beginAtZero: false
                        }
                    }
                }
            });
        });
    }
}

function goHome(){
    stopTotalTimer();
    screen='home';
    current=null;
    
    const stats = getUserStats();
    const greeting = getGreeting();
    
    const currentWeekWorkouts = db.history.filter(r => {
        const d = new Date(r.date);
        const now = new Date();
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        return d >= startOfWeek;
    }).length;

    const currentWeekCardioMin = db.history.filter(r => {
        const d = new Date(r.date);
        const now = new Date();
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        return d >= startOfWeek;
    }).reduce((acc, curr) => acc + (parseFloat(curr.data?.cardio?.time) || 0), 0);

    const targetW = db.user.targetWorkouts || 5;
    const targetC = db.user.targetCardio || 60;

    let html=`<div class="app">
    ${header('SOLO LEVELING', false)}
    
    <div class="card" style="background: linear-gradient(135deg, rgba(20,15,35,0.95), rgba(10,8,20,0.98)); border: 1px solid #8a2be2; position:relative; overflow:hidden;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
                <div style="font-size:12px; color:#aaa; font-weight:600; text-transform:uppercase; letter-spacing:1px;">${greeting},</div>
                <div style="font-size:20px; font-weight:900; color:#fff; margin-top:2px;">${esc(db.user.name)}</div>
                <div style="font-size:12px; color:#a855f7; font-weight:bold; margin-top:4px; display:inline-block; background:rgba(168,85,247,0.15); padding:2px 8px; border-radius:4px; border:1px solid rgba(168,85,247,0.3);">
                    ${esc(stats.rank)}
                </div>
            </div>
            <div style="text-align:right;">
                <div style="font-size:28px; font-weight:900; color:#a855f7; line-height:1;">${stats.level}</div>
                <div style="font-size:10px; color:#aaa; font-weight:bold; text-transform:uppercase;">Nível</div>
            </div>
        </div>

        <div style="margin-top:14px;">
            <div style="display:flex; justify-content:space-between; font-size:11px; color:#aaa; margin-bottom:4px; font-weight:bold;">
                <span>XP DO SISTEMA</span>
                <span>${stats.currentLevelXP} / ${stats.nextLevelReq} XP</span>
            </div>
            <div style="height:8px; background:#1e1a2e; border-radius:4px; overflow:hidden; border:1px solid rgba(168,85,247,0.3);">
                <div style="width:${stats.progressPct}%; height:100%; background:linear-gradient(90deg, #8a2be2, #a855f7); border-radius:4px;"></div>
            </div>
        </div>
    </div>

    <!-- METAS DA SEMANA COM A CORREÇÃO SOLICITADA DE '60m' PARA '60min' -->
    <div class="card" style="margin-top:12px; padding:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div style="font-size:13px; font-weight:bold; color:#a855f7; text-transform:uppercase;">Meta Semanal do Caçador</div>
            <button class="iconbtn" style="font-size:12px; padding:2px 6px;" onclick="editGoalsModal()">✏️</button>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div style="background:rgba(255,255,255,0.03); padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.05);">
                <div style="font-size:11px; color:#888;">Treinos</div>
                <div style="font-size:15px; font-weight:bold; color:#fff; margin-top:2px;">${currentWeekWorkouts} / ${targetW}</div>
            </div>
            <div style="background:rgba(255,255,255,0.03); padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.05);">
                <div style="font-size:11px; color:#888;">Cardio</div>
                <div style="font-size:15px; font-weight:bold; color:#fff; margin-top:2px;">${Math.floor(currentWeekCardioMin)} / ${targetC}min</div>
            </div>
        </div>
    </div>

    <div class="home-grid">
        <div class="home-card-btn" onclick="evolutionScreen()">
            <div class="icon">📈</div>
            <div class="title">Evolução</div>
        </div>
        <div class="home-card-btn" onclick="recordsScreen()">
            <div class="icon">⚡</div>
            <div class="title">Recordes (PRs)</div>
        </div>
        <div class="home-card-btn" onclick="achievementsScreen()">
            <div class="icon">🏆</div>
            <div class="title">Conquistas</div>
        </div>
        <div class="home-card-btn" onclick="historyScreen()">
            <div class="icon">📜</div>
            <div class="title">Histórico</div>
        </div>
    </div>

    <div class="group-label" style="margin-top:20px;">Dungeons Disponíveis <span>(Treinos)</span></div>
    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:30px;">`;

    Object.entries(DATA).forEach(([k,v])=>{
        const hasDraft = !!db.drafts[k];
        html+=`<div class="card" style="display:flex; justify-content:space-between; align-items:center; border-left: 4px solid #a855f7;">
            <div>
                <div style="font-weight:bold; font-size:16px; color:#fff;">${v.name} ${hasDraft ? '<span style="font-size:11px; color:#a855f7; font-weight:bold;">[EM ANDAMENTO]</span>' : ''}</div>
                <div style="font-size:12px; color:#aaa; margin-top:2px;">${v.desc}</div>
            </div>
            <button class="primary" style="padding:8px 14px; font-size:13px;" onclick="startWorkout('${k}')">${hasDraft ? 'Continuar' : 'Iniciar'}</button>
        </div>`;
    });

    html+=`</div></div>`;
    app.innerHTML=html;
}

function editGoalsModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box">
            <h3 style="color:#a855f7; margin-top:0;">Ajustar Metas Semanais</h3>
            <div style="margin-bottom:12px;">
                <label style="font-size:12px; color:#ccc; display:block; margin-bottom:4px;">Meta de Treinos / semana:</label>
                <input type="number" id="inputTargetW" value="${db.user.targetWorkouts || 5}" style="width:100%; padding:10px; background:#141023; border:1px solid #a855f7; color:#fff; border-radius:8px;">
            </div>
            <div style="margin-bottom:20px;">
                <label style="font-size:12px; color:#ccc; display:block; margin-bottom:4px;">Meta de Cardio (minutos) / semana:</label>
                <input type="number" id="inputTargetC" value="${db.user.targetCardio || 60}" style="width:100%; padding:10px; background:#141023; border:1px solid #a855f7; color:#fff; border-radius:8px;">
            </div>
            <div style="display:flex; gap:10px;">
                <button class="secondary" style="flex:1;" id="cancelGoalBtn">Cancelar</button>
                <button class="primary" style="flex:1;" id="saveGoalBtn">Salvar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('cancelGoalBtn').onclick = () => modal.remove();
    document.getElementById('saveGoalBtn').onclick = () => {
        const w = parseInt(document.getElementById('inputTargetW').value) || 5;
        const c = parseInt(document.getElementById('inputTargetC').value) || 60;
        db.user.targetWorkouts = w;
        db.user.targetCardio = c;
        save();
        modal.remove();
        toast('Metas atualizadas!');
        goHome();
    };
}

function historyScreen() {
    stopTotalTimer();
    screen = 'history';
    let html = `<div class="app">${header('Histórico de Dungeons')}
    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:30px;">`;

    if(db.history.length === 0) {
        html += `<div class="card" style="text-align:center; color:#888; padding:30px;">Nenhum treino registrado ainda.</div>`;
    } else {
        db.history.slice().reverse().forEach((r, idx) => {
            const actualIndex = db.history.length - 1 - idx;
            const wData = DATA[r.workout];
            const name = wData ? wData.name : r.workout;
            const dStr = new Date(r.date).toLocaleString('pt-BR');
            const cardioMin = parseFloat(r.data?.cardio?.time) || 0;

            html += `
            <div class="card" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <div style="font-weight:bold; font-size:15px; color:#fff;">${esc(name)}</div>
                    <div style="font-size:11px; color:#888; margin-top:2px;">${dStr}</div>
                    <div style="font-size:12px; color:#a855f7; margin-top:4px; font-weight:bold;">
                        Volume: ${formatVolume(r.totalVolume || 0)} ${cardioMin > 0 ? `• Cardio: ${cardioMin}min` : ''}
                    </div>
                </div>
                <button class="secondary" style="padding:6px 10px; font-size:12px; border-color:#f87171; color:#f87171;" onclick="deleteHistoryItem(${actualIndex})">🗑️</button>
            </div>`;
        });
    }

    html += `</div><button class="secondary" onclick="goHome()" style="width:100%;">Voltar</button></div>`;
    app.innerHTML = html;
}

function deleteHistoryItem(index) {
    showConfirmModal('Excluir Treino', 'Tem certeza que deseja apagar este registro do histórico?', () => {
        db.history.splice(index, 1);
        save();
        toast('Registro excluído!');
        historyScreen();
    });
}

function settingsScreen() {
    stopTotalTimer();
    screen = 'settings';
    let html = `<div class="app">${header('Configurações do Caçador')}
    <div class="card" style="margin-bottom:20px;">
        <label style="font-size:12px; color:#aaa; display:block; margin-bottom:4px;">Nome do Caçador:</label>
        <input type="text" id="settingNameInput" value="${esc(db.user.name)}" style="width:100%; padding:10px; background:#141023; border:1px solid #a855f7; color:#fff; border-radius:8px; font-weight:bold;">
        <button class="primary" style="width:100%; margin-top:10px;" onclick="saveProfileName()">Salvar Nome</button>
    </div>

    <div class="card" style="margin-bottom:20px;">
        <div style="font-weight:bold; color:#a855f7; margin-bottom:8px;">Dados do Aplicativo</div>
        <button class="secondary" style="width:100%; margin-bottom:8px;" onclick="exportData()">📤 Exportar Backup (JSON)</button>
        <button class="secondary" style="width:100%; margin-bottom:8px;" onclick="importData()">📥 Importar Backup (JSON)</button>
        <button class="secondary" style="width:100%; border-color:#f87171; color:#f87171;" onclick="clearAllData()">⚠️ Resetar Todos os Dados</button>
    </div>

    <button class="secondary" onclick="goHome()" style="width:100%;">Voltar</button>
    </div>`;
    app.innerHTML = html;
}

function saveProfileName() {
    const val = document.getElementById('settingNameInput').value.trim();
    if(val) {
        db.user.name = val;
        save();
        toast('Nome atualizado!');
    }
}

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `solo_leveling_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = e => {
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = event => {
            try {
                const parsed = JSON.parse(event.target.result);
                if(parsed && parsed.history) {
                    db = parsed;
                    save();
                    toast('Dados importados com sucesso!');
                    goHome();
                } else {
                    alert('Arquivo inválido.');
                }
            } catch(err) {
                alert('Erro ao ler arquivo JSON.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function clearAllData() {
    showConfirmModal('RESETAR TUDO', 'Esta ação apagará todo o seu progresso, histórico e nível permanentemente.', () => {
        localStorage.removeItem(KEY);
        location.reload();
    });
}

function startWorkout(wKey) {
    screen = 'workout';
    current = wKey;
    if(!db.drafts[wKey]) {
        db.drafts[wKey] = {
            startTime: Date.now(),
            sets: {},
            cardio: { time: '', speed: '', incline: '' },
            obs: ''
        };
        save();
    }
    requestWakeLock();
    renderWorkoutScreen();
}

async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
        }
    } catch (err) {}
}

function releaseWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release().then(() => { wakeLock = null; });
    }
}

function stopTotalTimer() {
    if(totalTimerId) { clearInterval(totalTimerId); totalTimerId = null; }
    releaseWakeLock();
}

function renderWorkoutScreen() {
    const wData = DATA[current];
    const draft = db.drafts[current];

    let html = `<div class="app">
    <div class="top">
        <div class="brand">${wData.name}</div>
        <button class="iconbtn" onclick="confirmExitWorkout()">‹</button>
    </div>
    
    <div class="card" style="margin-bottom:12px; padding:10px 14px;">
        <div style="font-size:12px; color:#aaa;">${wData.desc}</div>
        <div style="font-size:11px; color:#a855f7; margin-top:4px; font-weight:bold;">Mob: ${wData.mob}</div>
    </div>`;

    wData.ex.forEach((exInfo, exIdx) => {
        const exName = exInfo[0];
        const groups = exInfo[1];
        const note = exInfo[2];
        const setGroups = expandedGroups(groups);

        html += `<div class="card" style="margin-bottom:14px; padding:12px;">
            <div style="font-weight:bold; font-size:15px; color:#fff; margin-bottom:4px;">${exIdx + 1}. ${esc(exName)}</div>`;
            if(note) {
                html += `<div class="tech-inline" style="margin-bottom:8px;">📌 ${esc(note)}</div>`;
            }

            setGroups.forEach((groupObj, setIdx) => {
                const setKey = `${current}-${exIdx}-${setIdx}`;
                const setData = draft.sets[setKey] || { kg: '', reps: '', done: false };

                html += `<div style="display:flex; align-items:center; gap:8px; margin-top:8px; background:rgba(255,255,255,0.02); padding:6px; border-radius:8px;">
                    <span style="font-size:11px; font-weight:bold; color:#a855f7; width:75px;">${groupObj.type}</span>
                    <input type="number" placeholder="kg" value="${setData.kg}" style="width:60px; padding:6px; background:#141023; border:1px solid #444; border-radius:6px; color:#fff; text-align:center; font-weight:bold;" onchange="updateSetData('${setKey}', 'kg', this.value)">
                    <span style="font-size:12px; color:#666;">×</span>
                    <input type="number" placeholder="reps" value="${setData.reps}" style="width:60px; padding:6px; background:#141023; border:1px solid #444; border-radius:6px; color:#fff; text-align:center; font-weight:bold;" onchange="updateSetData('${setKey}', 'reps', this.value)">
                    <button class="${setData.done ? 'primary' : 'secondary'}" style="margin-left:auto; padding:6px 12px; font-size:12px;" onclick="toggleSetDone('${setKey}')">${setData.done ? '✓ Feito' : 'Concluir'}</button>
                </div>`;
            });

        html += `</div>`;
    });

    // CARDIO E OBSERVAÇÕES
    html += `<div class="card" style="margin-bottom:14px; padding:12px;">
        <div style="font-weight:bold; color:#a855f7; margin-bottom:8px;">🏃 Aeróbico / Cardio</div>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
            <div>
                <label style="font-size:10px; color:#888;">Tempo (min)</label>
                <input type="number" value="${draft.cardio.time || ''}" style="width:100%; padding:6px; background:#141023; border:1px solid #444; border-radius:6px; color:#fff;" onchange="updateCardio('time', this.value)">
            </div>
            <div>
                <label style="font-size:10px; color:#888;">Vel. (km/h)</label>
                <input type="number" value="${draft.cardio.speed || ''}" style="width:100%; padding:6px; background:#141023; border:1px solid #444; border-radius:6px; color:#fff;" onchange="updateCardio('speed', this.value)">
            </div>
            <div>
                <label style="font-size:10px; color:#888;">Inclin. (%)</label>
                <input type="number" value="${draft.cardio.incline || ''}" style="width:100%; padding:6px; background:#141023; border:1px solid #444; border-radius:6px; color:#fff;" onchange="updateCardio('incline', this.value)">
            </div>
        </div>
    </div>

    <div class="card" style="margin-bottom:20px; padding:12px;">
        <div style="font-weight:bold; color:#a855f7; margin-bottom:8px;">📝 Observações do Treino</div>
        <textarea style="width:100%; padding:8px; background:#141023; border:1px solid #444; border-radius:6px; color:#fff; height:60px;" onchange="updateObs(this.value)">${esc(draft.obs || '')}</textarea>
    </div>

    <!-- TIMER DE TEMPO TOTAL E PAUSA GLOBAL -->
    <div class="card total-bottom" style="text-align:center;">
        <div style="font-size:11px; color:#aaa; font-weight:bold; text-transform:uppercase;">Tempo Total de Treino</div>
        <strong id="totalTime">00:00:00</strong>
    </div>

    <div style="position:fixed; bottom:0; left:0; width:100%; display:flex; gap:10px; padding:12px; background:#0b0914; border-top:1px solid #a855f7; box-sizing:border-box; z-index:100;">
        <button class="primary" style="flex:1; padding:14px; font-size:16px;" onclick="finishWorkout()">FINALIZAR TREINO</button>
    </div>

    </div>`;

    app.innerHTML = html;
    startTotalTimer();
}

function startTotalTimer() {
    if(totalTimerId) clearInterval(totalTimerId);
    const update = () => {
        const draft = db.drafts[current];
        if(!draft) return;
        const diff = Math.floor((Date.now() - draft.startTime) / 1000);
        const hrs = String(Math.floor(diff / 3600)).padStart(2, '0');
        const mins = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
        const secs = String(diff % 60).padStart(2, '0');
        const el = document.getElementById('totalTime');
        if(el) el.textContent = `${hrs}:${mins}:${secs}`;
    };
    update();
    totalTimerId = setInterval(update, 1000);
}

function updateSetData(key, field, val) {
    if(!db.drafts[current]) return;
    if(!db.drafts[current].sets[key]) {
        db.drafts[current].sets[key] = { kg: '', reps: '', done: false };
    }
    db.drafts[current].sets[key][field] = val;
    save();
}

function toggleSetDone(key) {
    if(!db.drafts[current]) return;
    if(!db.drafts[current].sets[key]) {
        db.drafts[current].sets[key] = { kg: '', reps: '', done: false };
    }
    db.drafts[current].sets[key].done = !db.drafts[current].sets[key].done;
    save();
    renderWorkoutScreen();
}

function updateCardio(field, val) {
    if(!db.drafts[current]) return;
    db.drafts[current].cardio[field] = val;
    save();
}

function updateObs(val) {
    if(!db.drafts[current]) return;
    db.drafts[current].obs = val;
    save();
}

function confirmExitWorkout() {
    showConfirmModal('Sair da Dungeon', 'Seu progresso ficará salvo em andamento. Deseja sair?', () => {
        goHome();
    });
}

function finishWorkout() {
    const draft = db.drafts[current];
    if(!draft) return;

    let totalVol = 0;
    const wData = DATA[current];

    wData.ex.forEach((exInfo, exIdx) => {
        const setGroups = expandedGroups(exInfo[1]);
        setGroups.forEach((_, setIdx) => {
            const setKey = `${current}-${exIdx}-${setIdx}`;
            const setData = draft.sets[setKey];
            if(setData && setData.done) {
                const kg = parseFloat(setData.kg) || 0;
                const reps = parseInt(setData.reps) || 0;
                totalVol += (kg * reps);
            }
        });
    });

    const record = {
        id: uid(),
        date: new Date().toISOString(),
        workout: current,
        durationSec: Math.floor((Date.now() - draft.startTime) / 1000),
        totalVolume: totalVol,
        data: draft
    };

    db.history.push(record);
    delete db.drafts[current];
    save();

    SoundFX.playLevelUp();
    toast('Dungeon Concluída! XP Adicionado!');
    goHome();
}

// Inicialização da Aplicação
goHome();