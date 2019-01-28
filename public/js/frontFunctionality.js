'use strict';
//const newCharButton = document.querySelector("#newCharButton");
//const newCharButton2 = document.querySelector("#newCharButton2");

const esim = document.querySelector("#esimerkki");
const text = document.querySelector("#testijuttu");

const main = document.querySelector('main');

const newCharacter = document.querySelector('#newCharacter');

const url= '/test';

const data = {
    method: "POST",
    /*
    mode: "same-origin",
    cache: "default",
    credentials: "same-origin",
    redirect: "follow",
    */
    headers:{
        "Content-Type": "application/json; charset=utf-8",
    },
    body: {
        data: "moi"
    }
};

const updateElement = (element, value)=>{
    element.innerHTML = value;
};

 const creator = (element) =>{
    return document.createElement(element);
 };

 const buildInfoList= (char,character)=>{
     const attItem = creator('li');
     const header = creator('h4');
     // const par = creator('p');
     header.innerHTML = character[char];
     // par.innerHtml = char;
     const par = document.createTextNode(char);
     attItem.id = char;
     attItem.appendChild(header);
     attItem.appendChild(par);
     return attItem;
 };
//document.createTextNode("sds")
const buildCharHeader = (character)=>{
    const charHeader = creator('div');
    charHeader.id="charHeader";
    //luodaan vasen puoli
    const charName = creator('div');
    const nameBox = creator('h2');
    nameBox.id = "characterName";
    nameBox.innerHTML = character.characterName;
    const nameTitle = document.createTextNode("Character name");

    charName.append(nameBox);
    charName.append(nameTitle);
    charName.id= "charName";
    //luodaan oikea puoli
    const charInfo = creator('div');
    charInfo.id="charInfo";
    const list = creator('ul');
    for(let char in character.overview){
        list.appendChild(buildInfoList(char,character.overview));
    }
    charInfo.appendChild(list);
    charHeader.appendChild(charName);
    charHeader.appendChild(charInfo);

    return charHeader;
};

const skillListBuilder = (list, skills) =>{
        const skillItem = creator('li');
        const checkBox = creator('input');
        checkBox.type = "checkbox";
        if(skills[list].chosen)checkBox.checked = true;
        const skillName = document.createTextNode(skills[list].name);
        skillItem.appendChild(checkBox);
        skillItem.appendChild(skillName);
        return skillItem;
};

const createAttItem = (att, character)=>{
        const listItem = creator('li');
        listItem.id = att;
        listItem.class = "singleAttribute";
        // vasen puolisko
        const attributesLeft = creator('div');
        attributesLeft.class="attributesLeft";
        const attMod = document.createTextNode(character[att].mod);
        attMod.class = "attModifier";
        const attValue = document.createTextNode(character[att].base + character[att].race + character[att].feat);
        attValue.class = "attValue";
        const attName = document.createTextNode(att);
        attName.class = "attName";
        attributesLeft.appendChild(attMod);
        attributesLeft.appendChild(creator('br'));
        attributesLeft.appendChild(attValue);
        attributesLeft.appendChild(creator('br'));
        attributesLeft.appendChild(attName);
        // oikea puolisko
        const attributesRight = creator('div');
        attributesRight.class= "attributesRight";
        const skillList = creator('ul');
        //laitetaan saving throw
        const savingThrow = creator('li');
        savingThrow.class="savingThrow";
        const checkBox = creator('input');
        checkBox.type = "checkbox";
        if(character[att].savingthrow)checkBox.checked = true;
        const savingThrowName = document.createTextNode("Saving Throw");
        savingThrow.appendChild(checkBox);
        savingThrow.appendChild(savingThrowName);
        skillList.appendChild(savingThrow);
        //laitetaan muut heitot
        for(let list in character[att].skills){
            const skillElement = skillListBuilder(list, character[att].skills);
            skillList.appendChild(skillElement);
        }
        attributesRight.appendChild(skillList);
        listItem.appendChild(attributesLeft);
        listItem.appendChild(attributesRight);
        return listItem;
};

const createAttribute = (character)=>{
    const attHolder = creator('div');
    attHolder.id="attributesHolder";
    const attList = creator('ul');
    for(let att in character){
        const item = createAttItem(att, character);
        attList.appendChild(item);
    }
    attHolder.appendChild(attList);
    return attHolder;
};

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log(response.status);
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    console.log(response);
    // return response.json();
    return JSON.parse(response);
}

let pylly = {
    'pylly': 'pylly'
};

let fetchData = {
    method: 'POST',
    body: pylly,
    headers: new Headers()
};

const superRequest= new Request('/post',{
    method: 'POST',
    body: pylly,
    headers: new Headers()
});

const createAttackRow = (attack)=>{
    const tr = creator('tr');
    for(let at in attack){
        const td = creator('td');
        td.innerHTML = attack[at];
        tr.appendChild(td);
    }
    return tr;
};

const createAttackAndSpells = (list) =>{
    const box = creator('div');
    box.class = "box";
    const table = creator('table');
    const names = ["Name", "Attack","Damage","Range","Ammo","Used"];
    const tr = creator('tr');
    for(let i of names){
        const th = creator('th');
        th.innerHTML = i;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for(let at in list){
        table.appendChild(createAttackRow(at));
    }
    box.appendChild(table);
    box.appendChild(document.createTextNode("Attack & Spellcasting"));
    return box;
};

const createBox = (list, name)=>{
    const box = creator('div');
    box.class = "box";
    const ul = creator('ul');
    for(let i of list){
        const li = creator('li');
        li.appendChild(document.createTextNode(i));
        ul.appendChild(li);
    }
    const boxName = document.createTextNode(name);
    //boxName.class = "boxName";
    box.appendChild(ul);
    box.appendChild(boxName);
    return box;
};

const createTwoPartBox = (leftItem,leftName,rightItem,rightName)=>{
    const container = creator('div');
    container.class = "box";
    const leftBox = creator('div');
    const rightBox = creator('div');
    leftBox.class= "leftBox";
    rightBox.class = "rightBox";
    const leftValue = creator('h2');
    leftValue.innerHTML = leftItem;
    const leftN = document.createTextNode(leftName);
    leftBox.appendChild(leftValue);
    leftBox.appendChild(leftN);
    const rightValue = creator('h2');
    rightValue.innerHTML = rightItem;
    const rightN = document.createTextNode(rightName);
    rightBox.appendChild(rightValue);
    rightBox.appendChild(rightN);
    container.appendChild(leftBox);
    container.appendChild(rightBox);
    return container;
};

//RUMA
const smallInfoHelper= (name1, value1,name2,value2)=>{
    const tr = creator('tr');
    const th1 = creator('th');
    th1.innerHTML = name1;
    const td1 = creator('td');
    td1.innerHTML = value1;
    const th2 = creator('th');
    th2.innerHTML = name2;
    const td2 = creator('td');
    td2.innerHTML = value2;
    tr.appendChild(th1);
    tr.appendChild(td1);
    tr.appendChild(th2);
    tr.appendChild(td2);
    return tr;
};

const smallInformationBox = (charStat)=>{
  const box = creator('box');
  box.class = 'box';
  const table = creator('table');
  table.appendChild(smallInfoHelper("Age",charStat.age,"Skin",charStat.skin));
  table.appendChild(smallInfoHelper("Height",charStat.height,"Hair",charStat.hair));
  table.appendChild(smallInfoHelper("Weight",charStat.weight,"Skin",charStat.eyes));
  table.appendChild(smallInfoHelper("Vision",charStat.vision,"Reputation",charStat.reputation));
  box.appendChild(table);
  return box;
};
const createACandFriends= (charStat)=>{
    const holder = creator('div');
    holder.id = "AttributesAndFriends";
    const armorClass = createTwoPartBox(charStat.armorClass,"Armor Class","MITÄ TÄHÄN:D","voi kakka:-D");
    armorClass.id = "armorClass";
    holder.appendChild(armorClass);
    const hitPoints =createTwoPartBox(charStat.maxHp,"Hit Points",charStat.currentHp,"Current Hit Points");
    hitPoints.id ="hitPoints";
    holder.appendChild(hitPoints);
    const level =  createTwoPartBox(charStat.level,"Level",charStat.exp,"Experience")
    level.id = "level";
    holder.appendChild(level);
    holder.appendChild(smallInformationBox(charStat));
    return holder;
};

const setId = (element,idName)=>{
    element.id = idName;
    return element;
};
const setClass = (element,className)=>{
    element.class = className;
    return element;
};
// paskaa en jaksa
const createXandAppend = (creatorFunction,element,classFunction,hostElement)=>{
    const newElement = creatorFunction(element);
    classFunction(newElement,className);
    hostElement.appendChild();
};
const createPersonalityandFriends = (charStat)=>{
    const holder = creator('div');
    holder.id = "personalityAndFriends";
    const personality = createBox(charStat.personalityTraits,"Personality Traits");
    personality.id = "personality";
    holder.appendChild(personality);
    const ideals = createBox([charStat.ideals.flavor],"Ideals");
    ideals.id = "ideals";
    holder.appendChild(ideals);
    const bonds = createBox([charStat.bonds],"Bonds");
    bonds.id = "bonds";
    holder.appendChild(bonds);
    const flaws = createBox([charStat.flaws],"Flaws");
    flaws.id = "flaws";
    holder.appendChild(flaws);
    return holder;
};
const createProfAndAbilities = (profAndAbilities)=>{
    const box = creator('div');
    box.appendChild(createBox(profAndAbilities,"Other Proficiencies & Languages"));
    box.appendChild(createBox(profAndAbilities,"Special Abilities"));
    return box;
};

const createRightLowerSide = (character)=>{
    const base = creator('div');
    base.id = 'rightHolder';
    const topHolder = creator('div');
    const lowerHolder = creator('div');
    topHolder.class = "topHolder";
    lowerHolder.class = "lowerHolder";
    topHolder.appendChild(createACandFriends(character.stats));
    topHolder.appendChild(createPersonalityandFriends(character.stats));
    lowerHolder.appendChild(createAttackAndSpells(character.equipment.weapons));
    lowerHolder.appendChild(createProfAndAbilities(character.profAndAbilities));
    lowerHolder.appendChild(createBox(character.equipment.other,"Equipment"));
    lowerHolder.appendChild(createBox(character.notes,"Character Notes"));
    base.appendChild(topHolder);
    base.appendChild(lowerHolder);
    return base;
};

const createCharacter= (resp)=>{
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
    main.appendChild(buildCharHeader(resp));
    main.appendChild(createAttribute(resp.abilityScore));
    main.appendChild(createRightLowerSide(resp));
};

newCharacter.addEventListener('click',()=>{
    fetch('/newRandomCharacter')
        .then(data => data.json())
        .then((resp) =>{
            console.log(resp);
           // buildCharacter(resp);
            // main.innerHTML = " ";

            createCharacter(resp);
        })
});
/*
// TOIMIVA
newCharButton2.addEventListener('click',()=>{
    fetch('/post',fetchData)
        .then(response => response.json()).then((resp)=>{
            console.log(resp);
            esim.innerHTML = resp.kakka;
        }).catch(err=> console.log(err))
});

// TOIMIVA
newCharButton.addEventListener('click', () =>{
  console.log(text.value);
    fetch('/moi')
        .then(data => data.json())
        .then(resp =>{
            //TOIMII:-**** <33333 vittu viimein
            console.log(resp);
            esim.innerHTML = resp.moi;
        }).catch(err=>console.log(err))
});
*/
/*
newCharButton.addEventListener('click',()=>{
    console.log(text.value);
    data.body.data = text.value;
    fetch('/test2.json')
        .then(status)
        .then(json)
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
        }).catch(function(error) {
        console.log('Request failed', error);
    });
    /*
    fetch('/test2.json').then( (response) =>{
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        console.log(response.status);
        console.log(response.statusText);
        // Examine the text in the response
        response.json().then((data)=> {
            console.log("das");
            console.log(data);
            data.forEach(element =>
                console.log(element)
            )
        });}
).catch(err=>console.log(err));
*/
/*
    fetch(url,{
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }*/
        /*
        {
        method: "POST",

        mode: "same-origin",
        cache: "default",
        credentials: "same-origin",
        redirect: "follow",

        headers:{
           // "Content-Type": "application/json; charset=utf-8",
            "Content-Type": "text/pain",
        },
        body: {
            data: "moi"
        }})
        .then((response) =>{
            //console.log(response.json());
            console.log(response.body);
            console.log("entä");
            const parser = response.json();
            console.log(parser.body);
            esim.innerHTML = parser.data;
            return response;
        }).catch(err =>
        console.log(err)
    );
});
*/