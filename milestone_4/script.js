// Function to save the content into local storage
function saveChanges() {
    const name = document.getElementById('name').innerText;
    const title = document.getElementById('title').innerText;
    const email = document.getElementById('email').innerText;
    const phone = document.getElementById('phone').innerText;
    const linkedin = document.getElementById('linkedin').innerText;
    const experience = document.getElementById('experience').innerHTML;
    const skills = document.getElementById('skills').innerHTML;
    const education = document.getElementById('education').innerHTML;
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
        document.getElementById('name').innerText = resumeData.name;
        document.getElementById('title').innerText = resumeData.title;
        document.getElementById('email').innerText = resumeData.email;
        document.getElementById('phone').innerText = resumeData.phone;
        document.getElementById('linkedin').innerText = resumeData.linkedin;
        document.getElementById('experience').innerHTML = resumeData.experience;
        document.getElementById('skills').innerHTML = resumeData.skills;
        document.getElementById('education').innerHTML = resumeData.education;
    }
}
// Event listener for the save button
document.getElementById('saveButton')?.addEventListener('click', saveChanges);
// Load the saved changes when the page loads
window.addEventListener('load', loadChanges);
export {};
