const PHC=[{
  "sl": 4, "district": "Dakshin Dinajpur", "operational": 18
}, {
  "sl": 12, "district": "Rampurhat", "operational": 9
}, {
  "sl": 3, "district": "Birbhum", "operational": 32
}, {
  "sl": 2, "district": "Diamond Harbour", "operational": 29
}, {
  "sl": 1, "district": "Jhargram", "operational": 25
}, {
  "sl": 7, "district": "Bishnupur", "operational": 23
}, {
  "sl": 9, "district": "Purba Bardhaman", "operational": 74
}, {
  "sl": 6, "district": "Bankura", "operational": 46
}, {
  "sl": 8, "district": "Howrah", "operational": 42
}, {
  "sl": 10, "district": "Paschim Medinipore", "operational": 58
}, {
  "sl": 11, "district": "Purba Medinipore", "operational": 16
}, {
  "sl": 5, "district": "South 24 Parganas", "operational": 31
}, {
  "sl": 18, "district": "NADIA", "operational": 45
}, {
  "sl": 13, "district": "Purulia", "operational": 53
}, {
  "sl": 14, "district": "North 24 Parganas", "operational": 18
}, {
  "sl": 17, "district": "Jalpaiguri", "operational": 25
}, {
  "sl": 16, "district": "COOCHBEHAR", "operational": 35
}, {
  "sl": 21, "district": "Uttar Dinajpur", "operational": 18
}, {
  "sl": 15, "district": "Paschim Bardhaman", "operational": 17
}, {
  "sl": 20, "district": "Hooghly", "operational": 60
}, {
  "sl": 19, "district": "Alipurduar", "operational": 4
}, {
  "sl": 22, "district": "Malda", "operational": 34
}, {
  "sl": 23, "district": "Murshidabad", "operational": 69
}], MCH=[{
  "sl": 1, "district": "Burdwan", "hospital": "Burdwan MCH", "expected": 900, "token": "BurdwanMCH"
}, {
  "sl": 2, "district": "Bankura", "hospital": "Bankura Sammilani MCH", "expected": 900, "token": "BankuraSMCH"
}, {
  "sl": 3, "district": "Rampurhat", "hospital": "Rampurhat MCH", "expected": 1000, "token": "RPHGMC"
}, {
  "sl": 4, "district": "Purba Medinipore", "hospital": "Tamralipta MCH", "expected": 900, "token": "TLMCH"
}, {
  "sl": 5, "district": "Nadia", "hospital": "COM & JNM Hospital", "expected": 900, "token": "COMJNM"
}, {
  "sl": 6, "district": "Kolkata", "hospital": "COM&SDH", "expected": 900, "token": "comsdh"
}, {
  "sl": 7, "district": "Kolkata", "hospital": "IPGMER", "expected": 900, "token": "IPGMER"
}, {
  "sl": 8, "district": "Kolkata", "hospital": "NRS", "expected": 900, "token": "NRSMCH"
}, {
  "sl": 9, "district": "Kolkata", "hospital": "RG Kar MCH", "expected": 900, "token": "RGKMCH"
}, {
  "sl": 10, "district": "Coochbehar", "hospital": "MJNMCH", "expected": 900, "token": "MJNMCH"
}, {
  "sl": 11, "district": "Purulia", "hospital": "Deben Mahato", "expected": 900, "token": "DEBENMGMCH"
}, {
  "sl": 12, "district": "Darjeeling", "hospital": "North Bengal MCH", "expected": 900, "token": "NBMC"
}, {
  "sl": 13, "district": "Kolkata", "hospital": "Medical College Hospital", "expected": 900, "token": "MEDICALCK"
}, {
  "sl": 14, "district": "Kolkata", "hospital": "CNMCH", "expected": 900, "token": "CNMCH"
}, {
  "sl": 15, "district": "Murshidabad", "hospital": "Murshidabad MCH", "expected": 900, "token": "MSDMCH"
}, {
  "sl": 16, "district": "Malda", "hospital": "Malda Mch", "expected": 900, "token": "MLDMCH"
}, {
  "sl": 17, "district": "Diamond Harbour", "hospital": "DHMCH", "expected": 900, "token": "DiamondHGMCH"
}, {
  "sl": 18, "district": "Uttar Dinajpore", "hospital": "Raigunj GMCH", "expected": 900, "token": "RGJMCH"
}, {
  "sl": 19, "district": "Paschim Medinipore", "hospital": "Midnapore MCH", "expected": 900, "token": "MIDMCH"
}, {
  "sl": 20, "district": "Kolkata", "hospital": "Chittaranjan Seva Sadan", "expected": 500, "token": "CSS"
}, {
  "sl": 21, "district": "Kolkata", "hospital": "School of Tropical Medicine", "expected": 500, "token": "STM"
}, {
  "sl": 22, "district": "Kolkata", "hospital": "ID & BG Hospital", "expected": 500, "token": "IDBG"
}, {
  "sl": 23, "district": "North 24 Pargana", "hospital": "Barasat Govt. Medical College", "expected": 1000, "token": "BSGMCH"
}, {
  "sl": 24, "district": "Hooghly", "hospital": "Prafulla Chandra Sen GMCH", "expected": 1000, "token": "PCSMCH"
}, {
  "sl": 25, "district": "Howrah", "hospital": "Sarat Chandra Chattopadhyay GMCH", "expected": 1000, "token": "SCCGMCH"
}, {
  "sl": 26, "district": "Jalpaiguri", "hospital": "Jalpaiguri GMCH", "expected": 1000, "token": "JLPMCH"
}, {
  "sl": 27, "district": "Jhargram", "hospital": "Jhargram GMCH", "expected": 1000, "token": "JHGMCH"
}], SB=["Bikash Bala", "Saswati Bandhyapadhya", "Saumik Saha", "Amarjeet Prakash", "Mriganka Biswas", "Antara Das Biswas", "Puskal Mitra", "Sreela Biswas", "Tapan Chandra Sarkar", "Abhinaba Acharya", "Ravi Kant Sharma", "Rama Halder"];
let received=[],referred=[],reports={
},active='phc';
const $=id=>document.getElementById(id);
$('reportDate').value=new Date().toISOString().slice(0,10);
function status(t,c=''){
  $('status').textContent=t;
  $('status').className='status '+c;
}
function U(s){
  return String(s||'').trim().toUpperCase()
}
function pct(a,b){
  return b? a/b:0
}
function fmt(n){
  return (+n||0).toLocaleString('en-IN')
}
function denseRank(arr,key,dir='desc'){
  const vals=[...new Set(arr.map(key))].sort((a,b)=>dir==='desc'?b-a:a-b);
  return arr.map(x=>vals.indexOf(key(x))+1)
}
function uniqueFacilities(rows){
  const m=new Map();
  rows.forEach(r=>{
    const k=U(r.facility).replace(/\s+/g,' '); if(!k)return; const old=m.get(k)||{
      facility:r.facility,completed:0,rows:[]
    }; old.completed+=+r.completed||0; old.rows.push(r); m.set(k,old)
  });
  return [...m.values()]
}
function cleanUser(s){
  return U(s).replace(/[^A-Z]/g,'')
}
function readRows(file){
  return file.arrayBuffer().then(b=>{
    const w=XLSX.read(b,{
      type:'array'
    }),s=w.Sheets[w.SheetNames[0]],a=XLSX.utils.sheet_to_json(s,{
      defval:''
    }); return a.map(r=>({
      facility:String(r['Health Facility']||'').trim(),district:String(r['District']||'').trim(),user:String(r['User']||'').trim(),total:Number(r['Total'])||0,completed:Number(r['Completed'])||0
    }))
  })
}
['receivedFile','referredFile'].forEach(id=>$(id).addEventListener('change',e=>{
  const f=e.target.files[0]; $(id==='receivedFile'?'receivedName':'referredName').textContent=f?f.name:'No file selected'; $('processBtn').disabled=!($('receivedFile').files[0]&&$('referredFile').files[0])
}));
function districtMatch(c,x){
  const d=U(x.district),f=U(x.facility);
  if(c.district==='Rampurhat')return f.includes('RAMPURHAT');
  if(c.district==='Birbhum')return d==='BIRBHUM'&&!f.includes('RAMPURHAT');
  if(c.district==='Diamond Harbour')return f.includes('DIAMOND HARBOUR');
  if(c.district==='Bishnupur')return f.includes('BSNPR');
  if(c.district==='Bankura')return d==='BANKURA'&&!f.includes('BSNPR');
  if(c.district==='Purba Medinipore')return (d==='MEDINIPUR EAST'||d==='PURBA MEDINIPUR')&&!f.includes('NANDIGRAM');
  if(c.district==='South 24 Parganas')return d==='24 PARAGANAS SOUTH'&&!f.includes('DIAMOND HARBOUR');
  if(c.district==='North 24 Parganas')return d==='24 PARAGANAS NORTH'&&!f.includes('BASIRHAT');
  const map={
    'Dakshin Dinajpur':['DINAJPUR DAKSHIN'],'Jhargram':['JHARGRAM'],'Purba Bardhaman':['PURBA BARDHAMAN'],'Howrah':['HOWRAH'],'Paschim Medinipore':['MEDINIPUR WEST','PASCHIM MEDINIPUR'],'NADIA':['NADIA'],'Purulia':['PURULIA'],'Jalpaiguri':['JALPAIGURI'],'COOCHBEHAR':['COOCHBEHAR'],'Uttar Dinajpur':['DINAJPUR UTTAR'],'Paschim Bardhaman':['PASCHIM BARDHAMAN'],'Hooghly':['HOOGHLY'],'Alipurduar':['ALIPURDUAR'],'Malda':['MALDAH'],'Murshidabad':['MURSHIDABAD']
  };
  return (map[c.district]||[U(c.district)]).includes(d)
}
function phcRows(){
  const src=referred.filter(x=>U(x.facility).startsWith('PHC'));
  let a=PHC.map(c=>{
    const q=uniqueFacilities(src.filter(x=>districtMatch(c,x))); const active=q.filter(z=>z.completed>0).length,active10=q.filter(z=>z.completed>=10).length,consult=q.reduce((s,z)=>s+z.completed,0); return {
      ...c,active,active10,consult
    }
  });
  a.forEach(x=>{
    x.activePct=pct(x.active,x.operational); x.avg=Math.ceil(pct(x.consult,x.operational))
  });
  const r1=denseRank(a,x=>x.activePct),r2=denseRank(a,x=>x.avg);
  a.forEach((x,i)=>{
    x.rankActive=r1[i]; x.rankConsult=r2[i]; x.composite=(x.rankActive+x.rankConsult)/2
  });
  const r3=denseRank(a,x=>x.composite,'asc');
  a.forEach((x,i)=>x.overall=r3[i]);
  return a.sort((x,y)=>x.overall-y.overall||x.sl-y.sl)
}
function doctorMatch(user,name){
  const u=U(user),parts=U(name).split(/\s+/).filter(p=>p.length>2);
  return parts.every(p=>u.includes(p))
}
function sbRows(){
  return SB.map(name=>({
    name,value:received.filter(x=>doctorMatch(x.user,name)).reduce((s,x)=>s+x.completed,0)
  })).sort((a,b)=>b.value-a.value||a.name.localeCompare(b.name))
}
function tokenMatch(user,token){
  return cleanUser(user).includes(cleanUser(token))
}
function mchRows(){
  const hubs=['HUB CENTRAL POOL','HUB PAEDIATRICS','HUB TUBERCULOSIS'];
  let a=MCH.map(c=>{
    const q=received.filter(x=>hubs.includes(U(x.facility))&&tokenMatch(x.user,c.token)); const doctors=q.length; const actual=q.filter(x=>['HUB CENTRAL POOL','HUB PAEDIATRICS'].includes(U(x.facility))).reduce((s,x)=>s+x.completed,0); return {
      ...c,doctors,actual,deficit:Math.max(0,pct(c.expected-actual,c.expected))
    }
  });
  const ranks=denseRank(a,x=>x.deficit,'asc');
  a.forEach((x,i)=>x.rank=ranks[i]);
  return a.sort((x,y)=>x.rank-y.rank||x.sl-y.sl)
}
function uniqueCount(rows,pred=r=>true){
  return uniqueFacilities(rows).filter(pred).length
}
function summaryRows(phc){
  const sc=referred.filter(x=>U(x.facility).startsWith('SC')),up=referred.filter(x=>U(x.facility).startsWith('UPHC')),uph=received.filter(x=>U(x.facility).startsWith('HUB UPHC')),aamh=received.filter(x=>!U(x.facility).startsWith('HUB UPHC'));
  const scU=uniqueFacilities(sc),upU=uniqueFacilities(up),phcU=uniqueFacilities(referred.filter(x=>U(x.facility).startsWith('PHC')));
  const a={
    sl:1,name:'AAM',operational:9808,logged:scU.filter(z=>z.completed>0).length,active:scU.filter(z=>z.completed>=10).length,expected:2118,doctors:[...new Set(aamh.filter(x=>x.completed>0).map(x=>cleanUser(x.user)))].length,spoke:scU.reduce((s,z)=>s+z.completed,0),hub:aamh.reduce((s,x)=>s+x.completed,0)
  };
  const p={
    sl:2,name:'AAM-PHC',operational:781,logged:phcU.filter(z=>z.completed>0).length,active:phcU.filter(z=>z.completed>=10).length,expected:null,doctors:null,spoke:phc.reduce((s,x)=>s+x.consult,0),hub:null
  };
  const u={
    sl:3,name:'AAM-UPHC',operational:456,logged:upU.filter(z=>z.completed>0).length,active:upU.filter(z=>z.completed>=10).length,expected:91,doctors:[...new Set(uph.filter(x=>x.completed>0).map(x=>cleanUser(x.user)))].length,spoke:upU.reduce((s,z)=>s+z.completed,0),hub:uph.reduce((s,x)=>s+x.completed,0)
  };
  [a,p,u].forEach(x=>{
    x.activePct=pct(x.active,x.operational); x.avail=x.expected?pct(x.doctors,x.expected):null; x.perSpoke=Math.round(pct(x.spoke,x.operational)); x.perDoctor=x.doctors?Math.round(pct(x.hub,x.doctors)):null
  });
  const w={
    operational:a.operational+p.operational+u.operational,logged:a.logged+p.logged+u.logged,active:a.active+p.active+u.active,expected:a.expected+u.expected,doctors:a.doctors+u.doctors,spoke:a.spoke+p.spoke+u.spoke,hub:a.hub+u.hub
  };
  w.activePct=pct(w.active,w.operational);
  w.avail=pct(w.doctors,w.expected);
  w.perSpoke=Math.round(pct(w.spoke,w.operational));
  w.perDoctor=Math.round(pct(w.hub,w.doctors));
  return {
    rows:[a,p,u],wb:w,notes:{
      mchOther:aamh.filter(x=>U(x.district)!=='KOLKATA').reduce((s,x)=>s+x.completed,0),kolkataHub:aamh.filter(x=>U(x.district)==='KOLKATA').reduce((s,x)=>s+x.completed,0),others:referred.filter(x=>!U(x.facility).startsWith('SC')&&!U(x.facility).startsWith('PHC')&&!U(x.facility).startsWith('UPHC')).reduce((s,x)=>s+x.completed,0)
    }
  }
}
function topPhcUsers(){
  return referred.filter(x=>U(x.facility).startsWith('PHC')).sort((a,b)=>b.completed-a.completed).slice(0,3)
}
function mchTopDoctors(){
  return received.filter(x=>U(x.district)==='KOLKATA'&&['HUB CENTRAL POOL','HUB PAEDIATRICS'].includes(U(x.facility))&&!/\bSB\s*$/i.test(String(x.user).trim())).sort((a,b)=>b.completed-a.completed).slice(0,3)
}
function build(){
  const phc=phcRows();
  reports={
    phc,sb:sbRows(),mch:mchRows(),summary:summaryRows(phc)
  }
}
$('processBtn').onclick=async()=>{
  try{
    status('Reading uploaded summaries and applying approved XLSM calculation logic…');
    received=await readRows($('receivedFile').files[0]);
    referred=await readRows($('referredFile').files[0]);
    build();
    render();
    $('exportBtn').disabled=false;
    status(`Processed successfully · Received: ${received.length.toLocaleString()} rows · Referred: ${referred.length.toLocaleString()} rows`,'ok')
  }
  catch(e){
    console.error(e);
    status('Processing failed: '+e.message,'err')
  }
};
$('resetBtn').onclick=()=>{
  received=[];
  referred=[];
  reports={
  };
  active='phc';
  $('receivedFile').value='';
  $('referredFile').value='';
  $('receivedName').textContent='No file selected';
  $('referredName').textContent='No file selected';
  $('processBtn').disabled=true;
  $('exportBtn').disabled=true;
  $('reportArea').innerHTML='';
  ['kpiPhc','kpiActive','kpiSb','kpiMch','kpiWb'].forEach(id=>$(id).textContent='—');
  $('kpiPhcSub').textContent='% of consolidated consultations';
  $('kpiActiveSub').textContent='Deficit out of 781 operational PHCs';
  $('kpiSbSub').textContent='% of consolidated consultations';
  $('kpiMchSub').textContent='% of consolidated consultations';
  $('kpiWbSub').textContent="Today's Consolidated Completed Consultations";
  status('Portal reset successfully. Upload fresh source files to process another report.');
};
function dateText(){
  const d=$('reportDate').value;
  return d?new Date(d+'T00:00:00').toLocaleDateString('en-GB',{
    day:'2-digit',month:'long',year:'numeric'
  }):'—'
}
function zoneClass(rank){
  return rank<=7?'row-good':rank<=14?'row-mid':'row-bad'
}
// MCH colour coding: 0% deficit = green; remaining rows through rank 10 = orange; rank >10 = pink.
function mchZoneClass(x){
  return Number(x.deficit)<=1e-9?'row-good':Number(x.rank)<=10?'row-mid':'row-bad'
}
function reportKpis(items){
  return `<div class="report-kpis ${items.length>4?'six':''}">${items.map(([icon,l,v,c=''])=>{
    const top3=/^TOP 3/i.test(String(l).trim());
    return `<div class="report-kpi ${c}${top3?' top3-kpi':''}"><div class="report-kpi-icon">${icon}</div><span>${l}</span><b>${v}</b></div>`;
  }).join('')}</div>`
}
function shell(t,b){
  return `<div class="report-shell"><div class="report-toolbar"><button class="png" onclick="exportCurrentPNG()">🖼 EXPORT PNG</button><button class="pdf" onclick="exportCurrentPDF()">📄 EXPORT PDF</button></div><div class="report-canvas report-${active}" id="reportCanvas"><div class="report-title"><span class="title-main">${t}</span><span class="date">${dateText()}</span><span class="time">5:00 PM</span></div>${b}<div class="report-meta"> Generated Succesfully • ${dateText()} • 5:00 PM</div></div></div>`
}
function render(){
  const p=reports.phc,s=reports.sb,m=reports.mch;
  const phc=p.reduce((a,x)=>a+x.consult,0),sb=s.reduce((a,x)=>a+x.value,0),mch=m.reduce((a,x)=>a+x.actual,0);
  const receivedTotal=received.reduce((a,x)=>a+x.completed,0),referredTotal=referred.reduce((a,x)=>a+x.completed,0),wb=receivedTotal||referredTotal,logged=p.reduce((a,x)=>a+x.active,0);
  $('kpiPhc').textContent=fmt(phc);
  $('kpiPhcSub').textContent=`${wb?Math.round(phc/wb*100):0}% of total completed consultations`;
  $('kpiActive').textContent=fmt(logged);
  $('kpiActiveSub').textContent=`Deficit ${Math.round((781-logged)/781*100)}% (${fmt(781-logged)} of 781)`;
  $('kpiSb').textContent=fmt(sb);
  $('kpiSbSub').textContent=`${wb?Math.round(sb/wb*100):0}% of total completed consultations`;
  $('kpiMch').textContent=fmt(mch);
  $('kpiMchSub').textContent=`${wb?Math.round(mch/wb*100):0}% of total completed consultations`;
  $('kpiWb').textContent=fmt(wb);
  $('kpiWbSub').textContent="Today's Consolidated Completed Consultations";
  document.querySelectorAll('.tabs button').forEach(b=>{
    b.classList.toggle('active',b.dataset.tab===active); b.onclick=()=>{
      active=b.dataset.tab; document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); renderReport()
    }
  });
  renderReport()
}
function renderReport(){
  if(!reports.phc)return;
  $('reportArea').innerHTML=active==='phc'?renderPhc():active==='sb'?renderSb():active==='mch'?renderMch():renderSummary()
}
function renderPhc(){
  const a=reports.phc,
      op=a.reduce((s,x)=>s+x.operational,0),
      ac=a.reduce((s,x)=>s+x.active,0),
      co=a.reduce((s,x)=>s+x.consult,0),
      bestDistrict=[...a].sort((x,y)=>y.consult-x.consult)[0],
      best=bestDistrict
          ? `${bestDistrict.district}<em>${fmt(bestDistrict.consult)} Consultations</em>`
          : '—',
      top=topPhcUsers();
  const topHtml=top.map(x=>`${x.user}<em>${/^PHC/i.test(x.facility)?x.facility:'PHC '+x.facility} • ${fmt(x.completed)}</em>`).join('<br>');
  return shell('TELEMEDICINE :: DAILY AAM-PHC PERFORMANCE REPORT',reportKpis([['📈','TOTAL CONSULTATIONS',fmt(co),'saffron'],['✓','ACTIVE AAM-PHCS',`${fmt(ac)} <small>(${Math.round(ac/op*100)}%)</small>`,'green'],['🏆','TOP 3 PHC SPOKE USERS',topHtml,''],['📍','Best District with Highest Consultation Today',best,'green']])+`<table class="phc-table"><thead><tr><th rowspan="2" class="blue">Sl. No.</th><th rowspan="2" class="blue">DISTRICTS</th><th colspan="4" class="orange">ACTIVE SPOKES</th><th colspan="3" class="darkgreen">PERFORMANCE ANALYSIS<br>AAM-PHCs Performance</th><th rowspan="2" class="blue">Overall Rank</th></tr><tr><th class="blue">No of Operational<br>AAM-PHCs [A]</th><th class="blue">**No of active<br>AAM-PHCs [Z]</th><th class="blue">% Active AAM-PHCs<br>[Z/A×100]</th><th class="blue">Rank</th><th class="blue">AAM-PHCs Total<br>Consultations [E]</th><th class="blue">Consultations per<br>Operational AAM-PHC</th><th class="blue">Rank</th></tr></thead><tbody>${a.map((x,i)=>`<tr class="${zoneClass(x.overall)}"><td>${
    i+1
  }
  </td><td class="district">${
    x.district
  }
  </td><td>${
    x.operational
  }
  </td><td>${
    x.active
  }
  </td><td>${
    Math.round(x.activePct*100)
  }
  %</td><td>${
    x.rankActive
  }
  </td><td>${
    fmt(x.consult)
  }
  </td><td>${
    x.avg
  }
  </td><td>${
    x.rankConsult
  }
  </td><td>${
    x.overall
  }
  </td></tr>`).join('')}<tr class="total-row"><td colspan="2">WEST BENGAL</td><td>${op}</td><td>${ac}</td><td>${Math.round(ac/op*100)}%</td><td>#N/A</td><td>${fmt(co)}</td><td>${Math.ceil(co/op)}</td><td>#</td><td>#</td></tr></tbody></table>`)
}
function sbc(v){
  return v===0?'row-leave':v>=181?'row-good':v>=100?'row-mid':'row-bad'
}
function renderSb(){
  const a=reports.sb,L=a.slice(0,9),R=a.slice(9),total=a.reduce((s,x)=>s+x.value,0),top=a[0]||{
  },low=[...a].filter(x=>x.value>0).sort((x,y)=>x.value-y.value)[0]||{
  };
  const high=a.filter(x=>x.value>180).length,mid=a.filter(x=>x.value>=100&&x.value<=180).length,lowC=a.filter(x=>x.value>0&&x.value<100).length,zero=a.filter(x=>x.value===0).length;
  const tbl=(q,start,right=false)=>`<table class="sb-table${right?' sb-table-right':''}"><thead><tr class="purple"><th>Sl. No.</th><th>Doctor Name</th><th>Today's Consultation</th></tr></thead><tbody>${q.map((x,i)=>`<tr class="${sbc(x.value)}"><td>${
    start+i
  }
  </td><td class="doctor">Dr. ${
    x.name
  }
  </td><td>${
    fmt(x.value)
  }
  </td></tr>`).join('')}</tbody><tfoot><tr class="sb-total"><td colspan="2">Total</td><td>${fmt(q.reduce((s,x)=>s+x.value,0))}</td></tr></tfoot></table>`;
  const breakup=`<div class="report-kpi-breakup green"><div class="report-kpi-breakup-title"><div class="report-kpi-icon">▦</div><span>CONSULTATION COUNT BREAK-UP</span></div><div class="breakup-grid"><div class="breakup-item breakup-high"><div class="breakup-icon">↗</div><div><strong>&gt;180</strong><small>Consultations</small></div><b>${high}</b></div><div class="breakup-item breakup-mid"><div class="breakup-icon">↔</div><div><strong>100–180</strong><small>Consultations</small></div><b>${mid}</b></div><div class="breakup-item breakup-low"><div class="breakup-icon">↘</div><div><strong>&lt;100</strong><small>Consultations</small></div><b>${lowC}</b></div><div class="breakup-item breakup-zero"><div class="breakup-icon">×</div><div><strong>0</strong><small>Consultations</small></div><b>${zero}</b></div></div><div class="breakup-zero-total"><span>✓</span><strong>0 Consultations : ${zero}</strong></div></div>`;
  return shell('TELEMEDICINE : Daily Consultations Report of MOs Telemedicine Cell, Swasthya Bhavan',`<div class="report-kpis sb-report-kpis"><div class="report-kpi green"><div class="report-kpi-icon">📊</div><span>TOTAL CONSULTATIONS</span><b>${fmt(total)}</b></div><div class="report-kpi saffron"><div class="report-kpi-icon">🏆</div><span>TOP MEDICAL OFFICER</span><b>Dr. ${top.name||'—'}<em>${fmt(top.value||0)} Consultations Today</em></b></div><div class="report-kpi blue-kpi"><div class="report-kpi-icon">📉</div><span>MEDICAL OFFICER WITH LOWEST CONSULTATIONS TODAY</span><b>Dr. ${low.name||'—'}<em>${fmt(low.value||0)} Consultations Today</em></b></div>${breakup}</div>`+`<div class="sb-wrap"><div class="sb-title"><span>DAILY SPECIALIST DOCTOR PERFORMANCE</span><small>${dateText()} • 5:00 PM</small></div>${tbl(L,1,false)}${tbl(R,10,true)}<div class="sb-grand"><span>Total Consultations</span><span>${fmt(total)}</span></div><div class="legend"><div class="legend-leave">On Leave / 0 Consultation</div><div class="legend-mid">Consultation between 100 to 180</div><div class="legend-good">Consultation above 180</div><div class="legend-bad">Consultation below 100</div></div></div>`)
}
function renderMch(){
  const a=reports.mch,ex=a.reduce((s,x)=>s+x.expected,0),doc=a.reduce((s,x)=>s+x.doctors,0),act=a.reduce((s,x)=>s+x.actual,0),contrib=a.filter(x=>x.actual>0).length;
  const topDocs=mchTopDoctors().map(x=>`${x.user}<em>${fmt(x.completed)}</em>`).join('<br>');
  const mostDoc=[...a].sort((x,y)=>y.doctors-x.doctors)[0]||{
  },mostCon=[...a].sort((x,y)=>y.actual-x.actual)[0]||{
  };
  const non=a.filter(x=>x.deficit>=.999);
  let rows='';
  a.forEach((x,i)=>{
    const firstNon=non.length&&x===non[0]; rows+=`<tr class="${mchZoneClass(x)}"><td>${x.rank}</td><td>${x.district}</td><td>${x.hospital}</td><td>${x.expected}</td><td>${x.doctors}</td><td>${fmt(x.actual)}</td><td>${Math.max(0,Math.round(x.deficit*100))}%</td>${firstNon?`<td class="remark merged-remark" rowspan="${non.length}">Not contributing in Telemedicine initiative; Nodal Officer, TM of this Hospital is requested to take necessary action</td>`:x.deficit>=.999?'':`<td class="remark">${
      x.rank
    }
    </td>`}</tr>`
  });
  return shell('TELEMEDICINE : 27 MCH DAILY PERFORMANCE REPORT',reportKpis([['👨‍⚕️','TOP 3 MCH DOCTORS',topDocs,'green'],['👥','BEST MCH TODAY WITH MOST ACTIVE DOCTORS',`${mostDoc.hospital||'—'} • ${mostDoc.doctors||0}`,''],['🏆','BEST MCH TODAY WITH HIGHEST CONSULTATIONS',`${mostCon.hospital||'—'} • ${fmt(mostCon.actual||0)}`,'saffron'],['🏥','CONTRIBUTING MCH',`${contrib}/27`,'green'],['📊','TOTAL CONSULTATIONS FROM MCH TODAY',fmt(act),''],['🩺','TOTAL ACTIVE DOCTORS FROM MCH TODAY',fmt(doc),'saffron']])+`<table class="mch-table"><thead><tr class="blue2"><th>Sl No.</th><th>District</th><th>Hospital Name</th><th>*Expected Teleconsultations</th><th>Number of Doctors</th><th>Actual Teleconsultations</th><th>Deficit / Surplus Consultations</th><th>Rank</th></tr></thead><tbody>${rows}<tr class="total-row"><td colspan="3">Total Consultations</td><td>${fmt(ex)}</td><td>${doc}</td><td>${fmt(act)}</td><td>${Math.max(0,Math.round((ex-act)/ex*100))}%</td><td></td></tr></tbody></table>`)
}
function renderSummary(){
  const s=reports.summary,w=s.wb,row=x=>`<tr><td>${x.sl}</td><td class="facility">${x.name}</td><td>${fmt(x.operational)}</td><td>${fmt(x.logged)}</td><td>${fmt(x.active)}</td><td>${Math.round(x.activePct*100)}%</td><td>${x.expected??''}</td><td>${x.doctors??''}</td><td>${x.avail!=null?Math.round(x.avail*100)+'%':''}</td><td>${fmt(x.spoke)}</td><td>${fmt(x.perSpoke)}</td><td>${x.hub!=null?fmt(x.hub):''}</td><td>${x.perDoctor!=null?fmt(x.perDoctor):''}</td></tr>`;
  return shell('TELEMEDICINE :: STATE REPORT',`<table class="summary-table"><thead><tr><th rowspan="2" class="blue">Sl. No.</th><th rowspan="2" class="blue">Health Facilities</th><th colspan="4" class="orange">ACTIVE SPOKES</th><th colspan="3" class="blue">DOCTORS AVAILABILITY</th><th colspan="4" class="darkgreen">PERFORMANCE ANALYSIS</th></tr><tr><th class="blue">No of Operational<br>Spokes [A]</th><th class="blue">Total No of<br>Spokes Logged in [B]</th><th class="blue">Active Spokes<br>(>=10) [C]</th><th class="blue">% Active Spoke<br>[C/A×100]</th><th class="blue">Expected Doctors<br>[C]</th><th class="blue">Active Doctors<br>[D]</th><th class="blue">% Availability<br>[D/C×100]</th><th class="blue">Spoke Total<br>Consultations [E]</th><th class="blue">No of consultations per<br>Operational Spoke</th><th class="blue">* HUB Total<br>Consultations [F]</th><th class="blue">No of consultations<br>per Active Doctor</th></tr></thead><tbody>${s.rows.map(row).join('')}<tr class="total-row"><td colspan="2">WEST BENGAL</td><td>${fmt(w.operational)}</td><td>${fmt(w.logged)}</td><td>${fmt(w.active)}</td><td>${Math.round(w.activePct*100)}%</td><td>${Math.round(w.expected)}</td><td>${fmt(w.doctors)}</td><td>${Math.round(w.avail*100)}%</td><td>${fmt(w.spoke)}</td><td>${fmt(w.perSpoke)}</td><td>${fmt(w.hub)}</td><td>${fmt(w.perDoctor)}</td></tr><tr class="note"><td>NOTE</td><td>* Hub Performance :</td><td colspan="2">${fmt(s.notes.mchOther)}</td><td colspan="5">Number of consultation done by MCH, State Telemedicine Center and Super Specialist Center</td><td colspan="2">${fmt(s.notes.kolkataHub)}</td><td>Others Consultation (Correctional Home, Cardio, Neuro etc.)</td><td>${fmt(s.notes.others)}</td></tr></tbody></table><div class="footnote">** Active Spokes : Completed at least ten consultation Vide Memo No. HFW/NCD/462/2021 dated 8th October 2021</div>`)
}
async function buildExportCanvas(){
  const source=$('reportCanvas');
  if(!source) throw new Error('Report section not found.');

  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));

  const clone=source.cloneNode(true);
  clone.id='reportCanvasExport';
  clone.classList.add('export-capture','export-large');

  const wrapper=document.createElement('div');
  wrapper.className='export-capture-wrapper';
  wrapper.style.position='fixed';
  wrapper.style.left='-100000px';
  wrapper.style.top='0';
  wrapper.style.width='2400px';
  wrapper.style.maxWidth='none';
  wrapper.style.minWidth='2400px';
  wrapper.style.background='#fff';
  wrapper.style.overflow='visible';
  wrapper.style.zIndex='-1';
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  // Never let dashboard scroll containers or responsive media rules
  // clip the report during export.
  clone.querySelectorAll('*').forEach(el=>{
    el.style.maxHeight='none';
    el.style.overflow='visible';
  });
  clone.style.width='2400px';
  clone.style.minWidth='2400px';
  clone.style.maxWidth='none';
  clone.style.transform='none';

  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));

  const width=Math.ceil(clone.scrollWidth);
  const height=Math.ceil(clone.scrollHeight);
  if(!width || !height) throw new Error('The complete report is not available for export.');

  try{
    return await html2canvas(clone,{
      scale:2.5,
      useCORS:true,
      allowTaint:false,
      backgroundColor:'#ffffff',
      logging:false,
      imageTimeout:20000,
      width,
      height,
      windowWidth:Math.max(width,2400),
      windowHeight:height,
      scrollX:0,
      scrollY:0
    });
  } finally {
    wrapper.remove();
  }
}

async function exportCurrentPNG(){
  const node=$('reportCanvas');
  if(!node)return;
  const btn=document.querySelector('.report-toolbar .png'),old=btn.textContent;
  btn.textContent='⏳ PREPARING HD...';
  try{
    const canvas=await buildExportCanvas();
    const a=document.createElement('a');
    a.download=`${active.toUpperCase()}_Report_${$('reportDate').value}_HD.png`;
    a.href=canvas.toDataURL('image/png');
    a.click();
  }
  catch(e){
    console.error(e);
    alert('PNG export failed: '+e.message);
  }
  finally{
    btn.textContent=old;
  }
}

async function exportCurrentPDF(){
  const node=$('reportCanvas');
  if(!node)return;
  const btn=document.querySelector('.report-toolbar .pdf'),old=btn.textContent;
  btn.textContent='⏳ PREPARING HD PDF...';
  try{
    const canvas=await buildExportCanvas();
    const {jsPDF}=window.jspdf;
    const pdf=new jsPDF({
      orientation:'landscape',
      unit:'mm',
      format:'a3',
      compress:true,
      putOnlyUsedFonts:true
    });

    // Same export principle as the AAM-HWC dashboard:
    // the complete dashboard is rendered first, then fitted as one
    // image on a single A3 landscape page. No table row slicing and no artificial margins.
    const pageW=420,pageH=297,margin=0;
    const usableW=pageW,usableH=pageH;
    const ratio=canvas.width/canvas.height;
    let imgW=usableW;
    let imgH=imgW/ratio;
    if(imgH>usableH){
      imgH=usableH;
      imgW=imgH*ratio;
    }
    const x=(pageW-imgW)/2;
    const y=(pageH-imgH)/2;
    const image=canvas.toDataURL('image/jpeg',0.985);
    pdf.addImage(image,'JPEG',x,y,imgW,imgH,undefined,'FAST');
    pdf.save(`${active.toUpperCase()}_Report_${$('reportDate').value}_HD.pdf`);
  }
  catch(e){
    console.error(e);
    alert('PDF export failed: '+e.message);
  }
  finally{
    btn.textContent=old;
  }
}
function setCellStyle(ws,addr,fill,bold=false,align='center',fontSize=10,fontColor='111111'){
  if(!ws[addr])return;
  ws[addr].s={
    font:{
      name:'Arial',sz:fontSize,bold,color:{
        rgb:fontColor
      }
    },fill:{
      patternType:'solid',fgColor:{
        rgb:fill
      }
    },alignment:{
      horizontal:align,vertical:'center',wrapText:true
    },border:{
      top:{
        style:'thin',color:{
          rgb:'222222'
        }
      },bottom:{
        style:'thin',color:{
          rgb:'222222'
        }
      },left:{
        style:'thin',color:{
          rgb:'222222'
        }
      },right:{
        style:'thin',color:{
          rgb:'222222'
        }
      }
    }
  }
}
function styleSheet(ws,range,opts={
}){
  const R=XLSX.utils.decode_range(range);
  for(let r=R.s.r; r<=R.e.r; r++)for(let c=R.s.c; c<=R.e.c; c++)setCellStyle(ws,XLSX.utils.encode_cell({
    r,c
  }),opts.fill||'FFFFFF',opts.bold||false,opts.align||'center',opts.fontSize||10,opts.fontColor||'111111')
}
function makeSheet(aoa,widths){
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=widths.map(w=>({
    wch:w
  }));
  return ws
}
$('exportBtn').onclick=()=>{
  const wb=XLSX.utils.book_new(),d=dateText(),p=reports.phc,op=p.reduce((s,x)=>s+x.operational,0),ac=p.reduce((s,x)=>s+x.active,0),co=p.reduce((s,x)=>s+x.consult,0);
  let a=[['TELEMEDICINE :: DAILY AAM-PHC PERFORMANCE REPORT','','','','','','','','',''],['REPORT FOR',d,'','','','','','','',''],['Sl. No.','DISTRICTS','No of Operational AAM-PHCs [A]','No of active AAM-PHCs','% Active AAM-PHCs','Rank','AAM-PHCs Total Consultation [E]','Consultations per Operational AAM-PHC','Rank','Overall Rank'],...p.map((x,i)=>[i+1,x.district,x.operational,x.active,x.activePct,x.rankActive,x.consult,x.avg,x.rankConsult,x.overall]),['WEST BENGAL','',op,ac,ac/op,'#N/A',co,Math.ceil(co/op),'#','#']];
  let ws=makeSheet(a,[8,24,14,14,14,8,15,17,8,12]);
  styleSheet(ws,'A1:J1',{
    fill:'F4F4F0',bold:true,fontSize:14
  });
  styleSheet(ws,'A2:J2',{
    fill:'D8E7F2',bold:true,fontSize:11
  });
  styleSheet(ws,'A3:J3',{
    fill:'6F91B2',bold:true,fontSize:10
  });
  // Keep the PHC report date visible in Excel: A2 contains the label and B2 contains the date.
  // Do NOT merge A2:B2 because SheetJS preserves only the top-left cell of a merge.
  ws['!merges']=[XLSX.utils.decode_range('A1:J1'),XLSX.utils.decode_range(`A${a.length}:B${a.length}`)];
  ws['B2'].s={...(ws['B2']?.s||{}), alignment:{horizontal:'left',vertical:'center'}, font:{name:'Aptos',sz:11,bold:true,color:{rgb:'111111'}}};
  for(let r=4; r<4+p.length; r++){
    const fill=zoneClass(p[r-4].overall)==='row-good'?'B8D9BD':zoneClass(p[r-4].overall)==='row-mid'?'EAD9CA':'F69295';
    styleSheet(ws,`A${r}:J${r}`,{
      fill,bold:true,fontSize:10,fontColor:fill==='F69295'?'FFFFFF':'111111'
    })
  }
  styleSheet(ws,`A${a.length}:J${a.length}`,{
    fill:'9BB293',bold:true,fontSize:12
  });
  for(let r=4; r<=a.length; r++)if(ws['E'+r])ws['E'+r].z='0%';
  XLSX.utils.book_append_sheet(wb,ws,'Phc_Date');
  const sb=reports.sb;
  let sbA=[['TELEMEDICINE : Daily Consultations Report of MOs Telemedicine Cell, Swasthaya Bhavan','',''],[d,'',''],['Sl. No.','Doctor Name',"Today's Consultation"],...sb.map((x,i)=>[i+1,'Dr. '+x.name,x.value]),['Total','',sb.reduce((s,x)=>s+x.value,0)]];
  ws=makeSheet(sbA,[8,34,24]);
  styleSheet(ws,'A1:C1',{
    fill:'BFD7E3',bold:true,fontSize:14
  });
  styleSheet(ws,'A2:C2',{
    fill:'BFD7E3',bold:true,fontSize:11
  });
  styleSheet(ws,'A3:C3',{
    fill:'C58BC0',bold:true,fontSize:10
  });
  ws['!merges']=[XLSX.utils.decode_range('A1:C1'),XLSX.utils.decode_range('A2:C2'),XLSX.utils.decode_range(`A${sbA.length}:B${sbA.length}`)];
  for(let r=4; r<4+sb.length; r++){
    let fill=sb[r-4].value===0?'FFF9A8':sb[r-4].value>=181?'B8D9BD':sb[r-4].value>=100?'FBE7D5':'F69295';
    styleSheet(ws,`A${r}:C${r}`,{
      fill,bold:true,fontColor:fill==='F69295'?'FFFFFF':'111111'
    })
  }
  styleSheet(ws,`A${sbA.length}:C${sbA.length}`,{
    fill:'BCD4DF',bold:true,fontSize:12
  });
  XLSX.utils.book_append_sheet(wb,ws,'SB_Date');
  const m=reports.mch,ex=m.reduce((s,x)=>s+x.expected,0),doc=m.reduce((s,x)=>s+x.doctors,0),act=m.reduce((s,x)=>s+x.actual,0);
  const mchRemark='Not contributing in Telemedicine initiative; Nodal Officer, TM of this Hospital is requested to take necessary action';
  const mchNonStart=m.findIndex(x=>Number(x.deficit)>=.999);
  const mchNonCount=mchNonStart>=0?m.length-mchNonStart:0;
  let mA=[['TELEMEDICINE : 27 MCH Daily Performance Report','','','','','','',''],[d,'','','','','','',''],['Sl No.','District','Hospital Name','*Expected Teleconsultations','Number of Doctors','Actual Teleconsultations','Deficit / Surplus Consultations','Rank / Remarks'],...m.map((x,i)=>[x.rank,x.district,x.hospital,x.expected,x.doctors,x.actual,Math.max(0,x.deficit),Number(x.deficit)>=.999?(i===mchNonStart?mchRemark:''):x.rank]),['Total Consultations','','',ex,doc,act,(ex-act)/ex,'']];
  ws=makeSheet(mA,[7,18,32,15,14,15,16,40]);
  styleSheet(ws,'A1:H1',{
    fill:'BFD7E3',bold:true,fontSize:14
  });
  styleSheet(ws,'A2:H2',{
    fill:'BFD7E3',bold:true,fontSize:11
  });
  styleSheet(ws,'A3:H3',{
    fill:'17366A',bold:true,fontSize:10,fontColor:'FFFFFF'
  });
  // Merge the non-contributing MCH remark vertically in the Excel export, exactly like the dashboard table.
  ws['!merges']=[XLSX.utils.decode_range('A1:H1'),XLSX.utils.decode_range('A2:H2'),XLSX.utils.decode_range(`A${mA.length}:C${mA.length}`)];
  if(mchNonCount>1){
    const startRow=4+mchNonStart;
    const endRow=startRow+mchNonCount-1;
    ws['!merges'].push(XLSX.utils.decode_range(`H${startRow}:H${endRow}`));
    ws[`H${startRow}`]={...(ws[`H${startRow}`]||{}),v:mchRemark,t:'s'};
    for(let rr=startRow+1;rr<=endRow;rr++) delete ws[`H${rr}`];
  }
  for(let r=4; r<4+m.length; r++){
    let fill=mchZoneClass(m[r-4])==='row-good'?'B8D9BD':mchZoneClass(m[r-4])==='row-mid'?'EAD9CA':'F69295';
    styleSheet(ws,`A${r}:H${r}`,{
      fill,bold:true,fontSize:10,fontColor:fill==='F69295'?'FFFFFF':'111111'
    })
  }
  styleSheet(ws,`A${mA.length}:H${mA.length}`,{
    fill:'9BB293',bold:true,fontSize:12
  });
  for(let r=4; r<=mA.length; r++)if(ws['G'+r])ws['G'+r].z='0%';
  XLSX.utils.book_append_sheet(wb,ws,'Mch_Date');
  const s=reports.summary,w=s.wb;
  let st=[['TELEMEDICINE :: STATE REPORT','','','','','','','','','','','',''],['REPORT FOR',d,'','','','','','','','','','',''],['Sl. No.','Health Facilities','Operational [A]','Logged in [B]','Active (>=10) [C]','% Active','Expected Doctors','Active Doctors','% Availability','Spoke Total [E]','Per Operational Spoke','Hub Total [F]','Per Active Doctor'],...s.rows.map(x=>[x.sl,x.name,x.operational,x.logged,x.active,x.activePct,x.expected,x.doctors,x.avail,x.spoke,x.perSpoke,x.hub,x.perDoctor]),['WEST BENGAL','',w.operational,w.logged,w.active,w.activePct,Math.round(w.expected),w.doctors,w.avail,w.spoke,w.perSpoke,w.hub,w.perDoctor]];
  ws=makeSheet(st,[8,20,12,12,12,12,13,12,13,14,16,14,16]);
  styleSheet(ws,'A1:M1',{
    fill:'F4F4F0',bold:true,fontSize:14
  });
  styleSheet(ws,'A2:M2',{
    fill:'D8E7F2',bold:true,fontSize:11
  });
  styleSheet(ws,'A3:M3',{
    fill:'6F91B2',bold:true,fontSize:10
  });
  ws['!merges']=[XLSX.utils.decode_range('A1:M1'),XLSX.utils.decode_range('A2:B2'),XLSX.utils.decode_range(`A${st.length}:B${st.length}`)];
  styleSheet(ws,`A${st.length}:M${st.length}`,{
    fill:'9BB293',bold:true,fontSize:12
  });
  for(let r=4; r<=st.length; r++)for(let c of ['F','I'])if(ws[c+r])ws[c+r].z='0%';
  XLSX.utils.book_append_sheet(wb,ws,'Status_Date');
  XLSX.writeFile(wb,'DailyReport_'+$('reportDate').value.replaceAll('-','')+'.xlsx')
};
function updateLive(){
  const n=new Date();
  $('liveDate').textContent=n.toLocaleDateString('en-GB',{
    day:'2-digit',month:'short',year:'numeric'
  });
  $('liveTime').textContent=n.toLocaleTimeString('en-IN',{
    hour12:false
  });
}
updateLive();
setInterval(updateLive,1000);
