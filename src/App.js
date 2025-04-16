import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSection from './components/SingUpSectionForm';
import GreetingSection from './components/GreetingSection';
import GreetingSection2 from './components/GreetingSection2';
import Questionnaire from './components/Questionnaire';
import Questionnaire2 from './components/Questionnaire2';
import Questionnaire3 from './components/Questionnaire3';
import Questionnaire4 from './components/Questionnaire4';
import Questionnaire5 from './components/Questionnaire5';
import Qn from './components/Qn';
import Qn2 from './components/Qn2';
import Qn3 from './components/Qn3';
import Qn4 from './components/Qn4';
import Qn5 from './components/Qn5';
import Qn6 from './components/Qn6';
import ThankYouSection from './components/ThankYou'; // Import Thank You Component
import Hero from"./components/hero"
import Media from './components/MediaCreativeForm'; 
import Mediag from './components/MediaGreeting'; 
import Mediaq from './components/MediaQuestionnaire'; 
import Layout from './components/Layout';
import 'react-phone-input-2/lib/style.css';
import './App.css'; 

function App() {
  return (
    <Router>
       <Layout></Layout>
      <Routes>
     
      <Route path="/" element={<Hero/>} />
        <Route path="/sign-up" element={<SignUpSection />} />
        <Route path="/media" element={<Media/>} />
        <Route path="/mediag" element={<Mediag/>} />
        <Route path="/mediaq" element={<Mediaq/>} />
        <Route path="/greeting" element={<GreetingSection />} />
        <Route path="/greeting2" element={<GreetingSection2 />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/questionnaire2" element={<Questionnaire2 />} />
        <Route path="/questionnaire3" element={<Questionnaire3 />} />
        <Route path="/questionnaire4" element={<Questionnaire4 />} />
        <Route path="/questionnaire5" element={<Questionnaire5 />} />
        <Route path="/qn" element={<Qn />} />
        <Route path="/qn2" element={<Qn2 />} />
        <Route path="/qn3" element={<Qn3 />} />
        <Route path="/qn4" element={<Qn4 />} />
        <Route path="/qn5" element={<Qn5 />} />
        <Route path="/qn6" element={<Qn6 />} />
        <Route path="/thank-you" element={<ThankYouSection />} /> {/* New route */}
        </Routes>
        
    </Router>
  );
}

export default App;