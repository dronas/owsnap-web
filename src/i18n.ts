import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Header
      owsnapevents: "Owsnap",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
      home: "Home",
      toggleMenu: "Toggle menu",

      // Hero Section
      heroTitle: "Capture Unforgettable Moments with Owsnap!",
      heroSubtitle: "The ultimate photobooth experience for weddings, parties, and corporate events.",
      getAQuote: "Get a Quote",

      // About Section
      aboutTitle: "About Owsnap Photobooths",
      aboutDescription: "Owsnap is dedicated to bringing joy and lasting memories to your special occasions. We offer state-of-the-art photobooths with a variety of fun props, backdrops, and instant prints to make your event truly unforgettable.",
      highQualityPhotosTitle: "High-Quality Photos",
      highQualityPhotosContent: "Crystal clear images with professional lighting and cameras.",
      endlessFunTitle: "Endless Fun",
      endlessFunContent: "A wide selection of props, filters, and digital sharing options.",
      customizableExperienceTitle: "Customizable Experience",
      customizableExperienceContent: "Tailor your photobooth to match your event's theme and style.",

      // Services Section
      packagesTitle: "Our Photobooth Packages",
      classicBooth: "Classic Booth",
      deluxeExperience: "Deluxe Experience",
      premiumPackage: "Premium Package",
      hoursRental: "{{count}} Hours Rental", // Using count for pluralization if needed, though here it's fixed
      standardBackdrop: "Standard Backdrop",
      basicPropKit: "Basic Prop Kit",
      unlimitedPrints: "Unlimited Prints",
      digitalGallery: "Digital Gallery",
      premiumBackdropChoice: "Premium Backdrop Choice",
      deluxePropKit: "Deluxe Prop Kit",
      customPhotoTemplate: "Custom Photo Template",
      onSiteAttendant: "On-site Attendant",
      allDeluxeFeatures: "All Deluxe Features",
      greenScreenOption: "Green Screen Option",
      videoMessaging: "Video Messaging",
      socialMediaSharingKiosk: "Social Media Sharing Kiosk",
      guestbookAlbum: "Guestbook Album",
      selectPackage: "Select Package",

      // Gallery Section
      galleryTitle: "Our Fun Gallery",
      owsapPhoto: "Owsnap Gallery {{number}}",

      // Contact Section
      contactTitle: "Get in Touch",
      contactInfo: "Contact Information",
      contactEmail: "info@owsnapevents.com",
      contactPhone: "+1 (555) 123-4567",
      contactMessage: "We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to assist.",
      sendMessage: "Send Us a Message",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      sendButton: "Send Message",
      thankYouMessage: "Thank you for your message! We'll get back to you soon.",

      // Footer
      allRightsReserved: "Owsnap Photobooths. All rights reserved.",
      designedWithFun: "Designed with fun and memories in mind.",

      // Booking Page
      bookPhotoboothTitle: "Book Your Owsnap Photobooth",
      bookPhotoboothSubtitle: "Fill out the form below to get a quote and reserve your date!",
      fullName: "Full Name",
      email: "Email",
      phoneNumberOptional: "Phone Number (Optional)",
      eventType: "Type of Event",
      selectEventType: "Select an event type",
      wedding: "Wedding",
      birthdayParty: "Birthday Party",
      corporateEvent: "Corporate Event",
      other: "Other",
      eventDate: "Event Date",
      pickADate: "Pick a date",
      preferredPackage: "Preferred Package",
      selectPackageDropdown: "Select a package",
      additionalDetailsOptional: "Additional Details (Optional)",
      tellUsMore: "Tell us more about your event...",
      submitBookingRequest: "Submit Booking Request",
      bookingSuccess: "Your booking request has been sent! We'll be in touch soon.",

      // Not Found Page
      notFoundTitle: "404",
      notFoundMessage: "Oops! Page not found",
      returnToHome: "Return to Home",

      // Made with Dyad
      madeWithDyad: "Made with Dyad",
    },
  },
  nl: {
    translation: {
      // Header
      owsnapevents: "Owsnap",
      about: "Over ons",
      services: "Diensten",
      gallery: "Galerij",
      contact: "Contact",
      bookNow: "Boek nu",
      home: "Home",
      toggleMenu: "Menu wisselen",

      // Hero Section
      heroTitle: "Leg Onvergetelijke Momenten Vast met Owsnap!",
      heroSubtitle: "De ultieme fotobooth-ervaring voor bruiloften, feesten en bedrijfsevenementen.",
      getAQuote: "Vraag een offerte aan",

      // About Section
      aboutTitle: "Over Owsnap Fotohokjes",
      aboutDescription: "Owsnap is toegewijd aan het brengen van vreugde en blijvende herinneringen aan uw speciale gelegenheden. Wij bieden state-of-the-art fotohokjes met een verscheidenheid aan leuke rekwisieten, achtergronden en directe afdrukken om uw evenement echt onvergetelijk te maken.",
      highQualityPhotosTitle: "Foto's van Hoge Kwaliteit",
      highQualityPhotosContent: "Kristalheldere beelden met professionele belichting en camera's.",
      endlessFunTitle: "Eindeloos Plezier",
      endlessFunContent: "Een ruime keuze aan rekwisieten, filters en digitale deelopties.",
      customizableExperienceTitle: "Aanpasbare Ervaring",
      customizableExperienceContent: "Pas uw fotohokje aan de thema en stijl van uw evenement aan.",

      // Services Section
      packagesTitle: "Onze Fotohokjes Pakketten",
      classicBooth: "Klassieke Booth",
      deluxeExperience: "Deluxe Ervaring",
      premiumPackage: "Premium Pakket",
      hoursRental: "{{count}} Uur Huur",
      standardBackdrop: "Standaard Achtergrond",
      basicPropKit: "Basis Rekwisieten Kit",
      unlimitedPrints: "Onbeperkt Aantal Afdrukken",
      digitalGallery: "Digitale Galerij",
      premiumBackdropChoice: "Keuze uit Premium Achtergrond",
      deluxePropKit: "Deluxe Rekwisieten Kit",
      customPhotoTemplate: "Aangepaste Fotosjabloon",
      onSiteAttendant: "Medewerker op Locatie",
      allDeluxeFeatures: "Alle Deluxe Functies",
      greenScreenOption: "Green Screen Optie",
      videoMessaging: "Video Berichten",
      socialMediaSharingKiosk: "Sociale Media Deelkiosk",
      guestbookAlbum: "Gastenboek Album",
      selectPackage: "Kies Pakket",

      // Gallery Section
      galleryTitle: "Onze Leuke Galerij",
      owsapPhoto: "Owsnap Galerij {{number}}",

      // Contact Section
      contactTitle: "Neem Contact Op",
      contactInfo: "Contactgegevens",
      contactEmail: "info@owsnapevents.com",
      contactPhone: "+1 (555) 123-4567",
      contactMessage: "We horen graag van u! Of u nu een vraag heeft over onze diensten, prijzen of iets anders, ons team staat klaar om u te helpen.",
      sendMessage: "Stuur ons een bericht",
      yourName: "Uw Naam",
      yourEmail: "Uw E-mail",
      yourMessage: "Uw Bericht",
      sendButton: "Verstuur Bericht",
      thankYouMessage: "Bedankt voor uw bericht! We nemen spoedig contact met u op.",

      // Footer
      allRightsReserved: "Owsnap Fotohokjes. Alle rechten voorbehouden.",
      designedWithFun: "Ontworpen met plezier en herinneringen in gedachten.",

      // Booking Page
      bookPhotoboothTitle: "Boek Uw Owsnap Fotohokje",
      bookPhotoboothSubtitle: "Vul het onderstaande formulier in om een offerte aan te vragen en uw datum te reserveren!",
      fullName: "Volledige Naam",
      email: "E-mail",
      phoneNumberOptional: "Telefoonnummer (Optioneel)",
      eventType: "Type Evenement",
      selectEventType: "Selecteer een evenementstype",
      wedding: "Bruiloft",
      birthdayParty: "Verjaardagsfeest",
      corporateEvent: "Bedrijfsevenement",
      other: "Anders",
      eventDate: "Datum Evenement",
      pickADate: "Kies een datum",
      preferredPackage: "Voorkeurspakket",
      selectPackageDropdown: "Selecteer een pakket",
      additionalDetailsOptional: "Aanvullende Details (Optioneel)",
      tellUsMore: "Vertel ons meer over uw evenement...",
      submitBookingRequest: "Verstuur Boekingsaanvraag",
      bookingSuccess: "Uw boekingsaanvraag is verzonden! We nemen spoedig contact met u op.",

      // Not Found Page
      notFoundTitle: "404",
      notFoundMessage: "Oeps! Pagina niet gevonden",
      returnToHome: "Terug naar Home",

      // Made with Dyad
      madeWithDyad: "Gemaakt met Dyad",
    },
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Fallback language if detection fails
    debug: false, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;