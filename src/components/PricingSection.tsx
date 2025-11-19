"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingOptions = [
  {
    title: "Basic Fun",
    price: "$399",
    features: [
      "2 Hours of Photobooth Time",
      "Standard Backdrop",
      "Basic Prop Kit",
      "Unlimited Digital Photos",
      "Online Gallery"
    ],
    buttonText: "Choose Basic"
  },
  {
    title: "Standard Party",
    price: "$599",
    features: [
      "3 Hours of Photobooth Time",
      "Premium Backdrop Options",
      "Deluxe Prop Kit",
      "Unlimited Digital Photos",
      "Online Gallery",
      "Instant On-Site Prints (2x6 strips)"
    ],
    buttonText: "Choose Standard"
  },
  {
    title: "Premium Event",
    price: "$899",
    features: [
      "4 Hours of Photobooth Time",
      "Custom Backdrop Design",
      "Luxury Prop Collection",
      "Unlimited Digital Photos",
      "Online Gallery",
      "Instant On-Site Prints (4x6 or 2x6)",
      "Guestbook Service",
      "Dedicated Attendant"
    ],
    buttonText: "Choose Premium"
  }
];

const PricingSection = () => {
  return (
    <section className="my-16 w-full max-w-6xl px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-gray-50 mb-12">
        Our Photobooth Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingOptions.map((option, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                {option.title}
              </CardTitle>
              <p className="text-5xl font-extrabold text-gray-900 dark:text-gray-50">
                {option.price}
                <span className="text-lg font-normal text-gray-600 dark:text-gray-400">/event</span>
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Link to="/book" className="w-full">
                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3 rounded-md shadow-lg transform transition-transform hover:scale-105">
                  {option.buttonText}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;