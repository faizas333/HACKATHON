interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    education: string;
}

const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;

form.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    const resumeData: ResumeData = { name, email, phone, experience, education };
    displayResume(resumeData);
});

function displayResume(data: ResumeData): void {
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