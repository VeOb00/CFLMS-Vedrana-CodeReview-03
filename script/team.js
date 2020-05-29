

var teamMembers = [
    {
        name:"Fran",
        position: "CEO",
        email:"fran@index.com",
        image:`src="media/person1.jpg"`
    },
    {
        name:"Bill",
        position: "General Manager",
        email:"bill@index.com",
        image:`src="media/person2.jpg"`
    },
    {
        name:"Fritz",
        position: "HR Manager",
        email:"fritz@index.com",
        image:`src="media/person3.jpg"`
    },
    {
        name:"Bella",
        position: "Acounting",
        email: "bella@index.com",
        image:`src="media/person4.jpg"`
    },
    {
        name:"Max",
        position: "Senior Fetch Expert",
        email:"max@index.com",
        image:`src="media/person5.jpg"`
    },
    {
        name:"Kenny",
        position: "Junior Fetch Expert",
        email:"kenny@index.com",
        image:`src="media/person6.jpg"`
    },
];

var i;
for (i = 0; i < teamMembers.length; i++) {
    document.getElementById("team").innerHTML += `
        <div class="person">
            <img ${teamMembers[i].image} alt="Team Member">
            <p>${teamMembers[i].name}</p>
            <div class="overlay">
                <div id="info" class="overlay_text">
                    <p>${teamMembers[i].position}</p>
                    <p>${teamMembers[i].email}</p>
                    <p></p>
                </div>
            </div>
        </div>
        `;
}