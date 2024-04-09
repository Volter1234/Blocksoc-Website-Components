import React from "react";
import '../index.css';
import Lottie from "react-lottie";
import animationData from '../Animation - 1712669277429.json';
import animationData2 from '../Animation - 1712668446044.json';
import animationData3 from '../Animation - 1712669036650.json';

function AboutLandPage(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
<div id="steps" className="flex flex-col gap-6 container my-20 px-8">
            <h2 className="text-5xl sm:font-semibold mb-14 ml-7">About Us</h2>
            <div id="step1" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">1</span>
                    <h3 className="text-4xl">Who Are We?</h3>
                    <p className="text-lg font-light">We are the Blockchain Club of BPHC. Our enthusiasm for Blockchain Technology is matched only by our deep and unwavering dedication to exploring, learning about, and promoting blockchain among students. Through active involvement in discussions, projects, and initiatives within our club and the broader blockchain development community, we strive to foster understanding and innovation in this transformative field.</p>
                </div>
                <div className="pt-12">
                <Lottie 
	    options={defaultOptions3}
        height={300}
        width={400}
      />
                </div>
            </div>
            <div id="step2" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">2</span>
                    <h3 className="text-4xl">What Do We Do?</h3>
                    <p className="text-lg font-light">The Blockchain Club is involved in a spectrum of activities aimed at fostering understanding, education, and innovation within the blockchain ecosystem. Our initiatives include deploying smart contracts, conducting workshops, and researching Web3 technologies. We author articles that provide insights into blockchain advancements. </p>
                    
                </div>
                <div className="pt-12">
                <Lottie 
	    options={defaultOptions2}
        height={300}
        width={400}
      />
                </div>
            </div>
            <div id="step3" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">3</span>
                    <h3 className="text-4xl">Our Vision</h3>
                    <p className="text-lg font-light">We aim to foster a lively community where members can learn, collaborate, and innovate. By spreading awareness and understanding of blockchain technology, we empower individuals to explore its potential and enact positive change across industries. Through educational resources, collaborative projects, and events, we inspire our members to harness blockchain's transformative power. Together, we cultivate an environment where curiosity thrives, ideas flow freely, and impactful solutions emerge.</p>
                    
                </div>
                <div className="pt-12">
                <Lottie 
	    options={defaultOptions}
        height={300}
        width={400}
      />
                </div>
            </div>
        </div>);
};

export default AboutLandPage;