
/*
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.

Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie cper stampare la relativa card: **Nome, Ruolo e Foto**.

Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

1. Creare una collection all'intrno del quale andare ad inserire tutti i dati di ogni membro del team,
2. 
*/

const teamSection = document.querySelector('div.team-container');

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
        memberName: 'Angela Lopez',
        memberRole: 'Social Media Manager',
    }
];


for(let key in teamMembers){
    // console.log(teamMembers[key])
    teamSection.innerHTML += `
                            <div class="team-card">
                                <div class="card-image">
                                    <img src="${teamMembers[key].memberImg}" alt="${teamMembers[key].memberName}"/>
                                </div>
                                <div class="card-text">
                                    <h3>${teamMembers[key].memberName}</h3>
                                    <p>${teamMembers[key].memberRole}</p>
                                </div>
                            </div>`
}

