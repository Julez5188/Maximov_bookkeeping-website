const form = document.querySelector(".contact_form");
const button = form.querySelector("button");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  button.textContent = "Sending...";
  button.disabled = true;

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.innerHTML = 
      "<p class='thanks'>Thanks! Your message has been received. I'll get back to you soon 💙</p>" +
      "<p>Also, I build websites for small businesses. <a href='webdev.html'>See my web development services here.</a></p>";
    }else{
      button.textContent = "Send Message";
      button.disabled = false;
      alert("Something went wrong. Please try again.");
    }
  }catch (error) {
    button.textContent = "Send Message";
    button.disabled = false;
    alert("Something went wrong. Please try again.");
  }
});