$(function() {
    //gestion de la hauteur du bandeau :
    var pageVisitees = []
    afficheNewPage('accueil', function() {
        $('#bandeau').css('height', $('#blocPage').outerHeight(true))
    })
    $('a').css('color', 'blue')
        //je gère ici le survol des liens du menu navigation
    $('#bandeau>nav>ul>li').css('padding-bottom', '1px')
    $('li>a').on('mouseover', function() {
        $(this).css('border', '2px rgb(0,100,150) dotted')
        $(this).css('border-radius', '5px')
        $(this).css('box-shadow', '3px 3px 2px rgb(100,100,100)')
        $(this).css('color', 'rgb(0,100,200)')
        $(this).css('font-weight', 'bold')
    })
    $('li>a').on('mouseleave', function() {
        $(this).css('border', '')
        if (pageVisitees.indexOf($(this).text()) == -1) {
            //la page n'a pas encore été visitée
            $(this).css('color', 'blue')
            $(this).css('box-shadow', '')
        } else {
            $(this).css('color', 'rgb(180,180,180)')
            $(this).css('box-shadow', '3px 3px 2px rgb(100,100,100)')
        }
        $(this).css('font-weight', 'normal')
    })

    var contenuInit = $('#blocPage').html()
    $('li>a').on('click', function() {
        var titrePage = $(this).text()
        afficheNewPage(titrePage, function() {
            $('#bandeau').css('height', $('#blocPage').outerHeight(true))
        })

    })

    function afficheNewPage(titre, callback) {
        var newContent
        if (pageVisitees.indexOf(titre) == -1) pageVisitees.push(titre)
        switch (titre) {
            case 'I - Événements et probabilités':
                newContent = '<h2>I - Événements et probabilités</h2>'
                newContent += '<p>Dans un premier temps, téléchargez et imprimez le fichier <a href="pdf/2019_2nde_08_Probabilites_eleve.pdf" target="_blank">Support de cours</a></p>'
                newContent += '<p> Pour la partie cours, complétez à l\'aide des captures ci-dessous. Cela devrait vous permettre de retenir l\'essentiel (notamment les définitions).</p>'
                newContent += '<p><img src="images/PrbPartieI.png"></p>'
                newContent += '<p>Pour la suite du document à compléter (exemples), vous devez aller sur lycée connecté (Exemples de calculs probabilités où vous pourrez vous tester et vérifier si vous avez bien compris les définitions).'
                newContent += '<p><u>Poursuite du cours :</u></p>'
                newContent += '<p><img src="images/PrbPartieI2.png"></p>'
                newContent += '<p><strong>Des exercices sont alors à faire sur lycée connecté.</strong></p>'
                newContent += '<p>Voici des exercices en ligne pour vous faire travailler cette partie de manière autonome : '
                newContent += '<ul><li><a href="https://bibliotheque.sesamath.net/public/voir/5cb88c404bb1527df9236bf8" target="_blank">Loi de probabilité</a></li>'
                newContent += '<li><a href="https://bibliotheque.sesamath.net/public/voir/5cbd6af84bb1527df9236c07" target="_blank">Calculer une probabilité</a></li></ul></p>'
                break
            case 'Représentation':
                newContent = '<h2>II - Événements "A et B", événement "A ou B" </h2>'
                newContent += '<h3>a) Représentation</h3>'
                newContent += '<p>Les étapes permettant de compléter votre partie sont dans ce <a href="pdf/2019_presentationPrbPartie2.pdf" target="_blank">pdf</a><br/>'
                newContent += 'Cette vidéo vous explique le cours ci-dessus. N\'hésitez pas à la télécharger (15Mo) pour être sûr de pouvoir le relire tranquillement.<br/>'
                newContent += '<video controls width="467" height="350"><source src="videos/presentationAetB_AouB.mp4"></video>'
                newContent += "<p><strong>Faire les exercices suivants :</strong></p>"
                newContent += "<p>Il est possible de les faire sur OpenOffice ou LibreOffice (pas fan d'un logiciel propriétaire comme Word, mais j'essaierai de vous pardonner). Vous pouvez aussi prendre une photo (mais c'est très lourd) ou un scan (éventuellement avec une appli sur smartphone - comme camScanner que j'itilise en classe).</p>"
                newContent += "<p>Déposer le tout sur l'ENT.</p>"
                newContent += "<ul><li> exercice 67 p. 314 ;</li>"
                newContent += "<li> exercice 70 p. 315.</li></ul>"
                newContent += '<p>Voici la correction de ces exercices : <a href="pdf/ex67_70p314.pdf" target="_blank">pdf</a></p>'
                newContent += '<p>Voici des exercices en ligne pour vous faire travailler cette partie de manière autonome : '
                newContent += '<ul><li><a href="https://bibliotheque.sesamath.net/public/voir/5e28c34211bf937495a7e604" target="_blank">Diagramme de Venn</a></li>'
                newContent += '<li><a href="https://bibliotheque.sesamath.net/public/voir/5cbe2a084bb1527df9236c0c" target="_blank">Probabilité d\'intersection ou de réunion</a></li></ul></p>'
                break
            case 'Propriété des probabilités ; Utilisation d\'un arbre':
                newContent = '<p><a href="pdf/2019_presentationPrbPartie2bc.pdf" target="_blank">Propriétés des probabilités et utilisation d\'un arbre au format pdf</a><br/>'
                newContent += '<p>Ces deux vidéos reprennent les deux sous-parties du document.</p>'
                newContent += '<h3>b) Propriété des probabilités</h3>'
                newContent += '<video controls width="467" height="350"><source src="videos/Proprieteproba.mp4"></video>'
                newContent += '<h3>c) Utilisation d\'un arbre</h3>'
                newContent += '<video controls width="467" height="350"><source src="videos/utilisationArbre.mp4"></video>'
                newContent += "<p><strong>Faire les exercices suivants (pas besoin de les envoyer mais n'hésitez pas à poser des questions en cas de problème - éventuellement sur l'application Forum de l'ENT, tout le monde y aura accès ensuite...):</strong></p>"
                newContent += "<ul><li> exercices 29 et 30 p. 309 ;</li>"
                newContent += "<li> exercice 55 p. 313 ;</li>"
                newContent += "<li> exercice 89 p. 318.</li></ul>"
                newContent += '<p>Voici la correction de ces exercices : <a href="pdf/ex29_30_55_89p309a318.pdf" target="_blank">pdf</a></p>'
                newContent += '<p>Voici des exercices en ligne pour vous faire travailler cette partie de manière autonome : '
                newContent += '<ul><li><a href="https://bibliotheque.sesamath.net/public/voir/5cbb2b114bb1527df9236c02" target="_blank">Calculer une probabilité à l\'aide d\'un arbre</a></li>'
                newContent += '<li><a href="https://bibliotheque.sesamath.net/public/voir/91414" target="_blank">Construction d\'un arbre et calcul de la probabilité d\'une intersection</a></li></ul></p>'
                break
            case 'Fluctuation d\'échantillonnage':
                newContent = '<p><a href="pdf/FluctuationEleve.pdf" target="_blank">Cours complété :</a> seule partie de gauche à été travaillée jusqu\'à présent (la suite jeudi).'
                newContent += '<p>Construction de l\'algorithme sur la <a href="pdf/cours 26 mars.pdf" target="_blank">simulation de 100 lancers de dé</a> avec calcul de la fréquence d\'apparition du 6.</p>'
                newContent += '<p>Fin du chapitre avec la loi des grands nombres (en vidéo ci-dessous) : <br/><img src="images/frequence.jpg" alt="encadrement de la fréquence"/></p>'
                newContent += '<video controls width="506" height="285"><source src="videos/loiGrandsNombres.mp4"></video>'
                newContent += '<ul><li>Pour vendredi 27 mars : exercices 82 et 84 p. 317</li>'
                newContent += '<li>Pour lundi 30 mars, vous avez des exercices sur labomep (toujours accessible par Médiacentre de l\'ENT) : il est intitulé <b>Probabilités</b> en haut à gauche.</li></u>'
                
                break
            default:
                //accueil
                newContent = contenuInit
                break
        }
        $('#blocPage').html(newContent)

        callback()
    }
    const counter = document.getElementById("counter")
    $('#counter').hide()

    const updateCounter = async() => {
        const data = await fetch("https://api.countapi.xyz/hit/2GT2Counter/visits")
        const count = await data.json()
        counter.innerHTML = count.value
        console.log(count.value)
    }
    updateCounter()
    $('#voirCompteur').on('click', function() {
        $('#counter').show()
    })
})
