'use client'

import { useState } from 'react'
import { TextField, Button, Snackbar, Alert, CircularProgress } from '@mui/material'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      showSnackbar('Please enter your name', 'error')
      return false
    }
    if (!formData.email.trim()) {
      showSnackbar('Please enter your email', 'error')
      return false
    }
    if (!formData.message.trim()) {
      showSnackbar('Please enter your message', 'error')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showSnackbar('Please enter a valid email address', 'error')
      return false
    }

    return true
  }

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({
      open: true,
      message,
      severity
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      // Create FormData for Web3Forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone || 'Not provided')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', `New Contact Form Submission from ${formData.name}`)
      formDataToSend.append('from_name', formData.name)
      formDataToSend.append('from_email', formData.email)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        showSnackbar('Thank you for your message! We will get back to you within 24 hours.', 'success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        console.log('✅ Form submitted successfully')
      } else {
        showSnackbar('Failed to send message. Please try again.', 'error')
      }
    } catch (error) {
      console.error('❌ Web3Forms Error:', error)
      showSnackbar('Network error. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-display font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Send us a message
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
        
        <TextField
          fullWidth
          name="name"
          label="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#16A34A' },
              '&.Mui-focused fieldset': { borderColor: '#16A34A' },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: '#16A34A' },
          }}
        />

        <TextField
          fullWidth
          name="email"
          label="Email Address *"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#16A34A' },
              '&.Mui-focused fieldset': { borderColor: '#16A34A' },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: '#16A34A' },
          }}
        />

        <TextField
          fullWidth
          name="phone"
          label="Phone Number (Optional)"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#16A34A' },
              '&.Mui-focused fieldset': { borderColor: '#16A34A' },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: '#16A34A' },
          }}
        />

        <TextField
          fullWidth
          name="message"
          label="Message *"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#16A34A' },
              '&.Mui-focused fieldset': { borderColor: '#16A34A' },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: '#16A34A' },
          }}
        />

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            fullWidth
            sx={{
              bgcolor: '#059669',
              '&:hover': { bgcolor: '#047857' },
              py: 2,
              fontSize: '1.1rem',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(5, 150, 105, 0.1), 0 4px 6px -2px rgba(5, 150, 105, 0.05)',
              '&:hover': {
                bgcolor: '#047857',
                boxShadow: '0 20px 25px -5px rgba(5, 150, 105, 0.1), 0 10px 10px -5px rgba(5, 150, 105, 0.04)',
              },
            }}
          >
            {loading ? (
              <>
                <CircularProgress size={24} color="inherit" sx={{ mr: 2 }} />
                Sending...
              </>
            ) : (
              '⚽ Send Message'
            )}
          </Button>
        </motion.div>
        </form>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}
