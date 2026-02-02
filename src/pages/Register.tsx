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
  name: z.string().min(2),
  enrollmentNumber: z.string().min(5),
  year: z.string().min(1),
  batch: z.string().min(1),
  email: z.string().email(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxDSLfPWPyaHp1XzX_CrxMFA7G_Rl8Q10d5063CAJl6PKYVbteYRvZSZXbQak5l4LIigg/exec';

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
        name: data.name,
        enrollment: data.enrollmentNumber,
        year: data.year,
        batch: data.batch,
        email: data.email,
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // 🔑 KEY FIX
        body: payload,
      });

      // If request reached Google, assume success
      setIsSubmitted(true);
      toast({
        title: 'Registration Successful! 🚀',
        description: 'A confirmation email has been sent.',
      });

    } catch {
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
            <h2 className="text-3xl font-bold mb-4">
              YOU'RE <span className="text-secondary">REGISTERED!</span>
            </h2>
            <p className="mb-6">
              Check your email for confirmation.
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

              <input {...register('name')} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border" />
              {errors.name && <p className="text-red-500 text-sm">Invalid name</p>}

              <input {...register('enrollmentNumber')} placeholder="Enrollment Number" className="w-full px-4 py-3 rounded-lg border" />
              {errors.enrollmentNumber && <p className="text-red-500 text-sm">Invalid enrollment</p>}

              <select {...register('year')} className="w-full px-4 py-3 rounded-lg border">
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>

              <input {...register('batch')} placeholder="Batch" className="w-full px-4 py-3 rounded-lg border" />

              <input type="email" {...register('email')} placeholder="Email" className="w-full px-4 py-3 rounded-lg border" />

              <Button type="submit" className="w-full" disabled={isLoading}>
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
