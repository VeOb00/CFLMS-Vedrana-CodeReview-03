var teamMembers = [
    {
        name: "Fran",
        position: "CEO",
        email: "fran@index.com",
        image: "media/person1.jpg",
        tel: "0680 &#47; 12 04 569"
    },
    {
        name: "Bill",
        position: "General Manager",
        email: "bill@index.com",
        image: "media/person2.jpg",
        tel: "0680 &#47; 12 34 507"
    },
    {
        name: "Fritz",
        position: "HR Manager",
        email: "fritz@index.com",
        image: "media/person3.jpg",
        tel: "0681 &#47; 10 34 567"
    },
    {
        name: "Bella",
        position: "Acounting",
        email: "bella@index.com",
        image: "media/person4.jpg",
        tel: "0680 &#47; 12 94 507"
    },
    {
        name: "Max",
        position: "Senior Fetch Expert",
        email: "max@index.com",
        image: "media/person5.jpg",
        tel: "0681 &#47; 92 34 567"
    },
    {
        name: "Kenny",
        position: "Junior Fetch Expert",
        email: "kenny@index.com",
        image: "media/person6.jpg",
        tel: "0680 &#47; 12 04 967"
    }
];

for (var i = 0; i < teamMembers.length; i++) {
    document.getElementById("team").innerHTML += `
        <div class="person">
            <img src="${teamMembers[i].image}" alt="Team Member">
            <p>${teamMembers[i].name}</p>
            <div class="overlay">
                <div id="info" class="overlay_text">
                    <p>${teamMembers[i].position}</p>
                    <p>${teamMembers[i].email}</p>
                    <p class="small">tel: ${teamMembers[i].tel}</p>
                </div>
            </div>
        </div>
        `;
}