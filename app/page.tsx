"use client";

import { useState } from 'react';
import { DomainCard } from '@/components/domain-card';
import { ContactSection } from '@/components/contact-section';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  // Your actual domains - removed viewer.us.kg and xiangjianfeng.com
  const domains = [
    {
      name: "995993.xyz",
      meaning: language === 'en' 
        ? "A unique numeric domain with versatile applications" 
        : "独特的数字域名，应用广泛",
      price: "$1,200",
      featured: false
    },
    {
      name: "askcopilot.app",
      meaning: language === 'en' 
        ? "Perfect for AI assistant or coding helper applications" 
        : "适合AI助手或编程辅助应用",
      price: "$2,500",
      featured: false
    },
    {
      name: "bimgo.net",
      meaning: language === 'en' 
        ? "Ideal for BIM (Building Information Modeling) or gaming platforms" 
        : "适合BIM（建筑信息模型）或游戏平台",
      price: "$1,800",
      featured: false
    },
    {
      name: "cppilot.com",
      meaning: language === 'en' 
        ? "Great for C++ programming resources or educational platforms" 
        : "适合C++编程资源或教育平台",
      price: "$3,200",
      featured: false
    },
    {
      name: "ilingzui.com",
      meaning: language === 'en' 
        ? "A catchy domain with international appeal" 
        : "朗朗上口的域名，具有国际吸引力",
      price: "$2,000",
      featured: false
    },
    {
      name: "jue.sh",
      meaning: language === 'en' 
        ? "Short, memorable domain perfect for tech startups" 
        : "简短、易记的域名，适合科技创业公司",
      price: "$4,500",
      featured: true
    },
    {
      name: "juyir.com",
      meaning: language === 'en' 
        ? "Versatile domain suitable for various industries" 
        : "多用途域名，适合各种行业",
      price: "$2,200",
      featured: false
    },
    {
      name: "nextgpt.net",
      meaning: language === 'en' 
        ? "Excellent for AI and GPT-related projects or services" 
        : "适合AI和GPT相关项目或服务",
      price: "$5,000",
      featured: false
    },
    {
      name: "nezhr.com",
      meaning: language === 'en' 
        ? "Unique domain with global potential" 
        : "独特域名，具有全球潜力",
      price: "$2,300",
      featured: false
    },
    {
      name: "nipao.com",
      meaning: language === 'en' 
        ? "Short, catchy domain with international appeal" 
        : "简短、朗朗上口的域名，具有国际吸引力",
      price: "$4,800",
      featured: true
    },
    {
      name: "ufollow.cn",
      meaning: language === 'en' 
        ? "Perfect for social media or follower-based platforms in China" 
        : "适合中国社交媒体或粉丝平台",
      price: "$3,500",
      featured: true
    },
    {
      name: "utools.work",
      meaning: language === 'en' 
        ? "Ideal for productivity tools or utility applications" 
        : "适合生产力工具或实用程序应用",
      price: "$2,100",
      featured: false
    },
    {
      name: "viewer.cc",
      meaning: language === 'en' 
        ? "Great for media viewing platforms or content services" 
        : "适合媒体查看平台或内容服务",
      price: "$3,800",
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
    <main className="min-h-screen bg-background">
      <div className="absolute top-4 right-4 flex space-x-2">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <ThemeToggle />
      </div>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {text.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {featuredDomains.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">{text.featuredDomains}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredDomains.map((domain) => (
                <DomainCard 
                  key={domain.name}
                  domain={domain.name}
                  meaning={domain.meaning}
                  price={domain.price}
                  featured={domain.featured}
                  language={language}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-2xl font-bold mb-6">{text.allDomains}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {domains.map((domain) => (
            <DomainCard 
              key={domain.name}
              domain={domain.name}
              meaning={domain.meaning}
              price={domain.price}
              featured={domain.featured}
              language={language}
            />
          ))}
        </div>

        <ContactSection language={language} contactText={text} />
      </section>
    </main>
  );
}