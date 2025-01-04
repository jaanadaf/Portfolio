# Mon Projet
Traduction du texte et explications
Titre du projet : Création d'un site web personnel (Portfolio)
Leçon importante aujourd'hui : appliquer tout ce que nous avons appris jusqu'à présent en HTML et CSS pour créer un site personnel respectant les normes du web, avec un design élégant et adaptable. Ce site sera également responsive (s'adapte à toutes les tailles d'écran).
Étapes :
Création de la structure du projet :

Créez un dossier pour le projet. À l'intérieur, ajoutez deux sous-dossiers :
images : pour stocker toutes les images nécessaires.
icons : pour stocker toutes les icônes utilisées.
Téléchargez les images à partir de sites gratuits et rangez-les dans ces dossiers.
les liens :
icons : https://icon-icons.com/fr/recherche/icones/?filtro=shape
images: https://www.hiclipart.com/search?clipart=Vue.js#google_vignette
forme: https://fr.freepik.com/search?format=search&last_filter=page

2-Etapes:
Structure de base en HTML :

Créez un fichier index.html dans le dossier principal.
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
EXPLICATION DU CODE
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

Rafraîchissez la page.
Si l'icône ne change pas immédiatement, videz le cache du navigateur.
Conseils :
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
6-STYLISER LA PAGE/
:root {
    --primary-color: #ff274b;
    --secondaryColor: #f7bcf7;
    --lightColor: #ffffff;
    --bgColor-1: #171a1c;
    --bgColor-2: #22282a;
    --pading: 8%;
}
EXPLICATION/
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
7-DEFINIR LES STYLES D'UNE CLASSE .home
explication du code:.home{
    width: 100%;
    height: 100vh;
    background-color: var(--bgColor-1);
}
ChatGPT a dit :
ChatGPT
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
css
Copier le code
:root {
    --bgColor-1: #171a1c;
}
Alors, la couleur de fond sera #171a1c (un gris foncé).
7- AJOUT D'UNE NAV BARRE

  <section class="home">
        <nav>
            <h2>programmation<samp>Online</samp></h2>
        </nav>
   </section>
   EN AJOUTANT DU STYLE DANS LE CSS DANS LA CLASSE .home{}
    color: var(--lightColor);
  Pour chnage la couleur du mot dans le spam il faut utiliser le style suivant:
  8- ajout du style su H2
    h2{
    font-size: 2.2rem;
    letter-spacing: 0.12rem;
    cursor: pointer;
}
EXPLICATION DU CODE:
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

9-AJOUT DU STYLE SUR LA NAV
nav{
    background-color: red ;
}

10- CREATION DU MENU
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

11-Sélecteur 1 : nav ul li
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
html
Copier le code
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

12-Sélecteur : nav ul li a:hover
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
14- Utilisation d'un effet visuel interactif sur le bouton "s'abonner"

}
.btn:hover{
    background-color: transparent;
    border: 2px solid var(--primary-color);

} 
Décomposition et explication :
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
15- Pour qu'on puisse afficher les images de manière responsive et ordonnée :
 il faut créer une div :
 Démarche :
Créer une div pour contenir les images :
La structure HTML inclut une balise <div> pour regrouper les images.
Exemple :
html
Copier le code
<div class="content"></div>
Cette div sert de conteneur principal pour les images ou tout autre contenu à afficher.
Styliser la div dans le fichier CSS :
On applique des styles à cette div via la classe content pour contrôler son comportement, en particulier lorsqu'elle est placée dans un parent flexible.

Exemple :

css
Copier le code
.content {
    flex-grow: 1;
}
flex-grow: 1; :
Cette propriété permet à la div .content de prendre tout l'espace disponible restant dans son conteneur parent (ici .home). Cela rend la mise en page flexible et adaptative.
Configurer le parent avec .home :
La classe .home est le conteneur parent qui englobe .content.
Les styles appliqués à .home déterminent comment ses enfants (comme .content) se positionnent.

Exemple :

css
Copier le code
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
 padding: 0 var(--pading); ce code permet d'alligner le contenue au meme niveau 
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
EXPLICATION:
position: relative; :
Définit la position de l'élément comme relative par rapport à sa position normale (position de base dans le flux du document).
Avec cette propriété, les valeurs de décalage (comme bottom, top, left, right) déplaceront l'élément sans affecter les autres éléments autour de lui.
Cela signifie que l'élément sera visuellement déplacé tout en occupant toujours son espace d'origine dans le flux de mise en page.
2. bottom: 70px; :
Décale l'élément de 70 pixels vers le haut par rapport à sa position initiale.
En CSS, bottom est utilisé pour ajuster la position verticale d'un élément :
Une valeur positive pousse l'élément vers le haut.
Une valeur négative le déplace vers le bas.


