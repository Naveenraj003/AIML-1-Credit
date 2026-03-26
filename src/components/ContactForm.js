"use client";

import { useMemo, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isDisabled = useMemo(
    () => Object.values(values).some((value) => !value.trim()),
    [values]
  );

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!values.message.trim() || values.message.trim().length < 15) {
      nextErrors.message = "Message must be at least 15 characters.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email.trim())) {
        nextErrors.email = "Enter a valid email address.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setValues(initialValues);
    }, 1200);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/75 p-6">
      {[
        { name: "name", label: "Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "subject", label: "Subject", type: "text" },
      ].map((field) => (
        <label key={field.name} className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-white/65">
            {field.label}
          </span>
          <input
            name={field.name}
            type={field.type}
            value={values[field.name]}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          />
          {errors[field.name] && <p className="mt-1 text-xs text-rose-300">{errors[field.name]}</p>}
        </label>
      ))}

      <label className="block">
        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-white/65">Message</span>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
        />
        {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}
      </label>

      <button
        type="submit"
        disabled={loading || isDisabled}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-3 text-sm font-black text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200">
          Message sent successfully. I will get back to you soon.
        </p>
      )}
    </form>
  );
}
