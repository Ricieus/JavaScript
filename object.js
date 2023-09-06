//definition d'un objet
let maVoiture = {
    marque: "Volkswagen",
    modele: "Touareg",
    annee: 2020,
    couleur: "Rouge",
    vitesse: 100,
    demarrer: function () {
    console.log("voiture démarrée", this.marque);
    },
    };
    console.log(maVoiture);
    //utilisation de stringify pour transformer un objet en chaine de caracteres JSON
    maVoitureStringify = JSON.stringify(maVoiture);
    console.log(maVoitureStringify);
    //utilisation de parse pour transformer une chaine de caractères JSON en un objet Javascript
    maVoitureParse = JSON.parse(maVoitureStringify);
    //modification d'une propriété
    maVoitureParse.couleur = "Bleu";
    console.log(maVoitureParse);
    //Utilisation de la méthode demarrer pour démarrer une voiture
    maVoiture.demarrer();