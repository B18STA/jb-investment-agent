# JB Investment Agent starter

A deployment-ready starter for the JB Investment Agent.

## Included
- Next.js application
- Portfolio sample
- Chart-analysis demonstration shell
- Winston lookup and JB score comparison
- Server-side API route placeholders
- AI endpoint placeholder
- Environment variable template

## Important
The chart data and technical read are synthetic demonstration values. They are not live signals.
The starter cannot place trades.

## Upload to GitHub using the website
1. Download and unzip the package.
2. Open your private `jb-investment-agent` GitHub repository.
3. Choose **Add file** then **Upload files**.
4. Upload the CONTENTS of this folder, not the outer folder itself.
5. Commit the files to `main`.

## Deploy
Import the GitHub repository into Vercel and click Deploy.
No environment variables are required for the initial starter deployment.

## Later secrets
Add these to Vercel as server-side environment variables only:
- `OPENAI_API_KEY`
- `TWELVE_DATA_API_KEY`

Never prefix these with `NEXT_PUBLIC_`.
