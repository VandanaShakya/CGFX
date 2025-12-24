import React from 'react'

const RiskDisclouser = () => {
  return (
    <>
         <section className="bg-gray-100 py-32 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Overview
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-8">
          The following statements are intended to inform the Customer of the potential
          risks involved in trading on financial markets. Customers should be aware of
          the potential losses associated with such risks. This document forms an integral
          part of the Agreement between the Company and the Customer.
        </p>

        {/* Section */}
        <div className="space-y-8 text-gray-800 text-sm md:text-base leading-relaxed">

          <p>
            This document cannot disclose all risks involved in trading and other
            significant aspects of Foreign Exchange Trading (FOREX) due to the wide range
            of feasible situations. FOREX is highly speculative and is only suitable for
            Customers who understand and are willing to assume the economic, legal, and
            other risks involved, and are financially able to assume losses up to or in
            excess of Margin or Deposits.
          </p>

          <p>
            No return is guaranteed. Future returns may differ from past returns and
            investors may lose some or all of their money invested. No regulatory
            authority has vouched for the reliability or financial soundness of the
            products offered.
          </p>

          {/* Section Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            1. No Advice
          </h2>

          <p>
            SGFX offers an execution-only service. We do not provide investment, legal,
            regulatory, tax or other advice. Any decision to trade is made solely by you.
            You may wish to seek independent advice before entering any transaction.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Our Products and Services
          </h2>

          <p>
            We offer execution-only services and CFDs across a wide range of underlying
            markets. The characteristics of our products may differ substantially from
            the actual underlying instruments.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            2. Risk Statements
          </h2>

          <p>
            Online trading involves substantial risk. Customers may lose part or all of
            their invested funds. You should not risk more than you are prepared to lose.
            We do not assess whether a product is appropriate for your experience or
            knowledge level.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Investment Specific Risks
          </h2>

          <p>
            You should not trade margined products unless you fully understand the risks
            and have sufficient resources to meet margin obligations in adverse market
            conditions.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            3. Effect of Leverage
          </h2>

          <p>
            Leverage magnifies both profits and losses. Small market movements may result
            in substantial gains or losses, potentially exceeding deposits and margin.
          </p>

          <p>
            You must maintain sufficient account balance at all times. Failure to meet
            margin requirements may result in forced liquidation of positions.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Margin Calls and Close Outs
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Deposit additional funds immediately</li>
            <li>Close one or more open positions</li>
            <li>Combination of both actions</li>
          </ul>

          <p>
            SGFX is not obligated to notify you of margin levels. You are responsible for
            monitoring your account.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Limit and Stop Orders
          </h2>

          <p>
            Limit and stop orders may reduce risk but do not guarantee execution at the
            requested price, especially during volatile market conditions.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Technical Risks
          </h2>

          <p>
            Online trading systems may fail due to hardware, software, internet, or
            communication errors, resulting in loss of opportunity or financial loss.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Trading Platform Risks
          </h2>

          <p>
            Delays, slippage, transmission failures, and liquidity gaps may impact order
            execution prices and timing.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Volatility Risk
          </h2>

          <p>
            Foreign exchange markets are highly volatile. Rapid price movements can
            result in significant losses beyond deposited funds.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Automated & Algorithmic Trading
          </h2>

          <p>
            SGFX strictly prohibits the use of automated or algorithmic trading tools.
            Any violation may result in account suspension, closure, or profit reversal.
          </p>

          <p className="font-medium">
            By trading with SGFX, you acknowledge that you understand and accept all
            risks involved and that you are financially capable of assuming these risks.
          </p>

        </div>
      </div>
    </section>
    </>
  )
}

export default RiskDisclouser