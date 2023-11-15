const membersURL = "data/members.json";

document.addEventListener("DOMContentLoaded", () => {
    const toggleViewButton = document.getElementById("toggle-view-btn");
    const membersContainer = document.getElementById("members-container");

    let isGridView = true;

    toggleViewButton.addEventListener("click", () => {
        isGridView = !isGridView;
        renderMembers();
    });

    async function getMembers() {
        try {
            const response = await fetch(membersURL);
            const data = await response.json();
            return data.members;
        } catch (error) {
            console.error("Error fetching members data:", error);
            return [];
        }
    }

    function renderMembers() {
        getMembers().then((members) => {
            membersContainer.innerHTML = "";
            if (isGridView) {
                renderGrid(members);
            } else {
                renderList(members);
            }
        });
    }

    function renderGrid(members) {
        members.forEach((member) => {
            const memberCard = createMemberCard(member);
            membersContainer.appendChild(memberCard);
        });
    }

    function renderList(members) {
        members.forEach((member) => {
            const listItem = document.createElement("div");
            listItem.classList.add("list-item");

            const memberInfo = createMemberInfo(member);
            listItem.appendChild(memberInfo);

            membersContainer.appendChild(listItem);
        });
    }

    function createMemberCard(member) {
        const card = document.createElement("div");
        card.classList.add("member-card");

        // Implement card structure based on your HTML and member data

        const image = document.createElement("img");
        image.src = member.image; // Ensure the path is correct
        image.alt = member.name;

        const memberInfo = createMemberInfo(member);

        card.appendChild(image);
        card.appendChild(memberInfo);
        return card;
    }

    function createMemberInfo(member) {
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("member-info");

        // Implement list structure based on your HTML and member data
        const details = document.createElement("div");
        details.innerHTML = `
         <h2>${member.name}</h2>
         <p>${member.address}</p>
         <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
        <p>${member.otherInfo}</p>
  `;

        infoContainer.appendChild(details);

        return infoContainer;
    }

    // Initial rendering
    renderMembers();
});