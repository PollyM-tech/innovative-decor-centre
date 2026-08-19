import { SITE_CONFIG } from "@/constants/site";

export function createWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodedMessage}`;
}

export function createFlowerInquiryMessage() {
  const message = `
Hello Innovative Decor Centre 👋

I would like to make a flower enquiry.

My preferences:

Occasion:
Preferred flower type(s):
Preferred colors:
Fresh or artificial flowers:
Arrangement type:
Quantity:
Budget:
Delivery / Pickup:
Preferred date:

Please let me know what is currently available and the estimated prices.
  `.trim();

  return createWhatsAppLink(message);
}

export function createEventInquiryMessage(eventType?: string) {
  const message = `
Hello Innovative Decor Centre 👋

I would like to enquire about ${
    eventType ? `your ${eventType} services` : "your event planning services"
  }.

Event type:
Event date:
Location:
Number of guests:
Preferred theme/colors:
Budget:
Additional details:

Please let me know your availability and provide a quotation.
  `.trim();

  return createWhatsAppLink(message);
}
