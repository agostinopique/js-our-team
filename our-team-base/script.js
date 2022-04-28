/*

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.

Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie cper stampare la relativa card: **Nome, Ruolo e Foto**.

Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

*/

const teamSection = document.querySelector('div.team-container');

const submitMemberBtn = document.getElementById('addMemberButton');


const teamMembers = [
    {
        memberImg: './img/wayne-barnett-founder-ceo.jpg',
        memberName: 'Wayne Barnett',
        memberRole: 'Founder & CEO',
    },
    {
        memberImg: './img/walter-gordon-office-manager.jpg',
        memberName: 'Walter Gordon',
        memberRole: 'Office Manager',
    },
    {
        memberImg: './img/scott-estrada-developer.jpg',
        memberName: 'Scott Estrada',
        memberRole: 'Developer',
    },
    {
        memberImg: './img/barbara-ramos-graphic-designer.jpg',
        memberName: 'Barbara Ramos',
        memberRole: 'Graphic Designer',
    },
    {
        memberImg: './img/angela-lopez-social-media-manager.jpg',
        memberName: 'Angela Lopez',
        memberRole: 'Social Media Manager',
    },
    {
        memberImg: './img/angela-caroll-chief-editor.jpg',
        memberName: 'Angela Caroll',
        memberRole: 'Chief Editor',
    }
];

// print(teamMembers[0].memberName, teamMembers[0].memberImg, teamMembers[0].memberRole);

start();

function print(name, img, role){

    teamSection.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="${img}" alt="${name}"/>
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>`
}


function start(){
    for(let key in teamMembers){
        print(teamMembers[key].memberName, teamMembers[key].memberImg, teamMembers[key].memberRole);
        console.log(teamMembers[key]);
    }
}


submitMemberBtn.addEventListener('click', newMember);

function newMember(){
    console.log('Nuovo membro aggiunto!');

    const nameInput = document.getElementById('name').value;
    const roleInput = document.getElementById('role').value;
    const imgInput = document.getElementById('image').value;

    let newMember = 
    {
        memberImg: imgInput,
        memberName: nameInput,
        memberRole: roleInput
    };
    console.log(newMember);
    teamMembers.push(newMember);

    print(newMember.memberName, newMember.memberImg, newMember.memberRole);

}


















/* 

function start(){

        print(teamMembers[0].memberImg, teamMembers[0].memberName,teamMembers[0].memberRole);

}
print();


submitMemberBtn.addEventListener('click', memberPush);


function memberPush() {
    console.log('cliccato!');

    const nameInput = document.getElementById('name').value;
    const roleInput = document.getElementById('role').value;
    const imgInput = document.getElementById('image').value;

    let newMember = 
    {
        memberImg: imgInput,
        memberName: nameInput,
        memberRole: roleInput
    };
    console.log(newMember);
    teamMembers.push(newMember);

    print()
}

function start(){

        teamSection.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="${teamMembers[key].memberImg}" alt="${teamMembers[key].memberName}"/>
            </div>
            <div class="card-text">
                <h3>${teamMembers[key].memberName}</h3>
                <p>${teamMembers[key].memberRole}</p>
            </div>


}
 */