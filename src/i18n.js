import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// "Inline" English and French translations. 
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      quote: "When you listen to yourself, everything comes naturally.",
      homeButton: "Start Your Journey",
      homeNav:"Home",
      build:"Build",
      blog:"Blog",
      register:"Register",
      faq:"FAQ",
      buildTitle:"Build Your Own Yoga Sequence",
      buildPara:"Fill out the questionnaire below and we’ll create a tailored yoga sequence just for you!",
      difficulty:"Difficulty",
      length:"Length",
      goal:"Goal",
      buildButton:"Build Sequence",
      easy:"Easy",
      medium:"Medium",
      hard:"Hard",
      exercise:"Exercise",
      stretch:"Stretch",
      anxiety:"Relieve Anxiety",
      addBlog:"Add Blog",
      submit:"Submit",
      title:"Title",
      author:"Author",
      content:"Content",
      startWrite:"Start Writing...",
      registerTitle:"Register for a class",
      registerPara:"We deliver personal Zoom sessions to practice your yoga and meditation skills.",
      registerNameError:"Please provide a valid name.",
      registerEmailError:"Please provide a valid email.",
      registerDateError:"Please provide a valid date.",
      registerTimeError:"Please provide a valid time.",
      blogAuthorError:"Please provide a valid author.",
      blogTitleError:"Please provide a valid title.",
      blogContentError:"Please provide some content.",
      namePH:"Name",
      emailPH:"Email",
      practiceType:"Practice Type",
      yoga:"Yoga",
      meditation:"Meditation",
      time:"Time",
      q1:"Do you need any equipment?",
      a1:"No, YogaCentral is build around portability. You can just build a sequence and then start flowing. If you would like to add a yoga mat for comfort, that could be useful. Also, for beginners, you could buy a block to help with more challenging poses.",
      q2:"Where should you start?",
      a2_1:"If you are new to yoga, I would start off by selecting an easy sequence that is short in length and you can select any goal you want.",
      a2_2:"This will allow you to gain a good foundation in yoga and slowly improve your skills.",
      q3:"How are the registered classes structured?",
      a3_1:"Our team of experts will email you with an available time to meet up. Then, you will join a Zoom call and the instructor will help you with your needs.",
      a3_2:"The yoga sessions are 30 minutes long and you select the format. You can select a nice flow (to relax, energize, stretch, etc.) or you can get help on certain postures.",
      a3_3:"The meditation sessions are 15 minutes long and the instructor will guide you through a meditation practice. You can mention to your instructor the type of meditation you prefer.",
      q4:"Do you need to pay for the registered classes?",
      a4:"Our classes are 100% free! We aim to provide free yogo and meditation classes to individuals. We believe that there's a great need for such services and offering them for free is crucial for them to be accessible for all.",
      confirmTitle:"Registration confirmed!",
      confirmPara:"We’ll get in touch shortly.",
      ok:"OK",
      resultsTitle:"Here's your 5-minute yoga sequence",
      pose1:"1.  Child’s Pose (1 minute)",
      pose2:"2. Cat-Cow (1 minute)",
      pose3:"3. Downward Facing Dog (1 minute)",
      pose4:"4. Forward Fold to Chair Pose (2 minutes)",
      goback:"Go back",
      postedBy:"Posted by",
      myBlogs:"My Blogs",
      recommended:"Recommended"
    },
  },
  fr: {
    translation: {
        quote: "Pratiquez et le reste viendra!",
        homeButton: "Commencez votre parcours",
        homeNav:"Accueil",
        build:"Bâtir",
        blog:"Blog",
        register:"S'inscrire",
        faq:"FAQ",
        buildTitle:"Créez votre propre séquence de yoga",
        buildPara:"Remplissez le questionnaire ci-dessous et nous créerons une séquence de yoga sur mesure rien que pour vous !",
        difficulty:"Difficulté",
        length:"Longueur",
        goal:"Objectif",
        buildButton:"Créez votre Séquence",
        easy:"Facile",
        medium:"Moyen",
        hard:"Difficile",      
        exercise:"Exercice",
        stretch:"Étirer",
        anxiety:"Soulager l'anxiété",
        addBlog:"Écrire un blog",
        submit:"Soumettre",
        title:"Titre",
        author:"Auteur",
        content:"Contenu",
        startWrite:"Commencez à écrire...",
        registerTitle:"S'inscrire à un cours",
        registerPara:"Nous proposons des sessions Zoom personnelles pour pratiquer vos compétences en yoga et en méditation.",
        registerNameError:"Veuillez fournir un nom valide.",
        registerEmailError:"Veuillez fournir une adresse e-mail valide.",
        registerDateError:"Veuillez fournir une date valide.",
        registerTimeError:"Veuillez fournir un temps valide.",
        namePH:"Nom",
        emailPH:"E-mail",
        practiceType:"Type de pratique",
        yoga:"Yoga",
        meditation:"Méditation",
        time:"Temps",
        q1:"Avez-vous besoin d'un quelconque équipement?",
        a1:"Non, YogaCentral est construit autour de la portabilité. Vous pouvez simplement créer une séquence, puis commencer à couler. Si vous souhaitez ajouter un tapis de yoga pour plus de confort, cela pourrait être utile. De plus, pour les débutants, vous pouvez acheter un bloc pour vous aider avec des poses plus difficiles.",
        q2:"Par où commencer ?",
        a2_1:"Si vous débutez dans le yoga, je commencerais par sélectionner une séquence facile et courte et vous pouvez sélectionner n'importe quel objectif.",
        a2_2:"Cela vous permettra d'acquérir de bonnes bases en yoga et d'améliorer lentement vos compétences.",
        q3:"Comment sont structurées les classes inscrites ?",
        a3_1:"Notre équipe d'experts vous enverra un e-mail avec un temps disponible pour vous rencontrer. Ensuite, vous rejoindrez un appel Zoom et l'instructeur vous aidera avec vos besoins.",
        a3_2:"Les séances de yoga durent 30 minutes et vous sélectionnez le format. Vous pouvez sélectionner un flux agréable (pour vous détendre, vous dynamiser, vous étirer, etc.) ou vous pouvez vous faire aider sur certaines postures.",
        a3_3:"Les séances de méditation durent 15 minutes et l'instructeur vous guidera à travers une pratique de méditation. Vous pouvez mentionner à votre instructeur le type de méditation que vous préférez.",
        q4:"Devez-vous payer pour les cours enregistrés?",
        a4:"Nos cours sont 100% gratuits ! Notre objectif est de fournir des cours de yoga et de méditation gratuits aux particuliers. Nous croyons qu'il y a un grand besoin pour de tels services et les offrir gratuitement est crucial pour qu'ils soient accessibles à tous.",
        confirmTitle:"Inscription confirmée !",
        confirmPara:"Nous vous contacterons sous peu.",
        ok:"D'ACCORD",
        resultsTitle:"Voici votre séquence de yoga de 5 minutes",
        pose1:"1. Pose de l'enfant (1 minute)",
        pose2:"2. Chat-Vache (1 minute)",
        pose3:"3. Chien tête en bas (1 minute)",
        pose4:"4. Pose du pli vers l'avant à la chaise (2 minutes)",
        goback:"Retourner",
        postedBy:"Écrit par",
        myBlogs:"Mes blogs",
        recommended:"Recommandé"
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;