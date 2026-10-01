"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send enquiry.");
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input
            name="name"
            required
            placeholder="Your name"
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            required
            placeholder="Your phone number"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
          Service required
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Emergency plumbing</option>
            <option>Boiler & heating</option>
            <option>Leaking pipes & taps</option>
            <option>Blocked drains</option>
            <option>Bathroom plumbing</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label>
        Tell us about the problem
        <textarea
          name="message"
          rows={5}
          required
          placeholder="A few details will help us understand how we can help..."
        />
      </label>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      {success && (
        <p className="form-success" role="status">
          Thanks! Your enquiry has been sent successfully.
        </p>
      )}

      <button
        className="button button-primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send enquiry"}

        {!loading && (
          <span aria-hidden="true"> →</span>
        )}
      </button>

      <p className="form-note">
        Your enquiry is sent securely to the business.
      </p>
    </form>
  );
}