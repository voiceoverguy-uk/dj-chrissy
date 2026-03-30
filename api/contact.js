import { Resend } from 'resend'

const packageLabels = {
  'dj-only': 'DJ Only (no equipment — bring your own PA)',
  'dj-decks': 'DJ + Decks & Speakers (Pioneer decks including speakers)',
  'full-package': 'Full Package (DJ, Decks, Speakers, Lights, Smoke machine, Lasers, Insta360)',
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, venue, eventDate, eventType, message, djPackage } = req.body || {}

  if (!name || !email || !eventType || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const text = `
New booking enquiry from the DJ Chrissy C website.

━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:        ${name}
Email:       ${email}
Reply to:    ${email}

━━━━━━━━━━━━━━━━━━━━━━━━━━
EVENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━
Event Date:  ${eventDate || 'Not specified'}
Event Type:  ${eventType}
Venue:       ${venue || 'Not specified'}
Package:     ${packageLabels[djPackage] || djPackage}

━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}
  `.trim()

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Booking Enquiry — ${name} (${eventType}${eventDate ? `, ${eventDate}` : ''})`,
      text,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error))
      return res.status(500).json({ error: error.message || 'Failed to send message.' })
    }

    console.log('Email sent, Resend id:', data?.id)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend exception:', err)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}
