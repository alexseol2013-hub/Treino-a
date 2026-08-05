let db = JSON.parse(localStorage.getItem('gym_db') || '{"history":[]}');
let draftData = {};

const DATA = {
    A: { name: "Treino A - Peito e Tríceps", ex: [["Supino Reto", [3, 10]], ["Tríceps Corda", [3, 12]]] },
    B: { name: "Treino B - Costas e Biceps", ex: [["Puxada Frontal", [3, 10]], ["Rosca Direta", [3, 12]]] }
};
let current = "A";

function draft() { return draftData; }
function makeKey(i, j) { return `${i}_${j}`; }
function expandedGroups(arr) { return Array(arr[0]).fill(arr[1]); }
function save() { localStorage.setItem('gym_db', JSON.stringify(db)); }
function toast(msg) { alert(msg); }
function renderWorkout() { console.log("Renderizado"); }
function esc(str) { return str; }

function toggleSet(i,j){
    const d=draft(),k=makeKey(i,j);
    d.sets[k]??={};
    d.sets[k].done=!d.sets[k].done;
    
    // Verifica se todas as séries deste exercício já foram concluídas
    const ex = DATA[current].ex[i];
    const rows = expandedGroups(ex[1]);
    const allDone = rows.every((r, si) => d.sets[makeKey(i, si)]?.done);
    
    if (allDone) {
        d.exDone[i] = true; // Marca o exercício inteiro como feito para que ele suma
    }
    
    save();
    renderWorkout();
    toast(d.sets[k].done ? (allDone ? 'Exercício concluído' : 'Série salva') : 'Série desmarcada');
}

function wipeHistory(){
    if(confirm('Tem certeza que deseja apagar TODO o histórico?')){
        db.history = [];
        save();
        toast('Histórico apagado');
    }
}

function deleteRecord(id){
    if(confirm('Tem certeza que deseja excluir este treino específico do histórico?')){
        db.history = db.history.filter(x => x.id !== id);
        save();
        toast('Treino excluído do histórico');
        historyScreen(); // Volta para a tela de histórico
    }
}

function historyScreen(){
    console.log("Tela de histórico");
}

function viewRecord(id){
    const r = db.history.find(x => x.id === id);
    if(!r) return;
    let html = "";
    const c=r.data.cardio||{};
    html+=`<div class="section-title">Cardio do dia</div><div class="card">${c.time||'—'} min · ${c.dist||'—'} km · ${c.bpm||'—'} BPM médio${c.obs?`<div class="muted">${esc(c.obs)}</div>`:''}</div>`;
    // Novo botão de exclusão adicionado abaixo:
    html+=`<button class="secondary danger" style="margin-top:20px" onclick="deleteRecord('${r.id}')">Excluir este treino</button></div>`;
    document.getElementById('app').innerHTML=html;
}
