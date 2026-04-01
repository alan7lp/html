/* ── Format Definitions Lookup Table ─────────────────────────────────── */
const FD=[
  {cat:"Default",sty:"Standard (neutral)",dec:0,fmt:"#,0;-#,0;0"},
  {cat:"Default",sty:"Standard (neutral)",dec:1,fmt:"#,0.0;-#,0.0;0"},
  {cat:"Default",sty:"Standard (neutral)",dec:2,fmt:"#,0.00;-#,0.00;0"},
  {cat:"Default",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,0;-#,0;0"},
  {cat:"Default",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,0.0;-#,0.0;0"},
  {cat:"Default",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,0.00;-#,0.00;0"},
  {cat:"Default",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,0;\u25bc -#,0;0"},
  {cat:"Default",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,0.0;\u25bc -#,0.0;0"},
  {cat:"Default",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,0.00;\u25bc -#,0.00;0"},
  {cat:"Thousands",sty:"Standard (neutral)",dec:0,fmt:"#,0,.;-#,0,.;0"},
  {cat:"Thousands",sty:"Standard (neutral)",dec:1,fmt:"#,0,.0;-#,0,.0;0"},
  {cat:"Thousands",sty:"Standard (neutral)",dec:2,fmt:"#,0,.00;-#,0,.00;0"},
  {cat:"Thousands",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,0,.;-#,0,.;0"},
  {cat:"Thousands",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,0,.0;-#,0,.0;0"},
  {cat:"Thousands",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,0,.00;-#,0,.00;0"},
  {cat:"Thousands",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,0,.;\u25bc -#,0,.;0"},
  {cat:"Thousands",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,0,.0;\u25bc -#,0,.0;0"},
  {cat:"Thousands",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,0,.00;\u25bc -#,0,.00;0"},
  {cat:"Thousands (K)",sty:"Standard (neutral)",dec:0,fmt:"#,0,.K;-#,0,.K;0"},
  {cat:"Thousands (K)",sty:"Standard (neutral)",dec:1,fmt:"#,0,.0K;-#,0,.0K;0"},
  {cat:"Thousands (K)",sty:"Standard (neutral)",dec:2,fmt:"#,0,.00K;-#,0,.00K;0"},
  {cat:"Thousands (K)",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,0,.K;-#,0,.K;0"},
  {cat:"Thousands (K)",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,0,.0K;-#,0,.0K;0"},
  {cat:"Thousands (K)",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,0,.00K;-#,0,.00K;0"},
  {cat:"Thousands (K)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,0,.K;\u25bc -#,0,.K;0"},
  {cat:"Thousands (K)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,0,.0K;\u25bc -#,0,.0K;0"},
  {cat:"Thousands (K)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,0,.00K;\u25bc -#,0,.00K;0"},
  {cat:"Millions",sty:"Standard (neutral)",dec:0,fmt:"#,,0,,.;-#,,0,,.;0"},
  {cat:"Millions",sty:"Standard (neutral)",dec:1,fmt:"#,,0,,.0;-#,,0,,.0;0"},
  {cat:"Millions",sty:"Standard (neutral)",dec:2,fmt:"#,,0,,.00;-#,,0,,.00;0"},
  {cat:"Millions",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,,0,,.;-#,,0,,.;0"},
  {cat:"Millions",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,,0,,.0;-#,,0,,.0;0"},
  {cat:"Millions",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,,0,,.00;-#,,0,,.00;0"},
  {cat:"Millions",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,,0,,.;\u25bc -#,,0,,.;0"},
  {cat:"Millions",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,,0,,.0;\u25bc -#,,0,,.0;0"},
  {cat:"Millions",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,,0,,.00;\u25bc -#,,0,,.00;0"},
  {cat:"Millions (M)",sty:"Standard (neutral)",dec:0,fmt:"#,,0,,.M;-#,,0,,.M;0"},
  {cat:"Millions (M)",sty:"Standard (neutral)",dec:1,fmt:"#,,0,,.0M;-#,,0,,.0M;0"},
  {cat:"Millions (M)",sty:"Standard (neutral)",dec:2,fmt:"#,,0,,.00M;-#,,0,,.00M;0"},
  {cat:"Millions (M)",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,,0,,.M;-#,,0,,.M;0"},
  {cat:"Millions (M)",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,,0,,.0M;-#,,0,,.0M;0"},
  {cat:"Millions (M)",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,,0,,.00M;-#,,0,,.00M;0"},
  {cat:"Millions (M)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,,0,,.M;\u25bc -#,,0,,.M;0"},
  {cat:"Millions (M)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,,0,,.0M;\u25bc -#,,0,,.0M;0"},
  {cat:"Millions (M)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,,0,,.00M;\u25bc -#,,0,,.00M;0"},
  {cat:"Billions",sty:"Standard (neutral)",dec:0,fmt:"#,,,0,,,.;-#,,,0,,,.;0"},
  {cat:"Billions",sty:"Standard (neutral)",dec:1,fmt:"#,,,0,,,.0;-#,,,0,,,.0;0"},
  {cat:"Billions",sty:"Standard (neutral)",dec:2,fmt:"#,,,0,,,.00;-#,,,0,,,.00;0"},
  {cat:"Billions",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,,,0,,,.;-#,,,0,,,.;0"},
  {cat:"Billions",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,,,0,,,.0;-#,,,0,,,.0;0"},
  {cat:"Billions",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,,,0,,,.00;-#,,,0,,,.00;0"},
  {cat:"Billions",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,,,0,,,.;\u25bc -#,,,0,,,.;0"},
  {cat:"Billions",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,,,0,,,.0;\u25bc -#,,,0,,,.0;0"},
  {cat:"Billions",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,,,0,,,.00;\u25bc -#,,,0,,,.00;0"},
  {cat:"Billions (B)",sty:"Standard (neutral)",dec:0,fmt:"#,,,0,,,.B;-#,,,0,,,.B;0"},
  {cat:"Billions (B)",sty:"Standard (neutral)",dec:1,fmt:"#,,,0,,,.0B;-#,,,0,,,.0B;0"},
  {cat:"Billions (B)",sty:"Standard (neutral)",dec:2,fmt:"#,,,0,,,.00B;-#,,,0,,,.00B;0"},
  {cat:"Billions (B)",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+#,,,0,,,.B;-#,,,0,,,.B;0"},
  {cat:"Billions (B)",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+#,,,0,,,.0B;-#,,,0,,,.0B;0"},
  {cat:"Billions (B)",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+#,,,0,,,.00B;-#,,,0,,,.00B;0"},
  {cat:"Billions (B)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +#,,,0,,,.B;\u25bc -#,,,0,,,.B;0"},
  {cat:"Billions (B)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +#,,,0,,,.0B;\u25bc -#,,,0,,,.0B;0"},
  {cat:"Billions (B)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +#,,,0,,,.00B;\u25bc -#,,,0,,,.00B;0"},
  {cat:"Percentage",sty:"Standard (neutral)",dec:0,fmt:"0%;-0%;0%"},
  {cat:"Percentage",sty:"Standard (neutral)",dec:1,fmt:"0.0%;-0.0%;0%"},
  {cat:"Percentage",sty:"Standard (neutral)",dec:2,fmt:"0.00%;-0.00%;0%"},
  {cat:"Percentage",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+0%;-0%;0%"},
  {cat:"Percentage",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+0.0%;-0.0%;0%"},
  {cat:"Percentage",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+0.00%;-0.00%;0%"},
  {cat:"Percentage",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +0%;\u25bc -0%;0%"},
  {cat:"Percentage",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +0.0%;\u25bc -0.0%;0%"},
  {cat:"Percentage",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +0.00%;\u25bc -0.00%;0%"},
  {cat:"Percentage point (pp)",sty:"Standard (neutral)",dec:0,fmt:"0pp;-0pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Standard (neutral)",dec:1,fmt:"0.0pp;-0.0pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Standard (neutral)",dec:2,fmt:"0.00pp;-0.00pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Variance with plus (+) sign for pos. var",dec:0,fmt:"+0pp;-0pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Variance with plus (+) sign for pos. var",dec:1,fmt:"+0.0pp;-0.0pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Variance with plus (+) sign for pos. var",dec:2,fmt:"+0.00pp;-0.00pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:0,fmt:"\u25b2 +0pp;\u25bc -0pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:1,fmt:"\u25b2 +0.0pp;\u25bc -0.0pp;0pp"},
  {cat:"Percentage point (pp)",sty:"Variance with plus (+) sign for pos. var and indicator \u25b2\u25bc",dec:2,fmt:"\u25b2 +0.00pp;\u25bc -0.00pp;0pp"}
];

const INDICATORS=[
  {k:'triangle',up:'\u25b2',dn:'\u25bc',l:'\u25b2\u25bc Triangle'},
  {k:'chevron', up:'\u23f6',dn:'\u23f7',l:'\u23f6\u23f7 Chevron'},
  {k:'trend',   up:'\u2191',dn:'\u2193',l:'\u2191\u2193 Trend'},
  {k:'diagonal',up:'\u2197',dn:'\u2198',l:'\u2197\u2198 Diagonal'},
  {k:'check',   up:'\u2714',dn:'\u2716',l:'\u2714\u2716 Check'}
];

/* ── Default state ──────────────────────────────────────────────────── */
const DEFAULTS = {
  cat:'Default', sty:'Standard (neutral)', dec:2,
  zero:'zero', neg:'minus', trail:'show', th:'on', cur:'none',
  ind:'triangle', plus:'show', showInd:'on', indPos:'before',
  engine:'measure', samples:'realistic'
};

let S = {...DEFAULTS};
const USER_LOCALE = (typeof navigator !== 'undefined' && navigator.languages && navigator.languages.length)
  ? navigator.languages
  : (typeof navigator !== 'undefined' && navigator.language ? navigator.language : undefined);

/* ── Sample data ────────────────────────────────────────────────────── */
const NUMS = {
  realistic:[93847261504.17,8621473950.44,731924806.29,56348127.63,9182734.85,614293.77,47852.39,3196.54,28.41,0.63,0,-0.87,-2847.16,-31956.72,-498731.54,-7263814.90,-84519632.07,-2143876509.31,-61394827150.88],
  round:[10000000000,1000000000,100000000,10000000,1000000,100000,10000,1000,0.50,0,-0.50,-1000,-10000,-100000,-1000000,-10000000,-100000000,-1000000000,-10000000000]
};
const PCTS = {
  realistic:[0.8734,0.4215,0.1563,0.0847,0.0312,0.005,0,-0.0023,-0.0475,-0.1230,-0.2568,-0.5190,-0.7845],
  round:[1,0.75,0.50,0.25,0.10,0.05,0.01,0,-0.01,-0.05,-0.10,-0.25,-0.50,-0.75,-1]
};

function getSamples(){
  const p=S.cat==="Percentage"||S.cat==="Percentage point (pp)";
  return p?PCTS[S.samples]:NUMS[S.samples];
}

/* ── Format logic (unchanged) ───────────────────────────────────────── */
function formatLocaleNumber(value, decimals, useGrouping, trimZeros){
  return new Intl.NumberFormat(USER_LOCALE, {
    useGrouping: useGrouping,
    minimumFractionDigits: trimZeros ? 0 : decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function lookupBase(){
  let ds=S.sty;
  if(ds==='Variance')ds='Variance with plus (+) sign for pos. var';
  return FD.find(d=>d.cat===S.cat&&d.sty===ds&&d.dec===S.dec);
}

function splitFmt(f){
  const i1=f.indexOf(';'); if(i1===-1)return[f,'',''];
  const i2=f.indexOf(';',i1+1); if(i2===-1)return[f.substring(0,i1),f.substring(i1+1),''];
  return[f.substring(0,i1),f.substring(i1+1,i2),f.substring(i2+1)];
}

function toBrackets(neg){
  let p='',c=neg;
  if(c.startsWith('\u25bc ')){p='\u25bc ';c=c.substring(2);}
  if(c.startsWith('-'))c=c.substring(1);
  return p+'('+c+')';
}

function applyMods(base){
  let[pos,neg,zero]=splitFmt(base);
  if(S.th==='off'){pos=pos.replace(/#,+/g,'');neg=neg.replace(/#,+/g,'');}
  if(S.trail==='hide'){
    pos=pos.replace(/\.0+/,m=>m.replace(/0/g,'#'));
    neg=neg.replace(/\.0+/,m=>m.replace(/0/g,'#'));
  }
  if(S.sty.startsWith('Variance')&&S.plus==='hide'){pos=pos.replace(/^\+/,'');}
  if(S.neg==='brackets')neg=toBrackets(neg);
  const isPct=S.cat==="Percentage"||S.cat==="Percentage point (pp)";
  if(S.cur!=='none'&&!isPct){
    const cs=S.cur==='euro'?'\u20ac':'$';
    pos=pos.replace(/(#|0)/,m=>cs+m);
    neg=neg.replace(/(#|0)/,m=>cs+m);
    if(zero&&zero!=='-'&&zero!=='')zero=zero.replace(/(0)/,m=>cs+m);
  }
  if(S.zero==='dash')zero='\u2013';
  else if(S.zero==='empty')zero='""';
  const pair=INDICATORS.find(p=>p.k===S.ind);
  const hasInd=S.sty.startsWith('Variance')&&S.showInd==='on'&&pair;
  if(hasInd){
    if(S.indPos==='before'){pos=pair.up+' '+pos;neg=pair.dn+' '+neg;}
    else{pos=pos+' '+pair.up;neg=neg+' '+pair.dn;}
  }
  let sz='0';
  if(S.cat==='Percentage')sz='0%';
  else if(S.cat==='Percentage point (pp)')sz='0pp';
  else if(S.cat==='Thousands (K)')sz='0K';
  else if(S.cat==='Millions (M)')sz='0M';
  else if(S.cat==='Billions (B)')sz='0B';
  if(S.cur!=='none'&&!isPct){const cs=S.cur==='euro'?'\u20ac':'$';sz=cs+sz;}
  if(S.zero==='zero')return pos+';'+neg+';'+sz;
  if(S.zero==='plain')return pos+';'+neg+';0';
  return pos+';'+neg+';'+zero;
}

function toFormatDax(f){
  return f.split(';').map(s=>{
    if(!s)return s;
    s=s.replace(/\.#+/,m=>m.replace(/#/g,'0'));
    s=s.replace(/\.(?=[A-Za-z );]|$)/g,'');
    return s;
  }).join(';');
}

function getFinal(){
  const b=lookupBase(); if(!b)return'\u2014';
  const mf=applyMods(b.fmt);
  const df=toFormatDax(mf);
  const diff=mf!==df;
  return (S.engine==='format'&&diff)?df:mf;
}

function fmtSample(v){
  const cat=S.cat,isNeg=v<0,isZero=v===0;
  let abs=Math.abs(v),div=1,suf='',useTh=true;
  switch(cat){
    case"Thousands":div=1000;break;
    case"Thousands (K)":div=1000;suf='K';break;
    case"Millions":div=1000000;break;
    case"Millions (M)":div=1000000;suf='M';break;
    case"Billions":div=1000000000;break;
    case"Billions (B)":div=1000000000;suf='B';break;
    case"Percentage":abs=Math.abs(v)*100;suf='%';useTh=false;break;
    case"Percentage point (pp)":suf='pp';useTh=false;break;
  }
  if(cat!=="Percentage")abs=Math.abs(v)/div; else abs=Math.abs(v)*100;
  if(S.th==='off')useTh=false;
  if(isZero){
    if(S.zero==='dash')return'\u2013';
    if(S.zero==='empty')return'';
    if(S.zero==='plain')return'0';
    const sym=S.cur==='euro'?'\u20ac':S.cur==='dollar'?'$':'';
    const iP=cat==='Percentage'||cat==='Percentage point (pp)';
    if(cat==='Percentage')return'0%';
    if(cat==='Percentage point (pp)')return'0pp';
    let zs='';if(cat==='Thousands (K)')zs='K';else if(cat==='Millions (M)')zs='M';else if(cat==='Billions (B)')zs='B';
    return(iP?'':sym)+'0'+zs;
  }
  let f = formatLocaleNumber(abs, S.dec, useTh, S.trail==='hide'&&S.dec>0);
  f+=suf;
  const iP2=cat==="Percentage"||cat==="Percentage point (pp)";
  if(S.cur!=='none'&&!iP2){const s=S.cur==='euro'?'\u20ac':'$';f=s+f;}
  const pair=INDICATORS.find(p=>p.k===S.ind);
  const hasInd=S.sty.startsWith('Variance')&&S.showInd==='on'&&pair;
  const bef=S.indPos==='before';
  const showP=S.sty.startsWith('Variance')&&S.plus==='show';
  if(isNeg){
    let n='-'+f;if(S.neg==='brackets')n='('+f+')';
    if(hasInd)return bef?pair.dn+' '+n:n+' '+pair.dn;return n;
  }
  const sg=showP?'+':'';
  if(hasInd)return bef?pair.up+' '+sg+f:sg+f+' '+pair.up;
  return sg+f;
}

function fmtRaw(v){
  const iP=S.cat==="Percentage"||S.cat==="Percentage point (pp)";
  const d=iP?4:2;
  return formatLocaleNumber(v, d, true, false);
}

/* ── UI helpers ─────────────────────────────────────────────────────── */
function chip(label, isActive, key, val) {
  const esc = typeof val === 'string' ? "'" + val.replace(/'/g, "\\'") + "'" : val;
  return '<div class="chip' + (isActive ? ' active' : '') + '" role="radio" aria-checked="' + isActive + '" tabindex="' + (isActive ? '0' : '-1') + '" onclick="sel(\'' + key + '\',' + esc + ')">' + label + '</div>';
}

function mo(id, opts, key) {
  document.getElementById(id).innerHTML = opts.map(function(o) {
    return '<div class="mod-pill' + (S[key] === o.k ? ' active' : '') + '" role="radio" aria-checked="' + (S[key] === o.k) + '" tabindex="' + (S[key] === o.k ? '0' : '-1') + '" onclick="sel(\'' + key + '\',\'' + o.k + '\')">' + o.l + '</div>';
  }).join('');
}

/* ── State management ───────────────────────────────────────────────── */
function sel(k, v) {
  if (k === 'cat') S.cat = v;
  else if (k === 'sty') { S.sty = v === 'Variance' ? 'Variance with plus (+) sign for pos. var' : v; }
  else if (k === 'dec') S.dec = v;
  else S[k] = v;
  render();
  saveHash();
}

function resetDefaults() {
  Object.assign(S, DEFAULTS);
  render();
  saveHash();
}

/* ── URL hash persistence ───────────────────────────────────────────── */
function saveHash() {
  var params = [];
  for (var k in S) {
    if (S[k] !== DEFAULTS[k]) {
      params.push(encodeURIComponent(k) + '=' + encodeURIComponent(S[k]));
    }
  }
  history.replaceState(null, '', params.length ? '#' + params.join('&') : location.pathname);
}

var VALID_VALUES = {
  cat: ['Default','Thousands','Thousands (K)','Millions','Millions (M)','Billions','Billions (B)','Percentage','Percentage point (pp)'],
  sty: ['Standard (neutral)','Variance with plus (+) sign for pos. var'],
  dec: [0, 1, 2],
  zero: ['zero','plain','dash','empty'],
  neg: ['minus','brackets'],
  trail: ['show','hide'],
  th: ['on','off'],
  cur: ['none','euro','dollar'],
  ind: ['triangle','chevron','trend','diagonal','check'],
  plus: ['show','hide'],
  showInd: ['on','off'],
  indPos: ['before','after'],
  engine: ['measure','format'],
  samples: ['realistic','round']
};

function loadHash() {
  var hash = location.hash.slice(1);
  if (!hash) return;
  try {
    hash.split('&').forEach(function(pair) {
      var parts = pair.split('=');
      if (parts.length !== 2) return;
      var k, v;
      try { k = decodeURIComponent(parts[0]); v = decodeURIComponent(parts[1]); }
      catch(e) { return; }
      if (!(k in DEFAULTS) || !(k in VALID_VALUES)) return;
      if (k === 'dec') {
        var n = parseInt(v, 10);
        if (VALID_VALUES.dec.indexOf(n) !== -1) S[k] = n;
      } else {
        if (VALID_VALUES[k].indexOf(v) !== -1) S[k] = v;
      }
    });
  } catch(e) {
    Object.assign(S, DEFAULTS);
  }
}

/* ── Render ─────────────────────────────────────────────────────────── */
function render() {
  // Category chips
  var numCats = ['Default','Thousands','Thousands (K)','Millions','Millions (M)','Billions','Billions (B)'];
  var pctCats = ['Percentage','Percentage point (pp)'];
  document.getElementById('catNumbers').innerHTML = numCats.map(function(c) {
    return chip(c, c === S.cat, 'cat', c);
  }).join('');
  document.getElementById('catPct').innerHTML = pctCats.map(function(c) {
    return chip(c, c === S.cat, 'cat', c);
  }).join('');

  // Style chips
  var styles = ['Standard (neutral)', 'Variance'];
  document.getElementById('styleGroup').innerHTML = styles.map(function(s) {
    var isActive = s === 'Variance' ? S.sty.startsWith('Variance') : S.sty === s;
    return chip(s, isActive, 'sty', s);
  }).join('');

  // Decimals
  document.getElementById('decGroup').innerHTML = [0, 1, 2].map(function(d) {
    return '<div class="mod-pill' + (d === S.dec ? ' active' : '') + '" role="radio" aria-checked="' + (d === S.dec) + '" tabindex="' + (d === S.dec ? '0' : '-1') + '" onclick="sel(\'dec\',' + d + ')">' + d + '</div>';
  }).join('');

  // Sample toggle
  document.getElementById('sampleToggle').innerHTML = [{k:'realistic',l:'Realistic'},{k:'round',l:'Simple'}].map(function(o) {
    return '<div class="sample-tog' + (S.samples === o.k ? ' active' : '') + '" onclick="sel(\'samples\',\'' + o.k + '\')">' + o.l + '</div>';
  }).join('');

  // Sample table
  document.getElementById('tableBody').innerHTML = getSamples().map(function(v) {
    var fv = fmtSample(v);
    var cls = v < 0 ? 'neg-val' : v === 0 ? 'zero-val' : '';
    return '<tr><td>' + fmtRaw(v) + '</td><td class="' + cls + '">' + fv + '</td></tr>';
  }).join('');

  // Modifiers
  var isPct = S.cat === "Percentage" || S.cat === "Percentage point (pp)";
  var hasSuf = ['Thousands (K)','Millions (M)','Billions (B)','Percentage','Percentage point (pp)'].includes(S.cat) || S.cur !== 'none';
  if (!hasSuf && S.zero === 'plain') S.zero = 'zero';
  var zOpts = [{k:'zero',l:'0'}];
  if (hasSuf) zOpts.push({k:'plain',l:'0 (no suffix)'});
  zOpts.push({k:'dash',l:'Dash \u2013'},{k:'empty',l:'Empty'});
  mo('zeroOpts', zOpts, 'zero');
  mo('negOpts', [{k:'minus',l:'Minus \u2212'},{k:'brackets',l:'Brackets'}], 'neg');
  document.getElementById('thWrap').style.display = isPct ? 'none' : '';
  mo('thOpts', [{k:'on',l:'On'},{k:'off',l:'Off'}], 'th');
  var showTrail = S.dec > 0;
  document.getElementById('trailWrap').style.display = showTrail ? '' : 'none';
  if (!showTrail && S.trail === 'hide') S.trail = 'show';
  mo('trailOpts', [{k:'show',l:'Show'},{k:'hide',l:'Hide'}], 'trail');
  document.getElementById('curWrap').style.display = isPct ? 'none' : '';
  mo('curOpts', [{k:'none',l:'None'},{k:'euro',l:'\u20ac Euro'},{k:'dollar',l:'$ Dollar'}], 'cur');

  var isVar = S.sty.startsWith('Variance');
  document.getElementById('varianceSep').style.display = isVar ? '' : 'none';
  document.getElementById('plusWrap').style.display = isVar ? '' : 'none';
  document.getElementById('showIndWrap').style.display = isVar ? '' : 'none';
  if (isVar) {
    mo('plusOpts', [{k:'show',l:'Show +'},{k:'hide',l:'Hide'}], 'plus');
    mo('showIndOpts', [{k:'on',l:'Show'},{k:'off',l:'None'}], 'showInd');
    var showInd2 = isVar && S.showInd === 'on';
    document.getElementById('indWrap').style.display = showInd2 ? '' : 'none';
    document.getElementById('indPosWrap').style.display = showInd2 ? '' : 'none';
    if (showInd2) {
      mo('indOpts', INDICATORS.map(function(p) { return {k:p.k,l:p.l}; }), 'ind');
      mo('indPosOpts', [{k:'before',l:'Before'},{k:'after',l:'After'}], 'indPos');
    }
  } else {
    document.getElementById('indWrap').style.display = 'none';
    document.getElementById('indPosWrap').style.display = 'none';
  }

  // Output
  var b = lookupBase();
  var mf = b ? applyMods(b.fmt) : '\u2014';
  var df = b ? toFormatDax(mf) : '\u2014';
  var diff = mf !== df;

  var ewrap = document.getElementById('engineWrap');
  if (diff) {
    ewrap.style.display = 'flex';
    document.getElementById('engineToggle').innerHTML = [{k:'measure',l:'Measure / Dynamic'},{k:'format',l:'DAX FORMAT()'}].map(function(o) {
      return '<div class="engine-opt' + (S.engine === o.k ? ' active' : '') + '" onclick="sel(\'engine\',\'' + o.k + '\')">' + o.l + '</div>';
    }).join('');
  } else {
    ewrap.style.display = 'none';
    if (S.engine === 'format') S.engine = 'measure';
  }
  var warn = document.getElementById('engineWarn');
  if (S.engine === 'format' && S.trail === 'hide' && S.dec > 0) {
    warn.style.display = 'block';
    warn.textContent = '\u26a0 Hiding trailing zeros in DAX FORMAT() may result in a trailing decimal separator \u2014 this setting is ignored for consistent output.';
  } else { warn.style.display = 'none'; warn.textContent = ''; }

  var final = (S.engine === 'format' && diff) ? df : mf;
  var el = document.getElementById('outputString');
  el.textContent = final;
  el.style.fontSize = '16px';
  el.parentElement.scrollLeft = 0;
}

/* ── Copy ────────────────────────────────────────────────────────────── */
function copyFormat() {
  navigator.clipboard.writeText(getFinal()).then(function() {
    var b = document.getElementById('copyBtn');
    b.classList.add('copied'); b.textContent = 'Copied!';
    setTimeout(function() { b.classList.remove('copied'); b.textContent = 'Copy'; }, 2000);
  });
}

/* ── Modal ───────────────────────────────────────────────────────────── */
function openModal() {
  var overlay = document.getElementById('modal');
  overlay.style.display = 'flex';
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      overlay.classList.add('visible');
    });
  });
  var closeX = overlay.querySelector('.modal-close-x');
  if (closeX) closeX.focus();
}

function closeModal() {
  var overlay = document.getElementById('modal');
  overlay.classList.remove('visible');
  setTimeout(function() {
    overlay.style.display = 'none';
  }, 250);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
  var overlay = document.getElementById('modal');
  if (overlay.style.display !== 'flex') return;
  if (e.key === 'Tab') {
    var focusable = overlay.querySelectorAll('button, [tabindex]');
    if (focusable.length === 0) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ── Init ────────────────────────────────────────────────────────────── */
loadHash();
render();

/* ── Logo animation ─────────────────────────────────────────────────── */
(function(){
  var FULL = 'Data & Analytics';
  var logo   = document.getElementById('topbarLogo');
  var gbMain = document.getElementById('gbMain');
  var gbA    = document.getElementById('gbA');
  var gbB    = document.getElementById('gbB');

  var running  = false;
  var played   = false;
  var typeTimer;

  var CHAR_DELAY      = 90;
  var GLITCH_DURATION = 320;

  function sync(text) {
    gbMain.textContent = text;
    gbA.textContent    = text;
    gbB.textContent    = text;
  }

  function reset() {
    clearTimeout(typeTimer);
    running = false;
    logo.classList.remove('glitching','typing');
    sync(FULL);
    gbMain.style.transform = '';
  }

  function run() {
    if (running) return;
    running = true;

    logo.classList.add('glitching');
    sync(FULL);

    setTimeout(function(){
      if (!running) return;
      logo.classList.remove('glitching');
      logo.classList.add('typing');
      sync('');
      var i = 0;
      function typeNext() {
        if (!running) return;
        if (i <= FULL.length) {
          sync(FULL.slice(0, i));
          if (i > 0 && Math.random() > 0.68) {
            gbMain.style.transform = 'translateX('+(Math.random()-0.5)*2+'px)';
            setTimeout(function(){ gbMain.style.transform=''; }, 35);
          }
          i++;
          typeTimer = setTimeout(typeNext, CHAR_DELAY);
        } else {
          logo.classList.remove('typing');
          running = false;
        }
      }
      typeNext();
    }, GLITCH_DURATION);
  }

  var iconEl = logo.querySelector('.lm-wrap');

  iconEl.addEventListener('mouseenter', function(){
    if (!played) { played = true; run(); }
  });
  logo.addEventListener('mouseleave', function(){
    played = false;
    reset();
  });
})();
