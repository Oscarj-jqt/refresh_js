class Humain {
    // Propriétés de classe
    static _listeDesHumains = [];
  
  
    // Méthodes de classe
    static listerLesHumains() {
      this._listeDesHumains.forEach((humain) => humain.sePresenter());
    }
  
  
    // Propriétés de l'instance
    prenom;
    age;
    #id;
    // Constructeur de l'instance
    constructor(prenom, age) {
      this.#id = crypto.randomUUID();
      this.prenom = prenom;
      this.age = age;
      // Ajout de l'instance à la liste des humains
      Humain._listeDesHumains.push(this);
    }
    // Méthodes de l'instance
    sePresenter() {
      console.log(`Bonjour je suis ${this.prenom} et j'ai ${this.age} ans.`);
    }
  }
  
  //Héritage Cycliste a toutes les propriétés de Humain
  class Cycliste extends Humain {
    velo;
  
  
    constructor(prenom, age, marqueVelo) {
      // Appele le constructeur de Humain
      
      super(prenom, age);
      this.marqueVelo = marqueVelo;
      this.velo = new Velo(marqueVelo);
    }
  
  
    pedaler() {
      this.velo.accelerer();
    }
  }
  
  
  class Velo {
    marque
    #vitesse
  
  
    constructor(marque) {
      this.marque = marque;
      this.#vitesse = 0;
    }
  
  
    accelerer() {
      this.#vitesse++;
    }
  }
  
  
  const damien = new Humain('damien', 35);
  damien.sePresenter();
  // console.log(Humain._listeDesHumains); // Non accessible, propriété de la classe en private
  Humain.listerLesHumains();

  
  
  const user = new Cycliste('José', 40, 'décathlon');
  user.sePresenter();
  
  
  Cycliste.listerLesHumains();
  