export const brandCopy = {
  metadata: {
    businessName: "Chaos to Calm Cleaning Co.",
    website: "https://www.chaostocalmcleaningco.co.uk",
    email: "roxannesmoothy@outlook.com",
    phone: "+44758120986",

    serviceAreas: [
      "Bexhill",
      "Hastings",
      "Battle",
      "St Leonards",
    ],

    hourlyRate: 20,

    openingHours: {
      monday: "08:00-19:00",
      tuesday: "08:00-19:00",
      wednesday: "08:00-19:00",
      thursday: "08:00-19:00",
      friday: "08:00-19:00",
      saturday: "08:00-19:00",
      sunday: "08:00-19:00",
    },

    socials: {
      facebook: "",
      instagram: "",
      tiktok: "",
    },
  },

  navigation: {
    home: "Home",
    services: "Services",
    about: "About",
    testimonials: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    customerPortal: "Customer Portal",
    adminPortal: "Admin",
    bookNow: "Book Now",
    getQuote: "Get a Quote",
  },

  hero: {
    badge: "Professional • Fully Insured • Trusted",

    title: "Let's bring some calm back to your home.",

    subtitle:
      "Professional home cleaning that helps you reclaim your time and enjoy a calmer home. Book your clean online in just a few minutes with clear pricing and no judgement—ever.",

    primaryCta: "Book Your Clean",

    secondaryCta: "Need Help Deciding?",
  },

  services: {
    title: "Cleaning services tailored to your home.",

    subtitle:
      "Whether you need a one-off refresh or regular support, we'll help create a home that feels calmer, cleaner, and easier to enjoy.",

    viewAll: "View All Services",
  },

  whyChooseUs: {
    title: "Why choose Chaos to Calm?",

    subtitle:
      "Cleaning is about more than spotless surfaces. It's about creating space to breathe, relax and enjoy your home again.",

    items: [
      "Friendly, trusted professionals",
      "Fully insured for peace of mind",
      "Simple online booking",
      "Reliable arrival times",
      "Flexible recurring cleans",
      "Eco-conscious products available",
    ],
  },

  questionnaire: {
    title: "Need Help Deciding?",

    subtitle:
      "Answer a few quick questions and we'll recommend the perfect clean for your home.",

    start: "Start Questionnaire",

    complete: "View My Recommendation",
  },

  booking: {
    title: "Book Your Clean",

    subtitle:
      "Choose your service, select a convenient date and time, and we'll take care of the rest.",

    continue: "Continue",

    back: "Back",

    review: "Review Booking",

    payNow: "Continue to Payment",

    uploadPhotos: "Upload Photos",

    recurring: "Repeat this booking",

    confirmationTitle: "You're one step closer to calm.",

    confirmationMessage:
      "Thank you for booking with Chaos to Calm. We've sent your confirmation email and will be in touch before your appointment.",
  },

  bookingStatus: {
    pending: "Pending",

    confirmed: "Confirmed",

    onTheWay: "On the Way",

    inProgress: "In Progress",

    completed: "Completed",

    cancelled: "Cancelled",
  },

  customerPortal: {
    title: "Customer Portal",

    subtitle:
      "Manage your bookings, payments and account details in one place.",

    upcomingBookings: "Upcoming Bookings",

    previousBookings: "Previous Bookings",

    accountSettings: "Account Settings",
  },

  admin: {
    dashboardTitle: "Admin Dashboard",

    bookings: "Bookings",

    customers: "Customers",

    calendar: "Calendar",

    staff: "Staff",

    reports: "Reports",
  },

  testimonials: {
    title: "What our customers say",

    subtitle:
      "We're proud to help busy households enjoy cleaner, calmer homes.",

    leaveReview: "Leave a Review",
  },

  contact: {
    title: "Get in Touch",

    subtitle:
      "Have a question? We'd love to hear from you and help however we can.",

    sendMessage: "Send Message",
  },

  faq: {
    title: "Frequently Asked Questions",

    subtitle:
      "Everything you need to know before booking your clean.",
  },

  reviews: {
    thankYou: "Thank you for trusting Chaos to Calm.",

    request:
      "If you enjoyed your clean, we'd be incredibly grateful if you could leave us a review.",
  },

  emails: {
    bookingConfirmedSubject:
      "Your Chaos to Calm booking is confirmed",

    reminderSubject:
      "Your clean is coming up soon",

    receiptSubject:
      "Your payment receipt",

    welcomeSubject:
      "Welcome to Chaos to Calm",
  },

  sms: {
    reminder:
      "Hi! Just a reminder that your Chaos to Calm clean is coming up soon. We look forward to seeing you.",

    thanks:
      "Thank you for choosing Chaos to Calm. We hope your home feels a little lighter today.",
  },

  emptyStates: {
    noBookings: "You don't have any bookings yet.",

    noReviews: "No reviews have been submitted yet.",

    noResults: "No results found.",
  },

  errors: {
    generic:
      "Something went wrong. Please try again or contact us if the problem continues.",

    bookingFailed:
      "We couldn't complete your booking. Please try again.",

    paymentFailed:
      "Your payment couldn't be processed. No payment has been taken.",

    network:
      "We're having trouble connecting. Please check your internet connection and try again.",
  },

  buttons: {
    save: "Save",

    cancel: "Cancel",

    close: "Close",

    continue: "Continue",

    back: "Back",

    submit: "Submit",

    edit: "Edit",

    delete: "Delete",

    confirm: "Confirm",

    signIn: "Sign In",

    signOut: "Sign Out",

    createAccount: "Create Account",
  },

  footer: {
    tagline:
      "Helping busy households create calmer, cleaner homes.",

    copyright:
      "© Chaos to Calm Cleaning Co. All rights reserved.",
  },
} as const;

export type BrandCopy = typeof brandCopy;
