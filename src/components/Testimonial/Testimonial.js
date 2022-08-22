import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import Spinner from "../Spinner";
import { fetchTestimonials } from "./api";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchTestimonials();
      setTestimonials(data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <section id="testimonial" class="testimonial-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center pb-10">
              <h4 class="title">Testimonial</h4>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="row testimonial-active">
              {loading && (
                <div class="d-flex justify-content-center w-100 mt-5">
                  <Spinner />
                </div>
              )}
              {testimonials.length > 0 &&
                testimonials.map((testimonial) => (
                  <div class="col-lg-4" key={testimonial._id}>
                    <div class="single-testimonial mt-30 mb-30 text-center">
                      <div class="testimonial-image">
                        <img
                          src={`${BASE_URL}/${testimonial.photo}`}
                          alt={testimonial.name}
                        />
                      </div>
                      <div class="testimonial-content">
                        <p class="text">{testimonial.description}</p>
                        <h6 class="author-name">{testimonial.name}</h6>
                        <span class="sub-title">{testimonial.post}</span>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div class="col-lg-4">
                <div class="single-testimonial mt-30 mb-30 text-center">
                  <div class="testimonial-image">
                    <img src="assets/images/author-3.jpg" alt="Author" />
                  </div>
                  <div class="testimonial-content">
                    <p class="text">
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                    </p>
                    <h6 class="author-name">Isabela Moreira</h6>
                    <span class="sub-title">CEO, GrayGrids</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-testimonial mt-30 mb-30 text-center">
                  <div class="testimonial-image">
                    <img src="assets/images/author-1.jpg" alt="Author" />
                  </div>
                  <div class="testimonial-content">
                    <p class="text">
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                    </p>
                    <h6 class="author-name">Fiona</h6>
                    <span class="sub-title">Lead Designer, UIdeck</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-testimonial mt-30 mb-30 text-center">
                  <div class="testimonial-image">
                    <img src="assets/images/author-2.jpg" alt="Author" />
                  </div>
                  <div class="testimonial-content">
                    <p class="text">
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                    </p>
                    <h6 class="author-name">Elon Musk</h6>
                    <span class="sub-title">CEO, SpaceX</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-testimonial mt-30 mb-30 text-center">
                  <div class="testimonial-image">
                    <img src="assets/images/author-4.jpg" alt="Author" />
                  </div>
                  <div class="testimonial-content">
                    <p class="text">
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness guaranteed!
                    </p>
                    <h6 class="author-name">Fajar Siddiq</h6>
                    <span class="sub-title">CEO, MakerFlix</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
