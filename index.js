var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;

    var resumeData = { name: name, email: email, phone: phone, experience: experience, education: education };
    displayResume(resumeData);
});

function displayResume(data) {
    resumeContainer.innerHTML = `
        <div class="resume-header">
            <h2>${data.name}</h2>
            <p>${data.email} | ${data.phone}</p>
        </div>
        <div class="resume-section">
            <h2>Work Experience</h2>
            <p>${data.experience}</p>
        </div>
        <div class="resume-section">
            <h2>Education</h2>
            <p>${data.education}</p>
        </div>
    `;
}