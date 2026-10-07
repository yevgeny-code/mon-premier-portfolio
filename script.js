/* ==========================================================================
   1. GESTION DU MODE SOMBRE (TOGGLE SWITCH STYLE IPHONE)
   ========================================================================== */

// On crée l'étiquette pour aller attraper la case à cocher (checkbox) du bouton
const boutonCheckbox = document.getElementById("bouton-theme");

// On écoute le changement d'état (coché / décoché) de cette case
boutonCheckbox.addEventListener("change", function() {
    
    // .toggle("sombre") ajoute la classe 'sombre' au body si elle n'y est pas,
    // et la supprime automatiquement si elle y est déjà.
    document.body.classList.toggle("sombre");
});


/* ==========================================================================
   2. VALIDATION ET SÉCURITÉ DU FORMULAIRE DE CONTACT
   ========================================================================= */

// On attrape notre formulaire et nos cases comme avant
const leFormulaire = document.getElementById("mon-formulaire");
const laCaseNom = document.getElementById("champ-nom");
const laCaseEmail = document.getElementById("champ-email");

// NOUVEAU : On attrape la petite boîte de texte cachée qu'on vient de créer
const boîteErreur = document.getElementById("erreur-message");

leFormulaire.addEventListener("submit", function(evenement) {
    // On bloque toujours le rechargement de la page
    evenement.preventDefault(); 

    // CONDITION 1 : Si le nom est vide
    if (laCaseNom.value === "") {
        boîteErreur.textContent = "⚠️ Oups ! Tu as oublié d'écrire ton nom."; // On écrit le texte
        boîteErreur.style.display = "block"; // On rend le texte visible
    } 
    
    // CONDITION 2 : Si l'email est vide
    else if (laCaseEmail.value === "") {
        boîteErreur.textContent = "⚠️ Hé ! Tu as oublié d'écrire ton adresse email !"; // On écrit le texte
        boîteErreur.style.display = "block"; // On rend le texte visible
    } 
    
    // CONDITION FINALE : Si tout est bien rempli !
    else {
        boîteErreur.style.display = "none"; // On cache la boîte rouge s'il y en avait une avant
        
        // On peut laisser une petite alerte de succès sympa pour confirmer l'envoi
        alert("Super Yevgeny, le nom et l'email sont remplis ! Message envoyé.");
        
        // Bonus de pro : on vide le formulaire automatiquement après la réussite
        leFormulaire.reset();
    }
});
// 1. On branche le fil
const maSurprise = document.getElementById("bouton-surprise");

// 2. On installe le détecteur de clic et on ouvre le carnet d'ordres
maSurprise.addEventListener("click", function() {
    
    // 3. L'action !
    alert("Surprise ! Tu es un super développeur !"); 
    
});