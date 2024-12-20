// Function to create editable divs for different sections
function createEditableDiv(content) {
    var div = document.createElement("div");
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
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fname").value;
    var dob = document.getElementById("dob").value;
    var maritalStatus = document.getElementById("martial").value;
    var gender = document.getElementById("gender").value;
    var cnic = document.getElementById("cnic").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var nationality = document.getElementById("nationality").value;
    var personalInfoSection = document.getElementById("personalInfo");
    personalInfoSection.innerHTML = ''; // Clear current section
    personalInfoSection.appendChild(createEditableDiv("Name: ".concat(name)));
    personalInfoSection.appendChild(createEditableDiv("Father's Name: ".concat(fatherName)));
    personalInfoSection.appendChild(createEditableDiv("DOB: ".concat(dob)));
    personalInfoSection.appendChild(createEditableDiv("Marital Status: ".concat(maritalStatus)));
    personalInfoSection.appendChild(createEditableDiv("Gender: ".concat(gender)));
    personalInfoSection.appendChild(createEditableDiv("CNIC: ".concat(cnic)));
    personalInfoSection.appendChild(createEditableDiv("Email: ".concat(email)));
    personalInfoSection.appendChild(createEditableDiv("Phone: ".concat(phone)));
    personalInfoSection.appendChild(createEditableDiv("Address: ".concat(address)));
    personalInfoSection.appendChild(createEditableDiv("Nationality: ".concat(nationality)));
}
// Function to handle adding education details
function updateEducation() {
    var bachelorDegree = document.getElementById("bachelor_degree").value;
    var bachelorYear = document.getElementById("bachelor_year").value;
    var intermediateDegree = document.getElementById("intermediate_degree").value;
    var intermediateYear = document.getElementById("intermediate_year").value;
    var matriculationDegree = document.getElementById("matriculation_degree").value;
    var matriculationYear = document.getElementById("matriculation_year").value;
    var educationSection = document.getElementById("educationInfo");
    educationSection.innerHTML = ''; // Clear current section
    educationSection.appendChild(createEditableDiv("Bachelor: ".concat(bachelorDegree, ", Year: ").concat(bachelorYear)));
    educationSection.appendChild(createEditableDiv("Intermediate: ".concat(intermediateDegree, ", Year: ").concat(intermediateYear)));
    educationSection.appendChild(createEditableDiv("Matriculation: ".concat(matriculationDegree, ", Year: ").concat(matriculationYear)));
}
// Function to handle adding experience details
function updateExperience() {
    var experience1 = document.getElementById("experience_1").value;
    var experience1Start = document.getElementById("experience_1_start").value;
    var experience1End = document.getElementById("experience_1_end").value;
    var experienceSection = document.getElementById("experienceInfo");
    experienceSection.innerHTML = ''; // Clear current section
    experienceSection.appendChild(createEditableDiv("Experience: ".concat(experience1, ", Start Year: ").concat(experience1Start, ", End Year: ").concat(experience1End)));
}
// Function to handle adding skills
function updateSkills() {
    var skills = [];
    for (var i = 1; i <= 5; i++) {
        var skill = document.getElementById("skill_".concat(i)).value;
        if (skill)
            skills.push(skill);
    }
    var skillsSection = document.getElementById("skillsInfo");
    skillsSection.innerHTML = ''; // Clear current section
    skills.forEach(function (skill) {
        skillsSection.appendChild(createEditableDiv("Skill: ".concat(skill)));
    });
}
// Function to handle adding languages
function updateLanguages() {
    var languages = [];
    for (var i = 1; i <= 3; i++) {
        var language = document.getElementById("language_".concat(i)).value;
        if (language)
            languages.push(language);
    }
    var languagesSection = document.getElementById("languagesInfo");
    languagesSection.innerHTML = ''; // Clear current section
    languages.forEach(function (language) {
        languagesSection.appendChild(createEditableDiv("Language: ".concat(language)));
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
document.getElementById("resumeForm").addEventListener("input", generateResume);
// Initialize the resume output section
var resumeOutput = document.getElementById("resumeOutput");
resumeOutput.innerHTML = "\n    <h2>Personal Information</h2><div id=\"personalInfo\"></div>\n    <h2>Education</h2><div id=\"educationInfo\"></div>\n    <h2>Work Experience</h2><div id=\"experienceInfo\"></div>\n    <h2>Skills</h2><div id=\"skillsInfo\"></div>\n    <h2>Languages</h2><div id=\"languagesInfo\"></div>\n";
// Initial call to generate the resume on page load
generateResume();
