import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Authors() {
    const testimonials = [
        // Todo: make it for ourselves
        {
            quote:
                "adityapandeyadp@gmail.com",
            name: "Aditya Dutt Pandey",
            designation: "12409188",
            src: "/a.jpeg",
        },
        {
            quote:
                "umyal06dixit@gmail.com",
            name: "Umyal Dixit",
            designation: "12417102",
            src: "/u.jpeg",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
