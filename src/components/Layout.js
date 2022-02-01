import React from 'react';
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";

export default function Layout({ children }) {
  return(
      <>
        <title>Shardd Analytics</title>
        <main>
            {children}
        </main>
        <footer>
            <div className="contact">
              <h1>Shardd Analytics</h1>
              <h2>Connect with us</h2>
              <a href='mailto:contact@shardd.in'><MdMailOutline />contact@shardd.in</a>
              <p>Garvit Goswami:&emsp;&emsp;+91 76786 71314</p>
              <p>Pragyan Ojha:&emsp;&emsp;&emsp;+91 98217 84848</p>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright © {new Date().getFullYear()} Shardd Analytics All rights reserved.</p>
            </div>
        </footer>
      </>
  );
}
