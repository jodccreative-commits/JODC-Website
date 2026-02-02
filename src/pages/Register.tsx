import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import { toast } from '@/hooks/use-toast';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  enrollmentNumber: z.string().min(5, 'Enter a valid enrollment number'),
  year: z.string().min(1, 'Please select your year'),
  batch: z.string().min(1, 'Batch is required'),
  email: z.string().email('Enter a valid email address'),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw2NNWea0mXie3CEAbAyXj8WzO2XCaIy4Uv2gtjfLSGTLiczSTIyCi4vvvZRu_1cdMX7A/exec';

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
      const payload = {
        name: data.name,
        enrollment: data.enrollmentNumber, // 👈 matches backend
        year: data.year,
        batch: data.batch,
        email: data.email,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      toast({
        title: 'Registration Successful! 🚀',
        description: 'A confirmation email has been sent to your email address.',
      });
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 px-4 min-h-[80vh] flex items-center justify-center">
          <GlassCard className="p-12 text-center max-w-md w-full">
            <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold mb-4">
              YOU'RE <span className="text-secondary">REGISTERED!</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              A confirmation email has been sent. See you at the workshop!
            </p>
            <Button href="/">Back to Home</Button>
          </GlassCard>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-xl">
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Enrollment */}
              <div>
                <label className="block mb-2 font-semibold">
                  Enrollment Number
                </label>
                <input
                  {...register('enrollmentNumber')}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border"
                />
                {errors.enrollmentNumber && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.enrollmentNumber.message}
                  </p>
                )}
              </div>

              {/* Year */}
              <div>
                <label className="block mb-2 font-semibold">Year</label>
                <select
                  {...register('year')}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border"
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
                {errors.year && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.year.message}
                  </p>
                )}
              </div>

              {/* Batch */}
              <div>
                <label className="block mb-2 font-semibold">Batch</label>
                <input
                  {...register('batch')}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border"
                />
                {errors.batch && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.batch.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Register'
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
