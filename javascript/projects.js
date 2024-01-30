// Sample project data for demonstration
const projects = [
    {
        title: "Portfolio",
        description: "Private custom-made website",
        images: ["Images_secondary\portolio_1.png", "Images_secondary\portolio_1.png", "Images_secondary\portolio_1.png"],
        video: "https://www.youtube.com/embed/0vET6tWKGJc?si=2kId_PHPRHOo4uH1",
        tags: ["Web Development", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "Computer Graphics -  PART I",
        description: "Low level graphic core programming, this project provides a basic perspective of OpenGL functionality along with C++",
        images: ["image4.jpg", "image5.jpg", "image6.jpg"],
        video: "https://www.youtube.com/embed/0vET6tWKGJc?si=2kId_PHPRHOo4uH1",
        tags: ["OpenGL", "C++", "C", "C-Make"]
    },
    {
        title: "Computer Graphics -  PART II",
        description: "Low level graphic core programming, this project provides a basic perspective of OpenGL functionality along with C++",
        images: ["image4.jpg", "image5.jpg", "image6.jpg"],
        video: "https://www.youtube.com/embed/rK9Bxtf3mWE?si=TXdPzOlAUZB79qVN",
        tags: ["OpenGL", "C++", "C", "C-Make"]
    },
    {
        title: "Computer Graphics -  PART III",
        description: "Low level graphic core programming, this project provides a basic perspective of OpenGL functionality along with C++",
        images: ["image4.jpg", "image5.jpg", "image6.jpg"],
        video: "https://www.youtube.com/embed/fQ9wnf7RXsU?si=Xx0JvkcmZcok6Lw1",
        tags: ["OpenGL", "C++", "C", "C-Make"]
    },
    // Add more projects as needed
];

// // Function to initialize the project cards
// function initializeProjects() {
//     const projectCardsContainer = document.querySelector(".project-cards");

//     projects.forEach(project => {
//         const projectCard = document.createElement("div");
//         projectCard.classList.add("project-card");
//         projectCard.addEventListener("click", () => openModal(project.images, project.video));

//         const projectImage = document.createElement("img");
//         projectImage.src = project.images[0];
//         projectImage.alt = project.title;
//         projectImage.classList.add("project-image");

//         const projectDetails = document.createElement("div");
//         projectDetails.classList.add("project-details");

//         const projectTitle = document.createElement("h2");
//         projectTitle.innerText = project.title;
//         projectTitle.classList.add("project-title");

//         const projectDescription = document.createElement("p");
//         projectDescription.innerText = project.description;
//         projectDescription.classList.add("project-description");

//         const tagsContainer = document.createElement("div");
//         tagsContainer.classList.add("tags");

//         project.tags.forEach(tag => {
//             const tagElement = document.createElement("div");
//             tagElement.classList.add("tag");
//             tagElement.innerText = tag;
//             tagsContainer.appendChild(tagElement);
//         });

//         projectDetails.appendChild(projectTitle);
//         projectDetails.appendChild(projectDescription);
//         projectDetails.appendChild(tagsContainer);

//         projectCard.appendChild(projectImage);
//         projectCard.appendChild(projectDetails);

//         projectCardsContainer.appendChild(projectCard);
//     });
// }

// // Modal functions
// function openModal(images, video) {
//     const modal = document.getElementById("imageModal");
//     const modalContent = document.querySelector(".modal-content");
//     const modalImageContainer = document.getElementById("modalImageContainer");

//     // Clear previous content
//     modalImageContainer.innerHTML = "";

//     // Display images in the modal
//     images.forEach(image => {
//         const imgElement = document.createElement("img");
//         imgElement.src = image;
//         imgElement.alt = "Project Image";
//         imgElement.classList.add("modal-image");
//         modalImageContainer.appendChild(imgElement);
//     });

//     // Display YouTube video in the modal, if available
//     if (video) {
//         const videoElement = document.createElement("iframe");
//         videoElement.src = video;
//         videoElement.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
//         videoElement.allowfullscreen = true;
//         videoElement.classList.add("modal-video");
//         modalImageContainer.appendChild(videoElement);
//     }

//     // Show the modal
//     modal.style.display = "flex";
// }

// function closeModal() {
//     const modal = document.getElementById("imageModal");
//     modal.style.display = "none";
// }

// // Close modal if the user clicks outside of it
// window.onclick = function (event) {
//     const modal = document.getElementById("imageModal");
//     if (event.target === modal) {
//         closeModal();
//     }
// };

// // Initialize the project cards when the page loads
// window.onload = initializeProjects;


function openModal(videoUrl) {
    const modal = document.getElementById("imageModal");
    const videoElement = modal.querySelector(".modal-video");
    videoElement.src = videoUrl;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    const videoElement = modal.querySelector(".modal-video");
    videoElement.src = "";
    modal.style.display = "none";
}