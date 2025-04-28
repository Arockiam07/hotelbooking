import React from 'react'

function Amount() {
  return (
    <div>
        <section id="pricing" class="our_pricing section-padding">
	<div class="container">
		<div class="row">
			<div class="section-title text-center">
				<h1 class="section-title-white">Pricing plan</h1>
				<p class="section-title-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
			</div>				
			<div class="col-xs-12 col-sm-4 col-lg-4">
				<div class="pricingTable pricingTable-2">
					<div class="pricingTable-header">
						<h3 class="title">Standard</h3>
						<h5 class="price-month">Per Month</h5>
						<h1 class="price-value">30 <span class="value-bg">₹3,000</span></h1>							
					</div>
					<ul class="pricing-content">
						<li>Free Room</li>
						<li>Free Guide</li>
						<li>Free Food</li>
						{/* <li>Unlimited Support</li> */}
					</ul>
					<a href="#" class="btn btn-lg btn-price-bg">BOOKING</a>
				</div>
			</div>
			<div class="col-xs-12 col-sm-4 col-lg-4">
				<div class="pricingTable pricingTabletop pricingTable-2">
					<div class="pricingTable-header">
						<h3 class="title">Business</h3>
						<h5 class="price-month">Per Month</h5>
						<h1 class="price-value">60 <span class="value-bg">₹6,000</span></h1>		
					</div>
					<ul class="pricing-content">
						<li>Free Rooms</li>
						<li>Free Guide</li>
						<li>Free Foods</li>
						{/* <li>Free </li> */}
					</ul>
					<a href="#" class="btn btn-lg btn-price-bg">BOOKING</a>
				</div>
			</div>
			<div class="col-xs-12 col-sm-4 col-lg-4">
				<div class="pricingTable pricingTable-2">
					<div class="pricingTable-header">
						<h3 class="title">Premium</h3>
						<h5 class="price-month">Per Month</h5>
						<h1 class="price-value">90 <span class="value-bg">₹9,000</span></h1>		
					</div>
					<ul class="pricing-content">
					<li>Free Rooms</li>
						<li>Free Guide</li>
						<li>Free Foods</li>
						{/* <li>Unlimited Support</li> */}
					</ul>
					<a href="#" class="btn btn-lg btn-price-bg">BOOKING</a>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Amount