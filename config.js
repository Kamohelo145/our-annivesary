/* =====================================================================
   💌  THIS IS THE ONLY FILE YOU NEED TO EDIT  💌
   ---------------------------------------------------------------------
   Everything she sees (names, game questions, photos, videos, your
   memories, the song, the love letter) is set right here.

   RULES SO NOTHING BREAKS:
   • Keep the "quotes" around text.
   • Keep the comma , at the end of each line / each { } block.
   • If you want an apostrophe inside text, that's fine, e.g. "it's".
     Just don't use a double quote " inside text (use ' or “ ” instead).
   • Media files go in the  media/  folder. File names are
     CASE-SENSITIVE online: "photo1.jpg" is NOT the same as "Photo1.JPG".
   ===================================================================== */

const CONFIG = {

  /* ------------------------------------------------------------------
     1. NAMES
     ------------------------------------------------------------------ */
  herName: "Siphosihle",
  herNickname: "Melva Bear",
  yourName: "Kamohelo",
  yourNickname: "Kamza",

  // The day you two officially started (format: YYYY-MM-DD).
  // Used for the live "time together" counter.
  startDate: "2025-12-25",          // ← PLACEHOLDER: change to your real date

  // Text in the browser tab
  pageTitle: "A little bird has a message for you 🐦",

  /* ------------------------------------------------------------------
     2. BACKGROUND SONG
     Put your song in the media folder and write its file name here.
     MP3 works everywhere. The song starts when she reaches Dreamland.
     ------------------------------------------------------------------ */
  song: "media/song.mp3",           // ← PLACEHOLDER: replace media/song.mp3 with your song
  songTitle: "O ratwa ke nna",            // ← shown on the little music button

  /* ------------------------------------------------------------------
     3. THE LITTLE BIRD (first screen)
     These lines get "typed out" one after the other.
     ------------------------------------------------------------------ */
  introLines: [
    "Tweet tweet! 🐦",
    "Psst… a little bird told me today is a very special day.",
    "I was sent by someone called Kamohelo. You know him 😉",
    "But I can't just let you in… first you have to solve my little mystery.",
  ],
  introButton: "I'm ready 💖",

  /* ------------------------------------------------------------------
     4. THE MYSTERY GAME
     Add / remove / change questions freely.
       question       → what the bird asks
       options        → the buttons she can press
       answer         → which option is correct, COUNTING FROM 0
                        (first option = 0, second = 1, third = 2, fourth = 3)
       wrongMessages  → one of these shows (with a ping) when she's wrong
       rightMessage   → shows when she gets it right
     ------------------------------------------------------------------ */
  game: [
    {
      question: "First clue: who sent me to you?",
      options: ["The postman", "Kamza 💌", "A random pigeon", "Your crush 👀"],
      answer: 1,
      wrongMessages: [
        "Eish! 🙈 You meant to press “Kamza”.",
        "Wrong one! The bird says: it was Kamza. Try again 🐦",
      ],
      rightMessage: "Correct! He says hi 😘",
    },
    {
      question: "Second clue: what's so special about today?",
      options: ["Nothing, it's a normal day", "Free pizza day 🍕", "It's OUR anniversary 💕", "Laundry day 🧺"],
      answer: 2,
      wrongMessages: [
        "Haai wena mahn! 😤 You meant to press “It's OUR anniversary”.",
        "Nope! Think harder, Melva Bear 🐻",
      ],
      rightMessage: "Yesss! Happy anniversary, my love ,my barchen 🥂",
    },
    {
      question: "Third clue: who loves you the most in the whole wide world?",
      options: ["The bird 🐦", "Kamza ❤️", "Your phone 📱", "Nobody knows"],
      answer: 1,
      wrongMessages: [
        "Ping! 🔔 You meant to press “Kamza”, obviously 😌",
        "Wrong! Don't make him cry now 🥲",
      ],
      rightMessage: "Exactly. More than words can say 💖",
    },
    {
      question: "Last clue: where are we going next?",
      options: ["Back to bed 😴", "To work 💼", "Nowhere", "Dreamland ✨"],
      answer: 3,
      wrongMessages: [
        "Hmm… you meant to press “Dreamland” 🌙",
        "Close… but no. The bird is waiting 🐦",
      ],
      rightMessage: "Pack your heart, we're going to Dreamland 🌙",
    },
  ],

  /* ------------------------------------------------------------------
     5. FINAL QUESTION (the "No" button runs away 😂)
     ------------------------------------------------------------------ */
  finalQuestion: "Are you ready to enter Dreamland with me?",
  yesText: "Yes 💖",
  noText: "No",
  noMessages: [
    "Nice try 😏",
    "The No button is shy…",
    "Just press Yes, Kgosatsana yaka 👑",
    "It's not going to work 😂",
    "Okay now you're just playing 🙈",
  ],

  /* ------------------------------------------------------------------
     6. DREAMLAND (the "you won" screen)
     ------------------------------------------------------------------ */
  dreamTitle: "Welcome to Dreamland",
  dreamText: "You solved the mystery. Turn your volume up a little… this place is all about us. ✨",
  enterButton: "Enter 💫",

  /* ------------------------------------------------------------------
     7. MAIN PAGE TOP SECTION
     ------------------------------------------------------------------ */
  heroTitle: "Happy Anniversary",
  heroSubtitle: "Every picture below is a little piece of my heart. Scroll slowly. ❤️",

  /* ------------------------------------------------------------------
     8. YOUR MEMORIES  ← the heart of the site
     One { ... } block per memory. They show in this order.
       type  → "image" for a photo, "video" for a video
       src   → the file in the media folder
       date  → small label (can be a date or a place, anything)
       title → heading of the memory
       text  → what you want to say. Use \n\n to start a new paragraph.
     Videos play automatically, MUTED (so the song keeps playing).
     To add a memory: copy a whole { ... }, block and paste it below.
     To remove one: delete its whole { ... }, block.
     ------------------------------------------------------------------ */
  memories: [
    {
      type: "image",
      src: "media/photo1.jpg",                       // ← PLACEHOLDER
      date: "The day we met",                        // ← PLACEHOLDER
      title: "The first time I saw you",             // ← PLACEHOLDER
      text: "I remember you wearing a white vest ,and with beautiful edges on your hair .You surprised me that day ,I felt so happy ,I remember it as vividly as yesterday .I felt like hugging you and never letting go❤️.\nPLACEHOLDER — Write about how you felt the first time you met her. Where were you? What was she wearing? What did you think?\n\nAdd a second paragraph like this if you want.",
    },
    {
      type: "image",
      src: "media/photo2.jpg",                       // ← PLACEHOLDER
      date: "Our first date",                        // ← PLACEHOLDER
      title: "Nervous but happy",                    // ← PLACEHOLDER
      text: "PLACEHOLDER — What happened on your first date? Any funny moment?",
    },
    {
      type: "video",
      src: "media/video1.mp4",                       // ← PLACEHOLDER
      date: "That one weekend",                      // ← PLACEHOLDER
      title: "When we couldn't stop laughing",       // ← PLACEHOLDER
      text: "PLACEHOLDER — Describe this video. What was going on, and why does it make you smile?",
    },
    {
      type: "image",
      src: "media/photo3.jpg",                       // ← PLACEHOLDER
      date: "Somewhere special",                     // ← PLACEHOLDER
      title: "Just us",                              // ← PLACEHOLDER
      text: "PLACEHOLDER — A place you went together and what that day meant to you.",
    },
    {
      type: "video",
      src: "media/video2.mp4",                       // ← PLACEHOLDER
      date: "A random Tuesday",                      // ← PLACEHOLDER
      title: "The little moments",                   // ← PLACEHOLDER
      text: "PLACEHOLDER — Sometimes the ordinary days are the best ones. Tell her about this one.",
    },
    {
      type: "image",
      src: "media/photo4.jpg",                       // ← PLACEHOLDER
      date: "Today",                                 // ← PLACEHOLDER
      title: "And this is just the beginning",       // ← PLACEHOLDER
      text: "PLACEHOLDER — Where you are now and what you're looking forward to together.",
    },
  ],

  /* ------------------------------------------------------------------
     9. THE LOVE LETTER (end of the page)
     Each "..." in paragraphs is its own paragraph.
     ------------------------------------------------------------------ */
  letterTitle: "To my Neo yaka entle,",
  letterParagraphs: [
    "PLACEHOLDER — Write your letter to her here. This is the last thing she reads, so make it count.",
    "PLACEHOLDER — Second paragraph. What she means to you, what you're grateful for.",
    "PLACEHOLDER — Third paragraph. What you promise her for the next year (and the ones after that).",
  ],
  letterSignoff: "Forever yours,",
  letterSignature: "Kamza 💌",

  footerText: "Made with all my love, just for you.",
};
