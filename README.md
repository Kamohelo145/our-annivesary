# 💌 Anniversary Site — how to edit and put it online

## What's in this folder

```
index.html   ← the page (don't need to touch)
style.css    ← the look (don't need to touch)
script.js    ← the game + logic (don't need to touch)
config.js    ← ✏️ EDIT THIS: names, game, memories, letter, song
media/       ← 📁 your photos, videos and song go here
```

## 1. Put in your own stuff

1. **Photos:** copy your photos into `media/`. Easiest: name them exactly
   `photo1.jpg`, `photo2.jpg`, … so they replace the placeholders.
   Or use any name and update the `src:` line in `config.js`.
2. **Videos:** same idea, `video1.mp4`, `video2.mp4`. They play muted and on loop.
3. **Song:** replace `media/song.mp3` with your song (keep the name `song.mp3`).
4. **Words:** open `config.js` and change every line marked `PLACEHOLDER`.

### ⚠️ Things that trip people up
- **Capital letters matter online.** `Photo1.JPG` ≠ `photo1.jpg`. If a picture shows
  "Couldn't find…", the name in `config.js` doesn't match the file exactly.
- **iPhone photos (.HEIC) don't show in browsers.** Convert to JPG first
  (on iPhone: Settings → Camera → Formats → *Most Compatible*, or send them to
  yourself via WhatsApp/email, which converts them).
- **iPhone videos (.MOV)** may not play on Android/Chrome. Convert to MP4
  (e.g. send through WhatsApp, or use a free online "MOV to MP4" converter).
- **Keep each video under ~25 MB** so it loads fast. GitHub refuses files over 100 MB.

## 2. Test it on your laptop
Double-click `index.html`. To skip the game while testing, add `?skip` to the end
of the address in the browser bar, e.g. `.../index.html?skip`.

## 3. Put it online with GitHub Pages (free, no coding needed)

1. Go to **github.com** and sign up / log in.
2. Click the **+** (top right) → **New repository**.
   - Name it something like `our-anniversary`
   - Set it to **Public** (free GitHub Pages needs public)
   - Click **Create repository**
3. On the new page, click the link **"uploading an existing file"**.
4. Open the anniversary folder on your laptop, select **everything inside it**
   (`index.html`, `style.css`, `script.js`, `config.js`, `README.md` AND the `media` folder)
   and drag it all into the GitHub upload box.
   ➜ `index.html` must be at the top level, not inside another folder.
5. Scroll down, click **Commit changes**. Wait for the upload to finish.
6. Go to **Settings** (tab at the top of the repo) → **Pages** (left menu).
   - Under *Branch*, choose **main** and **/ (root)** → **Save**.
7. Wait 1–2 minutes, refresh that Pages screen. You'll see:
   **"Your site is live at https://YOUR-USERNAME.github.io/our-anniversary/"**
8. Open that link on your phone to check, then send it to her 💕

### Changing something later
In your repo on github.com, click `config.js` → the ✏️ pencil icon → edit →
**Commit changes**. The live site updates in about a minute
(refresh with pull-down on phone).
To swap a photo: open the `media` folder in the repo → **Add file → Upload files** →
upload a file with the same name → Commit.

### Note on privacy
A public repo means anyone with the link (or who finds your GitHub) can see the
photos. Don't put anything there you wouldn't want seen.

### Backup option if GitHub gives you trouble
Go to **app.netlify.com/drop**, drag the whole folder onto the page, and you get a
live link instantly (make a free account so it doesn't expire).
