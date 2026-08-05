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
['Stiff',[['Aquecimento','1','10–15','1 min'],['Ajuste','1–2','4–6','1–2 min'],['Trabalho','2','8–10','2–3 min']]],
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

const KEY='solo_leveling_v9';
let db=JSON.parse(localStorage.getItem(KEY)||'null')||{history:[],drafts:{},user:{name:'Alexsandro'}};
let screen='home',current=null,timerId=null,totalTimerId=null;
let restDeadline=0, restTotal=0, restStartedAt=0;
let currentEvolutionMetric = 'kg'; // 'kg', 'reps', 'volume'
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

// CÁLCULO DE SISTEMA DE NÍVEL / XP (GAMIFICAÇÃO)
function getUserStats(){
    const totalWorkouts = db.history.length;
    let totalXP = 0;
    
    db.history.forEach(r => {
        totalXP += 100; // 100 XP por treino finalizado
        const cardioMin = parseFloat(r.data?.cardio?.time) || 0;
        totalXP += Math.floor(cardioMin * 1.5); // 1.5 XP por min de cardio
    });

    const level = Math.floor(totalXP / 100) + 1;
    const currentLevelXP = totalXP % 100;
    const lastWorkout = db.history.length ? db.history[db.history.length - 1].date : null;

    return { level, currentLevelXP, totalWorkouts, lastWorkoutDateStr: getRelativeDate(lastWorkout) };
}

// 1° RECURSO: TELA INICIAL REFORMULADA COM GAMIFICAÇÃO
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
        <button class="secondary" style="text-align: left; padding: 14px;" onclick="historyScreen()">📈 Histórico e Sessões</button>
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

function draft(){db.drafts[current]??={sets:{},exDone:{},cardio:{},startedAt:null};return db.drafts[current]}
function openWorkout(k){current=k;screen='workout';draft();save();renderWorkout()}
function parseQty(q){const m=String(q).match(/(\d+)\s*[–-]\s*(\d+)/);if(m)return Number(m[2]);const n=String(q).match(/\d+/);return n?Number(n[0]):1}
function expandedGroups(groups){let out=[];groups.forEach((g,gi)=>{const qty=parseQty(g[1]);for(let n=1;n<=qty;n++)out.push({group:g,groupIndex:gi,number:n,total:qty});});return out}
function makeKey(exi,si){return `${current}-${exi}-${si}`}

// CÁLCULO DE VOLUME TOTAL
function calculateDraftVolume(d){
    let total = 0;
    Object.values(d.sets||{}).forEach(s => {
        if(s.done && s.kg && s.reps){
            total += (parseFloat(s.kg) || 0) * (parseInt(s.reps) || 0);
        }
    });
    return total;
}

function renderWorkout(){
    stopTotalTimer();
    const v=DATA[current],d=draft();
    const started=!!d.startedAt;
    const currentVolume = calculateDraftVolume(d);

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
        <div class="muted" style="margin-top:4px;">Volume Acumulado: <strong style="color:var(--accent,#00d2ff);">${currentVolume.toLocaleString('pt-BR')} kg</strong></div>
        <div class="muted" id="restTotalLabel">Descanso registrado: ${formatDuration(d.restTotal||0)}</div>
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
        
        const setVolume = (parseFloat(x.kg)||0) * (parseInt(x.reps)||0);
        const volumeBadge = setVolume > 0 ? `<span style="font-size:11px; color:#aaa; margin-left: auto;">Vol: ${setVolume}kg</span>` : '';

        html+=`<div class="set"><div class="sethead"><div class="settype">${esc(type)} · Série ${r.number}/${r.total}</div>${volumeBadge}</div>
        <div class="fields">
            <label>REPS FEITAS<input type="number" min="0" inputmode="numeric" value="${esc(x.reps??'')}" onchange="setVal(${i},${si},'reps',this.value)"></label>
            <label>CARGA (KG)<input type="number" min="0" step="0.5" inputmode="decimal" value="${esc(x.kg??'')}" onchange="setVal(${i},${si},'kg',this.value)"></label>
        </div>
        <div class="obs"><label>OBSERVAÇÃO<textarea onchange="setVal(${i},${si},'obs',this.value)">${esc(x.obs||'')}</textarea></label></div>${special}
        <button class="check" onclick="toggleSet(${i},${si})">□ Marcar série concluída</button></div>`;
    });
    
    if(rows.some((r,si)=>!d.sets[makeKey(i,si)]?.done))html+=`<button class="exercise-finish" onclick="toggleEx(${i})">✓ Marcar exercício como concluído</button>`;
    return html+`</div>`;
}

function setVal(i,j,f,v){const d=draft(),k=makeKey(i,j);d.sets[k]??={};d.sets[k][f]=v;save()}

function toggleSet(i,j){
    const d=draft(),k=makeKey(i,j);
    d.sets[k]??={};
    d.sets[k].done=!d.sets[k].done;
    
    const ex = DATA[current].ex[i];
    const rows = expandedGroups(ex[1]);
    const allDone = rows.every((r, si) => d.sets[makeKey(i, si)]?.done);
    
    if (allDone) {
        d.exDone[i] = true;
    }
    
    save();
    renderWorkout();
    toast(d.sets[k].done ? (allDone ? 'Exercício concluído' : 'Série salva') : 'Série desmarcada');
}

function toggleEx(i){const d=draft();d.exDone[i]=!d.exDone[i];save();renderWorkout()}
function startWorkout(){const d=draft();if(!d.startedAt){d.startedAt=Date.now();save();toast('Treino iniciado')}renderWorkout()}
function saveCardio(){const d=draft();d.cardio={time:document.getElementById('cardioTime').value,dist:document.getElementById('cardioDist').value,bpm:document.getElementById('cardioBpm').value,obs:document.getElementById('cardioObs').value};save();toast('Cardio salvo')}

function finishWorkout(){
    const d=draft();
    if(!d.startedAt){toast('Inicie o treino antes de finalizar');return}
    saveCardio();
    const v=DATA[current];
    d.restTotal=restTotalForDraft();
    const totalVol = calculateDraftVolume(d);
    const record={id:uid(),date:new Date().toISOString(),workout:current,name:v.name,duration:Math.floor((Date.now()-d.startedAt)/1000),restDuration:d.restTotal,totalVolume:totalVol,data:JSON.parse(JSON.stringify(d))};
    db.history.push(record);
    delete db.drafts[current];
    save();
    stopTotalTimer();
    clearInterval(timerId);
    stopAllRestTimers();
    toast('⚡ Treino salvo! XP Adicionado.');
    setTimeout(home,500);
}

function cancelWorkout(){if(confirm('Sair agora? O rascunho ficará salvo para continuar depois.')){stopTotalTimer();clearInterval(timerId);stopAllRestTimers();home()}}
function startTotalTimer(){stopTotalTimer();totalTimerId=setInterval(()=>{const d=draft();const x=document.getElementById('totalTime');if(x&&d.startedAt)x.textContent=formatDuration(Math.floor((Date.now()-d.startedAt)/1000));const y=document.getElementById('restTotalLabel');if(y)y.textContent='Descanso registrado: '+formatDuration(restTotalForDraft())},1000)}
function stopTotalTimer(){if(totalTimerId)clearInterval(totalTimerId);totalTimerId=null}
function formatDuration(n){n=Math.max(0,Math.floor(n));const h=Math.floor(n/3600),m=Math.floor((n%3600)/60),s=n%60;if(h)return `${h}h ${m}min`;if(m)return `${m}min ${String(s).padStart(2,'0')}s`;return `00:${String(s).padStart(2,'0')}`}
function fmt(n){n=Math.max(0,Math.floor(n));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}

function restTotalForDraft(){const d=draft();return (d.restTotal||0)+(restStartedAt&&restDeadline?Math.max(0,Math.min(restTotal,Math.floor((Date.now()-restStartedAt)/1000))):0)}
function setGlobalRest(seconds){stopGlobalRest(false);restTotal=seconds;updateGlobalRestUI()}

async function requestNotifications(){try{if('Notification' in window&&Notification.permission==='default')await Notification.requestPermission()}catch(e){}}

function notifyRestDone(){
    navigator.vibrate?.([250,100,250,100,400]);
    if('Notification' in window&&Notification.permission==='granted'){
        try{new Notification('Solo Leveling',{body:'⏱️ Descanso concluído! Volte para a próxima série.',icon:'icon.svg',tag:'solo-rest'})}catch(e){}
    }
    alert('⏱️ Descanso terminado! Volte ao treino.');
}

function updateGlobalRestUI(){
    const el=document.getElementById('globalRestClock');
    if(!el)return;
    let left=restDeadline?Math.max(0,Math.ceil((restDeadline-Date.now())/1000)):restTotal;
    el.textContent=fmt(left);
}

function startGlobalRest(){
    requestNotifications();
    if(restDeadline)stopGlobalRest(false);
    if(restTotal<=0)restTotal=60;
    restStartedAt=Date.now();
    restDeadline=Date.now()+restTotal*1000;
    
    clearInterval(timerId);
    timerId=setInterval(()=>{
        const now = Date.now();
        if(now >= restDeadline){
            clearInterval(timerId);
            timerId=null;
            const d=draft();
            d.restTotal=(d.restTotal||0)+restTotal;
            save();
            restDeadline=0;
            restStartedAt=0;
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
    if(commit&&restDeadline){
        const d=draft();
        d.restTotal=(d.restTotal||0)+Math.max(0,Math.min(restTotal,Math.floor((Date.now()-restStartedAt)/1000)));
        save();
    }
    restDeadline=0;
    restStartedAt=0;
}
function stopAllRestTimers(){stopGlobalRest(true)}

// 2° RECURSO: TELA DE EVOLUÇÃO COM GRÁFICOS VISUAIS E ALTERNADOR DE MÉTRICAS
function setEvolutionMetric(m){
    currentEvolutionMetric = m;
    evolutionScreen();
}

function evolutionScreen(){
    stopTotalTimer();
    screen='evolution';
    
    const historyExMap = {};
    
    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(record => {
        const workoutData = DATA[record.workout];
        if(!workoutData) return;
        const dateStr = new Date(record.date).toLocaleDateString('pt-BR', {day:'2-digit', month:'2-digit'});
        const fullDate = new Date(record.date);

        workoutData.ex.forEach((exInfo, exIndex) => {
            const exName = exInfo[0];
            historyExMap[exName] = historyExMap[exName] || [];
            
            let maxKg = 0, maxReps = 0, totalExVol = 0;
            
            expandedGroups(exInfo[1]).forEach((row, setIndex) => {
                const setData = record.data.sets[`${record.workout}-${exIndex}-${setIndex}`] || {};
                const kg = parseFloat(setData.kg) || 0;
                const reps = parseInt(setData.reps) || 0;
                if(kg > maxKg || (kg === maxKg && reps > maxReps)) {
                    maxKg = kg;
                    maxReps = reps;
                }
                totalExVol += (kg * reps);
            });

            if(maxKg > 0) {
                historyExMap[exName].push({ dateStr, fullDate, kg: maxKg, reps: maxReps, volume: totalExVol });
            }
        });
    });

    let html = `<div class="app">${header('Evolução de Cargas & Volume')}
    <div style="display:flex; gap:6px; margin-bottom:15px;">
        <button class="${currentEvolutionMetric==='kg'?'primary':'secondary'}" style="flex:1; padding:8px; font-size:12px;" onclick="setEvolutionMetric('kg')">Carga (kg)</button>
        <button class="${currentEvolutionMetric==='reps'?'primary':'secondary'}" style="flex:1; padding:8px; font-size:12px;" onclick="setEvolutionMetric('reps')">Repetições</button>
        <button class="${currentEvolutionMetric==='volume'?'primary':'secondary'}" style="flex:1; padding:8px; font-size:12px;" onclick="setEvolutionMetric('volume')">Volume (kg)</button>
    </div>`;

    const exNames = Object.keys(historyExMap);

    if(exNames.length === 0){
        html += `<div class="empty">Nenhum histórico registrado ainda. Complete treinos para ver a evolução aqui!</div>`;
    } else {
        exNames.forEach(exName => {
            const records = historyExMap[exName];
            if(records.length === 0) return;
            
            const recent = records.slice().reverse().slice(0, 5);
            const latest = recent[0];
            const oldest = recent[recent.length - 1];
            
            // Encontrar valor máximo no lote para a barra do gráfico proporcional
            const maxVal = Math.max(...recent.map(r => r[currentEvolutionMetric])) || 1;

            const kgDiff = latest.kg - oldest.kg;
            const daysDiff = Math.round((latest.fullDate - oldest.fullDate) / (1000 * 60 * 60 * 24));
            
            let badgeDiff = '';
            if(recent.length > 1 && daysDiff > 0){
                const sign = kgDiff >= 0 ? '+' : '';
                const color = kgDiff >= 0 ? '#4caf50' : '#f44336';
                badgeDiff = `<div style="color:${color}; font-weight:bold; margin-top:8px; font-size:12px;">↑ ${sign}${kgDiff}kg em ${daysDiff} dias</div>`;
            }

            html += `<div class="card">
                <div class="exercise-name" style="margin-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:6px;">${esc(exName)}</div>
                
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${recent.map(r => {
                        const val = r[currentEvolutionMetric];
                        const pct = Math.max(10, Math.round((val / maxVal) * 100));
                        const label = currentEvolutionMetric==='kg'?`${r.kg}kg`:currentEvolutionMetric==='reps'?`${r.reps} reps`:`${r.volume.toLocaleString('pt-BR')}kg`;
                        
                        return `<div>
                            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:2px;">
                                <span style="font-weight:bold; color:var(--accent,#00d2ff);">${r.dateStr}</span>
                                <span><strong>${label}</strong> (${r.kg}kg × ${r.reps})</span>
                            </div>
                            <div style="width:100%; background:rgba(255,255,255,0.08); height:8px; border-radius:4px; overflow:hidden;">
                                <div style="width:${pct}%; background:linear-gradient(90deg, #00d2ff, #0072ff); height:100%;"></div>
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
}

// 3° RECURSO: TELA DE RECORDES PESSOAIS (PRs)
function recordsScreen(){
    stopTotalTimer();
    screen='records';
    
    const prMap = {};
    let lastPR = null;

    db.history.forEach(record => {
        const workoutData = DATA[record.workout];
        if(!workoutData) return;
        const dateStr = new Date(record.date).toLocaleDateString('pt-BR');

        workoutData.ex.forEach((exInfo, exIndex) => {
            const exName = exInfo[0];
            
            expandedGroups(exInfo[1]).forEach((row, setIndex) => {
                const setData = record.data.sets[`${record.workout}-${exIndex}-${setIndex}`] || {};
                const kg = parseFloat(setData.kg) || 0;
                const reps = parseInt(setData.reps) || 0;

                if(kg > 0) {
                    if(!prMap[exName] || kg > prMap[exName].kg) {
                        const item = { exName, kg, reps, dateStr, dateObj: new Date(record.date) };
                        prMap[exName] = item;
                        if(!lastPR || item.dateObj > lastPR.dateObj){
                            lastPR = item;
                        }
                    }
                }
            });
        });
    });

    let html = `<div class="app">${header('Recordes Pessoais (PRs)')}`;

    if(lastPR){
        html += `<div class="card" style="border: 1px solid #ffd700; background: rgba(255, 215, 0, 0.05); margin-bottom: 20px;">
            <div style="font-size:11px; color:#ffd700; text-transform:uppercase; font-weight:bold;">🏆 ÚLTIMO RECORDE BATIDO</div>
            <div style="font-size:16px; font-weight:bold; margin-top:4px;">${esc(lastPR.exName)}</div>
            <div style="font-size:22px; font-weight:bold; color:#ffd700; margin-top:2px;">${lastPR.kg} kg <span style="font-size:14px; color:#fff; font-weight:normal;">× ${lastPR.reps} reps</span></div>
            <div class="muted" style="margin-top:2px;">Conquistado em ${lastPR.dateStr}</div>
        </div>`;
    }

    const prList = Object.values(prMap).sort((a,b) => b.kg - a.kg);

    if(prList.length === 0){
        html += `<div class="empty">Nenhum recorde registrado. Treine duro e registre suas cargas!</div>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:10px;">`;
        prList.forEach(pr => {
            html += `<div class="card" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <div style="font-weight:bold; font-size:15px;">🏆 ${esc(pr.exName)}</div>
                    <div class="muted" style="font-size:12px;">Alcançado em ${pr.dateStr}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:18px; font-weight:bold; color:var(--accent,#00d2ff);">${pr.kg} kg</div>
                    <div style="font-size:12px; color:#aaa;">${pr.reps} reps</div>
                </div>
            </div>`;
        });
        html += `</div>`;
    }

    html += `</div>`;
    app.innerHTML = html;
}

// 4° RECURSO: COMPARATIVO SEMANAL E HISTÓRICO COMPLETO
function getWeeklyComparison(){
    const now = new Date();
    const startThisWeek = new Date(now.setDate(now.getDate() - now.getDay())).setHours(0,0,0,0);
    const startLastWeek = new Date(startThisWeek - 7*24*60*60*1000).getTime();

    let thisWeekVol = 0, lastWeekVol = 0;
    let thisWeekTime = 0, lastWeekTime = 0;
    let thisWeekCardio = 0, lastWeekCardio = 0;
    let thisWeekCount = 0, lastWeekCount = 0;

    db.history.forEach(r => {
        const t = new Date(r.date).getTime();
        const vol = r.totalVolume || 0;
        const dur = r.duration || 0;
        const cardio = parseFloat(r.data?.cardio?.time) || 0;

        if(t >= startThisWeek){
            thisWeekVol += vol;
            thisWeekTime += dur;
            thisWeekCardio += cardio;
            thisWeekCount++;
        } else if(t >= startLastWeek && t < startThisWeek){
            lastWeekVol += vol;
            lastWeekTime += dur;
            lastWeekCardio += cardio;
            lastWeekCount++;
        }
    });

    const volDiffPct = lastWeekVol > 0 ? (((thisWeekVol - lastWeekVol) / lastWeekVol) * 100).toFixed(1) : 0;

    return {
        thisWeekTon: (thisWeekVol / 1000).toFixed(1),
        lastWeekTon: (lastWeekVol / 1000).toFixed(1),
        volDiffPct,
        thisWeekTime: formatDuration(thisWeekTime),
        thisWeekCardio,
        thisWeekCount
    };
}

function historyScreen(){
    stopTotalTimer();
    screen='history';
    const weekly = getWeeklyComparison();

    let html = `<div class="app">${header('Histórico & Estatísticas')}
    
    <div class="card" style="background: rgba(0, 210, 255, 0.05); border: 1px solid rgba(0, 210, 255, 0.2); margin-bottom:20px;">
        <div style="font-weight:bold; font-size:14px; margin-bottom:8px; color:var(--accent,#00d2ff);">🎯 EVOLUÇÃO SEMANAL</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:13px;">
            <div><span class="muted">Semana passada:</span><br><strong>${weekly.lastWeekTon} toneladas</strong></div>
            <div><span class="muted">Esta semana:</span><br><strong>${weekly.thisWeekTon} toneladas</strong></div>
        </div>
        <div style="margin-top:8px; font-size:12px; font-weight:bold; color:${weekly.volDiffPct>=0?'#4caf50':'#f44336'};">
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
            return `<div class="history-item">
                <div class="row"><strong>${r.name}</strong><span class="pill">${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span></div>
                <div class="muted">Duração: ${formatDuration(r.duration)}${volStr}</div>
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
    let html=`<div class="app">${header('Registro do treino')}<div class="muted">${new Date(r.date).toLocaleString('pt-BR')} · duração ${formatDuration(r.duration)} · volume ${(r.totalVolume||0).toLocaleString('pt-BR')} kg</div>`;
    
    v.ex.forEach((ex,i)=>{
        html+=`<div class="card"><div class="exercise-name">${i+1}. ${esc(ex[0])}</div>`;
        expandedGroups(ex[1]).forEach((row,j)=>{
            const s=row.group,x=r.data.sets[`${r.workout}-${i}-${j}`]||{};
            html+=`<div class="set"><div class="settype">${esc(s[0])} · Série ${row.number}/${row.total}</div><div class="muted">Planejado: ${esc(s[2])} reps · ${esc(s[3])}</div><div style="margin-top:7px"><b>${x.kg||'—'} kg</b> · ${x.reps||'—'} reps ${x.done?'· ✓ concluída':''}</div>${x.obs?`<div class="muted">${esc(x.obs)}</div>`:''}</div>`;
        });
        html+=`</div>`;
    });
    
    const c=r.data.cardio||{};
    html+=`<div class="section-title">Cardio do dia</div><div class="card">${c.time||'—'} min · ${c.dist||'—'} km · ${c.bpm||'—'} BPM médio${c.obs?`<div class="muted">${esc(c.obs)}</div>`:''}</div><button class="secondary danger" style="margin-top:20px" onclick="deleteRecord('${r.id}')">Excluir este treino</button></div>`;
    app.innerHTML=html;
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
    <button class="secondary" onclick="exportData()">⬇️ Exportar histórico (Backup)</button>
    <button class="secondary" onclick="clearDrafts()">🧹 Limpar rascunhos não finalizados</button>
    <button class="secondary danger" onclick="wipeHistory()">Apagar histórico</button></div>`;
}

function updateUserName(){
    const input = document.getElementById('userNameInput').value.trim();
    if(input){
        db.user.name = input;
        save();
        toast('Nome atualizado!');
    }
}

function clearDrafts(){if(confirm('Apagar todos os treinos que estão apenas como rascunho?')){db.drafts={};save();toast('Rascunhos apagados')}}
function wipeHistory(){if(confirm('Apagar todo o histórico?')){db.history=[];save();historyScreen()}}
function exportData(){const b=new Blob([JSON.stringify(db,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='solo-leveling-historico.json';a.click();URL.revokeObjectURL(u)}

function pdfScreen(){
    app.innerHTML=`<div class="app">${header('Planilha / PDF')}
    <div class="pdfbox"><p><b>Planilha original</b></p><p class="muted">A planilha original usada para configurar A–E está incluída no app.</p><a class="secondary" style="display:block;text-align:center;text-decoration:none" href="planilha-original.pdf" target="_blank">Abrir planilha original</a></div>
    <div class="section-title">Consultar outro PDF</div>
    <div class="card"><input type="file" accept="application/pdf" id="pdfInput"><p class="muted">O PDF selecionado fica apenas no aparelho para consulta.</p></div></div>`;
    document.getElementById('pdfInput').onchange=e=>{const f=e.target.files[0];if(f){const u=URL.createObjectURL(f);window.open(u,'_blank')}}
}

function goHome(){stopTotalTimer();clearInterval(timerId);stopAllRestTimers();home()}

home();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js?v=9');
