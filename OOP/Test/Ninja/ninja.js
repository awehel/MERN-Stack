class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("Ninjas name is: " + this.name);
    }

    showStats() {
        console.log("Stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(
            this.name + " just drank sake and his health is now: " + this.health
        );
    }
}

// const ninja1 = new Ninja("Sirius Black", 100)
// ninja1.sayName()
// ninja1.showStats()

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom=10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }

    speakWisdom(){
        super.drinkSake()
        console.log("A wise message")
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()