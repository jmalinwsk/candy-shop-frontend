import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Meta from "../components/Meta";
import TableOfContents from "../components/TableOfContents";
import SectionContainer from "../components/SectionContainer";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy - Candy Shop"} />
      <Breadcrumbs />
      <TableOfContents />
      <SectionContainer className="shipping-policy-wrapper py-3">
        <div className="col-12">
          <h3 className="section-heading" id="shipping-policy">
            Shipping Policy
          </h3>
          <p className="text-justify">
            samplepage.com is committed to excellence, and the full satisfaction
            of our customers.
          </p>
          <p className="text-justify">
            samplepage.com proudly offers shipping services. Be assured we are
            doing everything in our power to get your order to you as soon as
            possible. Please consider any holidays that might impact delivery
            times. samplepage.com also offers same day dispatch.
          </p>
          <h3 className="section-heading" id="shipping-shipping">
            Shipping
          </h3>
          <p className="text-justify">
            All orders for our products are processed and shipped out in 4-10
            business days. Orders are not shipped or delivered on weekends or
            holidays. If we are experiencing a high volume of orders, shipments
            may be delayed by a few days. Please allow additional days in
            transit for delivery. If there will be a significant delay in the
            shipment of your order, we will contact you via email.
          </p>
          <h3 className="section-heading" id="shipping-wrong-address">
            Wrong Address Disclaimer
          </h3>
          <p className="text-justify">
            It is the responsibility of the customers to make sure that the
            shipping address entered is correct. We do our best to speed up
            processing and shipping time, so there is always a small window to
            correct an incorrect shipping address. Please contact us immediately
            if you believe you have provided an incorrect shipping address.
          </p>
          <h3 className="section-heading" id="shipping-undeliverable-orders">
            Undeliverable Orders
          </h3>
          <p className="text-justify">
            Orders that are returned to us as undeliverable because of incorrect
            shipping information are subject to a restocking fee to be
            determined by us.
          </p>
          <h3 className="section-heading" id="shipping-lost-package">
            Lost/Stolen Packages
          </h3>
          <p className="text-justify">
            samplepage.com is not responsible for lost or stolen packages. If
            your tracking information states that your package was delivered to
            your address and you have not received it, please report to the
            local authorities.
          </p>
          <h3 className="section-heading" id="shipping-return">
            Return Request Days
          </h3>
          <p className="text-justify">
            samplepage.com allows you to return its item (s) within a period of
            14 days. Kindly be advised that the item (s) should be returned
            unopened and unused.
          </p>
          <h3 className="section-heading" id="shipping-out-of-stock">
            Out Of Stock Item Process
          </h3>
          <p className="text-justify">
            In case of out-of-stock, samplepage.com Wait for all items to be in
            stock before dispatching.
          </p>
          <h3 className="section-heading" id="shipping-taxes">
            Import Duty and Taxes
          </h3>
          <p className="text-justify">
            When working with samplepage.com, you have the following options
            when it comes to taxes as well and import taxes: customer will need
            to settle fees when arriving in destination country.
          </p>
          <h3 className="section-heading" id="shipping-acceptance">
            Acceptance
          </h3>
          <p className="text-justify">
            By accessing our site and placing an order you have willingly
            accepted the terms of this Shipping Policy.
          </p>
          <h3 className="section-heading" id="shipping-contact">
            Contact
          </h3>
          <p className="text-justify">
            In the event you have any questions or comments please reach us via
            the following contacts:
          </p>
          <p className="text-justify">Email - contact@example.com</p>
        </div>
      </SectionContainer>
    </>
  );
};

export default ShippingPolicy;
