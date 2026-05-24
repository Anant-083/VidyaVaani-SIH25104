async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const langIndicator = document.getElementById("langIndicator");
    const langBar = document.getElementById("langBar");
    const message = input.value.trim();

    if (!message) return;

    // User message with bubble
    chatBox.innerHTML += `
        <div class="message user">
            <div class="bubble user-bubble">${message}</div>
            <div class="user-avatar">👤</div>
        </div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Typing indicator
    const typingId = "typing_" + Date.now();
    chatBox.innerHTML += `
        <div class="message bot" id="${typingId}">
            <div class="avatar-sm">🎓</div>
            <div class="bubble bot-bubble">
                <div class="typing-dot">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        document.getElementById(typingId).remove();

        // Bot reply with bubble
        chatBox.innerHTML += `
            <div class="message bot">
                <div class="avatar-sm">🎓</div>
                <div class="bubble bot-bubble">${data.reply}</div>
            </div>`;

        // Language indicator
        const langNames = {
            "hi": "Hindi 🇮🇳", "bn": "Bengali 🇧🇩", "ta": "Tamil",
            "te": "Telugu", "ml": "Malayalam", "mr": "Marathi",
            "gu": "Gujarati", "kn": "Kannada", "pa": "Punjabi",
            "ur": "Urdu", "en": "English 🇬🇧", "fr": "French 🇫🇷",
            "es": "Spanish 🇪🇸", "ar": "Arabic", "it": "Italian"
        };
        const langName = langNames[data.lang] || data.lang;
        langIndicator.innerText = `🌐 Detected: ${langName}`;
        langBar.style.display = "block";

    } catch (err) {
        document.getElementById(typingId)?.remove();
        chatBox.innerHTML += `
            <div class="message bot">
                <div class="avatar-sm">🎓</div>
                <div class="bubble bot-bubble">Sorry, something went wrong. Please try again.</div>
            </div>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});
