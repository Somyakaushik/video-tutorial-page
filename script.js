const addVideoBtn = document.getElementById("addVideoBtn");
const videoGrid = document.getElementById("videoGrid");

addVideoBtn.addEventListener("click", () => {

    const thumbnail = document.getElementById("thumbnail").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (!thumbnail || !title || !description) {
        alert("Please fill in all fields");
    }
    else{

    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    videoCard.innerHTML = `
        <img src="${thumbnail}" alt="Thumbnail">
        <div class="content">
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="remove-btn">Remove</button>
        </div>
    `;

    videoCard.querySelector(".remove-btn").addEventListener("click", () => {
        videoGrid.removeChild(videoCard);
    });

    videoGrid.appendChild(videoCard);

    document.getElementById("thumbnail").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}
});
