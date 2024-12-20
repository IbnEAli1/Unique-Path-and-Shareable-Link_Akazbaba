// Function to create editable divs for different sections
function createEditableDiv(content: string): HTMLDivElement {
    const div = document.createElement("div");
    div.classList.add("editable");
    div.contentEditable = "true";
    div.textContent = content;
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "burlywood";
    return div;
}

// Function to handle adding personal information
function updatePersonalInfo() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const fatherName = (document.getElementById("fname") as HTMLInputElement).value;
    const dob = (document.getElementById("dob") as HTMLInputElement).value;
    const maritalStatus = (document.getElementById("martial") as HTMLInputElement).value;
    const gender = (document.getElementById("gender") as HTMLInputElement).value;
    const cnic = (document.getElementById("cnic") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const nationality = (document.getElementById("nationality") as HTMLInputElement).value;

    const personalInfoSection = document.getElementById("personalInfo")!;
    personalInfoSection.innerHTML = ''; // Clear current section

    personalInfoSection.appendChild(createEditableDiv(`Name: ${name}`));
    personalInfoSection.appendChild(createEditableDiv(`Father's Name: ${fatherName}`));
    personalInfoSection.appendChild(createEditableDiv(`DOB: ${dob}`));
    personalInfoSection.appendChild(createEditableDiv(`Marital Status: ${maritalStatus}`));
    personalInfoSection.appendChild(createEditableDiv(`Gender: ${gender}`));
    personalInfoSection.appendChild(createEditableDiv(`CNIC: ${cnic}`));
    personalInfoSection.appendChild(createEditableDiv(`Email: ${email}`));
    personalInfoSection.appendChild(createEditableDiv(`Phone: ${phone}`));
    personalInfoSection.appendChild(createEditableDiv(`Address: ${address}`));
    personalInfoSection.appendChild(createEditableDiv(`Nationality: ${nationality}`));
}

// Function to handle adding education details
function updateEducation() {
    const bachelorDegree = (document.getElementById("bachelor_degree") as HTMLInputElement).value;
    const bachelorYear = (document.getElementById("bachelor_year") as HTMLInputElement).value;
    const intermediateDegree = (document.getElementById("intermediate_degree") as HTMLInputElement).value;
    const intermediateYear = (document.getElementById("intermediate_year") as HTMLInputElement).value;
    const matriculationDegree = (document.getElementById("matriculation_degree") as HTMLInputElement).value;
    const matriculationYear = (document.getElementById("matriculation_year") as HTMLInputElement).value;

    const educationSection = document.getElementById("educationInfo")!;
    educationSection.innerHTML = ''; // Clear current section

    educationSection.appendChild(createEditableDiv(`Bachelor: ${bachelorDegree}, Year: ${bachelorYear}`));
    educationSection.appendChild(createEditableDiv(`Intermediate: ${intermediateDegree}, Year: ${intermediateYear}`));
    educationSection.appendChild(createEditableDiv(`Matriculation: ${matriculationDegree}, Year: ${matriculationYear}`));
}

// Function to handle adding experience details
function updateExperience() {
    const experience1 = (document.getElementById("experience_1") as HTMLInputElement).value;
    const experience1Start = (document.getElementById("experience_1_start") as HTMLInputElement).value;
    const experience1End = (document.getElementById("experience_1_end") as HTMLInputElement).value;

    const experienceSection = document.getElementById("experienceInfo")!;
    experienceSection.innerHTML = ''; // Clear current section

    experienceSection.appendChild(createEditableDiv(`Experience: ${experience1}, Start Year: ${experience1Start}, End Year: ${experience1End}`));
}

// Function to handle adding skills
function updateSkills() {
    const skills: string[] = [];
    for (let i = 1; i <= 5; i++) {
        const skill = (document.getElementById(`skill_${i}`) as HTMLInputElement).value;
        if (skill) skills.push(skill);
    }

    const skillsSection = document.getElementById("skillsInfo")!;
    skillsSection.innerHTML = ''; // Clear current section

    skills.forEach(skill => {
        skillsSection.appendChild(createEditableDiv(`Skill: ${skill}`));
    });
}

// Function to handle adding languages
function updateLanguages() {
    const languages: string[] = [];
    for (let i = 1; i <= 3; i++) {
        const language = (document.getElementById(`language_${i}`) as HTMLInputElement).value;
        if (language) languages.push(language);
    }

    const languagesSection = document.getElementById("languagesInfo")!;
    languagesSection.innerHTML = ''; // Clear current section

    languages.forEach(language => {
        languagesSection.appendChild(createEditableDiv(`Language: ${language}`));
    });
}

// Function to generate the resume
function generateResume() {
    updatePersonalInfo();
    updateEducation();
    updateExperience();
    updateSkills();
    updateLanguages();
}

// Attach event listeners
document.getElementById("resumeForm")!.addEventListener("input", generateResume);

// Initialize the resume output section
const resumeOutput = document.getElementById("resumeOutput")!;
resumeOutput.innerHTML = `
    <h2>Personal Information</h2><div id="personalInfo"></div>
    <h2>Education</h2><div id="educationInfo"></div>
    <h2>Work Experience</h2><div id="experienceInfo"></div>
    <h2>Skills</h2><div id="skillsInfo"></div>
    <h2>Languages</h2><div id="languagesInfo"></div>
`;

// Initial call to generate the resume on page load
generateResume();
