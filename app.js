/* Stylla — seu stylist pessoal. App estático, tudo local (localStorage). */

const STYLE_TYPES = {
  romantico:  {nome:"Romântico",  desc:"Feminilidade e delicadeza: fluidez, laços, estampas florais e tons suaves."},
  natural:    {nome:"Natural",    desc:"Conforto com autenticidade: tecidos leves, modelagens soltas e zero complicação."},
  classico:   {nome:"Clássico",   desc:"Elegância atemporal: alfaiataria, linhas limpas e cores neutras."},
  criativo:   {nome:"Criativo",   desc:"Mistura ousada: cores, texturas e peças statement que contam uma história."},
  dramatico:  {nome:"Dramático",  desc:"Presença forte: estrutura, contraste alto e silhuetas marcantes."},
  esportivo:  {nome:"Esportivo",  desc:"Praticidade em movimento: athleisure, básicos de qualidade e camadas funcionais."},
  elegante:   {nome:"Elegante",   desc:"Sofisticação discreta: caimento impecável, tecidos nobres e poucos acessórios certeiros."}
};

const BODY_TYPES = {
  triangulo:        {nome:"Triângulo (pera)", dica:"Valorize a parte de cima: ombros estruturados, decotes abertos e cores claras em cima; linhas retas e tons escuros embaixo."},
  triinvertido:     {nome:"Triângulo invertido", dica:"Equilibre os ombros com volume embaixo: saias evasê, calças wide-leg e detalhes na barra."},
  retangulo:        {nome:"Retângulo",        dica:"Crie curvas: cintura marcada, peplum, cintos e camadas que desenham o corpo."},
  ampulheta:        {nome:"Ampulheta",        dica:"Cintura é o ponto alto: peças acinturadas, wrap dresses e cintos finos."},
  oval:             {nome:"Oval",             dica:"Alongue a silhueta: decotes em V, linhas verticais e tecidos com caimento fluido."}
};

const SEASONS = {
  primavera: {nome:"Primavera Quente", cores:["#F6C177","#E8843C","#D96C4F","#A8C686","#F9E7CE","#7FB5A3","#E9A6B0","#C98F2D","#FFDAC1","#8A9A5B","#F2B880","#D4A373"]},
  verao:     {nome:"Verão Frio",       cores:["#C9D7E8","#9FB4D8","#B8A9C9","#E8D5DC","#7C8FA6","#D8B4C4","#A3B8CC","#C9A2B5","#E4E0EA","#8FA3BF","#D3C6D8","#96ACB7"]},
  outono:    {nome:"Outono Quente",    cores:["#8C5E3C","#B5773B","#6B7B4C","#C96F4A","#A44A3F","#D9A441","#7A4E2D","#9C8B56","#5F6F52","#C08552","#8E6C88","#B5A642"]},
  inverno:   {nome:"Inverno Frio",     cores:["#0D1B2A","#FFFFFF","#C1121F","#1B3B6F","#7B2CBF","#E0E1DD","#4A4E69","#9A031E","#22223B","#5BC0EB","#D90429","#8D99AE"]}
};

const PRODUCTS = [
 {id:1, nome:"Vestido midi floral fluido", loja:"Loja Aurora", preco:189.9, cat:"Vestidos", emo:"👗", bg:"#FCE3EC", estilos:["romantico"], estacoes:["primavera","verao"], corpos:["ampulheta","retangulo","triangulo"]},
 {id:2, nome:"Vestido envelope acinturado", loja:"Moda Bella", preco:219.9, cat:"Vestidos", emo:"👗", bg:"#F9E7CE", estilos:["romantico","elegante"], estacoes:["outono","primavera"], corpos:["ampulheta","retangulo","oval"]},
 {id:3, nome:"Vestido reto minimal", loja:"Atelier Norte", preco:249.9, cat:"Vestidos", emo:"👗", bg:"#E4E0EA", estilos:["classico","elegante"], estacoes:["inverno","verao"], corpos:["retangulo","triinvertido"]},
 {id:4, nome:"Blusa de laço gola alta", loja:"Loja Aurora", preco:99.9, cat:"Tops", emo:"🎀", bg:"#FCE3EC", estilos:["romantico"], estacoes:["primavera","verao"], corpos:["triangulo","ampulheta","retangulo"]},
 {id:5, nome:"Camisa branca oversized", loja:"Essencial&Co", preco:129.9, cat:"Tops", emo:"👔", bg:"#F1F1F1", estilos:["natural","classico"], estacoes:["primavera","verao","outono","inverno"], corpos:["triangulo","retangulo","oval","ampulheta","triinvertido"]},
 {id:6, nome:"Camiseta básica algodão pima", loja:"Essencial&Co", preco:59.9, cat:"Tops", emo:"👕", bg:"#E8F0E8", estilos:["natural","esportivo"], estacoes:["primavera","verao","outono","inverno"], corpos:["triangulo","retangulo","oval","ampulheta","triinvertido"]},
 {id:7, nome:"Top cropped estruturado", loja:"Voga Urbana", preco:79.9, cat:"Tops", emo:"✨", bg:"#F3E8FD", estilos:["criativo","dramatico"], estacoes:["inverno","verao"], corpos:["retangulo","ampulheta","triinvertido"]},
 {id:8, nome:"Calça wide-leg cintura alta", loja:"Moda Bella", preco:179.9, cat:"Calças", emo:"👖", bg:"#DCE9F5", estilos:["elegante","classico"], estacoes:["outono","inverno"], corpos:["triinvertido","retangulo","oval"]},
 {id:9, nome:"Calça mom jeans lavagem clara", loja:"Denim House", preco:159.9, cat:"Calças", emo:"👖", bg:"#DCE9F5", estilos:["natural","esportivo"], estacoes:["primavera","verao","outono"], corpos:["ampulheta","retangulo","triangulo"]},
 {id:10, nome:"Calça de alfaiataria reta", loja:"Atelier Norte", preco:199.9, cat:"Calças", emo:"👖", bg:"#EFEFEF", estilos:["classico","elegante"], estacoes:["inverno","outono"], corpos:["triangulo","oval","retangulo"]},
 {id:11, nome:"Legging canelada premium", loja:"Move Fit", preco:89.9, cat:"Calças", emo:"🩱", bg:"#E8F0E8", estilos:["esportivo","natural"], estacoes:["primavera","verao","outono","inverno"], corpos:["ampulheta","retangulo"]},
 {id:12, nome:"Saia evasê midi", loja:"Loja Aurora", preco:139.9, cat:"Saias", emo:"🌸", bg:"#FCE3EC", estilos:["romantico"], estacoes:["primavera","verao"], corpos:["triinvertido","retangulo","ampulheta"]},
 {id:13, nome:"Saia lápis cintura alta", loja:"Atelier Norte", preco:149.9, cat:"Saias", emo:"📏", bg:"#F1F1F1", estilos:["classico","elegante"], estacoes:["outono","inverno"], corpos:["ampulheta","retangulo"]},
 {id:14, nome:"Saia plissada metalizada", loja:"Voga Urbana", preco:169.9, cat:"Saias", emo:"✨", bg:"#F3E8FD", estilos:["criativo","dramatico"], estacoes:["inverno","verao"], corpos:["triinvertido","retangulo"]},
 {id:15, nome:"Blazer oversized estruturado", loja:"Atelier Norte", preco:289.9, cat:"Casacos", emo:"🧥", bg:"#EFEFEF", estilos:["dramatico","classico","elegante"], estacoes:["outono","inverno"], corpos:["triangulo","retangulo","oval"]},
 {id:16, nome:"Jaqueta jeans trucker", loja:"Denim House", preco:219.9, cat:"Casacos", emo:"🧥", bg:"#DCE9F5", estilos:["natural","esportivo","criativo"], estacoes:["outono","primavera"], corpos:["triangulo","retangulo","ampulheta","triinvertido","oval"]},
 {id:17, nome:"Cardigã longo de tricô", loja:"Aconchego Tricots", preco:169.9, cat:"Casacos", emo:"🧶", bg:"#F9E7CE", estilos:["natural","romantico"], estacoes:["outono","inverno"], corpos:["oval","retangulo","triinvertido"]},
 {id:18, nome:"Trench coat clássico", loja:"Atelier Norte", preco:349.9, cat:"Casacos", emo:"🧥", bg:"#EDE6DA", estilos:["classico","elegante"], estacoes:["outono","inverno"], corpos:["ampulheta","retangulo","triangulo"]},
 {id:19, nome:"Tênis chunky retrô", loja:"Move Fit", preco:299.9, cat:"Calçados", emo:"👟", bg:"#E8F0E8", estilos:["esportivo","criativo"], estacoes:["primavera","verao","outono","inverno"], corpos:["retangulo","triinvertido"]},
 {id:20, nome:"Scarpin bico fino nude", loja:"Passos Finos", preco:259.9, cat:"Calçados", emo:"👠", bg:"#F9E7CE", estilos:["elegante","classico","romantico"], estacoes:["primavera","verao","outono","inverno"], corpos:["triangulo","oval","retangulo","ampulheta","triinvertido"]},
 {id:21, nome:"Sandália de tiras delicada", loja:"Passos Finos", preco:159.9, cat:"Calçados", emo:"👡", bg:"#FCE3EC", estilos:["romantico","natural"], estacoes:["primavera","verao"], corpos:["triangulo","ampulheta","retangulo","triinvertido","oval"]},
 {id:22, nome:"Bota cano curto salto bloco", loja:"Passos Finos", preco:279.9, cat:"Calçados", emo:"👢", bg:"#EFEFEF", estilos:["dramatico","classico","criativo"], estacoes:["outono","inverno"], corpos:["retangulo","triinvertido","ampulheta"]},
 {id:23, nome:"Bolsa tiracolo pequena", loja:"Moda Bella", preco:189.9, cat:"Bolsas", emo:"👜", bg:"#FCE3EC", estilos:["romantico","elegante"], estacoes:["primavera","verao","outono","inverno"], corpos:["triangulo","ampulheta","retangulo","triinvertido","oval"]},
 {id:24, nome:"Bolsa tote estruturada", loja:"Atelier Norte", preco:229.9, cat:"Bolsas", emo:"👜", bg:"#F1F1F1", estilos:["classico","natural","elegante"], estacoes:["primavera","verao","outono","inverno"], corpos:["triangulo","ampulheta","retangulo","triinvertido","oval"]},
 {id:25, nome:"Brincos de argola dourados", loja:"Brilho&Arte", preco:49.9, cat:"Acessórios", emo:"💫", bg:"#FFF3D6", estilos:["romantico","criativo","dramatico"], estacoes:["primavera","outono"], corpos:["triangulo","ampulheta","retangulo","triinvertido","oval"]},
 {id:26, nome:"Colar delicado ponto de luz", loja:"Brilho&Arte", preco:69.9, cat:"Acessórios", emo:"📿", bg:"#FFF3D6", estilos:["romantico","elegante","classico"], estacoes:["verao","inverno"], corpos:["triangulo","ampulheta","retangulo","triinvertido","oval"]},
 {id:27, nome:"Cinto fino de couro", loja:"Essencial&Co", preco:79.9, cat:"Acessórios", emo:"🪢", bg:"#EDE6DA", estilos:["classico","elegante","romantico"], estacoes:["primavera","verao","outono","inverno"], corpos:["retangulo","ampulheta","oval"]},
 {id:28, nome:"Lenço estampado de cetim", loja:"Voga Urbana", preco:59.9, cat:"Acessórios", emo:"🧣", bg:"#F3E8FD", estilos:["criativo","elegante"], estacoes:["outono","primavera"], corpos:["triangulo","ampulheta","retangulo","triinvertido","oval"]},
 {id:29, nome:"Vestido tubinho preto", loja:"Atelier Norte", preco:199.9, cat:"Vestidos", emo:"🖤", bg:"#ECECEC", estilos:["dramatico","classico","elegante"], estacoes:["inverno"], corpos:["ampulheta","retangulo","triangulo"]},
 {id:30, nome:"Moletom capuz oversize", loja:"Move Fit", preco:149.9, cat:"Casacos", emo:"🧢", bg:"#E8F0E8", estilos:["esportivo","natural"], estacoes:["outono","inverno"], corpos:["retangulo","oval","triinvertido"]},
 {id:31, nome:"Saia jeans com fenda", loja:"Denim House", preco:119.9, cat:"Saias", emo:"👖", bg:"#DCE9F5", estilos:["natural","criativo","esportivo"], estacoes:["primavera","verao","outono"], corpos:["ampulheta","retangulo","triinvertido"]},
 {id:32, nome:"Body gola V manga longa", loja:"Moda Bella", preco:89.9, cat:"Tops", emo:"🩱", bg:"#FCE3EC", estilos:["elegante","dramatico"], estacoes:["outono","inverno"], corpos:["oval","ampulheta","retangulo"]}
];

const LOOKS = [
 {nome:"Domingo no parque", emo:"🌷", bg:"#FCE3EC", itens:["Vestido midi floral","Sandália de tiras","Bolsa tiracolo"], estilos:["romantico"]},
 {nome:"Trabalho impecável", emo:"💼", bg:"#EFEFEF", itens:["Calça de alfaiataria","Camisa branca","Blazer estruturado"], estilos:["classico","elegante"]},
 {nome:"Rolê com as amigas", emo:"✨", bg:"#F3E8FD", itens:["Top cropped","Saia plissada","Tênis chunky"], estilos:["criativo","dramatico"]},
 {nome:"Conforto chique", emo:"🧶", bg:"#F9E7CE", itens:["Calça mom jeans","Camiseta pima","Cardigã longo"], estilos:["natural"]},
 {nome:"Noite de impacto", emo:"🖤", bg:"#ECECEC", itens:["Vestido tubinho","Scarpin","Brincos statement"], estilos:["dramatico","elegante"]},
 {nome:"Dia ativo", emo:"👟", bg:"#E8F0E8", itens:["Legging canelada","Moletom oversize","Tênis chunky"], estilos:["esportivo"]}
];

const TIPS = [
 "A regra de ouro: repita uma cor da parte de cima no calçado ou na bolsa. O look fecha sozinho.",
 "Tecido certo vale mais que marca: caído e com caimento fluido sempre parece mais caro.",
 "Terça parte: se uma peça não conversa com outras 3 do seu closet, ela não entra.",
 "Ajuste de costureira de R$ 30 transforma uma calça de R$ 100 em peça de R$ 400.",
 "Sua paleta pessoal ilumina o rosto: perto do rosto, só cores da sua estação."
];

/* ---------- state ---------- */
let S = loadState();
function loadState(){ try{ return JSON.parse(localStorage.getItem('stylla')||'{}'); }catch(e){ return {}; } }
function save(){ localStorage.setItem('stylla', JSON.stringify(S)); }

/* ---------- onboarding ---------- */
const OB = [
 {type:'selfie'},
 {key:'expressao', kicker:'Passo 2', title:'Com que estilo de roupa você se veste?', sub:'Escolha a vibe que mais combina com seu guarda-roupa.', opts:[
   {v:'fem', e:'👗', t:'Feminino', s:'Vestidos, saias e delicadeza'},
   {v:'masc', e:'👔', t:'Masculino', s:'Camisas, calças e estrutura'},
   {v:'neutro', e:'🧢', t:'Sem regras', s:'O que eu me sentir bem'}]},
 {key:'vibe', kicker:'Passo 3', title:'Sua vibe principal', sub:'Num dia perfeito, seu look diz o quê?', multi:true, max:2, opts:[
   {v:'romantico', e:'🌸', t:'Delicada e romântica'},
   {v:'natural', e:'🌿', t:'Leve e sem esforço'},
   {v:'classico', e:'🕴️', t:'Arrumada e atemporal'},
   {v:'criativo', e:'🎨', t:'Única e criativa'},
   {v:'dramatico', e:'🔥', t:'Forte e marcante'},
   {v:'esportivo', e:'⚡', t:'Prática e confortável'},
   {v:'elegante', e:'💎', t:'Sofisticada e discreta'}]},
 {key:'ombros', kicker:'Passo 4', title:'Seus ombros comparados ao quadril', sub:'Olhe de frente para o espelho e compare.', opts:[
   {v:'mais_estreitos', e:'📐', t:'Ombros mais estreitos que o quadril'},
   {v:'equilibrados', e:'⏳', t:'Ombros e quadril alinhados'},
   {v:'mais_largos', e:'🔺', t:'Ombros mais largos que o quadril'}]},
 {key:'cintura', kicker:'Passo 5', title:'Sua cintura', sub:'Como ela aparece naturalmente?', opts:[
   {v:'marcada', e:'⌛', t:'Bem marcada'},
   {v:'leve', e:'📏', t:'Levemente marcada'},
   {v:'pouco', e:'⬜', t:'Pouco definida'}]},
 {key:'quadril', kicker:'Passo 6', title:'Seu quadril', sub:'Em relação ao resto do corpo?', opts:[
   {v:'largo', e:'🍐', t:'Mais largo e com curvas'},
   {v:'alinhado', e:'📐', t:'Alinhado com o tronco'},
   {v:'estreito', e:'📏', t:'Mais estreito e reto'}]},
 {key:'joias', kicker:'Passo 7', title:'Dourado ou prateado?', sub:'Qual metal ilumina mais sua pele?', opts:[
   {v:'dourado', e:'🥇', t:'Dourado', s:'Sua pele tem fundo quente'},
   {v:'prateado', e:'🥈', t:'Prateado', s:'Sua pele tem fundo frio'},
   {v:'ambos', e:'✨', t:'Os dois funcionam'}]},
 {key:'contraste', kicker:'Passo 8', title:'Seu contraste natural', sub:'Diferença entre cor do cabelo e da pele.', opts:[
   {v:'alto', e:'⚡', t:'Alto', s:'Cabelo escuro e pele clara, por exemplo'},
   {v:'medio', e:'🌗', t:'Médio', s:'Uma diferença moderada'},
   {v:'baixo', e:'🌤️', t:'Baixo', s:'Tudo num tom próximo'}]},
 {key:'prioridade', kicker:'Passo 9', title:'O que não pode faltar?', sub:'Última pergunta: sua prioridade número 1.', opts:[
   {v:'conforto', e:'🛋️', t:'Conforto', s:'Se aperta, não sai de casa'},
   {v:'elegancia', e:'👑', t:'Elegância', s:'Sempre passar a impressão certa'},
   {v:'originalidade', e:'🦄', t:'Originalidade', s:'Nunca parecer igual a todo mundo'},
   {v:'praticidade', e:'⏱️', t:'Praticidade', s:'Pronto em 5 minutos'}]}
];
let obStep = 0, obAns = {};

function show(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); window.scrollTo(0,0); }
function startOnboarding(){ obStep=0; obAns={}; show('screen-onboarding'); renderOb(); }
function obBack(){ if(obStep===0){ show('screen-splash'); return; } obStep--; renderOb(); }

function renderOb(){
  const st = OB[obStep];
  document.getElementById('ob-bar').style.width = ((obStep+1)/OB.length*100)+'%';
  document.getElementById('ob-count').textContent = (obStep+1)+'/'+OB.length;
  const body = document.getElementById('ob-body');
  if(st.type==='selfie'){ renderSelfie(body); return; }
  let html = `<div class="ob-kicker">${st.kicker} de ${OB.length}</div><div class="ob-title">${st.title}</div><div class="ob-sub">${st.sub||''}</div>`;
  const cls = st.opts.length>5 ? 'ob-options' : 'ob-options';
  html += `<div class="${cls}">`;
  st.opts.forEach(o=>{
    const sel = isSel(st,o.v) ? ' selected':'';
    html += `<button class="ob-opt${sel}" onclick="pick('${st.key}','${o.v}',${!!st.multi},${st.max||1})"><span class="emo">${o.e}</span><span>${o.t}${o.s?`<small>${o.s}</small>`:''}</span></button>`;
  });
  html += `</div><div class="ob-next"><button class="btn-primary" ${canNext(st)?'':'disabled style="opacity:.4"'} onclick="obNext()">Continuar</button></div>`;
  body.innerHTML = html;
  body.style.animation='none'; void body.offsetWidth; body.style.animation='';
}
function isSel(st,v){ const a=obAns[st.key]; return st.multi ? (a||[]).includes(v) : a===v; }
function canNext(st){ const a=obAns[st.key]; return st.multi ? (a&&a.length>0) : !!a; }
function pick(k,v,multi,max){
  if(multi){
    const cur = obAns[k]||[];
    if(cur.includes(v)) obAns[k]=cur.filter(x=>x!==v);
    else { if(cur.length>=max) cur.shift(); obAns[k]=[...cur,v]; }
  } else obAns[k]=v;
  renderOb();
}
function obNext(){
  const st=OB[obStep];
  if(!canNext(st)) return;
  if(obStep<OB.length-1){ obStep++; renderOb(); }
  else finishOnboarding();
}

/* selfie */
let selfieData=null, camStream=null;
async function renderSelfie(body){
  body.innerHTML = `
    <div class="ob-kicker">Passo 1 de ${OB.length}</div>
    <div class="ob-title">Tire uma selfie para personalizar o app</div>
    <div class="ob-sub">Sua foto fica só no seu aparelho: nada é enviado para servidor nenhum.</div>
    <div class="selfie-box">
      <div class="selfie-oval" id="selfie-oval">🙂</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
        <button class="btn-secondary" onclick="openCam()">📸 Abrir câmera</button>
        <button class="btn-outline" onclick="document.getElementById('filepick').click()">Enviar foto</button>
      </div>
      <input type="file" id="filepick" accept="image/*" style="display:none" onchange="onFilePick(event)">
      <button class="btn-ghost" style="color:var(--grey);font-size:13px" onclick="skipSelfie()">Pular por agora</button>
    </div>
    <div class="ob-next"><button class="btn-primary" id="selfie-next" disabled style="opacity:.4" onclick="obNextSelfie()">Continuar</button></div>`;
}
function skipSelfie(){ selfieData=null; S.selfie=null; save(); obStep=1; renderOb(); }
function obNextSelfie(){ if(!selfieData) return; S.selfie=selfieData; save(); stopCam(); obStep=1; renderOb(); }
async function openCam(){
  try{
    const v=document.getElementById('cam');
    camStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:false});
    v.srcObject=camStream; await v.play();
    const oval=document.getElementById('selfie-oval');
    oval.innerHTML=''; oval.appendChild(v); v.style.display='block';
    v.style.width='100%'; v.style.height='100%'; v.style.objectFit='cover'; v.style.borderRadius='inherit';
    const btn = document.querySelector('.selfie-box .btn-secondary');
    btn.textContent='✅ Capturar'; btn.onclick=captureCam;
  }catch(e){ alert('Não consegui acessar a câmera. Use "Enviar foto".'); }
}
function captureCam(){
  const v=document.getElementById('cam'), c=document.getElementById('camcanvas');
  c.width=v.videoWidth; c.height=v.videoHeight;
  c.getContext('2d').drawImage(v,0,0);
  selfieData = c.toDataURL('image/jpeg',.82);
  stopCam(); showSelfiePreview();
}
function stopCam(){ if(camStream){ camStream.getTracks().forEach(t=>t.stop()); camStream=null; } const v=document.getElementById('cam'); v.style.display='none'; }
function onFilePick(ev){
  const f=ev.target.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=()=>{ selfieData=r.result; showSelfiePreview(); };
  r.readAsDataURL(f);
}
function showSelfiePreview(){
  document.getElementById('selfie-oval').innerHTML = `<img src="${selfieData}" alt="Sua selfie">`;
  const n=document.getElementById('selfie-next'); n.disabled=false; n.style.opacity='1';
}

/* analysis */
function finishOnboarding(){
  stopCam();
  S.answers=obAns; save();
  show('screen-analyzing');
  const steps=[["Lendo proporções do rosto","Analisando sua selfie…","🙂"],["Detectando tom de pele e subtom","Cruzando com suas respostas…","🎨"],["Calculando seu tipo de corpo","Quase lá…","📐"],["Montando sua paleta pessoal","Definindo suas cores…","🌈"],["Escolhendo peças da vitrine para você","Sua Style Formula está pronta!","✨"]];
  let i=0;
  const tick=()=>{
    if(i<steps.length){
      document.getElementById('an-step').textContent=steps[i][0];
      document.getElementById('an-title').textContent=steps[i][1];
      document.getElementById('an-face').textContent=steps[i][2];
      document.getElementById('an-bar').style.width=((i+1)/steps.length*100)+'%';
      i++; setTimeout(tick, 900);
    } else {
      S.profile=computeProfile(); save();
      renderResult(); show('screen-result');
    }
  };
  tick();
}
function computeProfile(){
  const a=obAns;
  const vibes=a.vibe&&a.vibe.length?a.vibe:['natural'];
  const t1=vibes[0], t2=vibes[1]||null;
  let body='retangulo';
  if(a.ombros==='mais_estreitos') body='triangulo';
  else if(a.ombros==='mais_largos') body='triinvertido';
  else if(a.cintura==='marcada'&&a.quadril==='largo') body='ampulheta';
  else if(a.cintura==='pouco'&&a.quadril==='largo') body='triangulo';
  else if(a.cintura==='pouco') body=a.quadril==='estreito'?'retangulo':'oval';
  let season='primavera';
  const warm = a.joias==='dourado', cool = a.joias==='prateado';
  if(warm && a.contraste==='alto') season='outono';
  else if(warm) season='primavera';
  else if(cool && a.contraste==='alto') season='inverno';
  else if(cool) season='verao';
  else season = a.contraste==='baixo' ? 'verao' : 'outono';
  return {t1,t2,body,season,created:Date.now()};
}
function renderResult(){
  const p=S.profile, st1=STYLE_TYPES[p.t1], st2=p.t2?STYLE_TYPES[p.t2]:null, bt=BODY_TYPES[p.body], se=SEASONS[p.season];
  const nome = st2? `${st1.nome}-${st2.nome}` : st1.nome;
  document.getElementById('result-body').innerHTML=`
    <div class="res-hero">
      <div class="rh-k">Sua Style Formula</div>
      <h2>${nome}</h2>
      <p>${st1.desc}${st2?'<br>'+st2.desc:''}</p>
    </div>
    <div class="res-cards">
      <div class="res-card"><h3>Seu tipo de corpo</h3><div class="big">${bt.nome}</div><p>${bt.dica}</p></div>
      <div class="res-card"><h3>Sua paleta pessoal</h3><div class="big">${se.nome}</div>
        <div class="palette">${se.cores.map(c=>`<span class="swatch" style="background:${c}" title="${c}"></span>`).join('')}</div>
        <p>Perto do rosto, prefira sempre estas cores — elas iluminam sua pele naturalmente.</p></div>
      <div class="res-card"><h3>Seus pontos-chave</h3>
        <div class="chips">
          <span class="chip">Cintura: ${obAns.cintura==='marcada'?'marcada ✨':'a criar'}</span>
          <span class="chip">Metal: ${obAns.joias==='dourado'?'dourado':obAns.joias==='prateado'?'prateado':'dourado e prata'}</span>
          <span class="chip">Contraste ${obAns.contraste||'médio'}</span>
          <span class="chip">Prioridade: ${({conforto:'conforto',elegancia:'elegância',originalidade:'originalidade',praticidade:'praticidade'})[obAns.prioridade]||'equilíbrio'}</span>
        </div></div>
      <button class="btn-primary" onclick="enterApp()">Ver minha vitrine personalizada</button>
    </div>`;
}

/* ---------- main app ---------- */
let curTab='home', shopFilter='Tudo';
function enterApp(){
  if(!S.profile){ startOnboarding(); return; }
  show('screen-main'); goTab('home');
}
function goTab(t){
  curTab=t;
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.tabbtn').forEach(x=>x.classList.toggle('active',x.dataset.tab===t));
  document.getElementById('tab-'+t).classList.add('active');
  ({home:renderHome,shop:renderShop,closet:renderCloset,profile:renderProfile})[t]();
}
function matchPct(item){
  const p=S.profile; if(!p) return 50;
  let m=40;
  const est=[p.t1,p.t2].filter(Boolean);
  if(item.estilos.some(e=>est.includes(e))) m+=30;
  if(item.estacoes.includes(p.season)) m+=15;
  if(item.corpos.includes(p.body)) m+=15;
  return Math.min(m,98);
}
function formulaNome(){ const p=S.profile; if(!p) return ''; const a=STYLE_TYPES[p.t1].nome; return p.t2? `${a}-${STYLE_TYPES[p.t2].nome}`:a; }

function renderHome(){
  const p=S.profile, se=SEASONS[p.season], bt=BODY_TYPES[p.body];
  const looks=LOOKS.filter(l=>l.estilos.includes(p.t1)||(p.t2&&l.estilos.includes(p.t2)));
  const looksShow=looks.length?looks:LOOKS.slice(0,3);
  const top=PRODUCTS.map(x=>({x,m:matchPct(x)})).sort((a,b)=>b.m-a.m).slice(0,8);
  const tip=TIPS[new Date().getDate()%TIPS.length];
  document.getElementById('tab-home').innerHTML=`
    <div class="home-hero">
      <h2>Olá! ✨</h2>
      <p>Sua fórmula: <b>${formulaNome()}</b> · ${se.nome}</p>
      <span class="formula-pill">⏳ ${bt.nome}</span>
    </div>
    <div class="section-t"><h3>Looks para você</h3></div>
    <div class="hscroll">${looksShow.map(l=>`
      <div class="look-card"><div class="look-art" style="background:${l.bg}">${l.emo}</div>
      <div class="lc-body"><h4>${l.nome}</h4><p>${l.itens.join(' · ')}</p></div></div>`).join('')}
    </div>
    <div class="section-t"><h3>Escolhas da sua fórmula</h3><a href="#" onclick="goTab('shop');return false">Ver tudo</a></div>
    <div class="hscroll">${top.map(({x,m})=>`
      <div class="look-card"><div class="look-art" style="background:${x.bg}">${x.emo}</div>
      <div class="lc-body"><h4>${x.nome}</h4><p>R$ ${x.preco.toFixed(2).replace('.',',')}</p>
      <span class="match-badge">${m}% match</span></div></div>`).join('')}
    </div>
    <div class="section-t"><h3>Dica do dia</h3></div>
    <div class="tip-card"><b>Dica Stylla:</b> ${tip}</div>`;
}

function renderShop(){
  const cats=['Tudo',...new Set(PRODUCTS.map(p=>p.cat))];
  const items=PRODUCTS.map(x=>({x,m:matchPct(x)}))
    .filter(({x})=>shopFilter==='Tudo'||x.cat===shopFilter)
    .sort((a,b)=>b.m-a.m);
  document.getElementById('tab-shop').innerHTML=`
    <div class="section-t" style="margin-top:4px"><h3>Loja</h3><a href="#">${items.length} peças</a></div>
    <div class="shop-filters">${cats.map(c=>`<button class="fbtn ${c===shopFilter?'active':''}" onclick="setFilter('${c}')">${c}</button>`).join('')}</div>
    <div class="shop-grid">${items.map(({x,m})=>{
      const fav=(S.favs||[]).includes(x.id);
      return `<div class="prod">
        <div class="prod-art" style="background:${x.bg}">${x.emo}
          <button class="prod-fav ${fav?'faved':''}" onclick="toggleFav(${x.id})">${fav?'♥':'♡'}</button></div>
        <div class="prod-body"><h4>${x.nome}</h4><div class="prod-store">${x.loja}</div>
        <div class="prod-row"><span class="prod-price">R$ ${x.preco.toFixed(2).replace('.',',')}</span>
        <span class="prod-match">${m}% match</span></div></div></div>`;
    }).join('')}</div>`;
}
function setFilter(c){ shopFilter=c; renderShop(); }
function toggleFav(id){
  S.favs=S.favs||[];
  const i=S.favs.indexOf(id);
  if(i>=0) S.favs.splice(i,1); else S.favs.push(id);
  save();
  if(curTab==='shop') renderShop(); else if(curTab==='closet') renderCloset();
}

function renderCloset(){
  const favs=(S.favs||[]).map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
  document.getElementById('tab-closet').innerHTML = favs.length ? `
    <div class="section-t" style="margin-top:4px"><h3>Meu Closet</h3><a href="#">${favs.length} peças</a></div>
    <div class="shop-grid">${favs.map(x=>`
      <div class="prod"><div class="prod-art" style="background:${x.bg}">${x.emo}
        <button class="prod-fav faved" onclick="toggleFav(${x.id})">♥</button></div>
      <div class="prod-body"><h4>${x.nome}</h4><div class="prod-store">${x.loja}</div>
      <div class="prod-row"><span class="prod-price">R$ ${x.preco.toFixed(2).replace('.',',')}</span>
      <span class="prod-match">${matchPct(x)}% match</span></div></div></div>`).join('')}</div>
    <div style="margin-top:18px" class="tip-card"><b>Total do closet:</b> R$ ${favs.reduce((s,x)=>s+x.preco,0).toFixed(2).replace('.',',')} em ${favs.length} peças que combinam entre si.</div>`
  : `<div class="empty"><span class="big">♡</span>Seu closet está vazio.<br>Favorite peças na aba Loja e monte seu armário inteligente aqui.</div>`;
}

function renderProfile(){
  const p=S.profile, se=SEASONS[p.season], bt=BODY_TYPES[p.body];
  const selfie=S.selfie?`<img src="${S.selfie}" alt="">`:'🙂';
  document.getElementById('tab-profile').innerHTML=`
    <div class="prof-head"><div class="prof-avatar">${selfie}</div>
      <div><h2>Meu Perfil</h2><p>Fórmula ${formulaNome()} · ${se.nome}</p></div></div>
    <div class="prof-list">
      <button class="prof-item" onclick="goTab('home')"><span class="pi">🧬</span><span>Minha Style Formula<small>${formulaNome()} · corpo ${bt.nome}</small></span><span class="arrow">›</span></button>
      <button class="prof-item" onclick="verPaleta()"><span class="pi">🎨</span><span>Minha paleta<small>${se.nome}</small></span><span class="arrow">›</span></button>
      <button class="prof-item" onclick="goTab('closet')"><span class="pi">♡</span><span>Meu closet<small>${(S.favs||[]).length} peças salvas</small></span><span class="arrow">›</span></button>
      <button class="prof-item danger" onclick="refazer()"><span class="pi">↺</span><span class="danger">Refazer análise<small>Apaga o perfil e começa de novo</small></span><span class="arrow">›</span></button>
    </div>
    <div class="res-card" style="margin-top:18px"><h3>Sua paleta</h3>
      <div class="palette">${se.cores.map(c=>`<span class="swatch" style="background:${c}"></span>`).join('')}</div></div>`;
}
function verPaleta(){ renderResult(); show('screen-result'); }
function refazer(){ if(confirm('Apagar sua análise e começar de novo?')){ localStorage.removeItem('stylla'); S={}; selfieData=null; show('screen-splash'); } }

/* boot */
if(S.profile){ /* fica na splash; botão "Já fiz minha análise" entra direto */ }
