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
            <h3 className="section-heading" id="faq-general-questions">
              General questions
            </h3>
            <h4 className="subsection-heading" id="faq-order-status">
              What is the status of my order?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-order-change">
              Can I change my order?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-order-shipment">
              Where do you ship?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-order-waiting">
              How long does it take to ship my order?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h3 className="section-heading" id="faq-payment">
              Payment
            </h3>
            <h4 className="subsection-heading" id="faq-payment-method">
              What payment methods do you accept?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-payment-currency">
              Which currency will I be charged in?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h3 className="section-heading" id="faq-shipping">
              Shipping
            </h3>
            <h4 className="subsection-heading" id="faq-shipping-where">
              Where do you ship?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-shipping-howlong">
              How long does it take to ship my order?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-shipping-fast">
              Do you offer fast shipping?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-shipping-tracking">
              How can I track my package?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-shipping-nothome">
              What if I'm not home?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-shipping-taxes">
              Will I pay taxes for international shipping?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h3 className="section-heading" id="faq-returns">
              Returns
            </h3>
            <h4 className="subsection-heading" id="faq-returns-acceptation">
              Do you accept returns?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-returns-exchange">
              Can I exchange an item?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-returns-free">
              Are returns free?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-returns-howlong">
              How long does it take to process a return?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h3 className="section-heading" id="faq-other-questions">
              Other questions
            </h3>
            <h4 className="subsection-heading" id="faq-other-referralprogram">
              Do you offer a referral program? How does it work?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-other-physicalstores">
              Do you have physical stores?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-other-warranty">
              Is there a warranty?
            </h4>
            <p className="text-justify">{sampleText}</p>
            <h4 className="subsection-heading" id="faq-other-return-howlong">
              How long does it take to process a return?
            </h4>
            <p className="text-justify">{sampleText}</p>
          </main>
        </div>
      </div>
    </>
  );
};

export default FAQ;
