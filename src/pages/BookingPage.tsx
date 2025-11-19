"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { showSuccess, showError } from '@/utils/toast';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState<Date | undefined>(undefined);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !eventType || !eventDate) {
      showError("Please fill in all required fields.");
      return;
    }
    // In a real application, you would send this data to a backend.
    console.log({ name, email, phone, eventType, eventDate, message });
    showSuccess("Your booking request has been sent! We'll be in touch soon.");
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setEventType('');
    setEventDate(undefined);
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-50 mb-8">
            Book Your Owsnap Photobooth
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-lg">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="eventType" className="text-lg">Type of Event</Label>
              <Input
                id="eventType"
                type="text"
                placeholder="Wedding, Birthday, Corporate Event, etc."
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                required
                className="mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="eventDate" className="text-lg block mb-1">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal p-3",
                      !eventDate && "text-muted-foreground",
                      "dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {eventDate ? format(eventDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white dark:bg-gray-800 border dark:border-gray-700">
                  <Calendar
                    mode="single"
                    selected={eventDate}
                    onSelect={setEventDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your event..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 p-3 border rounded-md w-full focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl py-3 rounded-md shadow-lg transform transition-transform hover:scale-105">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground p-4 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Owsnap Photobooth Rental. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookingPage;