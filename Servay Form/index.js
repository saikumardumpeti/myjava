const form = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const popupContent = document.getElementById('popupContent');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate the form fields here
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if any validation is needed, e.g., check for required fields, validate email, etc.

    // If validation is successful, display the popup
    const popupText = `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Date of Birth:</b> ${dob}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Gender:</b> ${male ? 'Male' : ''} ${female ? 'Female' : ''}</p>
        <p><b>Profession:</b> ${profession}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile Number:</b> ${mobile}</p>
    `;

    popupContent.innerHTML = popupText;
    popup.style.display = 'block';
});

document.getElementById('popup').addEventListener('click', function (e) {
    if (e.target === popup) {
        closePopup.click();
    }
});

closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
    form.reset();
});
