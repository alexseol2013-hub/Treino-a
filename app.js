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

const KEY='solo_leveling_v14';

let db;
try {
    db = JSON.parse(localStorage.getItem(KEY)) || null;
} catch (e) {
    db = null;
}
db = db || {history:[],drafts:{},user:{name:'Sung Jin-Woo'},restState:{deadline:0,total:0,startedAt:0}};

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
        .tech { font-size: 13px !important; font-weight: bold; color: #a855f7; margin-top: 4px; }
        .group-label { font-size: 15px !important; font-weight: bold; color: #a855f7; margin: 12px 0 6px 0; }
        .group-label span { font-size: 13px !important; color: #bbb; font-weight: normal; }
        .total-bottom { margin-bottom: 120px !important; border: 2px solid rgba(168,85,247,0.4) !important; padding: 16px !important; border-radius: 12px; background: rgba(15,12,25,0.8); }
        .total-bottom strong#totalTime { font-size: 28px !important; color: #a855f7; }
        .global-rest { padding: 10px 14px !important; min-height: 75px; background: #0b0914; border-top: 2px solid #a855f7; }
        .global-rest strong#globalRestClock { font-size: 26px !important; color: #a855f7; }
        .global-rest-actions button.mini { font-size: 13px !important; padding: 8px 12px !important; font-weight: bold !important; border-radius: 6px !important; }
        .global-rest-actions button.mini.start { font-size: 14px !important; padding: 8px 16px !important; background: linear-gradient(135deg, #8a2be2, #a855f7) !important; color: #fff; }
    `;
    document.head.appendChild(styleEl);
}

const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

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
    if (level >= 1000) return "Monarca das Sombras";
    if (level >= 500)  return "Comandante de Sombras";
    if (level >= 250)  return "Caçador Rank Nacional";
    if (level >= 100)  return "Caçador Rank S";
    if (level >= 75)   return "Caçador Rank A";
    if (level >= 50)   return "Caçador Rank B";
    if (level >= 30)   return "Caçador Rank C";
    if (level >= 15)   return "Caçador Rank D";
    if (level >= 5)    return "Caçador Rank E";
    return "Iniciante / Humano";
}

function getRequiredXPForLevel(lvl) {
    return Math.floor(120 * Math.pow(lvl, 1.95));
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

        totalXP += 200 + Math.floor(cardioMin * 3);

        const wData = DATA[r.workout];
        if(wData){
            wData.ex.forEach((exInfo, i) => {
                let exCompleted = true;
                expandedGroups(exInfo[1]).forEach((_, j) => {
                    const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                    if(setData.done) {
                        totalSetsDone++;
                        totalXP += 15;
                        const kg = parseFloat(setData.kg) || 0;
                        const reps = parseInt(setData.reps) || 0;
                        const exKey = exInfo[0];
                        if (kg > 0) {
                            const prevBest = prTracker[exKey] || { kg: 0, reps: 0 };
                            if (kg > prevBest.kg || (kg === prevBest.kg && reps > prevBest.reps)) {
                                prTracker[exKey] = { kg, reps };
                                totalPRsCount++;
                                totalXP += 300; 
                            }
                        }
                    } else {
                        exCompleted = false;
                    }
                });
                if(exCompleted) totalXP += 60;
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
        { id: 'igris', title: 'Sombra de Igris', desc: 'Quebre 5 Recordes Pessoais (PRs).', icon: '🗡️', current: stats.totalPRsCount, target: 5 },
        { id: 'rank_c', title: 'Caçador Rank C', desc: 'Complete 15 treinos e 50 séries.', icon: '🛡️', current: stats.totalWorkouts, target: 15 },
        { id: 'tank', title: 'Sombra de Tank', desc: 'Mova mais de 25.000 kg de volume total.', icon: '🐻', current: stats.totalVolume, target: 25000 },
        { id: 'rank_a', title: 'Caçador Rank A', desc: 'Alcance Nível 25 e 50 treinos finalizados.', icon: '🔮', current: stats.level, target: 25 },
        { id: 'beru', title: 'Rei Formiga (Beru)', desc: 'Acumule 300 minutos de cardio.', icon: '🐜', current: Math.floor(stats.totalCardioMin), target: 300 },
        { id: 'rank_s', title: 'Caçador Rank S', desc: 'Alcance Nível 50 na sua jornada.', icon: '👑', current: stats.level, target: 50 },
        { id: 'monarch', title: 'Monarca das Sombras', desc: 'Conclua 100 treinos no sistema.', icon: '☠️', current: stats.totalWorkouts, target: 100 }
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
        <div style="font-size: 32px; margin-bottom:4px;">☠️</div>
        <div style="font-size: 20px; font-weight: bold; color: #fff;">Exército de Sombras & Ranks</div>
        <div style="font-size: 13px; color: #a855f7; margin-top: 4px; font-weight:bold;">${unlockedCount} de ${totalCount} Desbloqueados</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">`;

    achievements.forEach(a => {
        const pct = Math.min(100, Math.floor((a.current / a.target) * 100));
        html += `<div class="card" style="display:flex; gap:12px; align-items:center; border: 1px solid ${a.unlocked ? '#a855f7' : 'rgba(255,255,255,0.1)'}; background: ${a.unlocked ? 'rgba(168, 85, 247, 0.08)' : 'rgba(15,12,25,0.6)'}">
            <div style="font-size:36px; opacity:${a.unlocked ? '1' : '0.3'}">${a.icon}</div>
            <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:baseline;">
                    <strong styl