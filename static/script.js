async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const langIndicator = document.getElementById("langIndicator");
    const message = input.value.trim();

    if (!message) return;

    // Show user message
    chatBox.innerHTML += `<div class="message user-message">${message}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show typing indicator
    const typing = document.createElement("div");
    typing.className = "message bot-message";
    typing.id = "typing";
    typing.innerText = "VidyaVaani is thinking...";
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        document.getElementById("typing").remove();

        chatBox.innerHTML += `<div class="message bot-message">${data.reply}</div>`;
        langIndicator.innerText = `Detected language: ${data.lang}`;
    } catch (err) {
        document.getElementById("typing").remove();
        chatBox.innerHTML += `<div class="message bot-message">Sorry, something went wrong. Please try again.</div>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});
