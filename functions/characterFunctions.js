const dice = require("./dice");
const races = require("./races");
const classes = require("./classes");
const playerCharacter = require("./playerCharacter");
const background = require("./backgrounds");
const equipment = require("./equipment");
const spells = require("./spells");

const alignmentMorale = [
    "Good",
    "Neutral",
    "Evil"
];
const alignmentLaw = [
    "Lawful",
    "Neutral",
    "Chaotic"
];

const possibleColor = [
    "brown",
    "pinkish",
    "golden",
    "blue",
    "yellow",
    "green",
    "black",
    "white",

];

// näin jälkikäteen tän olis varmaa voinu tehä hiukka fiksummin...
// TODO refactoraa
characterFunctions = {
    defaultDnd: () => {
        return dice.sumDices(dice.lookTopX(dice.dice(6, 4), 3, true))
    },

    // Laskee statsista modifierin

    modifierCal: (statSum) => {
        return Math.floor((statSum - 10) / 2);
    },
    chooseRandomFromList: (list,amount) =>{
        const outputList=[];
        const addedNumbersList=[];
        //määrä mitä tarvitaan on suurempi kuin mitä listalla on tarjota
        if(list.length < amount){
            return list;
        }
        for(let i=0;i<amount;i++){
            let randNum = Math.floor(Math.random()*list.length);
            while(addedNumbersList.indexOf(randNum) !== -1){
                randNum = Math.floor(Math.random()*list.length);
            }
            addedNumbersList.push(randNum);
            outputList.push(list[randNum]);
        }
        if(amount === 1){
            return outputList[0];}
        return outputList;
    },
    // Arpoo satunnaisen rodun ja subrodun jos on

    randomRace: () => {
        const randomRace = characterFunctions.chooseRandomFromList(races,1);
        let subrace = "";
        if(randomRace.subrace.length > 0) {
            subrace = characterFunctions.chooseRandomFromList(randomRace.subrace,1);
        }
        return {
            race: randomRace,
            subrace: subrace
        }
    },
    setSex:()=>{
        return characterFunctions.chooseRandomFromList(["male","female"],1);
},
    setName: (nameObject,sex)=>{
        let characterName ="";
        if(sex === "male"){
            characterName += characterFunctions.chooseRandomFromList(nameObject.male,1);
        }else{
            characterName += characterFunctions.chooseRandomFromList(nameObject.female,1);
        }
        characterName +=` ${characterFunctions.chooseRandomFromList(nameObject.lastname,1)}`;
        return characterName;
    },
    randomClass:()=>{
        return characterFunctions.chooseRandomFromList(classes,1);
    },
    randomBackground:(newChar)=>{
        const bg = characterFunctions.chooseRandomFromList(background.backgrounds,1);
        newChar.overview.background = bg.name;
        newChar.stats.personalityTraits = characterFunctions.chooseRandomFromList(bg.personalityTraits,2);
        newChar.stats.ideals = characterFunctions.chooseRandomFromList(bg.ideal,1);
        newChar.stats.bonds = characterFunctions.chooseRandomFromList(bg.bond,1);
        newChar.stats.flaws = characterFunctions.chooseRandomFromList(bg.flaw,1);
        if(bg.special.length >0){
            for(let l of bg.special){
                newChar.notes.push(`${l.name}: ${characterFunctions.chooseRandomFromList(l.value,1)}`);
            }
        }
        for(let t of bg.toolProficiencies){
            newChar.equipment.tools.push(t);
        }
        for(let e of bg.equipment){
            newChar.equipment.others.push(e);
        }
        newChar.abilityScore = characterFunctions.setProficiencies(newChar,bg.skillProficiencies,bg.skillProficiencies.length);

        return newChar;
    },
    raceAbilityScoreIncrease: (race, stats) => {
        for (let ability of race.abilityIncrease) {
            switch (ability.name) {
                case "str":
                    stats.strength.race += ability.amount;
                    break;
                case "dex":
                    stats.dexterity.race += ability.amount;
                    break;
                case "con":
                    stats.constitution.race += ability.amount;
                    break;
                case "int":
                    stats.intelligence.race += ability.amount;
                    break;
                case "wis":
                    stats.wisdom.race += ability.amount;
                    break;
                case "cha":
                    stats.charisma.race += ability.amount;
                    break;
            }
        }
        return stats;

    },
    calculateModifiers: (abilityScore)=>{
        for(let ab in abilityScore){
            abilityScore[ab].mod = Math.floor(((abilityScore[ab].base + abilityScore[ab].race + abilityScore[ab].feat)-10)/2);
        }
        return abilityScore;
    },
    setLanguages:(raceLan,charLan)=>{
        for(let lan of raceLan){
            charLan.push(lan);
        }
        return charLan;
    },
    setSavingThrows: (charAttList,classObj) =>{
        for(let list of classObj.savingThrows){
            switch(list){
                case "Strength":
                    charAttList.abilityScore.strength.savingthrow = true;
                    break;
                case "Dexterity":
                    charAttList.abilityScore.dexterity.savingthrow = true;
                    break;
                case "Constitution":
                    charAttList.abilityScore.constitution.savingthrow = true;
                    break;
                case "Intelligence":
                    charAttList.abilityScore.intelligence.savingthrow = true;
                    break;
                case "Wisdom":
                    charAttList.abilityScore.wisdom.savingthrow = true;
                    break;
                case "Charisma":
                    charAttList.abilityScore.charisma.savingthrow = true;
                    break;
            }
        }
        return charAttList.abilityScore;
    },
    chooseAnyWeapon: (name)=>{
        switch(name){
            case "any martial melee weapon":
                return characterFunctions.chooseRandomFromList(equipment.weapons.martialWeapons.melee,1);
            case "any simple melee weapon":
                return characterFunctions.chooseRandomFromList(equipment.weapons.simpleWeapons.melee,1);
            case "any martial ranged weapon":
                return characterFunctions.chooseRandomFromList(equipment.weapons.martialWeapons.ranged,1);
            case "any simple ranged weapon":
                return characterFunctions.chooseRandomFromList(equipment.weapons.simpleWeapons.ranged,1);
            case "any martial weapon":
                if(Math.floor(Math.random()*2) > 0){
                    return characterFunctions.chooseRandomFromList(equipment.weapons.martialWeapons.melee,1);
                }else{
                    return characterFunctions.chooseRandomFromList(equipment.weapons.martialWeapons.ranged,1);
                }
            case "any simple weapon":
            default:
                if(Math.floor(Math.random()*2) > 0){
                    return characterFunctions.chooseRandomFromList(equipment.weapons.simpleWeapons.melee,1);
                }else{
                    return characterFunctions.chooseRandomFromList(equipment.weapons.simpleWeapons.ranged,1);
                }
        }
    },
    setAmount:(charEq, amount)=>{
        if(charEq.ranged.isRanged){
            charEq.ranged.ammo = amount;
        }
        return charEq;
    },
    searchEquipment: (equipmentObject, searchWord)=>{
        console.log("Aloitetaan etsintä");
        console.log(equipmentObject);
        for(let i in equipmentObject){
            console.log(equipmentObject[i]);
                for(let j of equipmentObject[i]){
                    console.log(j.name);
                    if(j.name === searchWord){
                        return j;
                    }
                }
        }
        console.log(`Equipmenttia ${searchWord} ei löytynyt`);
        return false;
    },
    searchMelee: (searchWord)=>{
        for(let k in equipment.weapons){
            let weaponHolder = characterFunctions.searchEquipment(equipment.weapons[k],searchWord);
            if(weaponHolder !== false){
                return weaponHolder;
            }
        }
        console.log("asetta ei löydy lainkaan");
        return {name:searchWord};
    },
    setStartingEquipment: (charEquipment,charClass)=>{
        for(let eq of charClass.startingEquipment){
                const randEquipment = characterFunctions.chooseRandomFromList(eq,1);
                let equipmentTemp = "";
                switch(randEquipment.type){
                    case "weapon":
                        equipmentTemp = characterFunctions.searchMelee(randEquipment.name);
                        characterFunctions.setAmount(equipmentTemp,randEquipment.amount);
                        charEquipment.weapons.push(equipmentTemp);
                        break;
                    case "armor":
                        console.log("päästiin armori hakuun");
                        charEquipment.armor.push(characterFunctions.searchEquipment(equipment.armor,randEquipment.name));
                        break;
                    case "tool":
                        charEquipment.tools.push(randEquipment.name);
                        break;
                    case "any":
                        charEquipment.weapons.push(characterFunctions.chooseAnyWeapon(randEquipment.name));
                        break;
                    case "other":
                    default:
                        charEquipment.others.push(randEquipment.name);
                        break;
                }
        }
        return charEquipment;
    },
    setProficiencies: (charAttList,skillList,amount)=> {
        const skills = characterFunctions.chooseRandomFromList(skillList,amount);
        for(let list of skills){
            switch(list){
                case "Acrobatics":
                    charAttList.abilityScore.dexterity.skills[0].chosen = true;
                    break;
                case "Athletics":
                    charAttList.abilityScore.strength.skills[0].chosen = true;
                    break;
                case "Sleight of Hand":
                    charAttList.abilityScore.dexterity.skills[1].chosen = true;
                    break;
                case "Stealth":
                    charAttList.abilityScore.dexterity.skills[2].chosen = true;
                    break;
                case "Arcana":
                    charAttList.abilityScore.intelligence.skills[0].chosen = true;
                    break;
                case "History":
                    charAttList.abilityScore.intelligence.skills[1].chosen = true;
                    break;
                case "Investigation":
                    charAttList.abilityScore.intelligence.skills[2].chosen = true;
                    break;
                case "Nature":
                    charAttList.abilityScore.intelligence.skills[3].chosen = true;
                    break;
                case "Religion":
                    charAttList.abilityScore.intelligence.skills[4].chosen = true;
                    break;
                case "Animal Handling":
                    charAttList.abilityScore.wisdom.skills[0].chosen = true;
                    break;
                case "Insight":
                    charAttList.abilityScore.wisdom.skills[1].chosen = true;
                    break;
                case "Medicine":
                    charAttList.abilityScore.wisdom.skills[2].chosen = true;
                    break;
                case "Perception":
                    charAttList.abilityScore.wisdom.skills[3].chosen = true;
                    break;
                case "Survival":
                    charAttList.abilityScore.wisdom.skills[4].chosen = true;
                    break;
                case "Deception":
                    charAttList.abilityScore.charisma.skills[0].chosen = true;
                    break;
                case "Intimidation":
                    charAttList.abilityScore.charisma.skills[1].chosen = true;
                    break;
                case "Performance":
                    charAttList.abilityScore.charisma.skills[2].chosen = true;
                    break;
                case "Persuasion":
                    charAttList.abilityScore.charisma.skills[3].chosen = true;
                    break;
            }
        }
        return charAttList.abilityScore;
    },
    randomAlignment: (newChar)=>{
        let alignment = newChar.stats.ideals.alignment;
        if(alignmentLaw.indexOf(newChar.stats.ideals.alignment) === -1){
            alignment =`${characterFunctions.chooseRandomFromList(alignmentLaw,1)} ${alignment}` ;
        }else if(alignmentMorale.indexOf(newChar.stats.ideals.alignment) === -1){
            alignment +=` ${characterFunctions.chooseRandomFromList(alignmentMorale,1)}` ;
        }else{
            alignment = `${characterFunctions.chooseRandomFromList(alignmentLaw,1)} ${characterFunctions.chooseRandomFromList(alignmentMorale,1)}`;
        }
      return alignment;
    },

    checkRaceSpecials: (char,specialList)=>{
        for(let special of specialList){
            switch(special){
                case "Fleet of Foot":
                    char.stats.speed = 35;
                    break;
                case "Mask of the Wild":
                    break;
                case "Trance":
                    break;
                case "Cantrip":
                    break;
                case "Extra Language":
                    break;
                case "Fey Ancestry":
                    break;
                case "Dwarven Toughness":
                   // char.
                    break;
            }
        }
        return char;
    },
    newRandCharacter: () =>{
        // Take the character object as a base
        let newChar = playerCharacter;

        // Set metadata TODO player name
        //newChar.overview.created = new Date();
        // roll the ability scores and set them for the character
        for(let abi in newChar.abilityScore){
            newChar.abilityScore[abi].base = characterFunctions.defaultDnd();
        }
        //Set the level and experience,TODO later modular
        newChar.stats.exp = 0;
        newChar.stats.level=1;
        // Choose a race and add the modifiers
        const race = characterFunctions.randomRace();
        const charClass = characterFunctions.randomClass();


        //Overview
        newChar.overview.race = race.race.default.raceName;
        newChar.overview.class = charClass.className;
        newChar.overview["player Name"] = "Make";
        newChar.sex = characterFunctions.setSex();
        newChar.characterName = characterFunctions.setName(race.race.default.name,newChar.sex);

        //tulee rodun mukaan
        newChar.stats.speed = race.race.default.speed;
        //Asetetaan rodun ja subrodusta tulevat bonarit hahmoon TODO race ja subrace erikseen??? onko väliä..ON
        newChar.abilityScore = characterFunctions.raceAbilityScoreIncrease(race.subrace, newChar.abilityScore);
        newChar.abilityScore = characterFunctions.raceAbilityScoreIncrease(race.race.default, newChar.abilityScore);
        newChar.abilityScore = characterFunctions.calculateModifiers(newChar.abilityScore);

        //pikkuinfo
        newChar.stats.age = Math.floor(Math.random()*(race.race.default.age.maxAge-race.race.default.age.adultAge))+race.race.default.age.adultAge;
        newChar.stats.skin = characterFunctions.chooseRandomFromList(possibleColor,1);
        const heightModifier = dice.dice(race.subrace.heightMod.dice,race.subrace.heightMod.times);
        newChar.stats.height = race.subrace.heightBase + heightModifier;
        newChar.stats.hair = characterFunctions.chooseRandomFromList(possibleColor,1);
        newChar.stats.weight = race.subrace.weightBase +  (heightModifier * dice.dice(race.subrace.weightMod.dice,race.subrace.weightMod.times));
        newChar.stats.eyes = characterFunctions.chooseRandomFromList(possibleColor,1);
        newChar.stats.vision = race.race.default.vision;
        newChar.stats.reputation = "cool";

        //bg
        newChar = characterFunctions.randomBackground(newChar);
        newChar.overview.alignment = characterFunctions.randomAlignment(newChar);
        // tulee classin mukaan
        newChar.stats.maxHp = charClass.hitPoint.startingHitPoints + newChar.abilityScore.constitution.mod;
        //newChar.stats.armorClass = characterFunctions.setArmorClass(newChar);
        newChar.stats.initiative = newChar.abilityScore.dexterity.mod;
        newChar.stats.currentHp = newChar.stats.maxHp;
        newChar.stats.proficiency = "+2";
        newChar.languages = characterFunctions.setLanguages(race.race.default.languages,newChar.languages);
        newChar.abilityScore = characterFunctions.setProficiencies(newChar,charClass.proficiency.skills.list,charClass.proficiency.skills.amount);
        newChar.abilityScore = characterFunctions.setSavingThrows(newChar,charClass);
        newChar.equipment = characterFunctions.setStartingEquipment(newChar.equipment,charClass);
        newChar.profAndAbilities = ["Iso loikka","Nälkä"];
        console.log(newChar);
        return newChar;
    }
};

module.exports.characterFunctions = characterFunctions;