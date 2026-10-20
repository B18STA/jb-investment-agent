"use client";
import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const holdings = [
  {ticker:"MSFT", name:"Microsoft", value:2829.55, jb:88, winston:77, action:"Hold / Build selectively"},
  {ticker:"PWR", name:"Quanta Services", value:7043.16, jb:87, winston:59, action:"Review disagreement"},
  {ticker:"WPM", name:"Wheaton Precious Metals", value:4926.21, jb:84, winston:71, action:"Hold"},
];
const chart = [
  {d:"1",p:100},{d:"2",p:102},{d:"3",p:101},{d:"4",p:105},{d:"5",p:107},{d:"6",p:106},{d:"7",p:110},{d:"8",p:112},{d:"9",p:111},{d:"10",p:115}
];
const winston:any = {
  MSFT:{name:"Microsoft Corporation",score:77,quality:"28/30",growth:"19/20",cash:"10/10",valuation:"7/10"},
  PWR:{name:"Quanta Services",score:59,quality:"13/30",growth:"20/20",cash:"7/10",valuation:"5/10"},
  WPM:{name:"Wheaton Precious Metals",score:71,quality:"27/30",growth:"19/20",cash:"6/10",valuation:"5/10"}
};

export default function Home(){
  const [tab,setTab]=useState("dashboard");
  const [ticker,setTicker]=useState("MSFT");
  const [result,setResult]=useState(winston.MSFT);
  const holding=holdings.find(h=>h.ticker===ticker);
  const gap=holding&&result?holding.jb-result.score:null;
  async function askAgent(){
    const r=await fetch('/api/agent',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ticker})});
    const j=await r.json(); alert(j.message);
  }
  return <main className="shell">
    <div className="eyebrow">JAMES BIBBEY INVESTMENT OPERATING SYSTEM</div>
    <h1 className="title">JB Investment Agent</h1>
    <p className="muted">Deployment-ready starter with portfolio, Winston comparison, chart-analysis shell and AI endpoint.</p>
    <section className="grid kpis">
      {[['Portfolio','£305,151'],['Invested','£159,564'],['Cash','£145,587'],['Status','Starter online']].map(x=><div className="card" key={x[0]}><div className="muted">{x[0]}</div><div className="value">{x[1]}</div></div>)}
    </section>
    <div className="tabs">{['dashboard','portfolio','charts','winston','agent'].map(x=><button key={x} className={'tab '+(tab===x?'active':'')} onClick={()=>setTab(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</div>
    {tab==='dashboard'&&<section className="grid two"><div className="card"><h2>Starter status</h2><p>Front end: working</p><p>Market endpoint: demo shell</p><p>Chart engine: demonstration data</p><p>AI endpoint: safe placeholder until OPENAI_API_KEY is added</p><div className="notice">No broker execution. Human approval remains mandatory.</div></div><div className="card"><h2>Next build stages</h2><ol><li>Deploy starter</li><li>Add live OHLCV</li><li>Calculate technical indicators</li><li>Add AI analysis</li><li>Add authentication</li></ol></div></section>}
    {tab==='portfolio'&&<div className="card"><h2>Portfolio sample</h2><table className="table"><thead><tr><th>Ticker</th><th>Value</th><th>JB</th><th>Winston</th><th>Action</th></tr></thead><tbody>{holdings.map(h=><tr key={h.ticker}><td>{h.ticker}<div className="muted">{h.name}</div></td><td>£{h.value.toLocaleString()}</td><td>{h.jb}</td><td>{h.winston}</td><td>{h.action}</td></tr>)}</tbody></table></div>}
    {tab==='charts'&&<div className="grid two"><div className="card"><h2>Chart-analysis starter</h2><div style={{height:340}}><ResponsiveContainer><LineChart data={chart}><CartesianGrid stroke="#233044"/><XAxis dataKey="d"/><YAxis domain={['dataMin - 2','dataMax + 2']}/><Tooltip/><Line dataKey="p" stroke="#10b981" strokeWidth={3} dot={false}/></LineChart></ResponsiveContainer></div></div><div className="card"><h2>Technical read</h2><p><b>Trend:</b> Bullish demonstration</p><p><b>Momentum:</b> Positive demonstration</p><p><b>Support:</b> 106</p><p><b>Resistance:</b> 115</p><p className="muted">These are synthetic starter values, not live investment signals.</p></div></div>}
    {tab==='winston'&&<div className="grid two"><div className="card"><h2>Winston lookup</h2><div className="row"><input className="input" value={ticker} onChange={e=>setTicker(e.target.value.toUpperCase())}/><button className="button primary" onClick={()=>setResult(winston[ticker]||null)}>Lookup</button></div>{result?<><h3>{result.name}</h3><div className="score">{result.score}<small>/100</small></div><div className="bars"><p>Quality {result.quality}</p><p>Growth {result.growth}</p><p>Cash flow {result.cash}</p><p>Valuation {result.valuation}</p></div></>:<p className="notice">No cached starter record.</p>}</div><div className="card"><h2>JB comparison</h2>{result&&holding?<><p>JB Framework: <b>{holding.jb}/100</b></p><p>Winston: <b>{result.score}/100</b></p><p>Difference: <b>{gap!==null&&gap>=0?'+':''}{gap}</b></p><span className="badge">{Math.abs(gap||0)>=20?'Major disagreement':Math.abs(gap||0)>=10?'Review required':'Broadly aligned'}</span></>:<p>Lookup a held ticker.</p>}</div></div>}
    {tab==='agent'&&<div className="card"><h2>AI agent starter</h2><p>The endpoint is installed but remains in safe starter mode until a server-side AI key is added.</p><button className="button primary" onClick={askAgent}>Test agent endpoint</button></div>}
  </main>
}
