# Mon Projet
******************Traduction du texte et explications**********************
--------------->Titre du projet :
 Création d'un site web personnel (Portfolio)
Leçon importante aujourd'hui : appliquer tout ce que nous avons appris jusqu'à présent en HTML et CSS pour créer un site personnel respectant les normes du web, avec un design élégant et adaptable. Ce site sera également responsive (s'adapte à toutes les tailles d'écran).
Étapes :
-----------------Création de la structure du projet------------------------

--->Créez un dossier pour le projet. À l'intérieur, ajoutez deux sous-dossiers :
images : pour stocker toutes les images nécessaires.
icons : pour stocker toutes les icônes utilisées.
Téléchargez les images à partir de sites gratuits et rangez-les dans ces dossiers.
les liens :
icons : https://icon-icons.com/fr/recherche/icones/?filtro=shape
images: https://www.hiclipart.com/search?clipart=Vue.js#google_vignette
forme: https://fr.freepik.com/search?format=search&last_filter=page

------>2-Etapes:
--------------------Structure de base en HTML-----------------------------:

---->Créez un fichier index.html dans le dossier principal.
Ajoutez la structure HTML de base :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio personnel">
    <meta name="keywords" content="portfolio, développeur web, projets, HTML, CSS, JavaScript">

    <title>Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Bienvenue sur mon Portfolio</h1>
    </header>
    <main>
        <section class="introduction">
            <h2>À propos de moi</h2>
            <p>Développeur passionné, voici mon travail.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Mon Portfolio</p>
    </footer>
</body>
</html>
---------------------EXPLICATION DU CODE-----------------------------------
1. Déclaration du document : <!DOCTYPE html>
Signification : Indique au navigateur que ce document est écrit en HTML5.
Rôle : Permet au navigateur de rendre le contenu de la manière standard, évitant les modes de compatibilité.
2. Balise <html lang="fr">
Signification : Déclare que le contenu est en français.
Rôle : Aide les moteurs de recherche et les lecteurs d'écran à comprendre la langue principale de la page.
3. Section <head>
    Contient des métadonnées et des liens vers des ressources externes.
    
    a. <meta charset="UTF-8">
    Signification : Définit l'encodage des caractères en UTF-8.
    Rôle : Permet de supporter tous les caractères, y compris les caractères spéciaux et accentués.
    b. <meta name="viewport" content="width=device-width, initial-scale=1.0">
Signification : Définit la manière dont la page doit être affichée sur les appareils mobiles.
Rôle : Adapte la mise en page au dispositif utilisé, notamment pour les écrans de différentes tailles.
c. <meta name="description" content="Portfolio personnel">
Signification : Fournit une description courte de la page.
Rôle : Améliore le référencement (SEO) et donne un aperçu aux utilisateurs dans les moteurs de recherche.
d. <title>Portfolio</title>
Signification : Définit le titre de la page.
Rôle : Affiché dans l'onglet du navigateur et utilisé par les moteurs de recherche.
e. <link rel="stylesheet" href="css/style.css">
Signification : Lien vers une feuille de styles CSS externe située dans le dossier css.
Rôle : Permet de styliser la page.
4. Section <body>
Contient tout le contenu visible de la page.

a. <header>
Signification : Représente l'en-tête de la page.
Rôle : Souvent utilisé pour inclure un titre principal, un logo ou une navigation.
i. <h1>Bienvenue sur mon Portfolio</h1>
Signification : Titre principal de la page.
Rôle : Fournit une information clé et est souvent la première chose lue par les moteurs de recherche.
b. <main>
Signification : Contient le contenu principal de la page.
Rôle : Permet de structurer le contenu pour une meilleure lisibilité.
i. <section class="introduction">
Signification : Représente une section distincte nommée "introduction".
Rôle : Structure le contenu pour un accès plus facile.
- <h2>À propos de moi</h2>
Signification : Titre de niveau 2 pour la section.
Rôle : Indique un sous-titre de la page.
- <p>Développeur passionné, voici mon travail.</p>
Signification : Un paragraphe décrivant l'auteur.
Rôle : Fournit un résumé concis et engageant.
c. <footer>
Signification : Représente le pied de page.
Rôle : Contient souvent des informations comme le copyright ou des liens supplémentaires.
 i. <p>&copy; 2025 Mon Portfolio</p>
 Signification : Affiche une mention de droits d'auteur pour l'année 2025.
 Rôle : Indique que le contenu est protégé.
 Explication des attributs :
name="keywords"
Indique que cette balise contient des mots-clés pour la page.
content="..."
Contient les mots-clés séparés par des virgules. Ces mots doivent être pertinents par rapport au contenu de la page.
Rôle :
Historiquement, cette balise était utilisée par les moteurs de recherche pour améliorer le référencement (SEO) en indiquant les termes importants associés au contenu.
Cependant, elle est aujourd'hui largement ignorée par les moteurs de recherche principaux (comme Google) car elle a souvent été utilisée à mauvais escient (spamming de mots-clés).
Est-ce toujours utile ?
Non pour le SEO moderne : Les moteurs de recherche se basent davantage sur le contenu visible, les titres, et d'autres métadonnées comme la balise <title> et <meta name="description">.
Oui pour d'autres usages : Elle peut être utilisée à des fins spécifiques, comme pour des moteurs de recherche internes à un site.
Conseils :
N'utilisez pas cette balise pour optimiser le SEO moderne.
Concentrez-vous sur un contenu de qualité, des titres bien structurés, et des balises comme <meta name="description">.
3-Ajout de styles CSS :
Créez un dossier css contenant un fichier style.css.
Rattachez le fichier CSS au fichier HTML (<link rel="stylesheet" href="css/style.css">).
4-changer l'icone:
La balise <link rel="icon"> est utilisée pour définir l'icône qui apparaît dans l'onglet du navigateur, appelée "favicon". Voici un guide pour mieux comprendre et modifier cette balise.

Exemple expliqué :
html
Copier le code
<link rel="icon" href="Icones/Blackboard512_44187.ico">
rel="icon" :

Indique que cette balise est utilisée pour spécifier une icône.
href="Icones/Blackboard512_44187.ico" :

Spécifie le chemin vers l'icône.
Le chemin peut être relatif (comme ici) ou absolu (avec un URL complet).
Comment changer l'icône :
Préparez votre favicon :

Format recommandé : .ico, .png, ou .svg.
Taille standard : 16x16, 32x32, ou 64x64 pixels.
Vous pouvez générer un favicon à partir d'une image sur des outils en ligne comme Favicon Generator.
Placez le fichier dans votre projet :

Par exemple, dans un dossier nommé images ou assets.
Modifiez le chemin :

Adaptez l'attribut href selon l'emplacement de votre favicon.
Exemple :
html
Copier le code
<link rel="icon" href="assets/favicon.png">
Ajoutez d'autres formats (optionnel) :

Certains navigateurs ou systèmes d'exploitation utilisent différents formats ou tailles :
html
Copier le code
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
Vérifiez dans le navigateur :

--------------------------------------
Utilisez des fichiers .png pour une meilleure qualité visuelle.
Gardez le favicon simple et reconnaissable, car il sera affiché à petite échelle.
Besoin d'aide pour concevoir ou intégrer votre favicon ? 😊
5-télécharger les styles de caractère dans google font
Étape 1 : Accéder à Google Fonts
Rendez-vous sur le site officiel de Google Fonts.
Parcourez les polices disponibles et cliquez sur celle que vous souhaitez utiliser.
Étape 2 : Personnaliser et télécharger la police
Sélectionner les styles :

Après avoir cliqué sur une police, choisissez les variantes (par exemple, Regular 400, Bold 700) dont vous avez besoin.
Une fois sélectionné, un panneau "Selected Family" apparaît à droite.
Télécharger la police :

Cliquez sur l'icône Téléchargement dans le coin supérieur droit du panneau "Selected Family".
Un fichier .zip contenant les fichiers de police (.ttf, .woff, .woff2, etc.) sera téléchargé.
Étape 3 : Ajouter la police à votre projet
Décompressez le fichier :

Extrayez les fichiers .zip téléchargés.
Placez les fichiers de police dans un dossier de votre projet, par exemple, assets/fonts/.
Appliquer la police :

Utilisez la propriété font-family dans vos styles CSS 
 body {
    font-family: 'NomDeLaPolice', sans-serif;
}
  Étape 4 : Option pour inclure la police en ligne (sans téléchargement)
Si vous ne souhaitez pas télécharger la police, utilisez directement le lien Google Fonts :

Copiez le lien fourni dans le panneau "Selected Family" :
html
Copier le code
<link href="https://fonts.googleapis.com/css2?family=NomDeLaPolice:wght@400;700&display=swap" rel="stylesheet">
Ajoutez-le dans votre fichier HTML, dans la section <head> :
html
Copier le code
<head>
    <link href="https://fonts.googleapis.com/css2?family=NomDeLaPolice:wght@400;700&display=swap" rel="stylesheet">
</head>
---------------------------------------------------6-STYLISER LA PAGE/--------------------------------------------------
:root {
    --primary-color: #ff274b;
    --secondaryColor: #f7bcf7;
    --lightColor: #ffffff;
    --bgColor-1: #171a1c;
    --bgColor-2: #22282a;
    --pading: 8%;
}
--------------------------------------------------EXPLICATION-------------------------------------------------------------------------------
Ce code utilise le sélecteur :root pour définir des variables CSS. Ces variables peuvent ensuite être utilisées dans le reste de la feuille de style pour faciliter la gestion et la réutilisation des valeurs. Voici une explication détaillée :

1. Sélecteur :root
root est un pseudo-sélecteur qui cible l'élément racine de la page HTML.
En pratique, cela équivaut généralement à l'élément <html>.
Utiliser :root pour déclarer des variables permet de les rendre accessibles à l'ensemble du document, car les styles définis à ce niveau ont une portée globale.

2. Variables CSS
Les variables sont définies avec la syntaxe --nom-de-la-variable: valeur;. Voici ce que signifient les variables déclarées :

--primary-color: #ff274b;

Définit une couleur primaire, ici un rouge vif.
Peut être utilisée pour des éléments principaux comme des boutons, des liens, ou des titres.
--secondaryColor: #f7bcf7;

Définit une couleur secondaire, ici un rose pâle.
Utilisée souvent pour les accents ou les éléments moins dominants.
--lightColor: #ffffff;

Définit une couleur claire, ici le blanc.
Souvent utilisée pour les textes ou les arrière-plans.
--bgColor-1: #171a1c;

Définit une première couleur d'arrière-plan, ici un gris très foncé.
Peut être utilisée pour l'arrière-plan principal.
--bgColor-2: #22282a;

Définit une deuxième couleur d'arrière-plan, légèrement plus claire que la précédente.
Utilisée pour des zones contrastées comme des cartes, des blocs ou des sections.
--pading: 8%;

Définit une variable pour une marge intérieure (padding), ici équivalente à 8% de la largeur de l'élément parent.
Cette valeur pourrait être utilisée pour des espacements uniformes dans la mise en page.
7------------------------------------------>DEFINIR LES STYLES D'UNE CLASSE .home
explication du code:.home{
    width: 100%;
    height: 100vh;
    background-color: var(--bgColor-1);
}


Ce code CSS définit les styles d'une classe .home. Voici une explication détaillée :

1. Sélecteur : .home
La classe home est appliquée à un élément HTML.
Tous les styles définis à l'intérieur du bloc {} s'appliqueront aux éléments ayant cette classe.
2. Propriétés et Valeurs
Voici les propriétés utilisées dans le bloc et leur signification :

a) width: 100%;
Définit la largeur de l'élément à 100% de la largeur de son conteneur parent.
Cela signifie que l'élément prendra toute la largeur disponible.
b) height: 100vh;
Définit la hauteur de l'élément à 100% de la hauteur de la fenêtre du navigateur (viewport height).
1vh équivaut à 1% de la hauteur de la fenêtre visible.
En réglant 100vh, l'élément occupera toute la hauteur visible de l'écran.
c) background-color: var(--bgColor-1);
Définit la couleur de fond de l'élément en utilisant une variable CSS personnalisée :
var(--bgColor-1) fait référence à une variable définie dans le :root.
Exemple : Si vous avez dans votre CSS :


:root {
    --bgColor-1: #171a1c;
}
Alors, la couleur de fond sera #171a1c (un gris foncé).
7---------------------------------------------------> AJOUT D'UNE NAV BARRE

  <section class="home">
        <nav>
            <h2>programmation<samp>Online</samp></h2>
        </nav>
   </section>
   EN AJOUTANT DU STYLE DANS LE CSS DANS LA CLASSE .home{}
    color: var(--lightColor);
  Pour chnage la couleur du mot dans le spam il faut utiliser le style suivant:
  8------------------------------------------------> ajout du style sur H2
    h2{
    font-size: 2.2rem;
    letter-spacing: 0.12rem;
    cursor: pointer;
}
------------------------------------------------->EXPLICATION DU CODE:
 Voici l'explication détaillée de ce code CSS appliqué aux éléments <h2> :

1. Sélecteur : h2
Ce style s'applique à tous les éléments <h2> dans le document HTML.
2. Propriétés et Valeurs
Voici chaque propriété et sa signification :

a) font-size: 2.2rem;
Définit la taille du texte à 2.2rem.
rem : Unité relative à la taille de la police définie sur l'élément <html> (racine).
Exemple : Si la taille de la police sur <html> est définie à 16px, alors :
Copier le code
2.2rem = 2.2 × 16px = 35.2px
b) letter-spacing: 0.12rem;
Définit l'espacement entre les lettres à 0.12rem.
Cela ajoute un écart supplémentaire entre chaque lettre.
Exemple : Si la taille de la police sur <html> est 16px, alors :
Copier le code
0.12rem = 0.12 × 16px = 1.92px
c) cursor: pointer;
Change l'apparence du curseur lorsque l'utilisateur survole un élément <h2>.
Affiche un curseur en forme de main (👆), indiquant que l'élément est cliquable.
C'est souvent utilisé pour indiquer une interaction, comme un lien ou un bouton.

9---------------------------------------------------->AJOUT DU STYLE SUR LA NAV
nav{
    background-color: red ;
}

10---------------------------------------------------> CREATION DU MENU
 <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">A bout me</a></li>
                <li><a href="#home">Service</a></li>
                <li><a href="#home">Skills</a></li>
                <li><a href="#home">Contact Me</a></li>
            </ul>
Mise en forme de la liste: dans le css dans la classe nav:

    display: flex;
    justify-content: space-between;
    align-items: center;

11------------------------------------------------------>Sélecteur 1 : nav ul li
a) list-style-type: none;
Supprime les puces ou les numéros par défaut des éléments de liste <li>.
Exemple : Si la liste était ordonnée ou non ordonnée, les puces ou les numéros ne seront plus visibles.
b) display: inline-block;
Change la disposition des éléments de liste <li> pour qu'ils s'affichent horizontalement les uns à côté des autres, comme des blocs alignés en ligne.
Contrairement au comportement par défaut où les <li> sont empilés verticalement.
c) margin: 0.8rem 1.5rem;
Ajoute de l'espace autour de chaque élément <li> :
0.8rem : Marge verticale (haut et bas).
1.5rem : Marge horizontale (gauche et droite).
Sélecteur 2 : nav ul li a
a) color: var(--lightColor);
Définit la couleur du texte des liens <a> dans les éléments de liste, en utilisant la variable CSS --lightColor.
--lightColor est probablement définie ailleurs (comme dans :root).
Exemple : Si --lightColor vaut #ffffff, les liens seront blancs.
b) text-decoration: none;
Supprime les décorations de texte des liens, comme le soulignement par défaut des <a>.
c) text-transform: capitalize;
Transforme la première lettre de chaque mot du texte du lien en majuscule, si ce n’est pas déjà le cas.
Exemple :
Texte original : accueil
Affichage : Accueil
Résumé du Code
Premier Sélecteur (nav ul li) :
Supprime les puces des listes.
Affiche les éléments <li> horizontalement avec des marges autour.
Deuxième Sélecteur (nav ul li a) :
Définit la couleur des liens avec une variable CSS.
Supprime le soulignement des liens.
Formate le texte en capitalisant la première lettre.
Exemple d'Usage HTML


<nav>
   <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About me</a></li>
                <li><a href="#home">Service</a></li>
                <li><a href="#home">Skills</a></li>
                <li><a href="#home">Contact Me</a></li>
            </ul>
        </nav>
</nav>
Résultat Visuel
Les liens "Accueil", "Home", "About Me" s’affichent horizontalement, avec de l’espace entre eux.
Ils auront la couleur définie par --lightColor et ne seront pas soulignés.

12------------------------------------------------------->Sélecteur : nav ul li a:hover
Sélecteur : nav ul li a:hover
nav ul li a:hover cible les liens (<a>) dans les éléments de liste (<li>) du menu de navigation (<nav>), mais seulement lorsque l'utilisateur survole le lien avec la souris.
Propriétés CSS :
a) color: var(--primary-color);
Effet au survol : Lorsque l'utilisateur survole le lien, la couleur du texte change.
var(--primary-color) est une variable CSS définie ailleurs (probablement dans :root), et représente la couleur principale du site.
Exemple : Si --primary-color est défini comme #ff274b, le texte du lien devient cette couleur pendant le survol.
b) transition: 0.4s;
Transition visuelle : La propriété transition ajoute une animation fluide entre l'état initial et l'état au survol. Ici, elle est appliquée à la propriété color du lien.
0.4s : La durée de la transition est de 0,4 seconde. Cela signifie que la couleur du texte du lien changera progressivement en 0,4 seconde au lieu de changer instantanément.
La transition peut être appliquée à d'autres propriétés CSS également, mais ici elle s'applique uniquement à la couleur du texte.
13- Ajout de bouton Subscribe
<a href="#" class="btn">Subscribe</a>
-le style css:
.btn{
    background-color: var(--primary-color);
    color: var(--lightColor);
    text-decoration: none;
    font-weight: bold;
    padding: 0.81rem 1.87rem;
    border-radius: 30px;
}
Ce code CSS définit le style d'un bouton avec la classe .btn. Voici une explication détaillée de chaque propriété utilisée :

Sélecteur : .btn
.btn : Ce sélecteur cible tous les éléments HTML qui ont la classe btn. Typiquement, cela s'applique à un bouton <button>, un lien <a>, ou tout autre élément HTML avec cette classe.
Propriétés CSS :
a) background-color: var(--primary-color);
Couleur de fond : Cette propriété définit la couleur de fond du bouton.
var(--primary-color) : Cela utilise une variable CSS définie ailleurs dans le code (probablement dans :root), qui représente la couleur principale du site.
Par exemple, si --primary-color est défini comme #ff274b, le fond du bouton sera de cette couleur.
b) color: var(--lightColor);
Couleur du texte : Cette propriété définit la couleur du texte à l'intérieur du bouton.
var(--lightColor) : Cela fait référence à une autre variable CSS, probablement définie comme une couleur claire (par exemple, le blanc).
Par exemple, si --lightColor est défini comme #ffffff, le texte du bouton sera blanc.
c) text-decoration: none;
Suppression de la décoration de texte : Cette propriété supprime toute décoration de texte qui pourrait être appliquée par défaut, comme le soulignement.
Cela est particulièrement utile si la classe .btn est utilisée sur un élément <a>, qui aurait normalement un soulignement par défaut. Ici, il n'y aura pas de soulignement sur le lien.
d) font-weight: bold;
Poids de la police : Cette propriété applique un texte en gras (bold) au bouton, ce qui rend le texte plus épais et donc plus visible.
e) padding: 0.81rem 1.87rem;
Espacement interne (padding) : La propriété padding définit l'espace entre le contenu du bouton (le texte) et ses bords.
0.81rem pour l'espacement vertical (en haut et en bas).
1.87rem pour l'espacement horizontal (à gauche et à droite).
Cela permet de rendre le bouton plus grand et plus facile à cliquer en ajoutant de l'espace autour du texte.
f) border-radius: 30px;
Bords arrondis : Cette propriété applique un rayon de bordure de 30 pixels, ce qui arrondit les coins du bouton.
Cela donne au bouton un aspect plus moderne et esthétique, avec des coins lisses plutôt que des coins droits.
14----------------------------------------------------------> Utilisation d'un effet visuel interactif sur le bouton "s'abonner"


.btn:hover{
    background-color: transparent;
    border: 2px solid var(--primary-color);

} 
------>Décomposition et explication :
.btn:hover :

Sélecteur qui cible les éléments HTML ayant la classe .btn.
Le pseudo-classe :hover s'applique lorsque l'utilisateur passe la souris au-dessus de l'élément.
Cela signifie que ce style ne s'active que pendant le survol de la souris sur un bouton avec la classe .btn.
background-color: transparent; :

Change la couleur de fond de l'élément en transparent pendant le survol.
Cela signifie que l'arrière-plan de l'élément devient invisible, laissant voir le contenu ou l'arrière-plan sous-jacent.
border: 2px solid var(--primary-color); :

Définit une bordure de 2 pixels d'épaisseur autour de l'élément.
La bordure est de type solide (solid).
La couleur de la bordure est déterminée par la variable CSS --primary-color.
Les variables CSS sont déclarées avec la syntaxe --nom-variable (généralement dans un sélecteur :root ou un autre élément parent). Elles permettent une gestion centralisée et dynamique des couleurs ou d'autres propriétés.
15-------------------------------------------------> Pour qu'on puisse afficher les images de manière responsive et ordonnée :
 il faut créer une div :
 --->Démarche :
Créer une div pour contenir les images :
La structure HTML inclut une balise <div> pour regrouper les images.
Exemple :

<div class="content"></div>
Cette div sert de conteneur principal pour les images ou tout autre contenu à afficher.
Styliser la div dans le fichier CSS :
On applique des styles à cette div via la classe content pour contrôler son comportement, en particulier lorsqu'elle est placée dans un parent flexible.

Exemple :


.content {
    flex-grow: 1;
}
flex-grow: 1; :
Cette propriété permet à la div .content de prendre tout l'espace disponible restant dans son conteneur parent (ici .home). Cela rend la mise en page flexible et adaptative.
Configurer le parent avec .home :
La classe .home est le conteneur parent qui englobe .content.
Les styles appliqués à .home déterminent comment ses enfants (comme .content) se positionnent.

Exemple :


.home {
    display: flex;
    flex-direction: column;
}
display: flex; :
Définit un conteneur flexbox, permettant une organisation flexible des éléments enfants.
flex-direction: column; :
Aligne les enfants (comme .content) verticalement
Explication du comportement :
.home agit comme un conteneur principal et organise ses enfants (y compris .content) en une colonne.
.content remplit dynamiquement tout l’espace disponible grâce à flex-grow: 1.
Si des images ou du texte sont placés dans .content, ils occuperont cet espace et s'ajusteront en fonction de la taille de la fenêtre.
Puis on rajoute la div suivante pour pouvoir afficher le contenue:
<div class="container-texts">
                <h4>Bonjour mon nom est</h4>
                <h1>Abdelkader<samp>Jaadar</samp></h1>
                <h3>Je suis <samp>Développeur</samp>Full stack</h3>
</div>

Puis dans le css on rajoute le code suivant dans la classe .content: 
 padding: 0 var(--pading); 
 ce code permet d'alligner du contenue au meme niveau 
Sélecteur .content :

La règle s'applique à un élément ayant la classe content. Cependant, dans votre HTML, la classe content n'est pas utilisée. Cela peut indiquer que vous souhaitez cibler un autre élément (peut-être une classe parent pour organiser le contenu global, comme container-texts).
padding: 0 var(--pading); :

padding : Ajoute un espacement interne autour du contenu de l'élément.
0 : Pas d'espacement en haut et en bas.
var(--pading) :
Utilisation d'une variable CSS appelée --pading.
Si cette variable est définie dans le fichier CSS ou dans une déclaration :root, elle sera utilisée pour créer un espacement horizontal (gauche et droite).
-->Mettre le contenue en plein milieu de la div classe"content" et pas de la page.
c'est pour cela il faut utiliser lestyle suivant de la classe .content:
display: flex;
align-items: center;
-->Définit la position de l'élément container comme relative par rapport à sa position normale
.container {
    position: relative;
    bottom: 70px;
}
----------------------------------------------------------->EXPLICATION:
position: relative; :
Définit la position de l'élément comme relative par rapport à sa position normale (position de base dans le flux du document).
Avec cette propriété, les valeurs de décalage (comme bottom, top, left, right) déplaceront l'élément sans affecter les autres éléments autour de lui.
Cela signifie que l'élément sera visuellement déplacé tout en occupant toujours son espace d'origine dans le flux de mise en page.
2. bottom: 70px; :
Décale l'élément de 70 pixels vers le haut par rapport à sa position initiale.
En CSS, bottom est utilisé pour ajuster la position verticale d'un élément :
Une valeur positive pousse l'élément vers le haut.
Une valeur négative le déplace vers le bas.
-->changer la couleur de l'élément H4 dans la classe h4
 color: var(--secondaryColor);
-->Créer La balise <a>  pour créer un lien hypertexte, pour télécharger le CV
<a href="cv.pdf" class="btn">Télécharger votre CV</a>
--------------------------------------------------------->EXPLICATION

<a> (Balise d’ancre) :

La balise <a> est utilisée pour créer un lien hypertexte.
Elle permet de naviguer vers une autre page, un fichier ou une section de la même page, ou encore de télécharger un fichier.
href="#" :

L'attribut href (Hypertext REFerence) spécifie la cible du lien.
Ici, la valeur est "#", ce qui signifie que le lien ne redirige nulle part pour l’instant (c'est un lien vide).
Il peut être remplacé par un chemin ou une URL. Par exemple :
href="cv.pdf" : Permettrait de télécharger un fichier PDF appelé "cv.pdf" se trouvant dans le même répertoire.
href="https://example.com/cv.pdf" : Permet de télécharger un fichier à partir d’une URL.
class="btn" :

Attribue une classe CSS appelée btn à cet élément.
Cette classe est utilisée pour appliquer des styles spécifiques (boutons, apparence personnalisée, animations, etc.).
Contenu entre les balises :

Le texte "Télécharger votre CV" est le contenu affiché à l’intérieur du bouton.
C’est ce que l’utilisateur verra et pourra cliquer dessus.
-->Créer de l'espace entre le contenue et le boutton "télécharger votreCV"
Dans le h3
 margin-bottom: 3rem ;
 -->Ajout d'une section div contenant des liens pour différentes plateformes de médias sociaux, 
 -->styliser la section .social
 CSS est bien conçu pour styliser la section .social et les images associées. Voici quelques points à considérer et des suggestions pour affiner le style :

Points positifs :
Espacement cohérent :
La marge supérieure de .social (margin-top: 3.5rem) ajoute un bon espacement entre cette section et l'élément précédent.

Contrôle de la taille des images :
La largeur des images est définie avec width: 2.5rem, ce qui assure une taille uniforme.

Espacement horizontal entre les images :
La propriété margin-right: 2rem offre un espacement clair et équilibré entre les images.
-->Ajout  d'un effet de zoom au survol des images (résaux sociaux) dans la classe .social img:hover et dans la classe 
.social img{
transition: 0.4s;
}


.social img:hover{
    transform: scale(1.2);
} 
---------------------------------------------------------------->EXPLICATION DU CODE:
code CSS fonctionne correctement pour ajouter un effet de zoom au survol des images dans la classe .social. Voici quelques observations et suggestions pour perfectionner ce style :

Points positifs :
Effet de zoom agréable :
La propriété transform: scale(1.2) agrandit légèrement les images, ce qui attire l'attention sur les éléments interactifs.

Simplicité du code :
L'approche est concise et efficace.
-->Ajout du lien suivant:
 <a href="https://www.youtube.com/results?search_query=apprendre+a+coder+debutant" target="_blank"><img src="Images/Youtub.png"></a>

 ------------------------------------------------------------------>explication:
balise HTML pour le lien YouTube semble correcte dans sa structure générale, mais il y a quelques points que vous pourriez améliorer pour assurer son bon fonctionnement et son accessibilité :
Utilisation de target="_blank" :
Maintenu pour ouvrir le lien dans un nouvel onglet.

15-Ajout de la div suivante: pour afficher l'image arrière plan avec l'image forme rouge
                
            <div class="container-images">
               <img src="Images/coeur-vert-fond-vert_391639-2213.avif" alt="" class="forme">
               <img src="Images/etudiant-ayant-doutes_1368-9231.avif" alt="" class="MonImage">
            </div>
--> css appliqué :

.container-images{
    width: 45%;
    height: 90%;
    position: relative;
  
    align-self: flex-end;
}
.container-images img{
    position: absolute;
    bottom: 0;
}
--------------------------------------------------------------->EXPLICATION DU CODE:
 CSS est bien structuré pour positionner une image à l'intérieur d'un conteneur. Voici un décryptage et quelques suggestions pour améliorer votre design ou résoudre d'éventuels problèmes.

Analyse de votre code :
1. Conteneur (.container-images)
width: 45%; : Définit une largeur de 45% par rapport au conteneur parent.
height: 90%; : Définit une hauteur relative au conteneur parent.
position: relative; : Nécessaire pour que les éléments enfants (les images) puissent être positionnés en absolu à l'intérieur du conteneur.
align-self: flex-end; : Si le conteneur est un élément d'un flex container, cela l'aligne en bas dans l'axe principal.
2. Images (.container-images img)
position: absolute; : Permet de positionner l'image par rapport au conteneur parent (.container-images).
bottom: 0; : Positionne l'image au bas du conteneu

--> aprés on a rajouté ce code css:
 justify-content: space-between;

L'ajout de la propriété justify-content: space-between; est utile si votre conteneur .container-images est un élément flexible (avec display: flex; ou display: inline-flex;). Cette propriété distribue l'espace restant entre les éléments enfants, en plaçant le premier et le dernier élément aux extrémités.
Effet attendu :
Les éléments enfants (par exemple, vos images) seront répartis avec un espace égal entre eux.
Le premier élément sera aligné à gauche et le dernier à droite, avec les autres éléments également espacés.
--->on rajoute le style suivant pour avoir l'image en grand: dans la classe:
 .container-images img{
 height: 100%;
}
--> centrer horizontalement un élément positionné absolument par rapport à son conteneur parent
dans la classe :
.container-images img{

    left: 50%;
    transform: translatex(-50%);
}
Explication :
left: 50%;

Positionne le côté gauche de l'élément au milieu (50%) de son conteneur parent.
transform: translateX(-50%);

Décale l'élément vers la gauche de 50% de sa propre largeur, ce qui le centre exactement dans le conteneur.
!!!!Quand utiliser ce code ?
Pour centrer un élément horizontalement au sein d'un conteneur.
Nécessite que le conteneur parent ait une position définie (relative, absolute, ou fixed).
-->crée des effets d'animation :
 crée des effets d'animation ou de mouvement pour les éléments ayant les classes .shape et .Pic lorsqu'un utilisateur survole leur conteneur parent .container-images. Voici une analyse et quelques suggestions pour peaufiner ce comporteme:

 .container-images:hover .shape{
    bottom: 40px;
}
.container-images:hover .Pic{
    left: 45%;
}
Effet sur .shape :
Lorsqu'on survole le conteneur .container-images, l'élément .shape est déplacé verticalement à 40 pixels à partir de son conteneur parent.
Cela suppose que .shape ait une position définie comme absolute ou relative avec un bottom déjà configuré.
Effet sur .Pic :
Lors du survol, l'élément .Pic est positionné horizontalement à 45% de la largeur de son conteneur parent.
Cela suppose que .Pic ait une position absolute ou relative avec un left initial configuré.
-->définissez un délai d'animation : 
    .container-images img{
    transition: bottom 1s, left 1s;
}
transition: bottom 1s, left 1s;
EXPLICATION DU CODE:
définissez un délai d'animation de 1 seconde pour les changements des propriétés bottom et left. Cela rendra les mouvements des éléments plus fluides lorsqu'ils passent d'une position à une autre.
Effets de cette transition :
bottom 1s :

Lorsque la propriété bottom est modifiée (par exemple, avec un survol ou une classe ajoutée), l'animation s'effectue progressivement sur 1 seconde.
left 1s :

Même chose pour les changements de la propriété left.
16-Ajout d' une section d'une page web:

  <section class="Apropos">
    <div class="container-imgs">
        <img src="Images/Bureau.jpg" alt=""/>
    </div>
    <div class="container-texts">

    </div>
   </section>
    explication du code:
    Ce code HTML décrit une section d'une page web qui est identifiée par la classe CSS Apropos. Voici une explication détaillée des différents éléments :

Structure générale
<section class="Apropos">:
Ce conteneur section délimite une partie de la page, ici nommée Apropos grâce à sa classe CSS. Cela permet d'appliquer des styles spécifiques à cette section à l'aide de CSS.
<div class="container-imgs">:
Un conteneur nommé container-imgs, utilisé pour regrouper des images ou appliquer un style spécifique à leur disposition.
<div class="container-texts">:
Un conteneur vide pour l'instant, destiné à inclure du texte ou des informations supplémentaires liées à cette section Apropos. Le contenu peut être ajouté ultérieurement.

-->Ajouter une classe comme .home devant une autre classe (dans cet exemple, .home .container-images) dans une règle CSS sert à spécifier un contexte ou une relation hiérarchique entre les éléments HTML. Voici une explication détaillée :

  .home .container-images{}
  .home .container-images img{}
  .home .container-images:hover .Pic{}

 Dans ce cas, la règle .home .container-images signifie que les styles s'appliquent uniquement aux éléments ayant la classe container-images à l'intérieur d'un conteneur parent avec la classe home. 

 --->Styles pour la section .about 
 .about{
    background-color: var(--bgColor-2);
    padding: 2rem var(--pading);
}
.about .container-images{
    width: 35%;
}
.about .container-images img{
    width: 90%;
}
Définit une couleur de fond pour la section about.
var(--bgColor-2) utilise une variable CSS. Cela permet de centraliser les couleurs et de les réutiliser dans tout le projet.
Assurez-vous que --bgColor-2 est bien défini quelque part dans votre CSS principal ou dans le fichier de variables, par exemple :
Styles pour le conteneur d’images (.container-images) :
Le conteneur .container-images occupe 35% de la largeur de son conteneur parent (par exemple, section.about).
Cela permet de limiter la taille du conteneur d'images, utile pour organiser la mise en page.
L’image à l’intérieur du conteneur occupe 90% de la largeur de son conteneur parent.
Cela signifie qu'elle est légèrement réduite (10% de marge) par rapport à la largeur de .container-images.
-->Ajouter le h1 et le h3 puis le paragraphe:
-->utiliser le css dans la classe .about pour afficher l'image et le contenue l'un en face de l'autre
  display: flex;

--->position du texte:
.about .container-texts{
    width: 35%;
}
Ciblage :

Il cible l'élément avec la classe .container-texts qui se trouve à l'intérieur de la section ayant la classe .about.
Effet du style width: 35%; :

Le conteneur de texte occupe 35% de la largeur de son élément parent. Si .about est configuré en tant que conteneur principal, alors .container-texts occupera 35% de sa largeur totale.
Cela permet de créer une mise en page équilibrée, souvent utilisée pour aligner le texte à côté d'une image ou d'autres éléments.
-->dans la classe .about on utilise le style suivant:

     align-items: center;
    justify-content: space-around ;

Explication du code:
    align-items: center; et justify-content: space-around;
Ces deux propriétés sont utilisées dans le cadre de CSS Flexbox pour aligner les éléments à l'intérieur d'un conteneur. Voici leur fonction :
align-items: center;
Alignement vertical :
Aligne les éléments enfants au centre de l'axe transversal (vertical) du conteneur.
Cela suppose que le conteneur a un display: flex;.
justify-content: space-around;
Alignement horizontal :
Répartit les éléments enfants le long de l'axe principal (horizontal) avec des espaces également répartis autour de chaque élément.
Cela signifie qu'il y aura :
Un espace égal à gauche et à droite des éléments.
Un peu plus d’espace sur les bords extérieurs (par rapport à space-between).

-->styliser tous les paragraphes (<p>) 
p{
    color: var(--secondaryColor);
    letter-spacing: 1px;
    line-height: 1.8rem;
    font-size: 1rem;
}
Explication du code CSS appliqué à <p>
Cette règle CSS stylise tous les paragraphes (<p>) dans votre document. Voici ce que chaque propriété fait :

1. color: var(--secondaryColor);
Définit la couleur du texte.
Utilise une variable CSS appelée --secondaryColor, qui peut être définie dans un autre endroit du CSS (par exemple, dans :root).
Cela permet une uniformité et une facilité de mise à jour des couleurs dans le projet.
2. letter-spacing: 1px;
Ajoute un espacement entre les lettres du texte.
Ici, chaque lettre est séparée par 1 pixel supplémentaire.
Améliore la lisibilité, surtout pour les petites polices ou les titres.
3. line-height: 1.8rem;
Définit la hauteur de ligne pour le texte, soit la distance verticale entre deux lignes.
Une valeur de 1.8rem signifie que l'espacement entre les lignes est basé sur l'unité rem :
1rem correspond généralement à la taille de la police par défaut du navigateur (souvent 16px).
Ici, 1.8rem équivaut à 28.8px (1.8 × 16px).
4. font-size: 1rem;
Définit la taille de la police.
Une taille de 1rem correspond à la taille par défaut de la police dans le document HTML, généralement 16px.
Si la taille par défaut a été modifiée dans html (par exemple font-size: 18px;), alors 1rem sera équivalent à 18px.
-->styliser le h5
h5{
    font-size: 1.37rem ;
    margin-bottom: 1.5rem;
    letter-spacing: 2px;
}
-->Ajout de la section services en bas de la page
<section class="services">
        <h1><samp>Nos</samp> Services</h1>
    </section>
--->style css:
.services{
    background-color: var(--bgColor-1);
    padding: 2rem var(--pading);
}
 -->ajouter une classe text-center dans le h1 "Nos services" pour centerer le contenue
 .text-center{
    text-align: center;
}
-->Créer les dives pour afficher des cartes
<div class="box">
            <div class="card">
                <i class="fa-solid fa-person"></i>
            </div>
  1. Structure de la balise <div class="box">
<div class="box"> : Cette balise représente un conteneur de niveau supérieur. La classe box est probablement utilisée pour appliquer un style particulier à cet élément dans votre fichier CSS.
2. Structure de la balise <div class="card">
<div class="card"> : Ce bloc représente un élément interne à l'élément .box. Il peut contenir d'autres éléments comme des icônes, du texte, des images, etc. La classe card est souvent utilisée pour créer des éléments avec un style de type carte (par exemple avec un fond, une bordure, etc.).
3. Utilisation de l'icône Font Awesome <i class="fa-solid fa-person"></i>
<i class="fa-solid fa-person"></i> : Cela inclut une icône de Font Awesome.
fa-solid : Définit que l'icône sera dans le style "solide", c'est-à-dire remplie.
fa-person : C'est l'icône spécifique, ici une icône de personne (généralement utilisée pour représenter un utilisateur ou un profil).
Code CSS (Suggestion)
Source: l'icone :      https://fontawesome.com/icons/person?f=classic&s=solid
source font-awesome  https://cdnjs.com/libraries/font-awesome
Aprés avoir copier le 1er lien il faut l'insérer dans le header  
-->Dans la section ci-seddus il faut rajouter un paragraphe et le copier 3 fois 
17-afficher différentes cartes (cards) avec du contenu spécifique à chaque carte: juste aprés Nos services:
  <div class="card">
                <i class="fa-solid fa-person"></i>
                <h5>Dev App Mobile</h5>
                <div class="par">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas numquam magni ipsum 
                        distinctio vel tempora unde laborum pariatur dolorem quidem aperiam illum quis corporis, nisi, quibusdam perferendis expedita, molestiae eius?
                    </p>
                </div>
            </div>
1. Structure globale
La balise <div class="box"> encapsule toutes les cartes. Elle agit comme un conteneur principal pour organiser les éléments.
Chaque carte est contenue dans une balise <div class="card">, qui sert de sous-conteneur.
2. Détails des cartes individuelles
Chaque carte contient les éléments suivants :

Une icône :

html
Copier le code
<i class="fa-solid fa-person"></i>
Utilisation de Font Awesome (fa-solid fa-person) pour afficher une icône. L'icône représentée dépend des classes Font Awesome utilisées.
Un titre :

<h5>...</h5>
Chaque carte a un titre court et descriptif, comme "Dev App Mobile", "Dev site web", etc.
Un paragraphe descriptif :


<div class="par">
    <p>...</p>
</div>
-->code CSS et comment il affecte le rendu des éléments HTML décrits précédemment :
.box{
    display: flex;
    justify-content: space-between;
}
.card{
    width: 300px;
    background-color: var(--bgColor-2);
    border-radius: 20px;
    padding: 1.3rem, 2rem;
}
Voici une explication de ce code CSS et comment il affecte le rendu des éléments HTML décrits précédemment :

display: flex; :

La classe .box utilise le modèle de boîte flexible (Flexbox), ce qui permet de disposer les enfants (les cartes) en ligne ou en colonne.
Par défaut, les enfants (les éléments avec .card) sont placés en ligne (row).
justify-content: space-between; :

Les cartes sont espacées uniformément dans la ligne.
Le premier et le dernier élément sont alignés avec les bords gauche et droit du conteneur .box.

2. Styles pour .card
width: 300px; :

Chaque carte a une largeur fixe de 300 pixels.
background-color: var(--bgColor-2); :

La couleur de fond des cartes est définie par une variable CSS appelée --bgColor-2.
Cette variable est souvent définie dans un fichier CSS principal ou dans le :root, par
border-radius: 20px; :

Les coins des cartes sont arrondis avec un rayon de 20 pixels, donnant un aspect plus fluide et moderne.
padding: 1.3rem, 2rem; (à corriger) :

16-------------------------------------------------------------->Création d'une section dédiée aux compétences:
<section class="skills">
         <div class="container-skills">
            <h1>Mes<samp> compétences</samp></h1>
            <div class=" content-skills">
                
                <div class=""><img src="Images/angularjs.png " alt=""></div>
                <div class=""><img src="Images/Css3.png" alt=""></div>
                <div class=""><img src="Images/gitlab.png" alt=""></div>
                <div class=""><img src="Images/Docker.png" alt=""></div>
                <div class=""><img src="Images/Git.png" alt=""></div>
                <div class=""><img src="Images/html5.png" alt=""></div>
                <div class=""><img src="Images/react.png" alt=""></div>
                <div class=""><img src="Images/javascript.png" alt=""></div>
                <div class=""><img src="Images/mongoDB.png" alt=""></div>
                <div class=""><img src="Images/Mysql.png" alt=""></div>
                <div class=""><img src="Images/bootstrap.png" alt=""></div>
                <div class=""><img src="Images/nodejs.png" alt=""></div>
                <div class=""><img src="Images/php.png" alt=""></div>
                <div class=""><img src="Images/Postgre.png" alt=""></div>
                <div class=""><img src="Images/redis.png" alt=""></div>
                <div class=""><img src="Images/redux.png" alt=""></div>

            </div>
        </div>
        <div class="container-images">
            <img src="Images/étudient.jpg" alt=""/>
        </div>
        </section>
------------------------------------------------------------------------------->EXPLICATION DU CODE:
Ce code HTML représente une section dédiée aux compétences, probablement dans une page web de type portfolio ou CV. Voici une explication détaillée des différentes parties du code :
1. Balise <section>
La balise <section> est utilisée pour définir une section thématique ou un contenu spécifique.
Ici, la classe skills est appliquée pour styliser cette section via CSS.
Conteneur principal des compétences
html
Copier le code
<div class="container-skills">
Ce conteneur regroupe tout le contenu lié aux compétences.
3. Titre de la section
html
Copier le code
<h1>Mes<samp> compétences</samp></h1>
Le titre principal "Mes compétences" est encapsulé dans une balise <h1>, qui indique un titre de niveau 1.
La balise <samp> est utilisée pour styliser spécifiquement le mot "compétences". En HTML, elle est généralement destinée à représenter une sortie de code ou une valeur. Ici, elle semble utilisée à des fins esthétiques.
4. Liste des compétences sous forme d'images
html
Copier le code
<div class="content-skills">
Ce conteneur regroupe toutes les compétences, chacune représentée par une image.
Chaque compétence est incluse dans un <div> individuel contenant une balise <img>.
--->Appliquer le style css sur la section:
.skills{
    background-color: var(--bgColor-2);
    padding: 2rem var(--pading);
    display: flex;
    align-items: center;
    justify-content: space-around ;
}

.skills .container-images{
    width: 35%;
}
.skills .container-images img{
    width: 90%;
}
.skills .container-skills{
    width: 40%;
}
.content-skills{
    display: flex;
    flex-wrap: wrap;
}
.skills{
    width: 100%;
    height: 100%;
    background-color: var(--lightColor);
    border-radius: 50%;
    margin: 0.2rem 2rem 0;
}
---------------------------------------------------------------EXPLICATION DU CODE/
Voici une analyse détaillée de ce fichier CSS et de la manière dont il stylise la section .skills :
1. Règles globales pour .skills
background-color: var(--bgColor-2) et var(--lightColor) :

Deux définitions pour la couleur d'arrière-plan sont présentes. La seconde (var(--lightColor)) écrase la première (var(--bgColor-2)).
var(--lightColor) est une variable CSS définie ailleurs et permet de dynamiser la couleur du fond.
padding: 2rem var(--pading) :

Définit un espacement interne (haut/bas : 2rem, gauche/droite : la valeur de var(--pading)).
display: flex :

Active le système de boîte flexible, facilitant l'organisation des éléments enfants (.container-images et .container-skills).
align-items: center et justify-content: space-around :

Aligne les éléments verticalement au centre et les espace horizontalement avec un espace égal autour de chaque élément.
border-radius: 50% :

Transforme l'élément .skills en un cercle ou une forme arrondie.
margin: 0.2rem 2rem 0 :

Ajoute un espacement externe :
Haut : 0.2rem
Droite et gauche : 2rem
Bas : 0
2. .container-images
Conteneur .container-images:

Prend 35% de la largeur totale de la section .skills.
Image dans .container-images:

L'image occupe 90% de la largeur du conteneur.
3. .container-skills
Le conteneur .container-skills prend 40% de la largeur totale de la section .skills.
4. .content-skills
display: flex :

Dispose les éléments enfants en ligne.
flex-wrap: wrap :

Permet aux éléments de passer à la ligne suivante si l'espace horizontal est insuffisant.
17------------------------------------------------------------------------------------Création de footer:
-->Style css
footer{
    padding: 2rem var(--pading);
    background-color: var(--bgColor-1);   
}
footer .content-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
footer .content-footer p{
    color: var(--lightColor);
    text-align: center;
    width: 500px;
}
----------------------------------------------------------------------------------------->EXPLICATION:
Ce fichier CSS gère le style d'un footer (pied de page). Voici une analyse détaillée :

1. Règles globales pour le footer
padding: 2rem var(--pading) :

Ajoute un espacement interne :
Haut et bas : 2rem.
Gauche et droite : défini par la variable --pading.
background-color: var(--bgColor-1) :

Définit la couleur de fond du footer en utilisant une variable CSS, probablement un ton sombre.
2. Contenu principal du footer
display: flex :

Active le système de boîte flexible pour organiser les éléments enfants du conteneur .content-footer.
flex-direction: column :

Les éléments sont disposés en colonne (verticalement).
align-items: center :

Centre les éléments horizontalement.
justify-content: center :

Centre les éléments verticalement.
3. Texte dans le footer
color: var(--lightColor) :

Change la couleur du texte pour correspondre à la variable CSS --lightColor, qui est probablement un ton clair pour contraster avec le fond sombre.
text-align: center :

Centre le texte horizontalement.
width: 500px :

Limite la largeur des paragraphes à 500 pixels, garantissant une lecture facile et évitant des lignes trop longues.
18---------------------------------------------------------------------------->Responsive :
-->dans le fichier css et tout à fait en bas saisir le code suivant:qui détérmine la responsivite des portable
@media only screen and (max-width: 575px)
-->séléctionner les trois dérnières sections et désactivez les avec un ctrl +/ pour les déctiver
dans le fichiecss on rajoute le code suivant:

@media only screen and (max-width: 575px){
    :root {
        --padding: 1.5rem;
    }
    html{
        font-size: 13px;
    }
    .home .container-images{
        display: none;
    }
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 82px;
        padding-top: 0;
        background-color: var(--bgColor-1);
        border-bottom: 1px solid var(--bgColor-2);
    }
    nav > a {
        display: none;
    }
    nav ul {
        display: none;
    }
}
explication:
Explications du code
Définition des styles pour des écrans de petite taille :

La règle @media only screen and (max-width: 575px) s'applique aux écrans dont la largeur maximale est de 575px (typique des smartphones).
Variables CSS dynamiques :

La déclaration :root { --padding: 1.5rem; } redéfinit une variable CSS (ex. --padding) spécifiquement pour ce type d'écran.
Modification de la taille de police de base :

La règle html { font-size: 13px; } réduit la taille de police globale pour les petits écrans.
Masquage des images dans .container-images :

La classe .home .container-images cache complètement cet élément en définissant display: none.
Navigation fixée et redimensionnée :

nav est fixé en haut de l'écran avec une hauteur définie de 82px et des ajustements de styles comme un fond et une bordure.
Les enfants directs de nav, tels que a et ul, sont également masqués via display: none.
-Puis on rajoute ce code: pour centrer le contenue 
   .social{
        margin-top: 70px;
    }
    h3{
        margin-bottom: 70px;
    }
-Puis on dehors du code @media on rajoute ce code pour 
.social a {
    text-decoration: none;
}
explication:
Explications
.social a :

Cela cible tous les liens (<a>) qui se trouvent à l'intérieur d'un élément avec la classe .social.
-on rajoute le menu burger
d'habord on active le code,  on rajoutant à la place de "none" "block" 
 -on rajoute le menu dans la section home
 puis on rajoute le code css :

  nav ul {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--bgColor-2);
    }
    nav ul li {
        display: block;
        text-align: center;
        margin: 30px;
    }
    -->Ajout de code javascript pour ajir sur le menu
    const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", () => {
    hundleMenu();
});

function hundleMenu() {
    // Toggle la classe "is-active" pour ajouter/retirer l'activation du menu
    menu.classList.toggle("is-active");
}
---------------------------------------------------------------------------------------->Explication :
addEventListener : Nous avons corrigé la syntaxe en retirant la parenthèse supplémentaire.
hundleMenu() : Nous utilisons toggle uniquement une fois pour ajouter ou retirer la classe "is-active". Cela assure que chaque clic sur le menu va activer ou désactiver le menu de manière correcte.
Vérifiez que :
Vous avez un bouton ou un élément qui déclenche cet événement, par exemple avec id="menu".
Vous avez bien défini la classe .is-active dans votre CSS pour qu'elle modifie l'état de l'élément (par exemple, pour afficher ou masquer le menu).
-->on ajoute du code css dans le @media : quand on clique sur le monue il apparait et quand on clique une deuxième fois il disparait

   nav ul.is-active{
        display: block;
    }
---------------------------------------------------------------------------
-->changer l'icone de "burger"  en "X" qaund on clique dessus avec le code suivant: 

#menu.is-active span:nth-child(1){
    transform: translate(0px, -2px) rotate(45deg);
}
#menu.is-active span:nth-child(2){
    opacity: 0;
    transform: translatex(15px);
}
#menu.is-active span:nth-child(3){
    transform: translate(-3px, 3px) rotate(-45deg);
}
#menu.is-active span{
    background-color: var(--primary-color);
}
------------------------------------------------------------------------>EXPLICATION DU CODE:
Ce code CSS est généralement utilisé pour styliser un menu burger lorsqu'il est actif, comme pour un menu de navigation sur mobile. Voici une explication détaillée de chaque règle :

Contexte général
Sélecteur #menu.is-active :
Le style s'applique lorsque l'élément avec l'ID menu a aussi la classe is-active. Cela signifie que le menu a été activé (par exemple, via JavaScript, lorsqu'on clique dessus).
Les span à l'intérieur représentent généralement les trois lignes du menu burger.
Détails du code
1. Premier span (ligne du haut) :
css
Copier le code
#menu.is-active span:nth-child(1) {
    transform: translate(0px, -2px) rotate(45deg);
}
:nth-child(1) : Cible la première ligne (le premier span).
transform: translate(0px, -2px) :
Déplace la ligne légèrement vers le haut de 2 pixels (axe Y négatif).
rotate(45deg) :
La ligne est pivotée de 45 degrés, formant une diagonale.
2. Deuxième span (ligne du milieu) :
css
Copier le code
#menu.is-active span:nth-child(2) {
    opacity: 0;
    transform: translateX(15px);
}
:nth-child(2) : Cible la deuxième ligne (au milieu).
opacity: 0 :
Rend la ligne complètement invisible.
transform: translateX(15px) :
Déplace la ligne hors de l'écran vers la droite de 15 pixels. Cela peut être un effet visuel pour l'animer hors de vue.
3. Troisième span (ligne du bas) :
css
Copier le code
#menu.is-active span:nth-child(3) {
    transform: translate(-3px, 3px) rotate(-45deg);
}
:nth-child(3) : Cible la troisième ligne (en bas).
transform: translate(-3px, 3px) :
Déplace la ligne légèrement vers la gauche (axe X : -3px) et vers le bas (axe Y : 3px).
rotate(-45deg) :
La ligne est pivotée de -45 degrés, formant une diagonale opposée à celle du premier span.
4. Style global pour tous les span :
css
Copier le code
#menu.is-active span {
    background-color: var(--primary-color);
}
Applique une nouvelle couleur de fond (définie par la variable CSS --primary-color) à toutes les lignes lorsque le menu est actif.
Fonctionnement global
Le premier et le troisième span se croisent en diagonale pour former un "X" (effet visuel de fermeture du menu).
Le deuxième span (ligne du milieu) disparaît (opacity 0) pour ne plus être visible.
Tous les span prennent une couleur définie par --primary-color.
------------------------------------------------------------------------
18----------------------------------------------------------->on passe à ladeuxième section:
on active la deuxième section et on vérifie comme est l'affichage, on remarque que la photo et le texte s'affichent mal, dans la page "ispecteur", on copie le style de la classe ou il affiche la photos, puis on copie le code dans le @media... comme suit:
.about .container-images{
    display: none;

}
on fait la meme chose pour le texte pour qu il prenne 100% la largeur de la page
-->pour ce qui concerne la section des compétence il faut faire les choses de la meme manière aller dans "inspecteur ", Element et style , puis changer le style de manière que les compétences se voient un dessus de l'autre.
-->puis on fait de la meme façon pour la photos dans la classe @media..
  .skills .container-images{
        display: none;
    }
-->pour centrer les images :
  .skills .container-skills {
        width: 75%;
        display: flex
    ;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .skills .container-skills h1{
        
        font-size: 1.5rem;
        margin-bottom: 3rem ;
    }
    -->diminuer le format des images:
        .skills{
        width: 80%;
        height: 80%;
    }

