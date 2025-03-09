import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Authors() {
    const testimonials = [
        // Todo: make it for ourselves
        {
            quote:
                "adityapandeyadp@gmail.com",
            name: "Aditya Dutt Pandey",
            designation: "12409188",
            src: "https://media.licdn.com/dms/image/v2/D4D03AQG2_BgCnIfPtw/profile-displayphoto-shrink_400_400/B4DZV8bwXtHwAk-/0/1741549408332?e=1747267200&v=beta&t=jxRT5PMVhtSYBAiseO8K-T_rIgc-cF_nJgraLHzrrLY",
        },
        {
            quote:
                "umyal06dixit@gmail.com",
            name: "Umyal Dixit",
            designation: "12417102",
            src: "https://media.licdn.com/dms/image/v2/D4D03AQFBE4xffnM2ZA/profile-displayphoto-shrink_200_200/B4DZP6DbhFGkAY-/0/1735067024696?e=1747267200&v=beta&t=7wMqcVIUGC-FTaSHSqGI_XA--RbCfS01GW18VcWNey8",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
