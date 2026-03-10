'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaHome, FaDollarSign, FaShieldAlt, FaUsers, FaFileContract, FaHandshake, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ImageWithLoading from '@/components/ImageWithLoading';

export default function RoosoLanding() {
  const [activeService, setActiveService] = useState('roofing');
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Roofing',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send');
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'Roofing', message: '' });
      setTimeout(() => { setIsOpen(false); setSubmitSuccess(false); }, 2500);
    } catch {
      setSubmitError('Could not send your request. Please call us at 813-369-9900.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let [isOpen, setIsOpen] = useState(false);


  const services = {
    roofing: {
      title: 'ROOFING',
      description: 'with clients throughout any roof replacement, remodeling or construction project, from initial consultation to final delivery, ensuring that every requirement and expectation is met.',
      images: [
        {
          src: '/img/roof1.jpg',
          title: 'Roof',
          subtitle: 'with clients throughout any roof replacement.'
        },
        {
          src: '/img/roof2.jpg',
          title: 'Roof',
          subtitle: 'with clients throughout any roof replacement.'
        },
        {
          src: '/img/roof3.jpg',
          title: 'Roof',
          subtitle: 'with clients throughout any roof replacement.'
        },
        {
          src: '/img/roof4.jpg',
          title: 'Roof',
          subtitle: 'with clients throughout any roof replacement.'
        }
      ]
    },
    general: {
      title: 'GENERAL CONTRACTOR',
      description: 'providing comprehensive construction services from planning to completion. We handle residential and commercial projects with expertise in project management, quality control, and timely delivery.',
      images: [
        {
          src: '/img/gen1.jpg',
          title: 'Construction',
          subtitle: 'Complete construction management services.'
        },
        {
          src: '/img/gen2.jpg',
          title: 'Renovation',
          subtitle: 'Home and commercial renovations.'
        },
        {
          src: '/img/gen3.jpg',
          title: 'Building',
          subtitle: 'New construction projects.'
        },
        {
          src: '/img/gen4.jpg',
          title: 'Planning',
          subtitle: 'Project planning and development.'
        }
      ]
    },
    solar: {
      title: 'COMERCIAL SERVICE',
      description: 'specialized in solar panel installation and renewable energy solutions. From residential to commercial projects, we provide sustainable energy solutions that reduce costs and environmental impact.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
          title: 'Solar Panels',
          subtitle: 'Residential solar installations.'
        },
        {
          src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
          title: 'Solar Roof',
          subtitle: 'Solar roof integration systems.'
        },
        {
          src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop',
          title: 'Commercial Solar',
          subtitle: 'Large scale solar projects.'
        },
        {
          src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
          title: 'Green Energy',
          subtitle: 'Sustainable energy solutions.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen ">
     <>
<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  {/* Backdrop */}
  <div 
    className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
    onClick={() => setIsOpen(false)}
  />

  {/* Modal Container */}
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <DialogPanel className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeInUp">
      
      {/* Header compacto */}
      <div className="bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] px-6 py-4 text-white">
        <h3 className="text-xl font-bold">Free Estimate</h3>
        <p className="text-xs opacity-90 mt-0.5">Instant quote in under 2 minutes</p>
      </div>

      {/* Formulario ultra compacto */}
      <form onSubmit={handleSubmit} className="p-5 space-y-4">
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name *"
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition placeholder:text-gray-400"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email *"
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition placeholder:text-gray-400"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone *"
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition placeholder:text-gray-400"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition text-gray-700"
        >
          <option value="Roofing">Roofing</option>
          <option value="General Contractor">General Contractor</option>
          <option value="Solar Installation">Solar Installation</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={2}
          placeholder="Project details (optional)"
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition resize-none placeholder:text-gray-400"
        />

        {/* Feedback messages */}
        {submitError && (
          <p className="text-red-600 text-xs">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="text-green-600 text-xs font-medium">✓ Request sent! We will contact you shortly.</p>
        )}

        {/* Botones */}
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={isSubmitting || submitSuccess}
            className="flex-1 bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] text-white font-semibold text-sm py-2.5 rounded-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent ✓' : 'Send Request'}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-gray-100 text-gray-700 font-medium text-sm py-2.5 rounded-md hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </DialogPanel>
  </div>

  {/* Animaciones suaves */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
    .animate-fadeInUp { animation: fadeInUp 0.3s ease-out; }
  `}</style>
</Dialog>
    </>
      {/* Header */}
      <header className="bg-gradient-to-r from-[#3a3a38] to-[#2d2d2b] text-white py-1 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Logo */}
            <div className="order-1 w-full sm:w-auto flex justify-center sm:justify-start">
              <Image
                alt="Company Logo"
                src="/logo3.png"
                width={70}
                height={70}
                className="w-16 sm:w-20 hover:scale-105 transition-transform"
              />
            </div>

            {/* Promotional Banner */}
            <div className="order-3 sm:order-2 w-full sm:w-auto flex justify-center">
              <div className="bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a]  text-white px-3 py-1 font-medium text-xs sm:text-sm whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105 transition-all animate-pulse">
                SAVE $500 ON ROOF REPLACEMENT APPLY NOW
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-2 sm:order-3 w-full sm:w-auto flex justify-center sm:justify-end">
              <a
                href="tel:30596868985"
                className="flex items-center gap-1 text-sm sm:text-base font-medium hover:text-[#2DAA17] transition-colors group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(813) 369-9900</span>

              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gradient-to-b from bg-[#05240a] text-white py-1  px-4 shadow-md border-t border-[#2DAA17]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Contact on mobile - hidden on larger screens */}
            <div className="order-1 w-full sm:hidden flex justify-center">
              <a
                href="tel:3059686898"
                className="flex items-center gap-1 text-sm font-medium hover:text-[#2DAA17] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(813) 369-9900</span>
              </a>
            </div>

            {/* Company Tagline */}
            <div className="order-2 w-full sm:w-auto flex justify-center">
              <div className="font-bold text-sm sm:text-base tracking-wider flex items-center gap-2">
                {/* <span className="text-[#2DAA17] text-lg sm:text-xl">★</span> */}
                <div className="order-3 w-full sm:w-auto flex justify-center sm:justify-end">
                  {/* <button className="bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a]  shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)]  text-white px-6 sm:px-8  sm:py-1 font-semibold text-sm my-2 transition-all  uppercase tracking-wide relative"> */}
                  ROOFING AND GENERAL CONTRACTOR
                  <span className="absolute inset-0  border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>

                  {/* </button> */}
                </div>
                {/* <span className="text-[#2DAA17] text-lg sm:text-xl">★</span> */}
              </div>

            </div>

            {/* Free Estimate Button */}
            <div onClick={() => setIsOpen(true)} className="order-3 w-full sm:w-auto flex justify-center sm:justify-end cursor-pointer">
              <button  className="bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a]  shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)]  text-white px-6 sm:px-8  sm:py-1 font-semibold text-sm my-2 transition-all  uppercase tracking-wide relative">
                Free Estimate NOW
                <span className="absolute inset-0  border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>
      

              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 flex items-center justify-center px-4 py-8 sm:py-16 md:min-h-screen">
        {/* Background with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(25, 61, 25, 0.4) 100%), url('/techo.png')`
          }}
        />

        {/* Content */}
        <AnimateOnScroll preset="fadeIn" duration={0.8} className="relative z-10 max-w-6xl w-full text-white">

          {/* Logo and Description */}
          <div className="flex flex-col items-center justify-center md:items-start mb-6 sm:mb-10 md:mb-16">
            {/* Logo */}
            <div className="mb-3 sm:mb-5 md:mb-6 mx-auto z-0">
              <Image
                alt="ROOSO Construction"
                src="/logo2.png"
                width={600}
                height={400}
                className="w-64 sm:w-96 lg:w-[600px] h-auto"
              />
            </div>


            {/* Description */}
            <p className="text-base sm:text-lg lg:text-lg leading-7 text-center font-extralight max-w-4xl mx-auto">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#69ff80] via-[#32c849] to-[#69ff80]">
                Rooso Inc.
              </span> is a trusted, licensed roofing and general contracting company that delivers
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#69ff80] via-[#32c849] to-[#69ff80]">
                top-quality craftsmanship
              </span> for both
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#69ff80] via-[#32c849] to-[#69ff80]">
                residential
              </span> and
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#69ff80] via-[#32c849] to-[#69ff80]">
                commercial projects
              </span>.
            </p>

         
          </div>


          {/* Action Buttons */}
          <div  className="flex flex-col sm:flex-row gap-4 justify-center mb-8 ">
            {/* FREE ESTIMATE button */}
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)] transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="relative z-10">FREE ESTIMATE</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3 text-green-200 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>
            </button>

            {/* HEARTH CTA button */}
            <a
              href="https://app.gethearth.com/partners/roo-so-inc?utm_campaign=56587&utm_content=darkblue&utm_medium=contractor-website&utm_source=contractor&utm_term=310x310"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a]  shadow-[0_0_25px_rgba(37,235,80,0.5)] hover:shadow-[0_0_35px_rgba(37,235,80,0.8)] transition-all duration-500 overflow-hidden"
            >
              {/* efecto de brillo animado */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>

              {/* texto principal */}
              <span className="relative z-10 flex flex-col items-center text-center leading-tight">
                <span className=" font-medium tracking-wide">Finance Your Project</span>
                <span className="text-xs font-light text-white ">
                  Apply with Hearth — Fast, Easy & Secure
                </span>
              </span>

              {/* icono */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3 text-green-200 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* borde animado brillante */}
              <span className="absolute inset-0  border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>
            </a>
            
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium tracking-wide">Tampa Bay Area, FL</span>
          </div>

        
        </AnimateOnScroll>
      </section>

      {/* Features/Services Icon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll 
            preset="slideUp" 
            duration={0.5}
            staggerChildren={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Feature 1 - Commercial Roofing */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                <FaHome className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Roofing</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Professional commercial roofing services for businesses and industrial facilities with
                top-quality materials and expert installation.
              </p>
            </div>

            {/* Feature 2 - Quality Work at Reasonable Price */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                <FaDollarSign className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Work, Reasonable Price</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                We provide exceptional craftsmanship at competitive prices, ensuring value and
                quality on every project without compromising standards.
              </p>
            </div>

            {/* Feature 3 - Safe & Reliable */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safe & Reliable</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Our team prioritizes safety and reliability on every job site, following strict
                safety protocols and delivering dependable results.
              </p>
            </div>

            {/* Feature 4 - Expert Crews */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                <FaUsers className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Crews</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Our experienced and highly skilled crews bring years of expertise to every project,
                ensuring professional results and customer satisfaction.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Licensing & Veterans Banner */}
      <AnimateOnScroll preset="fadeIn" duration={0.5}>
        <section className="py-8 bg-gradient-to-r from-[#2DAA17] via-[#05240a] to-[#2DAA17]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side - License Info */}
              <div className="flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-3">
                  <FaFileContract className="text-5xl" />
                  <div>
                    <p className="text-sm font-light">Lic: CGC059479 & CCC133126</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Veterans Discount */}
              <div className="flex items-center justify-center gap-4 text-white">
                <FaHandshake className="text-5xl" />
                <div>
                  <p className="text-xl font-bold">Veterans Discounts Available</p>
                  <p className="text-sm opacity-80">Thank you for your service</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Projects Gallery Section */}
      <section className="bg-gray-100">
        {/* Projects Header with Background Image */}
        <div className="relative h-64 flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/img/roof1.jpg"
              alt="Projects Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <AnimateOnScroll preset="fadeIn" duration={0.6}>
            <div className="relative z-10 text-center text-white">
              <div className="flex items-center justify-center gap-2 text-sm mb-4">
              
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Projects Grid Container */}
        <div className="max-w-7xl mx-auto px-4 py-16">

          {/* Project Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Row 1 - House Exteriors */}
            {[1, 2, 3, 4].map((num) => (
              <div key={`house-${num}`} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={`/img/roof${num}.jpg`}
                  alt={`Project ${num}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#05240a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Project {num}</p>
                  </div>
                </div> */}
              </div>
            ))}
            
            {/* Row 2 - Detail Shots */}
            {[1, 2, 3, 4].map((num) => (
              <div key={`detail-${num}`} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={`/img/gen${num}.jpg`}
                  alt={`Detail ${num}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05240a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Detail Work</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#05240a] via-[#2DAA17] to-[#05240a] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll preset="slideUp" duration={0.5}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-4">OURS SERVICES</h2>

              {/* Service Tabs */}
              <div className="flex justify-center flex-col md:flex-row gap-6 mb-8">
                <button
                  onClick={() => setActiveService('roofing')}
                  className={`text-4xl md:text-5xl font-bold  ${activeService === 'roofing' ? 'text-[#124409] underline decoration-2 decoration-green-600' : 'text-gray-300'
                    }`}
                >
                  ROOFING
                </button>
                <button
                  onClick={() => setActiveService('general')}
                  className={`text-4xl md:text-5xl font-bold ${activeService === 'general' ? 'text-[#124409] underline decoration-2 decoration-green-600' : 'text-gray-300'
                    }`}
                >
                  GENERAL CONTRACTOR
                </button>
                <button
                  onClick={() => setActiveService('solar')}
                  className={`text-4xl md:text-5xl font-bold ${activeService === 'solar' ? 'text-[#124409] underline decoration-2  decoration-green-600' : 'text-gray-300'
                    }`}
                >
                  SOLAR
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll preset="fadeIn" duration={0.6} delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Single Image */}
              <div className="relative group">
                <Image
                  src={services[activeService].images[0].src}
                  alt={services[activeService].images[0].title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 progressive-blur text-white p-4 rounded-b-lg">
                  <h3 className="font-bold text-white text-xl">{services[activeService].images[0].title}</h3>
                  <p className="text-sm">{services[activeService].images[0].subtitle}</p>
                </div>
              </div>

              {/* Service Info */}
              <div>
                <h2 className="text-4xl font-bold text-[#124409] mb-6">
                  {services[activeService].title}
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                  className="group relative inline-flex items-center justify-center px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)] transition-all duration-500 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <span className="relative z-10">GET A FREE ESTIMATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3 text-green-200 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Roof Replacement & Construction Section */}
      <AnimateOnScroll preset="fadeIn" duration={0.5}>
        <section className="py-16 text-white text-center bg-overlay-green">
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">
              ROOF REPLACEMENT & CONSTRUCTION
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you re looking for a new remodel, a custom built home or a new roof installation, count on Backbone Construction & Roofing for help.
            </p>
          </div>
        </section>
      </AnimateOnScroll>


      {/* #1 Construction Company Section */}
      <section className="py-16 bg-white text-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateOnScroll preset="slideUp" duration={0.5}>
          <h2 className="text-4xl font-bold text-[#124409] mb-8">
            #1 CONSTRUCTION & ROOFING COMPANY
          </h2>

          <div className='grid grid-cols-3 text-green-900'>

            <div className='flex flex-col gap-3'>
              <span className="font-bold text-xl">About Us</span>
              <span>At ROOSO INC., we specialize in high-quality roofing and general contracting services for residential and commercial clients. With years of experience, our team is committed to delivering reliable, professional, and long-lasting solutions—on time and on budget.

{/* We take pride in our craftsmanship, clear communication, and customer-first approach. Whether you need a roof replacement, home renovation, or full-scale construction project, we re here to get the job done right. */}
</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className="font-bold text-xl">Our Mission</span>
              <span>Our mission at ROOSO INC. is to provide top-notch construction services that exceed client expectations. We aim to build lasting relationships based on trust, transparency, and outstanding quality.
</span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className="font-bold text-xl">Our Vision</span>
              <span>
To be the leading provider of roofing and general contracting services, known for our integrity, innovation, and commitment to making every project a success.</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center justify-center px-10 py-3 mt-8 mb-12 text-lg font-semibold text-white bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)] transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            <span className="relative z-10">GET A FREE ESTIMATE</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3 text-green-200 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>
          </button>
          </AnimateOnScroll>
        </div>

        {/* Carrusel infinito */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee gap-4 w-max">
            {[
              "photo-1541888946425-d81bb19240f5",
              "photo-1504307651254-35680f356dfd",
              "photo-1541888946425-d81bb19240f5",
              "photo-1572120360610-d971b9d7767c",
              "photo-1541976590-713941681591",
            ].map((id, index) => (
              <div className="min-w-[300px] h-48" key={index}>
                <Image
                  src={`https://images.unsplash.com/${id}?w=300&h=200&fit=crop`}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}

            {/* Clona el set para animación infinita */}
            {[
              "photo-1541888946425-d81bb19240f5",
              "photo-1504307651254-35680f356dfd",
              "photo-1541888946425-d81bb19240f5",
              "photo-1572120360610-d971b9d7767c",
              "photo-1541976590-713941681591",
            ].map((id, index) => (
              <div className="min-w-[300px] h-48" key={`clone-${index}`}>
                <Image
                  src={`https://images.unsplash.com/${id}?w=300&h=200&fit=crop`}
                  alt={`Slide clone ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <AnimateOnScroll preset="slideUp" duration={0.5}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Reviews
            </h2>
          </AnimateOnScroll>

          {/* Reviews Container with Navigation */}
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10">
              <FaChevronLeft className="text-gray-600" />
            </button>

            {/* Reviews Grid */}
            <AnimateOnScroll 
              preset="slideUp" 
              duration={0.4}
              staggerChildren={{ delay: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Review 1 - Pam Greco */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    P
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Pam Greco</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Rafael builds very excellent, it interplay off line day front starts to finish, flip capability everything ever was going to one price when all was going to happen, very profissiona...
                </p>
                <a href="#" className="text-[#2DAA17] text-sm font-semibold hover:underline">
                  Read more
                </a>
              </div>

              {/* Review 2 - Aqar Dina */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Aqar Dina</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  I experienced them to my neighbor and I couldn&apos;t be happy with the work. Rafael is just person Call 5-level Roofing it&apos;s success. I-org thank men i-be happy wit...
                </p>
                <a href="#" className="text-[#2DAA17] text-sm font-semibold hover:underline">
                  Read more
                </a>
              </div>

              {/* Review 3 - Emiliano Yaneth Guadin */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#05240a] to-[#2DAA17] rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    E
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Emiliano Yaneth Guadin</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  I am very pleased with this company and their work. Better was very responsive and professional throughout to entire process. I recommend 10/10! Thank you it...
                </p>
                <a href="#" className="text-[#2DAA17] text-sm font-semibold hover:underline">
                  Read more
                </a>
              </div>
            </AnimateOnScroll>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10">
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Reference Section - Footer */}
      <AnimateOnScroll preset="fadeIn" duration={0.5}>
        <section className="py-12 bg-[#2d2d2b]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Company Info */}
              <div className="flex items-center gap-6">
                <Image
                  src="/logo2.png"
                  alt="Rooso Construction"
                  width={120}
                  height={80}
                  className="w-32 h-auto"
                />
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">ROOSO INC.</h3>
                  <p>📞 <a href="tel:8133699900" className="hover:text-[#1e8b2f] transition-colors">813-369-9900</a></p>
            <p>📞 <a href="tel:8137340290" className="hover:text-[#1e8b2f] transition-colors">813-734-0290</a></p>
            <p>📞 <a href="tel:8139707315" className="hover:text-[#1e8b2f] transition-colors">813-970-7315</a></p>
            <p>📧 <a href="mailto:info@roosogroup.com" className="hover:text-[#1e8b2f] transition-colors">info@roosogroup.com</a></p>
            <p>Lic: CGC059479 & CCC133126</p>
                  
                </div>
            </div>

            {/* Right Side - CTA */}
            <div className="text-center md:text-right">
              <button
                onClick={() => setIsOpen(true)}
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)] transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <span className="relative z-10">Get a Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3 text-green-200 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>
              </button>
              <a href="/privacy-policy" className="block text-gray-400 text-sm mt-3 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>
    </div>
  );
}