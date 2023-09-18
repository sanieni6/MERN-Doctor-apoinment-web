import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import aboutCardImg from "../../assets/images/about-card.png";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div
              className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] 
        lg:right-[22%]"
            >
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* About content */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
                For 30 years in a row, U.S. News & World Repor has recognized us as one of
                the best publics hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae quos excepturi corrupti saepe quaerat modi? Placeat quasi corrupti iste dolores? 
                Nam reiciendis aperiam ad odio dolores architecto ducimus laborum voluptates.
            </p>

            <p className="text__para mt-[30px]">
                Our best is something we strive for each day, caring for our
                patients-not looking back at what we accomplished but towards what
                we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, totam?
            </p>

            <Link to="/">
            <button className="btn">Learn More</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
