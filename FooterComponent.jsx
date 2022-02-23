import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
            <footer class="bg-light">
     <div class="container py-5">
         <div class="row py-3">
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">About</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="https://craftknowledge.com/contact-us" class="text-muted">Contact Us</a></li>
                     <li class="mb-2"><a href="https://craftknowledge.com/about-us" class="text-muted">About Us</a></li>
                     <li class="mb-2"><a href="info@craftknowledge.net" class="text-muted">Email Address</a></li>
                     <li class="mb-2"><a href="https://craftknowledge.com/faqs" class="text-muted">FAQ's</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Help</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" class="text-muted"></a></li>
                     <li class="mb-2"><a href="https://www.craftknowledge.net/aboutus/" class="text-muted">Who we are?</a></li>
                     <li class="mb-2"><a href="https://www.craftknowledge.net/register/" class="text-muted">Register</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Websites</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="https://craftknowledge.com/" class="text-muted">Craft Knowledge LMS</a></li>
                     <li class="mb-2"><a href="https://craftcall.io/" class="text-muted">Craft Call</a></li>
                     <li class="mb-2"><a href="https://www.craftknowledge.net/" class="text-muted">Craft Knowledge</a></li>
                     <li class="mb-2"><a href="http://api.icraftsoft.net/web/" class="text-muted">Craft Software</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Course</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="https://craftknowledge.com/course-learning" class="text-muted">Course Learning</a></li>
                     <li class="mb-2"><a href="https://craftknowledge.com/catalog" class="text-muted">Course Catalog</a></li>
                     <li class="mb-2"><a href="https://craftknowledge.com/index" class="text-muted">Sitemap</a></li>
                     <li class="mb-2"><a href="https://www.craftknowledge.net/our-programs/" class="text-muted">Our Programs</a></li>
                 </ul>
             </div>
             <div class="col-lg-4 col-md-6 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Registered Office Telephone</h6>
                 <p class="text-muted mb-4">Telephone support is available to customers at +1-888-479-2142.</p>
                 <ul class="list-inline mt-4">
                     <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-2x fa-twitter"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-2x fa-facebook-f"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-2x fa-instagram"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="youtube"><i class="fa fa-2x fa-youtube"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-2x fa-google"></i></a></li>
                 </ul>
             </div>
         </div>
     </div>
     <hr class="p-0 m-0 b-0"/>
     <div class="bg-light py-2">
         <div class="container text-center">
             <p class="text-muted mb-0 py-2">Copyright © 2022 CraftKnowledge.com Limited and its affiliated companies. All rights reserved.</p>
         </div>
     </div>
 </footer>
            </div>
        )
    }
}

export default FooterComponent
