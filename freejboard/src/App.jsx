import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import WelcomePage from "./pages/Home/WelcomePage/WelcomePage";
import FreelancerWelcomePage from "./pages/Home/WelcomePage/FreelancerWelcomePage";
import ClientWelcomePage from "./pages/Home/WelcomePage/ClientWelcomePage";

import Inbox from "./pages/Inbox/inbox";
import Manage from "./pages/Manage/manage";

import HireFreelancer from "./pages/HireFreelancer/HireFreelancer";
import PostJobPage from "./pages/PostJobPage/PostJobPage";
import OfferServices from "./pages/OfferServicesPage/OfferServicesPage";

import Home from "./pages/Home/Home";
import AuthLogin from "./pages/Auth/AuthLogin";
import AuthSignUp from "./pages/Auth/AuthSignUp";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";

import FeaturedCompanies from "./pages/marketplace/FeaturedCompanies";
import FreelancerServices from "./pages/marketplace/FreelancerServices";
import JobPostings from "./pages/marketplace/JobPostings";
import RemoteJobListings from "./pages/marketplace/RemoteJobListings";

import Contact from "./pages/Contact/Contact";
import HelpSupport from "./components/HelpSupport/HelpSupport";
import FAQs from "./components/faq/faq";
import TermsOfService from "./components/TermsOfService/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Careers from "./components/Careers/Careers";
import Blog from "./components/Blog/Blog";
import InvestorRelations from "./components/InvestorRelations/InvestorRelations";

import Categories from "./pages/marketplace/Categories/Categories";

import Report from "./components/Report/Report";

//Category Pages Routes
import WebDevelopmentPage from "./pages/marketplace/WebDevelopment/WebDevelopment";
import GraphicDesignPage from "./pages/marketplace/GraphicDesign/GraphicDesign";
import DigitalMarketingPage from "./pages/marketplace/DigitalMarketing/DigitalMarketing";
import ContentWritingPage from "./pages/marketplace/ContentWriting/ContentWriting";
import VideoAnimationPage from "./pages/marketplace/VideoAnimation/VideoAnimation";
import MusicAudioPage from "./pages/marketplace/MusicAudio/MusicAudio";
import ProgrammingTechPage from "./pages/marketplace/ProgrammingTech/ProgrammingTech";
import BusinessConsultingPage from "./pages/marketplace/BusinessConsulting/BusinessConsulting";
import LifestyleCoachingPage from "./pages/marketplace/LifestyleCoaching/LifestyleCoaching";
import SocialMediaManagementPage from "./pages/marketplace/SocialMediaManagement/SocialMediaManagement";
import SEOPage from "./pages/marketplace/seo/seo";
import AppDevelopmentPage from "./pages/marketplace/AppDevelopment/AppDevelopment";
import PhotographyPage from "./pages/marketplace/Photography/Photography";
import TranslationServicesPage from "./pages/marketplace/TranslationServices/TranslationServices";
import DataAnalysisPage from "./pages/marketplace/DataAnalysis/DataAnalysis";
import VirtualAssistancePage from "./pages/marketplace/VirtualAssistance/VirtualAssistance";

//Not Used Pages Yet
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import DiscoverContainer from "./components/DiscoverContainer/DiscoverContainer";
import Input from "./components/Input/Input";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import Context from "./context/AuthContext";

import Upload from "./pages/Upload/Upload";
import View from "./pages/View/View";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          <Route path="/" element={<Home />} />
          <Route path="/freelancer-home" element={<FreelancerWelcomePage />} />
          <Route path="/client-home" element={<ClientWelcomePage/>}/>
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Services" element={<FreelancerServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />

          <Route path="/report" element={<Report />} />

          <Route path="/featured-companies" element={<FeaturedCompanies />} />
          <Route path="/sign-up" element={<AuthSignUp />} />

          <Route path="/JobPostings" element={<JobPostings />} />
          <Route path="/RemoteJobListings" element={<RemoteJobListings />} />

          <Route path="/category" element={<Categories />} />

          <Route path="/manage" element={<Manage />} />
          <Route path="/inbox" element={<Inbox />} />

          <Route path="/hire-freelancer" element={<HireFreelancer />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/offer-services" element={<OfferServices />} />

          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/content-writing" element={<ContentWritingPage />} />
          <Route path="/video-animation" element={<VideoAnimationPage />} />
          <Route path="/music-audio" element={<MusicAudioPage />} />
          <Route path="/programming-tech" element={<ProgrammingTechPage />} />
          <Route path="/business-consulting" element={<BusinessConsultingPage />} />
          <Route path="/lifestyle-coaching" element={<LifestyleCoachingPage />} />
          <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
          <Route path="/seo-services" element={<SEOPage />} />
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/translation-services" element={<TranslationServicesPage />} />
          <Route path="/data-analysis" element={<DataAnalysisPage />} />
          <Route path="/virtual-assistance" element={<VirtualAssistancePage />} />

          <Route path="/upload" element={<Upload />} />
          <Route path="/view" element={<View />} />          
          <Route path="/settings" element={<Settings />} />

          <Route path="/view" element={<View />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/discover" element={<DiscoverContainer />} />
          <Route path="/input" element={<Input />} />
          <Route path="/loading" element={<LoadingSpinner />} />
          <Route path="/button" element={<Button />} />
          <Route path="/card" element={<Card />} />
          <Route path="/context" element={<Context />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
