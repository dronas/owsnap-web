"use client";

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { showSuccess, showError } from "@/utils/toast"; // Using the existing toast utility

const BookingPage = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const formSchema = z.object({
    name: z.string().min(2, { message: t("nameMustBeAtLeast2Chars") || "Name must be at least 2 characters." }),
    email: z.string().email({ message: t("enterValidEmail") || "Please enter a valid email address." }),
    phone: z.string().optional(),
    eventType: z.enum(["Wedding", "Birthday", "Corporate Event", "Other"], {
      required_error: t("selectEventTypeRequired") || "Please select an event type.",
    }),
    eventDate: z.date({
      required_error: t("eventDateRequired") || "An event date is required.",
    }),
    package: z.enum(["Classic Booth", "Deluxe Experience", "Premium Package"], {
      required_error: t("selectPackageRequired") || "Please select a package.",
    }),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: undefined,
      eventDate: undefined,
      package: undefined,
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Booking form submitted:", values);
    // In a real application, you would send this data to a backend API
    showSuccess(t("bookingSuccess"));
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white dark:bg-gray-900 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('bookPhotoboothTitle')}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t('bookPhotoboothSubtitle')}
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('fullName')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('yourName')} {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('yourEmail')} {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('phoneNumberOptional')}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(123) 456-7890" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('eventType')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                            <SelectValue placeholder={t('selectEventType')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                          <SelectItem value="Wedding">{t('wedding')}</SelectItem>
                          <SelectItem value="Birthday">{t('birthdayParty')}</SelectItem>
                          <SelectItem value="Corporate Event">{t('corporateEvent')}</SelectItem>
                          <SelectItem value="Other">{t('other')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t('eventDate')}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal dark:bg-gray-800 dark:text-white dark:border-gray-700",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>{t('pickADate')}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 dark:bg-gray-800 dark:border-gray-700" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('preferredPackage')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                            <SelectValue placeholder={t('selectPackageDropdown')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                          <SelectItem value="Classic Booth">{t('classicBooth')}</SelectItem>
                          <SelectItem value="Deluxe Experience">{t('deluxeExperience')}</SelectItem>
                          <SelectItem value="Premium Package">{t('premiumPackage')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('additionalDetailsOptional')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('tellUsMore')}
                          className="resize-y dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  {t('submitBookingRequest')}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingPage;