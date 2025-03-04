"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";
import emailjs from 'emailjs-com';

interface ContactSectionProps {
  language: 'en' | 'zh';
  contactText: {
    contactTitle: string;
    contactDescription: string;
  };
}

export function ContactSection({ language, contactText }: ContactSectionProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Using EmailJS to send the form without a backend
      // You'll need to set up a free EmailJS account and create a template
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_email: email,
          message: message,
          to_email: "onsell@xiangjianfeng.com"
        }
      );
      
      setSubmitted(true);
      setEmail("");
      setMessage("");
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(language === 'en' 
        ? "Failed to send your message. Please try again or contact us directly." 
        : "发送消息失败。请重试或直接联系我们。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    en: {
      email: "Email",
      wechat: "WeChat",
      telegram: "Telegram",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "I'm interested in purchasing...",
      messageLabel: "Message",
      sendButton: "Send Inquiry",
      messageSent: "Message Sent!",
      thankYou: "Thank you for your inquiry. We'll get back to you as soon as possible.",
      scanQRCode: "Scan QR Code",
      closeButton: "Close"
    },
    zh: {
      email: "电子邮件",
      wechat: "微信",
      telegram: "电报",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "我对购买...感兴趣",
      messageLabel: "留言",
      sendButton: "发送询问",
      messageSent: "消息已发送！",
      thankYou: "感谢您的询问。我们将尽快回复您。",
      scanQRCode: "扫描二维码",
      closeButton: "关闭"
    }
  };

  const text = translations[language];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-bold mb-6">{contactText.contactTitle}</h2>
        <p className="text-lg text-muted-foreground mb-8">
          {contactText.contactDescription}
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">{text.email}</h3>
              <p className="text-muted-foreground">onsell@xiangjianfeng.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <MessageSquare className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">{text.wechat}</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    YourDomainSales
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogTitle className="text-lg font-medium mb-4">{text.scanQRCode}</DialogTitle>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {/* Replace with your actual WeChat QR code */}
                      <img 
                        src="/wechat-qr.svg" 
                        alt="WeChat QR Code" 
                        className="w-64 h-64 border border-gray-200 rounded-md"
                      />
                    </div>
                    <Button variant="outline" onClick={() => document.querySelector<HTMLButtonElement>('[data-state="open"] button[aria-label="Close"]')?.click()}>
                      {text.closeButton}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Send className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">{text.telegram}</h3>
              <p className="text-muted-foreground">@xiangjianfeng</p>
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-medium mb-2">{text.messageSent}</h3>
              <p className="text-muted-foreground">
                {text.thankYou}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {text.email}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md bg-background"
                  placeholder={text.emailPlaceholder}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {text.messageLabel}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full p-3 border rounded-md bg-background"
                  placeholder={text.messagePlaceholder}
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'en' ? 'Sending...' : '发送中...'}
                  </span>
                ) : text.sendButton}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}