//Création de la classe utilisateurs
class Utilisateur {

    // Méthode pour changer de role
    static changerRole() {
        if (this.role === 'user') {
          this.role = 'admin';
        } else {
          this.role = 'user';
        }
      }

    // activer et désactiver
    static 



    //Propriétés de l'instance
    //Chaque utilisateur a un nom et un rôle
    nom;
    role;
    #id;
    // Constructeur de l'instance
    constructor(nom,role) {
        //Pour définir le nom et le rôle 
        this.#id = crypto.randomUUID();
        this.nom = nom;
        this.role = role;
    }

    //Méthode de l'instance

}