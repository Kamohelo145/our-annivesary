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
      text: "I remember you wearing a white vest ,and with beautiful edges on your hair .You surprised me that day ,I felt so happy ,I remember it as vividly as yesterday .I felt like hugging you and never letting go❤️",
    },
    {
      type: "image",
      src: "media/photo2.jpg",                       // ← PLACEHOLDER
      date: "Our first interactions",                        // ← PLACEHOLDER
      title: "Nervous but happy",                    // ← PLACEHOLDER
      text: "I remember ,us being together ,cooking ,laughing in bed ,just speaking our hearts out ,you truly are one of a kind.Wa hopola ke o loha hlooho😂😂😂❤️ ,from that all the way to us shopping together ,we have shared so many beautiful moments together ,and many more are still to come my baby❤️ ,No single picture can capture all of that ,so I put (my😂)our favourite ,to just remind you of the love I have for you",
    },
    {
      type: "video",
      src: "media/video1.mp4",                       // ← PLACEHOLDER
      date: "Ya pele",                      // ← PLACEHOLDER
      title: "First Video you sent me",       // ← PLACEHOLDER
      text:  "I just remember seeing such an amazing woman ,and I just couldnt wait to see you❤️Love you so much❤️‍🔥",
    },{
      type: "video",
      src: "media/video2.mp4",                       // ← PLACEHOLDER
      date: "Birthday",                      // ← PLACEHOLDER
      title: "our first birthday together",       // ← PLACEHOLDER
      text: "Ke ntse ke hopola ,in your lovely dresses Mrs Mosikili ,I was so happy to see you so excited ,and happy❤️Love you more than words can describe",
    },
    {
      type: "image",
      src: "media/photo3.jpg",                       // ← PLACEHOLDER
      date: "special pictures",                     // ← PLACEHOLDER
      title: "My baby",                              // ← PLACEHOLDER
      text: "I still look at and remember the first pictures you sent me ,I love you so much .Ke hopola senepe sa chrismas❤️,O ntshitse figure ngwana😂😂 ,and that one you took with your old phone❤️,I look at them each time I miss you ke le cpt🥺",
    },
    {
      type: "video",
      src: "media/video3.mp4",                       // ← PLACEHOLDER
      date: "A random Tuesday",                      // ← PLACEHOLDER
      title: "The little moments",                   // ← PLACEHOLDER
      text: "Sometimes the ordinary days are the best ones.I really do look back and remember those days ,we just having fun ,sharing laughs❤️,just enjoying our little moments ,those have went a long way into my heart baby😭❤️🥰,even on days where we were just lost😂😂😂",
    },
    {
      type: "image",
      src: "media/photo4.jpg",                       // ← PLACEHOLDER
      date: "Today",                                 // ← PLACEHOLDER
      title: "And this is just the beginning",       // ← PLACEHOLDER
      text: "we have been together for a year now ,and we have many more to come❤️🥰,I love you my precious queen❤️",
    },
  ],

  /* ------------------------------------------------------------------
     9. THE LOVE LETTER (end of the page)
     Each "..." in paragraphs is its own paragraph.
     ------------------------------------------------------------------ */
  letterTitle: "To my Neo yaka entle,",
  letterParagraphs: [
    "❤️My baby as we reach this milestone I want us to look at how far we have come ,and acknowledge all the hardships we have faced but we came out on top regardless ,we are staying together forever.My love for you grows each and every single day❤️.I love you so so much.I always listen to all the music you love and that is how I also picked the background song I loved it also❤️.You drive me crazy😭❤️",
    "❤️I appreaciate all your efforts that you have done for me ,and all the support that you have shown me ,you have always been there even during days when I am not ohkay ,with tears flooding my eyes ,but today we celebrate because we have come so far,our love is prospering❤️ ,and we still have so far to go❤️🥰.I just melt inside everytime I think of you .You are funny ,beautiful and amazing ,so thoughful and considerate ,and my future wife who is an entreprenuer at heart .All that you wish for will come true because you work hard for it ,and I will be right here to support you every step of the way❤️",
    "In the coming years I promise to improve ,and be there more for you ,I want to see when you are not ohkay without you saying ,I want to be able to fully focus on you without past bargage dragging me down ,I want to be your pillar of support  as we tackle more challenges❤️.Ultimately I want to marry you ,ke oetse MaMosikili❤️💍,dikgomo dikene mme ho be monate.I want to learn how to love you and treat you better like the princess you are❤️.Ke ya o rata Siphosihle ,you leave me speechless each time ,such a wonderful being ,I am truly blessed to have you in my life and I appreaciate you a lot❤️‍🔥",
  ],
  letterSignoff: "Forever yours,",
  letterSignature: "Kamza 💌",

  footerText: "Made with all my love, just for you.",
};
