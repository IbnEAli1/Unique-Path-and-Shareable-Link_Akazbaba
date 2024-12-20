// Declare the global window property for jsPDF to avoid TypeScript errors
declare global {
    interface Window {
        jspdf: any;
    }
}

// Import jsPDF if using the npm module
import { jsPDF } from "jspdf";

// This function generates a simple resume preview HTML
function generateResumePreview(): string {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;

    return `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
}

// Event listener for the "Download Resume as PDF" button
document.getElementById("downloadPdfButton")?.addEventListener("click", () => {
    // Generate resume content
    const resumePreview = generateResumePreview();
    const resumeElement = document.createElement('div');
    resumeElement.innerHTML = resumePreview;

    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf; // Get jsPDF from the global window object

    const doc = new jsPDF();
    
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
