function submitForm() {
    // Get form element
    var form = document.getElementById("serviceForm");
  
    // Get selected services
    var selectedServices = [];
    var checkboxes = form.querySelectorAll('input[name="service"]:checked');
    checkboxes.forEach(function(checkbox) {
      selectedServices.push(checkbox.value);
    });
  
    // Get appointment date and time
    var appointmentDate = form.elements["appointmentDate"].value;
    var appointmentTime = form.elements["appointmentTime"].value;
  
    // Display selected services, appointment date, and time
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h4>Selected Services:</h4>";
    if (selectedServices.length > 0) {
      outputDiv.innerHTML += "<ul>";
      selectedServices.forEach(function(service) {
        outputDiv.innerHTML += "<li>" + service + "</li>";
      });
      outputDiv.innerHTML += "</ul>";
    } else {
      outputDiv.innerHTML += "<p>No services selected.</p>";
    }
    outputDiv.innerHTML += "<p>Appointment Date: " + appointmentDate + "</p>";
    outputDiv.innerHTML += "<p>Appointment Time: " + appointmentTime + "</p>";
  }
  