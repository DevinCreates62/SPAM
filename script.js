// Webhook URL - replace with your actual webhook URL
const webhookURL = "https://discord.com/api/webhooks/1317972562520707092/HfilO37tV48dMwEamRpL95CXNgh31UeDe_o6USNTjT2QtB06LPSDOS5HYWUi_cMXQoyX";

// Function to send a ping
function sendPing() {
    const message = {
        content: "@everyone",
        username: "SPAMER",
        avatar_url: "spam.jpeg"
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            console.log("Ping sent successfully!");
        } else {
            console.error("Failed to send ping.");
        }
    })
    .catch(error => {
        console.error("Error sending ping:", error);
    });
}

// Automatically send pings every 10 seconds
setInterval(sendPing, 10000); // Adjust interval as needed
