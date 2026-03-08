import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  teamName: z.string().min(2, "Team name required"),

  member1Name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, "Only alphabets allowed"),

  enrollment1: z
    .string()
    .regex(/^[0-9]+$/, "Numbers only"),

  year1: z.enum(["1st", "2nd", "3rd", "4th"]),

  email1: z.string().email("Invalid email"),

  phone1: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

  member2Name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, "Only alphabets allowed"),

  enrollment2: z
    .string()
    .regex(/^[0-9]+$/, "Numbers only"),

  year2: z.enum(["1st", "2nd", "3rd", "4th"]),

  email2: z.string().email("Invalid email"),

  phone2: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
});

type FormData = z.infer<typeof schema>;

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

const TechCharadesRegister = () => {

  const [loading,setLoading] = useState(false);
  const [submitted,setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<FormData>({
    resolver:zodResolver(schema)
  });

  const onSubmit = async (data:FormData)=>{

    setLoading(true);

    try{

      const payload = new URLSearchParams({

        teamName: data.teamName,

        member1Name: data.member1Name,
        enrollment1: data.enrollment1,
        year1: data.year1,
        email1: data.email1,
        phone1: data.phone1,

        member2Name: data.member2Name,
        enrollment2: data.enrollment2,
        year2: data.year2,
        email2: data.email2,
        phone2: data.phone2
      });

      await fetch(GOOGLE_SCRIPT_URL,{
        method:"POST",
        mode:"no-cors",
        body:payload
      });

      setSubmitted(true);

      toast({
        title:"Registered Successfully 🎭",
        description:"Your team has been registered for Tech Charades"
      });

    }catch{

      toast({
        title:"Registration Failed",
        description:"Please try again later",
        variant:"destructive"
      });

    }finally{
      setLoading(false);
    }

  };

  if(submitted){
    return(
      <Layout>
        <section className="py-20 flex justify-center">
          <GlassCard className="p-12 text-center max-w-md">
            <CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6"/>
            <h2 className="text-3xl font-bold mb-4">
              TEAM <span className="text-secondary">REGISTERED</span>
            </h2>
            <p className="mb-6">
              Your Tech Charades registration is confirmed.
            </p>
            <Button href="/">Back to Home</Button>
          </GlassCard>
        </section>
      </Layout>
    )
  }

  return(

    <Layout>

      <section className="py-20 px-4">

        <div className="container mx-auto max-w-xl">

          <GlassCard className="p-10">

            <h2 className="text-2xl font-bold mb-6 text-center">
              TECH CHARADES REGISTRATION
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Team Name */}

              <div>
                <input
                  {...register("teamName")}
                  placeholder="Team Name"
                  className="input w-full"
                />
                {errors.teamName && (
                  <p className="text-red-500 text-sm">{errors.teamName.message}</p>
                )}
              </div>

              <h3 className="font-bold text-lg mt-6">Member 1</h3>

              <input
                {...register("member1Name")}
                placeholder="Name"
                className="input"
                onInput={(e)=>{
                  e.currentTarget.value =
                  e.currentTarget.value.replace(/[^A-Za-z\s]/g,"")
                }}
              />

              <input
                {...register("enrollment1")}
                placeholder="Enrollment Number"
                className="input"
                onInput={(e)=>{
                  e.currentTarget.value =
                  e.currentTarget.value.replace(/[^0-9]/g,"")
                }}
              />

              <select {...register("year1")} className="input">
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>

              <input
                {...register("email1")}
                placeholder="Email"
                className="input"
              />

              <input
                {...register("phone1")}
                placeholder="Phone Number"
                className="input"
                maxLength={10}
                onInput={(e)=>{
                  e.currentTarget.value =
                  e.currentTarget.value.replace(/[^0-9]/g,"")
                }}
              />

              <h3 className="font-bold text-lg mt-6">Member 2</h3>

              <input
                {...register("member2Name")}
                placeholder="Name"
                className="input"
                onInput={(e)=>{
                  e.currentTarget.value =
                  e.currentTarget.value.replace(/[^A-Za-z\s]/g,"")
                }}
              />

              <input
                {...register("enrollment2")}
                placeholder="Enrollment Number"
                className="input"
                onInput={(e)=>{
                  e.currentTarget.value =
                  e.currentTarget.value.replace(/[^0-9]/g,"")
                }}
              />

              <select {...register("year2")} className="input">
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>

              <input
                {...register("email2")}
                placeholder="Email"
                className="input"
              />

              <input
                {...register("phone2")}
                placeholder="Phone Number"
                className="input"
                maxLength={10}
                onInput={(e)=>{
                  e.currentTarget.value =
                  e.currentTarget.value.replace(/[^0-9]/g,"")
                }}
              />

              <Button type="submit" disabled={loading} className="w-full">

                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
                    Submitting...
                  </>
                ):(
                  "Register Team"
                )}

              </Button>

            </form>

          </GlassCard>

        </div>

      </section>

    </Layout>

  )

}

export default TechCharadesRegister;