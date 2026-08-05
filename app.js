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
const app=document.getElementById('app');

const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function toast(t){const x=document.createElement('div');x.className='toast';x.textContent=t;document.body.appendChild(x);setTimeout(()=>x.remove(),1800)}
function header(title,homeBack=true){return `<div class="top"><div class="brand">SOLO LEVELING</div><button class="iconbtn" onclick="${homeBack?'goHome()':'settingsScreen()'}">${homeBack?'‹':'⚙'}</button></div><h1 class="screen-title">${title}</h1>`}

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
    
    db.history.forEach(r => {
        totalXP += 25;
        const cardioMin = parseFloat(r.data?.cardio?.time) || 0;
        totalXP += Math.floor(cardioMin * 0.5);
    });

    const level = Math.floor(totalXP / 100) + 1;
    const currentLevelXP = totalXP % 100;
    const lastWorkout = db.history.length ? db.history[db.history.length - 1].date : null;

    return { level, currentLevelXP, totalWorkouts, lastWorkoutDateStr: getRelativeDate(lastWorkout) };
}

function home(){
    stopTotalTimer();
    screen='home';
    const stats = getUserStats();
    
    app.innerHTML=`<div class="app">${header('Painel do Caçador', false)}
    <div class="card" style="background: linear-gradient(135deg, rgba(20,20,35,0.9), rgba(10,10,20,0.95)); border: 1px solid var(--accent, #00d2ff); box-shadow: 0 0 15px rgba(0,210,255,0.15); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 13px; color: #88a; text-transform: uppercase; letter-spacing: 1px;">SISTEMA SOLO LEVELING</div>
        <div style="font-size: 20px; font-weight: bold; color: #fff; margin-top: 2px;">${getGreeting()}, ${esc(db.user.name)}</div>
        
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 15px;">
            <span style="font-size: 16px; font-weight: bold; color: var(--accent, #00d2ff);">Nível ${stats.level}</span>
            <span style="font-size: 12px; color: #aaa;">Experiência: ${stats.currentLevelXP}%</span>
        </div>
        
        <div style="width: 100%; background: rgba(255,255,255,0.1); height: 10px; border-radius: 5px; overflow: hidden; margin-top: 6px;">
            <div style="width: ${stats.currentLevelXP}%; background: linear-gradient(90deg, #0072ff, #00d2ff); height: 100%; transition: width 0.3s;"></div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 13px;">
            <div><span style="color: #888;">Treinos Concluídos:</span> <strong>${stats.totalWorkouts}</strong></div>
            <div><span style="color: #888;">Último Treino:</span> <strong>${stats.lastWorkoutDateStr}</strong></div>
        </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 10px;">
        <button class="primary" style="padding: 16px; font-size: 16px; font-weight: bold; text-align: left;" onclick="selectWorkoutScreen()">⚔️ Treinar Agora</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="historyScreen()">📈 Histórico e Estatísticas</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="evolutionScreen()">📊 Evolução de Cargas & Volume</button>
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="recordsScreen()">🏆 Recordes Pessoais (PRs)</button>
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

// BUSCA A ÚLTIMA CARGA E REPS DE UM EXERCÍCIO ESPECÍFICO NO HISTÓRICO
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

function draft(){db.drafts[current]??={sets:{},exDone:{},cardio:{},startedAt:null};return db.drafts[current]}
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
    <div class="start-panel">
        <div><strong>${started?'Treino em andamento':'Treino não iniciado'}</strong>
        <div class="muted">${started?'O tempo está contando.':'Quando estiver pronto, toque em iniciar.'}</div></div>
        <button class="primary start-workout" onclick="startWorkout()" ${started?'disabled':''}>${started?'✓ Iniciado':'▶ Iniciar'}</button>
    </div>
    
    ${v.ex.map((ex,i)=>exerciseHTML(ex,i,d)).join('')}
    
    <div class="section-title">Cardio do dia</div>
    <div class="card">
        <div class="fields"><label>Tempo (min)<input id="cardioTime" type="number" min="0" step="0.1" value="${esc(d.cardio.time||'')}"></label><label>Distância (km)<input id="cardioDist" type="number" min="0" step="0.01" value="${esc(d.cardio.dist||'')}"></label></div>
        <div class="fields"><label>BPM médio<input id="cardioBpm" type="number" min="0" step="1" value="${esc(d.cardio.bpm||'')}"></label><label>Observação<input id="cardioObs" type="text" value="${esc(d.cardio.obs||'')}"></label></div>
        <button class="secondary" onclick="saveCardio()">💾 Salvar cardio</button>
    </div>
    
    <button class="finish" onclick="finishWorkout()" ${started?'':'disabled'}>✓ Finalizar e salvar treino</button>
    <button class="secondary danger" onclick="cancelWorkout()">Sair e manter rascunho</button>
    
    <div class="total-bottom">
        <div class="muted">TEMPO TOTAL DO TREINO</div>
        <strong id="totalTime">${started?formatDuration(Math.floor((Date.now()-d.startedAt)/1000)):'00:00'}</strong>
        <div style="margin-top:6px; font-size:12px; color:#aaa;">Volume ($\text{Carga} \times \text{Reps}$): <strong style="color:var(--accent,#00d2ff);">${metrics.totalVolume.toLocaleString('pt-BR')} kg</strong></div>
        <div style="font-size:12px; color:#aaa;">Carga Somada Bruta: <strong>${metrics.totalWeightRaw.toLocaleString('pt-BR')} kg</strong></div>
        <div class="muted" id="restTotalLabel" style="margin-top:4px;">Descanso registrado: ${formatDuration(d.restTotal||0)}</div>
    </div></div>
    
    <div class="global-rest" id="globalRest">
        <div><small>DESCANSO</small><strong id="globalRestClock">00:00</strong></div>
        <div class="global-rest-actions">
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

function exerciseHTML(ex,i,d){
    const [name,groups,tech]=ex;
    const done=!!d.exDone[i];
    if(done)return '';
    const rows=expandedGroups(groups);
    let lastGroup=-1;
    let html=`<div class="card"><div class="exercise-head"><div class="exercise-name">${i+1}. ${esc(name)}</div><span class="badge">Pendente</span></div>${tech?`<div class="tech">⚡ ${esc(tech)}</div>`:''}`;
    
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
        
        // DADOS DO TREINO ANTERIOR
        const prev = getLastExerciseData(current, i, si);
        const prevLabel = prev ? `Anterior: ${prev.kg}kg × ${prev.reps}` : 'Primeira vez';

        const setVolume = (parseFloat(x.kg)||0) * (parseInt(x.reps)||0);
        const volumeBadge = `<span style="font-size:11px; color:#00d2ff; margin-left: auto;">${prevLabel}</span>`;

        html+=`<div class="set"><div class="sethead"><div class="settype">${esc(type)} · Série ${r.number}/${r.total}</div>${volumeBadge}</div>
        <div class="fields">
            <label>REPS FEITAS
                <div style="display:flex; gap:4px; align-items:center;">
                    <button class="mini" type="button" onclick="adjustVal(${i},${si},'reps',-1)">-</button>
                    <input type="number" id="inp-reps-${i}-${si}" min="0" inputmode="numeric" placeholder="${prev?prev.reps:''}" value="${esc(x.reps??'')}" onchange="setVal(${i},${si},'reps',this.value)">
                    <button class="mini" type="button" onclick="adjustVal(${i},${si},'reps',1)">+</button>
                </div>
            </label>
            <label>CARGA (KG)
                <div style="display:flex; gap:4px; align-items:center;">
                    <button class="mini" type="button" onclick="adjustVal(${i},${si},'kg',-2.5)">-</button>
                    <input type="number" id="inp-kg-${i}-${si}" min="0" step="0.5" inputmode="decimal" placeholder="${prev?prev.kg:''}" value="${esc(x.kg??'')}" onchange="setVal(${i},${si},'kg',this.value)">
                    <button class="mini" type="button" onclick="adjustVal(${i},${si},'kg',2.5)">+</button>
                </div>
            </label>
        </div>
        <div class="obs"><label>OBSERVAÇÃO<textarea onchange="setVal(${i},${si},'obs',this.value)">${esc(x.obs||'')}</textarea></label></div>${special}
        <button class="check" onclick="toggleSet(${i},${si})">□ Marcar série concluída</button></div>`;
    });
    
    if(rows.some((r,si)=>!d.sets[makeKey(i,si)]?.done))html+=`<button class="exercise-finish" onclick="toggleEx(${i})">✓ Marcar exercício como concluído</button>`;
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

function setVal(i,j,f,v){const d=draft(),k=makeKey(i,j);d.sets[k]??={};d.sets[k][f]=v;save()}

function toggleSet(i,j){
    const d=draft(),k=makeKey(i,j);
    d.sets[k]??={};

    // Preenche com o valor anterior caso o usuário tenha deixado em branco
    if(!d.sets[k].kg || !d.sets[k].reps){
        const prev = getLastExerciseData(current, i, j);
        if(prev){
            d.sets[k].kg = d.sets[k].kg || prev.kg;
            d.sets[k].reps = d.sets[k].reps || prev.reps;
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

function toggleEx(i){const d=draft();d.exDone[i]=!d.exDone[i];save();renderWorkout()}
function startWorkout(){const d=draft();if(!d.startedAt){d.startedAt=Date.now();save();toast('Treino iniciado')}renderWor
