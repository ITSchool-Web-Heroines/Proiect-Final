import React from 'react';
import Link from 'next/link';

const Credit = () => {
  return (
    <>
      <section className="credit">
        <p>
          Website Realizat de <span>Ana Maria Pacurar</span>{" "}
        </p>
        <div className="share">
          <Link href="https://www.facebook.com/motionmarketingagency" className="fab fa-facebook-f" />
          <Link href="https://www.instagram.com/motionagency.mkt/" className="fab fa-twitter" />
          <Link href="#https://www.instagram.com/motionagency.mkt/" className="fab fa-instagram" />

        </div>
      </section>
    </>
  );
}

export default Credit;
