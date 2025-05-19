"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Marquee from "../Marquee";
import { Badge } from "../ui/Badge";
import FormField from "../ui/FormField";
import MountAnim from "../ui/MountAnim";
import { toast } from "sonner";

const Inner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    site: "",
    company: "",
    number: "",
    plan: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Email sent successfully!');
        setFormData({
          fullName: "",
          email: "",
          site: "",
          company: "",
          number: "",
          plan: "",
          message: "",
        });
      } else {
        const errorData = await res.json();
        toast.error(`Failed to send email: ${errorData?.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An unexpected error occurred.');
    }
  };


  return (
    <div className="py-12 w-full h-full flex flex-col justify-between items-center gap-12">
      <form
        onSubmit={handleSubmit}
        className="p-con w-full flex flex-col flex-grow gap-10 sm:gap-20"
      >
        <div className="flex flex-col gap-2">
          <MountAnim>
            <Badge nodot variant="yellow">
              Drop A Line
            </Badge>
          </MountAnim>
          <MountAnim>
            <h1 className="heading2">hello@webpioneers.com</h1>
          </MountAnim>
        </div>
        <MountAnim className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-y-24 gap-x-8">
          {/* Full Name */}
          <FormField
            label={"Who's There"}
            name={"fullName"}
            placeholder={"Full name"}
            value={formData.fullName}
            onChange={handleChange}
            required
            icon="/icons/user.svg"
          />

          {/* Email */}
          <FormField
            label={"How can we connect?"}
            name={"email"}
            placeholder={"Email Address"}
            value={formData.email}
            onChange={handleChange}
            required
            icon="/icons/sms.svg"
          />

          {/* your site */}
          <FormField
            label={"Show us your site"}
            name={"site"}
            placeholder={"https://"}
            value={formData.site}
            onChange={handleChange}
            optional
            icon="/icons/global.svg"
          />

          {/* Company */}
          <FormField
            label={"Who do you represent?"}
            name={"company"}
            placeholder={"Company name"}
            value={formData.company}
            onChange={handleChange}
            required
            icon="/icons/mirror.svg"
          />

          {/* Phone */}
          <FormField
            label={"Best number to reach you"}
            name={"number"}
            placeholder={"Your phone"}
            value={formData.number}
            onChange={handleChange}
            required
            icon="/icons/call.svg"
          />

          {/* Plan (select) */}
          <FormField
            label={"What's the plan?"}
            name={"plan"}
            select
            placeholder={"Select service"}
            options={[
              { label: "UIUX Design", value: "uiux design" },
              { label: "Development", value: "development" },
              { label: "Design & Development", value: "design & development" },
              { label: "Not Sure", value: "not sure" },
            ]}
            value={formData.plan}
            onChange={handleChange}
            icon="/icons/3square.svg"
          />

          {/* Your message (textarea) */}
          <div className="sm:col-span-full">
            <FormField
              label={"What's on your mind?"}
              name={"message"}
              placeholder={"Your message"}
              textarea
              value={formData.message}
              onChange={handleChange}
              required
              icon="/icons/message-2.svg"
            />
          </div>
          <Button
            type="submit"
            btnType="light"
            className={"sm:col-span-3 w-auto border-white"}
          >
            Let's Do This
          </Button>
        </MountAnim>
      </form>

      <div className="flex-shrink-0">
        <Marquee direction={"left"} speed={0.4} dark />
      </div>
    </div>
  );
};

export default Inner;
