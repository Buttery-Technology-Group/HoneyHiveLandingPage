import React, { useEffect } from "react";
import "./style.css";
import {
    scrollHeader,
    initAccordion,
    animateTitle,
    initScrollAnimations
  } from './script/init';

const App = () => {
  useEffect(() => {
    // Se houver scripts inline no HTML original, adapte-os aqui
    scrollHeader();
    initAccordion();
    animateTitle();
    /*initScrollAnimations();*/
  }, []);

  return (

    <>
    <header>
    <nav className="">
        <div className="logo flex-center" >
            <a href="#">
                <img src="svg/logo-honey2.svg" className=""  alt="" loading="lazy" />
            </a>
        </div>

        <div className="flex-center">
            <div className="mr-2">
                <a href="" className="link">Login</a>
            </div>
            <div>
                <a href="" className="btn-small">Get started</a>
            </div>
        </div>
    </nav>
</header>


    <section className="container hero flex-center">
        <div className="row">
            <div className="grid-1"></div>
            <div className="grid-10 flex-center flex-column">
                <div className="circle-gradient"></div>
                <div>
                    <h1 className="text-center ml11 mt-2">
                        <span className="text-wrapper ">
                            <span className="line line1"></span>
                            <span className="letters">
                                Disrupt the future with the <br /> first distributed AI
                            </span>
                        </span>
                    </h1>
                </div>
                <div>
                    <p className="text-center mt-3" style={{ maxWidth: "640px" }}>
                        Build, grow, or integrate AI into your business with 
                        Honey so fast it'll feel buttery smooth. Honey is the 
                        only platform for both online and enterprise customers 
                        where transparency, privacy, and trust are metrics you 
                        can verify. Oh, and did we say it's super fast? Yeah, 
                        it's super fast.
                    </p>
                </div>
                
                <div className="flex-start-row mt-4">
                    <div>
                        <a href="#" className="btn">Get started for free</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>





    <section className="container" id="section-2">
    <div className="row">
        <div className="grid-8">
            <h6 className="uppercase h7 color-primary">We are HONEY</h6>
            <h2>What About <span className="color-gradient3">Honey?</span> </h2>
            <h4 className="color-gray mt-4">
                Honey is a distributed AI platform that connects 
                intelligence systems, offering scalability, transparency, 
                and real-time control for businesses.
            </h4>
        </div>
    </div>
    <div className="row">
        <div className="grid-8">
            <div className="flex-start-row">
                <div>
                    <h1 className="h0 color-gradient4">01</h1>
                </div>
                <div className="ml-3">
                    <h3>Distributed AI Platform</h3>
                    <p className="mt-1" style={{ maxWidth: "540px" }}>
                        Honey connects multiple AI systems (nodes) in a 
                        scalable and secure network, enabling seamless 
                        interaction and collaboration across different environments.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="grid-2 disappear"></div>
        <div className="grid-8">
            <div className="flex-start-row">
                <div>
                    <h1 className="h0 color-gradient3">02</h1>
                </div>
                <div className="ml-3">
                    <h3>Real-Time Governance and Control</h3>
                    <p className="mt-1" style={{ maxWidth: "540px" }}>
                        With built-in governance tools, Honey ensures 
                        real-time monitoring, auditing, and compliance, 
                        giving you full transparency and security in 
                        all AI operations.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="grid-4 disappear"></div>
        <div className="grid-8">
            <div className="flex-start-row">
                <div>
                    <h1 className="h0 color-gradient">03</h1>
                </div>
                <div className="ml-3">
                    <h3>Cost-Efficient with Maximized ROI</h3>
                    <p className="mt-1" style={{ maxWidth: "540px" }}>
                        Honey simplifies the complexities of AI deployment, 
                        reducing overhead and upfront costs, and delivering 
                        measurable ROI for businesses of any size.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="grid-2 disappear"></div>
        <div className="grid-8">
            <div className="flex-start-row">
                <div>
                    <h1 className="h0 color-gradient4">04</h1>
                </div>
                <div className="ml-3">
                    <h3>Scalable and Flexible</h3>
                    <p className="mt-1" style={{ maxWidth: "540px" }}>
                        Easily scale your AI infrastructure by adding new 
                        nodes or integrating existing systems, all while 
                        maintaining consistent performance and connectivity.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>






<section className="container" id="section-3">
    <div className="row">
        <div className="grid-2 disappear"></div>
        <div className="grid-8">
            <h6 className="uppercase h7 text-center color-primary">Do more, faster, verifiably, and securely.</h6>
            <h2 className="text-center">
                Honey was built for <span className="color-gradient">you</span>
            </h2>
            <p className="text-center mt-2">
                Honey helps you get stuff done quickly and efficiently. 
                This is because Honey stays in constant communication with 
                the Hive, which means its intelligence, contextual awareness, 
                and understanding grow more organically, such as when nodes 
                with new or improved functionality get connected to the Hive. 
                Enterprise customers gain a clearer path to ROI than through 
                traditional LLMs, both short-term and long-term.
            </p>

            <img src="svg/fig3_honey.webp" className="mt-5" alt="" loading="lazy" />
        </div>
    </div>
    <div className="row">
        <div className="grid-3">
            <figure className="bg-icon">
                <img src="svg/icon-flash.svg" alt="" loading="lazy"  />
            </figure>
            <h5 className="mt-2">Accelerated Task</h5>
            <p className="mt-3">
                Honey helps you get things done quickly and efficiently, 
                enabling you to focus on what matters most without 
                technology slowing you down.
            </p>
        </div>

        <div className="grid-3">
            <figure className="bg-icon">
                <img src="svg/icon-grid.svg" alt="" loading="lazy" />
            </figure>
            <h5 className="mt-2">Connected Intelligence</h5>
            <p className="mt-3">
                Through constant communication with the Hive, Honey 
                grows in intelligence and contextual understanding as new, 
                improved nodes join the system.
            </p>
        </div>

        <div className="grid-3">
            <figure className="bg-icon">
                <img src="svg/icon-graph.svg" alt="" loading="lazy"  />
            </figure>
            <h5 className="mt-2">ROI for Enterprises</h5>
            <p className="mt-3">
                With Honey, enterprise customers have a more straightforward 
                path to ROI—both for immediate and future goals—compared to 
                traditional models.
            </p>
        </div>

        <div className="grid-3">
            <figure className="bg-icon">
                <img src="svg/icon-idea.svg" alt="" loading="lazy" />
            </figure>
            <h5 className="mt-2">Core Technology</h5>
            <p className="mt-3">
                Honey provides a comprehensive suite of governance tools 
                and technologies, allowing you to build and improve AI 
                functionality effortlessly.
            </p>
        </div>
    </div>
</section>




<section className="container" id="section-4">
    <div className="row">
        <div className="grid-6">
            <h6 className="uppercase h7 color-primary">Do more, faster, verifiably, and securely.</h6>
            <h2>AI that <span className="color-gradient">transforms</span> reality</h2>
            <p className="mt-2">
                Honey is the first distributed AI platform that combines 
                simplicity with power. Built for companies looking for a 
                flexible scalable system that's trustworthy and secure, 
                Honey makes it easy to connect different AIs. Whether 
                locally over a secure intranet or in remote locations, 
                Honey provides the backbone for a continuous flow of 
                communication and information. Its core constantly 
                verifies the reliability and safety of all interactions, 
                ensuring that decisions are based on solid, verifiable data.
            </p>
            <div className="row">
                <div className="grid-6">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <figure className="bg-icon">
                        <img src="svg/icon-check.svg" alt="" loading="lazy" />
                    </figure>
                    <h5 className="mt-2">Simple, Powerful, and Distributed</h5>
                    <p className="mt-3">
                        Honey connects your AIs with ease, offering a 
                        secure, scalable platform built for flexibility.
                    </p>
                </div>
                <div className="grid-6">
                    <figure className="bg-icon">
                        <img src="svg/exchange-line.svg" alt="" loading="lazy" />
                    </figure>
                    <h5 className="mt-2">Reliable and Secure Communication</h5>
                    <p className="mt-3">
                        With continuous data checks, Honey ensures every 
                        interaction is safe, accurate, and based on solid insights.
                    </p>
                </div>
            </div>
            
        </div>
        <div className="grid-6">
            <img src="svg/fig3-honey.svg" alt="" loading="lazy"  />
        </div>
    </div>

    <div className="row bt-black">
        <div className="grid-1">
            <img src="svg/logo-honey.svg" className="icon" alt="" loading="lazy"  />
        </div>
        <div className="grid-5">
            <h4>Empowering AI, Simplified.</h4>
        </div>
        <div className="grid-3">
            <p>
                Transform your AI potential with Honey
            </p>
        </div>
        <div className="grid-3">
            <a href="#" className="btn">Get started for free</a>
        </div>
    </div>
</section>





<section className="container" id="section-5">
    <div className="row">
        <div className="grid-6">
            <h6 className="uppercase h7 color-primary">Trust the source, by defining the truth.</h6>
            <h2 className="mt-1"><span className="color-gradient">Define</span> the narrative.</h2>

            <p className="mt-2">
                Honey is always making sure those connected to the Hive 
                are communicating against known sources-of-truth and 
                evaluating their trustworthiness. This gives greater 
                control and security for the Honey platform. 
                Enterprise customers get even deeper control through 
                customizing the sources-of-truth Honey uses for their Hive.
            </p>
            
            <a href="#" className="btn mt-3">Start defining truth</a>
            
        </div>
        <div className="grid-6">
            <img src="svg/fig2-honey.webp" className="mt-4" style={{borderRadius: '16px'}} alt="" loading="lazy" />
        </div>
    </div>
</section>




<section className="container" id="section-6">
    <div className="row">
        <div className="grid-5">
            <div>
                <h6 className="uppercase h7 color-primary">faq</h6>
            </div>
            <div>
                <h2 className="mt-1"><span className="color-gradient">Questions?</span></h2>
            </div>
            <div>
                <p className="mt-5">
                    Build, grow, or integrate AI into your business with 
                    Honey so fast it'll feel buttery smooth. Honey is 
                    the only platform for both online and enterprise 
                    customers where transparency, privacy, and trust 
                    are metrics you can verify. Oh, and did we say 
                    it's super fast? Yeah, it's super fast.
                </p>
            </div>
            <div>
                <h5 className="color-primary mt-4">Still have questions? Let's talk.</h5>
            </div>
        </div>
        <div className="grid-1 disappear"></div>
        <div className="grid-6">
            <div className="accordion my-1 py-1">
                <button type="button" className="accordion-button"> 
                    <h6 className="pr-2">What makes Honey different from traditional AI solutions?</h6> 
                </button>
                <div className="accordion-content">
                    <p className="py-3 px-3">
                        Honey is the world's first distributed AI platform, 
                        designed to connect multiple AI systems, or "nodes," 
                        in a flexible and scalable network. Unlike traditional
                        AI, Honey provides real-time governance, transparency, 
                        and seamless scalability, enabling intelligent, 
                        interconnected AI solutions across diverse business
                        environments.
                    </p>
                </div>

                <button type="button" className="accordion-button"> 
                    <h6 className="pr-2">How does Honey ensure transparency in AI operations?</h6> 
                </button>
                <div className="accordion-content">
                    <p className="py-3 px-3">
                        Honey features a unique visual audit trail that 
                        allows users to see each decision-making process 
                        in real time. This auditability ensures every 
                        interaction is documented and transparent, so you 
                        can trust and verify your AI's outputs.
                    </p>
                </div>

                <button type="button" className="accordion-button"> 
                    <h6 className="pr-2">Can I integrate my existing AI systems with Honey?</h6> 
                </button>
                <div className="accordion-content">
                    <p className="py-3 px-3">
                        Yes, Honey is designed for easy integration. You 
                        can convert existing AI models into Honey nodes 
                        or connect them directly using our robust API, 
                        making it simple to bring your current AI setup 
                        into the Honey network.
                    </p>
                </div>

                <button type="button" className="accordion-button"> 
                    <h6 className="pr-2">What kind of businesses benefit most from Honey?</h6> 
                </button>
                <div className="accordion-content">
                    <p className="py-3 px-3">
                        Honey is ideal for companies looking for scalable, 
                        secure, and transparent AI solutions—especially 
                        those in sectors like finance, healthcare, 
                        manufacturing, and any business needing reliable, 
                        interconnected AI systems.
                    </p>
                </div>

                <button type="button" className="accordion-button"> 
                    <h6 className="pr-2">What security features does Honey offer?</h6> 
                </button>
                <div className="accordion-content">
                    <p className="py-3 px-3">
                        Honey provides deep governance controls and a 
                        unique certification of each interaction for 
                        data security. Every AI decision is traceable 
                        and documented, giving businesses a safe 
                        environment with high data protection standards.
                    </p>
                </div>

                <button type="button" className="accordion-button"> 
                    <h6 className="pr-2">Is Honey suitable for both small and large-scale AI deployments?</h6> 
                </button>
                <div className="accordion-content">
                    <p className="py-3 px-3">
                        Absolutely. Honey's scalable framework is adaptable 
                        for both small projects and large, complex AI 
                        infrastructures, making it an ideal solution for
                        businesses of all sizes seeking flexible AI capabilities.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>




<div className="relative hidden">

    {/* 
    <div className="bg-cta">
        <img src="svg/bg-cta.svg" alt="" loading="lazy" onLoad="SVGInject(this)" />
    </div>
    */}

    <div className="div-bg-cta2">
        <img src="svg/bg-cta2.svg" className="bg-cta2" alt="" loading="lazy"  />
    </div>

    <section className="container cta-final flex-center">

        <div className="row w-100">
            <div className="grid-2"></div>
            <div className="grid-8 flex-center flex-column">
                <h6 className="uppercase h7 color-primary">Trust the source, by defining the truth.</h6>
                <h2><span className="color-gradient4">Join</span> Honey today!</h2>
            
                <div className="flex-start-row mt-4">
                    <div className="mr-2">
                        <a href="#" className="link">Login</a>
                    </div>
                    <div>
                        <a href="#" className="btn">Get started for free</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>



<div style={{ backgroundColor: '#F9D24A' }}>

    <footer className="container pt-0 pb-3" style={{ border: '1px solid transparent' }}>
        <div className="row">
            <div className="grid-3">
                <img src="svg/logo-honey-text.svg" className="icon-xl" alt="" loading="lazy"  />
            </div>
            <div className="grid-4">
                <h6 className="color-black">Address</h6>
                <p className="mt-1">603 Main Street, Hudson, MA 01749</p>
            </div>
            <div className="grid-4">
                <h6 className="color-black">Contact</h6>
                <p className="mt-1">+1 (978) 493-3562</p>
                <p>buttery@mail.com</p>
            </div>
        </div>

        <div className="row bt-black">
            <div className="grid-4">
                <h6 className="h8">© 2025 Buttery Technology Inc.</h6>
            </div>
            <div className="grid-4">
                
            </div>
            <div className="grid-4">
                <div className="row">
                    <div className="grid-6 my-0 py-0">
                        <a href="#">
                            <h6 className="h8 text-right">Privacy&nbsp;Policy</h6>
                        </a>
                    </div>
                    <div className="grid-6 my-0 py-0">
                        <a href="#">
                            <h6 className="h8 text-right">Terms&nbsp;of&nbsp;Service</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>









</>







  );
};

export default App;

