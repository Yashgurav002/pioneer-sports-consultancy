// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  // Accepts various phone number formats
  const phoneRegex = /^[\d\s\+\-\(\)]+$/
  return phoneRegex.test(phone)
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateName = (name) => {
  return name && name.trim().length >= 2
}

export const validateMessage = (message) => {
  return message && message.trim().length >= 10
}

export const validateContactForm = (formData) => {
  const errors = {}

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required'
  } else if (!validateName(formData.name)) {
    errors.name = 'Name must be at least 2 characters long'
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required'
  } else if (!validateMessage(formData.message)) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
