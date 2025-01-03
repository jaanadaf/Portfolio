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

