import React from 'react';

const Newsletter = () => {
    return (
      <>
        <section className="newsletter">
          <div className="content">
            <h3>Newsletter</h3>
            <p>Afla ultimele noutati din marketing sportiv.</p>
          </div>
          
            <form className="form-news">
              <input
                type="email"
                name
                placeholder="email"
                id="email"
                className="email"
              />
              <input type="submit" defaultValue="subscribe" className="btn" />
            </form>
        
        </section>
      </>
    );
}

export default Newsletter;
