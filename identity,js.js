// Initialize Netlify Identity Widget
if (window.netlifyIdentity) {
  // Log when the widget is initialized
  window.netlifyIdentity.on("init", user => {
    console.log("Netlify Identity initialized", user);
  });

  // Log when a user logs in
  window.netlifyIdentity.on("login", user => {
    console.log("User logged in:", user);
    window.netlifyIdentity.close(); // Close the modal after login
  });

  // Log when a user logs out
  window.netlifyIdentity.on("logout", () => {
    console.log("User logged out");
  });
}

// Add a function to open the login modal
function openNetlifyIdentityModal() {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.open();
  } else {
    console.error("Netlify Identity Widget is not loaded.");
  }
}

