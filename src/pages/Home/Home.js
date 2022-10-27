import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';


const Home = () => {
    const [blogs, setBlogs]= useState('')

    useEffect(()=>{
        const fetchBlogs = async ()=>{
            const response= await fetch('api/blogs')
            const json = await response.json ()

            if (response.ok){
                setBlogs(json)
            }

        }
        fetchBlogs()
    }, [])
    

	return (  
        
            <body>
                <main>
                    <section class="blog_area section-padding pt-2">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 mb-5 mb-lg-0">
                                    <div class="blog_left_sidebar">
                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="assets/img/blog/single_blog_1.png" alt=""/>
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="blog_details.html">
                                                    <h2>Google inks pact for new 35-storey office</h2>
                                                </a>
                                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                                    he earth it first without heaven in place seed it second morning saying.</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="assets/img/blog/single_blog_2.png" alt=""/>
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="blog_details.html">
                                                    <h2>Google inks pact for new 35-storey office</h2>
                                                </a>
                                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                                    he earth it first without heaven in place seed it second morning saying.</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="assets/img/blog/single_blog_3.png" alt=""/>
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="blog_details.html">
                                                    <h2>Google inks pact for new 35-storey office</h2>
                                                </a>
                                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                                    he earth it first without heaven in place seed it second morning saying.</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="assets/img/blog/single_blog_4.png" alt=""/>
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="blog_details.html">
                                                    <h2>Google inks pact for new 35-storey office</h2>
                                                </a>
                                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                                    he earth it first without heaven in place seed it second morning saying.</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="assets/img/blog/single_blog_5.png" alt=""/>
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="blog_details.html">
                                                    <h2>Google inks pact for new 35-storey office</h2>
                                                </a>
                                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                                    he earth it first without heaven in place seed it second morning saying.</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <nav class="blog-pagination justify-content-center d-flex">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a href="#" class="page-link" aria-label="Previous">
                                                        <i class="ti-angle-left"></i>
                                                    </a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">1</a>
                                                </li>
                                                <li class="page-item active">
                                                    <a href="#" class="page-link">2</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link" aria-label="Next">
                                                        <i class="ti-angle-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="blog_right_sidebar">
                                        <aside class="single_sidebar_widget search_widget">
                                            <form action="#">
                                                <div class="form-group">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" placeholder='Search Keyword'
                                                            onfocus="this.placeholder = ''"
                                                            onblur="this.placeholder = 'Search Keyword'"/>
                                                        <div class="input-group-append">
                                                            <button class="btns" type="button"><i class="ti-search"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit">Search</button>
                                            </form>
                                        </aside>

                                        <aside class="single_sidebar_widget post_category_widget">
                                            <h4 class="widget_title">Category</h4>
                                            <ul class="list cat-list">
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Resaurant food</p>
                                                        <p>(37)</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Travel news</p>
                                                        <p>(10)</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Modern technology</p>
                                                        <p>(03)</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Product</p>
                                                        <p>(11)</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Inspiration</p>
                                                        <p>21</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Health Care (21)</p>
                                                        <p>09</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </aside>

                                        <aside class="single_sidebar_widget popular_post_widget">
                                            <h3 class="widget_title">Recent Post</h3>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_1.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h3>From life was you fish...</h3>
                                                    </a>
                                                    <p>January 12, 2019</p>
                                                </div>
                                            </div>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_2.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h3>The Amazing Hubble</h3>
                                                    </a>
                                                    <p>02 Hours ago</p>
                                                </div>
                                            </div>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_3.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h3>Astronomy Or Astrology</h3>
                                                    </a>
                                                    <p>03 Hours ago</p>
                                                </div>
                                            </div>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_4.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h3>Asteroids telescope</h3>
                                                    </a>
                                                    <p>01 Hours ago</p>
                                                </div>
                                            </div>
                                        </aside>
                                        <aside class="single_sidebar_widget tag_cloud_widget">
                                            <h4 class="widget_title">Tag Clouds</h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">project</a>
                                                </li>
                                                <li>
                                                    <a href="#">love</a>
                                                </li>
                                                <li>
                                                    <a href="#">technology</a>
                                                </li>
                                                <li>
                                                    <a href="#">travel</a>
                                                </li>
                                                <li>
                                                    <a href="#">restaurant</a>
                                                </li>
                                                <li>
                                                    <a href="#">life style</a>
                                                </li>
                                                <li>
                                                    <a href="#">design</a>
                                                </li>
                                                <li>
                                                    <a href="#">illustration</a>
                                                </li>
                                            </ul>
                                        </aside>

                                        <aside class="single_sidebar_widget instagram_feeds">
                                            <h4 class="widget_title">Instagram Feeds</h4>
                                            <ul class="instagram_row flex-wrap">
                                                <li>
                                                    <a href="#">
                                                        <img class="img-fluid" src="assets/img/post/post_5.png" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img class="img-fluid" src="assets/img/post/post_6.png" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img class="img-fluid" src="assets/img/post/post_7.png" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img class="img-fluid" src="assets/img/post/post_8.png" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img class="img-fluid" src="assets/img/post/post_9.png" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img class="img-fluid" src="assets/img/post/post_10.png" alt=""/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </aside>


                                        <aside class="single_sidebar_widget newsletter_widget">
                                            <h4 class="widget_title">Newsletter</h4>

                                            <form action="#">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required/>
                                                </div>
                                                <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit">Subscribe</button>
                                            </form>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--================Blog Area =================--> */}
                </main>
                <footer>
                    {/* <!--? Footer Start--> */}
                    <div class="footer-area section-bg" data-background="assets/img/gallery/footer_bg.jpg">
                    <div class="container">
                            <div class="footer-top footer-padding">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                                        <div class="single-footer-caption mb-50">
                                            {/* <!-- logo --> */}
                                            <div class="footer-logo">
                                                <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                                            </div>
                                            <div class="footer-tittle">
                                                <div class="footer-pera">
                                                    <p class="info1">Receive updates and latest news direct from Simply enter.</p>
                                                </div>
                                            </div>
                                            <div class="footer-number">
                                                <h4><span>+564 </span>7885 3222</h4>
                                                <p>youremail@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                                        <div class="single-footer-caption mb-50">
                                            <div class="footer-tittle">
                                                <h4>Location </h4>
                                                <ul>
                                                    <li><a href="#">Advanced</a></li>
                                                    <li><a href="#"> Management</a></li>
                                                    <li><a href="#">Corporate</a></li>
                                                    <li><a href="#">Customer</a></li>
                                                    <li><a href="#">Information</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                                        <div class="single-footer-caption mb-50">
                                            <div class="footer-tittle">
                                                <h4>Explore</h4>
                                                <ul>
                                                    <li><a href="#">Cookies</a></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Proparties</a></li>
                                                    <li><a href="#">Licenses</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                        <div class="single-footer-caption mb-50">
                                            <div class="footer-tittle">
                                                <h4>Location</h4>
                                                <div class="footer-pera">
                                                    <p class="info1">Subscribe now to get daily updates</p>
                                                </div>
                                            </div>
                                            {/* <!-- Form --> */}
                                            <div class="footer-form">
                                                <div id="mc_embed_signup">
                                                    <form target="_blank" action="https:/spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                                        <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"/>
                                                        <div class="form-icon">
                                                            <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">
                                                                SIGN UP
                                                            </button>
                                                        </div>
                                                        <div class="mt-10 info"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-bottom">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col-xl-9 col-lg-8">
                                        <div class="footer-copy-right">
                                            <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https:/colorlib.com" target="_blank">Colorlib</a></p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4">
                                    
                                        <div class="footer-social f-right">
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="https:/www.facebook.com/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fas fa-globe"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    {/* <!-- Footer End--> */}
                </footer>
                {/* <!-- Scroll Up --> */}
                <div id="back-top" >
                    <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
                </div>


                    
            </body>
	);
}
 
export default Home;