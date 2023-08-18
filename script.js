document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".form");
	const submitButton = document.querySelector(".btn-contact");
	
	form.addEventListener("submit", async function (event) {
	  event.preventDefault();
	  
	  submitButton.disabled = true;
	  
	  const formData = new FormData(form);
	  
	  try {
		const response = await fetch("https://httpbin.org/post", {
		  method: "POST",
		  body: formData,
		});
		
		if (response.ok) {
		  alert("Form submitted successfully!");
		} else {
		  alert("An error occurred. Please try again later.");
		}
	  } catch (error) {
		console.error("Error:", error);
		alert("An error occurred. Please try again later.");
	  } finally {
		submitButton.disabled = false;
	  }
	});
  });
  