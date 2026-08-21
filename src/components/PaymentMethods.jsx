import { useState } from "react";
import { FaBitcoin, FaCreditCard, FaLock, FaPaypal } from "react-icons/fa";

const methods = [
  { id: "paypal", label: "PayPal", icon: <FaPaypal /> },
  { id: "card", label: "Credit / Debit Card", icon: <FaCreditCard /> },
  { id: "binance", label: "Binance Pay", icon: <FaBitcoin /> },
  { id: "pesapal", label: "PesaPal", icon: <span className="pesapal-mark">P</span> },
];

function PaymentMethods() {
  const [method, setMethod] = useState("card");

  return (
    <section className="payment-panel edge-box" aria-label="Payment options">
      <div className="payment-heading">
        <div>
          <p className="eyebrow">PAYMENT OPTIONS</p>
          <h3>Choose how you want to pay.</h3>
          <p>These checkout layouts are ready to connect to the live merchant accounts later.</p>
        </div>
        <div className="payment-secure"><FaLock /> Secure checkout</div>
      </div>

      <div className="payment-methods">
        {methods.map((item) => (
          <button type="button" key={item.id} className={`payment-method ${method === item.id ? "active" : ""}`} onClick={() => setMethod(item.id)}>
            <span className="payment-method-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="payment-form">
        {method === "card" && (
          <div>
            <div className="payment-status">CARD CHECKOUT <span>Integration-ready</span></div>
            <div className="form-row">
              <div className="form-group"><label htmlFor="cardholder">Cardholder Name</label><input id="cardholder" placeholder="Name on card" autoComplete="cc-name" /></div>
              <div className="form-group"><label htmlFor="billing-email">Billing Email</label><input id="billing-email" type="email" placeholder="you@example.com" autoComplete="email" /></div>
            </div>
            <div className="form-group"><label htmlFor="card-number">Card Number</label><input id="card-number" inputMode="numeric" placeholder="1234 5678 9012 3456" autoComplete="cc-number" /></div>
            <div className="form-row three-fields">
              <div className="form-group"><label htmlFor="card-expiry">Expiry Date</label><input id="card-expiry" placeholder="MM / YY" autoComplete="cc-exp" /></div>
              <div className="form-group"><label htmlFor="card-cvv">CVV / CVC</label><input id="card-cvv" inputMode="numeric" placeholder="123" autoComplete="cc-csc" /></div>
              <div className="form-group"><label htmlFor="card-postal">Postal Code</label><input id="card-postal" placeholder="Postal code" autoComplete="postal-code" /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label htmlFor="billing-address">Billing Address</label><input id="billing-address" placeholder="Street / building" autoComplete="street-address" /></div>
              <div className="form-group"><label htmlFor="billing-country">Country</label><input id="billing-country" placeholder="Kenya" autoComplete="country-name" /></div>
            </div>
            <button type="button" className="booking-submit payment-submit">Pay securely with card</button>
            <small className="payment-note">When connected, sensitive card fields should be replaced with the payment provider's hosted fields so your site does not handle raw card data.</small>
          </div>
        )}

        {method === "paypal" && (
          <div>
            <div className="payment-status">PAYPAL CHECKOUT <span>Integration-ready</span></div>
            <div className="payment-account-card"><FaPaypal /><div><strong>Pay with PayPal</strong><span>Continue to your PayPal account for approval.</span></div></div>
            <div className="form-row"><div className="form-group"><label htmlFor="paypal-email">PayPal Email</label><input id="paypal-email" type="email" placeholder="you@example.com" /></div><div className="form-group"><label htmlFor="paypal-reference">Payment Reference</label><input id="paypal-reference" placeholder="Project / invoice reference" /></div></div>
            <button type="button" className="booking-submit payment-submit">Continue with PayPal</button>
          </div>
        )}

        {method === "binance" && (
          <div>
            <div className="payment-status">BINANCE PAY <span>Integration-ready</span></div>
            <div className="payment-account-card crypto"><FaBitcoin /><div><strong>Pay with Binance Pay</strong><span>Use your Binance Pay account or merchant QR flow when connected.</span></div></div>
            <div className="form-row"><div className="form-group"><label htmlFor="binance-id">Binance Pay ID / Email</label><input id="binance-id" placeholder="Binance account identifier" /></div><div className="form-group"><label htmlFor="binance-reference">Payment Reference</label><input id="binance-reference" placeholder="Project / invoice reference" /></div></div>
            <button type="button" className="booking-submit payment-submit">Continue to Binance Pay</button>
          </div>
        )}

        {method === "pesapal" && (
          <div>
            <div className="payment-status">PESAPAL CHECKOUT <span>Integration-ready</span></div>
            <div className="payment-account-card pesapal-card"><span className="pesapal-mark">P</span><div><strong>Pay with PesaPal</strong><span>Mobile money, cards and supported local payment methods can be connected here.</span></div></div>
            <div className="form-row"><div className="form-group"><label htmlFor="pesapal-phone">Phone Number</label><input id="pesapal-phone" type="tel" placeholder="+254..." /></div><div className="form-group"><label htmlFor="pesapal-email">Email</label><input id="pesapal-email" type="email" placeholder="you@example.com" /></div></div>
            <button type="button" className="booking-submit payment-submit">Continue to PesaPal</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PaymentMethods;
