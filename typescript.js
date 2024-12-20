"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// This function generates a simple resume preview HTML
function generateResumePreview() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    return "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n    ");
}
// Event listener for the "Download Resume as PDF" button
(_a = document.getElementById("downloadPdfButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // Generate resume content
    var resumePreview = generateResumePreview();
    var resumeElement = document.createElement('div');
    resumeElement.innerHTML = resumePreview;
    // Create a new jsPDF instance
    var jsPDF = window.jspdf.jsPDF; // Get jsPDF from the global window object
    var doc = new jsPDF();
    // Render the HTML content as a PDF
    doc.html(resumeElement, {
        callback: function (doc) {
            doc.save("resume.pdf"); // Save the generated PDF
        },
        margin: [10, 10, 10, 10],
        x: 10,
        y: 10
    });
});
