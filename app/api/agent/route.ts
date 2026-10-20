export async function POST(request:Request){
  const body=await request.json().catch(()=>({}));
  if(!process.env.OPENAI_API_KEY){
    return Response.json({mode:"starter",message:`JB Agent endpoint is working for ${body.ticker||"the selected ticker"}. Add OPENAI_API_KEY later to enable live AI analysis.`});
  }
  return Response.json({mode:"ready",message:"AI key detected. The next build step will add the governed analysis prompt and tool calls."});
}
