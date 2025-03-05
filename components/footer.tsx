interface FooterProps {
  language: 'en' | 'zh';
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const text = {
    en: {
      copyright: "All rights reserved.",
      disclaimer: "All trademarks and domain names mentioned are the property of their respective owners."
    },
    zh: {
      copyright: "版权所有",
      disclaimer: "所有提及的商标和域名均为其各自所有者的财产"
    }
  };

  return (
    <footer className="mt-20 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {currentYear} Nipao.com {text[language].copyright}
          </p>
          <p>
            {text[language].disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
} 