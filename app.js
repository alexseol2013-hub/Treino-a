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

const KEY='solo_leveling_v13';

let db;
try {
    db = JSON.parse(localStorage.getItem(KEY)) || null;
} catch (e) {
    console.error("Erro ao ler localStorage, reiniciando estado:", e);
    db = null;
}
db = db || {history:[],drafts:{},user:{name:'Alexsandro'},restState:{deadline:0,total:0,startedAt:0}};

let screen='home',current=null,timerId=null,totalTimerId=null;

let currentEvolutionMetric = 'kg'; 
let currentEvolutionFilter = 'ALL';
let currentRecordsFilter = 'ALL';
let searchFilterQuery = '';
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

if(!document.getElementById('monarch-pr-styles')){
    const styleEl = document.createElement('style');
    styleEl.id = 'monarch-pr-styles';
    styleEl.textContent = `
        @keyframes prMonarchPulse {
            0% { transform: scale(1); box-shadow: 0 0 8px rgba(168,85,247,0.4); }
            50% { transform: scale(1.04); box-shadow: 0 0 16px rgba(168,85,247,0.9); }
            100% { transform: scale(1); box-shadow: 0 0 8px rgba(168,85,247,0.4); }
        }
        .pr-badge-live {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: rgba(168, 85, 247, 0.15);
            border: 1px solid #a855f7;
            color: #a855f7;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.5px;
            animation: prMonarchPulse 1.6s infinite ease-in-out;
            text-transform: uppercase;
        }
        .tech { font-size: 14px !important; font-weight: bold; color: #a855f7; margin-top: 6px; }
        .tech-inline { font-size: 13px !important; font-weight: bold; color: #8a2be2; margin-top: 4px; }
        .group-label { font-size: 16px !important; font-weight: bold; color: #a855f7; margin: 12px 0 6px 0; }
        .group-label span { font-size: 14px !important; color: #ddd; font-weight: normal; }
        .total-bottom { margin-bottom: 120px !important; border: 2px solid rgba(168,85,247,0.4) !important; padding: 18px !important; }
        .total-bottom strong#totalTime { font-size: 28px !important; color: #a855f7; }
        .global-rest { padding: 12px 14px !important; min-height: 80px; }
        .global-rest strong#globalRestClock { font-size: 28px !important; color: #a855f7; }
        .global-rest-actions button.mini { font-size: 14px !important; padding: 10px 14px !important; font-weight: bold !important; border-radius: 8px !important; }
        .global-rest-actions button.mini.start { font-size: 15px !important; padding: 10px 18px !important; background: linear-gradient(135deg, #8a2be2, #a855f7) !important; }
    `;
    document.head.appendChild(styleEl);
}

const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

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
    if (level >= 1000) return "Ser Absoluto";
    if (level >= 500)  return "Monarca";
    if (level >= 250)  return "Rank Nacional";
    if (level >= 100)  return "Rank S";
    if (level >= 75)   return "Rank A";
    if (level >= 50)   return "Rank B";
    if (level >= 30)   return "Rank C";
    if (level >= 15)   return "Rank D";
    if (level >= 5)    return "Rank E";
    return "Iniciante";
}

function getRequiredXPForLevel(lvl) {
    return Math.floor(100 * Math.pow(lvl, 2.1));
}

function getUserStats(){
    const totalWorkouts = db.history.length;
    let totalXP = 0;
    let totalVolume = 0;
    let totalCardioMin = 0;
    let totalCardioSessions = 0;
    let maxKgGlobal = 0;

    db.history.forEach(r => {
        const cardioMin = parseFloat(r.data?.cardio?.time) || 0;
        if (cardioMin > 0) totalCardioSessions++;
        const vol = (r.totalVolume || 0);
        totalVolume += vol;
        totalCardioMin += cardioMin;

        totalXP += 200 + Math.floor(cardioMin) + Math.floor(vol / 50);

        const wData = DATA[r.workout];
        if(wData){
            wData.ex.forEach((exInfo, i) => {
                expandedGroups(exInfo[1]).forEach((_, j) => {
                    const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                    const kg = parseFloat(setData.kg) || 0;
                    if(kg > maxKgGlobal) maxKgGlobal = kg;
                });
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
    const rank = getRankTitle(totalWorkouts);
    const lastWorkout = db.history.length ? db.history[db.history.length - 1].date : null;

    return { 
        level, 
        rank,
        currentLevelXP: accumulatedXP, 
        nextLevelReq, 
        progressPct, 
        totalWorkouts, 
        totalCardioSessions,
        lastWorkoutDateStr: getRelativeDate(lastWorkout), 
        totalVolume, 
        totalCardioMin, 
        maxKgGlobal 
    };
}

function getAchievements() {
    const stats = getUserStats();
    const achievements = [
        { id: 'rank_e', title: 'Rank E', desc: 'Alcance 5 treinos concluídos.', icon: '🛡️', current: stats.totalWorkouts, target: 5 },
        { id: 'rank_d', title: 'Rank D', desc: 'Alcance 15 treinos concluídos + 5 cardios.', icon: '⚔️', current: stats.totalWorkouts + stats.totalCardioSessions, target: 20 },
        { id: 'rank_c', title: 'Rank C', desc: 'Alcance 30 treinos concluídos + 10 cardios.', icon: '⚡', current: stats.totalWorkouts + stats.totalCardioSessions, target: 40 },
        { id: 'rank_b', title: 'Rank B', desc: 'Alcance 50 treinos concluídos + 20 cardios.', icon: '🔥', current: stats.totalWorkouts + stats.totalCardioSessions, target: 70 },
        { id: 'rank_a', title: 'Rank A', desc: 'Alcance 75 treinos concluídos + 35 cardios.', icon: '🔮', current: stats.totalWorkouts + stats.totalCardioSessions, target: 110 },
        { id: 'rank_s', title: 'Rank S', desc: 'Alcance 100 treinos concluídos + 50 cardios.', icon: '👑', current: stats.totalWorkouts + stats.totalCardioSessions, target: 150 },
        { id: 'rank_nacional', title: 'Rank Nacional', desc: 'Alcance 250 treinos concluídos + 100 cardios.', icon: '🌟', current: stats.totalWorkouts + stats.totalCardioSessions, target: 350 },
        { id: 'rank_monarca', title: 'Rank Monarca', desc: 'Alcance 500 treinos concluídos + 200 cardios.', icon: '☠️', current: stats.totalWorkouts + stats.totalCardioSessions, target: 700 },
        { id: 'rank_absoluto', title: 'Rank Ser Absoluto', desc: 'Alcance 1000 treinos concluídos + 500 cardios.', icon: '🌌', current: stats.totalWorkouts + stats.totalCardioSessions, target: 1500 }
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

    let html = `<div class="app">${header('Conquistas & Ranks')}
    <div class="card" style="background: linear-gradient(135deg, rgba(20,15,35,0.95), rgba(10,8,20,0.98)); border: 1px solid #8a2be2; margin-bottom: 20px; text-align:center;">
        <div style="font-size: 32px; margin-bottom:4px;">🎖️</div>
        <div style="font-size: 20px; font-weight: bold; color: #fff;">Escala de Ranks do Caçador</div>
        <div style="font-size: 13px; color: #a855f7; margin-top: 4px; font-weight:bold;">${unlockedCount} de ${totalCount} Conquistados</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">`;

    achievements.forEach(a => {
        const pct = Math.min(100, Math.floor((a.current / a.target) * 100));
        html += `<div class="card" style="display:flex; gap:12px; align-items:center; border: 1px solid ${a.unlocked ? '#a855f7' : 'rgba(255,255,255,0.1)'}; background: ${a.unlocked ? 'rgba(168, 85, 247, 0.08)' : 'rgba(15,12,25,0.6)'}">
            <div style="font-size:36px; opacity:${a.unlocked ? '1' : '0.3'}">${a.icon}</div>
            <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:baseline;">
                    <strong style="font-size:16px; color:${a.unlocked ? '#a855f7' : '#fff'}">${esc(a.title)}</strong>
                    ${a.unlocked ? `<span style="font-size:10px; color:#a855f7; font-weight:bold; border:1px solid #a855f7; padding:2px 6px; border-radius:4px;">DESBLOQUEADO</span>` : `<span style="font-size:11px; color:#aaa;">${a.current}/${a.target}</span>`}
                </div>
                <div class="muted" style="font-size:12px; margin-top:2px;">${esc(a.desc)}</div>
                ${!a.unlocked ? `
                <div style="width:100%; background:rgba(255,255,255,0.08); height:6px; border-radius:3px; overflow:hidden; margin-top:8px;">
                    <div style="width:${pct}%; background:#8a2be2; height:100%;"></div>
                </div>` : ''}
            </div>
        </div>`;
    });

    html += `</div></div>`;
    app.innerHTML = html;
}

async function requestWakeLock() {
    try { if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen'); } catch (e) {}
}
function releaseWakeLock() {
    if (wakeLock) { wakeLock.release(); wakeLock = null; }
}

async function requestNotifications(){try{if('Notification' in window&&Notification.permission==='default')await Notification.requestPermission()}catch(e){}}

function showRestAlertModal() {
    const div = document.createElement('div');
    div.innerHTML = `
        <div style="background:#0b0a12; padding:35px 20px; border-radius:16px; border:2px solid #a855f7; text-align:center; width:90%; max-width:350px; box-shadow: 0 0 35px rgba(168, 85, 247, 0.6);">
            <div style="font-size:50px; margin-bottom:10px;">💪</div>
            <h2 style="color:#a855f7; margin:0 0 10px 0; font-size:22px; font-weight:800;">FIM DO DESCANSO!</h2>
            <p style="color:#e0e0e0; margin-bottom:25px; font-size:15px; line-height:1.4;">Hora de subir de nível. Volte para a próxima série!</p>
            <button class="primary" style="width:100%; padding:14px; font-size:16px; font-weight:bold; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="this.parentElement.parentElement.remove()">ESTOU PRONTO</button>
        </div>
    `;
    div.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:99999; display:flex; align-items:center; justify-content:center; animation: fadeIn 0.3s;';
    document.body.appendChild(div);
}

function notifyRestDone(){
    playBeep();
    navigator.vibrate?.([500,200,500,200,800]);
    if('Notification' in window && Notification.permission==='granted'){
        try{ new Notification('Solo Leveling',{body:'⏱️ Descanso concluído! Hora de subir de nível.',icon:'icon.svg',tag:'solo-rest'}); }catch(e){}
    }
    showRestAlertModal();
}

function home(){
    stopTotalTimer();
    screen='home';
    const stats = getUserStats();
    const { unlockedCount, totalCount } = getAchievements();
    
    app.innerHTML=`<div class="app">${header('Painel do Caçador', false)}
    <div class="card" style="background: linear-gradient(135deg, rgba(20,15,35,0.95), rgba(10,8,20,0.98)); border: 1px solid #a855f7; box-shadow: 0 0 25px rgba(168, 85, 247, 0.25); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 13px; color: #a855f7; text-transform: uppercase; letter-spacing: 1.5px; font-weight:bold;">${esc(stats.rank)}</div>
        <div style="font-size: 22px; font-weight: bold; color: #fff; margin-top: 2px;">${getGreeting()}, ${esc(db.user.name)}</div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 15px;">
            <span style="font-size: 18px; font-weight: bold; color: #a855f7;">Nível ${stats.level}</span>
            <span style="font-size: 13px; color: #a855f7; font-weight:bold;">XP: ${stats.currentLevelXP} / ${stats.nextLevelReq}</span>
        </div>
        <div style="width: 100%; background: rgba(255,255,255,0.08); height: 10px; border-radius: 5px; overflow: hidden; margin-top: 6px; border: 1px solid rgba(168,85,247,0.3);">
            <div style="width: ${stats.progressPct}%; background: linear-gradient(90deg, #6366f1, #8a2be2, #a855f7); height: 100%; transition: width 0.3s;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 13px;">
            <div><span style="color: #888;">Treinos Concluídos:</span> <strong style="color:#fff;">${stats.totalWorkouts}</strong></div>
            <div><span style="color: #888;">Último Treino:</span> <strong style="color:#a855f7;">${stats.lastWorkoutDateStr}</strong></div>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <button class="primary" style="padding: 18px; font-size: 18px; font-weight: bold; text-align: left; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="selectWorkoutScreen()">⚔️ Treinar Agora</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="historyScreen()">📈 Histórico e Estatísticas</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="evolutionScreen(currentEvolutionFilter)">📊 Evolução de Cargas & Volume</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="recordsScreen(currentRecordsFilter)">🏆 Recordes Pessoais (PRs)</button>
        <button class="secondary" style="text-align: left; padding: 14px; display:flex; justify-content:space-between; align-items:center;" onclick="achievementsScreen()"><span>🎖️ Conquistas & Ranks</span><span style="font-size:12px; color:#a855f7; font-weight:bold;">${unlockedCount}/${totalCount}</span></button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="settingsScreen()">⚙️ Configurações</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="pdfScreen()">📄 Planilha / PDF</button>
    </div>
    </div>`;
}

function selectWorkoutScreen(){
    app.innerHTML=`<div class="app">${header('Escolha seu treino')}
    <p class="muted">Segunda A · Terça B · Quarta C · Quinta descanso · Sexta D · Sábado E · Domingo descanso.</p>
    <div class="grid" style="margin-top:15px">${Object.entries(DATA).map(([k,v])=>`<button class="day" onclick="openWorkout('${k}')"><strong>${v.name}</strong><span>${v.desc}</span><small>${v.ex.length} exercícios</small></button>`).join('')}</div>
    </div>`;
}

function getExercisePR(workoutKey, exIndex) {
    const exName = DATA[workoutKey]?.ex[exIndex]?.[0];
    if(!exName) return { kg: 0, reps: 0 };
    let bestKg = 0, bestReps = 0;
    
    db.history.forEach(r => {
        const wData = DATA[r.workout];
        if(!wData) return;
        wData.ex.forEach((exInfo, i) => {
            if(exInfo[0] === exName) {
                expandedGroups(exInfo[1]).forEach((_, j) => {
                    const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                    const kg = parseFloat(setData.kg) || 0;
                    const reps = parseInt(setData.reps) || 0;
                    if(kg > bestKg || (kg === bestKg && reps > bestReps)){
                        bestKg = kg; bestReps = reps;
                    }
                });
            }
        });
    });
    return { kg: bestKg, reps: bestReps };
}

function getLastExerciseData(workoutKey, exIndex, setIndex){
    const history = db.history.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
    for(let record of history){
        if(record.workout === workoutKey){
            const k = `${workoutKey}-${exIndex}-${setIndex}`;
            const set = record.data?.sets?.[k];
            if(set && set.kg) return { kg: set.kg, reps: set.reps };
        }
    }
    return null;
}

function draft(){db.drafts[current]??={sets:{},exDone:{},cardio:{},startedAt:null, scheduledRestTotal:0};return db.drafts[current]}
function openWorkout(k){current=k;screen='workout';draft();save();renderWorkout()}
function parseQty(q){const m=String(q).match(/(\d+)\s*[–-]\s*(\d+)/);if(m)return Number(m[2]);const n=String(q).match(/\d+/);return n?Number(n[0]):1}
function expandedGroups(groups){let out=[];groups.forEach((g,gi)=>{const qty=parseQty(g[1]);for(let n=1;n<=qty;n++)out.push({group:g,groupIndex:gi,number:n,total:qty});});return out}
function makeKey(exi,si){return `${current}-${exi}-${si}`}

function calculateDraftMetrics(d){
    let totalVolume = 0;
    let totalWeightRaw = 0;
    Object.values(d.sets||{}).forEach(s => {
        if(s.done && s.kg){
            const kg = parseFloat(s.kg) || 0;
            const reps = parseInt(s.reps) || 0;
            totalVolume += (kg * reps);
            totalWeightRaw += kg;
        }
    });
    return { totalVolume, totalWeightRaw };
}

function renderWorkout(){
    stopTotalTimer();
    const v=DATA[current],d=draft();
    const started=!!d.startedAt;
    const metrics = calculateDraftMetrics(d);

    app.innerHTML=`<div class="app">${header(v.name)}
    <div class="muted">${v.desc} · ${v.mob}</div>
    <div class="start-panel" style="padding:16px;">
        <div><strong>${started?'Treino em andamento':'Treino não iniciado'}</strong>
        <div class="muted" style="font-size:13px;">${started?'O tempo está contando.':'Quando estiver pronto, toque em iniciar.'}</div></div>
        <button class="primary start-workout" style="font-size:16px; padding:12px 20px; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="startWorkout()" ${started?'disabled':''}>${started?'✓ Iniciado':'▶ Iniciar'}</button>
    </div>
    
    ${v.ex.map((ex,i)=>exerciseHTML(ex,i,d)).join('')}
    
    <div class="section-title">Cardio do dia</div>
    <div class="card">
        <div class="fields"><label>Tempo (min)<input id="cardioTime" type="number" min="0" step="0.1" value="${esc(d.cardio.time||'')}"></label><label>Distância (km)<input id="cardioDist" type="number" min="0" step="0.01" value="${esc(d.cardio.dist||'')}"></label></div>
        <div class="fields"><label>BPM médio<input id="cardioBpm" type="number" min="0" step="1" value="${esc(d.cardio.bpm||'')}"></label><label>Observação<input id="cardioObs" type="text" value="${esc(d.cardio.obs||'')}"></label></div>
        <button class="secondary" onclick="saveCardio()">💾 Salvar cardio</button>
    </div>
    
    <button class="finish" style="background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="finishWorkout()" ${started?'':'disabled'}>✓ Finalizar e salvar treino</button>
    <button class="secondary danger" onclick="cancelWorkout()">Sair e manter rascunho</button>
    
    <div class="total-bottom">
        <div class="muted" style="font-size:12px; font-weight:bold; letter-spacing:1px; color:#a855f7;">TEMPO TOTAL DO TREINO</div>
        <strong id="totalTime">${started?formatDuration(Math.floor((Date.now()-d.startedAt)/1000)):'00:00'}</strong>
        <div style="margin-top:8px; font-size:14px; color:#aaa;">Volume Total: <strong style="color:#a855f7; font-size:16px;">${metrics.totalVolume.toLocaleString('pt-BR')} kg</strong></div>
        <div style="font-size:14px; color:#aaa;">Carga Somada Bruta: <strong style="color:#a855f7; font-size:16px;">${metrics.totalWeightRaw.toLocaleString('pt-BR')} kg</strong></div>
        <div class="muted" id="restTotalLabel" style="margin-top:8px; font-size:13px; font-weight:bold; color:#e0e0e0; background:rgba(168,85,247,0.1); padding:8px; border-radius:6px; border:1px solid rgba(168,85,247,0.3);">
            Descanso realizado: <span style="color:#a855f7;">${formatDuration(restTotalForDraft())}</span> / <span style="color:#00f3ff;">${formatDuration(d.scheduledRestTotal||0)}</span> programado
        </div>
    </div></div>
    
    <div class="global-rest" id="globalRest">
        <div><small style="font-size:11px; font-weight:bold; color:#aaa;">TEMPORIZADOR DE DESCANSO</small><br><strong id="globalRestClock">00:00</strong></div>
        <div class="global-rest-actions" style="display:flex; gap:6px; align-items:center;">
            <button class="mini" onclick="setGlobalRest(45)">45s</button>
            <button class="mini" onclick="setGlobalRest(60)">1m</button>
            <button class="mini" onclick="setGlobalRest(120)">2m</button>
            <button class="mini" onclick="setGlobalRest(180)">3m</button>
            <button class="mini start" onclick="startGlobalRest()">Iniciar</button>
        </div>
    </div>`;
    if(started)startTotalTimer();
    updateGlobalRestUI();
}

function swapExercise(i){
    const currentName = DATA[current].ex[i][0];
    const newName = prompt('Substituir este exercício por:', currentName);
    if(newName && newName.trim() !== '' && newName !== currentName){
        DATA[current].ex[i][0] = newName.trim();
        renderWorkout();
        toast('Exercício alterado');
    }
}

function exerciseHTML(ex,i,d){
    const [name,groups,tech]=ex;
    const done=!!d.exDone[i];
    if(done)return '';
    const rows=expandedGroups(groups);
    let lastGroup=-1;
    const pr = getExercisePR(current, i);
    
    let html=`<div class="card" style="padding:16px;">
        <div class="exercise-head" style="display:flex; justify-content:space-between; align-items:center;">
            <div class="exercise-name" style="flex:1; font-size:18px !important; font-weight:bold; color:#fff;">${i+1}. ${esc(name)}</div>
            <button class="mini" type="button" style="margin-left:8px; font-size:12px; padding:6px 10px;" onclick="swapExercise(${i})">🔄 Trocar</button>
        </div>
        ${tech?`<div class="tech" style="font-size:14px; font-weight:bold; color:#a855f7; margin-top:6px;">⚡ ${esc(tech)}</div>`:''}`;
    
    rows.forEach((r,si)=>{
        const [type,qty,reps,rest]=r.group;
        const k=makeKey(i,si),x=d.sets[k]||{};
        if(x.done)return;
        if(r.groupIndex!==lastGroup){
            html+=`<div class="group-label">${esc(type)} <span>${esc(qty)} série(s) · ${esc(reps)} reps · ${esc(rest)}</span></div>`;
            lastGroup=r.groupIndex;
        }
        let special='';
        if(tech){
            const lower=tech.toLowerCase();
            const isLast=si===rows.length-1;
            if((lower.includes('drop')||lower.includes('rest pause'))&&isLast)special=`<div class="tech-inline">${esc(tech)}</div>`;
        }
        
        const prev = getLastExerciseData(current, i, si);
        const prevLabel = prev ? `Anterior: ${prev.kg}kg × ${prev.reps}` : 'Primeira vez';
        
        const currentKg = parseFloat(x.kg ?? (prev ? prev.kg : 0)) || 0;
        const currentReps = parseInt(x.reps ?? (prev ? prev.reps : 0)) || 0;
        
        const isPR = currentKg > 0 && (currentKg > pr.kg || (currentKg === pr.kg && currentReps > pr.reps && pr.kg > 0));

        const badgeHtml = isPR ? `<span class="pr-badge-live">⚡ NOVO PR!</span>` : `<span style="font-size:12px; color:#a855f7; font-weight:bold;">${prevLabel}</span>`;

        html+=`<div class="set" style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.06);"><div class="sethead"><div class="settype" style="font-size:15px; font-weight:bold; color:#a855f7;">${esc(type)} · Série ${r.number}/${r.total}</div>${badgeHtml}</div>
        <div class="fields" style="margin-top:8px;">
            <label style="font-size:12px; font-weight:bold; color:#aaa;">REPS FEITAS
                <div style="display:flex; gap:4px; align-items:center; margin-top:4px;">
                    <button class="mini" type="button" style="padding:8px 12px; font-size:16px;" onclick="adjustVal(${i},${si},'reps',-1)">-</button>
                    <input type="number" id="inp-reps-${i}-${si}" min="0" inputmode="numeric" style="font-size:16px; font-weight:bold; text-align:center;" placeholder="${prev?prev.reps:''}" value="${esc(x.reps??'')}" onchange="setVal(${i},${si},'reps',this.value)">
                    <button class="mini" type="button" style="padding:8px 12px; font-size:16px;" onclick="adjustVal(${i},${si},'reps',1)">+</button>
                </div>
            </label>
            <label style="font-size:12px; font-weight:bold; color:#aaa;">CARGA (KG)
                <div style="display:flex; gap:4px; align-items:center; margin-top:4px;">
                    <button class="mini" type="button" style="padding:8px 12px; font-size:16px;" onclick="adjustVal(${i},${si},'kg',-2.5)">-</button>
                    <input type="number" id="inp-kg-${i}-${si}" min="0" step="0.5" inputmode="decimal" style="font-size:16px; font-weight:bold; text-align:center;" placeholder="${prev?prev.kg:''}" value="${esc(x.kg??'')}" onchange="setVal(${i},${si},'kg',this.value)">
                    <button class="mini" type="button" style="padding:8px 12px; font-size:16px;" onclick="adjustVal(${i},${si},'kg',2.5)">+</button>
                </div>
            </label>
        </div>
        <div class="obs" style="margin-top:6px;"><label style="font-size:11px; color:#aaa;">OBSERVAÇÃO<textarea onchange="setVal(${i},${si},'obs',this.value)">${esc(x.obs||'')}</textarea></label></div>${special}
        <button class="check" style="font-size:15px; padding:12px; font-weight:bold; margin-top:10px;" onclick="toggleSet(${i},${si})">□ Marcar série concluída</button></div>`;
    });
    
    if(rows.some((r,si)=>!d.sets[makeKey(i,si)]?.done))html+=`<button class="exercise-finish" style="font-size:14px; font-weight:bold; padding:12px; margin-top:10px;" onclick="toggleEx(${i})">✓ Marcar exercício como concluído</button>`;
    return html+`</div>`;
}

function adjustVal(i,j,field,delta){
    const d=draft(),k=makeKey(i,j);
    d.sets[k]??={};
    let currentVal = parseFloat(d.sets[k][field]);
    if(isNaN(currentVal)){
        const prev = getLastExerciseData(current, i, j);
        currentVal = prev ? parseFloat(prev[field])||0 : 0;
    }
    const newVal = Math.max(0, currentVal + delta);
    d.sets[k][field] = newVal;
    save();
    renderWorkout();
}

function setVal(i,j,f,v){const d=draft(),k=makeKey(i,j);d.sets[k]??={};d.sets[k][f]=v;save(); renderWorkout();}

function toggleSet(i,j){
    const d=draft(),k=makeKey(i,j);
    d.sets[k]??={};

    if(d.sets[k].kg === undefined || d.sets[k].reps === undefined){
        const prev = getLastExerciseData(current, i, j);
        if(prev){
            d.sets[k].kg = d.sets[k].kg ?? prev.kg;
            d.sets[k].reps = d.sets[k].reps ?? prev.reps;
        }
    }

    d.sets[k].done=!d.sets[k].done;

    const ex = DATA[current].ex[i];
    const rows = expandedGroups(ex[1]);
    const allDone = rows.every((r, si) => d.sets[makeKey(i, si)]?.done);
    
    if (allDone) d.exDone[i] = true;
    
    save();
    renderWorkout();
    toast(d.sets[k].done ? (allDone ? 'Exercício concluído' : 'Série salva') : 'Série desmarcada');
}

function toggleEx(i){
    const d=draft();
    d.exDone[i]=!d.exDone[i];
    save();
    renderWorkout();
}

function startWorkout(){
    const d=draft();
    if(!d.startedAt){
        d.startedAt=Date.now();
        save();
        toast('Treino iniciado');
    }
    SoundFX.init();
    requestWakeLock();
    renderWorkout();
}

function saveCardio(){const d=draft();d.cardio={time:document.getElementById('cardioTime').value,dist:document.getElementById('cardioDist').value,bpm:document.getElementById('cardioBpm').value,obs:document.getElementById('cardioObs').value};save();toast('Cardio salvo')}

function finishWorkout(){
    const d=draft();
    if(!d.startedAt){toast('Inicie o treino antes de finalizar');return}
    saveCardio();
    const v=DATA[current];
    d.restTotal=restTotalForDraft();
    const metrics = calculateDraftMetrics(d);
    
    const record={
        id:uid(),
        date:new Date().toISOString(),
        workout:current,
        name:v.name,
        duration:Math.floor((Date.now()-d.startedAt)/1000),
        restDuration:d.restTotal,
        scheduledRestTotal:d.scheduledRestTotal||0,
        totalVolume:metrics.totalVolume,
        totalWeightRaw:metrics.totalWeightRaw,
        data:JSON.parse(JSON.stringify(d))
    };
    
    db.history.push(record);
    delete db.drafts[current];
    save();
    stopTotalTimer();
    if (timerId) clearInterval(timerId);
    stopAllRestTimers();
    releaseWakeLock();

    SoundFX.playLevelUp();
    showVictoryModal(record);
}

function showVictoryModal(record){
    const stats = getUserStats();
    const cardioMin = parseFloat(record.data?.cardio?.time) || 0;
    const xpGained = 200 + Math.floor(cardioMin) + Math.floor(record.totalVolume / 50);

    app.innerHTML = `<div class="app" style="text-align:center; padding-top:40px;">
        <div style="font-size: 50px;">⚡</div>
        <h1 style="color:#a855f7; font-size:26px; text-transform:uppercase; margin-top:10px;">MISSÃO CONCLUÍDA!</h1>
        <div class="muted">Você completou o ${esc(record.name)}</div>

        <div class="card" style="border: 1px solid #8a2be2; background: rgba(138, 43, 226, 0.08); margin-top:20px; text-align:left; box-shadow: 0 0 20px rgba(138,43,226,0.3);">
            <div style="font-size:14px; font-weight:bold; color:#a855f7;">+${xpGained} EXP ADICIONADOS</div>
            <div style="font-size:12px; color:#8a2be2; margin-top:4px; font-weight:bold;">TÍTULO: ${esc(stats.rank)}</div>
            <div style="font-size:18px; font-weight:bold; margin-top:4px;">Nível ${stats.level} <span style="font-size:12px; color:#aaa;">(${stats.progressPct}%)</span></div>
            <div style="width: 100%; background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; overflow: hidden; margin-top: 8px;">
                <div style="width: ${stats.progressPct}%; background: linear-gradient(90deg, #6366f1, #8a2be2, #a855f7); height: 100%;"></div>
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:15px; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px;">
                <div>Volume Total:<br><strong style="color:#a855f7;">${record.totalVolume.toLocaleString('pt-BR')} kg</strong></div>
                <div>Tempo:<br><strong style="color:#fff;">${formatDuration(record.duration)}</strong></div>
            </div>
            <div style="margin-top:10px; font-size:12px; color:#aaa;">
                Descanso Realizado: <strong style="color:#a855f7;">${formatDuration(record.restDuration||0)}</strong> / <strong style="color:#00f3ff;">${formatDuration(record.scheduledRestTotal||0)}</strong> Programado
            </div>
        </div>
        <button class="primary" style="margin-top:25px; width:100%; padding:16px; font-weight:bold; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="home()">VOLTAR AO PAINEL PRINCIPAL</button>
    </div>`;
}

function cancelWorkout(){if(confirm('Sair agora? O rascunho ficará salvo para continuar depois.')){stopTotalTimer();if(timerId)clearInterval(timerId);stopAllRestTimers();releaseWakeLock();home()}}

function startTotalTimer(){stopTotalTimer();totalTimerId=setInterval(()=>{const d=draft();const x=document.getElementById('totalTime');if(x&&d.startedAt)x.textContent=formatDuration(Math.floor((Date.now()-d.startedAt)/1000));const y=document.getElementById('restTotalLabel');if(y)y.innerHTML=`Descanso realizado: <span style="color:#a855f7;">${formatDuration(restTotalForDraft())}</span> / <span style="color:#00f3ff;">${formatDuration(d.scheduledRestTotal||0)}</span> programado`},1000)}
function stopTotalTimer(){if(totalTimerId)clearInterval(totalTimerId);totalTimerId=null}
function formatDuration(n){n=Math.max(0,Math.floor(n));const h=Math.floor(n/3600),m=Math.floor((n%3600)/60),s=n%60;if(h)return `${h}h ${m}min`;if(m)return `${m}min ${String(s).padStart(2,'0')}s`;return `00:${String(s).padStart(2,'0')}`}
function fmt(n){n=Math.max(0,Math.floor(n));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}

function restTotalForDraft(){const d=draft();return (d.restTotal||0)+(db.restState?.startedAt&&db.restState?.deadline?Math.max(0,Math.min(db.restState.total,Math.floor((Date.now()-db.restState.startedAt)/1000))):0)}
function setGlobalRest(seconds){stopGlobalRest(false);db.restState={deadline:0,total:seconds,startedAt:0};save();updateGlobalRestUI()}

function updateGlobalRestUI(){
    const el=document.getElementById('globalRestClock');
    if(!el)return;
    let left=db.restState?.deadline?Math.max(0,Math.ceil((db.restState.deadline-Date.now())/1000)):(db.restState?.total||0);
    el.textContent=fmt(left);
}

function startGlobalRest(){
    requestNotifications();
    SoundFX.init();
    if (timerId) clearInterval(timerId);
    if(db.restState?.deadline)stopGlobalRest(false);
    
    const total = db.restState?.total > 0 ? db.restState.total : 60;
    
    const d = draft();
    d.scheduledRestTotal = (d.scheduledRestTotal || 0) + total;

    db.restState = { startedAt: Date.now(), deadline: Date.now() + total * 1000, total: total };
    save();
    
    timerId=setInterval(()=>{
        const now = Date.now();
        if(now >= db.restState.deadline){
            clearInterval(timerId);
            timerId=null;
            const d=draft();
            d.restTotal=(d.restTotal||0)+db.restState.total;
            db.restState={deadline:0,total:0,startedAt:0};
            save();
            updateGlobalRestUI();
            notifyRestDone();
        } else {
            updateGlobalRestUI();
        }
    }, 500);
    updateGlobalRestUI();
}

function stopGlobalRest(commit=true){
    if(timerId)clearInterval(timerId);
    timerId=null;
    if(commit&&db.restState?.deadline){
        const d=draft();
        d.restTotal=(d.restTotal||0)+Math.max(0,Math.min(db.restState.total,Math.floor((Date.now()-db.restState.startedAt)/1000)));
    }
    db.restState={deadline:0,total:0,startedAt:0};
    save();
}
function stopAllRestTimers(){stopGlobalRest(true)}

function setEvolutionMetric(m){currentEvolutionMetric = m; evolutionScreen(currentEvolutionFilter);}

function updateSearchFilter(val) {
    searchFilterQuery = val.toLowerCase();
    if (screen === 'evolution') evolutionScreen(currentEvolutionFilter);
    else if (screen === 'records') recordsScreen(currentRecordsFilter);
}

function renderEvolutionChart(historyExMap) {
    loadChartJS(() => {
        const ctx = document.getElementById('evoChartCanvas')?.getContext('2d');
        if (!ctx) return;

        if (activeChartInstance) activeChartInstance.destroy();

        const dates = [];

        Object.keys(historyExMap).forEach((exName) => {
            historyExMap[exName].forEach(item => {
                if (!dates.includes(item.dateStr)) dates.push(item.dateStr);
            });
        });

        dates.sort();

        const colors = ['#a855f7', '#8a2be2', '#6366f1', '#ec4899', '#00f3ff'];
        let colorIdx = 0;

        const datasets = Object.keys(historyExMap).map(exName => {
            const dataMap = {};
            historyExMap[exName].forEach(item => {
                if (currentEvolutionMetric === 'kg') dataMap[item.dateStr] = item.kg;
                else if (currentEvolutionMetric === 'reps') dataMap[item.dateStr] = item.totalReps;
                else dataMap[item.dateStr] = item.volume;
            });

            const dataPoints = dates.map(d => dataMap[d] || null);
            const color = colors[colorIdx % colors.length];
            colorIdx++;

            return {
                label: exName,
                data: dataPoints,
                borderColor: color,
                backgroundColor: color + '22',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                spanGaps: true,
                tension: 0.3
            };
        });

        activeChartInstance = new Chart(ctx, {
            type: 'line',
            data: { labels: dates, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#e0e0e0', font: { size: 10 } } },
                    tooltip: { backgroundColor: '#0b0a12', titleColor: '#a855f7', bodyColor: '#fff', borderColor: '#8a2be2', borderWidth: 1 }
                },
                scales: {
                    x: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    });
}

function evolutionScreen(filterWorkout = 'ALL'){
    stopTotalTimer();
    screen='evolution';
    currentEvolutionFilter = filterWorkout;
    const historyExMap = {};
    
    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(record => {
        if(filterWorkout !== 'ALL' && record.workout !== filterWorkout) return;

        const workoutData = DATA[record.workout];
        if(!workoutData) return;
        const dateStr = new Date(record.date).toLocaleDateString('pt-BR', {day:'2-digit', month:'2-digit'});
        const fullDate = new Date(record.date);

        workoutData.ex.forEach((exInfo, exIndex) => {
            const exName = exInfo[0];
            const key = filterWorkout === 'ALL' ? `${exName} (${record.workout})` : exName;

            if (searchFilterQuery && !key.toLowerCase().includes(searchFilterQuery)) return;

            historyExMap[key] = historyExMap[key] || [];
            let maxKg = 0, maxReps = 0, totalExVol = 0, totalExReps = 0;
            
            expandedGroups(exInfo[1]).forEach((row, setIndex) => {
                const setData = record.data.sets[`${record.workout}-${exIndex}-${setIndex}`] || {};
                const kg = parseFloat(setData.kg) || 0;
                const reps = parseInt(setData.reps) || 0;
                if(kg > maxKg || (kg === maxKg && reps > maxReps)) { maxKg = kg; maxReps = reps; }
                totalExVol += (kg * reps);
                totalExReps += reps;
            });

            if(maxKg > 0) historyExMap[key].push({ dateStr, fullDate, kg: maxKg, topReps: maxReps, totalReps: totalExReps, volume: totalExVol });
        });
    });

    let html = `<div class="app">${header('Evolução de Cargas & Volume')}
    <div style="margin-bottom: 10px;">
        <input type="text" placeholder="🔍 Pesquisar exercício..." value="${esc(searchFilterQuery)}" oninput="updateSearchFilter(this.value)" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid rgba(138,43,226,0.4); background: rgba(0,0,0,0.4); color: #fff; font-size: 14px;">
    </div>
    <div style="display:flex; overflow-x:auto; gap:6px; margin-bottom:12px; padding-bottom:5px;">
        <button class="${filterWorkout==='ALL'?'primary':'secondary'}" style="white-space:nowrap; padding:6px 12px; font-size:13px;" onclick="evolutionScreen('ALL')">Todos</button>
        ${Object.keys(DATA).map(k => `<button class="${filterWorkout===k?'primary':'secondary'}" style="white-space:nowrap; padding:6px 12px; font-size:13px;" onclick="evolutionScreen('${k}')">Treino ${k}</button>`).join('')}
    </div>
    
    <div style="display:flex; gap:6px; margin-bottom:15px;">
        <button class="${currentEvolutionMetric==='kg'?'primary':'secondary'}" style="flex:1; padding:8px; font-size:12px;" onclick="setEvolutionMetric('kg')">Carga Max (kg)</button>
        <button class="${currentEvolutionMetric==='reps'?'primary':'secondary'}" style="flex:1; padding:8px; font-size:12px;" onclick="setEvolutionMetric('reps')">Total Reps</button>
        <button class="${currentEvolutionMetric==='volume'?'primary':'secondary'}" style="flex:1; padding:8px; font-size:12px;" onclick="setEvolutionMetric('volume')">Volume (kg)</button>
    </div>

    <div class="card" style="padding:10px; margin-bottom:15px; border: 1px solid rgba(138,43,226,0.3);">
        <canvas id="evoChartCanvas" style="width:100%; height:200px;"></canvas>
    </div>`;

    const exNames = Object.keys(historyExMap);
    if(exNames.length === 0){
        html += `<div class="empty">Nenhum histórico encontrado.</div>`;
    } else {
        exNames.forEach(keyName => {
            const records = historyExMap[keyName];
            if(records.length === 0) return;
            const recent = records.slice().reverse().slice(0, 5);
            const latest = recent[0];
            const oldest = recent[recent.length - 1];
            
            let maxVal = 1;
            if(currentEvolutionMetric==='kg') maxVal = Math.max(...recent.map(r => r.kg)) || 1;
            if(currentEvolutionMetric==='reps') maxVal = Math.max(...recent.map(r => r.totalReps)) || 1;
            if(currentEvolutionMetric==='volume') maxVal = Math.max(...recent.map(r => r.volume)) || 1;

            const kgDiff = latest.kg - oldest.kg;
            const daysDiff = Math.round((latest.fullDate - oldest.fullDate) / (1000 * 60 * 60 * 24));
            
            let badgeDiff = '';
            if(recent.length > 1 && daysDiff > 0 && currentEvolutionMetric==='kg'){
                const sign = kgDiff >= 0 ? '+' : '';
                const color = kgDiff >= 0 ? '#a855f7' : '#ef4444';
                if(kgDiff !== 0) {
                    badgeDiff = `<div style="color:${color}; font-weight:bold; margin-top:8px; font-size:12px;">${kgDiff >= 0 ? '↑' : '↓'} ${sign}${kgDiff}kg de carga max em ${daysDiff} dias</div>`;
                } else {
                    badgeDiff = `<div style="color:#aaa; margin-top:8px; font-size:12px;">Carga mantida nos últimos ${daysDiff} dias</div>`;
                }
            }

            html += `<div class="card">
                <div class="exercise-name" style="margin-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px;">${esc(keyName)}</div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${recent.map(r => {
                        let val = r.kg, label = `${r.kg}kg (Top: ${r.topReps} reps)`;
                        if(currentEvolutionMetric === 'reps') { val = r.totalReps; label = `${r.totalReps} reps totais`; } 
                        else if(currentEvolutionMetric === 'volume') { val = r.volume; label = `${r.volume.toLocaleString('pt-BR')}kg vol`; }
                        const pct = Math.max(12, Math.round((val / maxVal) * 100));
                        
                        return `<div>
                            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:2px;">
                                <span style="font-weight:bold; color:#a855f7;">${r.dateStr}</span>
                                <span><strong>${label}</strong></span>
                            </div>
                            <div style="width:100%; background:rgba(255,255,255,0.08); height:8px; border-radius:4px; overflow:hidden;">
                                <div style="width:${pct}%; background:linear-gradient(90deg, #6366f1, #8a2be2, #a855f7); height:100%;"></div>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
                ${badgeDiff}
            </div>`;
        });
    }
    html += `</div>`;
    app.innerHTML = html;
    
    if(exNames.length > 0) renderEvolutionChart(historyExMap);
}

function recordsScreen(filterWorkout = 'ALL'){
    stopTotalTimer();
    screen='records';
    currentRecordsFilter = filterWorkout;
    const prMap = {};
    let lastPRBroken = null;

    db.history.slice().sort((a,b) => new Date(a.date) - new Date(b.date)).forEach(record => {
        if(filterWorkout !== 'ALL' && record.workout !== filterWorkout) return;

        const workoutData = DATA[record.workout];
        if(!workoutData) return;
        const dateStr = new Date(record.date).toLocaleDateString('pt-BR');

        workoutData.ex.forEach((exInfo, exIndex) => {
            const exName = exInfo[0];
            const key = filterWorkout === 'ALL' ? `${exName} (${record.workout})` : exName;

            if (searchFilterQuery && !key.toLowerCase().includes(searchFilterQuery)) return;

            expandedGroups(exInfo[1]).forEach((row, setIndex) => {
                const setData = record.data.sets[`${record.workout}-${exIndex}-${setIndex}`] || {};
                const kg = parseFloat(setData.kg) || 0;
                const reps = parseInt(setData.reps) || 0;

                if(kg > 0) {
                    const currentBestKg = prMap[key]?.kg || 0;
                    const currentBestReps = prMap[key]?.reps || 0;
                    if(kg > currentBestKg || (kg === currentBestKg && reps > currentBestReps)){
                        const item = { keyName: key, kg, reps, dateStr };
                        prMap[key] = item;
                        lastPRBroken = item;
                    }
                }
            });
        });
    });

    let html = `<div class="app">${header('Recordes Pessoais (PRs)')}
    <div style="margin-bottom: 10px;">
        <input type="text" placeholder="🔍 Pesquisar exercício..." value="${esc(searchFilterQuery)}" oninput="updateSearchFilter(this.value)" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid rgba(138,43,226,0.4); background: rgba(0,0,0,0.4); color: #fff; font-size: 14px;">
    </div>
    <div style="display:flex; overflow-x:auto; gap:6px; margin-bottom:15px; padding-bottom:5px;">
        <button class="${filterWorkout==='ALL'?'primary':'secondary'}" style="white-space:nowrap; padding:6px 12px; font-size:13px;" onclick="recordsScreen('ALL')">Todos</button>
        ${Object.keys(DATA).map(k => `<button class="${filterWorkout===k?'primary':'secondary'}" style="white-space:nowrap; padding:6px 12px; font-size:13px;" onclick="recordsScreen('${k}')">Treino ${k}</button>`).join('')}
    </div>`;

    if(lastPRBroken && filterWorkout === 'ALL' && !searchFilterQuery){
        html += `<div class="card" style="border: 1px solid #a855f7; background: rgba(168, 85, 247, 0.08); margin-bottom: 20px; box-shadow: 0 0 15px rgba(168,85,247,0.2);">
            <div style="font-size:11px; color:#a855f7; text-transform:uppercase; font-weight:bold; letter-spacing:1px;">🏆 ÚLTIMO RECORDE BATIDO</div>
            <div style="font-size:16px; font-weight:bold; margin-top:4px;">${esc(lastPRBroken.keyName)}</div>
            <div style="font-size:22px; font-weight:bold; color:#a855f7; margin-top:2px;">${lastPRBroken.kg} kg <span style="font-size:14px; color:#fff; font-weight:normal;">× ${lastPRBroken.reps} reps</span></div>
            <div class="muted" style="margin-top:2px;">Conquistado em ${lastPRBroken.dateStr}</div>
        </div>`;
    }

    const prList = Object.values(prMap).sort((a,b) => b.kg - a.kg);
    if(prList.length === 0){
        html += `<div class="empty">Nenhum recorde encontrado.</div>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:10px;">`;
        prList.forEach(pr => {
            html += `<div class="card" style="display:flex; justify-content:space-between; align-items:center;">
                <div style="flex:1; padding-right:10px;">
                    <div style="font-weight:bold; font-size:14px; line-height:1.2; margin-bottom:4px;">🏆 ${esc(pr.keyName)}</div>
                    <div class="muted" style="font-size:11px;">Alcançado em ${pr.dateStr}</div>
                </div>
                <div style="text-align:right; min-width:90px;">
                    <div style="font-size:18px; font-weight:bold; color:#a855f7;">${pr.kg} kg</div>
                    <div style="font-size:12px; color:#aaa;">${pr.reps} reps</div>
                </div>
            </div>`;
        });
        html += `</div>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

function getWeeklyComparison(){
    const now = new Date();
    const startThisWeek = new Date(now.setDate(now.getDate() - now.getDay())).setHours(0,0,0,0);
    const startLastWeek = new Date(startThisWeek - 7*24*60*60*1000).getTime();
    let thisWeekVol = 0, lastWeekVol = 0, thisWeekTime = 0, lastWeekTime = 0, thisWeekCardio = 0, lastWeekCardio = 0, thisWeekCount = 0, lastWeekCount = 0;

    db.history.forEach(r => {
        const t = new Date(r.date).getTime();
        const vol = r.totalVolume || 0, dur = r.duration || 0, cardio = parseFloat(r.data?.cardio?.time) || 0;
        if(t >= startThisWeek){
            thisWeekVol += vol; thisWeekTime += dur; thisWeekCardio += cardio; thisWeekCount++;
        } else if(t >= startLastWeek && t < startThisWeek){
            lastWeekVol += vol; lastWeekTime += dur; lastWeekCardio += cardio; lastWeekCount++;
        }
    });
    const volDiffPct = lastWeekVol > 0 ? (((thisWeekVol - lastWeekVol) / lastWeekVol) * 100).toFixed(1) : 0;
    return { thisWeekTon: (thisWeekVol / 1000).toFixed(1), lastWeekTon: (lastWeekVol / 1000).toFixed(1), volDiffPct, thisWeekTime: formatDuration(thisWeekTime), thisWeekCardio, thisWeekCount };
}

function historyScreen(){
    stopTotalTimer();
    screen='history';
    const weekly = getWeeklyComparison();

    let html = `<div class="app">${header('Histórico & Estatísticas')}
    <div class="card" style="background: rgba(138, 43, 226, 0.08); border: 1px solid rgba(138, 43, 226, 0.3); margin-bottom:20px;">
        <div style="font-weight:bold; font-size:14px; margin-bottom:8px; color:#a855f7;">🎯 EVOLUÇÃO SEMANAL (VOLUME)</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:13px;">
            <div><span class="muted">Semana passada:</span><br><strong style="color:#fff;">${weekly.lastWeekTon} toneladas</strong></div>
            <div><span class="muted">Esta semana:</span><br><strong style="color:#a855f7;">${weekly.thisWeekTon} toneladas</strong></div>
        </div>
        <div style="margin-top:8px; font-size:12px; font-weight:bold; color:${weekly.volDiffPct>=0?'#a855f7':'#ef4444'};">
            ${weekly.volDiffPct>=0?'↑ +':'↓ '}${weekly.volDiffPct}% de volume esta semana
        </div>
        <div style="margin-top:10px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.08); font-size:12px; display:flex; justify-content:space-between;">
            <span>Treinos: <strong>${weekly.thisWeekCount}</strong></span>
            <span>Tempo: <strong>${weekly.thisWeekTime}</strong></span>
            <span>Cardio: <strong>${weekly.thisWeekCardio} min</strong></span>
        </div>
    </div>`;

    if(db.history.length === 0){
        html += `<div class="empty">Ainda não há treinos finalizados.</div>`;
    } else {
        html += db.history.slice().reverse().map(r => {
            const d = new Date(r.date);
            const volStr = r.totalVolume ? ` · Volume: ${(r.totalVolume/1000).toFixed(1)}t` : '';
            const rawStr = r.totalWeightRaw ? ` (${r.totalWeightRaw}kg bruto)` : '';
            return `<div class="history-item">
                <div class="row"><strong>${r.name}</strong><span class="pill">${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span></div>
                <div class="muted">Duração: ${formatDuration(r.duration)}${volStr}${rawStr}</div>
                <button class="secondary" onclick="viewRecord('${r.id}')">Ver treino completo</button>
            </div>`;
        }).join('');
    }
    html += `</div>`;
    app.innerHTML = html;
}

function deleteRecord(id){
    if(confirm('Tem certeza que deseja excluir este treino específico do histórico?')){
        db.history = db.history.filter(x => x.id !== id);
        save();
        toast('Treino excluído do histórico');
        historyScreen();
    }
}

function viewRecord(id){
    const r=db.history.find(x=>x.id===id),v=DATA[r.workout];
    let html=`<div class="app">${header('Registro do treino')}<div class="muted">${new Date(r.date).toLocaleString('pt-BR')} · Duração ${formatDuration(r.duration)}<br>Volume: ${(r.totalVolume||0).toLocaleString('pt-BR')} kg · Carga Bruta: ${(r.totalWeightRaw||0).toLocaleString('pt-BR')} kg<br>Descanso: ${formatDuration(r.restDuration||0)} de ${formatDuration(r.scheduledRestTotal||0)} programado</div>`;
    
    v.ex.forEach((ex,i)=>{
        html+=`<div class="card"><div class="exercise-name">${i+1}. ${esc(ex[0])}</div>`;
        expandedGroups(ex[1]).forEach((row,j)=>{
            const s=row.group,x=r.data.sets[`${r.workout}-${i}-${j}`]||{};
            html+=`<div class="set"><div class="settype">${esc(s[0])} · Série ${row.number}/${row.total}</div><div class="muted">Planejado: ${esc(s[2])} reps · ${esc(s[3])}</div><div style="margin-top:7px"><b style="color:#a855f7;">${x.kg||'—'} kg</b> · ${x.reps||'—'} reps ${x.done?'· ✓ concluída':''}</div>${x.obs?`<div class="muted">${esc(x.obs)}</div>`:''}</div>`;
        });
        html+=`</div>`;
    });
    
    const c=r.data.cardio||{};
    html+=`<div class="section-title">Cardio do dia</div><div class="card">${c.time||'—'} min · ${c.dist||'—'} km · ${c.bpm||'—'} BPM médio${c.obs?`<div class="muted">${esc(c.obs)}</div>`:''}</div><button class="secondary danger" style="margin-top:20px" onclick="deleteRecord('${r.id}')">Excluir este treino</button></div>`;
    app.innerHTML=html;
}

function editWorkoutExercises(workoutKey) {
    const workout = DATA[workoutKey];
    let html = `<div class="app">${header(`Editar: ${workout.name}`)}
    <p class="muted" style="margin-bottom:15px;">Altere os nomes dos exercícios abaixo sem modificar o restante do treino:</p>`;
    
    workout.ex.forEach((ex, idx) => {
        html += `<div class="card" style="margin-bottom:10px;">
            <label style="font-size:12px; font-weight:bold; color:#a855f7;">Exercício ${idx + 1}</label>
            <input type="text" id="editEx-${workoutKey}-${idx}" value="${esc(ex[0])}" style="margin-top:4px; font-size:14px;">
        </div>`;
    });

    html += `<button class="primary" style="margin-top:15px; padding:14px; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="saveEditedExercises('${workoutKey}')">💾 Salvar Alterações</button>
    <button class="secondary" style="margin-top:8px;" onclick="settingsScreen()">Cancelar</button>
    </div>`;

    app.innerHTML = html;
}

function saveEditedExercises(workoutKey) {
    const workout = DATA[workoutKey];
    workout.ex.forEach((ex, idx) => {
        const inputVal = document.getElementById(`editEx-${workoutKey}-${idx}`)?.value.trim();
        if (inputVal) ex[0] = inputVal;
    });
    toast('Exercícios atualizados!');
    settingsScreen();
}

function settingsScreen(){
    stopTotalTimer();
    screen='settings';
    app.innerHTML=`<div class="app">${header('Configurações')}
    <div class="card" style="margin-bottom:15px;">
        <label>Nome do Caçador
            <input type="text" id="userNameInput" value="${esc(db.user.name)}" style="margin-top:5px;">
        </label>
        <button class="secondary" style="margin-top:10px;" onclick="updateUserName()">💾 Salvar Nome</button>
    </div>

    <div class="card" style="margin-bottom:15px;">
        <div style="font-weight:bold; margin-bottom:8px; color:#a855f7;">✏️ Editar Exercícios dos Treinos</div>
        <div style="display:flex; flex-direction:column; gap:6px;">
            ${Object.keys(DATA).map(k => `<button class="secondary" style="text-align:left; padding:10px;" onclick="editWorkoutExercises('${k}')">Editar ${DATA[k].name}</button>`).join('')}
        </div>
    </div>
    
    <div class="card" style="margin-bottom:15px;">
        <div style="font-weight:bold; margin-bottom:8px;">📦 Backup de Dados</div>
        <button class="secondary" style="margin-bottom:8px;" onclick="exportData()">⬇️ Exportar backup (JSON)</button>
        <label class="secondary" style="display:block; text-align:center; cursor:pointer;">
            ⬆️ Restaurar backup (JSON)
            <input type="file" accept="application/json" style="display:none;" onchange="importData(event)">
        </label>
    </div>

    <button class="secondary" onclick="clearDrafts()">🧹 Limpar rascunhos não finalizados</button>
    <button class="secondary danger" onclick="wipeHistory()">Apagar histórico</button></div>`;
}

function updateUserName(){
    const input = document.getElementById('userNameInput').value.trim();
    if(input){ db.user.name = input; save(); toast('Nome atualizado!'); }
}

function clearDrafts(){if(confirm('Apagar todos os treinos que estão apenas como rascunho?')){db.drafts={};save();toast('Rascunhos apagados')}}
function wipeHistory(){if(confirm('Apagar todo o histórico?')){db.history=[];save();historyScreen()}}
function exportData(){const b=new Blob([JSON.stringify(db,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='solo-leveling-historico.json';a.click();URL.revokeObjectURL(u)}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported.history && imported.user) {
                db = imported;
                save();
                toast('✓ Backup restaurado com sucesso!');
                home();
            } else {
                toast('❌ Arquivo inválido.');
            }
        } catch (err) {
            toast('❌ Erro ao ler backup.');
        }
    };
    reader.readAsText(file);
}

function pdfScreen(){
    app.innerHTML=`<div class="app">${header('Planilha / PDF')}
    <div class="pdfbox"><p><b>Planilha original</b></p><p class="muted">A planilha original usada para configurar A–E está incluída no app.</p><a class="secondary" style="display:block;text-align:center;text-decoration:none" href="planilha-original.pdf" target="_blank">Abrir planilha original</a></div>
    <div class="section-title">Consultar outro PDF</div>
    <div class="card"><input type="file" accept="application/pdf" id="pdfInput"><p class="muted">O PDF selecionado fica apenas no aparelho para consulta.</p></div></div>`;
    document.getElementById('pdfInput').onchange=e=>{const f=e.target.files[0];if(f){const u=URL.createObjectURL(f);window.open(u,'_blank')}}
}

function goHome(){stopTotalTimer();if(timerId)clearInterval(timerId);stopAllRestTimers();home()}

home();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js?v=13');