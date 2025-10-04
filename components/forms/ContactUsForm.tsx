"use client";

import { useState } from "react";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

export default function ContactUsForm() {
  const [errors, setErrors] = useState({});

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!data.username) {
      setErrors({ username: "Username is required" });

      return;
    }

    const result = callServer(data);

    setErrors(result.errors);
  };

  return (
    <Form
      className="shadow-contact_us_form font-poppins flex max-w-[664px] min-w-full flex-col gap-8 rounded-[11px] px-6 py-10"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input label="Name" name="name" />

      <Input label="Email" type="email" name="email" />

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <Input label="Phone Number" name="phone" />
        <Input label="Country" name="country" />
      </div>

      <Textarea label="Type your message" name="message" />

      <Button
        type="submit"
        className="text-fluid-sm text-primary-foreground w-full rounded-[4px]"
        color="primary"
      >
        SEND
      </Button>
    </Form>
  );
}

// Fake server used in this example.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function callServer(data: any) {
  return {
    errors: {
      username: "Sorry, this username is taken.",
    },
  };
}
