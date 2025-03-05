"use client";

import { useState, useRef } from 'react';
import { DomainCard } from '@/components/domain-card';
import { ContactSection } from '@/components/contact-section';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { Footer } from '@/components/footer';
import { generateDomainStructuredData, generateWebsiteStructuredData, generateOrganizationStructuredData } from './structured-data';
import Script from 'next/script';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const contactRef = useRef<HTMLDivElement>(null);
  const [inquiryDomain, setInquiryDomain] = useState('');
  
  const handleDomainInquiry = (domain: string, price: string) => {
    setInquiryDomain(domain);
    // 滚动到联系表单
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Your actual domains - removed viewer.us.kg and xiangjianfeng.com
  const domains = [
    {
      name: "995993.xyz",
      meaning: language === 'en' 
        ? "A unique numeric domain with versatile applications" 
        : "独特的数字域名，应用广泛",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "askcopilot.app",
      meaning: language === 'en' 
        ? "Perfect for AI assistant or coding helper applications" 
        : "适合AI助手或编程辅助应用",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "bimgo.net",
      meaning: language === 'en' 
        ? "Ideal for BIM (Building Information Modeling) or gaming platforms" 
        : "适合BIM（建筑信息模型）或游戏平台",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "cppilot.com",
      meaning: language === 'en' 
        ? "Great for C++ programming resources or educational platforms" 
        : "适合C++编程资源或教育平台",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "ilingzui.com",
      meaning: language === 'en' 
        ? "A catchy domain with international appeal" 
        : "朗朗上口的域名，具有国际吸引力",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "jue.sh",
      meaning: language === 'en' 
        ? "Short, memorable domain perfect for tech startups" 
        : "简短、易记的域名，适合科技创业公司",
      price: language === 'en' ? "Inquire" : "议价",
      featured: true
    },
    {
      name: "juyir.com",
      meaning: language === 'en' 
        ? "Versatile domain suitable for various industries" 
        : "多用途域名，适合各种行业",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "nextgpt.net",
      meaning: language === 'en' 
        ? "Excellent for AI and GPT-related projects or services" 
        : "适合AI和GPT相关项目或服务",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "nezhr.com",
      meaning: language === 'en' 
        ? "Unique domain with global potential" 
        : "独特域名，具有全球潜力",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "nipao.com",
      meaning: language === 'en' 
        ? "Short, catchy domain with international appeal" 
        : "简短、朗朗上口的域名，具有国际吸引力",
      price: language === 'en' ? "Inquire" : "议价",
      featured: true
    },
    {
      name: "ufollow.cn",
      meaning: language === 'en' 
        ? "Perfect for social media or follower-based platforms in China" 
        : "适合中国社交媒体或粉丝平台",
      price: language === 'en' ? "Inquire" : "议价",
      featured: true
    },
    {
      name: "utools.work",
      meaning: language === 'en' 
        ? "Ideal for productivity tools or utility applications" 
        : "适合生产力工具或实用程序应用",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    },
    {
      name: "viewer.cc",
      meaning: language === 'en' 
        ? "Great for media viewing platforms or content services" 
        : "适合媒体查看平台或内容服务",
      price: language === 'en' ? "Inquire" : "议价",
      featured: false
    }
  ];

  const translations = {
    en: {
      title: "Premium Domains For Sale",
      subtitle: "Secure a memorable, meaningful domain name for your business or project. Each domain has been carefully selected for its marketability and potential.",
      featuredDomains: "Featured Domains",
      allDomains: "All Domains",
      contactTitle: "Get In Touch",
      contactDescription: "Interested in purchasing one of our premium domains? Have questions about pricing or availability? Reach out to us using any of the contact methods below or fill out the form."
    },
    zh: {
      title: "优质域名出售",
      subtitle: "为您的业务或项目获取一个令人难忘、有意义的域名。每个域名都经过精心挑选，具有很高的市场价值和潜力。",
      featuredDomains: "精选域名",
      allDomains: "所有域名",
      contactTitle: "联系我们",
      contactDescription: "有兴趣购买我们的优质域名？对价格或可用性有疑问？请通过以下任何联系方式与我们联系，或填写表格。"
    }
  };

  const featuredDomains = domains.filter(domain => domain.featured);
  const text = translations[language];

  return (
    <main className="container mx-auto px-4 py-8">
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            generateWebsiteStructuredData(language),
            generateOrganizationStructuredData(),
            ...domains.map(domain => generateDomainStructuredData(domain, language))
          ]
        })}
      </Script>

      <div className="flex justify-end space-x-4 mb-8">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <ThemeToggle />
      </div>

      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {text.subtitle}
        </p>
      </section>

      {featuredDomains.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{text.featuredDomains}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDomains.map(domain => (
              <DomainCard
                key={domain.name}
                domain={domain.name}
                meaning={domain.meaning}
                price={domain.price}
                featured={true}
                language={language}
                onInquire={handleDomainInquiry}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{text.allDomains}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.filter(domain => !domain.featured).map(domain => (
            <DomainCard
              key={domain.name}
              domain={domain.name}
              meaning={domain.meaning}
              price={domain.price}
              language={language}
              onInquire={handleDomainInquiry}
            />
          ))}
        </div>
      </section>

      <section ref={contactRef}>
        <ContactSection 
          language={language} 
          contactText={text} 
          initialMessage={inquiryDomain ? 
            language === 'en' ? 
              `I'm interested in purchasing the domain ${inquiryDomain}. Please provide more information.` :
              `我对购买域名 ${inquiryDomain} 感兴趣，请提供更多信息。` 
            : ''
          }
        />
      </section>

      <Footer language={language} />
    </main>
  );
}