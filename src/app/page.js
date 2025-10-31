'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import { useState } from 'react'
export default function RoosoLanding() {
  const [activeService, setActiveService] = useState('roofing');
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Roofing',
    message: ''
  });

  const handleSubmit = () => {
    e.preventDefault();
    // Aquí puedes conectar con EmailJS, Formspree, o tu API
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', service: 'Roofing', message: '' });
  };

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    let [isOpen, setIsOpen] = useState(false)


  const services = {
    roofing: {
      title: 'ROOFING',
      description: 'with clients throughout any roof replacement, remodeling or construction project, from initial consultation to final delivery, ensuring that every requirement and expectation is met.',
      images: [
        {
          src: '/img/roof1.jpg',
          title: 'Metal',
          subtitle: 'with clients throughout any roof replacement.'
        },
        {
          src: '/img/roof2.jpg',
          title: 'Metal',
          subtitle: 'with clients throughout any roof replacement.'
        },
        {
          src: '/img/roof3.jpg',
          title: 'Metal',
          subtitle: 'with clients throughout any roof replacement.'
        },
        {
          src: '/img/roof4.jpg',
          title: 'Metal',
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

        {/* Botones */}
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a] text-white font-semibold text-sm py-2.5 rounded-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            Send Request
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
            <div className="order-2 w-full sm:w-auto flex justify-center z-50">
              <div className="font-bold text-sm sm:text-base tracking-wider flex items-center gap-2">
                {/* <span className="text-[#2DAA17] text-lg sm:text-xl">★</span> */}
                <div className="order-3 w-full sm:w-auto flex justify-center sm:justify-end">
                  <button className="bg-gradient-to-r from-[#05240a] via-[#1e8b2f] to-[#05240a]  shadow-[0_0_25px_rgba(37,235,80,0.3)] hover:shadow-[0_0_35px_rgba(37,235,80,0.4)]  text-white px-6 sm:px-8  sm:py-1 font-semibold text-sm my-2 transition-all  uppercase tracking-wide relative">
                    Finance Your Project
                    <span className="absolute inset-0  border border-green-400/30 group-hover:border-green-400/80 transition-all duration-500"></span>

                  </button>
                </div>
                {/* <span className="text-[#2DAA17] text-lg sm:text-xl">★</span> */}
              </div>

            </div>
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
        <div className="relative z-10 max-w-6xl w-full text-white">

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
          <div  className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 md:mb-16">
            {/* FREE ESTIMATE button */}
            <button onClick={() => setIsOpen(true)} className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 py-2  shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all font-semibold text-sm sm:text-base">
              FREE ESTIMATE
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


        
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services[activeService].images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 progressive-blur text-white p-3 rounded-b-lg">
                    <h3 className="font-bold text-[#124409]">{image.title}</h3>
                    <p className="text-sm">{image.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Info */}
            <div>
              <h2 className="text-4xl font-bold text-[#124409] mb-6">
                {services[activeService].title}
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {services[activeService].description}
              </p>
              <button className="bg-black text-white px-8 py-3 font-bold">
                GET A ESTIMATE NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement & Construction Section */}
      <section className="py-16 text-white text-center bg-overlay-green">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            ROOF REPLACEMENT & CONSTRUCTION
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for a new remodel, a custom built home or a new roof installation, count on Backbone Construction & Roofing for help.
          </p>
        </div>
      </section>


      {/* #1 Construction Company Section */}
      <section className="py-16 bg-white text-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#124409] mb-8">
            #1 CONSTRUCTION & ROOFING COMPANY
          </h2>

          <div className='grid grid-cols-3 text-green-900'>

            <div className='flex flex-col gap-3'>
              <span className="font-bold text-xl">About Us</span>
              <span>At ROOSO INC., we specialize in high-quality roofing and general contracting services for residential and commercial clients. With years of experience, our team is committed to delivering reliable, professional, and long-lasting solutions—on time and on budget.

We take pride in our craftsmanship, clear communication, and customer-first approach. Whether you need a roof replacement, home renovation, or full-scale construction project, we’re here to get the job done right.
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

          <button className="bg-black text-white px-8 py-3 font-bold mb-12 shadow-md hover:shadow-lg transition">
            GET A ESTIMATE NOW
          </button>
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
                <img
                  src={`https://images.unsplash.com/${id}?w=300&h=200&fit=crop`}
                  alt={`Slide ${index + 1}`}
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
                <img
                  src={`https://images.unsplash.com/${id}?w=300&h=200&fit=crop`}
                  alt={`Slide clone ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop)'
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            HOW TELL ORS CLIENTS ABOUT US?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-black bg-opacity-70 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="text-sm text-gray-300">Tampa, FL</div>
                </div>
              </div>
              <p className="text-sm mb-4 italic">
                "Luis es el mejor, me arreglo el techo en julio y recomiendo para el próximo año"
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-black bg-opacity-70 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="text-sm text-gray-300">Orlando, FL</div>
                </div>
              </div>
              <p className="text-sm mb-4 italic">
                "Luis es el mejor, me arreglo el techo en julio y recomiendo para el próximo año"
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-black bg-opacity-70 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="text-sm text-gray-300">Miami, FL</div>
                </div>
              </div>
              <p className="text-sm mb-4 italic">
                "Luis es el mejor, me arreglo el techo en julio y recomiendo para el próximo año"
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}