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
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  enrollmentNumber: z.string().min(5, 'Enter a valid enrollment number').max(20, 'Enrollment number is too long'),
  year: z.string().min(1, 'Please select your year'),
  batch: z.string().min(1, 'Batch is required').max(20, 'Batch is too long'),
  email: z.string().email('Enter a valid email address').max(100, 'Email is too long'),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    setIsLoading(true);
    
    // Simulate API call - In production, this would connect to Google Sheets via Apps Script
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Registration data:', data);
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "You have been registered for the Competitive Programming Workshop.",
      });
    } catch (error) {
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
        <section className="py-20 px-4 min-h-[80vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full"
          >
            <GlassCard className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
              </motion.div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                YOU'RE <span className="text-secondary">REGISTERED!</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                A confirmation email has been sent to your email address. See you at the workshop!
              </p>
              <Button href="/">
                Back to Home
              </Button>
            </GlassCard>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              REGISTER <span className="text-secondary">NOW</span>
            </h1>
            <p className="text-muted-foreground">
              Competitive Programming Workshop • 5th - 6th February
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Enrollment Number */}
                <div>
                  <label htmlFor="enrollmentNumber" className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Enrollment Number
                  </label>
                  <input
                    id="enrollmentNumber"
                    type="text"
                    {...register('enrollmentNumber')}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="e.g., 21103001"
                  />
                  {errors.enrollmentNumber && (
                    <p className="mt-2 text-sm text-destructive">{errors.enrollmentNumber.message}</p>
                  )}
                </div>

                {/* Year */}
                <div>
                  <label htmlFor="year" className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Year
                  </label>
                  <select
                    id="year"
                    {...register('year')}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  >
                    <option value="">Select your year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                  {errors.year && (
                    <p className="mt-2 text-sm text-destructive">{errors.year.message}</p>
                  )}
                </div>

                {/* Batch */}
                <div>
                  <label htmlFor="batch" className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Batch
                  </label>
                  <input
                    id="batch"
                    type="text"
                    {...register('batch')}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="e.g., B1, B2"
                  />
                  {errors.batch && (
                    <p className="mt-2 text-sm text-destructive">{errors.batch.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Email ID
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
