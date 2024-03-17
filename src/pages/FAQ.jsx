import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Meta from "../components/Meta";
import TableOfContents from "../components/TableOfContents";

const FAQ = () => {
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <>
      <Meta title={"FAQ - Candy Shop"} />
      <Breadcrumbs /> 
      <TableOfContents />
      <div className="faq-wrapper py-3">
        <div className="container-xxl">
          <main>
            <h3 id="general-questions">General questions</h3>
            <h4 id="order-status">What is the status of my order?</h4>
            <p>{sampleText}</p>
            <h4 id="order-change">Can I change my order?</h4>
            <p>{sampleText}</p>
            <h4 id="order-shipment">Where do you ship?</h4>
            <p>{sampleText}</p>
            <h4 id="order-waiting">How long does it take to ship my order?</h4>
            <p>{sampleText}</p>
            <h3 id="payment">Payment</h3>
            <h4 id="payment-method">What payment methods do you accept?</h4>
            <p>{sampleText}</p>
            <h4 id="payment-currency">Which currency will I be charged in?</h4>
            <p>{sampleText}</p>
            <h3 id="shipping">Shipping</h3>
            <h4 id="shipping-where">Where do you ship?</h4>
            <p>{sampleText}</p>
            <h4 id="shipping-howlong">
              How long does it take to ship my order?
            </h4>
            <p>{sampleText}</p>
            <h4 id="shipping-fast">Do you offer fast shipping?</h4>
            <p>{sampleText}</p>
            <h4 id="shipping-tracking">How can I track my package?</h4>
            <p>{sampleText}</p>
            <h4 id="shipping-nothome">What if I'm not home?</h4>
            <p>{sampleText}</p>
            <h4 id="shipping-taxes">
              Will I pay taxes for international shipping?
            </h4>
            <p>{sampleText}</p>
            <h3 id="returns">Returns</h3>
            <h4 id="returns-acceptation">Do you accept returns?</h4>
            <p>{sampleText}</p>
            <h4 id="returns-exchange">Can I exchange an item?</h4>
            <p>{sampleText}</p>
            <h4 id="returns-free">Are returns free?</h4>
            <p>{sampleText}</p>
            <h4 id="returns-howlong">
              How long does it take to process a return?
            </h4>
            <p>{sampleText}</p>
            <h3 id="other-questions">Other questions</h3>
            <h4 id="other-referralprogram">
              Do you offer a referral program? How does it work?
            </h4>
            <p>{sampleText}</p>
            <h4 id="other-physicalstores">Do you have physical stores?</h4>
            <p>{sampleText}</p>
            <h4 id="other-warranty">Is there a warranty?</h4>
            <p>{sampleText}</p>
            <h4 id="other-return-howlong">
              How long does it take to process a return?
            </h4>
            <p>{sampleText}</p>
          </main>
        </div>
      </div>
    </>
  );
};

export default FAQ;
