# Email Setup Guide for Portfolio Contact Form

## 🎯 Quick Setup - EmailJS Integration

Your portfolio now has email functionality ready! Follow these steps to complete the setup:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with your Google account or email

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended since you use gmail)
4. Click **"Connect Account"** and authorize your Gmail (`abhijitagore2000@gmail.com`)
5. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"**
5. Copy the **Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like a long string)
3. Copy it

### Step 5: Update Your Code

Open `script.js` and replace these three values (around line 389):

```javascript
emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your Public Key from Step 4
```

And around line 412:

```javascript
const response = await emailjs.send(
    'YOUR_SERVICE_ID',    // Replace with Service ID from Step 2
    'YOUR_TEMPLATE_ID',   // Replace with Template ID from Step 3
    formData
);
```

### Example:
```javascript
emailjs.init("xYz123AbC456DeF789");  // Your actual public key

const response = await emailjs.send(
    'service_abc1234',    // Your actual service ID
    'template_xyz7890',   // Your actual template ID
    formData
);
```

---

## ✅ Testing

1. Open your portfolio in a browser
2. Scroll to the "Get In Touch" section
3. Fill out the form with test data
4. Click "send_message --now"
5. Check your email (`abhijitagore2000@gmail.com`) - you should receive the message!

---

## 📋 Current Status

✅ **Resume Download** - WORKING! (using `Abhijit-Full-Stack-Dev-Resume.pdf`)
⚠️ **Contact Form** - Needs EmailJS configuration (follow steps above)

---

## 🔧 Troubleshooting

**If emails aren't sending:**
- Make sure you replaced ALL THREE values (Public Key, Service ID, Template ID)
- Check browser console for error messages
- Verify you're connected to the internet
- Check EmailJS dashboard to see if emails are being attempted

**If you get errors:**
- Make sure the Service is connected to your Gmail
- Check that the template is published (not just saved as draft)
- Ensure your EmailJS account is verified

---

## 🎉 Benefits

- **Free tier**: 200 emails/month (perfect for a portfolio!)
- **No backend needed**: Everything runs in the browser
- **Spam protection**: Built-in
- **Reliable**: Used by millions of websites

---

## 💡 Alternative: Simple Mailto Link

If you don't want to set up EmailJS right now, you can use a simple mailto link as a temporary solution:

Replace the contact form submit handler in `script.js` with:

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;
    
    const subject = `Portfolio Contact from ${name}`;
    const body = `From: ${name} (${email})\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:abhijitagore2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
```

This will open the user's email client with pre-filled information.

---

Need help? The EmailJS setup takes only 5 minutes! 🚀
