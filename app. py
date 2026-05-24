# ============================================================
# VidyaVaani - SIH25104
# Language Agnostic Education Chatbot
# Built by: Anant (GitHub: Anant-083)
# Problem Statement: SIH25104 - Language Agnostic Chatbot
# Organization: Government of Rajasthan
# Theme: Smart Education
# Tech Stack: Flask + Groq API + langdetect
# Supports: 55 languages automatically
# Deployment: Render (gunicorn)
# ============================================================

# ---- Imports ----
from flask import Flask, render_template, request, jsonify
from groq import Groq
from langdetect import detect
from dotenv import load_dotenv
import os

# ---- Load environment variables from .env ----
load_dotenv()

# ---- Initialize Flask app ----
app = Flask(__name__)

# ---- Initialize Groq client with API key ----
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# ---- Conversation history list ----
# Stores last 5 exchanges (10 messages) for context memory
# This makes follow-up questions work naturally
conversation_history = []

# ============================================================
# FUNCTION: detect_language
# Detects the language of incoming user message
# Uses langdetect library (port of Google's language detector)
# Supports 55 languages including all major Indian languages:
# Hindi (hi), Bengali (bn), Tamil (ta), Telugu (te),
# Malayalam (ml), Marathi (mr), Gujarati (gu),
# Kannada (kn), Punjabi (pa), Urdu (ur)
# Falls back to English if text is too short or undetectable
# ============================================================
def detect_language(text):
    try:
        # Short texts like "hi" or "ok" confuse the detector
        # Minimum 10 characters for reliable detection
        if len(text.strip()) < 10:
            return "en"
        lang_code = detect(text)
        return lang_code
    except Exception:
        # If detection fails for any reason, default to English
        return "en"

# ============================================================
# FUNCTION: get_response
# Core function that:
# 1. Detects user language
# 2. Builds dynamic system prompt based on detected language
# 3. Sends conversation history to Groq API
# 4. Returns bot reply and detected language code
# ============================================================
def get_response(user_message):

    # Step 1: Detect language of user message
    lang = detect_language(user_message)

    # Step 2: Build dynamic system prompt
    # This tells the LLM to always reply in user's language
    system_prompt = f"""You are VidyaVaani, an intelligent education assistant for Indian students.
You help with questions about:
- College admissions and entrance exams
- Scholarships and financial aid
- Career guidance and course selection
- Government education schemes
- University and college information

The user is communicating in language code: '{lang}'.
Always reply in the exact same language and script as the user.
If the user writes in Hindi script, reply in Hindi script.
If the user writes in Bengali script, reply in Bengali script.
If you cannot detect the language, reply in English.
Keep answers helpful, concise, accurate and student-friendly.
Do not answer questions unrelated to education."""

    # Step 3: Add user message to conversation history
    conversation_history.append({
        "role": "user",
        "content": user_message
    })

    # Step 4: Keep only last 10 messages (5 exchanges)
    # This prevents memory overflow and keeps context relevant
    recent_history = conversation_history[-10:]

    # Step 5: Call Groq API with llama-3.3-70b-versatile model
    # This model supports multilingual responses natively
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": system_prompt},
            *recent_history
        ],
        max_tokens=500,
        temperature=0.7
    )

    # Step 6: Extract bot reply from response
    bot_reply = response.choices[0].message.content

    # Step 7: Add bot reply to conversation history
    conversation_history.append({
        "role": "assistant",
        "content": bot_reply
    })

    # Step 8: Return reply and detected language code
    return bot_reply, lang

# ============================================================
# ROUTE: / (Home Page)
# Renders the main chat interface
# ============================================================
@app.route("/")
def index():
    return render_template("index.html")

# ============================================================
# ROUTE: /chat (POST)
# Receives user message as JSON
# Returns bot reply and detected language as JSON
# ============================================================
@app.route("/chat", methods=["POST"])
def chat():

    # Step 1: Parse incoming JSON data
    data = request.get_json()
    user_message = data.get("message", "").strip()

    # Step 2: Validate message is not empty
    if not user_message:
        return jsonify({"error": "Empty message"}), 400

    # Step 3: Get response from Groq API
    try:
        reply, lang = get_response(user_message)
        return jsonify({
            "reply": reply,
            "lang": lang
        })

    # Step 4: Handle any unexpected errors gracefully
    except Exception as e:
        return jsonify({
            "error": str(e),
            "reply": "Sorry, something went wrong. Please try again."
        }), 500

# ============================================================
# Run Flask development server
# Debug mode ON for local development
# Render uses gunicorn instead of this in production
# ============================================================
if __name__ == "__main__":
    app.run(debug=True)
