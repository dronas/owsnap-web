"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      name: "Classic Booth",
      price: "$499",
      features: [
        "2 Hours Rental",
        "Standard Backdrop",
        "Basic Prop Kit",
        "Unlimited Prints",
        "Digital Gallery",
      ],
    },
    {
      name: "Deluxe Experience",
      price: "$799",
      features: [
        "4 Hours Rental",
        "Premium Backdrop Choice",
        "Deluxe Prop Kit",
        "Unlimited Prints",
        "Digital Gallery",
        "Custom Photo Template",
        "On-site Attendant",
      ],
    },
    {
      name: "Premium Package",
      price: "$1099",
      features: [
        "All Deluxe Features",
        "6 Hours Rental",
        "Green Screen Option",
        "Video Messaging",
        "Social Media Sharing Kiosk",
        "Guestbook Album",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Our Photobooth Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col justify-between bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</CardTitle>
                <CardDescription className="text-4xl font-extrabold text-purple-600 dark:text-pink-500 mb-4">{service.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Select Package</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;