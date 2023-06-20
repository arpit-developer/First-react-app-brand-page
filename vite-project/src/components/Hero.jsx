const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt hic, dolorum inventore mollitia sapiente distinctio voluptatibus numquam ab deleniti error aliquid quod non? Possimus culpa ullam officia beatae et?</p>
                <div className="hero-btn">
                    <button>Show Now</button>
                    <button className="secondary-btn ">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipakrt-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="product-image" />
            </div>
        </main>
    )
};
export default Hero;