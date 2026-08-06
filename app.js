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

const KEY='solo_leveling_v11';
let db=JSON.parse(localStorage.getItem(KEY)||'null')||{history:[],drafts:{},user:{name:'Alexsandro'},restState:{deadline:0,total:0,startedAt:0}};
let screen='home',current=null,timerId=null,totalTimerId=null;

let currentEvolutionMetric = 'kg'; 
let currentEvolutionFilter = 'ALL';
let currentRecordsFilter = 'ALL';
let searchFilterQuery = '';
let activeChartInstance = null;

let wakeLock = null;
const app=document.getElementById('app');

// --- MÓDULO DE EFEITOS SONOROS (WEB AUDIO API) ---
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

// Som original longo do timer de descanso (1.5 segundos)
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

// Estilo Badge de PR Monarca
if(!document.getElementById('monarch-pr-styles')){
    const styleEl = document.createElement('style');
    styleEl.id = 'monarch-pr-styles';
    styleEl.textContent = `
        @keyframes prMonarchPulse {
            0% { transform: scale(1); box-shadow: 0 0 8px rgba(0,243,255,0.4); }
            50% { transform: scale(1.04); box-shadow: 0 0 16px rgba(0,243,255,0.9); }
            100% { transform: scale(1); box-shadow: 0 0 8px rgba(0,243,255,0.4); }
        }
        .pr-badge-live {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: rgba(0, 243, 255, 0.12);
            border: 1px solid #00f3ff;
            color: #00f3ff;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.5px;
            animation: prMonarchPulse 1.6s infinite ease-in-out;
            text-transform: uppercase;
        }
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

function getUserStats(){
    const totalWorkouts = db.history.length;
    let totalXP = 0;
    let totalVolume = 0;
    let totalCardioMin = 0;
    let maxKgGlobal = 0;

    db.history.forEach(r => {
        totalXP += 25;
        const cardioMin = parseFloat(r.data?.cardio?.time) || 0;
        totalCardioMin += cardioMin;
        totalXP += Math.floor(cardioMin * 0.5);
        totalVolume += (r.totalVolume || 0);

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

    const level = Math.floor(totalXP / 100) + 1;
    const currentLevelXP = totalXP % 100;
    const lastWorkout = db.history.length ? db.history[db.history.length - 1].date : null;
    return { level, currentLevelXP, totalWorkouts, lastWorkoutDateStr: getRelativeDate(lastWorkout), totalVolume, totalCardioMin, maxKgGlobal };
}

// --- SISTEMA DE CONQUISTAS DE CAÇADOR (BADGES) ---
function getAchievements() {
    const stats = getUserStats();
    const achievements = [
        { id: 'first_step', title: 'Primeiro Despertar', desc: 'Conclua seu 1º treino no sistema.', icon: '🗡️', current: stats.totalWorkouts, target: 1 },
        { id: 'workout_5', title: 'Caçador de Classe E', desc: 'Conclua 5 treinos.', icon: '🛡️', current: stats.totalWorkouts, target: 5 },
        { id: 'workout_20', title: 'Caçador de Classe C', desc: 'Conclua 20 treinos.', icon: '⚔️', current: stats.totalWorkouts, target: 20 },
        { id: 'workout_50', title: 'Caçador de Classe S', desc: 'Conclua 50 treinos.', icon: '👑', current: stats.totalWorkouts, target: 50 },
        { id: 'vol_10t', title: 'Mestre da Força I', desc: 'Levante 10 Toneladas em volume total acumulado.', icon: '🏋️', current: Math.floor(stats.totalVolume / 1000), target: 10, unit: 't' },
        { id: 'vol_100t', title: 'Monarca das Cargas', desc: 'Levante 100 Toneladas em volume acumulado.', icon: '🔥', current: Math.floor(stats.totalVolume / 1000), target: 100, unit: 't' },
        { id: 'cardio_60', title: 'Maratonista das Sombras', desc: 'Acumule 60 minutos de cardio.', icon: '🏃', current: Math.floor(stats.totalCardioMin), target: 60, unit: 'min' },
        { id: 'kg_50', title: 'Quebrador de Limites I', desc: 'Alcance 50 kg de carga em um exercício.', icon: '⚡', current: stats.maxKgGlobal, target: 50, unit: 'kg' },
        { id: 'kg_100', title: 'Força do Monarca', desc: 'Alcance 100 kg de carga em um exercício.', icon: '💥', current: stats.maxKgGlobal, target: 100, unit: 'kg' },
        { id: 'lvl_10', title: 'Soberano Absoluto', desc: 'Alcance o Nível 10 de Caçador.', icon: '🌌', current: stats.level, target: 10 }
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

    let html = `<div class="app">${header('Conquistas & Títulos')}
    <div class="card" style="background: linear-gradient(135deg,
