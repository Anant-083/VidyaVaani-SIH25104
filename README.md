# 🎓 VidyaVaani — Language Agnostic Education Chatbot



![Python](https://img.shields.io/badge/Python-3.11-yellow?style=for-the-badge&logo=python)




![Flask](https://img.shields.io/badge/Flask-3.0-black?style=for-the-badge&logo=flask)




![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-orange?style=for-the-badge)




![Languages](https://img.shields.io/badge/Languages-55+-blue?style=for-the-badge)




![SIH](https://img.shields.io/badge/SIH-2025-green?style=for-the-badge)




![Deployed](https://img.shields.io/badge/Deployed-Render-purple?style=for-the-badge&logo=render)




![License](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)



---

## 🏛️ Problem Statement Details

| Field | Details |
|---|---|
| **Problem Statement ID** | SIH25104 |
| **Title** | Language Agnostic Chatbot |
| **Organization** | Government of Rajasthan |
| **Theme** | Smart Education |
| **Category** | Software |
| **Hackathon** | Smart India Hackathon 2025 |
| **Official Portal** | [sih.gov.in](https://www.sih.gov.in) |

---

## 🌐 Live Demo

🔗 **[https://vidyavaani-sih25104.onrender.com](https://vidyavaani-sih25104.onrender.com)**

---

## 📌 Problem Statement

The Government of Rajasthan identified a critical gap — millions of Indian students seeking education guidance are unable to access helpful information because existing chatbots only work in English. Students from rural and semi-urban areas who speak Hindi, Bengali, Tamil, Telugu, Malayalam, and other regional languages are left without support.

VidyaVaani solves this by automatically detecting and responding in the user's own language — no language selection needed.

---

## ✨ Features

- 🌍 55 Language Support — Hindi, Bengali, Tamil, Telugu, Malayalam, Marathi, Gujarati, Kannada, Punjabi, Urdu and 45 more
- 🤖 Auto Language Detection — powered by langdetect (Google's language detection algorithm)
- 🧠 Context Memory — remembers last 5 exchanges for natural follow-up conversations
- ⚡ Blazing Fast — Groq API responds in under 1 second
- 🎓 Education Focused — answers only education related queries
- 🔄 Language Switching — user can switch languages mid-conversation
- 📱 Mobile Friendly — works on all screen sizes
- 🛡️ Error Handling — graceful fallbacks for all failure cases

---

## 🆚 How VidyaVaani is Different

| Feature | Other Chatbots | VidyaVaani |
|---|---|---|
| Language Support | English only | 55 languages |
| Language Selection | Manual dropdown | Automatic detection |
| AI Model | Rule-based / hardcoded | LLaMA 3.3 70B via Groq |
| Response Speed | Slow | Under 1 second |
| Context Memory | None | Last 5 exchanges |
| Education Focus | Generic | Domain specific |
| Deployment | Local only | Live on Render |

---

## 🛠️ Tech Stack

- Backend — Python 3.11 + Flask
- AI Model — LLaMA 3.3 70B Versatile via Groq API
- NLP — langdetect (Google's language detection)
- Deployment — Render with gunicorn
- Frontend — Jinja2 Templates + HTML/CSS

---

## 📁 File Structure

- app.py — Flask app + Groq API + langdetect logic
- requirements.txt — Python dependencies
- .gitignore — protects .env from GitHub
- templates/index.html — Chat UI
- static/style.css — Styling
- static/script.js — Send on Enter key

---

## ⚙️ Installation & Setup

1. Clone the repo
git clone https://github.com/Anant-083/VidyaVaani-SIH25104
cd VidyaVaani-SIH25104

2. Install dependencies
pip install -r requirements.txt

3. Create .env file
GROQ_API_KEY=your_groq_api_key_here

4. Run the app
python app.py

5. Open browser at http://127.0.0.1:5000

---

## 🌍 Supported Indian Languages

| Language | Code | Script |
|---|---|---|
| Hindi | hi | देवनागरी |
| Bengali | bn | বাংলা |
| Tamil | ta | தமிழ் |
| Telugu | te | తెలుగు |
| Malayalam | ml | മലയാളം |
| Marathi | mr | मराठी |
| Gujarati | gu | ગુજરાતી |
| Kannada | kn | ಕನ್ನಡ |
| Punjabi | pa | ਪੰਜਾਬੀ |
| Urdu | ur | اردو |

---

## 🚀 Deployment on Render

| Field | Value |
|---|---|
| Environment | Python 3 |
| Build Command | pip install -r requirements.txt |
| Start Command | gunicorn app:app |
| Environment Variable | GROQ_API_KEY |

---

## 👨‍💻 Developer

- Name: Anant
- GitHub: https://github.com/Anant-083
- Institution: Brainware University
- Branch: B.Tech CSE (AI & ML)

---

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for Smart India Hackathon 2025 | SIH25104 | Government of Rajasthan
