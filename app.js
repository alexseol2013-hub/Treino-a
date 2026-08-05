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

const KEY='solo_leveling_v8'; // Atualizado para Solo Leveling + versão 8 para limpar cache
let db=JSON.parse(localStorage.getItem(KEY)||'null')||{history:[],drafts:{}};
let screen='home',current=null,timerId=null,totalTimerId=null;
let restDeadline=0, restTotal=0, restStartedAt=0;
const app=document.getElementById('app');

const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function toast(t){const x=document.createElement('div');x.className='toast';x.textContent=t;document.body.appendChild(x);setTimeout(()=>x.remove(),1800)}
function header(title,homeBack=true){return `<div class="top"><div class="brand">SOLO LEVELING</div><button class="iconbtn" onclick="${homeBack?'goHome()':'settingsScreen()'}">${homeBack?'‹':'⚙'}</button></div><h1 class="screen-title">${title}</h1>`}

function home(){
    stopTotalTimer();
    screen='home';
    app.innerHTML=`<div class="app">${header('Escolha seu treino',false)}
    <p class="muted">Segunda A · Terça B · Quarta C · Quinta descanso · Sexta D · Sábado E · Domingo descanso.</p>
    <div class="grid" style="margin-top:15px">${Object.entries(DATA).map(([k,v])=>`<button class="day" onclick="openWorkout('${k}')"><strong>${v.name}</strong><span>${v.desc}</span><small>${v.ex.length} exercícios</small></button>`).join('')}</div>
    <div class="section-title">Dados e Evolução</div>
    <button class="secondary" onclick="evolutionScreen()">⚔️ Evolução de Cargas</button>
    <button class="secondary" onclick="historyScreen()">📈 Histórico Completo</button>
    <button class="secondary" onclick="settingsScreen()">⚙️ Configurações</button>
    <button class="secondary" onclick="pdfScreen()">📄 Planilha / PDF</button>
    </div>`;
}

function draft(){db.drafts[current]??={sets:{},exDone:{},cardio:{},startedAt:null};return db.drafts[current]}
function openWorkout(k){current=k;screen='workout';draft();save();renderWorkout()}
function parseQty(q){const m=String(q).match(/(\d+)\s*[–-]\s*(\d+)/);if(m)return Number(m[2]);const n=String(q).match(/\d+/);return n?Number(n[0]):1}
function expandedGroups(groups){let out=[];groups.forEach((g,gi)=>{const qty=parseQty(g[1]);for(let n=1;n<=qty;n++)out.push({group:g,groupIndex:gi,number:n,total:qty});});return out}
function makeKey(exi,si){return `${current}-${exi}-${si}`}

function renderWorkout(){
    stopTotalTimer();
    const v=DATA[current],d=draft();
    const started=!!d.startedAt;
    app.innerHTML=`<div class="app">${header(v.name)}
    <div class="muted">${v.desc} · ${v.mob}</div>
    <div class="start-panel">
        <div><strong>${started?'Treino em andamento':'Treino não iniciado'}</strong>
        <div class="muted">${started?'O tempo está contando.':'Quando estiver pronto, toque em iniciar treino.'}</div></div>
        <button class="primary start-workout" onclick="startWorkout()" ${started?'disabled':''}>${started?'✓ Iniciado':'▶ Iniciar treino'}</button>
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
        html+=`<div class="set"><div class="sethead"><div class="settype">${esc(type)} · Série ${r.number}/${r.total}</div><div class="meta">${esc(reps)} reps · ${esc(rest)}</div></div>
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
    const record={id:uid(),date:new Date().toISOString(),workout:current,name:v.name,duration:Math.floor((Date.now()-d.startedAt)/1000),restDuration:d.restTotal,data:JSON.parse(JSON.stringify(d))};
    db.history.push(record);
    delete db.drafts[current];
    save();
    stopTotalTimer();
    clearInterval(timerId);
    stopAllRestTimers();
    toast('Treino salvo no histórico');
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
        try{new Notification('Solo Leveling',{body:'⏱️ Tempo de descanso finalizado! Hora da próxima série.',icon:'icon.svg',tag:'solo-rest'})}catch(e){}
    }
    alert('⏱️ Descanso terminado! Volte ao treino.');
}

function updateGlobalRestUI(){
    const el=document.getElementById('globalRestClock');
    if(!el)return;
    let left=restDeadline?Math.max(0,Math.ceil((restDeadline-Date.now())/1000)):restTotal;
    el.textContent=fmt(left);
}

// TIMER DE DESCANSO INTELIGENTE (BASEADO EM HORÁRIO ABSOLUTO / SEGUNDO PLANO)
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

// 2° RECURSO: TELA DE EVOLUÇÃO DE CARGAS COMPLETA
function evolutionScreen(){
    stopTotalTimer();
    screen='evolution';
    
    // Mapeia todos os exercícios registrados no histórico por nome
    const historyExMap = {};
    
    db.history.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).forEach(record => {
        const workoutData = DATA[record.workout];
        if(!workoutData) return;
        const dateStr = new Date(record.date).toLocaleDateString('pt-BR', {day:'2-digit', month:'2-digit'});
        const fullDate = new Date(record.date);

        workoutData.ex.forEach((exInfo, exIndex) => {
            const exName = exInfo[0];
            historyExMap[exName] = historyExMap[exName] || [];
            
            // Busca a maior carga do exercício nesse treino específico
            let maxKg = 0;
            let maxReps = 0;
            
            expandedGroups(exInfo[1]).forEach((row, setIndex) => {
                const setData = record.data.sets[`${record.workout}-${exIndex}-${setIndex}`] || {};
                const kg = parseFloat(setData.kg) || 0;
                const reps = parseInt(setData.reps) || 0;
                if(kg > maxKg || (kg === maxKg && reps > maxReps)) {
                    maxKg = kg;
                    maxReps = reps;
                }
            });

            if(maxKg > 0) {
                historyExMap[exName].push({ dateStr, fullDate, kg: maxKg, reps: maxReps });
            }
        });
    });

    let html = `<div class="app">${header('Evolução de Cargas')}`;
    const exNames = Object.keys(historyExMap);

    if(exNames.length === 0){
        html += `<div class="empty">Nenhum histórico de cargas registrado ainda. Conclua seus treinos para ver a evolução aqui!</div>`;
    } else {
        exNames.forEach(exName => {
            const records = historyExMap[exName];
            if(records.length === 0) return;
            
            // Pega até os últimos 5 registros em ordem decrescente de data
            const recent = records.slice().reverse().slice(0, 5);
            
            // Cálculo de progresso entre a última entrada e a primeira gravada
            const latest = recent[0];
            const oldest = recent[recent.length - 1];
            const kgDiff = latest.kg - oldest.kg;
            const daysDiff = Math.round((latest.fullDate - oldest.fullDate) / (1000 * 60 * 60 * 24));
            
            let badgeDiff = '';
            if(recent.length > 1 && daysDiff > 0){
                const sign = kgDiff >= 0 ? '+' : '';
                const color = kgDiff >= 0 ? '#4caf50' : '#f44336';
                badgeDiff = `<div style="color:${color}; font-weight:bold; margin-top:8px; font-size:13px;">↑ ${sign}${kgDiff}kg em ${daysDiff} dias</div>`;
            }

            html += `<div class="card">
                <div class="exercise-name" style="margin-bottom:10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:5px;">${esc(exName)}</div>
                <div style="display:flex; flex-direction:column; gap:6px;">
                    ${recent.map(r => `<div style="display:flex; justify-between; font-size:14px; opacity:0.9;">
                        <span style="width:70px; font-weight:bold; color:var(--accent,#00d2ff);">${r.dateStr}</span>
                        <span><strong>${r.kg}kg</strong> × ${r.reps} reps</span>
                    </div>`).join('')}
                </div>
                ${badgeDiff}
            </div>`;
        });
    }

    html += `</div>`;
    app.innerHTML = html;
}

function historyScreen(){
    stopTotalTimer();
    screen='history';
    app.innerHTML=`<div class="app">${header('Histórico Completo')}${db.history.length?db.history.slice().reverse().map(r=>{const d=new Date(r.date);return `<div class="history-item"><div class="row"><strong>${r.name}</strong><span class="pill">${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span></div><div class="muted">Duração: ${formatDuration(r.duration)} · Descanso: ${formatDuration(r.restDuration||r.data?.restTotal||0)}</div><button class="secondary" onclick="viewRecord('${r.id}')">Ver treino completo</button></div>`}).join(''):'<div class="empty">Ainda não há treinos finalizados.</div>'}</div>`;
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
    let html=`<div class="app">${header('Registro do treino')}<div class="muted">${new Date(r.date).toLocaleString('pt-BR')} · duração ${formatDuration(r.duration)} · descanso ${formatDuration(r.restDuration||r.data?.restTotal||0)}</div>`;
    
    v.ex.forEach((ex,i)=>{
        html+=`<div class="card"><div class="exercise-name">${i+1}. ${esc(ex[0])}</div>`;
        expandedGroups(ex[1]).forEach((row,j)=>{
            const s=row.group,x=r.data.sets[`${r.workout}-${i}-${j}`]||{};
            html+=`<div class="set"><div class="settype">${esc(s[0])} · Série ${row.number}/${row.total}</div><div class="muted">Planejado: ${esc(s[2])} reps · ${esc(s[3])}</div><div style="margin-top:7px"><b>${x.kg||'—'} kg</b> · ${x.reps||'—'} reps ${x.done?'· ✓ concluída':''}</div>${x.obs?`<div class="muted">${esc(x.obs)}</div>`:''}</div>`;
        });
        const prev=db.history.filter(h=>h.id!==r.id&&h.workout===r.workout).sort((a,b)=>new Date(b.date)-new Date(a.date))[0];
        if(prev){
            html+=`<div class="evolution"><b>Comparação com treino anterior</b>`;
            expandedGroups(ex[1]).forEach((row,j)=>{
                const cur=r.data.sets[`${r.workout}-${i}-${j}`]||{},old=prev.data.sets[`${r.workout}-${i}-${j}`]||{};
                if(cur.kg||cur.reps||old.kg||old.reps)html+=`<div>Série ${row.number}: <strong>${cur.kg||'—'} kg × ${cur.reps||'—'}</strong> <span>vs. ${old.kg||'—'} kg × ${old.reps||'—'}</span></div>`;
            });
            html+=`</div>`;
        }
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
    <p class="muted">Nesta versão do Solo Leveling, a rotina de exercícios vêm ajustada diretamente do seu plano. Para evitar modificações acidentais, edições manuais no treino permanecem bloqueadas.</p>
    <button class="secondary" onclick="exportData()">⬇️ Exportar histórico</button>
    <button class="secondary" onclick="clearDrafts()">🧹 Limpar rascunhos não finalizados</button>
    <button class="secondary danger" onclick="wipeHistory()">Apagar histórico</button></div>`;
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
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js?v=8');
