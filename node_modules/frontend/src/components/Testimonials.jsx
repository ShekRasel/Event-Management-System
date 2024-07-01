import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    // Testimonial data
    const testimonials = [
        {
            quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change",
            author: "Leslie Alexander",
            role: "Freelance React Developer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
        },
        {
            quote: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users",
            author: "Jacob Jones",
            role: "Digital Marketer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
        },
        {
            quote: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users",
            author: "Jenny Wilson",
            role: "UI/UX Designer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
        },
        {
            quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users",
            author: "Leslie Alexander",
            role: "Freelance React Developer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
        },
        {
            quote: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users",
            author: "Jacob Jones",
            role: "Digital Marketer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
        },
        {
            quote: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users",
            author: "Jenny Wilson",
            role: "UI/UX Designer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
        },
    ];

    // Settings for react-slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: false
    };

    return (
        <>
        <h1 className='text-center text-3xl sm:text-5xl mt-32 bold italic px-2'>
        See what our happy customers are saying
        </h1>
        <h2 className='text-center text-1xl sm:text-2xl mt-5 bold italic bg-slate-50 px-5'>
        meet their best experience and happy moments provided by us
        </h2>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50 sm:py-16 lg:py-6 text-4xl">
            <div className="max-w-6xl mx-auto text-center items-center text-2xl">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                            <p className="text-[20px] md:text-1xl leading-relaxed text-gray-900 font-pj px-2 md:px-14 italic">{testimonial.quote}</p>
                            <div className="flex items-center justify-center mt-4 py-16">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center">
                                    <img className="w-full h-full object-cover" src={testimonial.avatar} alt={testimonial.author} />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-900 font-pj">{testimonial.author}</p>
                                    <p className="text-sm text-gray-600 font-pj">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    );
};

export default Testimonials;
