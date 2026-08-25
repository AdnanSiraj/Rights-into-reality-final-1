# Team section — final content

`About.jsx` now has your real team, in the "Our Team" section:

| Photo file | Name | Title | Credential | CV / Portfolio |
|---|---|---|---|---|
| `public/team/member-1.jpg` | Adnan Siraj | Co-Founder & President | Bachelor's in International Law | Both links included |
| `public/team/member-2.jpg` | Nasar Shah Mian | Co-Founder & Administrator | M.Phil. in Environmental Sciences | Both links included |
| `public/team/member-3.jpg` | Jamshaid Ahmed | General Secretary | Bachelor's in Economics | Both links included |
| `public/team/member-4.jpg` | Kamran Shah | Project Coordinator | Bachelor of Economics | None (as requested) |

## What you need to upload to the repo

1. **Replace** `src/pages/About.jsx` with the file here.
2. **Add 4 photos** to a new `public/team/` folder, named exactly:
   - `member-1.jpg` (Adnan)
   - `member-2.jpg` (Nasar)
   - `member-3.jpg` (Jamshaid)
   - `member-4.jpg` (Kamran)
3. **Add CV and portfolio PDFs** to two new folders:
   - `public/team/cv/`
     - `adnan-siraj-cv.pdf`
     - `nasar-shah-mian-cv.pdf`
     - `jamshaid-ahmed-cv.pdf`
   - `public/team/portfolio/`
     - `adnan-siraj-portfolio.pdf`
     - `nasar-shah-mian-portfolio.pdf`
     - `jamshaid-ahmed-portfolio.pdf`

   Kamran has no CV/portfolio links on the page, so no files are needed for him.

If any of these filenames don't match what you actually upload, just update the matching `src="..."` (photos) or `href="..."` (CV/portfolio links) inside `About.jsx` to match your real filenames.

## Verified
I built this file against your actual repo (`npm run build`) — it compiles with no errors.

Commit and push as usual; Cloudflare Pages will redeploy automatically.
