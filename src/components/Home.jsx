import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillAmazonCircle,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
      {" "}
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability i children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            cupiditate amet expedita labore dolores sapiente! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Assumenda velit fuga
            consectetur commodi iste excepturi, qui rerum nisi sapiente aliquid
            beatae accusamus earum, atque a mollitia ut hic? Magnam, obcaecati.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            nam, similique ut rerum sunt sed incidunt in totam, enim cum numquam
            ex cupiditate. Deserunt laborum eum quo hic ducimus suscipit.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
