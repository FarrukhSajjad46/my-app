import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">Services</h1>
      <p className="lg:w-1/2 w-full leading-relaxed ">A spectrum vast, a world of need,
                                                      Where expertise meets demand&apos;s heed.
                                                      From problem-solving to dreams to feed.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <Image src="/admin.png" alt="WEB DESIGN" width={24} height={24} />
          </div>
          <h2 className="text-lg font-medium title-font mb-2 ">WEB DEVELOPMENT</h2>
          <p className="leading-relaxed text-base "> Our web development services are tailored to bring your digital vision to life with stunning and functional websites and web applications. From conceptualization and design to development and deployment, we offer end-to-end solutions to meet your unique business needs. Our team of experienced developers specializes in crafting responsive, user-friendly websites using the latest technologies and best practices. Whether you need a simple portfolio site, an e-commerce platform, or a complex web application, we&apos;re here to turn your ideas into reality and deliver exceptional digital experiences that captivate your audience and drive results.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <Image src="/admin.png" alt="WEB DESIGN" width={24} height={24} />
          </div>
          <h2 className="text-lg font-medium title-font mb-2">MOBILE DEVELOPMENT</h2>
          <p className="leading-relaxed text-base">With our mobile development services, we empower businesses and entrepreneurs to harness the power of mobile technology and reach their target audience wherever they go. Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, our team has the expertise to bring your mobile app ideas to fruition. From initial concept and design to development and deployment, we work closely with you to create intuitive, feature-rich mobile applications that engage users and drive growth. With a focus on user experience, performance, and scalability, our mobile development services are designed to help you stand out in the competitive app market and achieve your business objectives.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
             <Image src="/admin.png" alt="WEB DESIGN" width={24} height={24} />
          </div>
          <h2 className="text-lg font-medium title-font mb-2">GRAPHIC DESIGN</h2>
          <p className="leading-relaxed text-base"> Our graphics designing services are dedicated to helping businesses and brands make a lasting impression with visually stunning and impactful designs. Whether you need a new logo, branding materials, marketing collateral, or digital artworks, our team of talented designers is here to bring your ideas to life. From concept development and visual identity creation to print and digital design, we offer a wide range of graphics designing services to meet your specific needs. With a keen eye for detail, creativity, and technical expertise, we strive to deliver designs that not only look great but also effectively communicate your message and elevate your brand image. Let us help you leave a lasting impression and stand out in today&apos;s crowded marketplace with our professional graphics designing services.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image src="/admin.png" alt="WEB DESIGN" width={24} height={24} />
          </div>
          <h2 className="text-lg font-medium title-font mb-2">CONTENT WRITING</h2>
          <p className="leading-relaxed text-base">Words woven with purpose, they dance and ignite,
                                                   Crafting narratives that shine bright.
                                                   Engaging minds, guiding thoughts with insight.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image src="/admin.png" alt="WEB DESIGN" width={24} height={24} />
          </div>
          <h2 className="text-lg font-medium title-font mb-2">LOGO DESIGN</h2>
          <p className="leading-relaxed text-base">In the realm of brand identity, it&apos;s the crown,
                                                   A symbol distilled, a message renowned.
                                                   Crafting emblems that make businesses astound.</p>
        </div>
      </div> 
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image src="/admin.png" alt="WEB DESIGN" width={24} height={24} />
          </div>
          <h2 className="text-lg font-medium title-font mb-2">WEBSITE DESIGN</h2>
          <p className="leading-relaxed text-base">Crafting digital landscapes with finesse,
                                                   Where user experience meets aesthetic impress.
                                                   Navigating pixels to create online success.</p>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
  )
}

export default page