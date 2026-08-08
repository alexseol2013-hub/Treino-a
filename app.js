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
    },
    playBeep() {
        try {
            this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 1.5);
        } catch(e) {}
    }
};

document.addEventListener('touchstart', () => SoundFX.init(), { once: true });
document.addEventListener('click', () => SoundFX.init(), { once: true });
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        SoundFX.init();
    }
});

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
        input:focus, textarea:focus, select:focus {
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
        
        .evo-two-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; }
        .btn-evo-active { background: linear-gradient(135deg, #8a2be2, #a855f7) !important; color: #fff !important; font-weight: bold; border-color: #a855f7 !important; }
    `;
    document.head.appendChild(styleEl);
}

const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function toRoman(num) {
    const map = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    let n = num, out = '';
    for (const [val, sym] of map) { while (n >= val) { out += sym; n -= val; } }
    return out;
}

function calculate1RM(kg, reps) {
    if (!kg || kg <= 0) return 0;
    if (!reps || reps <= 0) return kg;
    if (reps === 1) return kg;
    return Math.round(kg * (1 + (reps / 30)) * 10) / 10;
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
function centerAlert(t){
    const overlay=document.createElement('div');
    overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:10000;padding:24px;pointer-events:none;';
    overlay.innerHTML=`<div style="background:#0d0b18;border:1px solid #a855f7;border-radius:14px;padding:20px 24px;max-width:340px;text-align:center;color:#fff;font-size:15px;font-weight:600;box-shadow:0 0 30px rgba(168,85,247,0.5);">${esc(t)}</div>`;
    document.body.appendChild(overlay);
    setTimeout(()=>overlay.remove(),2000);
}
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

function getWeekStartMonday(dateInput) {
    const d = new Date(dateInput);
    const dayIdx = d.getDay(); // 0=domingo, 1=segunda, ... 6=sábado
    const diffToMonday = (dayIdx === 0) ? 6 : dayIdx - 1;
    const start = new Date(d);
    start.setDate(start.getDate() - diffToMonday);
    start.setHours(0,0,0,0);
    return start.getTime();
}

function getRequiredXPForLevel(lvl) {
    return Math.max(1, Math.round(46 * Math.pow(lvl, 1.15)));
}

function getUserStats(){
    let totalWorkouts = 0;
    let totalXP = 0;
    let totalVolume = 0;
    let totalCardioMin = 0;
    let totalSetsDone = 0;
    let totalPRsCount = 0;
    const prTracker = {};

    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(r => {
        if (r.workout !== 'CARDIO') totalWorkouts++;
        
        const cardioMin = parseFloat(r.data?.cardio?.time) || 0;
        const vol = (r.totalVolume || 0);
        totalVolume += vol;
        totalCardioMin += cardioMin;

        // Base XP: 100 para treino normal, 20 para registro avulso de cardio
        const baseXP = r.workout === 'CARDIO' ? 20 : 100;
        totalXP += baseXP + Math.floor(cardioMin * 1.5);

        const wData = DATA[r.workout];
        if(wData){
            wData.ex.forEach((exInfo, i) => {
                let exCompleted = true;
                expandedGroups(exInfo[1]).forEach((rSet, j) => {
                    const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                    const isTrabalho = rSet.group[0] === 'Trabalho';

                    if(setData.done) {
                        totalSetsDone++;
                        totalXP += 8;
                        const kg = parseFloat(setData.kg) || 0;
                        const reps = parseInt(setData.reps) || 0;
                        const exKey = exInfo[0];
                        
                        if (kg > 0 && isTrabalho) {
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

    // Bônus semanal: +500 XP nas semanas em que a meta de treinos E de cardio (min) foram atingidas juntas
    const weeklyMap = {};
    db.history.forEach(r => {
        const weekStart = getWeekStartMonday(r.date);
        if (!weeklyMap[weekStart]) weeklyMap[weekStart] = { workouts: 0, cardioMin: 0 };
        if (r.workout !== 'CARDIO') weeklyMap[weekStart].workouts++;
        weeklyMap[weekStart].cardioMin += parseFloat(r.data?.cardio?.time) || 0;
    });
    let weeklyBonusWeeks = 0;
    Object.values(weeklyMap).forEach(w => {
        if (w.workouts >= (db.user.targetWorkouts || 5) && w.cardioMin >= (db.user.targetCardio || 60)) {
            totalXP += 500;
            weeklyBonusWeeks++;
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
    
    // Pega o último treino real (ignora registros exclusivos de cardio)
    const realWorkouts = db.history.filter(r => r.workout !== 'CARDIO');
    const lastWorkout = realWorkouts.length ? realWorkouts[realWorkouts.length - 1].date : null;

    return { 
        level, rank, currentLevelXP: accumulatedXP, nextLevelReq, progressPct, 
        totalWorkouts, totalSetsDone, totalPRsCount, lastWorkoutDateStr: getRelativeDate(lastWorkout), 
        totalVolume, totalCardioMin 
    };
}

function getAchievements() {
    const stats = getUserStats();
    // Hierarquia do Exército das Sombras — cada rank libera no mesmo Nível do Rank de Caçador equivalente (mesma escala do cabeçalho)
    const achievements = [
        { id: 'sombra_normal', title: 'Sombra Normal / Básico', desc: 'Soldado raso recém-extraído, equivalente a caçadores Rank E, D e C. Alcance o Nível 3.', current: stats.level, target: 3, unit: '' },
        { id: 'sombra_elite', title: 'Sombra Elite', desc: 'Soldado de destaque tático, equivalente a caçadores Rank B. Alcance o Nível 25.', current: stats.level, target: 25, unit: '' },
        { id: 'sombra_cavaleiro', title: 'Cavaleiro das Sombras', desc: 'Sub-liderança com nome próprio e inteligência avançada. Alcance o Nível 35.', current: stats.level, target: 35, unit: '' },
        { id: 'sombra_cavaleiro_elite', title: 'Cavaleiro de Elite', desc: 'Guerreiro equiparável a caçadores Rank S. Alcance o Nível 50.', current: stats.level, target: 50, unit: '' },
        { id: 'sombra_general', title: 'General das Sombras', desc: 'Alto escalão do exército, supera a média dos Rank S. Alcance o Nível 65.', current: stats.level, target: 65, unit: '' },
        { id: 'sombra_marechal', title: 'Marechal das Sombras', desc: 'Rivaliza com caçadores de Nível Nacional. Alcance o Nível 80.', current: stats.level, target: 80, unit: '' },
        { id: 'sombra_grande_marechal', title: 'Grande Marechal', desc: 'O rank mais alto e absoluto do exército das sombras. Alcance o Nível 100.', current: stats.level, target: 100, unit: '' }
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
        <div style="font-size: 20px; font-weight: bold; color: #fff;">Exército de Sombras & Ranks</div>
        <div style="font-size: 13px; color: #a855f7; margin-top: 4px; font-weight:bold;">${unlockedCount} de ${totalCount} Desbloqueados</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">`;

    achievements.forEach((a, idx) => {
        const pct = Math.min(100, Math.floor((a.current / a.target) * 100));
        html += `<div class="card" style="display:flex; gap:14px; align-items:center; border: 1px solid ${a.unlocked ? '#a855f7' : 'rgba(255,255,255,0.1)'}; background: ${a.unlocked ? 'rgba(168, 85, 247, 0.08)' : 'rgba(15,12,25,0.6)'}">
            <div style="min-width:38px; height:38px; display:flex; align-items:center; justify-content:center; border:1px solid ${a.unlocked ? '#a855f7' : 'rgba(255,255,255,0.2)'}; border-radius:6px; font-size:13px; font-weight:800; letter-spacing:0.5px; color:${a.unlocked ? '#a855f7' : '#666'};">${toRoman(idx + 1)}</div>
            <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:baseline;">
                    <strong style="font-size:15px; color:${a.unlocked ? '#a855f7' : '#fff'}">${esc(a.title)}</strong>
                    ${a.unlocked ? `<span style="font-size:10px; color:#a855f7; font-weight:bold; border:1px solid #a855f7; padding:2px 6px; border-radius:4px;">DESBLOQUEADO</span>` : `<span style="font-size:11px; color:#aaa;">Nível ${a.current}/${a.target}</span>`}
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
    div.className = 'modal-overlay';
    div.innerHTML = `
        <div class="modal-box" style="text-align:center;">
            <div style="font-size:50px; margin-bottom:10px;">⚔️</div>
            <h2 style="color:#a855f7; margin:0 0 10px 0; font-size:22px; font-weight:800;">TEMPO DE DESCANSO CONCLUÍDO!</h2>
            <p style="color:#e0e0e0; margin-bottom:20px; font-size:14px; line-height:1.4;">Prepare-se para a próxima série. Suba de nível!</p>
            <button class="primary" style="width:100%; padding:14px; font-size:16px; font-weight:bold; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="this.parentElement.parentElement.remove()">ESTOU PRONTO</button>
        </div>
    `;
    document.body.appendChild(div);
}

function notifyRestDone(){
    SoundFX.playBeep();
    navigator.vibrate?.([500,200,500,200,800]);
    if('Notification' in window && Notification.permission==='granted'){
        try{ new Notification('Solo Leveling',{body:'⏱️ Descanso concluído! Hora de voltar para a série.',icon:'icon.svg',tag:'solo-rest'}); }catch(e){}
    }
    showRestAlertModal();
}

function home(){
    stopTotalTimer();
    screen='home';
    const stats = getUserStats();
    const { unlockedCount, totalCount } = getAchievements();
    const weekly = getWeeklyComparison();
    
    const targetW = db.user.targetWorkouts || 5;
    const targetC = db.user.targetCardio || 60;
    
    app.innerHTML=`<div class="app">${header('Painel do Caçador', false)}
    <div class="card" style="background: linear-gradient(135deg, rgba(20,15,35,0.95), rgba(10,8,20,0.98)); border: 1px solid #a855f7; box-shadow: 0 0 25px rgba(168, 85, 247, 0.25); border-radius: 12px; padding: 16px; margin-bottom: 15px;">
        <div style="font-size: 12px; color: #a855f7; text-transform: uppercase; letter-spacing: 1.5px; font-weight:bold;">${esc(stats.rank)}</div>
        <div style="font-size: 22px; font-weight: bold; color: #fff; margin-top: 2px;">${getGreeting()}, ${esc(db.user.name)}</div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 12px;">
            <span style="font-size: 16px; font-weight: bold; color: #a855f7;">Nível ${stats.level}</span>
            <span style="font-size: 12px; color: #a855f7; font-weight:bold;">XP: ${stats.currentLevelXP} / ${stats.nextLevelReq}</span>
        </div>
        <div style="width: 100%; background: rgba(255,255,255,0.08); height: 8px; border-radius: 4px; overflow: hidden; margin-top: 6px; border: 1px solid rgba(168,85,247,0.3);">
            <div style="width: ${stats.progressPct}%; background: linear-gradient(90deg, #6366f1, #8a2be2, #a855f7); height: 100%; transition: width 0.3s;"></div>
        </div>
    </div>

    <div class="card" style="background: rgba(138, 43, 226, 0.08); border: 1px solid rgba(168, 85, 247, 0.3); margin-bottom: 15px; padding: 14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-size:13px; font-weight:bold; color:#a855f7; text-transform:uppercase;">Missão Semanal</span>
            <span style="font-size:11px; font-weight:bold; color:${weekly.volDiffPct>=0?'#a855f7':'#ef4444'};">${weekly.volDiffPct>=0?'↑ +':'↓ '}${weekly.volDiffPct}% Vol. vs sem. anterior</span>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px; text-align:center; background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
            <div><small style="font-size:10px; color:#aaa;">Treinos</small><br><strong style="font-size:14px; color:#fff;">${weekly.thisWeekCount} / ${targetW}</strong></div>
            <div><small style="font-size:10px; color:#aaa;">Volume</small><br><strong style="font-size:14px; color:#a855f7;">${formatVolume(weekly.thisWeekVolRaw)}</strong></div>
            <div><small style="font-size:10px; color:#aaa;">Cardio</small><br><strong style="font-size:14px; color:#fff;">${weekly.thisWeekCardio}min / ${targetC}min</strong></div>
        </div>
    </div>

    <button class="primary" style="padding: 16px; font-size: 18px; font-weight: bold; width:100%; text-align: center; background: linear-gradient(135deg, #8a2be2, #a855f7); box-shadow: 0 0 15px rgba(138,43,226,0.4);" onclick="selectWorkoutScreen()">⚔️ TREINAR AGORA</button>

    <div class="home-grid">
        <div class="home-card-btn" onclick="historyScreen()">
            <div class="icon">📈</div>
            <div>
                <div class="title">Histórico</div>
                <small style="font-size:11px; color:#aaa;">Diário de Treinos</small>
            </div>
        </div>
        <div class="home-card-btn" onclick="evolutionScreen()">
            <div class="icon">📊</div>
            <div>
                <div class="title">Evolução</div>
                <small style="font-size:11px; color:#aaa;">Por Exercício</small>
            </div>
        </div>
        <div class="home-card-btn" onclick="recordsScreen(currentRecordsFilter)">
            <div class="icon">🏆</div>
            <div>
                <div class="title">Recordes</div>
                <small style="font-size:11px; color:#aaa;">Seus PRs</small>
            </div>
        </div>
        <div class="home-card-btn" onclick="achievementsScreen()">
            <div class="icon">☠️</div>
            <div>
                <div class="title">Conquistas</div>
                <small style="font-size:11px; color:#a855f7;">${unlockedCount}/${totalCount} Unlocked</small>
            </div>
        </div>
        <div class="home-card-btn" onclick="settingsScreen()">
            <div class="icon">⚙️</div>
            <div>
                <div class="title">Ajustes</div>
                <small style="font-size:11px; color:#aaa;">Perfil & Metas</small>
            </div>
        </div>
        <div class="home-card-btn" onclick="pdfScreen()">
            <div class="icon">📄</div>
            <div>
                <div class="title">Planilha</div>
                <small style="font-size:11px; color:#aaa;">PDF Original</small>
            </div>
        </div>
    </div>
    </div>`;
}

function getLastWorkoutDateFor(workoutKey) {
    const history = db.history.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
    const rec = history.find(r => r.workout === workoutKey);
    return rec ? getRelativeDate(rec.date) : 'Nunca realizado';
}

function selectWorkoutScreen(){
    app.innerHTML=`<div class="app">${header('Escolha seu treino')}
    <p class="muted">Segunda A · Terça B · Quarta C · Quinta descanso · Sexta D · Sábado E · Domingo descanso.</p>
    <div class="grid" style="margin-top:15px">${Object.entries(DATA).map(([k,v])=>{
        const lastDate = getLastWorkoutDateFor(k);
        return `<button class="day" onclick="openWorkout('${k}')">
            <strong>${v.name}</strong>
            <span>${v.desc}</span>
            <small style="color:#a855f7; font-weight:bold; margin-top:4px;">Último: ${lastDate}</small>
        </button>`;
    }).join('')}</div>
    
    <div class="section-title" style="margin-top:25px; border-bottom:1px solid #333; padding-bottom:5px;">Cardio & Extras</div>
    <button class="day" style="background: rgba(168,85,247,0.08); border-color: rgba(168,85,247,0.4); padding:16px;" onclick="openCardioScreen()">
        <strong style="color: #a855f7; font-size:17px;">Cardio Avulso</strong>
        <span style="color: #aaa;">Registrar apenas sessão de cardio</span>
    </button>
    </div>`;
}

function openCardioScreen(){
    screen = 'cardio';
    renderCardioScreen();
}

function renderCardioScreen(){
    app.innerHTML=`<div class="app">${header('Sessão de Cardio')}
    <p class="muted">Selecione o dia da semana e informe os dados do seu aeróbico.</p>
    <div class="card" style="margin-top:15px; padding:18px;">
        <label>Dia da Semana
            <select id="cardioDay" style="width:100%; padding:12px; margin-top:5px; background:rgba(0,0,0,0.5); border:1px solid #a855f7; color:#fff; border-radius:6px; font-size:15px;">
                <option value="Segunda-feira">Segunda-feira</option>
                <option value="Terça-feira">Terça-feira</option>
                <option value="Quarta-feira">Quarta-feira</option>
                <option value="Quinta-feira">Quinta-feira</option>
                <option value="Sexta-feira">Sexta-feira</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </select>
        </label>
        <div class="fields" style="margin-top:14px;">
            <label>Tempo (min)<input id="cardioTime" type="number" min="0" step="0.1" placeholder="Ex: 30" style="padding:12px; font-size:15px;"></label>
            <label>Distância (km)<input id="cardioDist" type="number" min="0" step="0.01" placeholder="Ex: 5" style="padding:12px; font-size:15px;"></label>
        </div>
        <div class="fields" style="margin-top:14px;">
            <label>BPM médio<input id="cardioBpm" type="number" min="0" step="1" placeholder="Ex: 130" style="padding:12px; font-size:15px;"></label>
            <label>Observação<input id="cardioObs" type="text" placeholder="Esteira, Bike..." style="padding:12px; font-size:15px;"></label>
        </div>
        <button class="primary" style="margin-top:20px; width:100%; padding:16px; font-weight:bold; font-size:16px; background: linear-gradient(135deg, #8a2be2, #a855f7); border:none; color:#fff; box-shadow: 0 0 15px rgba(138,43,226,0.4);" onclick="finishCardio()">💾 Salvar Sessão</button>
    </div>
    </div>`;
    
    // Auto-selecionar o dia da semana atual
    const days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    const today = new Date().getDay();
    document.getElementById('cardioDay').value = days[today];
}

function finishCardio(){
    const time = parseFloat(document.getElementById('cardioTime').value) || 0;
    const dist = parseFloat(document.getElementById('cardioDist').value) || 0;
    const bpm = parseInt(document.getElementById('cardioBpm').value) || 0;
    const obs = document.getElementById('cardioObs').value || '';
    const day = document.getElementById('cardioDay').value;
    
    if(time <= 0) {
        toast('Insira o tempo de cardio.');
        return;
    }
    
    const record = {
        id: uid(),
        date: new Date().toISOString(),
        workout: 'CARDIO',
        name: 'Cardio (' + day + ')',
        duration: time * 60, // em segundos para compatibilidade
        restDuration: 0,
        totalVolume: 0,
        totalWeightRaw: 0,
        data: {
            cardio: { time, dist, bpm, obs, day }
        }
    };
    
    db.history.push(record);
    save();
    
    SoundFX.playLevelUp();
    
    // Renderiza uma tela de vitória simplificada para o cardio
    const stats = getUserStats();
    const xpGained = 20 + Math.floor(time * 1.5);

    app.innerHTML = `<div class="app" style="text-align:center; padding-top:30px;">
        <div style="font-size: 50px;">🏃</div>
        <h1 style="color:#a855f7; font-size:24px; text-transform:uppercase; margin-top:8px;">CARDIO CONCLUÍDO!</h1>
        <div class="muted">Registrado para ${day}</div>

        <div class="card" style="border: 1px solid #a855f7; background: rgba(168, 85, 247, 0.08); margin-top:15px; text-align:left; box-shadow: 0 0 20px rgba(168,85,247,0.2);">
            <div style="font-size:14px; font-weight:bold; color:#a855f7;">+${xpGained} XP ADICIONADOS</div>
            <div style="font-size:12px; color:#c084fc; margin-top:2px; font-weight:bold;">TÍTULO: ${esc(stats.rank)}</div>
            <div style="font-size:18px; font-weight:bold; margin-top:4px;">Nível ${stats.level} <span style="font-size:12px; color:#aaa;">(${stats.progressPct}%)</span></div>
            <div style="width: 100%; background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden; margin-top: 8px;">
                <div style="width: ${stats.progressPct}%; background: linear-gradient(90deg, #8a2be2, #a855f7); height: 100%;"></div>
            </div>
            
            <div style="margin-top:15px; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px;">
                Tempo: <strong style="color:#a855f7;">${time} min</strong> <br>
                Distância: <strong style="color:#fff;">${dist > 0 ? dist + ' km' : '--'}</strong>
            </div>
        </div>
        <button class="primary" style="margin-top:25px; width:100%; padding:16px; font-weight:bold; background: linear-gradient(135deg, #8a2be2, #a855f7); color:#fff;" onclick="home()">VOLTAR AO PAINEL PRINCIPAL</button>
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
                expandedGroups(exInfo[1]).forEach((rSet, j) => {
                    if(rSet.group[0] === 'Trabalho') {
                        const setData = r.data?.sets?.[`${r.workout}-${i}-${j}`] || {};
                        const kg = parseFloat(setData.kg) || 0;
                        const reps = parseInt(setData.reps) || 0;
                        if(kg > bestKg || (kg === bestKg && reps > bestReps)){
                            bestKg = kg; bestReps = reps;
                        }
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
            if(set && set.kg !== undefined) return { kg: set.kg, reps: set.reps };
        }
    }
    return null;
}

function draft(){db.drafts[current]??={sets:{},exDone:{},startedAt:null, scheduledRestTotal:0};return db.drafts[current]}
function openWorkout(k){current=k;screen='workout';draft();save();renderWorkout()}
function parseQty(q){const m=String(q).match(/(\d+)\s*[–-]\s*(\d+)/);if(m)return Number(m[2]);const n=String(q).match(/\d+/);return n?Number(n[0]):1}
function expandedGroups(groups){let out=[];groups.forEach((g,gi)=>{const qty=parseQty(g[1]);for(let n=1;n<=qty;n++)out.push({group:g,groupIndex:gi,number:n,total:qty});});return out}
function makeKey(exi,si){return `${current}-${exi}-${si}`}

function calculateDraftMetrics(d){
    let totalVolume = 0;
    let totalWeightRaw = 0;
    Object.values(d.sets||{}).forEach(s => {
        if(s.done && s.kg !== undefined){
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
    <div class="start-panel" style="padding:14px; margin-top:10px;">
        <div><strong>${started?'Treino em andamento':'Treino não iniciado'}</strong>
        <div class="muted" style="font-size:12px;">${started?'O tempo está a contar.':'Quando estiver pronto, toque em iniciar.'}</div></div>
        <button class="primary start-workout" style="font-size:15px; padding:10px 18px; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="startWorkout()" ${started?'disabled':''}>${started?'✓ Iniciado':'▶ Iniciar'}</button>
    </div>
    
    ${v.ex.map((ex,i)=>exerciseHTML(ex,i,d)).join('')}
    
    <button class="finish" style="background: linear-gradient(135deg, #8a2be2, #a855f7); margin-top:20px;" onclick="finishWorkout()" ${started?'':'disabled'}>✓ Finalizar e salvar treino</button>
    <button class="secondary danger" onclick="cancelWorkout()">Sair e manter rascunho</button>
    
    <div class="total-bottom">
        <div class="muted" style="font-size:12px; font-weight:bold; letter-spacing:1px; color:#a855f7;">TEMPO TOTAL DO TREINO</div>
        <strong id="totalTime">${started?formatDuration(Math.floor((Date.now()-d.startedAt)/1000)):'00:00'}</strong>
        <div style="margin-top:8px; font-size:13px; color:#aaa;">Volume Total: <strong style="color:#a855f7; font-size:15px;">${formatVolume(metrics.totalVolume)}</strong></div>
        <div style="font-size:13px; color:#aaa;">Carga Somada Bruta: <strong style="color:#a855f7; font-size:15px;">${formatVolume(metrics.totalWeightRaw)}</strong></div>
        <div class="muted" id="restTotalLabel" style="margin-top:8px; font-size:12px; font-weight:bold; color:#e0e0e0; background:rgba(168,85,247,0.1); padding:8px; border-radius:6px; border:1px solid rgba(168,85,247,0.3);">
            Descanso realizado: <span style="color:#a855f7;">${formatDuration(restTotalForDraft())}</span> / <span style="color:#7c3aed;">${formatDuration(d.scheduledRestTotal||0)}</span> programado
        </div>
    </div></div>
    
    <div class="global-rest" id="globalRest">
        <div><small style="font-size:10px; font-weight:bold; color:#aaa;">TEMPORIZADOR DE DESCANSO</small><br><strong id="globalRestClock">00:00</strong></div>
        <div class="global-rest-actions" style="display:flex; gap:6px; align-items:center;">
            <button class="mini" onclick="setGlobalRest(45)">45s</button>
            <button class="mini" onclick="setGlobalRest(60)">1min</button>
            <button class="mini" onclick="setGlobalRest(120)">2min</button>
            <button class="mini" onclick="setGlobalRest(180)">3min</button>
            <button class="mini start" onclick="startGlobalRest()">Iniciar</button>
        </div>
    </div>`;
    if(started)startTotalTimer();
    
    if (db.restState?.deadline && db.restState.deadline > Date.now()) {
        if (!timerId) {
            timerId = setInterval(() => {
                const now = Date.now();
                if (now >= db.restState.deadline) {
                    clearInterval(timerId);
                    timerId = null;
                    const d = draft();
                    d.restTotal = (d.restTotal || 0) + db.restState.total;
                    db.restState = { deadline: 0, total: 0, startedAt: 0 };
                    save();
                    updateGlobalRestUI();
                    notifyRestDone();
                } else {
                    updateGlobalRestUI();
                }
            }, 500);
        }
    }
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
    
    let html=`<div class="card" style="padding:14px; margin-top:12px;">
        <div class="exercise-head" style="display:flex; justify-content:space-between; align-items:center;">
            <div class="exercise-name" style="flex:1; font-size:16px !important; font-weight:bold; color:#fff;">${i+1}. ${esc(name)}</div>
            <button class="mini" type="button" style="margin-left:8px; font-size:11px; padding:4px 8px;" onclick="swapExercise(${i})">🔄 Trocar</button>
        </div>
        ${tech?`<div class="tech">⚡ ${esc(tech)}</div>`:''}`;
    
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
            if((lower.includes('drop')||lower.includes('rest pause'))&&isLast)special=`<div class="tech-inline">🔥 ${esc(tech)}</div>`;
        }
        
        const prev = getLastExerciseData(current, i, si);
        const prevLabel = prev && prev.kg !== undefined ? `Anterior: ${prev.kg}kg × ${prev.reps}` : '1ª vez';
        
        const currentKg = parseFloat(x.kg ?? (prev ? prev.kg : 0)) || 0;
        const currentReps = parseInt(x.reps ?? (prev ? prev.reps : 0)) || 0;
        
        const isTrabalho = type === 'Trabalho';
        const isPR = isTrabalho && currentKg > 0 && (currentKg > pr.kg || (currentKg === pr.kg && currentReps > pr.reps && pr.kg > 0));

        const badgeHtml = isPR ? `<span class="pr-badge-live">⚡ NOVO PR!</span>` : `<span style="font-size:11px; color:#a855f7; font-weight:bold;">${prevLabel}</span>`;

        html+=`<div class="set" style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.06);"><div class="sethead"><div class="settype" style="font-size:14px; font-weight:bold; color:#a855f7;">${esc(type)} · Série ${r.number}/${r.total}</div>${badgeHtml}</div>
        <div class="fields" style="margin-top:6px;">
            <label style="font-size:11px; font-weight:bold; color:#aaa;">REPS FEITAS
                <div style="display:flex; gap:4px; align-items:center; margin-top:4px;">
                    <button class="mini" type="button" style="padding:6px 10px; font-size:14px;" onclick="adjustVal(${i},${si},'reps',-1)">-</button>
                    <input type="number" id="inp-reps-${i}-${si}" min="0" inputmode="numeric" style="font-size:15px; font-weight:bold; text-align:center;" placeholder="${prev&&prev.reps!==undefined?prev.reps:''}" value="${esc(x.reps??'')}" onchange="setVal(${i},${si},'reps',this.value)">
                    <button class="mini" type="button" style="padding:6px 10px; font-size:14px;" onclick="adjustVal(${i},${si},'reps',1)">+</button>
                </div>
            </label>
            <label style="font-size:11px; font-weight:bold; color:#aaa;">CARGA (KG)
                <div style="display:flex; gap:4px; align-items:center; margin-top:4px;">
                    <button class="mini" type="button" style="padding:6px 10px; font-size:14px;" onclick="adjustVal(${i},${si},'kg',-2.5)">-</button>
                    <input type="number" id="inp-kg-${i}-${si}" min="0" step="0.5" inputmode="decimal" style="font-size:15px; font-weight:bold; text-align:center;" placeholder="${prev&&prev.kg!==undefined?prev.kg:''}" value="${esc(x.kg??'')}" onchange="setVal(${i},${si},'kg',this.value)">
                    <button class="mini" type="button" style="padding:6px 10px; font-size:14px;" onclick="adjustVal(${i},${si},'kg',2.5)">+</button>
                </div>
            </label>
        </div>
        <div class="obs" style="margin-top:6px;"><label style="font-size:10px; color:#aaa;">OBSERVAÇÃO<textarea onchange="setVal(${i},${si},'obs',this.value)">${esc(x.obs||'')}</textarea></label></div>${special}
        <button class="check" style="font-size:14px; padding:10px; font-weight:bold; margin-top:8px;" onclick="toggleSet(${i},${si})">□ Marcar série concluída</button></div>`;
    });
    
    if(rows.some((r,si)=>!d.sets[makeKey(i,si)]?.done))html+=`<button class="exercise-finish" style="font-size:13px; font-weight:bold; padding:10px; margin-top:8px;" onclick="toggleEx(${i})">✓ Marcar exercício como concluído</button>`;
    return html+`</div>`;
}

function adjustVal(i,j,field,delta){
    const d=draft(),k=makeKey(i,j);
    d.sets[k]??={};
    let currentVal = parseFloat(d.sets[k][field]);
    if(isNaN(currentVal)){
        const prev = getLastExerciseData(current, i, j);
        currentVal = prev && prev[field] !== undefined ? parseFloat(prev[field])||0 : 0;
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

    if(!d.sets[k].done) {
        const inpKg = document.getElementById(`inp-kg-${i}-${j}`);
        const inpReps = document.getElementById(`inp-reps-${i}-${j}`);
        if (inpKg && inpKg.value !== '') d.sets[k].kg = inpKg.value;
        if (inpReps && inpReps.value !== '') d.sets[k].reps = inpReps.value;

        if(d.sets[k].kg === undefined || d.sets[k].kg === '' || d.sets[k].reps === undefined || d.sets[k].reps === ''){
            const prev = getLastExerciseData(current, i, j);
            if(prev){
                d.sets[k].kg = (d.sets[k].kg !== undefined && d.sets[k].kg !== '') ? d.sets[k].kg : prev.kg;
                d.sets[k].reps = (d.sets[k].reps !== undefined && d.sets[k].reps !== '') ? d.sets[k].reps : prev.reps;
            }
        }

        if(d.sets[k].kg === undefined || d.sets[k].kg === '' || d.sets[k].reps === undefined || d.sets[k].reps === ''){
            centerAlert('Preencher serie com repetições e cargas antes de concluir');
            return;
        }
    }

    d.sets[k].done=!d.sets[k].done;

    const ex = DATA[current].ex[i];
    const rows = expandedGroups(ex[1]);
    const allDone = rows.every((r, si) => d.sets[makeKey(i, si)]?.done);
    
    if (allDone) d.exDone[i] = true;
    
    save();
    renderWorkout();
    toast(d.sets[k].done ? (allDone ? 'Exercício concluído' : 'Série salva (+15 XP)') : 'Série desmarcada');
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

function finishWorkout(){
    const d=draft();
    if(!d.startedAt){toast('Inicie o treino antes de finalizar');return}
    
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
    stopAllRestTimers();
    releaseWakeLock();

    SoundFX.playLevelUp();
    showVictoryModal(record);
}

function showVictoryModal(record){
    const stats = getUserStats();
    const xpGained = 100 + Math.floor(record.totalVolume / 100);

    app.innerHTML = `<div class="app" style="text-align:center; padding-top:30px;">
        <div style="font-size: 50px;">⚡</div>
        <h1 style="color:#a855f7; font-size:24px; text-transform:uppercase; margin-top:8px;">MISSÃO CONCLUÍDA!</h1>
        <div class="muted">Completou o ${esc(record.name)}</div>

        <div class="card" style="border: 1px solid #8a2be2; background: rgba(138, 43, 226, 0.08); margin-top:15px; text-align:left; box-shadow: 0 0 20px rgba(138,43,226,0.3);">
            <div style="font-size:14px; font-weight:bold; color:#a855f7;">+${xpGained} XP ADICIONADOS</div>
            <div style="font-size:12px; color:#8a2be2; margin-top:2px; font-weight:bold;">TÍTULO: ${esc(stats.rank)}</div>
            <div style="font-size:18px; font-weight:bold; margin-top:4px;">Nível ${stats.level} <span style="font-size:12px; color:#aaa;">(${stats.progressPct}%)</span></div>
            <div style="width: 100%; background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden; margin-top: 8px;">
                <div style="width: ${stats.progressPct}%; background: linear-gradient(90deg, #6366f1, #8a2be2, #a855f7); height: 100%;"></div>
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:15px; font-size:13px; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px;">
                <div>Volume Total:<br><strong style="color:#a855f7;">${formatVolume(record.totalVolume)}</strong></div>
                <div>Tempo:<br><strong style="color:#fff;">${formatDuration(record.duration)}</strong></div>
            </div>
        </div>
        <button class="primary" style="margin-top:25px; width:100%; padding:16px; font-weight:bold; background: linear-gradient(135deg, #8a2be2, #a855f7);" onclick="home()">VOLTAR AO PAINEL PRINCIPAL</button>
    </div>`;
}

function cancelWorkout(){
    showConfirmModal('Sair do Treino', 'Deseja sair? O rascunho atual ficará salvo para você continuar depois.', () => {
        stopTotalTimer();
        stopAllRestTimers();
        releaseWakeLock();
        home();
    });
}

function startTotalTimer(){stopTotalTimer();totalTimerId=setInterval(()=>{const d=draft();const x=document.getElementById('totalTime');if(x&&d.startedAt)x.textContent=formatDuration(Math.floor((Date.now()-d.startedAt)/1000));const y=document.getElementById('restTotalLabel');if(y)y.innerHTML=`Descanso realizado: <span style="color:#a855f7;">${formatDuration(restTotalForDraft())}</span> / <span style="color:#7c3aed;">${formatDuration(d.scheduledRestTotal||0)}</span> programado`},1000)}
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
    if(db.restState?.deadline)stopGlobalRest(false);
    
    const total = db.restState?.total > 0 ? db.restState.total : 60;
    
    const d = draft();
    d.scheduledRestTotal = (d.scheduledRestTotal || 0) + total;

    db.restState = { startedAt: Date.now(), deadline: Date.now() + total * 1000, total: total };
    save();
    
    if (timerId) clearInterval(timerId);
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

function evolutionScreen(workoutKey = null) {
    stopTotalTimer();
    screen = 'evolution';

    if (!workoutKey) {
        let html = `<div class="app">${header('Evolução por Exercício')}
        <p class="muted">Selecione o treino para explorar a sobrecarga progressiva individual:</p>
        <div class="evo-two-columns">
            ${Object.keys(DATA).map(k => `
                <button class="day" style="margin:0;" onclick="evolutionScreen('${k}')">
                    <strong>${DATA[k].name}</strong>
                    <span style="font-size:11px; color:#aaa;">${DATA[k].desc}</span>
                </button>
            `).join('')}
        </div></div>`;
        app.innerHTML = html;
        return;
    }

    const workout = DATA[workoutKey];

    if (!selectedExEvo || !workout.ex.some(e => e[0] === selectedExEvo)) {
        selectedExEvo = workout.ex[0][0];
    }

    let html = `<div class="app">${header(`Evolução: ${workout.name}`)}
    <div style="display:flex; overflow-x:auto; gap:6px; margin-bottom:12px; padding-bottom:4px;">
        ${workout.ex.map(ex => `
            <button class="${selectedExEvo===ex[0]?'primary btn-evo-active':'secondary'}" style="white-space:nowrap; padding:8px 12px; font-size:12px;" onclick="renderExerciseEvoDetails('${workoutKey}', '${esc(ex[0])}')">
                ${esc(ex[0])}
            </button>
        `).join('')}
    </div>
    <div id="exerciseEvoContainer"></div>
    </div>`;

    app.innerHTML = html;
    renderExerciseEvoDetails(workoutKey, selectedExEvo);
}

function renderExerciseEvoDetails(workoutKey, exName) {
    selectedExEvo = exName;
    
    const buttons = document.querySelectorAll('.app button');
    buttons.forEach(btn => {
        if(btn.innerText.trim() === exName) {
            btn.className = 'primary btn-evo-active';
        } else if(DATA[workoutKey]?.ex.some(e => e[0] === btn.innerText.trim())) {
            btn.className = 'secondary';
        }
    });

    const container = document.getElementById('exerciseEvoContainer');
    if (!container) return;

    const historyPoints = [];
    let bestKg = 0, bestReps = 0, maxOneRM = 0;

    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(record => {
        if (record.workout !== workoutKey) return;
        const wData = DATA[record.workout];
        if (!wData) return;

        wData.ex.forEach((exInfo, exIndex) => {
            if (exInfo[0] === exName) {
                let maxKg = 0, maxReps = 0, dayBest1RM = 0;
                
                expandedGroups(exInfo[1]).forEach((rSet, setIndex) => {
                    const isTrabalho = rSet.group[0] === 'Trabalho';
                    if (isTrabalho) {
                        const setData = record.data?.sets?.[`${record.workout}-${exIndex}-${setIndex}`] || {};
                        const kg = parseFloat(setData.kg) || 0;
                        const reps = parseInt(setData.reps) || 0;
                        const estimated1RM = calculate1RM(kg, reps);

                        if (kg > maxKg || (kg === maxKg && reps > maxReps)) {
                            maxKg = kg; maxReps = reps;
                        }
                        if (kg > bestKg || (kg === bestKg && reps > bestReps)) {
                            bestKg = kg; bestReps = reps;
                        }
                        if (estimated1RM > dayBest1RM) {
                            dayBest1RM = estimated1RM;
                        }
                        if (estimated1RM > maxOneRM) {
                            maxOneRM = estimated1RM;
                        }
                    }
                });

                if (maxKg > 0) {
                    const dateStr = new Date(record.date).toLocaleDateString('pt-BR', {day:'2-digit', month:'2-digit'});
                    historyPoints.push({ 
                        dateStr, 
                        fullDate: new Date(record.date), 
                        kg: maxKg, 
                        reps: maxReps,
                        oneRM: dayBest1RM
                    });
                }
            }
        });
    });

    if (historyPoints.length === 0) {
        container.innerHTML = `<div class="card" style="text-align:center; padding:20px; margin-top:15px;">
            <div style="font-size:30px; margin-bottom:8px;">📊</div>
            <strong>${esc(exName)}</strong>
            <p class="muted" style="margin-top:6px; font-size:13px;">Sem séries de Trabalho registradas neste exercício.</p>
        </div>`;
        return;
    }

    const latest = historyPoints[historyPoints.length - 1];
    const oldest = historyPoints[0];
    const kgDiff = latest.kg - oldest.kg;

    let diffText = 'Primeiro registro';
    if (historyPoints.length > 1) {
        const pctGain = oldest.oneRM > 0 ? Math.round(((latest.oneRM - oldest.oneRM) / oldest.oneRM) * 100) : 0;
        diffText = kgDiff >= 0 
            ? `+${kgDiff} kg absoluto (${pctGain >= 0 ? '+' : ''}${pctGain}% de força estim.) desde o 1º registro` 
            : `${kgDiff} kg absoluto (${pctGain}% de força estim.) desde o 1º registro`;
    }

    container.innerHTML = `
    <div class="card" style="border:1px solid #a855f7; margin-bottom:15px; background:rgba(168,85,247,0.06);">
        <h3 style="color:#fff; margin:0 0 10px 0; font-size:15px;">${esc(exName)}</h3>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:13px;">
            <div>Carga Máxima:<br><strong style="font-size:18px; color:#a855f7;">${bestKg} kg</strong></div>
            <div>Recorde 1RM (Força):<br><strong style="font-size:18px; color:#a855f7;">~${maxOneRM} kg</strong></div>
            <div>Último Treino:<br><strong style="color:#c084fc;">${latest.kg} kg × ${latest.reps}</strong></div>
            <div>Último 1RM Estim.:<br><strong style="color:#c084fc;">~${latest.oneRM} kg</strong></div>
        </div>
    </div>

    <div class="card" style="padding:10px; margin-bottom:15px;">
        <div style="font-size:11px; font-weight:bold; color:#aaa; margin-bottom:8px;">PROGRESSÃO DE CARGA ABSOLUTA (KG)</div>
        <div style="position:relative; height:160px; width:100%;">
            <canvas id="evoExCanvas"></canvas>
        </div>
    </div>

    <div class="card" style="margin-bottom:15px; background:rgba(0,0,0,0.3); border:1px solid rgba(168,85,247,0.3);">
        <div style="font-size:11px; font-weight:bold; color:#a855f7; text-transform:uppercase;">💡 Insight de Evolução</div>
        <div style="font-size:14px; color:#fff; font-weight:bold; margin-top:4px;">${diffText}</div>
    </div>

    <div class="card">
        <div style="font-size:12px; font-weight:bold; color:#aaa; margin-bottom:8px;">HISTÓRICO DE SÉRIES DE TRABALHO</div>
        <div style="display:flex; flex-direction:column; gap:6px;">
            ${historyPoints.slice().reverse().map(p => `
                <div style="display:flex; justify-content:space-between; font-size:13px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:4px;">
                    <span style="color:#888;">${p.dateStr}</span>
                    <strong style="color:#a855f7;">${p.kg} kg × ${p.reps} reps <small style="color:#aaa; font-weight:normal;">(1RM ~${p.oneRM}kg)</small></strong>
                </div>
            `).join('')}
        </div>
    </div>`;

    loadChartJS(() => {
        const ctx = document.getElementById('evoExCanvas')?.getContext('2d');
        if (!ctx) return;
        if (activeChartInstance) activeChartInstance.destroy();

        activeChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: historyPoints.map(p => p.dateStr),
                datasets: [{
                    label: 'Carga (kg)',
                    data: historyPoints.map(p => p.kg),
                    borderColor: '#a855f7',
                    backgroundColor: 'rgba(168,85,247,0.15)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: '#888', font:{size:10} }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { color: '#888', font:{size:10} }, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    });
}

function recordsScreen(filterWorkout = 'ALL'){
    stopTotalTimer();
    screen='records';
    currentRecordsFilter = filterWorkout;

    let html = `<div class="app">${header('Recordes Pessoais (PRs)')}
    <p class="muted">Selecione o treino para filtrar seus recordes de carga e volume:</p>
    
    <div style="display:flex; overflow-x:auto; gap:6px; margin-bottom:15px; padding-bottom:5px;">
        <button class="${filterWorkout==='ALL'?'primary':'secondary'}" style="white-space:nowrap; padding:6px 12px; font-size:12px;" onclick="recordsScreen('ALL')">Todos</button>
        ${Object.keys(DATA).map(k => `<button class="${filterWorkout===k?'primary':'secondary'}" style="white-space:nowrap; padding:6px 12px; font-size:12px;" onclick="recordsScreen('${k}')">Treino ${k}</button>`).join('')}
    </div>`;

    if (filterWorkout !== 'ALL') {
        html += `<button class="primary" style="width:100%; padding:12px; margin-bottom:15px; background:linear-gradient(135deg, #8a2be2, #a855f7); font-weight:bold;" onclick="evolutionScreen('${filterWorkout}')">📊 Ver Gráficos & Evolução do ${DATA[filterWorkout].name}</button>`;
    }

    const prMap = {};

    db.history.slice().sort((a,b) => new Date(a.date) - new Date(b.date)).forEach(record => {
        if(filterWorkout !== 'ALL' && record.workout !== filterWorkout) return;

        const workoutData = DATA[record.workout];
        if(!workoutData) return;
        const dateStr = new Date(record.date).toLocaleDateString('pt-BR');

        workoutData.ex.forEach((exInfo, exIndex) => {
            const exName = exInfo[0];
            const key = filterWorkout === 'ALL' ? `${exName} (${record.workout})` : exName;

            expandedGroups(exInfo[1]).forEach((rSet, setIndex) => {
                if (rSet.group[0] === 'Trabalho') {
                    const setData = record.data.sets[`${record.workout}-${exIndex}-${setIndex}`] || {};
                    const kg = parseFloat(setData.kg) || 0;
                    const reps = parseInt(setData.reps) || 0;
                    const est1RM = calculate1RM(kg, reps);

                    if(kg > 0) {
                        const currentBestKg = prMap[key]?.kg || 0;
                        const currentBestReps = prMap[key]?.reps || 0;
                        const currentBest1RM = prMap[key]?.est1RM || 0;

                        if(kg > currentBestKg || (kg === currentBestKg && reps > currentBestReps) || est1RM > currentBest1RM){
                            prMap[key] = { keyName: key, kg, reps, est1RM, dateStr, workoutKey: record.workout, exName };
                        }
                    }
                }
            });
        });
    });

    const prList = Object.values(prMap).sort((a,b) => b.kg - a.kg);
    if(prList.length === 0){
        html += `<div class="empty">Nenhum recorde de Trabalho encontrado.</div>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:8px;">`;
        prList.forEach(pr => {
            html += `<div class="card" style="display:flex; justify-content:space-between; align-items:center; padding:12px; cursor:pointer;" onclick="renderPRDetailModal('${pr.workoutKey}', '${esc(pr.exName)}')">
                <div style="flex:1; padding-right:10px;">
                    <div style="font-weight:bold; font-size:14px; line-height:1.2; color:#fff;">🏆 ${esc(pr.keyName)}</div>
                    <div class="muted" style="font-size:11px; margin-top:2px;">Alcançado em ${pr.dateStr}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:18px; font-weight:bold; color:#a855f7;">${pr.kg} kg</div>
                    <div style="font-size:11px; color:#aaa;">${pr.reps} reps <span style="color:#c084fc;">(1RM ~${pr.est1RM}kg)</span></div>
                </div>
            </div>`;
        });
        html += `</div>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

function renderPRDetailModal(workoutKey, exName) {
    evolutionScreen(workoutKey);
    renderExerciseEvoDetails(workoutKey, exName);
}

function getWeeklyComparison(){
    const now = new Date();
    const dayIdx = now.getDay(); // 0=domingo, 1=segunda, ... 6=sábado
    const diffToMonday = (dayIdx === 0) ? 6 : dayIdx - 1;
    const startThisWeek = new Date(now.setDate(now.getDate() - diffToMonday)).setHours(0,0,0,0);
    const startLastWeek = new Date(startThisWeek - 7*24*60*60*1000).getTime();
    let thisWeekVol = 0, lastWeekVol = 0, thisWeekTime = 0, thisWeekCardio = 0, thisWeekCount = 0;

    db.history.forEach(r => {
        const t = new Date(r.date).getTime();
        const vol = r.totalVolume || 0, dur = r.duration || 0, cardio = parseFloat(r.data?.cardio?.time) || 0;
        
        if(t >= startThisWeek){
            thisWeekVol += vol; 
            thisWeekTime += dur; 
            thisWeekCardio += cardio; 
            if(r.workout !== 'CARDIO') thisWeekCount++;
        } else if(t >= startLastWeek && t < startThisWeek){
            lastWeekVol += vol;
        }
    });
    const volDiffPct = lastWeekVol > 0 ? (((thisWeekVol - lastWeekVol) / lastWeekVol) * 100).toFixed(1) : 0;
    return { thisWeekVolRaw: thisWeekVol, volDiffPct, thisWeekTime: formatDuration(thisWeekTime), thisWeekCardio, thisWeekCount };
}

function historyScreen(){
    stopTotalTimer();
    screen='history';

    let html = `<div class="app">${header('Diário de Treinos')}
    <p class="muted">Histórico resumido das suas missões completadas:</p>`;

    if(db.history.length === 0){
        html += `<div class="empty">Ainda não há treinos finalizados.</div>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">`;
        html += db.history.slice().reverse().map(r => {
            const d = new Date(r.date);
            const dateStr = `${d.toLocaleDateString('pt-BR')} · ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}`;
            const isCardio = r.workout === 'CARDIO';

            return `<div class="card" style="padding:12px; border:1px solid rgba(168,85,247,0.2);">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong style="font-size:16px; color:#a855f7;">${esc(r.name)}</strong>
                    <span style="font-size:11px; color:#aaa;">${dateStr}</span>
                </div>
                <div style="font-size:13px; color:#ccc; margin-top:6px;">
                    ⏱️ ${isCardio ? (r.data?.cardio?.time + ' min') : formatDuration(r.duration)} 
                    ${!isCardio ? ` · 🏋️ ${formatVolume(r.totalVolume || 0)}` : ` · 🏃 ${r.data?.cardio?.dist || 0} km`}
                </div>
                <div style="display:flex; gap:8px; margin-top:10px;">
                    <button class="secondary" style="flex:2; padding:10px; font-size:13px; font-weight:bold; background:rgba(255,255,255,0.05); border-color:#a855f7;" onclick="viewRecord('${r.id}')">📄 Ver detalhes</button>
                    <button class="secondary danger" style="flex:1; padding:8px 10px; font-size:11px; opacity:0.8;" onclick="deleteRecord('${r.id}')">🗑 Excluir</button>
                </div>
            </div>`;
        }).join('');
        html += `</div>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

function deleteRecord(id){
    showConfirmModal('Excluir Treino', 'Tem certeza que deseja apagar este treino do seu histórico?', () => {
        db.history = db.history.filter(x => x.id !== id);
        save();
        toast('Treino excluído do histórico');
        historyScreen();
    });
}

function viewRecord(id){
    const r=db.history.find(x=>x.id===id);
    const v=DATA[r.workout];
    
    let detailsHtml = `
        <div style="margin-bottom:12px; font-size:13px; color:#aaa;">
            ${new Date(r.date).toLocaleString('pt-BR')}<br>
            Duração: <strong>${r.workout === 'CARDIO' ? (r.data?.cardio?.time + ' min') : formatDuration(r.duration)}</strong>
            ${r.workout !== 'CARDIO' ? `| Vol: <strong>${formatVolume(r.totalVolume||0)}</strong>` : ''}
        </div>
    `;

    if (v) {
        v.ex.forEach((ex,i)=>{
            detailsHtml+=`<div style="margin-bottom:10px; background:rgba(255,255,255,0.03); padding:8px; border-radius:8px;">
                <div style="font-weight:bold; font-size:13px; color:#a855f7;">${i+1}. ${esc(ex[0])}</div>`;
            expandedGroups(ex[1]).forEach((row,j)=>{
                const x=r.data.sets[`${r.workout}-${i}-${j}`]||{};
                detailsHtml+=`<div style="font-size:12px; margin-top:4px; display:flex; justify-content:space-between;">
                    <span>Série ${row.number}/${row.total} (${row.group[0]})</span>
                    <strong>${x.kg||'—'} kg × ${x.reps||'—'} reps ${x.done?'✓':''}</strong>
                </div>`;
            });
            detailsHtml+=`</div>`;
        });
    }

    const c=r.data.cardio||{};
    if (c.time) {
        detailsHtml += `<div style="font-size:12px; background:rgba(168,85,247,0.08); padding:8px; border-radius:8px; margin-top:10px; border:1px solid rgba(168,85,247,0.3);">
            <strong style="color:#a855f7;">Resumo do Cardio:</strong><br>
            Tempo: ${c.time} min | Distância: ${c.dist||'0'} km | ${c.bpm||'—'} BPM <br>
            ${c.obs ? `<span style="color:#aaa;"><em>${esc(c.obs)}</em></span>` : ''}
        </div>`;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box">
            <h3 style="color:#a855f7; margin-top:0;">${esc(r.name)}</h3>
            ${detailsHtml}
            <button class="primary" style="width:100%; padding:10px; margin-top:15px; background:linear-gradient(135deg, #8a2be2, #a855f7);" onclick="this.parentElement.parentElement.remove()">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
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
        <div style="font-weight:bold; margin-bottom:8px; color:#a855f7;">🎯 Metas da Missão Semanal</div>
        <div class="fields" style="margin-bottom:8px;">
            <label style="font-size:12px;">Qtd. Treinos/Semana
                <input type="number" id="targetWorkoutsInput" min="1" max="14" value="${db.user.targetWorkouts || 5}">
            </label>
            <label style="font-size:12px;">Cardio (Minutos/Semana)
                <input type="number" id="targetCardioInput" min="0" step="5" value="${db.user.targetCardio || 60}">
            </label>
        </div>
        <button class="secondary" onclick="updateWeeklyTargets()">💾 Salvar Metas Semanais</button>
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

function updateWeeklyTargets(){
    const tw = parseInt(document.getElementById('targetWorkoutsInput').value);
    const tc = parseInt(document.getElementById('targetCardioInput').value);
    if(tw > 0) db.user.targetWorkouts = tw;
    if(!isNaN(tc) && tc >= 0) db.user.targetCardio = tc;
    save();
    toast('Metas semanais atualizadas!');
}

function clearDrafts(){
    showConfirmModal('Limpar Rascunhos', 'Deseja apagar todos os treinos em andamento salvos como rascunho?', () => {
        db.drafts = {};
        save();
        toast('Rascunhos apagados');
    });
}

function wipeHistory(){
    showConfirmModal('Apagar Histórico', 'ATENÇÃO: Esta ação apaga todo o histórico e nível do Caçador. Deseja continuar?', () => {
        db.history = [];
        save();
        historyScreen();
    });
}

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

function goHome(){stopTotalTimer();stopAllRestTimers();home()}

home();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js?v=15');