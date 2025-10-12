import * as brevo from '@getbrevo/brevo'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if API key exists
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY not found in environment variables')
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Initialize Brevo API
    let apiInstance = new brevo.TransactionalEmailsApi()
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

    // Create email object
    let sendSmtpEmail = new brevo.SendSmtpEmail()
    
    // 🔥 SOLUTION: Use Brevo's verified sender BUT set reply-to as user's email
    sendSmtpEmail.subject = `New Contact Form Submission from ${name}`
    sendSmtpEmail.to = [{"email": "yashgurav002@gmail.com", "name": "Yash Gurav"}]
    sendSmtpEmail.sender = {"name": "Pioneer Sports Consultancy", "email": "noreply@mail.brevo.com"}
    
    // 🎯 KEY: Set reply-to as user's email so you can reply directly
    sendSmtpEmail.replyTo = {"name": name, "email": email}
    
    // HTML email content - Show it's FROM the user prominently
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #16A34A; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">⚽ Pioneer Sports Consultancy</h1>
          <p style="margin: 5px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
        </div>
        
        <div style="background-color: #e8f5e8; padding: 20px; border-left: 4px solid #16A34A; margin: 0;">
          <h2 style="color: #16A34A; margin: 0; font-size: 20px;">📧 MESSAGE FROM: ${name}</h2>
          <p style="margin: 10px 0 0 0; color: #666; font-size: 16px;">
            <strong>📩 Reply to this email to respond directly to ${name}</strong><br>
            Their email: <a href="mailto:${email}" style="color: #16A34A;">${email}</a>
          </p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0;">
          <h3 style="color: #16A34A; margin-top: 0;">📋 Contact Details</h3>
          
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 8px 0;"><strong style="color: #333;">👤 Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #333;">📧 Email:</strong> <a href="mailto:${email}" style="color: #16A34A; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #333;">📱 Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          <h3 style="color: #16A34A; margin-top: 20px;">💬 Message</h3>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #16A34A; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="line-height: 1.6; color: #555; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="background-color: #16A34A; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">🌐 Sent from Pioneer Sports Consultancy contact form</p>
          <p style="margin: 5px 0 0 0;">⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          <p style="margin: 5px 0 0 0;"><strong>💬 Just hit "Reply" to respond to ${name} directly!</strong></p>
        </div>
      </div>
    `
    
    // Plain text version
    sendSmtpEmail.textContent = `
PIONEER SPORTS CONSULTANCY - New Contact Form

*** MESSAGE FROM: ${name} ***
*** REPLY TO THIS EMAIL TO RESPOND DIRECTLY ***

Contact Details:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Just hit "Reply" to respond to ${name} directly!
    `

    // Send the email
    console.log('🚀 Sending email via Brevo with verified sender...')
    console.log('📤 From: Pioneer Sports (noreply@mail.brevo.com)')
    console.log('🔄 Reply-to:', email, `(${name})`)
    
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail)
    
    console.log('✅ Email sent successfully:', {
      messageId: result.messageId,
      userDetails: { name, email },
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        success: true,
        messageId: result.messageId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Brevo API Error:', error)
    
    // Handle specific Brevo errors
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Email service authentication failed.' },
        { status: 500 }
      )
    }
    
    if (error.status === 403) {
      return NextResponse.json(
        { error: 'Email service not activated. Please contact support.' },
        { status: 500 }
      )
    }

    if (error.status === 400) {
      return NextResponse.json(
        { error: 'Invalid email data. Please check your input.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API endpoint is working',
      hasApiKey: !!process.env.BREVO_API_KEY,
      timestamp: new Date().toISOString(),
      status: 'ready'
    },
    { status: 200 }
  )
}
