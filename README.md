
# 🧑‍⚖️ Legal Chat Assistant

A smart legal chatbot built with **React** and **Tailwind CSS** that answers legal questions, shows relevant citations, and allows viewing the exact cited text in a PDF modal viewer.

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Lexisg-frontend-intern-test.git
cd Lexisg-frontend-intern-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 📸 Screenshots


![Chat UI Screenshot 1](./Screenshot%20From%202025-07-09%2020-10-44.png)  
![Chat UI Screenshot 2](./Screenshot%20From%202025-07-09%2020-11-01.png)

---

## 🔗 How Citation Linking Works

Each bot response may include citations to legal PDF documents. Here's how the system handles them:

- The bot message includes a `citations` array with:
  - `text`: the quoted reference
  - `source`: the document name
  - `link`: the local/public PDF file path (e.g. `sample.pdf`)

```json
{
  "text": "10% of annual income should have been awarded on account of future prospects.",
  "source": "Dani_Devi_v_Pritam_Singh.pdf",
  "link": "sample.pdf"
}
```

### UI Flow:
1. Citations appear below the bot’s message with a **"View in PDF"** button.
2. When clicked, a popup opens and displays the corresponding PDF.
3. The quoted text is passed to the popup as `highlightText` for potential future enhancement (e.g. automatic highlighting inside the document).

---

## 📁 Project Structure

```
src/
├── App.js                 # Main chat component
├── components/
│   └── HighlightPopup.jsx # PDF modal viewer
public/
└── sample.pdf             # Legal PDF file for citation demo
```

---

## 🛠️ Built With

- [React 19](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React PDF](https://github.com/wojtekmaj/react-pdf)
- HTML `<iframe>` (fallback for simpler PDF embedding)

---

## 📄 License

MIT License

---

## 🙌 Contributing

Feel free to fork the repo and submit pull requests for enhancements or bug fixes!