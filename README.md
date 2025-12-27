# JSON2Form

**JSON2Form** is a lightweight web application that converts JSON into an editable, dynamic form and allows users to seamlessly modify the data and save it back to valid JSON.

It supports complex, nested JSON structures including objects, arrays, primitive values, and even root-level arrays — all while preserving key order and providing an intuitive, form-based editing experience.

---

## ✨ Key Features

- Convert JSON into an editable form UI
- Full round-trip editing: **JSON → Form → JSON**
- Supports deeply nested objects and arrays
- Handles primitive values (string, number, boolean, null)
- Root-level JSON array support
- Copy, duplicate, add, and remove operations
- Key renaming with **original order preserved**
- Collapsible sections for better readability
- Bootstrap-styled UI (no custom CSS required)
- No third-party JSON editor libraries used

---

## 📸 Screenshots

### 1️⃣ JSON Editor View
_Textarea-based editor with Preview and Format actions_

```
/screenshots/editor.png
```

### 2️⃣ Rendered Form View
_JSON rendered as an editable, structured form_

```
/screenshots/form.png
```

---

## 🌐 Live Demo (GitHub Pages)

JSON2Form is hosted using **GitHub Pages** and can be used directly without any local setup.

👉 **Live Demo:**  
`https://<your-github-username>.github.io/JSON2Form/`

---

## ✅ Supported JSON Capabilities

JSON2Form supports:

- JSON Objects
- JSON Arrays (including **root-level arrays**)
- Primitive values:
  - string
  - number
  - boolean
  - null
- Mixed-type arrays
- Deeply nested structures
- Key renaming without losing order

---

## 🧠 How It Works (High-Level)

- The UI is rendered **recursively**, allowing unlimited nesting.
- Each object internally maintains a non-enumerable `__keyOrder` array to preserve key order.
- All edits mutate the same in-memory JSON structure to ensure consistency.
- Bootstrap’s native collapse functionality is used for section toggling.
- No schema or metadata is injected into the final saved JSON.

---

## 🛠 Tech Stack

- **Angular 8**
- **TypeScript 3.5**
- **Bootstrap 3** (via CDN)
- **RxJS 6**
- No external JSON editor or form libraries

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js **10.x or 12.x**
- Angular CLI **8.x**

### Steps

```bash
npm install
ng serve
```

Open your browser at:
```
http://localhost:4200
```

---

## 🧪 Usage Guide

1. Paste or type JSON into the editor
2. Click **Format** to beautify the JSON (4-space indentation)
3. Click **Preview** to open the form editor
4. Edit values directly in the form
5. Use:
   - ➕ to add fields or array items
   - 📄 to duplicate objects or items
   - 🗑️ to remove elements
6. Click **Save** to convert the form back into JSON

---

## ⚙️ Design Decisions & Limitations

- **Key order preservation** is handled manually using a non-enumerable property.
- Root-level copy/remove actions are intentionally limited for safety.
- Bootstrap 3 is used for stability and simplicity.
- Designed specifically for Angular 8 compatibility.

---

## ⚡ Performance Considerations

- Recursive rendering may impact performance for very large JSON payloads.
- Recommended for moderate-sized JSON documents.
- Future optimizations are planned to improve scalability.

---

## 🗺 Roadmap / Future Enhancements

- Drag-and-drop reordering of fields and array items
- Performance optimizations for large JSON
- Separate maintained version for **Angular 15+**
- Improved UX for large nested structures

---

## 🌍 Compatibility

- Angular 8.x
- Modern evergreen browsers (Chrome, Edge, Firefox)
- Hosted via GitHub Pages for easy access

---

## 📄 License

This project is licensed under the **MIT License**.
