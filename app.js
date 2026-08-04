const KEY="treinoA_pwa_v1";
const exercises=[
{id:"ex1",name:"1. Supino Inclinado c/ Halteres ou Máquina"},
{id:"ex2",name:"2. Desenvolvimento c/ Halteres"}
];
const sets=[
["warm","AQUECIMENTO","1-2x 10 a 15 reps · Intervalo 1 min",false],
["adjust","AJUSTE","1-2x 4 a 6 reps · Intervalo 1-2 min",false],
["1","SÉRIE TRABALHO 1","6 a 10 reps · Intervalo 2-3 min",true],
["2","SÉRIE TRABALHO 2","6 a 10 reps · Intervalo 2-3 min",true],
["3","SÉRIE TRABALHO 3","6 a 10 reps · Intervalo 2-3 min",true]
];
let state=JSON.parse(localStorage.getItem(KEY)||'{"done":{},"exDone":{},"values":{}}');
let remaining=0, interval=null;
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
function render(){
 const root=document.getElementById("workout"); root.innerHTML="";
 exercises.forEach(ex=>{
  const card=document.createElement("section");card.className="card";
  const completed=!!state.exDone[ex.id];
  card.innerHTML=`<div class="head"><div class="name">${ex.name}</div><span class="badge ${completed?"done":""}">${completed?"Concluído":"Pendente"}</span></div>`;
  sets.forEach(s=>{
   const key=ex.id+"_"+s[0], done=!!state.done[key];
   const box=document.createElement("div");box.className="set";
   box.innerHTML=`<div class="sethead"><b>${s[1]}</b><span>${s[2]}</span></div>`;
   if(s[3]){
    const vals=state.values[key]||{reps:"0",kg:"0"};
    const inputs=document.createElement("div");inputs.className="inputs";
    inputs.innerHTML=`<label>REPS FEITAS<input inputmode="numeric" type="number" min="0" value="${vals.reps}"></label><label>CARGA (KG)<input inputmode="decimal" type="number" min="0" step="0.5" value="${vals.kg}"></label>`;
    inputs.querySelectorAll("input")[0].oninput=e=>{state.values[key]??={};state.values[key].reps=e.target.value;save()};
    inputs.querySelectorAll("input")[1].oninput=e=>{state.values[key]??={};state.values[key].kg=e.target.value;save()};
    box.appendChild(inputs);
   }
   const btn=document.createElement("button");btn.className="btn "+(done?"done":"");btn.textContent=done?"✓ Série Concluída":"□ Marcar Série Concluída";
   btn.onclick=()=>{state.done[key]=!state.done[key];save();render()};box.appendChild(btn);card.appendChild(box);
  });
  const finish=document.createElement("button");finish.className="btn finish";finish.textContent=completed?"✓ Exercício Concluído":"✓ Marcar Exercício como Concluído";
  finish.onclick=()=>{state.exDone[ex.id]=!state.exDone[ex.id];save();render()};card.appendChild(finish);root.appendChild(card);
 });
}
function display(){let m=Math.floor(remaining/60).toString().padStart(2,"0"),s=(remaining%60).toString().padStart(2,"0");clock.textContent=`${m}:${s}`}
document.querySelectorAll("[data-sec]").forEach(b=>b.onclick=()=>{clearInterval(interval);remaining=+b.dataset.sec;display()});
start.onclick=()=>{clearInterval(interval);if(remaining<=0)remaining=60;display();interval=setInterval(()=>{remaining--;display();if(remaining<=0)clearInterval(interval)},1000)};
reset.onclick=()=>{if(confirm("Limpar cargas, repetições e séries concluídas?")){state={done:{},exDone:{},values:{}};save();render()}};
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
render();