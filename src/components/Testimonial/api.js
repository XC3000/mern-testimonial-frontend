import { instance } from "../../config";

export async function fetchTestimonials(id) {
  try {
    const { data } = await instance.get("/testimonial");
    return data;
  } catch (error) {
    console.log(error);
  }
}
