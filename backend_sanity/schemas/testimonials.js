export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "company",
            title: "Company",
            type: "string",
        },
        {
            name: "imageurl",
            title: "ImgUrl",
            type: "image",
            option: {
                hotspot: true, // look at documents for hotspot on sanity
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string",
            option: {
                hotspot: true, // look at documents for hotspot on sanity
            }
        },
    ],
}