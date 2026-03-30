"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

const investSchema = z.object({
  // Step 1
  fullName: z.string().min(2, "Full name is required"),
  age: z.coerce.number().min(18, "Age must be at least 18"),
  email: z.string().email("Valid email is required"),
  mobile: z
    .string()
    .min(10, "Valid mobile number is required")
    .max(15, "Too long"),

  // Step 2
  accountHolderName: z.string().min(2, "Account holder name is required"),
  bankName: z.string().min(2, "Bank name is required"),
  accountNumber: z.string().min(6, "Valid account number is required"),
  ifscCode: z.string().min(8, "Valid IFSC code is required"),
  branchName: z.string().min(2, "Branch name is required"),

  // Step 3
  aadhaarNumber: z.string().min(12, "Valid Aadhaar number is required"),
  panNumber: z.string().min(10, "Valid PAN number is required"),
  address: z.string().min(10, "Address is required"),
});

type InvestFormValues = z.input<typeof investSchema>;

const steps = [
  { id: 1, title: "Personal Details" },
  { id: 2, title: "Bank Details" },
  { id: 3, title: "KYC Details" },
  { id: 4, title: "Review & Submit" },
];

export function InvestForm() {
  const [step, setStep] = useState(1);
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [panFile, setPanFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<InvestFormValues>({
    resolver: zodResolver(investSchema),
    defaultValues: {
      fullName: "",
      age: 18,
      email: "",
      mobile: "",
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      branchName: "",
      aadhaarNumber: "",
      panNumber: "",
      address: "",
    },
  });

  const values = watch();

  const currentStepFields = useMemo(() => {
    if (step === 1) return ["fullName", "age", "email", "mobile"] as const;
    if (step === 2)
      return [
        "accountHolderName",
        "bankName",
        "accountNumber",
        "ifscCode",
        "branchName",
      ] as const;
    if (step === 3) return ["aadhaarNumber", "panNumber", "address"] as const;
    return [] as const;
  }, [step]);

  const nextStep = async () => {
    if (step < 4) {
      const valid = await trigger(currentStepFields);
      if (!valid) return;

      if (step === 3 && (!aadhaarFile || !panFile)) {
        alert("Please upload both Aadhaar and PAN documents.");
        return;
      }

      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: InvestFormValues) => {
    if (!aadhaarFile || !panFile) {
      alert("Please upload both Aadhaar and PAN documents.");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      formData.append("aadhaarFile", aadhaarFile);
      formData.append("panFile", panFile);

      const res = await fetch("/api/invest", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-rbi-border bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-700" />
        </div>
        <h2 className="text-2xl font-bold text-rbi-navy">
          Application Submitted
        </h2>
        <p className="mt-3 text-sm text-rbi-text-light">
          Your investment application has been submitted successfully. We will
          review your details and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-rbi-border bg-white shadow-sm"
    >
      {/* Stepper */}
      <div className="border-b border-rbi-border px-4 py-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {steps.map((item) => {
            const isActive = step === item.id;
            const isCompleted = step > item.id;

            return (
              <div key={item.id} className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                    isCompleted
                      ? "border-rbi-navy bg-rbi-navy text-white"
                      : isActive
                        ? "border-rbi-orange bg-rbi-orange text-rbi-navy"
                        : "border-rbi-border bg-rbi-cream text-rbi-text-light"
                  }`}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : item.id}
                </div>
                <div>
                  <p className="text-xs text-rbi-text-light">Step {item.id}</p>
                  <p className="text-sm font-semibold text-rbi-navy">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Body */}
      <div className="space-y-6 px-4 py-6 md:px-8 md:py-8">
        {step === 1 && (
          <section>
            <h3 className="mb-5 text-xl font-bold text-rbi-navy">
              Personal Details
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Full Name"
                error={errors.fullName?.message}
                input={
                  <input {...register("fullName")} className={inputClass} />
                }
              />
              <Field
                label="Age"
                error={errors.age?.message}
                input={
                  <input
                    type="number"
                    {...register("age")}
                    className={inputClass}
                  />
                }
              />
              <Field
                label="Email Address"
                error={errors.email?.message}
                input={
                  <input
                    type="email"
                    {...register("email")}
                    className={inputClass}
                  />
                }
              />
              <Field
                label="Mobile Number"
                error={errors.mobile?.message}
                input={<input {...register("mobile")} className={inputClass} />}
              />
            </div>
          </section>
        )}

        {step === 2 && (
          <section>
            <h3 className="mb-5 text-xl font-bold text-rbi-navy">
              Bank Details
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Account Holder Name"
                error={errors.accountHolderName?.message}
                input={
                  <input
                    {...register("accountHolderName")}
                    className={inputClass}
                  />
                }
              />
              <Field
                label="Bank Name"
                error={errors.bankName?.message}
                input={
                  <input {...register("bankName")} className={inputClass} />
                }
              />
              <Field
                label="Account Number"
                error={errors.accountNumber?.message}
                input={
                  <input
                    {...register("accountNumber")}
                    className={inputClass}
                  />
                }
              />
              <Field
                label="IFSC Code"
                error={errors.ifscCode?.message}
                input={
                  <input {...register("ifscCode")} className={inputClass} />
                }
              />
              <Field
                label="Branch Name"
                error={errors.branchName?.message}
                input={
                  <input {...register("branchName")} className={inputClass} />
                }
              />
            </div>
          </section>
        )}

        {step === 3 && (
          <section>
            <h3 className="mb-5 text-xl font-bold text-rbi-navy">
              KYC Details
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Aadhaar Number"
                error={errors.aadhaarNumber?.message}
                input={
                  <input
                    {...register("aadhaarNumber")}
                    className={inputClass}
                  />
                }
              />
              <Field
                label="PAN Number"
                error={errors.panNumber?.message}
                input={
                  <input {...register("panNumber")} className={inputClass} />
                }
              />
            </div>

            <div className="mt-5">
              <Field
                label="Residential Address"
                error={errors.address?.message}
                input={
                  <textarea
                    {...register("address")}
                    rows={4}
                    className={inputClass}
                  />
                }
              />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-rbi-navy">
                  Upload Aadhaar Document
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setAadhaarFile(e.target.files?.[0] ?? null)}
                  className={fileInputClass}
                />
                {aadhaarFile && (
                  <p className="mt-2 text-xs text-rbi-text-light">
                    Selected: {aadhaarFile.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-rbi-navy">
                  Upload PAN Document
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setPanFile(e.target.files?.[0] ?? null)}
                  className={fileInputClass}
                />
                {panFile && (
                  <p className="mt-2 text-xs text-rbi-text-light">
                    Selected: {panFile.name}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {step === 4 && (
          <section>
            <h3 className="mb-5 text-xl font-bold text-rbi-navy">
              Review & Submit
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              <ReviewCard
                title="Personal Details"
                items={[
                  ["Full Name", values.fullName],
                  ["Age", values.age as number],
                  ["Email", values.email],
                  ["Mobile", values.mobile],
                ]}
              />

              <ReviewCard
                title="Bank Details"
                items={[
                  ["Account Holder", values.accountHolderName],
                  ["Bank Name", values.bankName],
                  ["Account Number", values.accountNumber],
                  ["IFSC", values.ifscCode],
                  ["Branch", values.branchName],
                ]}
              />

              <ReviewCard
                title="KYC Details"
                items={[
                  ["Aadhaar", values.aadhaarNumber],
                  ["PAN", values.panNumber],
                  ["Address", values.address],
                  ["Aadhaar File", aadhaarFile?.name || "Not uploaded"],
                  ["PAN File", panFile?.name || "Not uploaded"],
                ]}
              />
            </div>
          </section>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col gap-3 border-t border-rbi-border px-4 py-5 md:flex-row md:items-center md:justify-between md:px-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-rbi-border px-5 py-2.5 text-sm font-medium text-rbi-navy disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-rbi-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-rbi-navy-light"
          >
            Next Step
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-rbi-red px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-rbi-navy">
        {label}
      </label>
      {input}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function ReviewCard({
  title,
  items,
}: {
  title: string;
  items: [string, string | number | undefined][];
}) {
  return (
    <div className="rounded-2xl border border-rbi-border bg-rbi-paper p-5">
      <h4 className="mb-4 text-lg font-bold text-rbi-navy">{title}</h4>
      <div className="space-y-3">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col border-b border-rbi-border pb-3 last:border-b-0 last:pb-0"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-rbi-text-light">
              {label}
            </span>
            <span className="mt-1 text-sm text-rbi-text">
              {String(value || "-")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-rbi-border bg-white px-4 py-3 text-sm text-rbi-text outline-none transition focus:border-rbi-navy focus:ring-2 focus:ring-rbi-navy/10";

const fileInputClass =
  "block w-full rounded-lg border border-dashed border-rbi-border bg-rbi-cream px-4 py-3 text-sm text-rbi-text file:mr-4 file:rounded-md file:border-0 file:bg-rbi-navy file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-rbi-navy-light";