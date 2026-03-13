import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import { CheckCircle } from "lucide-react";

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxagoL0L9nNoVrbXihRwa2ctSkxUD1NAEw1NM41I4E72L5WDd_SFDtdSiWAok-m6cFl/exec";

const FlagSubmit = () => {

const [step,setStep] = useState(1);

const [name,setName] = useState("");
const [enrollment,setEnrollment] = useState("");
const [phone,setPhone] = useState("");

const [flag,setFlag] = useState("");

const [finished,setFinished] = useState(false);

const submitFlag = async (challenge:string,nextStep:number)=>{

const payload = new URLSearchParams({

challenge:challenge,

name:name,
enrollment:enrollment,
phone:phone,

flag:flag

});

await fetch(SCRIPT_URL,{
method:"POST",
mode:"no-cors",
body:payload
});

setFlag("");
setStep(nextStep);

};

if(finished){

return(

<Layout>

<section className="py-20 flex justify-center">

<GlassCard className="p-12 text-center max-w-md">

<CheckCircle className="w-20 h-20 text-secondary mx-auto mb-6"/>

<h2 className="text-3xl font-bold mb-4">
All Flags Submitted
</h2>

<p className="text-muted-foreground">
Thank you for participating in FlagQuest.
</p>

</GlassCard>

</section>

</Layout>

);

}

return(

<Layout>

<section className="py-20 flex justify-center">

<GlassCard className="p-10 max-w-md w-full">

<div className="text-center mb-6 text-sm text-muted-foreground">
Step {step} of 6
</div>

{/* STEP 1 PARTICIPANT DETAILS */}

{step===1 &&(

<div className="space-y-4">

<h2 className="text-xl font-bold text-center">
Participant Details
</h2>

<input
className="input w-full"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="input w-full"
placeholder="Enrollment Number"
value={enrollment}
onChange={(e)=>setEnrollment(e.target.value)}
/>

<input
className="input w-full"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<Button
className="w-full"
onClick={()=>setStep(2)}
>
Start Challenge
</Button>

</div>

)}

{/* FLAG SUBMISSION TEMPLATE */}

{step>1 && step<=6 &&(

<div className="space-y-4">

<h2 className="text-xl font-bold text-center">
Submit Flag {step-1}
</h2>

<input
className="input w-full"
placeholder="flag{...}"
value={flag}
onChange={(e)=>setFlag(e.target.value)}
/>

<Button
className="w-full"
onClick={()=>{

if(step===2) submitFlag("flag1",3);
if(step===3) submitFlag("flag2",4);
if(step===4) submitFlag("flag3",5);
if(step===5) submitFlag("flag4",6);
if(step===6){

submitFlag("flag5",6);
setFinished(true);

}

}}
>
Submit Flag
</Button>

</div>

)}

</GlassCard>

</section>

</Layout>

);

};

export default FlagSubmit;