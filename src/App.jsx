import React from 'react'
import Section1 from './components/Section1/Section1'

const professionals = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    description: "The consultant understood our business goals quickly and delivered practical solutions that significantly improved team productivity and overall performance.",
    tag: "Satisfied"
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    description: "An excellent project manager who communicated clearly, met every deadline, and ensured every stakeholder remained informed throughout the project.",
    tag: "Recommended"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    description: "Highly skilled software engineer who solved complex technical challenges while maintaining exceptional code quality and collaboration with teammates.",
    tag: "Professional"
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
    description: "The marketing strategist created innovative campaigns that increased customer engagement and generated measurable business growth within months.",
    tag: "Excellent"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    description: "Reliable financial advisor who explained investment opportunities clearly and helped create a strong long-term financial planning strategy.",
    tag: "Trusted"
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500",
    description: "Creative UX designer delivered intuitive interfaces that enhanced user satisfaction while keeping accessibility and responsiveness as top priorities.",
    tag: "Creative"
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    description: "Outstanding HR specialist who streamlined recruitment, improved employee satisfaction, and fostered a positive workplace culture across departments.",
    tag: "Outstanding"
  },
  {
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500",
    description: "Dedicated business analyst transformed complex datasets into actionable insights that supported better strategic decisions and operational efficiency.",
    tag: "Reliable"
  },
  {
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500",
    description: "Experienced sales executive consistently exceeded targets through exceptional communication, strong client relationships, and deep market understanding.",
    tag: "Top Performer"
  },
  {
    image: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Passionate product manager successfully coordinated cross-functional teams to launch customer-focused products that exceeded expectations and business goals.",
    tag: "Verified"
  }
];

const App = () => {
  return (
    <div >
      <Section1 users={professionals}/>
    </div>
  )
}

export default App
