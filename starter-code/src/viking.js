// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    recieveDamage(damage) {
        super.recieveDamage(damage)

        if (this.health <= 0) {
            return this.name + " has died in act of combat"
        } else {
            return this.name + " has received " + damage + " points of damage"
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    recieveDamage(damage) {
        super.recieveDamage(damage)

        if (this.health <= 0) {
            return "A Saxon has died in combat"
        } else {
            return "A Saxon has received " + damage + " points of damage"
        }
    }


}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let oldHealth = randomSaxon.health

        randomSaxon.health = (oldHealth - randomViking.strength);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxon, 1);
        }
    }

    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let oldHealth = randomViking.health

        randomViking.health = (oldHealth - randomSaxon.strength);

        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomViking, 1);
        }
    }



}
