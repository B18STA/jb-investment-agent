const DATA:any={MSFT:{score:77},PWR:{score:59},WPM:{score:71},AMZN:{score:69}};
export async function GET(request:Request){
  const ticker=new URL(request.url).searchParams.get("ticker")?.toUpperCase()||"MSFT";
  return Response.json(DATA[ticker]?{ticker,...DATA[ticker],mode:"cached-starter"}:{ticker,error:"No cached starter record"},{status:DATA[ticker]?200:404});
}
