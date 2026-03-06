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
  teamName: z.string().min(2),

  repName: z.string().min(2),
  repEnrollment: z.string().min(5),
  year: z.string().min(1),
  campus: z.enum(['62', '128']),
  email: z.string().email(),
  repDiscord: z.string().min(2),

  member2Name: z.string().optional(),
  member2Enrollment: z.string().optional(),
  member2Email: z.string().optional(),
  member2Discord: z.string().optional(),

  member3Name: z.string().optional(),
  member3Enrollment: z.string().optional(),
  member3Email: z.string().optional(),
  member3Discord: z.string().optional(),

  member4Name: z.string().optional(),
  member4Enrollment: z.string().optional(),
  member4Email: z.string().optional(),
  member4Discord: z.string().optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const GOOGLE_SCRIPT_URL =
'https://script.google.com/macros/s/AKfycbxntPED0Ds8r0iccQ085KcENvBQLbkr6_XOeoRbjLtTXjsXy1s2HGyA5raZ3zp--oY7KQ/exec';
const Register = () => {0
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    setIsLoading(true);

    try {

      const payload = new URLSearchParams({
        teamName: data.teamName,

        repName: data.repName,
        repEnrollment: data.repEnrollment,
        year: data.year,
        campus: data.campus === '62' ? 'Sector 62' : 'Sector 128',
        email: data.email,
        repDiscord: data.repDiscord,

        member2Name: data.member2Name || '',
        member2Enrollment: data.member2Enrollment || '',
        member2Email: data.member2Email || '',
        member2Discord: data.member2Discord || '',

        member3Name: data.member3Name || '',
        member3Enrollment: data.member3Enrollment || '',
        member3Email: data.member3Email || '',
        member3Discord: data.member3Discord || '',

        member4Name: data.member4Name || '',
        member4Enrollment: data.member4Enrollment || '',
        member4Email: data.member4Email || '',
        member4Discord: data.member4Discord || '',
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      setIsSubmitted(true);

      toast({
        title: 'Registration Successful 🚀',
        description: 'Your team has been registered.',
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
        <section className="py-20 flex justify-center">
          <GlassCard className="p-12 text-center max-w-md">
            <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              TEAM <span className="text-secondary">REGISTERED</span>
            </h2>
            <p className="mb-6">Your hackathon registration is confirmed.</p>
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

          <GlassCard className="p-10 max-w-xl mx-auto">

            <div className="mb-6 text-center text-sm text-muted-foreground">
              Step {step} of 4
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {step === 1 && (
                <>
                  <input {...register('teamName')} placeholder="Team Name" className="input"/>

                  <input {...register('repName')} placeholder="Team Representative Name" className="input"/>

                  <input {...register('repEnrollment')} placeholder="Enrollment Number" className="input"/>

                  <select {...register('year')} className="input">
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>

                  <select {...register('campus')} className="input">
                    <option value="">Select Campus</option>
                    <option value="62">Sector 62</option>
                    <option value="128">Sector 128</option>
                  </select>

                  <input {...register('email')} placeholder="Representative Email" className="input"/>

                  <input {...register('repDiscord')} placeholder="Representative Discord Username" className="input"/>

                  <Button type="button" onClick={()=>setStep(2)}>
                    Next
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="font-bold">Member 2</h3>

                  <input {...register('member2Name')} placeholder="Name" className="input"/>
                  <input {...register('member2Enrollment')} placeholder="Enrollment No" className="input"/>
                  <input {...register('member2Email')} placeholder="Email" className="input"/>
                  <input {...register('member2Discord')} placeholder="Discord Username" className="input"/>

                  <div className="flex gap-4">
                    <Button type="button" onClick={()=>setStep(1)}>Back</Button>
                    <Button type="button" onClick={()=>setStep(3)}>Next</Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="font-bold">Member 3</h3>

                  <input {...register('member3Name')} placeholder="Name" className="input"/>
                  <input {...register('member3Enrollment')} placeholder="Enrollment No" className="input"/>
                  <input {...register('member3Email')} placeholder="Email" className="input"/>
                  <input {...register('member3Discord')} placeholder="Discord Username" className="input"/>

                  <div className="flex gap-4">
                    <Button type="button" onClick={()=>setStep(2)}>Back</Button>
                    <Button type="button" onClick={()=>setStep(4)}>Next</Button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="font-bold">Member 4</h3>

                  <input {...register('member4Name')} placeholder="Name" className="input"/>
                  <input {...register('member4Enrollment')} placeholder="Enrollment No" className="input"/>
                  <input {...register('member4Email')} placeholder="Email" className="input"/>
                  <input {...register('member4Discord')} placeholder="Discord Username" className="input"/>

                  <div className="flex gap-4">

                    <Button type="button" onClick={()=>setStep(3)}>
                      Back
                    </Button>

                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
                          Submitting...
                        </>
                      ) : (
                        'Submit Registration'
                      )}
                    </Button>

                  </div>
                </>
              )}

            </form>

          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Register;