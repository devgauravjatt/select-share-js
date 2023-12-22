### 🌐 Enhance Your Website with Social Media Share Buttons using Select Share JS 🚀 

<img src="https://i.ibb.co/rwTBQCJ/Screenshot-2023-12-22-204007.png" alt="Select Share JS Logo" style="width: 60%; height: auto;">

### 📦 Include the Select Share JS library
```html
<div twitter="true" theme="light" id="select-share-js"></div>
<script src="https://cdn.jsdelivr.net/gh/devgauravjatt/select-share-js@main/build/v-1.0/main.js"></script>
```
`🤩 Work with all frameworks like reactjs, nextjs, sveltejs, and more HTML pages.`

📌 For next js code in layout.js, ts -
```html
import Script from 'next/script'

return (
<html lang='en'>
<body suppressHydrationWarning={true} className={inter.className}>
{children}
{/*@ts-ignore */}
<div twitter='true' theme='dark' id='select-share-js'></div>
<Script src='https://cdn.jsdelivr.net/gh/devgauravjatt/select-share-js@main/build/v-1.0/main.js' />
</body>
</html>
	)

```

### 🎨 Customize and Personalize 

#### 📌 Available Customization Options:
- **Twitter:** `"true"` (Include Twitter share button)
- **LinkedIn:** `"true"` (Include LinkedIn share button)
- **Theme:** `"light"` or `"dark"` (Choose the theme for buttons)
- **ReaMore:** `"true"` (this for share text in add readmore link)
- **WhatsApp:** `"true"` (Include WhatsApp share button)

#### 💨 This time available for share
LinkedIn, Twitter, WhatsApp, Facebook, email and wait for more.

#### 🔍 Example Customization:
```html
<div twitter="true" linkedin="true" theme="dark" whatsapp="true" readmore="true" id="select-share-js"></div>
```

🚀 That's it! You're ready to share! 

🚨 **Note:** Make sure to include the 'id="select-share-js"' for proper initialization.
