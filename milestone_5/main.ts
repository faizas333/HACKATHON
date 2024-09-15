const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillsList = document.getElementById('skills-list');

if (skillsList) {
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}