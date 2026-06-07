import emailjs from '@emailjs/browser';

export const sendContactForm = async (
  formElement: HTMLFormElement,
  templateId: string
) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey || !templateId) {
    throw new Error('EmailJS credentials are not fully configured.');
  }

  return emailjs.sendForm(serviceId, templateId, formElement, {
    publicKey: publicKey,
  });
};
