# <div align="center">🎓 VidyaVaani</div>

<div align="center">

### AI-Powered Language Agnostic Education Chatbot for India

<br/>



![Python](https://img.shields.io/badge/Python-3.11-yellow?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-3.0-black?style=for-the-badge&logo=flask)
![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-orange?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-55+-blue?style=for-the-badge)
![SIH](https://img.shields.io/badge/SIH25104-Smart_Education-green?style=for-the-badge)
![Rajasthan](https://img.shields.io/badge/Govt._of-Rajasthan-darkblue?style=for-the-badge)
![Deployed](https://img.shields.io/badge/Deployed-Render-purple?style=for-the-badge&logo=render)
![License](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)



<br/>

### 🔗 [Live Demo → vidyavaani-sih25104.onrender.com](https://vidyavaani-sih25104.onrender.com)

<br/>

> *"Breaking language barriers in education — one conversation at a time."*

</div>

---

## 🏛️ Problem Statement

<div align="center">

| Field | Details |
|:---|:---|
| 🆔 **Problem Statement ID** | SIH25104 |
| 📋 **Title** | Language Agnostic Chatbot |
| 🏢 **Organization** | Government of Rajasthan |
| 🎯 **Theme** | Smart Education |
| 💻 **Category** | Software |
| 🏆 **Hackathon** | Smart India Hackathon 2025 |
| 🌐 **Official Portal** | [sih.gov.in](https://www.sih.gov.in) |
| 📊 **Competing Ideas** | 0 (First to solve) |

</div>

---

## 💡 The Problem

Millions of Indian students from rural and semi-urban areas speak Hindi, Bengali, Tamil, Telugu, Malayalam and other regional languages. Existing education chatbots only work in English — leaving crores of students without guidance on admissions, scholarships and careers.

**VidyaVaani solves this — it automatically detects and replies in the user's own language. No selection. No switching. Just type.**

---

## ✨ Features

| Feature | Description |
|:---|:---|
| 🌍 **55 Languages** | All major Indian + international languages supported |
| 🤖 **Auto Detection** | Powered by Google's langdetect algorithm |
| 🧠 **Context Memory** | Remembers last 5 exchanges for natural conversation |
| ⚡ **Blazing Fast** | Groq API responds in under 1 second |
| 🎓 **Education Focused** | Admissions, exams, scholarships, colleges, careers |
| 🔄 **Mid-Chat Switching** | Switch languages anytime in same conversation |
| 📱 **Mobile Friendly** | Works perfectly on all screen sizes |
| 🛡️ **Error Handling** | Graceful fallbacks for all failure cases |

---

## 🆚 Why VidyaVaani Wins

| Feature | Other Chatbots | VidyaVaani |
|:---|:---:|:---:|
| Language Support | English only ❌ | 55 Languages ✅ |
| Language Selection | Manual dropdown ❌ | Fully Automatic ✅ |
| AI Model | Hardcoded rules ❌ | LLaMA 3.3 70B ✅ |
| Response Speed | 3-5 seconds ❌ | Under 1 second ✅ |
| Context Memory | None ❌ | Last 5 exchanges ✅ |
| Education Focus | Generic ❌ | Domain Specific ✅ |
| Live Deployment | Local only ❌ | Render.com ✅ |

---

## 🌍 Supported Indian Languages

<div align="center">

| Language | Code | Script |
|:---:|:---:|:---:|
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

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:---:|:---:|
| Backend | Python 3.11 + Flask |
| AI Model | LLaMA 3.3 70B via Groq API |
| Language Detection | langdetect (Google) |
| Frontend | Jinja2 + HTML + CSS |
| Deployment | Render + Gunicorn |

</div>

---

## 📁 File Structure

```
VidyaVaani-SIH25104/
│
├── app.py                  ← Core Flask app + Groq + langdetect
├── requirements.txt        ← Python dependencies
├── .gitignore              ← Keeps .env secret
│
├── templates/
│   └── index.html          ← Chat UI
│
└── static/
    ├── style.css           ← Styling
    └── script.js           ← Enter key handler
```

---

## ⚙️ Local Setup

```bash
git clone https://github.com/Anant-083/VidyaVaani-SIH25104
cd VidyaVaani-SIH25104
pip install -r requirements.txt
echo "GROQ_API_KEY=your_key_here" > .env
python app.py
```

---

## 🚀 Render Deployment

```
Environment   → Python 3
Build Command → pip install -r requirements.txt
Start Command → gunicorn app:app
Env Variable  → GROQ_API_KEY = your_key
```

---

## 👨‍💻 Developer

<div align="center">

**Anant**
B.Tech CSE (AI & ML) | Brainware University

[
![GitHub](https://img.shields.io/badge/GitHub-Anant--083-black?style=for-the-badge&logo=github)
](https://github.com/Anant-083)

</div>

---

<div align="center">

Built with ❤️ for **Smart India Hackathon 2025**

**SIH25104 | Government of Rajasthan | Smart Education**

</div>
