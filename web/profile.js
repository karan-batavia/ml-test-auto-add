function sendProfile(email, dateOfBirth) {
  fetch("https://api.mixpanel.com/engage", { method: "POST", body: JSON.stringify({ email, dateOfBirth }) });
}
module.exports = { sendProfile };
