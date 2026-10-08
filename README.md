# CareerX — Full Browser Website

This is the pitch-ready, multi-page CareerX website based on the conversation:
- Student-first (NO resume upload)
- Dream job -> Job DNA -> Skill gap -> roadmap
- Premium dark UI/UX
- Multi-page website, not just one index file
- LocalStorage preserves the profile between pages
- PWA manifest + service worker included
- No build step and no API key required

## Pages
- index.html — landing page
- build.html — student onboarding
- analyze.html — AI analysis animation
- dashboard.html — career intelligence dashboard
- roadmap.html — detailed execution roadmap

## Run locally
Python:
  python -m http.server 8000
Then open:
  http://localhost:8000

## Public hosting
Because this chat environment cannot assign a public internet domain to your files, upload this folder to any static hosting provider:
1. Netlify Drop: drag the whole folder into the deploy area.
2. Cloudflare Pages: create a Pages project and upload/deploy the folder.
3. GitHub Pages: put these files in a repository and enable Pages from the main branch.
4. Vercel: import the folder/repository as a static project.

No server is required. The same site works on Chrome, Edge, Firefox, Safari, Opera, Brave, Arc and modern Android/iOS browsers.

## Important
The current "AI" analysis is deterministic demo logic so it is reliable during an ideathon pitch. The UI is intentionally separated into onboarding, analysis, dashboard and roadmap pages so a real LLM + job-data backend can be added without redesigning the product.
