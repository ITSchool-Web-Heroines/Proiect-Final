import Link from 'next/link';
import React from 'react'

export default function BlogCardFull() {
  return (
    <>
      <div className="col-12 px-4">
        <div className="row card-full border rounded-4 overflow-hidden">
          <div className="col-md-8 p-0">
            <div className="w-100">
              <img className="card-image" src={"/images/blog1.webp"} />
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="bg-blog-content p-3 p-md-5 ">
              <Link href="/blog">
                <a>
                  <h5 className="text-uppercase travel-guide">Travel Guide</h5>
                  <div className="card-date">3/31/21</div>
                  <h1 className="blog-title mt-3">
                    Virtual Tours - Ways to Travel From Home
                  </h1>
                  <div className="card-text">
                    Virtual tours can open up amazing and awe-insppiring
                    locations around the world that may otherwise be inaccesible
                    to you. You can experience the majesty of the ...
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
