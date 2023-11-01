let ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
class Warrior{
    #level;
    #rank;
    #achievements;
    #experience;
    constructor() {
        this.#level = 1;
        this.#rank = "Pushover";
        this.#achievements = [];
        this.#experience = 100;
    };

    level() {
        return this.#level;
    };

    rank() {
        return this.#rank;
    };

    experience() {
        return this.#experience;
    };

    achievements() {
        return this.#achievements;
    };

    add_experience(exp) {
        this.#experience = Math.min(10000, this.#experience + exp);

        this.#level = Math.floor(this.#experience / 100);
        this.#rank = ranks[Math.floor(this.#level / 10)];
    };

    training([description, exp, min_level]) {
        if(!(min_level <= this.#level)) {
            return "Not strong enough";
        }

        this.add_experience(exp);

        this.#achievements.push(description);
        return description;
    };

    battle(enemy_level) {
        if(!(1 <= enemy_level && enemy_level <= 100)) {
            return "Invalid level";
        }

        let enemy_rank = ranks[Math.floor(enemy_level / 10)];
        if(enemy_rank !== this.#rank && this.#level+5 <= enemy_level) {
            return "You've been defeated";
        }

        if(this.#level === enemy_level) {
            this.add_experience(10);
            return "A good fight";
        }
        else if(this.#level === enemy_level+1) {
            this.add_experience(5);
            return "A good fight";
        }
        else if(this.#level-2 >= enemy_level) {
            return "Easy fight";
        }
        else {
            this.add_experience(20 * Math.abs(enemy_level - this.#level) ** 2);
            return "An intense fight";
        }


    };
};