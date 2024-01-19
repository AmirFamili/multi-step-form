import { Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import MultiStep from './components/MultiStep';
import YourInfo from './components/YourInfo';
import SelectPlan from './components/SelectPlan';
import { useState } from 'react';
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import ThankYou from './components/ThankYou';
import MultiStepMobile from './components/MultiStepMobile';


function App() {

  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(0);
  const [period, setPeriod] = useState(true);

  const [online,setOnline]=useState(false);
  const [storage,setStorage]=useState(false);
  const [profile,setProfile]=useState(false);


  return (
    <div className="App h-lvh flex justify-center items-center relative max-md:items-start max-md:pt-32" >
       <MultiStepMobile  step={step}/>
      <div className="box h-3/4 w-4/6 p-4 shadow-md rounded-xl flex z-10  max-sm:px-2">
        <MultiStep  step={step} />
       
        <div className="main ">

          <Routes>

            <Route path='/' element={<YourInfo setStep={setStep} />}/>

            <Route path='/select-plan' element={<SelectPlan setStep={setStep} plan={plan} setPlan={setPlan} period={period} setPeriod={setPeriod} />}/>

            <Route path='/add-ons' element={<AddOns setStep={setStep} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} profile={profile} setProfile={setProfile} period={period} />}/>

            <Route path='/summary' element={<Summary setStep={setStep} plan={plan} period={period} setPeriod={setPeriod} online={online} storage={storage} profile={profile}/>}/>

            <Route path='/thank-you' element={<ThankYou />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
