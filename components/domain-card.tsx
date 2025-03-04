"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Star } from "lucide-react";
import { useState } from "react";

interface DomainCardProps {
  domain: string;
  meaning: string;
  price: string;
  featured?: boolean;
  language: 'en' | 'zh';
}

export function DomainCard({ domain, meaning, price, featured = false, language }: DomainCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonText = language === 'en' ? 'Inquire About This Domain' : '咨询此域名';
  
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow"
      } ${featured ? "border-2 border-yellow-400 dark:border-yellow-600" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-primary" />
            {featured && <Star className="h-5 w-5 text-yellow-500 ml-2" fill="currentColor" />}
          </div>
          <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {price}
          </div>
        </div>
        <CardTitle className="text-2xl mt-3 font-bold">{domain}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{meaning}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}