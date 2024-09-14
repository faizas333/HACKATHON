// Function to save the content into local storage
function saveChanges() {
    const name = (document.getElementById('name') as HTMLElement).innerText;
    const title = (document.getElementById('title') as HTMLElement).innerText;
    const email = (document.getElementById('email') as HTMLElement).innerText;
    const phone = (document.getElementById('phone') as HTMLElement).innerText;
    const linkedin = (document.getElementById('linkedin') as HTMLElement).innerText;
    const experience = (document.getElementById('experience') as HTMLElement).innerHTML;
    const skills = (document.getElementById('skills') as HTMLElement).innerHTML;
    const education = (document.getElementById('education') as HTMLElement).innerHTML;

    const resumeData = {
        name,
        title,
        email,
        phone,
        linkedin,
        experience,
        skills,
        education
    };

    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert("Resume saved!");
}

// Function to load saved content from local storage
function loadChanges() {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
        const resumeData = JSON.parse(savedData);

        (document.getElementById('name') as HTMLElement).innerText = resumeData.name;
        (document.getElementById('title') as HTMLElement).innerText = resumeData.title;
        (document.getElementById('email') as HTMLElement).innerText = resumeData.email;
        (document.getElementById('phone') as HTMLElement).innerText = resumeData.phone;
        (document.getElementById('linkedin') as HTMLElement).innerText = resumeData.linkedin;
        (document.getElementById('experience') as HTMLElement).innerHTML = resumeData.experience;
        (document.getElementById('skills') as HTMLElement).innerHTML = resumeData.skills;
        (document.getElementById('education') as HTMLElement).innerHTML = resumeData.education;
    }
}

// Event listener for the save button
document.getElementById('saveButton')?.addEventListener('click', saveChanges);

// Load the saved changes when the page loads
window.addEventListener('load', loadChanges);