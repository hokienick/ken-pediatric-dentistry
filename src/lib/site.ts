export const site = {
  name: "Kensington Pediatric Dentistry and Orthodontics",
  shortName: "Kensington Pediatric Dentistry",
  tagline: "From first steps, till they leave the nest.",
  phoneDisplay: "(619) 282-7337",
  phoneTel: "+16192827337",
  email: "frontdesk@kpdds.com",
  address: {
    street: "4072 Adams Avenue",
    city: "San Diego",
    state: "CA",
    zip: "92116",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kensington+Pediatric+Dentistry+4072+Adams+Avenue+San+Diego+CA+92116",
  },
  // Verify with the practice before launch (sourced from their Yelp listing)
  hours: [
    { days: "Mon to Fri", time: "8:00 am to 5:00 pm" },
    { days: "Saturday", time: "8:00 am to 2:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
  facebook: "https://www.facebook.com/kpdds",
  portalUrl: "https://www.kpdds.com/portal",
  sisterLocation: {
    name: "San Diego Pediatric Dental Group",
    url: "https://www.sandiegopediatricdentalgroup.com",
  },
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "New Patients", href: "/new-patients" },
] as const;

export const cta = {
  label: "Request an Appointment",
  href: "/new-patients#request",
} as const;
