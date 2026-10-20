const ALLOWED=new Set(["MSFT","PWR","WPM","TSM","META","IBN","MELI","V","NVS"]);
export async function GET(request:Request){
  const symbol=new URL(request.url).searchParams.get("symbol")?.toUpperCase()||"MSFT";
  if(!ALLOWED.has(symbol)) return Response.json({error:"Symbol not allowed"},{status:400});
  if(!process.env.TWELVE_DATA_API_KEY) return Response.json({mode:"demo",symbol,price:null,message:"Add TWELVE_DATA_API_KEY in Vercel to enable live data."});
  return Response.json({mode:"configured",symbol,message:"Key detected. Provider call will be enabled in the next stage."});
}
