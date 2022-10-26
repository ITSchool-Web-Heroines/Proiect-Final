import Link from 'next/link';
import React from 'react'

export default function BlogCardFull() {
  return (
    <>
      <div className="col-12 px-4">
        <div className="row card-full border rounded-4 overflow-hidden">
          <div className="col-md-8 p-0">
            <div className="w-100">
              <img className="card-image" src={"/images/blog2.jpg"} />
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="bg-blog-content p-3 p-md-5 ">
              <a href="/blog">
                <a>
                  <h5 className="text-uppercase mk-guide">Strategii de Marketing Sportiv</h5>
                  <div className="card-date">3/31/21</div>
                  <h1 className="blog-title mt-3">

                  </h1>
                  <div className="card-text">
                    Ce sunt strategiile de marketing sporiv? Cand vorbim de marketing sportiv ne referim la...
                  </div>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
