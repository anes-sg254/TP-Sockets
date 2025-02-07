# TP SSH
## exercice1
* j'ai lancé cette commande:  ssh -i ./test/id_rsa user@localhost -p 2222 ls
* j'ai eu ça :
    -logs
    -ssh_host_keys
    -sshd
    -sshd.pid
* j'ai lancé cette commande: scp -i ./test/id_rsa -P 2222 fichier.txt user@localhost:

* j'ai eu ça en faisant ls :
   -fichier.txt
   -logs
   -ssh_host_keys
   -sshd
   -sshd.pid 

* le premier model affiche:  
Response: [
  {
    summary_text: 'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world.'
  }
]

* le deuxieme model "samLowe/roberta-base-go_emotions " affiche:

 Response: [
  [
    { label: 'neutral', score: 0.5423543453216553 },
    { label: 'approval', score: 0.16130122542381287 },
    { label: 'admiration', score: 0.07578934729099274 },
    { label: 'realization', score: 0.06993197649717331 },
    { label: 'excitement', score: 0.021326962858438492 },
    { label: 'pride', score: 0.013174434192478657 },
    { label: 'joy', score: 0.01104676816612482 },
    { label: 'surprise', score: 0.010122120380401611 },
    { label: 'annoyance', score: 0.007257677614688873 },
    { label: 'disappointment', score: 0.006280812434852123 },
    { label: 'optimism', score: 0.006189434789121151 },
    { label: 'relief', score: 0.0053746048361063 },
    { label: 'disapproval', score: 0.003607328748330474 },
    { label: 'desire', score: 0.0024685983080416918 },
    { label: 'amusement', score: 0.002271316945552826 },
    { label: 'fear', score: 0.002266978146508336 },
    { label: 'disgust', score: 0.002053865697234869 },
    { label: 'embarrassment', score: 0.001961073372513056 },
    { label: 'sadness', score: 0.0016555096954107285 },
    { label: 'gratitude', score: 0.0014905274147167802 },
    { label: 'nervousness', score: 0.0013128933496773243 },
    { label: 'confusion', score: 0.0012378402752801776 },
    { label: 'curiosity', score: 0.0009786413284018636 },
    { label: 'caring', score: 0.0009030092041939497 },
    { label: 'love', score: 0.0008157825795933604 },
    { label: 'grief', score: 0.0008098450489342213 },
    { label: 'anger', score: 0.0008069336181506515 },
    { label: 'remorse', score: 0.0003833389491774142 }
  ]
]

* je remarque que il nous envoie un format json qui contient des scores de satisfaction.

* j'ai changé le texte   const text = "good job!"; 
    const response = await queryModelWithFetch(text);

* il m'affiche ça :

Response: [
  [
    { label: 'admiration', score: 0.9492934346199036 },
    { label: 'approval', score: 0.03235260024666786 },
    { label: 'gratitude', score: 0.020843451842665672 },
    { label: 'neutral', score: 0.014809411950409412 },
    { label: 'excitement', score: 0.005644436925649643 },
    { label: 'optimism', score: 0.0055372221395373344 },
    { label: 'realization', score: 0.0046610282734036446 },
    { label: 'disapproval', score: 0.004220240283757448 },
    { label: 'curiosity', score: 0.004131924826651812 },
    { label: 'joy', score: 0.004072105977684259 },
    { label: 'annoyance', score: 0.0029796427115797997 },
    { label: 'surprise', score: 0.0027520128060132265 },
    { label: 'pride', score: 0.0025171285960823298 },
    { label: 'confusion', score: 0.0024780593812465668 },
    { label: 'disappointment', score: 0.0022994745522737503 },
    { label: 'love', score: 0.0019202298717573285 },
    { label: 'caring', score: 0.001879838528111577 },
    { label: 'amusement', score: 0.0017787065589800477 },
    { label: 'sadness', score: 0.0016684922156855464 },
    { label: 'anger', score: 0.0013828137889504433 },
    { label: 'desire', score: 0.00091123441234231 },
    { label: 'disgust', score: 0.0008006548159755766 },
    { label: 'relief', score: 0.000652527844067663 },
    { label: 'fear', score: 0.0005172539968043566 },
    { label: 'grief', score: 0.00036891832132823765 },
    { label: 'remorse', score: 0.00035710216616280377 },
    { label: 'embarrassment', score: 0.0003396454849280417 },
    { label: 'nervousness', score: 0.00019634730415418744 }
  ]
]  donc on remarque il a mis admiration en avant en fonction ce j'ai écris en texte donc il est capable de detecter mes émotions


* j'ai utilisé ce model : deepseek-ai/DeepSeek-R1-Distill-Qwen-32B
* j'ai mis le texte : Tell me a joke please

* la reponse est celle la:
Response: [
  {
    generated_text: 'Tell me a joke please.\n' +
      "Okay, so I need to think of a joke. Hmm, where do I even start? Maybe think of something funny that happened to me or someone I know. Wait, I don't have personal experiences, so I should stick to general topics. Okay, maybe something related to animals or everyday situations because those are usually safe and relatable.\n" +
      '\n' +
      "Let me brainstorm some ideas. If I take a dog, for instance. They're always doing funny things. Like when they chase their tails or when they sleep funny. Maybe a joke involving that. Or maybe a cat, which can also be funny. Puns are always good too. Maybe something with wordplay.\n" +
      '\n' +
      'Alternatively, maybe think of puns with everyday activities. Like when someone goes to the park and the joke involves a pun on "park" or something like that. Or maybe something related to school, like homework or teachers.\n' +
      '\n' +
      "Wait, another idea: using professions in a joke. Like a doctor, a lawyer, or a teacher, and then making a pun or a funny situation around that. But I should make sure it's appropriate and not offensive.\n" +
      '\n' +
      "Let me try to conceptualize one. Let's say, take an animal and pair it with a pun. For example, why don't turtles fight? Because they're hard-shelled to start a fight. Wait, is that original? Or maybe I can think of a better one.\n" +
      '\n' +
      'Another approach: think of common phrases and twist the words to make a joke. For example, "Why did the chicken cross the road?" is classic, but maybe I can come up with something similar with another animal or a different scenario.\n' +
      '\n' +
      `Oh, how about this: "Why did the cookie go to school?" Because it wanted to improve its crumb! Wait, that's a bit forced, but it uses a pun with "crumb" and "know." Maybe that works.\n` +
      '\n' +
      "Alternatively, think of something more unexpected. Like, why did the computer go to the doctor? Because it had a virus! Hah, that's a classic one, but it's still funny because it's unexpected. Although, I wonder if that's too common, but maybe it's worth sharing.\n" +
      '\n' +
      `Wait, another idea: "Why don't scientists trust atoms?" Because they make up everything! That's a good one because it plays on the double meaning of "make up." It's scientific and funny.\n` +
      '\n' +
      'If I can come up with something unique, that would be great, but sometimes the classics are just as effective. So, maybe the computer one, or the atoms one.\n' +
      '\n' +
      `Alternatively, think about nature. Why did the sun go to school? To learn how to shine brighter! That uses a pun on "shine brighter" as improving oneself. That's cute.\n` +
      '\n' +
      `Wait, I think I found a good one. "Why don't scientists trust atoms? Because they make up everything!" Yeah, that's a solid joke with a good pun. It's clever and doesn't require any inappropriate content.\n` +
      '\n' +
      "So, putting it all together, I think that's a good joke. It combines a scientific element with a pun, making it both educational and humorous. Plus, it's a bit unexpected, so it catches the listener off guard in a good way.\n" +
      '\n' +
      "Alright, I think I've thought it through. Now to present the joke clearly.\n" +
      '</think>\n' +
      '\n' +
      "Why don't scientists trust atoms?  \n" +
      'Because they make up everything!'
  }
]




PS C:\Users\Anes\TP-Sockets\AI\TP> npm start

> tp@1.0.0 start
> node index.js

Response: [
  {
    generated_text: 'Tell me a joke please.\n' +
      "Okay, so I need to think of a joke. Hmm, where do I even start? Maybe think of something funny that happened to me or someone I know. Wait, I don't have personal experiences, so I should stick to general topics. Okay, maybe something related to animals or everyday situations because those are usually safe and relatable.\n" +
      '\n' +
      "Let me brainstorm some ideas. If I take a dog, for instance. They're always doing funny things. Like when they chase their tails or when they sleep funny. Maybe a joke involving that. Or maybe a cat, which can also be funny. Puns are always good too. Maybe something with wordplay.\n" +
      '\n' +
      'Alternatively, maybe think of puns with everyday activities. Like when someone goes to the park and the joke involves a pun on "park" or something like that. Or maybe something related to school, like homework or teachers.\n' +
      '\n' +
      "Wait, another idea: using professions in a joke. Like a doctor, a lawyer, or a teacher, and then making a pun or a funny situation around that. But I should make sure it's appropriate and not offensive.\n" +
      '\n' +
      "Let me try to conceptualize one. Let's say, take an animal and pair it with a pun. For example, why don't turtles fight? Because they're hard-shelled to start a fight. Wait, is that original? Or maybe I can think of a better one.\n" +
      '\n' +
      'Another approach: think of common phrases and twist the words to make a joke. For example, "Why did the chicken cross the road?" is classic, but maybe I can come up with something similar with another animal or a different scenario.\n' +
      '\n' +
      `Oh, how about this: "Why did the cookie go to school?" Because it wanted to improve its crumb! Wait, that's a bit forced, but it uses a pun with "crumb" and "know." Maybe that works.\n` +
      '\n' +
      "Alternatively, think of something more unexpected. Like, why did the computer go to the doctor? Because it had a virus! Hah, that's a classic one, but it's still funny because it's unexpected. Although, I wonder if that's too common, but maybe it's worth sharing.\n" +
      '\n' +
      `Wait, another idea: "Why don't scientists trust atoms?" Because they make up everything! That's a good one because it plays on the double meaning of "make up." It's scientific and funny.\n` +
      '\n' +
      'If I can come up with something unique, that would be great, but sometimes the classics are just as effective. So, maybe the computer one, or the atoms one.\n' +
      '\n' +
      `Alternatively, think about nature. Why did the sun go to school? To learn how to shine brighter! That uses a pun on "shine brighter" as improving oneself. That's cute.\n` +
      '\n' +
      `Wait, I think I found a good one. "Why don't scientists trust atoms? Because they make up everything!" Yeah, that's a solid joke with a good pun. It's clever and doesn't require any inappropriate content.\n` +
      '\n' +
      "So, putting it all together, I think that's a good joke. It combines a scientific element with a pun, making it both educational and humorous. Plus, it's a bit unexpected, so it catches the listener off guard in a good way.\n" +
      '\n' +
      "Alright, I think I've thought it through. Now to present the joke clearly.\n" +
      '</think>\n' +
      '\n' +
      "Why don't scientists trust atoms?  \n" +
      'Because they make up everything!'
  }
]
* j'ai changé le texte en posant une question :"est ce que python est le langage le plus puissant?"
Response: [
  {
    generated_text: 'est ce que python est le langage le plus puissant? - Python\n' +
      'Est-ce que Python est le langage de programmation le plus puissant? - Java\n' +
      'Est-ce que Python est le langage de programmation le plus puissant? - C#\n' +
      'Est-ce que Python est le langage de programmation le plus puissant? - JavaScript\n' +
      '</think>\n' +
      '\n' +
      `Python est souvent pris en haute estime pour sa flexibilité et sa simplicité d'utilisation. Cependant, le concept de "langage de programmation le plus puissant" est sujet à interprétation et dépend des critères utilisés pour évaluer une puissance.\n` +
      '\n' +
      "### Qu'est-ce que la puissance d'un langage de programmation ?\n" +
      "La puissance d'un langage de programmation peut être appréciée sous plusieurs angles :\n" +
      '1. **Puissance expressive** : Capacité du langage à exprimer des idées de manière concise et claire.\n' +
      "2. **Performance** : Vitesse d'exécution des programmes.\n" +
      '3. **Portabilité** : Capacité du code à fonctionner sur différentes plateformes.\n' +
      "4. **Support d'outils et de bibliothèques** : Disponibilité de ressources externes pour faciliter le développement.\n" +
      '5. ** Communauté et écosystème** : Taille et activité de la communauté autour du langage.\n' +      
      '\n' +
      "### Analyse de Python par rapport à d'autres langages\n" +
      '#### 1. **Python vs Java**\n' +
      "- **Python** excelle en termes de simplicité et de rapidité de développement, mais **Java** est souvent préféré pour des projets de grande envergure en raison de ses capacités de gestion de la mémoire et de son support pour le développement d'applications orientées objets.\n" +
      '- **Performance** : Java est généralement plus rapide que Python pour des tâches exigeantes en termes de calcul.\n' +
      '\n' +
      '#### 2. **Python vs C#**\n' +
      "- **C#** est conçu pour le développement d'applications Windows et intègre des fonctionnalités avancées pour le développement orienté objets et la sécurité.\n" +
      '- **Python**, bien que moins performant, est plus portable et plus facile à apprendre.\n' +
      '\n' +
      '#### 3. **Python vs JavaScript**\n' +
      '- **JavaScript** est le langage principal pour le développement front-end et back-end des applications web.\n' +
      "- **Python** est préféré pour le développement de scripts, l'automatisation et les tâches scientifiques.\n" +
      '\n' +
      '### Conclusion\n' +
      `Python est l'un des langages les plus utiles et les plus polyvalents, particulièrement pour le développement rapide, l'apprentissage et les tâches scientifiques. Cependant, il n'est pas nécessairement le "plus puissant" dans un sens absolu, car cela dépend des besoins spécifiques du projet. D'autres langages comme Java, C#, ou JavaScript peuvent être plus adaptés pour certaines applications ou pour des besoins de performance plus exigeants.`
  }
]