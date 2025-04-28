import React from 'react'

function Offer() {
  return (
    <div>
   <section class="search-sec">
    
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Days</option>
                                <option>1 Day</option>
                                <option>2 Day</option>
                                <option>3 Day</option>
                                <option>4 Day</option>
                                <option>5 Day</option>
                                <option>6 Day</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="date" class="form-control search-slt" placeholder="Date"/>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Place</option>
                                <option>Chennai</option>
                                <option>Madurai</option>
                                <option>Thrichy</option>
                                <option>Triunelveli</option>
                                <option>Tuticorin</option>
                                <option>Karaikudi</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
   
</section>


    </div>
  )
}

export default Offer