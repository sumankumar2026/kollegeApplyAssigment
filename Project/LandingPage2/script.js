// OPEN MODAL
document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
    loadFees();
});

// CLOSE MODAL
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

// FEES LOADING FUNCTION
function loadFees() {
    let fees = {
        "B.Tech CSE": "₹1,95,000 / year",
        "B.Tech AI & ML": "₹2,10,000 / year",
        "BBA": "₹1,20,000 / year",
        "MBA": "₹2,50,000 / year"
    };

    let html = "<ul>";

    for (let course in fees) {
        html += `<li><strong>${course}</strong>: ${fees[course]}</li>`;
    }

    html += "</ul>";

    document.getElementById("feesData").innerHTML = html;
}


// PHONE VALIDATION
document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});


// FORM SUBMIT → PIPE DREAM
document.getElementById("leadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        state: state.value,
        course: course.value,
        intake: intake.value
    };

    await fetch("https://736972191b53a026d806b0c853a4695a.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    alert("Form submitted successfully!");
});
