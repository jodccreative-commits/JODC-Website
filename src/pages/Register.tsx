import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import { toast } from '@/hooks/use-toast';

const registrationSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets allowed"),

  enrollment: z
    .string()
    .regex(/^[0-9]+$/, "Enrollment must contain only numbers"),

  year: z.enum(["1st", "2nd", "3rd", "4th"], {
    required_error: "Please select your year",
  }),

  email: z.string().email("Enter a valid email"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzSm5-_pc9wReB7GtL9YqJlFUVZkosT6e10HqIGXBzM9lSdTyYrtFUHmWxHZtfCh03C7w/exec";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    setIsLoading(true);

    try {
      const payload = new URLSearchParams({

          event:"ctf",

        name: data.name,
        enrollment: data.enrollment,
        year: data.year,
        email: data.email,
        phone: data.phone,
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      setIsSubmitted(true);

      toast({
        title: "Registration Successful 🚀",
        description: "Your registration has been recorded.",
      });
    } catch {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 flex justify-center">
          <GlassCard className="p-12 text-center max-w-md">
            <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-secondary">REGISTERED</span>
            </h2>
            <p className="mb-6">Your event registration is confirmed.</p>
            <Button href="/">Back to Home</Button>
          </GlassCard>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-xl">

          <GlassCard className="p-10">

            <h2 className="text-2xl font-bold mb-6 text-center">
              EVENT REGISTRATION
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="input w-full"
                  pattern="[A-Za-z\s]+"
                  onInput={(e) => {
                    e.currentTarget.value =
                      e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
                  }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Enrollment */}
              <div>
                <input
                  {...register("enrollment")}
                  placeholder="Enrollment Number"
                  className="input w-full"
                  inputMode="numeric"
                  onInput={(e) => {
                    e.currentTarget.value =
                      e.currentTarget.value.replace(/[^0-9]/g, "");
                  }}
                />
                {errors.enrollment && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.enrollment.message}
                  </p>
                )}
              </div>

              {/* Year */}
              <div>
                <select {...register("year")} className="input w-full">
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
                {errors.year && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.year.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address"
                  className="input w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="input w-full"
                  maxLength={10}
                  inputMode="numeric"
                  onInput={(e) => {
                    e.currentTarget.value =
                      e.currentTarget.value.replace(/[^0-9]/g, "");
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Register"
                )}
              </Button>

            </form>

          </GlassCard>

        </div>
      </section>
    </Layout>
  );
};

export default Register;